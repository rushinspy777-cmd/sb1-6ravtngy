import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ReactLenis, useLenis } from "lenis/react";
import { CoverOld } from "./screens/Cover";
import { Homepage } from "./screens/Homepage";
import { CategoryPage } from "./screens/CategoryPage";
import { ProductDetail } from "./screens/ProductDetail";
import PageTransition from "./components/PageTransition";

const AppRoutes = () => {
  const location = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [location.pathname, lenis]);

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
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothWheel: true }}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ReactLenis>
  </StrictMode>,
);
