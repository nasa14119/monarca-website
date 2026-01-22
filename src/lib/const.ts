import type { LocaleLabels } from "@types";
interface Locales {
  readonly SUPORTED_LANGS: string[];
  readonly DEFAULT: Locales["SUPORTED_LANGS"][number];
}
export const LOCALES = {
  SUPORTED_LANGS: ["es", "en"],
  DEFAULT: "es",
} as const satisfies Locales;
export const SUPORT_LOCALES = LOCALES["SUPORTED_LANGS"];
export const DEFAULT_LOCALE = LOCALES["DEFAULT"];
export const LANGUAJE_LABELS: LocaleLabels = {
  es: "español",
  en: "english",
} as const;
export const HOME_CARROUSEL_CONTENT = [
  {
    img: "/imgs/HomeCarrousel/monarca_primer_plano.jpg",
    link: "/monarcas",
  },
  {
    img: "/imgs/HomeCarrousel/monarca_tronco_lleno.jpg",
    link: "/santuarios",
  },
  {
    img: "/imgs/HomeCarrousel/trabajando_jardin.jpeg",
    link: "/about",
  },
] as const satisfies {
  img: string;
  link: string;
}[];
