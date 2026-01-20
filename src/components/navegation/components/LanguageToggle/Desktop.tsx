import { LangIcon } from "@/components/navegation/components/LanguageToggle/LangIcon";
import { format_links } from "@/components/navegation/components/LanguageToggle/util";
import type { CurrentLocale } from "@/components/navegation/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type Props = {
  currentLocale: CurrentLocale;
};
export default function Desktop({ currentLocale }: Props) {
  const links = format_links(currentLocale);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={cn(
            "flex items-center justify-center size-8 group focus:bg-transparent focus:outline-0 rounded-full transition duration-150",
            "data-[state=open]:bg-dark-accent/20  data-[state=open]:text-dark-accent",
            "data-[state=closed]:bg-dark-accent  data-[state=closed]:text-white",
          )}
        >
          <LangIcon className="size-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-fit min-w-auto bg-dark-accent hover:bg-dark-accent/90 transition duration-100 ease p-3"
        align="end"
      >
        <DropdownMenuGroup className="w-20">
          {Object.values(links).map((link) => {
            console.log(link);
            const Element = link.path === "#" ? "span" : "a";
            return (
              <DropdownMenuItem asChild>
                <Element
                  className={cn(
                    "block cursor-pointer focus:bg-dark-accent focus:text-white text-white justify-center",
                    {
                      "opacity-50": link.path === "#",
                    },
                  )}
                  href={link.path}
                >
                  {link.label}
                </Element>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
