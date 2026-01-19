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
type LinksPhone = Record<keyof navegation["links-phone"], Link>;
export const getCurrentLinksPhone = (currentLocal: LANGS): LinksPhone => {
  const body = { en: en["links-phone"], es: es["links-phone"] }[currentLocal];
  return (Object.keys(paths) as Array<keyof LinksPhone>).reduce(
    (links, key) => {
      if (!paths[key]) return links;
      links[key] = {
        body: body[key] ?? "null",
        path: paths[key],
      };
      return links;
    },
    {} as LinksPhone,
  );
};
