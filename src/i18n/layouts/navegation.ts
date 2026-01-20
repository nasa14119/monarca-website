export interface navegation {
  "links-phone": {
    home: string;
    about: string;
    cause: string;
    oasis: string;
    gardens: string;
    shrines: string;
  };
  "links-desktop": {
    trigger: string;
    projects: {
      gardens: string;
      oasis: string;
      shrines: string;
    };
    links: {
      home: string;
      about: string;
      cause: string;
    };
  };
}
type DesktopSections = keyof Pick<
  navegation["links-desktop"],
  "links" | "projects"
>;
type DesktopOrder = {
  [K in DesktopSections]: (keyof navegation["links-desktop"][K])[];
};
export const order_desktop: DesktopOrder = {
  links: ["home", "about", "cause"],
  projects: ["oasis", "gardens", "shrines"],
} as const;
export const LANGUAJE_LABELS = { es: "español", en: "english" } as const;
