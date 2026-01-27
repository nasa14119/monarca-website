import type { Home } from "@i18n/layouts/home";

export type ProjectSectionItem = Home["proyect_section"]["cards"][number] & {
  /**
   * This a name from the astro-icons library
   */
  icon: string;
  link: string;
  img: string;
};
