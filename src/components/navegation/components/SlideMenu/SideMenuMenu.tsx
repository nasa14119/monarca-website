import { cn } from "@/lib/utils";
import { useToggleValue } from "./context";
import { type ComponentProps, type PropsWithChildren } from "react";
import { SideMenuClose } from "./SideMenuClose";
type Props = ComponentProps<"aside"> & PropsWithChildren;
export function Menu({ className, children, ...rest }: Props) {
  const state = useToggleValue();
  return (
    <aside
      data-state={state}
      className={cn(
        "fixed bg-dark-accent bottom-1 top-2 right-0 w-[80vw] z-50 text-white rounded-l-lg gap-4 shadow-lg p-5 max-w-75",
        // Animation
        "transition-transform ease-in-out",
        "data-[state=open]:translate-x-0",
        "data-[state=closed]:translate-x-full",
        "data-[state=open]:duration-500 data-[state=closed]:duration-300",
        className,
      )}
      {...rest}
    >
      <SideMenuClose />
      <div className="flex size-full flex-col justify-center items-center ">
        {children}
      </div>
    </aside>
  );
}
