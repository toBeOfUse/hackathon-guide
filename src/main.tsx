import React from "react";
import Guide from "@/Guide.mdx";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import "@/index.css";

const app = (
  <React.StrictMode>
    <div className="max-w-[800px] mx-auto">
      <Guide />
    </div>
  </React.StrictMode>
);

export const createRoot = ViteReactSSG(app);
