import type { SUPORT_LOCALES } from "@lib/const";

export type LANGS = (typeof SUPORT_LOCALES)[number];
export type LocaleLabels = Record<LANGS, string>;
