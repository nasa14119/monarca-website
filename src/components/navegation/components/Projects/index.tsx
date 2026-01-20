import type { ProyectLinks } from "@/components/navegation/links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
type Props = {
  links: ProyectLinks;
};
import { Caret } from "./components/Caret";

export function Projects({ links }: Props) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={
            "flex items-center group focus:bg-transparent focus:outline-0"
          }
        >
          <span className="dropTrigger select-none">{links.trigger}</span>
          <Caret
            className={
              "size-5 group-data-[state=open]:-rotate-90 transition ease-out duration-300"
            }
          />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-50 bg-dark-accent hover:bg-dark-accent/90 transition duration-100 ease p-3"
        align="end"
      >
        <DropdownMenuGroup>
          {Object.values(links.links).map((link) => (
            <DropdownMenuItem asChild>
              <a
                className="block cursor-pointer focus:bg-dark-accent focus:text-white text-white"
                href={link.path}
              >
                {link.body}
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
