import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1920",
    category: "Cucina",
    title: "Cucine da Sogno",
    subtitle: "Soluzioni su misura per il cuore della tua casa, dove funzionalità ed estetica si incontrano.",
  },
  {
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920",
    category: "Zona Giorno",
    title: "Il Tuo Living",
    subtitle: "Scopri arredi senza tempo creati con precisione e passione per il tuo spazio relax.",
  },
  {
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1920",
    category: "Zona Notte",
    title: "Comfort Notturno",
    subtitle: "Eleganza e riposo senza compromessi. Crea il tuo rifugio personale con i nostri letti e complementi.",
  },
];

export const Hero = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1.1,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.4 },
      },
    }),
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-neutral-900">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.8, ease: "easeOut" },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                variants={textVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="mb-6 inline-block px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                  <span className="text-white text-xs md:text-sm font-medium tracking-widest uppercase">
                    Collezione {slides[currentSlide].category}
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-6 leading-[1.1]">
                  {slides[currentSlide].title.split(" ")[0]}
                  <br />
                  <span className="font-semibold">{slides[currentSlide].title.split(" ").slice(1).join(" ")}</span>
                </h1>

                <p className="text-lg md:text-xl text-white/90 mb-10 max-w-xl leading-relaxed">
                  {slides[currentSlide].subtitle}
                </p>

                <div className="flex flex-col sm:flex-row gap-5">
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
                </div>
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

      {/* Pagination Dots */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setDirection(index > currentSlide ? 1 : -1);
              setCurrentSlide(index);
            }}
            className={`h-1.5 transition-all duration-500 rounded-full ${
              index === currentSlide ? "w-10 bg-white" : "w-3 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 right-10 z-30 hidden lg:block"
      >
        <div className="flex items-center gap-4 text-white/60 text-[10px] font-bold tracking-[0.3em] uppercase">
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
