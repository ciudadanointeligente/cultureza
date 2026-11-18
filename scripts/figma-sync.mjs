#!/usr/bin/env node
/**
 * Sincroniza assets y referencias desde Figma usando la REST API.
 *
 * Requiere en `.env`:
 *   FIGMA_TOKEN=...        (Personal access token con permiso de lectura de archivos)
 *   FIGMA_FILE_KEY=...
 *
 * Genera:
 *   src/assets/figma/*.png     imágenes del archivo (fotos, papel rasgado, etc.)
 *   docs/reference/*.png       render de cada frame a escala 1x
 *   docs/figma-nodes.json      árbol simplificado (nombre, tipo, bounds, rellenos)
 *
 * Uso: node scripts/figma-sync.mjs
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const ROOT = path.resolve(import.meta.dirname, "..");

async function loadEnv() {
	const raw = await readFile(path.join(ROOT, ".env"), "utf8").catch(() => "");
	const env = {};
	for (const line of raw.split("\n")) {
		const trimmed = line.trim();
		if (!trimmed || trimmed.startsWith("#") || !trimmed.includes("=")) continue;
		const i = trimmed.indexOf("=");
		env[trimmed.slice(0, i).trim()] = trimmed.slice(i + 1).trim();
	}
	return env;
}

const env = await loadEnv();
const token = env.FIGMA_TOKEN;
const fileKey = env.FIGMA_FILE_KEY;

if (!token || !fileKey) {
	console.error("Falta FIGMA_TOKEN o FIGMA_FILE_KEY en .env (ver .env.example).");
	process.exit(1);
}

const api = async (endpoint) => {
	const res = await fetch(`https://api.figma.com/v1${endpoint}`, {
		headers: { "X-Figma-Token": token },
	});
	if (!res.ok) {
		throw new Error(`${endpoint} → HTTP ${res.status}: ${(await res.text()).slice(0, 300)}`);
	}
	return res.json();
};

const slug = (name) =>
	name
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-zA-Z0-9]+/g, "-")
		.replace(/^-|-$/g, "")
		.toLowerCase()
		.slice(0, 48) || "sin-nombre";

const outImages = path.join(ROOT, "src/assets/figma");
const outRefs = path.join(ROOT, "docs/reference");
await mkdir(outImages, { recursive: true });
await mkdir(outRefs, { recursive: true });

console.log("→ Leyendo estructura del archivo…");
const file = await api(`/files/${fileKey}?depth=2`);
const pages = file.document.children ?? [];
const page =
	pages.find((p) => p.name.toLowerCase().includes("cultureza")) ??
	pages.find((p) => (p.children ?? []).some((n) => n.type === "FRAME" && /inicio/i.test(n.name)));

if (!page) throw new Error("No encontré la página 'WEB CULTUREZA'.");
const frames = (page.children ?? []).filter((n) => n.type === "FRAME");
console.log(`  Página: ${page.name}`);
console.log(`  Frames: ${frames.map((f) => `${f.name} (${f.id})`).join(", ")}`);

// Árbol detallado de los frames, para mapear imágenes a nombres de capa.
console.log("→ Leyendo capas de los frames…");
const ids = frames.map((f) => f.id).join(",");
const nodes = await api(`/files/${fileKey}/nodes?ids=${ids}&depth=12`);

const summary = [];
const imageUses = new Map(); // imageRef -> nombre de capa

const walk = (node) => {
	if (!node) return;
	const fills = node.fills ?? [];
	for (const fill of fills) {
		if (fill.type === "IMAGE" && fill.imageRef && !imageUses.has(fill.imageRef)) {
			imageUses.set(fill.imageRef, node.name);
		}
	}
	if (node.children) node.children.forEach(walk);
	summary.push({
		id: node.id,
		name: node.name,
		type: node.type,
		absoluteBoundingBox: node.absoluteBoundingBox,
		fills: fills.map((f) => ({ type: f.type, imageRef: f.imageRef, color: f.color })),
		style: node.style ? { fontFamily: node.style.fontFamily, fontSize: node.style.fontSize } : undefined,
	});
};

for (const frame of frames) {
	const node = nodes.nodes?.[frame.id]?.document;
	if (node) walk(node);
}

await writeFile(path.join(ROOT, "docs/figma-nodes.json"), JSON.stringify(summary, null, 2));
console.log(`  ${summary.length} capas → docs/figma-nodes.json`);

// Todas las imágenes del archivo (imageRef → URL temporal).
console.log("→ Descargando imágenes…");
const imageMap = await api(`/files/${fileKey}/images`);
const urls = imageMap.meta?.images ?? imageMap.images ?? {};
let downloaded = 0;

for (const [ref, name] of imageUses) {
	const url = urls[ref];
	if (!url) continue;
	const res = await fetch(url);
	if (!res.ok) {
		console.warn(`  ! ${name} (${ref}) → HTTP ${res.status}`);
		continue;
	}
	const buffer = Buffer.from(await res.arrayBuffer());
	const filename = `${slug(name)}-${ref.slice(0, 6)}.png`;
	await writeFile(path.join(outImages, filename), buffer);
	console.log(`  ✓ ${filename} (${Math.round(buffer.length / 1024)} kB)`);
	downloaded++;
}
console.log(`  ${downloaded} imágenes en src/assets/figma/`);

// Render de cada frame a 1x como referencia visual.
console.log("→ Renderizando frames de referencia…");
const render = await api(`/images/${fileKey}?ids=${ids}&format=png&scale=1`);
for (const frame of frames) {
	const url = render.images?.[frame.id];
	if (!url) continue;
	const res = await fetch(url);
	const buffer = Buffer.from(await res.arrayBuffer());
	const filename = `${slug(frame.name)}.png`;
	await writeFile(path.join(outRefs, filename), buffer);
	console.log(`  ✓ docs/reference/${filename} (${Math.round(buffer.length / 1024)} kB)`);
}

console.log("\nListo. Revisá docs/reference/ y src/assets/figma/.");
