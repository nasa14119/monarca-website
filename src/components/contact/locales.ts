import type { LANGS } from "@types";
import es from "@i18n/es/contacto";
import en from "@i18n/en/contacto";
import type { Contact } from "@i18n/layouts/contacto";
function locale(currenLocale?: string): Contact {
  const key = currenLocale as LANGS;
  if (key === "en") return en;
  return es;
}
export default locale;
