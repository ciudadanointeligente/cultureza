import type { ImageMetadata } from "astro";

import rio from "../assets/cuentos/cuento-rio.jpg";
import huerta from "../assets/cuentos/cuento-huerta.jpg";
import bosque from "../assets/cuentos/cuento-bosque.jpg";

export type Categoria = "Niñeces" | "Juventud" | "Personas adultas";

export interface Cuento {
	slug: string;
	title: string;
	category: Categoria;
	country: string;
	excerpt: string;
	body: string[];
	image?: ImageMetadata;
	featured?: boolean;
	author?: string;
}

export const cuentos: Cuento[] = [
	{
		slug: "el-rio-que-nos-ensena-a-escuchar",
		title: "El río que nos enseña a escuchar",
		category: "Niñeces",
		country: "Colombia",
		featured: true,
		image: rio,
		excerpt:
			"Una tarde de verano el río se quedó sin voz y los niños del pueblo descubrieron que escucharlo era la única forma de devolverle el canto.",
		body: [
			"Cuando el calor llegó al pueblo, el río empezó a sonar distinto. Primero fue un murmullo, después un silencio largo que se metió entre las piedras. Los niños bajaron a la orilla con baldes y linternas, como si fueran exploradores de un territorio desconocido.",
			"Encontraron latas, bolsas y una cuerda vieja atrapada entre las ramas. También encontraron un nido de insectos que trabajaba sin descanso. Esa tarde entendieron que el río no estaba mudo: estaba pidiendo ayuda.",
			"Durante varias semanas volvieron con guantes, costales y la compañía de sus familias. Limpiaron la orilla, sembraron plantas nativas y aprendieron los nombres de los pájaros que regresaban. El agua empezó a sonar otra vez, primero bajito, después con fuerza.",
			"Ahora, cuando alguien se acerca al río, los niños del pueblo piden silencio. Dicen que el agua tiene historias que solo se escuchan cuando uno se queda quieto el tiempo suficiente.",
		],
	},
	{
		slug: "la-huerta-de-las-manos-juntas",
		title: "La huerta de las manos juntas",
		category: "Juventud",
		country: "México",
		featured: true,
		image: huerta,
		excerpt:
			"Un grupo de jóvenes convirtió un terreno baldío en una huerta comunitaria y aprendió que las plantas también crecen cuando alguien las cuida.",
		body: [
			"El terreno estaba lleno de escombros y nadie recordaba qué había antes ahí. Un grupo de jóvenes del barrio decidió que era un buen lugar para empezar. Limpiaron, removieron la tierra y dibujaron surcos con una cuerda y dos estacas.",
			"La primera cosecha no fue abundante, pero alcanzó para compartir una sopa en la plaza. Con el tiempo llegaron las compostas, los talleres de semillas y las vecinas que sabían cuándo sembrar sin mirar el calendario.",
			"La huerta también se volvió un lugar para hablar de otras cosas: del agua que falta, de los árboles que quedan, de las ganas de quedarse en el barrio. Cada planta tiene el nombre de quien la cuidó primero.",
			"Hoy el terreno ya no está baldío. Hay tomates, acelgas y un cartel pintado a mano que dice que la tierra, cuando se comparte, aprende a dar más.",
		],
	},
	{
		slug: "lo-que-el-bosque-guarda",
		title: "Lo que el bosque guarda",
		category: "Personas adultas",
		country: "Chile",
		featured: true,
		image: bosque,
		excerpt:
			"Entre araucarias y senderos, una vecina encontró en el bosque el lugar donde las historias de su familia seguían respirando.",
		body: [
			"Mi abuela decía que los bosques tienen memoria. Yo no le creía hasta que volví al pueblo después de muchos años y encontré el sendero que ella recorría cada mañana, todavía cubierto de hojas y de silencio.",
			"Caminé despacio, reconociendo los troncos que había dibujado de niña, las piedras donde nos sentábamos a merendar y el aroma de la tierra después de la lluvia. En una de las araucarias había una marca antigua, hecha con un cuchillo, que nadie había borrado.",
			"Esa tarde entendí que cuidar un bosque también es cuidar lo que contamos de él. Volví al pueblo con una libreta y empecé a recoger las historias de las vecinas: las plantas que curaban, los caminos que se perdían, las canciones que se cantaban para pedir lluvia.",
			"Ahora acompaño a las niñas y niños del pueblo a caminar por el sendero. Les pido que escuchen antes de hablar. El bosque, como mi abuela, tiene mucho que contar.",
		],
	},
	{
		slug: "la-semilla-de-la-abuela",
		title: "La semilla de la abuela",
		category: "Niñeces",
		country: "Perú",
		excerpt:
			"Cada primavera, la abuela guarda unas semillas de quinua y cuenta la historia de la mano que las sembró por primera vez.",
		body: [
			"Cada primavera, la abuela abre una caja de madera y saca un puñado de semillas de quinua. Dice que son las mismas que sembró su abuela, y que antes fueron de otra abuela más antigua, de un tiempo en que la lluvia llegaba puntual.",
			"Yo las observo caer entre sus dedos. Son pequeñas, duras y brillantes como piedritas. La abuela me pide que elija las mejores y que les hable bajito antes de sembrarlas.",
			"Cuando la planta crece, ella me recuerda que no estamos solos en la chacra. Hay insectos, raíces, vecinos que comparten el agua y nubes que deciden cuándo regresar. Sembrar, dice, es hacer un trato con todo eso.",
			"Este año me dejó hacer el primer surco. Al terminar, guardamos unas semillas para la próxima primavera. La caja vuelve a su lugar, pero la historia sigue creciendo.",
		],
	},
	{
		slug: "guardianes-del-humedal",
		title: "Guardianes del humedal",
		category: "Juventud",
		country: "Argentina",
		excerpt:
			"Los jóvenes del barrio limpiaron el humedal durante un verano y descubrieron que allí vivían más especies de las que imaginaban.",
		body: [
			"El humedal quedaba detrás de las canchas y nadie lo miraba dos veces. Un grupo de jóvenes decidió recorrerlo con una libreta y anotar todo lo que encontraba: juncos, caracoles, nidos escondidos entre las ramas.",
			"Descubrieron que el lugar era una casa enorme. Había aves que llegaban de lejos, ranas que cantaban de noche y peces diminutos que se movían entre las raíces. También había basura, mucha, traída por el viento y por el descuido.",
			"Organizaron jornadas de limpieza y invitaron a las escuelas. Pintaron carteles, armaron un sendero de piedras y aprendieron a explicar por qué un humedal no es un terreno vacío.",
			"Hoy el barrio lo llama el jardín de agua. Los jóvenes siguen yendo con sus libretas, ahora llenas de nuevas especies y de preguntas que todavía no tienen respuesta.",
		],
	},
	{
		slug: "el-canto-del-agua",
		title: "El canto del agua",
		category: "Personas adultas",
		country: "Bolivia",
		excerpt:
			"En el altiplano, una comunidad aprendió a leer el cielo y a cuidar el agua que baja de la montaña antes de que llegue la lluvia.",
		body: [
			"En el altiplano, el agua no se espera: se recibe. Las familias de la comunidad aprendieron a leer el color del cielo, el vuelo de las aves y el sonido del viento para saber cuándo preparar los canales.",
			"Durante generaciones cuidaron los ojos de agua de la montaña. Limpiaban las acequias, reparaban los muros de piedra y sembraban pasto en las laderas para que la tierra no se llevara el agua.",
			"Cuando llegó la sequía, las familias se organizaron para repartir lo que había. No fue fácil, pero nadie quedó afuera. Recordaron que el agua, como la palabra, solo tiene sentido cuando se comparte.",
			"Ahora los más jóvenes aprenden el mismo oficio con las manos en la tierra. El canto del agua sigue bajando de la montaña, y la comunidad sigue escuchándolo.",
		],
	},
	{
		slug: "la-casa-de-los-colibries",
		title: "La casa de los colibríes",
		category: "Niñeces",
		country: "Costa Rica",
		excerpt:
			"Una niña descubre que el jardín de su casa es una estación de paso para los colibríes y decide convertirlo en un refugio.",
		body: [
			"Una mañana, una niña vio un colibrí detenido frente a la ventana. Era tan pequeño que parecía un dibujo hecho con prisa. Volvió al día siguiente, y al otro, y pronto se acostumbró a esperarlo.",
			"Investigó qué flores le gustaban y empezó a sembrarlas en el jardín. Su familia la ayudó a colgar un bebedero y a dejar un rincón sin podar, para que los pájaros tuvieran dónde esconderse.",
			"Con el tiempo llegaron más colibríes, mariposas y abejas. La niña dibujó un mapa del jardín y anotó las horas en que cada visitante aparecía. Descubrió que su casa no era solo suya.",
			"Ahora comparte el mapa con sus compañeros de escuela. Les dice que un jardín puede ser una estación de paso, un comedor y una casa al mismo tiempo. Solo hay que dejar espacio para los demás.",
		],
	},
	{
		slug: "sembrar-memoria",
		title: "Sembrar memoria",
		category: "Juventud",
		country: "Guatemala",
		excerpt:
			"Un colectivo de jóvenes recupera las semillas de sus abuelos y con ellas siembra un huerto que también guarda la memoria del territorio.",
		body: [
			"Las semillas estaban guardadas en frascos, en el fondo de una cocina, con nombres escritos a lápiz. Los jóvenes del colectivo las encontraron mientras ordenaban la casa de una abuela que había fallecido.",
			"Decidieron sembrarlas en un terreno familiar y registrar cada paso. Algunas germinaron rápido; otras tardaron semanas. Cada brote traía una historia: la del año en que no llovió, la de la feria del pueblo, la de un viaje a la costa.",
			"El huerto se convirtió en un lugar de encuentro. Las personas mayores llegaban a reconocer sus semillas y contaban cómo se cocinaban. Los jóvenes grababan las voces y escribían las recetas.",
			"Hoy el colectivo reparte semillas y cuadernos. Dicen que sembrar es una forma de recordar, y que la memoria, cuando se comparte, nunca se termina.",
		],
	},
	{
		slug: "el-arbol-de-las-mil-voces",
		title: "El árbol de las mil voces",
		category: "Personas adultas",
		country: "Ecuador",
		excerpt:
			"Cuando el árbol más antiguo de la plaza enfermó, el barrio se organizó para cuidarlo y escuchar las historias que tenía para contar.",
		body: [
			"El árbol más antiguo de la plaza tenía una herida en el tronco y las hojas empezaban a caer antes de tiempo. Los vecinos se dieron cuenta el mismo día en que el barrio celebraba su fiesta anual.",
			"Convocaron a una reunión y armaron un plan. Llamaron a especialistas, removieron el cemento que cubría sus raíces y empezaron a regarlo con cuidado. Mientras trabajaban, cada persona contaba una historia del árbol.",
			"Una mujer recordó que su madre se refugió bajo su sombra el día en que llegó al barrio. Un niño contó que allí había aprendido a andar en bicicleta. Otro vecino dijo que el árbol era el único testigo de todas las asambleas.",
			"El árbol se recuperó lentamente. Ahora hay un cartel que explica cómo cuidarlo y una banca alrededor. El barrio descubrió que un árbol no solo da sombra: también guarda la memoria de quienes viven cerca.",
		],
	},
	{
		slug: "la-playa-que-aprendimos-a-cuidar",
		title: "La playa que aprendimos a cuidar",
		category: "Juventud",
		country: "Uruguay",
		excerpt:
			"Después de una tormenta, un grupo de estudiantes encontró la playa llena de plástico y decidió que ese no era el final de la historia.",
		body: [
			"La tormenta dejó la playa cubierta de troncos, algas y plástico. Los estudiantes llegaron temprano con bolsas y guantes, sin saber bien por dónde empezar. Al mediodía habían llenado más de veinte bolsas.",
			"Pero limpiar no era suficiente. Empezaron a investigar de dónde venía la basura y descubrieron que muchos residuos llegaban por los arroyos. Escribieron cartas, hicieron una campaña y hablaron con los comercios del barrio.",
			"Al verano siguiente instalaron carteles y organizaron una jornada abierta. La playa volvió a llenarse de gente, pero esta vez de vecinos que venían a cuidarla.",
			"Hoy los estudiantes dicen que aprendieron algo que no está en los libros: una playa no termina en la orilla. Lo que pasa en el barrio, en los arroyos y en las casas también llega al mar.",
		],
	},
	{
		slug: "el-jardin-de-la-escuela",
		title: "El jardín de la escuela",
		category: "Niñeces",
		country: "Chile",
		excerpt:
			"El patio de la escuela era solo cemento hasta que los niños pidieron un jardín y aprendieron a esperar sus primeras flores.",
		body: [
			"El patio de la escuela era una gran superficie de cemento. En verano, el calor subía y no había dónde sentarse a la sombra. Un grupo de niños preguntó si podían sembrar algo en una esquina.",
			"Con ayuda de sus profesores consiguieron tierra, macetas y semillas. Al principio parecía que nada iba a crecer. Regaban todos los días, miraban la tierra y anotaban cada cambio en un cuaderno.",
			"Cuando apareció el primer brote, la escuela entera fue a verlo. Después llegaron las flores, las abejas y una pequeña huerta. El patio empezó a tener otro sonido: el de las hojas moviéndose con el viento.",
			"Hoy los niños cuidan el jardín por turnos. Dicen que aprendieron a tener paciencia y que ahora el recreo también es un lugar para mirar de cerca la naturaleza.",
		],
	},
];

export const cuentosDestacados = cuentos.filter((cuento) => cuento.featured);
export const otrosCuentos = cuentos.filter((cuento) => !cuento.featured);

export const getCuento = (slug: string) => cuentos.find((cuento) => cuento.slug === slug);

export const storyUrl = (slug: string) => `/cuentos/${slug}/`;
