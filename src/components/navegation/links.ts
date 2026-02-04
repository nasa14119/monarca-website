import type { LANGS } from "@types";
import { DEFAULT_LOCALE, LOCALES } from "@lib/const";
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
function getLocaleContent(
  currentLocale: LANGS,
  querry: (content: navegation) => any,
) {
  const Locales: Partial<Record<LANGS, navegation>> = { en, es };
  // fallback to default
  const content = Locales[currentLocale] ?? Locales[DEFAULT_LOCALE];
  if (!content)
    throw new Error(
      `Try to access ${currentLocale} fail \nMissing navigation file`,
    );
  return querry(content);
}
type LinksPhone = Record<keyof navegation["links-phone"], Link>;
export const getCurrentLinksPhone = (currentLocale: LANGS): LinksPhone => {
  const body = getLocaleContent(
    currentLocale,
    (content) => content["links-phone"],
  );
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
  const body = getLocaleContent(
    currentLocale,
    (content) => content["links-desktop"]["projects"],
  );
  const trigger = getLocaleContent(
    currentLocale,
    (content) => content["links-desktop"]["trigger"],
  );
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
  const body = getLocaleContent(
    currentLocale,
    (content) => content["links-desktop"]["links"],
  );
  return order_desktop.links.reduce((prev, key) => {
    if (!paths[key]) return prev;
    prev[key] = {
      body: body[key] ?? "null",
      path: paths[key],
    };
    return prev;
  }, {} as MainLinks);
};
