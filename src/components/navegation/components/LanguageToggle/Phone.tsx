import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuSubTrigger,
} from "@components/ui/dropdown-menu.tsx";
import { LangIcon } from "./LangIcon";
import type { CurrentLocale, Link } from "../../types.ts";
type Props = {
  currentLocale: CurrentLocale;
};
import { format_links } from "./util.ts";
function LangItem({ link }: { link: Link }) {
  if (link.path === "#")
    return (
      <span className="lowercase block text-dark-accent/50 ">{link.label}</span>
    );
  return (
    <a href={link.path} className="text-dark-accent font-medium lowercase">
      {link.label}
    </a>
  );
}
export default function Phone({ currentLocale }: Props) {
  const links = format_links(currentLocale);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="size-7 absolute z-100 bottom-5 left-5 focus:bg-transparent focus:outline-0 p-0 bg-transparent border-none cursor-pointer flex items-center justify-center">
          <LangIcon className="size-7" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-white/80 border-none text-dark-accent capitalize min-w-16 mb-2"
      >
        <DropdownMenuGroup className="w-17 px-1 flex flex-col">
          {links.map((link) => (
            <DropdownMenuItem asChild key={link.path}>
              <LangItem link={link} />
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
