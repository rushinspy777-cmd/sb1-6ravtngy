import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { NAVIGATION_ITEMS as menuItems } from "../../constants/data";
import { useStore } from "../../store/useStore";
import { MegaMenu } from "./MegaMenu";

export const Navigation = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { cart, setIsCartOpen, setIsSearchOpen } = useStore();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navVariants = {
    top: {
      width: "100%",
      marginTop: "0px",
      borderRadius: "0px",
      backgroundColor: "rgba(255, 255, 255, 0.4)",
      borderColor: "transparent",
      paddingLeft: "1.5rem",
      paddingRight: "1.5rem",
      height: "80px",
    },
    scrolled: {
      width: "90%",
      marginTop: "20px",
      borderRadius: "9999px",
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      borderColor: "rgba(0, 0, 0, 0.1)",
      paddingLeft: "2.5rem",
      paddingRight: "2.5rem",
      height: "72px",
      boxShadow: "0 10px 40px -10px rgba(0,0,0,0.1)",
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <motion.nav
        initial="top"
        animate={isScrolled ? "scrolled" : "top"}
        variants={navVariants}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto backdrop-blur-xl saturate-150 border-b transition-all duration-300 flex items-center max-w-7xl"
      >
        <div className="w-full flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <span className={`font-serif tracking-tighter text-neutral-900 transition-all duration-500 ${isScrolled ? "text-xl" : "text-2xl"}`}>
              AM MIDA
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-1">
            {menuItems.map((item, idx) => {
              const hasMegaMenu = item.name === "Cucina" || item.name === "Zona Giorno";

              return (
                <div
                  key={item.name}
                  className="flex items-center"
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.05 + 0.3, duration: 0.5 }}
                  >
                    <Link
                      to={item.href}
                      className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full flex items-center space-x-1 relative group ${hoveredItem === item.name ? "text-neutral-900 bg-neutral-100/50" : "text-neutral-600 hover:text-neutral-900"
                        }`}
                    >
                      <span>{item.name}</span>
                      {item.subItems && (
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${hoveredItem === item.name ? "rotate-180" : ""}`} />
                      )}
                    </Link>
                  </motion.div>

                  {hasMegaMenu ? (
                    <MegaMenu item={item} isOpen={hoveredItem === item.name} />
                  ) : item.subItems && (
                    <AnimatePresence>
                      {hoveredItem === item.name && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 w-56 bg-white/95 backdrop-blur-md shadow-2xl border border-neutral-100 py-3 rounded-2xl mt-1 overflow-hidden"
                        >
                          {item.subItems.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="block px-5 py-2.5 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </div>

          <div className="flex items-center space-x-1">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsSearchOpen(true)}
              className="p-2.5 text-neutral-700 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-100/50"
              aria-label="Cerca"
            >
              <Search className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsCartOpen(true)}
              className="relative p-2.5 text-neutral-700 hover:text-neutral-900 transition-colors rounded-full hover:bg-neutral-100/50"
              aria-label={`Carrello, ${cartCount} articoli`}
            >
              <ShoppingCart className="w-5 h-5" />
              <AnimatePresence>
                {cartCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    className="absolute top-2 right-2 bg-neutral-900 text-white text-[9px] rounded-full w-4 h-4 flex items-center justify-center font-bold"
                  >
                    {cartCount}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 text-neutral-700 hover:text-neutral-900 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300, mass: 0.8 }}
            className="fixed inset-0 bg-white z-[100] md:hidden pointer-events-auto flex flex-col"
          >
            <div className="flex items-center justify-between p-8">
              <span className="font-serif text-3xl">AM MIDA</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 bg-neutral-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 pb-12">
              <div className="space-y-12 mt-8">
                {menuItems.map((item, idx) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.08 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl font-serif mb-6 block border-b border-neutral-100 pb-4"
                    >
                      {item.name}
                    </Link>
                    {item.subItems && (
                      <div className="grid grid-cols-1 gap-6 pl-4">
                        {item.subItems.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-xl text-neutral-500 hover:text-neutral-900"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="p-8 bg-neutral-50 border-t border-neutral-100">
              <div className="flex justify-between items-center text-sm text-neutral-400">
                <p>© 2024 AM MIDA</p>
                <p>Sartoria d'Interni</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

