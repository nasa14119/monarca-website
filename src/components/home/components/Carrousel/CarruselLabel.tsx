import {
  useContextImage,
  useContextState,
} from "@/components/home/components/Carrousel/context";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
export function CarruselLabel() {
  const { label } = useContextImage();
  const state = useContextState();
  return (
    <span
      className={cn(
        styles["label"],
        "absolute top-18 left-2 w-50 h-12 flex justify-center items-center text-xl font-title rounded-btn text-white bg-primary-900 text-center",
      )}
      data-state={state}
    >
      <span>{label}</span>
    </span>
  );
}
