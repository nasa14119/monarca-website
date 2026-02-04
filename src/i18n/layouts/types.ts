import type { navegation } from "./navegation";
type DesktopSections = keyof Pick<
  navegation["links-desktop"],
  "links" | "projects"
>;
export type DesktopOrder = {
  [K in DesktopSections]: (keyof navegation["links-desktop"][K])[];
};
