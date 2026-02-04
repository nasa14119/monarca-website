import type { ImageMetadata } from "astro";
import { getImage } from "astro:assets";

const imgsMedaData = import.meta.glob(
  "src/assets/sponsors/*.{png,jpg,jpeg,svg}",
  {
    eager: true,
  },
) as Record<string, { default: ImageMetadata }>;

const imgagesPromise = Promise.all(
  Object.values(imgsMedaData).map(({ default: src }) => getImage({ src })),
);
export default imgagesPromise;
