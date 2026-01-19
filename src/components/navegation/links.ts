import type { LANGS } from "@types";
// Import langs
import en from "@i18n/en/navegation";
import es from "@i18n/es/navegation";
// paths and types
import type { navegation } from "@i18n/layouts/navegation";
import paths from "@/components/navegation/paths";
type Link = {
  path: string;
  body: string;
};
type Links = Record<keyof navegation["links"], Link>;
export const getCurrentLinks = (currentLocal: LANGS): Links => {
  const body = { en: en["links"], es: es["links"] }[currentLocal];
  return (Object.keys(paths) as Array<keyof Links>).reduce((links, key) => {
    links[key] = {
      body: body[key],
      path: paths[key],
    };
    return links;
  }, {} as Links);
};
