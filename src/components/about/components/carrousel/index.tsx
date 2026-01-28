import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { CarouselApi } from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight } from "lucide-react";
import images from "./reconocimientos.json";
export function CarouselAbout({ content }: { content: string[] }) {
  const [api, setApi] = React.useState<CarouselApi>();
  return (
    <Carousel
      className="w-full flex flex-col"
      setApi={setApi}
      opts={{
        loop: true,
      }}
    >
      <CarouselContent>
        {images.map(({ img: src }, i) => (
          <CarouselItem key={src}>
            <div className="w-full aspect-video rounded-lg overflow-hidden md:h-fit relative">
              <span className="absolute bottom-5 leading-4 left-2 rounded-lg p-2 bg-primary text-white w-1/2 font-semibold capitalize text-sm">
                {content[i] ?? "Missing"}
              </span>
              <img src={src} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <div className="flex items-center justify-center py-2 text-primary gap-2">
        <button
          className="bg-secondary/20 rounded-sm aspect-square "
          onClick={() => {
            api?.scrollPrev();
          }}
        >
          <ChevronLeft className="size-8" />
        </button>
        <button
          className="bg-secondary/20 rounded-sm aspect-square"
          onClick={() => {
            api?.scrollNext();
          }}
        >
          <ChevronRight className="size-8" />
        </button>
      </div>
    </Carousel>
  );
}
