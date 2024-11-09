import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Favicon from "react-favicon";
import "./index.css";
import Calculator from "./Calculator";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Favicon url="/favicon.svg" />
    <Calculator />
  </StrictMode>
);
