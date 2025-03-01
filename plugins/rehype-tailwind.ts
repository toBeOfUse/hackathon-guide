import { visit } from "unist-util-visit";
import { Root } from "hast";

// these are based on the shadcn typography examples:
// https://ui.shadcn.com/docs/components/typography
const tagsToTailwindClasses: Record<string, string> = {
  h1: "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-6",
  h2: "scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 my-4",
  h3: "scroll-m-20 text-2xl font-semibold tracking-tight my-2",
  h4: "scroll-m-20 text-xl font-semibold tracking-tight mb-2 mt-4",
  // using h5 for small text
  h5: "text-sm font-medium leading-none",
  p: "leading-7 [&:not(:first-child)]:mt-6",
  blockquote: "mt-6 border-l-2 pl-6 italic",
  ul: "ml-6 list-disc [&>li]:mt-2",
  a: "underline",
};

export default function rehypeTailwind() {
  return function (tree: Root) {
    visit(tree, "element", (node) => {
      node.properties.class = tagsToTailwindClasses[node.tagName] ?? "";

      // unrelated to tailwind, but i'm not making a separate plugin for it
      if (node.tagName === "a") {
        node.properties.target = "_blank";
      }
    });
  };
}
