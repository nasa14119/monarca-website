import { useToggleChange } from "./context";
import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export function SideMenuClose({
  className,
  ...rest
}: ComponentProps<"button">) {
  const change = useToggleChange();
  return (
    <button
      className={cn(
        "absolute right-2 top-2 grid place-items-center w-10 h-10",
        className,
      )}
      aria-label="Close"
      {...rest}
      onClick={() => change("closed")}
    >
      <span className="absolute rounded-2xl w-7 h-0.5 bg-white rotate-45"></span>
      <span className="absolute rounded-2xl w-7 h-0.5 bg-white -rotate-45"></span>
    </button>
  );
}
