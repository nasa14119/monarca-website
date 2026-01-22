import {
  useContextImage,
  useContextState,
} from "@/components/home/components/Carrousel/context";
import styles from "./styles.module.css";
import { cn } from "@/lib/utils";
export function CarruselItem() {
  const { img, link } = useContextImage();
  const state = useContextState();
  return (
    <div className={cn("size-full overflow-hidden", styles["border"])}>
      <img
        src={img}
        className={cn(
          styles["img"],
          "h-full w-auto object-cover group-hover:scale-105 transition ease duration-1000 ease-out",
        )}
        data-state={state}
      />
      <div
        className={cn(
          "absolute size-full bg-primary-900/20 backdrop-blur-[1px] inset-0",
          styles["border"],
        )}
      ></div>
      <a
        href={link}
        className={cn(
          "absolute inset-0 data-[state=hidden]:pointer-events-none",
        )}
        data-state={state}
      ></a>
    </div>
  );
}
