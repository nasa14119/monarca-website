import type { MonarchsContent } from "@i18n/layouts/monarchs";
const ICONS: Record<keyof MonarchsContent["characteristics"]["boxes"], string> =
  {
    colors: "ri:palette-fill",
    time: "ri:alarm-fill",
    food: "ri:seedling-fill",
  };
export default ICONS;
