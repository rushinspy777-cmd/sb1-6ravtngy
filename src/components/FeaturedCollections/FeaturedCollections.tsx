import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const collections = [
  {
    id: 1,
    title: "Zona Giorno",
    description: "Comfort sofisticato",
    image:
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/collections/living-room",
  },
  {
    id: 2,
    title: "Zona Notte",
    description: "Santuari di pace",
    image:
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/collections/bedroom",
  },
  {
    id: 3,
    title: "Sala da Pranzo",
    description: "Riunirsi con stile",
    image:
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/collections/dining",
  },
  {
    id: 4,
    title: "Ufficio",
    description: "Eleganza produttiva",
    image:
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
    href: "/collections/office",
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link
                to={collection.href}
                className="group block relative overflow-hidden bg-white rounded-lg"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={collection.image}
                    alt={collection.title}
                    className="w-full h-full object-cover"
                  />
                  {/* Hover overlay brightness reduction */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>

                {/* Bottom Overlay Gradient - covering 50% for legibility */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(0,0,0,0.72)] to-transparent pointer-events-none" />

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                  <h3 className="text-[22px] font-bold font-serif text-white mb-1 tracking-tight">
                    {collection.title}
                  </h3>
                  <p className="font-nunito font-light text-[13px] text-white/80 mb-4 tracking-normal">
                    {collection.description}
                  </p>
                  <div className="flex items-center text-white text-[13px] font-semibold font-nunito tracking-[0.08em] uppercase">
                    Esplora
                    <ArrowRight className="ml-1 w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
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
