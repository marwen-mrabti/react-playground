import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import App from "./App";
import ThemeProvider from "./context/theme-context";
import "./index.css";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
