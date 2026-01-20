import type { LANGS } from "@types";
// Import langs
import en from "@i18n/en/navegation";
import es from "@i18n/es/navegation";
// paths and types
import type { navegation } from "@i18n/layouts/navegation";
import { order_desktop } from "@i18n/layouts/navegation";
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
export type ProyectLinks = {
  links: Record<keyof navegation["links-desktop"]["projects"], Link>;
  trigger: string;
};
export const getProjects = (currentLocale: LANGS): ProyectLinks => {
  const body = {
    en: en["links-desktop"]["projects"],
    es: es["links-desktop"]["projects"],
  }[currentLocale];
  const trigger = {
    en: en["links-desktop"]["trigger"],
    es: es["links-desktop"]["trigger"],
  }[currentLocale];
  const links = order_desktop.projects.reduce(
    (prev, key) => {
      if (!paths[key]) return prev;
      prev[key] = {
        body: body[key] ?? "null",
        path: paths[key],
      };
      return prev;
    },
    {} as ProyectLinks["links"],
  );
  return {
    links,
    trigger,
  };
};
type MainLinks = Record<keyof navegation["links-desktop"]["links"], Link>;
export const getMainLinks = (currentLocale: LANGS): MainLinks => {
  const body = {
    en: en["links-desktop"]["links"],
    es: es["links-desktop"]["links"],
  }[currentLocale];
  return order_desktop.links.reduce((prev, key) => {
    if (!paths[key]) return prev;
    prev[key] = {
      body: body[key] ?? "null",
      path: paths[key],
    };
    return prev;
  }, {} as MainLinks);
};
