import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import tsConfigPaths from "vite-tsconfig-paths";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import rehypeTailwind from "./plugins/rehype-tailwind";

export default defineConfig({
  plugins: [
    { enforce: "pre", ...mdx({ rehypePlugins: [rehypeTailwind] }) },
    react(),
    tailwindcss(),
    tsConfigPaths(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
