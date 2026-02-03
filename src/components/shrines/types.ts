import type { GetImageResult } from "astro";
export type ImageShrine = Promise<GetImageResult>;

export type Shrine = {
  name: string;
  location: string;
  image: ImageShrine;
  web: string;
};
export type Shrines = Shrine[];
export type ShrineState = Record<string, Shrines>;
