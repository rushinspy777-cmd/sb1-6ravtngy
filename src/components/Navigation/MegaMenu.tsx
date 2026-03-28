import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { NavItem } from "../../constants/data";
import { ArrowRight } from "lucide-react";

interface MegaMenuProps {
  item: NavItem;
  isOpen: boolean;
}

const CATEGORY_DATA: Record<string, { image: string, title: string, subtitle: string }> = {
  "Cucina": {
    image: "https://images.pexels.com/photos/2062426/pexels-photo-2062426.jpeg?auto=format,compress&cs=tinysrgb&w=1200",
    title: "L'Arte della Cucina",
    subtitle: "Sistemi integrati per un ambiente dove il design incontra la funzionalità quotidiana."
  },
  "Zona Giorno": {
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=format,compress&cs=tinysrgb&w=1200",
    title: "Evoluzione Living",
    subtitle: "Arredi progettati per il comfort assoluto e l'espressione della vostra personalità."
  },
};

export const MegaMenu = ({ item, isOpen }: MegaMenuProps) => {
  if (!item.subItems) return null;
  const data = CATEGORY_DATA[item.name];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 15 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed left-0 right-0 top-[72px] w-full bg-white/95 backdrop-blur-xl border-t border-neutral-100 shadow-2xl z-[60]"
        >
          <div className="max-w-7xl mx-auto px-8 py-16 grid grid-cols-12 gap-16">
            <div className="col-span-3">
              <h3 className="font-serif text-4xl mb-6 text-neutral-900">
                {item.name}
              </h3>
              <p className="text-neutral-500 text-base leading-relaxed mb-8">
                {data?.subtitle || "Esplora le nostre soluzioni di design curate per ogni ambiente della tua casa."}
              </p>
              <Link to={item.href} className="inline-flex items-center space-x-2 text-sm font-bold uppercase tracking-widest text-neutral-900 group">
                <span>Vedi Tutto</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            
            <div className="col-span-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-neutral-400 mb-8">Collezioni</h4>
              <div className="grid grid-cols-1 gap-y-1">
                {item.subItems.map((sub, idx) => (
                  <motion.div
                    key={sub.name}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 + 0.1 }}
                  >
                    <Link
                      to={sub.href}
                      className="group flex items-center justify-between text-neutral-600 hover:text-neutral-900 transition-colors py-3 border-b border-neutral-50"
                    >
                      <span className="text-xl font-medium">{sub.name}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="col-span-5 relative group overflow-hidden rounded-2xl shadow-xl">
              <div className="aspect-[16/10] overflow-hidden">
                <img 
                  src={data?.image || "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75"} 
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-neutral-900/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-80">Catalogo 2024</p>
                <h4 className="font-serif text-3xl">{data?.title || "Design d'Eccellenza"}</h4>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
