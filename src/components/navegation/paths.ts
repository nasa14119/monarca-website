import type { navegation } from "@i18n/layouts/navegation";
import { LINK_PATHS } from "@lib/const";
export default {
  home: LINK_PATHS["HOME"],
  about: LINK_PATHS["ABOUT"],
  cause: LINK_PATHS["MONARCH"],
  gardens: LINK_PATHS["GARDENS"],
  oasis: LINK_PATHS["OASIS"],
  shrines: LINK_PATHS["SHRINES"],
} satisfies navegation["links-phone"];
