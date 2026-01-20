import type { CurrentLocale } from "@/components/navegation/types";
import { SideMenu } from "./SlideMenu";
import ToggleLangPhone from "./LanguageToggle/Phone";
import { getCurrentLinksPhone } from "@/components/navegation/links";
import { getRelativeLocaleUrl } from "astro:i18n";
type Props = {
  currentLocale: CurrentLocale;
};
export function HamburguerMenu({ currentLocale }: Props) {
  const links = getCurrentLinksPhone(currentLocale.currentLocale);
  const linkRelative = (path: string) =>
    getRelativeLocaleUrl(currentLocale.currentLocale, path);
  return (
    <div className="md:hidden relative">
      <SideMenu>
        <ToggleLangPhone currentLocale={{ ...currentLocale }} />
        <ul className="flex flex-col h-full justify-center gap-y-2">
          {Object.values(links).map((link) => {
            return (
              <li
                className="font-medium text-xl text-right  w-full px-2 py-2 rounded-sm font-title"
                key={link.path}
              >
                <a href={linkRelative(link.path)} aria-label={link.body}>
                  {link.body}
                </a>
              </li>
            );
          })}
        </ul>
      </SideMenu>
    </div>
  );
}
