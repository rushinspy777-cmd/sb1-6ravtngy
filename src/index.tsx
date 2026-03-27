import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoverOld } from "./screens/Cover";
import { Homepage } from "./screens/Homepage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/old" element={<CoverOld />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
