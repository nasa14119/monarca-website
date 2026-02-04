import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import autoAlias from "astro-auto-alias";
import icon from "astro-icon";
import { LOCALES } from "./src/lib/const.ts";
const FALLBACK_TO_DEFAULT_LOCALE = Object.fromEntries(
  LOCALES.SUPORTED_LANGS.filter((locale) => locale !== LOCALES.DEFAULT).map(
    (locale) => [locale, LOCALES.DEFAULT],
  ),
);
// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: LOCALES.SUPORTED_LANGS,
    fallback: FALLBACK_TO_DEFAULT_LOCALE,
    defaultLocale: LOCALES.DEFAULT,
    routing: {
      [LOCALES.DEFAULT]: "/",
      fallbackType: "rewrite",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), autoAlias(), icon()],
});
