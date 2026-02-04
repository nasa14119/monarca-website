import {
  useContextImage,
  useContextState,
} from "@/components/home/components/Carrousel/context";
import { cn } from "@/lib/utils";
import styles from "./styles.module.css";
type Props = {
  body: string;
};
export function CarruselLink({ body }: Props) {
  const { link } = useContextImage();
  const state = useContextState();
  return (
    <a
      href={link}
      className={cn(
        styles["link"],
        "absolute bottom-5 right-2 w-50 h-15 flex justify-center items-center text-xl font-title rounded-btn text-white bg-primary-900 text-center",
      )}
      data-state={state}
    >
      <span>{body}</span>
    </a>
  );
}
