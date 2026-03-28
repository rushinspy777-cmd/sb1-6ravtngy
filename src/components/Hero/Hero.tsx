import { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BentoTileProps {
  category: string;
  title: string;
  image: string;
  className?: string;
  delay?: number;
}

const BentoTile = ({ category, title, image, className = "", delay = 0 }: BentoTileProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={`group relative overflow-hidden rounded-3xl bg-neutral-800 ${className}`}
    >
      <Link to="/shop" className="block w-full h-full">
        <div className="absolute inset-0 z-0">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/30 transition-colors duration-500" />
          {/* Bottom Gradient for text legibility */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        </div>

        <div className="absolute inset-0 z-10 p-6 md:p-10 flex flex-col justify-end">
          <motion.span 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay + 0.3 }}
            className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-white/70 mb-2"
          >
            {category}
          </motion.span>
          <div className="flex items-end justify-between">
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-serif text-white max-w-[80%] leading-tight tracking-tight">
              {title}
            </h3>
            <div className="mb-2 p-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
              <ArrowUpRight className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export const Hero = (): JSX.Element => {
  const containerRef = useRef<HTMLElement>(null);

  const tiles = [
    {
      category: "Zona Giorno",
      title: "Soggiorno Moderno",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1920&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-2",
      delay: 0.1
    },
    {
      category: "Cucina",
      title: "Cucine d'Autore",
      image: "https://images.unsplash.com/photo-1600585154526-990dcea464dd?q=80&w=1920&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1",
      delay: 0.2
    },
    {
      category: "Outdoor",
      title: "Outdoor & Giardino",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1",
      delay: 0.3
    },
    {
      category: "Ufficio",
      title: "Ufficio & Smart Working",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1",
      delay: 0.4
    }
  ];

  return (
    <section ref={containerRef} className="relative pt-24 pb-12 px-4 md:px-8 bg-[#FDFCFB]">
      <div className="max-w-[1400px] mx-auto h-auto md:h-[85vh]">
        {/* Desktop Grid Layout */}
        <div className="hidden md:grid grid-cols-3 grid-rows-2 h-full gap-4 lg:gap-6">
          <BentoTile {...tiles[0]} />
          <BentoTile {...tiles[1]} />
          
          {/* Bottom Right nested grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            <BentoTile {...tiles[2]} className="col-span-1 h-full" />
            <BentoTile {...tiles[3]} className="col-span-1 h-full" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-4 md:hidden">
          {tiles.map((tile, i) => (
            <BentoTile key={i} {...tile} className="h-[400px]" delay={i * 0.1} />
          ))}
        </div>
      </div>

      {/* Aesthetic Detail */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200/50" />
    </section>
  );
};

