import type { MonarchsContent } from "@i18n/layouts/monarchs";
import butterfly from "@assets/imgs/life-butterfly.jpg";
import egg from "@assets/imgs/life-egg.jpg";
import larva from "@assets/imgs/life-caterpilar.jpg";
import pupa from "@assets/imgs/life-pupa.jpg";
const imgs: Record<
  keyof MonarchsContent["life_cycle"]["content"],
  ImageMetadata
> = {
  butterfly,
  egg,
  larva,
  pupa,
} as const;
export default imgs;
