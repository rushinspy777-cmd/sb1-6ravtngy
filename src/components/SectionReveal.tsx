import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionRevealProps {
  children: ReactNode;
  delay?: number;
}

const SectionReveal = ({ children, delay = 0 }: SectionRevealProps) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1.0], // Custom cubic-bezier for premium feel
      }}
    >
      {children}
    </motion.div>
  );
};

export default SectionReveal;
