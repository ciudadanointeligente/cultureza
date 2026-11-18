# Sistema de diseño — Figma "Vane :) (copia)" / página "WEB CULTUREZA"

Fuente: panel Inspect de Dev Mode (Tailwind) + sección de color del archivo.
Archivo: https://www.figma.com/design/mKIhj4AErAiVXwOdslS9Fo/Vane-----copia-?node-id=2647-396

## Paleta real (hex del archivo)

| Token propuesto | Hex       | Uso en el diseño                                   |
| --------------- | --------- | -------------------------------------------------- |
| `ink`           | `#000000` | Titulares, texto principal, fondos de tarjeta       |
| `ink-soft`      | `#454545` | Texto secundario                                    |
| `olive`         | `#655846` | Gris cálido (texto sobre foto clara)                |
| `brand`         | `#7F3AED` | Morado: barras, destacados, CTA                     |
| `lime`          | `#B5E722` | Verde lima: fondos, acentos, botón newsletter       |
| `paper`         | `#F1F1F1` | Fondo de tarjetas/imágenes                         |
| `sun`           | `#F7CB67` | Amarillo (detalles)                                 |
| `alert`         | `#FF4C4D` | Rojo (detalles)                                     |
| `white`         | `#FFFFFF` | Fondo de página                                     |

> Ojo: el código Tailwind que genera Figma redondea a `lime-400`/`violet-600`/`zinc-700`.
> Son aproximaciones; usar **siempre los hex de arriba**.

## Tipografías

Las tres están en Google Fonts y se instalan como paquetes Fontsource (self-hosted).

| Familia              | Pesos usados            | Dónde                                        |
| -------------------- | ----------------------- | -------------------------------------------- |
| **REM**              | 400/500/600/700/800     | Titulares, párrafos, navegación, botones     |
| **Space Mono**       | 400                     | Preguntas/títulos tipo "¿Quiénes participan?" |
| **Geologica**        | 300/400/500/700/900     | Footer, bloque "Un proyecto de", formularios |

## Escala tipográfica (medida en frames de 1440 px)

| Rol                  | Tamaño   | Interlínea | Peso      | Familia    |
| -------------------- | -------- | ---------- | --------- | ---------- |
| Hero línea 2         | 128 px   | 110 px     | 800       | REM        |
| Hero línea 1         | 96 px    | 110 px     | 800       | REM        |
| Título de sección    | 48 px    | ~50 px     | 500       | REM        |
| Subtítulo / destacado| 36 px    | 40–55 px   | 400–700   | REM        |
| Párrafo grande       | 30 px    | 40 px      | 400       | REM        |
| Cuerpo / nav / botón | 20 px    | 24–28 px   | 400–900   | REM        |
| Footer               | 16–20 px | 16–24 px   | 400–900   | Geologica  |
| Legal                | 14 px    | 16 px      | 400       | Geologica  |

## Páginas (frames)

| Frame               | Tamaño      | Ruta propuesta                  |
| ------------------- | ----------- | ------------------------------- |
| `Inicio`            | 1440 × 2678 | `/`                             |
| `Más información`   | 1440 × 2678 | `/mas-informacion`              |
| `Sobre FCI`         | 1440 × 1916 | `/sobre-ciudadania-inteligente` |

Los tres frames comparten header y footer.

## Contenido compartido

- **Header**: logo "Ciudadanía Inteligente" + nav "Más información", "Sobre Ciudadanía Inteligente" + botón outline "Participar".
- **Footer**: tarjeta morada de newsletter ("Suscríbete al Newletter" — *sic* en el diseño), barra oscura con contacto `cultureza@ciudadaniai.org`, logos de Democracia Ambiental y Ciudadanía Inteligente, redes y línea legal.

## Recursos a exportar desde Figma

Icons/ilustraciones: logo Ciudadanía Inteligente (vector), íconos de redes, flechas.
Imágenes: `image 11` (2500×1667), `small-green-plant…png` (980×980), `torn paper 3` (814×243) y "2 más",
además de las fotos de los heroes y de las secciones.

## Referencia de implementación (Figma Make)

El proyecto Vite de Figma Make (`figma.com/make/WoSjq5GX7s7yXpBGWEI9jC`) sirvió como
segunda fuente de verdad para la home. Valores adoptados:

- **Contenedor**: `width: min(1244px, calc(100% - 64px)); margin: 0 auto` (mobile: `100% - 40px`).
- **Header**: alto 178 px; logo SVG 214×63; nav 20/28 con `gap: clamp(32px, 5vw, 74px)`;
  botón `padding: 19px 35px`, borde `#191a23`, radio 14.
- **Hero**: `min-height: 960px`, `padding-top: 97px`; H1 en dos spans:
  `clamp(68px, 6.25vw, 90px)` / `clamp(86px, 8.33vw, 120px)`, `letter-spacing: -0.05em`.
  Eyebrow 40 px; descripción 30/1.34 y ancho 672 px; deadline 35 px.
- **Collage**: arte absoluto `top: 95px; right: -100px; 720×560`, con dos formas
  enmascaradas (lima `#B5E722` y papel `#F1F1F1`) y la foto de manos a 620 px.
- **Tarjetas**: alto 242 px, radio 20, `box-shadow: 0 6px 0 #000` (hover 11 px y −5 px);
  título 40 px con `<br>`, `top: 44/left: 76`; link 30 px con chevron de 36 px.
- **Manifiesto**: `padding: 140px 70px 80px`, 38/55 px; primer bloque 720 px, segundo 590 px;
  "Cultureza" en Space Mono con máscara morada.
- **Newsletter**: `min(1338px, 100% - 96px)`, 140 px de alto, radio sólo arriba, grid 300px + 1fr.
- **Footer**: `#454545`, `padding: 50px max(64px, (100% - 1244px)/2) 20px`, grid 1fr auto 1fr.

Assets usados de esa versión: logo (negro y blanco), hoja, máscaras de papel/lima/fruta/destacado
y fotos de manos, fruta y planta (`src/assets/make/`).

