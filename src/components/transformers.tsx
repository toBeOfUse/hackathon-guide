/**
 * This file has components that receive children like the HTML elements that
 * rehype outputs for Markdown and transforms them into cool things like
 * carousels and accordions.
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Children, ReactNode } from "react";

const reactChildIsTag = (c: ReactNode, tag: string) =>
  !!c && typeof c === "object" && "type" in c && c.type.toString() === tag;

const scanForTag = (tag: string) => (c: ReactNode) => reactChildIsTag(c, tag);

/**
 * This component takes some HTML elements, like the ones that the Markdown in
 * MDX files is turned into, and turns them into an accordion. The content
 * before the first hr (`---` in markdown) becomes the external label of the
 * accordion. The rest of the children become the content within.
 */
export function AccordionTransformer({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);
  const hrLocation = childArray.findIndex(scanForTag("hr"));
  const header = childArray.slice(0, hrLocation);
  const normalChildren = childArray.slice(hrLocation + 1);
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full border border-gray-200 px-4 rounded-lg my-4"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-sm">{header}</AccordionTrigger>
        <AccordionContent>{normalChildren}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export function PopoverTransformer({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);
  const header = childArray.find(scanForTag("h5"));
  const normalChildren = childArray.filter((c) => c != header);

  return (
    <div className="pt-6 flex justify-center">
      <Popover>
        <PopoverTrigger asChild>
          <Button className="cursor-pointer" variant="secondary">
            {header}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-80">{normalChildren}</PopoverContent>
      </Popover>
    </div>
  );
}

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

/**
 * This component takes some HTML elements, like the ones that the Markdown in
 * MDX files is turned into, and turns them into a carousel. Each <h3> becomes
 * the heading of a new card within the carousel. Content after the header is
 * inserted into that card until the next <h3> is found, creating a new card.
 */
export function CarouselTransformer({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);
  if (!reactChildIsTag(childArray[0], "h3")) {
    console.error("first child within the CarouselTransformer must be an h3");
    return <p>ERROR</p>;
  }

  const cards: { header: ReactNode; content: ReactNode[] }[] = [];

  for (const child of childArray) {
    if (reactChildIsTag(child, "h3")) {
      cards.push({ header: child, content: [] });
    } else {
      cards.at(-1)!.content.push(child);
    }
  }

  return (
    <Carousel className="w-full sm:max-w-md md:max-w-lg mx-auto">
      <CarouselContent className="h-full">
        {cards.map(({ header, content }, index) => (
          <CarouselItem key={index} className="h-auto">
            <Card className="h-full">
              <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                {header}
                {content}
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
