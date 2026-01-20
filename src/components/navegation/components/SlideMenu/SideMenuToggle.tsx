import { SheetTrigger } from "@/components/ui/sheet";
import type { ComponentProps } from "react";

function Icon({ ...rest }: ComponentProps<"svg">) {
  return (
    <svg
      {...rest}
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.3999 11H6.5999C5.38488 11 4.3999 11.985 4.3999 13.2C4.3999 14.415 5.38488 15.4 6.5999 15.4H37.3999C38.6149 15.4 39.5999 14.415 39.5999 13.2C39.5999 11.985 38.6149 11 37.3999 11Z"
        fill="currentColor"
      ></path>
      <path
        d="M37.4001 19.8H14.5201C13.305 19.8 12.3201 20.785 12.3201 22C12.3201 23.2151 13.305 24.2 14.5201 24.2H37.4001C38.6151 24.2 39.6001 23.2151 39.6001 22C39.6001 20.785 38.6151 19.8 37.4001 19.8Z"
        fill="currentColor"
      ></path>
      <path
        d="M37.3999 28.6H25.0799C23.8649 28.6 22.8799 29.5849 22.8799 30.8C22.8799 32.015 23.8649 33 25.0799 33H37.3999C38.6149 33 39.5999 32.015 39.5999 30.8C39.5999 29.5849 38.6149 28.6 37.3999 28.6Z"
        fill="currentColor"
      ></path>
    </svg>
  );
}
export function Toggle() {
  return (
    <SheetTrigger asChild>
      <Icon />
    </SheetTrigger>
  );
}
