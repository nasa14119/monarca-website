export interface Footer {
  mision: {
    title: string;
    content: string[];
  };
  btn: string;
  links: {
    title: string;
    subtile: string;
  };
}
import es from "../es/footer";
import en from "../en/footer";
import type { LANGS } from "@types";
export const FOOTERS_CONTENT = (currenLang?: string): Footer => {
  const LOCALE = currenLang as LANGS;
  if (LOCALE === "en") return en;
  return es;
};
