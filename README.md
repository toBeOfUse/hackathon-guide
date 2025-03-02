# Hacker's Guide

This is a guide to building stuff at hackathons. It is intended to help beginners get their bearings and get ideas. It was originally written to help out people attending [KHE 2024](https://kent-hack-enough-2024.devpost.com/). It has since become a community project that aims to be useful to people attending similar events around the world. Contribute to it! Open a PR.

Install [Node.js](https://nodejs.org/en/download). Run `corepack enable` to enable [PNPM](https://pnpm.io/), `pnpm install` to install the dependencies, and `pnpm dev` to create a dev server that updates while you work. `pnpm build` creates a build of the site in the "dist" directory.

This project uses [MDX](https://mdxjs.com/) as its primary content format. The content is styled and componentized using [Tailwind CSS](https://tailwindcss.com/) and [shadcn/ui](https://ui.shadcn.com/). [Vite](https://vite.dev/) and [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) are responsible for the build.

But don't worry about any of that stuff if you don't want to! Just edit `src/Guide.mdx` and use the existing formatting style and things will magically work out.

Credit to [@coji's mdx-vite-example](https://github.com/coji/mdx-vite-example) for giving me an easy-to-use starting point for this repo.

## Embedding on your site

Just insert this into your site:

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
