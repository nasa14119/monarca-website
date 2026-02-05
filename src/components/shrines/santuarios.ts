import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";
import type { ImageShrine, ShrineState } from "@components/shrines/types";
const imgsMedaData = import.meta.glob(
  "src/assets/imgs/shrines/*.{png,jpg,jpeg,svg,webp}",
  {
    eager: true,
  },
) as Record<string, { default: ImageMetadata }>;
// Parsing
const parsePathImage = (path: string): string =>
  path.split("/").pop() ?? "error";
type ImagePromise = { [path: string]: ImageShrine };
const imgagesPromises = Object.entries(imgsMedaData).reduce<ImagePromise>(
  (prev, [path, { default: src }]) => {
    const name = parsePathImage(path);
    prev[name] = getImage({ src });
    return prev;
  },
  {},
);
// Util
function getShrineImage(name: string): ImageShrine {
  if (name in imgagesPromises) {
    return imgagesPromises[name as keyof typeof imgagesPromises];
  }
  throw new Error(`Image ${name} not found`);
}
// Const shrines data
export default {
  michoacan: [
    {
      name: "El Rosario",
      location: "61467 Manzana Rancho Escondido, Mineral de Angangueo, Mich.",
      web: "https://venues.com.mx/venue/santuario-de-la-mariposa-monarca-el-rosario/",
      image: getShrineImage("rosario.webp"),
    },
    {
      name: "Sierra Chincua",
      location: "Santuario de la Mariposa Monarca Sierra Chincua, Mich.",
      web: "https://maps.app.goo.gl/4r3qHSwt4CZpshDh8",
      image: getShrineImage("sierra.jpg"),
    },
    {
      name: "Senguio",
      location: "61294 Senguio, Mich.",
      web: "https://maps.app.goo.gl/sXUoq5ENKibXADPu6",
      image: getShrineImage("senguio.jpg"),
    },
  ],
  "Estado de México": [
    {
      name: "Piedra Herrada",
      location:
        "T. C. (Toluca - Cdad. Altamirano) - Valle de Bravo, Valle de Bravo, Méx.",
      web: "https://maps.app.goo.gl/Xikk7JAEgNfxDQXF6",
      image: getShrineImage("herrada.jpg"),
    },
    {
      name: "El Capulín",
      location:
        "Carretera Federal Donato Guerra- Zitacuaro Michoacan km 11, El Capulín, Méx.",
      web: "https://maps.app.goo.gl/wM1FvAd9Q1tcQMk69",
      image: getShrineImage("chapulin.jpg"),
    },
    {
      name: "La mesa",
      location:
        "Localidad La Mesa, S/N, C.P. 50677, Municipio de San José del Rincón, Estado de México",
      web: "https://www.sanjosedelrincon.gob.mx/parador-y-santuario-mariposa-monarca-la-mesa/",
      image: getShrineImage("mesa.png"),
    },
  ],
} as ShrineState;
export const closeShrines = [
  "Estado de México",
  "Jiquipilco",
  "Corral de la Piedra",
  "Villa Allende",
  "Nevado de Toluca",
  "Atraulta",
];
