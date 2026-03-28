import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export const StickyUSPHeader = (): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setHasScrolled(scrollPosition > 100);
      setIsVisible(scrollPosition > 150 && scrollPosition < 600);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-20 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-b border-neutral-200/30 shadow-ambient"
        >
          <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-3">
            <div className="flex items-center justify-between gap-4">
              <div className="text-sm md:text-base font-medium text-neutral-900">
                Spedizione Gratuita sopra <span className="font-bold">€5.000</span>
              </div>
              <div className="flex items-center gap-6 text-xs md:text-sm text-neutral-600">
                <span className="hidden sm:inline">Garanzia 5 anni</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Made in Italy</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="ml-auto text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ChevronDown className="w-4 h-4 rotate-180" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
