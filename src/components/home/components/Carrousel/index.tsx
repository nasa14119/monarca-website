import type { CarrouselItem } from "@/components/home/components/Carrousel/types";
import type { ComponentProps, CSSProperties } from "react";
import type { Home } from "@i18n/layouts/home.ts";
// Componets
import { CarruselItem } from "./CarruselItem";
import { CarruselProvider } from "./context";
import { CarruselLink } from "./CarruselLink";
import { CarruselLabel } from "./CarruselLabel";
// Styles
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";
interface Props extends ComponentProps<"div"> {
  duration?: number;
  idleSeconds?: number;
  locale: Home["hero_section"]["carrousel"];
  items: CarrouselItem[];
}
export function Carrusel({
  className,
  locale: { btn },
  duration = 1000,
  idleSeconds = 20,
  items,
}: Props) {
  return (
    <CarruselProvider
      items={items}
      duration={duration}
      idleSeconds={idleSeconds}
    >
      <div
        className={cn(className, styles["container"], "group")}
        style={{ "--carrusel-duration": `${duration}ms` } as CSSProperties}
      >
        <CarruselItem />
        <CarruselLabel />
        <CarruselLink body={btn} />
      </div>
    </CarruselProvider>
  );
}
