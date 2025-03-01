import React from "react";
import ReactDOM from "react-dom/client";
import Guide from "@/Guide.mdx";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import "@/index.css";

const app = (
  <React.StrictMode>
    <div className="max-w-prose mx-auto">
      <Guide />
    </div>
  </React.StrictMode>
);

if (typeof window !== "undefined") {
  ReactDOM.createRoot(document.getElementById("root")!).render(app);
}

export const createRoot = ViteReactSSG(app);
