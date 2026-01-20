import type { CurrentLocale, Link } from "../../types";
import { SUPORT_LOCALES } from "@types";
import { LANGUAJE_LABELS } from "@i18n/layouts/navegation";
/**
 * Format paths to be redirection of same page but in the desire language
 * The current path is mark as #
 */
export function format_links({
  currentPath,
  currentLocale,
}: CurrentLocale): Link[] {
  const has_locale = SUPORT_LOCALES.some((locale) =>
    currentPath.startsWith(`/${locale}`),
  );
  const new_link = currentPath.split("/").filter(Boolean);
  if (has_locale) {
    new_link.shift();
  }
  const link_to = new_link.join("/");
  return SUPORT_LOCALES.map((locale) => {
    const label = LANGUAJE_LABELS[locale];
    if (locale === currentLocale) return { label, path: "#" };
    if (locale === "es") return { label, path: "/" + link_to };
    const path = `/${locale}/${link_to}`;
    return { path, label };
  });
}
