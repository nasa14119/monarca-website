export type CarrouselItem = {
  img: string;
  link: string;
  label: string;
};
export type CarrouselContext = {
  items: CarrouselItem[];
  state: "idle" | "hidden" | "first";
  next_item: CarrouselItem;
  index: number;
};
