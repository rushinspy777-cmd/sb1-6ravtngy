import { motion, AnimatePresence } from "framer-motion";
import { X, Search, ArrowRight } from "lucide-react";
import { useStore } from "../../store/useStore";
import { PRODUCTS } from "../../constants/data";
import { Link } from "react-router-dom";
import { useState, useMemo } from "react";

export const SearchModal = () => {
  const { isSearchOpen, setIsSearchOpen } = useStore();
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (query.trim().length === 0) return [];
    return PRODUCTS.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase()) ||
      product.category.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 4); // Limit search results to 4
  }, [query]);

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-neutral-900/40 backdrop-blur-md z-[200] flex items-start justify-center pt-24"
        >
          {/* Overlay that closes search when clicked */}
          <div className="absolute inset-0" onClick={() => setIsSearchOpen(false)} />

          <motion.div
            initial={{ y: -20, opacity: 0, scale: 0.95 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-2xl bg-white shadow-2xl rounded-2xl overflow-hidden"
          >
            {/* Search Input Container */}
            <div className="p-4 md:p-6 border-b border-neutral-100 flex items-center gap-4">
              <Search className="w-6 h-6 text-neutral-400" />
              <input
                autoFocus
                type="text"
                placeholder="Cerca prodotti, collezioni..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-xl font-light text-neutral-900 placeholder:text-neutral-300"
              />
              <button
                onClick={() => setIsSearchOpen(false)}
                className="p-2 hover:bg-neutral-50 rounded-full transition-colors"
                aria-label="Chiudi ricerca"
              >
                <X className="w-6 h-6 text-neutral-500" />
              </button>
            </div>

            {/* Content Area */}
            <div className="p-8">
              {query.trim().length > 0 ? (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
                    Risultati Suggeriti
                  </h3>
                  {results.length > 0 ? (
                    <div className="grid grid-cols-1 gap-6">
                      {results.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={() => setIsSearchOpen(false)}
                          className="flex items-center gap-6 group"
                        >
                          <div className="w-20 h-20 bg-neutral-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-medium text-neutral-900 line-clamp-1 group-hover:text-neutral-600 transition-colors">
                              {product.name}
                            </h4>
                            <p className="text-sm text-neutral-500 font-medium">€{product.price.toLocaleString()}</p>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">
                              {product.category}
                            </span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-neutral-300 group-hover:translate-x-1 group-hover:text-neutral-900 transition-all" />
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="py-8 text-center bg-neutral-50 rounded-xl">
                      <p className="text-neutral-500">Nessun risultato trovato per "{query}"</p>
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">
                    Ricerche Popolari
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Divani", "Tavoli", "Cucine Moderne", "Letti"].map((term) => (
                      <button
                        key={term}
                        onClick={() => setQuery(term)}
                        className="px-4 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-full text-sm font-medium transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Bar */}
            <div className="p-4 bg-neutral-50 text-center border-t border-neutral-100">
              <p className="text-xs text-neutral-400 font-medium">
                Digita almeno 2 caratteri per iniziare la ricerca
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
