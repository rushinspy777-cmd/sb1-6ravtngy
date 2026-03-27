import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import ParallaxImage from "../ParallaxImage";

import { COLLECTIONS as collections } from "../../constants/data";


export const FeaturedCollections = (): JSX.Element => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            Collezioni in Primo Piano
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Selezioni curate per ogni spazio della tua casa
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[700px]">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${
                index === 0 
                  ? "md:col-span-2 md:row-span-2 h-[450px] md:h-auto" 
                  : index === 1 
                  ? "md:col-span-2 md:row-span-1 h-[215px] md:h-auto" 
                  : "md:col-span-1 md:row-span-1 h-[215px] md:h-auto"
              }`}
            >
              <Link
                to={collection.href}
                className="group block relative w-full h-full overflow-hidden bg-white rounded-2xl shadow-premium hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative w-full h-full">
                  <ParallaxImage
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full"
                  />
                  {/* Hover overlay brightness reduction */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>

                {/* Bottom Overlay Gradient - covering 50% for legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-8 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl md:text-3xl font-bold font-serif text-white mb-2 tracking-tight">
                    {collection.title}
                  </h3>
                  <p className="font-sans font-light text-sm text-white/90 mb-6 max-w-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {collection.description}
                  </p>
                  <div className="flex items-center text-white text-xs font-bold tracking-widest uppercase">
                    <span className="border-b border-white/40 pb-1 group-hover:border-white transition-colors">
                      Esplora Collezione
                    </span>
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
