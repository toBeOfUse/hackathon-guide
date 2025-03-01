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

/**
 * Matches HTML header elements, like <h1>, <h2>, <h3>...
 */
const reactChildIsHeader = (c: ReactNode) =>
  !!c && typeof c === "object" && "type" in c && c.type.toString().match(/h\d/i);

/**
 * This component takes some HTML elements, like the ones that the Markdown in
 * MDX files is turned into, and turns them into an accordion. The first header
 * element (h1, h2, h3...) becomes the external label of the accordion. The rest
 * of the children become the content within.
 */
export function AccordionTransformer({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);
  const header = childArray.find(reactChildIsHeader);
  const normalChildren = childArray.filter((c) => c != header);
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>{header}</AccordionTrigger>
        <AccordionContent>{normalChildren}</AccordionContent>
      </AccordionItem>
    </Accordion>
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
 * MDX files is turned into, and turns them into a carousel. Each header becomes
 * the start of a new card within the carousel. Content after the header is
 * inserted into that card until the next header is found, creating a new card.
 */
export function CarouselTransformer({ children }: { children: ReactNode }) {
  const childArray = Children.toArray(children);
  if (!reactChildIsHeader(childArray[0])) {
    console.error("first child within the CarouselTransformer must be a heading");
    return <p>ERROR</p>;
  }

  const cards: { header: ReactNode; content: ReactNode[] }[] = [];

  for (const child of childArray) {
    if (reactChildIsHeader(child)) {
      cards.push({ header: child, content: [] });
    } else {
      cards.at(-1)!.content.push(child);
    }
  }

  return (
    <Carousel className="w-full sm:max-w-md md:max-w-lg mx-auto">
      <CarouselContent>
        {cards.map(({ header, content }, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  {header}
                  {content}
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
