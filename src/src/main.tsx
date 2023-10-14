import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.tsx";
import "@css/app.scss";
import { ThemeProvider } from "./theme/theme-provider.tsx";
import ApplyToBody from "./hooks/apply-to-body.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ApplyToBody />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
