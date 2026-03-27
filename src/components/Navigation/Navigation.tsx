import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navigation = (): JSX.Element => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    {
      name: "Kitchen",
      href: "/kitchen",
      subItems: [
        { name: "Modern", href: "/kitchen/modern" },
        { name: "Classic", href: "/kitchen/classic" },
        { name: "Built-in Appliances", href: "/kitchen/appliances" },
      ],
    },
    {
      name: "Living",
      href: "/living",
      subItems: [
        { name: "Sofas", href: "/living/sofas" },
        { name: "Wall Units", href: "/living/wall-units" },
        { name: "Sideboards", href: "/living/sideboards" },
        { name: "Dining", href: "/living/dining" },
      ],
    },
    {
      name: "Bedroom",
      href: "/bedroom",
      subItems: [
        { name: "Adult Sets", href: "/bedroom/adult-sets" },
        { name: "Children's", href: "/bedroom/childrens" },
        { name: "Mattresses", href: "/bedroom/mattresses" },
      ],
    },
    {
      name: "Office",
      href: "/office",
      subItems: [
        { name: "Desks", href: "/office/desks" },
        { name: "Task Seating", href: "/office/task-seating" },
        { name: "Storage", href: "/office/storage" },
      ],
    },
    {
      name: "Utility",
      href: "/utility",
      subItems: [
        { name: "Entryway", href: "/utility/entryway" },
        { name: "Bathroom", href: "/utility/bathroom" },
        { name: "Security Doors", href: "/utility/security-doors" },
      ],
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md" : "bg-white/95 backdrop-blur-sm"
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
              onClick={() => { }}
              className="text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <Link
              to="/cart"
              className="relative text-neutral-700 hover:text-neutral-900 transition-colors duration-200"
              aria-label="Shopping cart"
            >
              <ShoppingCart className="w-5 h-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-neutral-900 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

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
