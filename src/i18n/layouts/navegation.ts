import type { DesktopOrder } from "@i18n/layouts/types";

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
export const order_desktop: DesktopOrder = {
  links: ["home", "about", "cause"],
  projects: ["oasis", "gardens", "shrines"],
} as const;
