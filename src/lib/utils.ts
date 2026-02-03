import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const twTheme = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-family": ["font-title", "font-main"],
      "text-alignment": ["text-right", "text-center", "text-left"],
      "text-color": [
        "text-primary",
        "text-secondary",
        "text-accent",
        "text-primary-900",
        "text-primary-200",
        "text-dark-accent",
      ],
      "font-size": ["text-header"],
    },
  },
});
export function cn(...inputs: ClassValue[]) {
  return twTheme(clsx(inputs));
}
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
export function makeTitle(str: string) {
  const arr = str.split("");
  const firstLetter = str.search(/[a-zA-Z]/);
  const formatArray = arr.map((l, i) =>
    i === firstLetter ? l.toUpperCase() : l.toLowerCase(),
  );
  return formatArray.join("");
}
