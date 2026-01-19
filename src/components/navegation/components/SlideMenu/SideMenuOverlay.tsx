import { useToggleChange, useToggleValue } from "./context";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function Overlay({ className }: ComponentProps<"div">) {
  const state = useToggleValue();
  const change = useToggleChange();
  return (
    <div
      className={cn(className, "fixed z-40 inset-0", {
        hidden: state != "open",
      })}
      onClick={() => change("closed")}
    ></div>
  );
}
