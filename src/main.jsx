//This is the file that uses JS to render all content into the index.html div called root.
// When app starts, it starts with index.html & then runs main.jsx. Then it loads index.css. And then it shows App
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

