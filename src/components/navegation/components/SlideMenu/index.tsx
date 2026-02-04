import { Toggle } from "./SideMenuToggle";
// import { Menu } from "./SideMenuMenu";
// import { Overlay } from "./SideMenuOverlay";
import type { ComponentProps, PropsWithChildren } from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

type Props = PropsWithChildren & ComponentProps<"aside">;
export function SideMenu({ children, ...rest }: Props) {
  return (
    <Sheet>
      <Toggle />
      <SheetContent className="rounded-l-lg w-[80vw] max-w-75 p-5">
        {children}
      </SheetContent>
    </Sheet>
  );
}
