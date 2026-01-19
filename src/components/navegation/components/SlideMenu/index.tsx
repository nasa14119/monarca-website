import { SideMenuProvider } from "./context";
import { Toggle } from "./SideMenuToggle";
import { Menu } from "./SideMenuMenu";
import { Overlay } from "./SideMenuOverlay";
import type { ComponentProps, PropsWithChildren } from "react";

type Props = PropsWithChildren & ComponentProps<"aside">;
export function SideMenu({ ...rest }: Props) {
  return (
    <SideMenuProvider>
      <Overlay />
      <Menu {...rest} />
      <Toggle />
    </SideMenuProvider>
  );
}
