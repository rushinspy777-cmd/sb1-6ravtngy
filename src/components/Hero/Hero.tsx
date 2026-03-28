import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Plus } from "lucide-react";
import { Link } from "react-router-dom";

import { HERO_SLIDES as slides, PRODUCTS } from "../../constants/data";
import type { Hotspot as HotspotType } from "../../constants/data";

const Hotspot = ({ x, y, productId }: HotspotType) => {
  const product = PRODUCTS.find((p) => p.id === productId);
  const [isHovered, setIsHovered] = useState(false);

  if (!product) return null;

  return (
    <div
      className="absolute z-30"
      style={{ left: `${x}%`, top: `${y}%` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button className="relative flex items-center justify-center w-8 h-8 group pointer-events-auto">
        <span className="absolute inset-0 rounded-full bg-white/20 animate-ping group-hover:bg-white/40 transition-colors" />
        <span className="relative flex items-center justify-center w-4 h-4 rounded-full bg-white text-neutral-900 shadow-xl group-hover:scale-125 transition-transform duration-300">
          <Plus className="w-3 h-3" />
        </span>
      </button>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl pointer-events-none"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-white/60 uppercase tracking-widest font-semibold">{product.category}</span>
              <h4 className="text-white text-sm font-medium leading-tight">{product.name}</h4>
              <p className="text-white text-xs font-light mt-1">€{product.price.toLocaleString()}</p>
              <div className="mt-2 text-[10px] text-white font-medium border-b border-white/20 pb-0.5 inline-block self-start">
                Visualizza Prodotto
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export const Hero = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const springY = useSpring(y, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 7000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: {
      opacity: 0,
    },
    center: {
      zIndex: 1,
      opacity: 1,
    },
    exit: {
      zIndex: 0,
      opacity: 0,
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
    exit: { opacity: 0 },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as any,
      },
    },
    exit: { opacity: 0, y: -20 },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1] as any,
      },
    },
  };

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            opacity: { duration: 1.5, ease: "easeInOut" },
          }}
          className="absolute inset-0 w-full h-full overflow-hidden"
        >
          <div className="absolute inset-0 hero-gradient z-10" />

          {/* Ken Burns Image */}
          <motion.div
            initial={{ scale: 1.1 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 8, ease: "linear" }}
            className="absolute inset-0 w-full h-full"
          >
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-full h-[120%] object-cover"
              style={{ y: springY }}
            />
          </motion.div>

          {/* Hotspots */}
          <div className="absolute inset-0 z-20 pointer-events-none">
            {slides[currentSlide].hotspots?.map((hotspot, idx) => (
              <Hotspot key={idx} {...hotspot} />
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <motion.div
                  variants={itemVariants}
                  className="mb-8 inline-block px-5 py-2 bg-orange-400/20 backdrop-blur-xl border border-orange-400/30 rounded-full"
                >
                  <span className="text-orange-400 text-xs md:text-sm font-bold tracking-[0.2em] uppercase">
                    Collezione {slides[currentSlide].category}
                  </span>
                </motion.div>

                <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-serif text-white mb-10 leading-[0.9] tracking-tighter drop-shadow-2xl selection:bg-orange-400 selection:text-white">
                  {slides[currentSlide].title.split(" ").map((word, i, arr) => (
                    <motion.span
                      key={i}
                      variants={titleWordVariants}
                      className={`inline-block ${i === arr.length - 1 ? "italic font-light text-orange-400/90" : "font-black"}`}
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xl md:text-2xl text-white mb-12 max-w-2xl leading-relaxed font-medium tracking-wide drop-shadow-md lg:pr-20"
                >
                  {slides[currentSlide].subtitle}
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-5">
                  <Link
                    to="/shop"
                    className="group inline-flex items-center justify-center px-8 py-4 bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition-all duration-300 shadow-lg shadow-black/5"
                  >
                    Acquista Ora
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>

                  <Link
                    to="/collections"
                    className="group inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium hover:bg-white hover:text-neutral-900 transition-all duration-300"
                  >
                    Esplora le Collezioni
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 px-4 md:px-8 flex justify-between items-center pointer-events-none">
        <button
          onClick={prevSlide}
          className="p-3 rounded-full bg-black/20 backdrop-blur-sm text-white border border-white/10 hover:bg-white hover:text-neutral-900 transition-all duration-300 pointer-events-auto group hidden md:flex"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 rounded-full bg-black/20 backdrop-blur-sm text-white border border-white/10 hover:bg-white hover:text-neutral-900 transition-all duration-300 pointer-events-auto group hidden md:flex"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Linear Progress Navigation */}
      <div className="absolute bottom-12 left-0 z-30 w-full px-4 md:px-8">
        <div className="max-w-7xl mx-auto flex items-end justify-between">
          <div className="flex gap-12">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentSlide ? 1 : -1);
                  setCurrentSlide(index);
                }}
                className="group relative flex flex-col gap-4 text-left"
                aria-label={`Go to slide ${index + 1}`}
              >
                <span className={`text-xs font-black tracking-[0.2em] transition-colors duration-500 ${index === currentSlide ? "text-orange-400" : "text-white/30 group-hover:text-white/60"
                  }`}>
                  0{index + 1}
                </span>

                <div className="h-[3px] w-24 bg-white/10 relative overflow-hidden">
                  {index === currentSlide && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 7, ease: "linear" }}
                      className="absolute inset-0 bg-orange-400 origin-left shadow-[0_0_10px_rgba(197,160,125,0.5)]"
                    />
                  )}
                  {index < currentSlide && (
                    <div className="absolute inset-0 bg-white/20" />
                  )}
                </div>
              </button>
            ))}
          </div>

          <div className="hidden md:block text-white/5 text-[12rem] font-serif font-black select-none pointer-events-none mb-[-40px] leading-none">
            0{currentSlide + 1}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 right-10 z-30 hidden lg:block"
      >
        <div className="flex items-center gap-4 text-white/80 text-[10px] font-bold tracking-[0.3em] uppercase">
          <span className="[writing-mode:vertical-lr] mb-4 h-12 w-px bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-full bg-white"
            />
          </span>
          <span className="[writing-mode:vertical-lr]">Scroll</span>
        </div>
      </motion.div>
    </section>
  );
};
