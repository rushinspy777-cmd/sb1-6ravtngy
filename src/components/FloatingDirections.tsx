import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from 'lucide-react';

export const FloatingDirections = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after 400px of scrolling
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDirections = (e: React.MouseEvent) => {
    e.preventDefault();
    const address = "Via San Pio X, 63, 84043 Agropoli SA, Italy";
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 30 }}
          whileHover={{ 
            scale: 1.05,
            backgroundColor: "#1765cc",
            boxShadow: "0 12px 30px rgba(26, 115, 232, 0.5)"
          }}
          whileTap={{ scale: 0.95 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          onClick={handleDirections}
          className="fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-[#1a73e8] text-white px-6 py-4 sm:px-8 sm:py-4 rounded-full shadow-[0_8px_25px_rgba(26,115,232,0.4)] group cursor-pointer overflow-hidden border-none"
          aria-label="Ottieni indicazioni"
        >
          {/* Subtle Ripple/Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          <div className="relative flex items-center gap-3">
            <Navigation className="w-5 h-5 fill-white" />
            <span className="font-sans text-[14px] font-bold tracking-tight uppercase">
              Ottieni indicazioni
            </span>
          </div>

          {/* Clean shine effect */}
          <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-[-25deg] group-hover:left-[150%] transition-all duration-[800ms] ease-in-out" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
