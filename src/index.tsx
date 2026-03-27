import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { CoverOld } from "./screens/Cover";
import { Homepage } from "./screens/Homepage";
import { CategoryPage } from "./screens/CategoryPage";
import { ProductDetail } from "./screens/ProductDetail";
import PageTransition from "./components/PageTransition";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Homepage /></PageTransition>} />
        <Route path="/old" element={<PageTransition><CoverOld /></PageTransition>} />
        <Route path="/:category" element={<PageTransition><CategoryPage /></PageTransition>} />
        <Route path="/:category/:subCategory" element={<PageTransition><CategoryPage /></PageTransition>} />
        <Route path="/product/:id" element={<PageTransition><ProductDetail /></PageTransition>} />
        <Route path="/outlet" element={<PageTransition><CategoryPage /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </StrictMode>,
);
