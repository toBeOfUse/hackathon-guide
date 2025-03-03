# A Quickstart Guide to Hackathon Projects

This is a guide to building stuff at hackathons, intended to help beginners get their bearings and get ideas. A lot of people out there are scared to attend hackathons; they might be interested, but they're not sure they'll know what they're doing. I wrote this guide to help with that problem, originally for [KHE 2024](https://kent-hack-enough-2024.devpost.com/). It has since become a community project that aims to be useful to people attending similar events around the world. If you think people might be scared to attend your event, simply embed this on your event's website. And if you have anything to add, contribute to it! Open a PR.

## Embedding this thing on your site

Just put something along these lines in your site's HTML:

```html
<iframe
  src="https://tobeofuse.github.io/hackathon-guide/"
  frameborder="0"
  style="
    width: 100%;
    max-width: 800px;
    height: 600px;
    display: block;
    border: 1px solid #ddd;
    border-radius: 10px;
    margin: 0 auto;
  "
></iframe>
```

Customize the CSS to fit your needs.

If you're comfortable with a little bit more (simple, vanilla) JavaScript, you could show and hide the guide iframe like this:

```html
<script>
  function toggleHackathonGuide(event) {
    const guide = document.getElementById("hackathon-guide");
    if (guide.style.height === "0px") {
      guide.style.height = "600px";
    } else {
      guide.style.height = "0px";
    }
  }
</script>
<div
  style="
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
        border-radius: 10px;
        border: 1px solid #ddd;
        padding: 5px;
      "
>
  <button
    style="font-family: sans-serif; cursor: pointer; display: block; margin: 15px auto 0"
    onclick="toggleHackathonGuide(event)"
  >
    Open Hackathon Guide
  </button>
  <iframe
    src="https://tobeofuse.github.io/hackathon-guide/"
    id="hackathon-guide"
    frameborder="0"
    style="width: 100%; height: 0px; transition: height 0.5s ease-out"
  ></iframe>
</div>
```

^ This works out-of-the-box, but you're even more likely to want to style this one differently to match your site.

## Contributing

Honestly, you can literally just edit `src/Guide.mdx` within the Github web text editor interface to update the content; Github makes it easy to put those changes in a PR. If there are any reasonably small mistakes in the resulting markup, I will simply fix them. If you have a more ambitious change in mind, or if you just want to see how the page generator works, read on:

Install [Node.js](https://nodejs.org/en/download). Run `corepack enable` to enable [PNPM](https://pnpm.io/), `pnpm install` to install the dependencies, and `pnpm dev` to create a dev server that updates while you work. `pnpm build` creates a build of the site in the "dist" directory.

This project uses [MDX](https://mdxjs.com/) as its primary content format. The content is styled and componentized using [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/). [Vite](https://vite.dev/) and [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) are responsible for the build.

Credit to [@coji's mdx-vite-example](https://github.com/coji/mdx-vite-example) for giving me an easy-to-use starting point for this repo.
