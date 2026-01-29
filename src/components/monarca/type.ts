import type { MonarchsContent } from "@i18n/layouts/monarchs";
export type LifeContentKeys = keyof MonarchsContent["life_cycle"]["content"];
export type LifeCycleItem = {
  [K in LifeContentKeys]: { img: ImageMetadata; body: string[] };
};
export type LifeCycleItems = LifeCycleItem[];
