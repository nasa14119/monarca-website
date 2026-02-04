import type { ProjectSectionItem } from "@/components/home/types";
export const projectSectionImages = import.meta.glob(
  "@assets/imgs/projectsSection/*.{png,jpg,jpeg,webp}",
  { eager: true },
) as Record<string, { default: ImageMetadata }>;
// ! Warining the img path must be from /src/** this is a glob key
export const projectSectionItemsConst = [
  {
    icon: "ri:flower-fill",
    link: "/jardines",
    img: "/src/assets/imgs/projectsSection/jardin_ayudando_agro.jpg",
  },
  {
    icon: "ri:building-fill",
    link: "/oasis",
    img: "/src/assets/imgs/projectsSection/jardin_oasis.jpeg",
  },
] as const satisfies {
  icon: ProjectSectionItem["icon"];
  link: ProjectSectionItem["link"];
  img: ProjectSectionItem["img"];
}[];
import Icon from "@assets/icons/doble_caret.svg";
import primary from "@assets/imgs/red_flower_monarch.jpeg";
import secondary from "@assets/imgs/monarch_horizontal.webp";
export const relevanceSectonAssets = {
  Icon,
  imgs: {
    primary: primary,
    extra: secondary,
  },
} as const;
