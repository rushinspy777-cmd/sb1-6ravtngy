import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CoverOld } from "./screens/Cover";
import { Homepage } from "./screens/Homepage";
import { CategoryPage } from "./screens/CategoryPage";
import { ProductDetail } from "./screens/ProductDetail";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/old" element={<CoverOld />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:category/:subCategory" element={<CategoryPage />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/outlet" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
