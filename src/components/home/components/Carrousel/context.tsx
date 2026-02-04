import {
  createContext,
  useContext,
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type PropsWithChildren,
} from "react";
import type { CarrouselContext, CarrouselItem } from "./types.ts";
import { sleep } from "@/lib/utils.ts";
const context = createContext<CarrouselContext | null>(null);
type Props = {
  items: CarrouselItem[];
  idleSeconds: number;
  duration: number;
} & PropsWithChildren;
export function CarruselProvider({
  children,
  items,
  idleSeconds,
  duration,
}: Props) {
  const idleTime = useRef(idleSeconds * 1000);
  const [index, setIndex] = useState(0);
  const [next_index, setNextIndex] = useState(1);
  const [state, setState] = useState<CarrouselContext["state"]>("first");
  function mange_change() {
    const cache = new Set();
    async function animate(next_image: CarrouselItem) {
      if (!cache.has(next_image.img)) {
        cache.add(next_image.img);
        const loading = new Promise((res) => {
          const img = new Image();
          img.src = next_image.img;
          img.onload = res;
        });
        await loading;
      }
      return sleep(duration);
    }
    return animate;
  }
  const changeIndex = useEffectEvent(() => {
    setIndex((prev) => (prev + 1) % items.length);
    setNextIndex((prev) => (prev + 1) % items.length);
  });
  useEffect(() => {
    let isCanceled = false;
    const { promise: loadingFirst, resolve: resolveLoading } =
      Promise.withResolvers<void>();
    const img = new Image();
    img.src = items[0].img;
    img.onload = async () => {
      setState("idle");
      await sleep(idleTime.current);
      resolveLoading();
    };
    (async () => {
      await loadingFirst;
      const next_frame = mange_change();
      while (!isCanceled) {
        setState("hidden");
        await next_frame(items[next_index]);
        changeIndex();
        setState("idle");
        await sleep(idleTime.current);
      }
    })();
    return () => {
      isCanceled = true;
      img.onload = null;
    };
  }, []);
  return (
    <context.Provider
      value={{
        items,
        index,
        next_item: items[next_index],
        state,
      }}
    >
      {children}
    </context.Provider>
  );
}
export const useContextImage = () => {
  const ctx = useContext(context);
  if (!ctx || ctx === null) throw new Error("Can't access carrusel context");
  const { items, index } = ctx;
  return items[index];
};
export const useContextState = () => {
  const ctx = useContext(context);
  if (!ctx || ctx === null) throw new Error("Can't access carrusel context");
  const { state } = ctx;
  return state;
};
