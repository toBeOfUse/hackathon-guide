import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/App.mdx";
import "@/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <div className="max-w-prose mx-auto">
      <App />
    </div>
  </React.StrictMode>
);
