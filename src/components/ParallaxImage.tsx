import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  offset?: number;
}

const ParallaxImage = ({ src, alt, className = "", offset = 50 }: ParallaxImageProps) => {
  const containerRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  const smoothYProgress = useSpring(scrollYProgress, springConfig);
  const y = useTransform(smoothYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={containerRef} className={`overflow-hidden relative bg-neutral-200 ${className}`}>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setIsLoaded(true)}
        initial={{ filter: "blur(20px)", scale: 1.2 }}
        animate={{ 
          filter: isLoaded ? "blur(0px)" : "blur(20px)",
          scale: isLoaded ? 1.1 : 1.2
        }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full h-full object-cover"
        style={{ y }}
      />
    </div>
  );
};

export default ParallaxImage;
