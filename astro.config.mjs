import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import autoAlias from "astro-auto-alias";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  i18n: {
    locales: ["es", "en"],
    fallback: {
      en: "es",
    },
    defaultLocale: "es",
    routing: {
      es: "/",
      fallbackType: "rewrite",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [react(), autoAlias(), icon()],
});