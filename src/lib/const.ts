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
