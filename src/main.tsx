import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.mdx";
import { ViteReactSSG } from "vite-react-ssg/single-page";
import "@/index.css";

const app = (
  <React.StrictMode>
    <div className="max-w-prose mx-auto">
      <App />
    </div>
  </React.StrictMode>
);

if (typeof window !== "undefined") {
  ReactDOM.createRoot(document.getElementById("root")!).render(app);
}

export const createRoot = ViteReactSSG(app);
