import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  offset?: number;
}

const ParallaxImage = ({ src, alt, className = "", offset = 50 }: ParallaxImageProps) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover scale-110" // scale to avoid edges
        style={{ y }}
      />
    </div>
  );
};

export default ParallaxImage;
