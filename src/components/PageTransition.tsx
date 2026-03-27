import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] }}
      className="bg-[#FDFCFB]" // Off-white background from Phase 1
    >
      {/* Black overlay for "fade-through-black" effect */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "#000",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      {children}
    </motion.div>
  );
};

export default PageTransition;
