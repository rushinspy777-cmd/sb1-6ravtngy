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
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
      className={`group relative overflow-hidden rounded-[2rem] bg-neutral-800 ${className}`}
    >
      <Link to="/shop" className="block w-full h-full">
        {/* Image Layer */}
        <div className="absolute inset-0 z-0">
          <motion.img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
          />
          {/* Subtle overlay for depth */}
          <div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/20 transition-colors duration-500" />
          {/* High-end gradient for text legibility */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content Layer */}
        <div className="absolute inset-0 z-10 p-8 md:p-10 flex flex-col justify-end overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: delay + 0.3, duration: 0.5 }}
          >
            <span className="inline-block text-[10px] md:text-xs font-sans font-medium tracking-[0.25em] uppercase text-white/60 mb-3 border-b border-white/20 pb-1">
              {category}
            </span>
            <div className="flex items-end justify-between gap-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-serif text-white leading-[1.1] tracking-tight">
                {title}
              </h3>
              <div className="mb-1 p-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hidden md:flex">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export const Hero = (): JSX.Element => {
  const containerRef = useRef<HTMLElement>(null);

  const tiles = [
    {
      category: "Living Room",
      title: "Soggiorno Moderno",
      image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1920&auto=format&fit=crop",
      className: "md:col-span-2 md:row-span-2",
      delay: 0.1
    },
    {
      category: "Kitchens",
      title: "Cucine d'Autore",
      image: "https://images.unsplash.com/photo-1600585154526-990dcea464dd?q=80&w=1920&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1",
      delay: 0.2
    },
    {
      category: "Backyard",
      title: "Outdoor & Giardino",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1",
      delay: 0.3
    },
    {
      category: "Office",
      title: "Ufficio & Smart Working",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=1200&auto=format&fit=crop",
      className: "md:col-span-1 md:row-span-1",
      delay: 0.4
    }
  ];

  return (
    <section ref={containerRef} className="relative pt-24 pb-12 px-4 md:px-8 bg-[#FDFCFB]">
      <div className="max-w-[1400px] mx-auto overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 h-auto md:h-[85vh] gap-4">
          {/* Tile 1: Large (Desktop 2cols/2rows) */}
          <BentoTile 
            {...tiles[0]} 
            className="md:col-span-2 md:row-span-2 h-[500px] md:h-full" 
          />
          
          {/* Tile 2: Medium (Desktop Top-Right) */}
          <BentoTile 
            {...tiles[1]} 
            className="md:col-span-1 md:row-span-1 h-[400px] md:h-full" 
          />

          {/* Nested Group (Desktop Bottom-Right) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 md:col-span-1 md:row-span-1">
            <BentoTile 
              {...tiles[2]} 
              className="h-[300px] md:h-full" 
            />
            <BentoTile 
              {...tiles[3]} 
              className="h-[300px] md:h-full" 
              delay={0.4} 
            />
          </div>
        </div>
      </div>

      {/* Aesthetic Detail */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-200/50" />
    </section>
  );
};

