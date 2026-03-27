import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { NAVIGATION_ITEMS as menuItems } from "../../constants/data";
import { useStore } from "../../store/useStore";

export const Navigation = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cart, setIsCartOpen, setIsSearchOpen } = useStore();

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-neutral-200/50" : "bg-white/40 backdrop-blur-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight text-neutral-900">
              AM MIDA
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className="text-sm font-medium text-neutral-700 h-20 flex items-center hover:text-neutral-900 transition-colors duration-200 relative"
                  aria-haspopup={!!item.subItems}
                  aria-expanded={false} // Would need per-item state for true hover-based expansion
                >
                  {item.name}
                  <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-neutral-900 group-hover:w-full transition-all duration-300" />
                </Link>
                
                {item.subItems && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white shadow-xl border border-neutral-100 py-2 rounded-lg translate-y-2 group-hover:translate-y-0">
                    {item.subItems.map((sub) => (
                      <Link
                        key={sub.name}
                        to={sub.href}
                        className="block px-4 py-2 text-sm text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex items-center space-x-6">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
              aria-label="Cerca"
              aria-haspopup="dialog"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
              aria-label={`Carrello, ${cartCount} articoli`}
              aria-haspopup="dialog"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-neutral-900 text-white text-[10px] rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-neutral-200 max-h-[calc(100vh-5rem)] overflow-y-auto"
          >
            <div className="px-4 py-6 space-y-6">
              {menuItems.map((item) => (
                <div key={item.name} className="space-y-3">
                  <Link
                    to={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-lg font-bold text-neutral-900"
                  >
                    {item.name}
                  </Link>
                  {item.subItems && (
                    <div className="pl-4 space-y-2 border-l border-neutral-100 ml-1">
                      {item.subItems.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm text-neutral-600 hover:text-neutral-900"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
