import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Eye, Truck } from "lucide-react";
import { useState } from "react";
import { Filters } from "../Filters";
import { LeadCaptureModal } from "../LeadCapture";
import ParallaxImage from "../ParallaxImage";

import { PRODUCTS as products } from "../../constants/data";
import { useStore } from "../../store/useStore";


export const BestSellers = (): JSX.Element => {
  const { addToCart, setIsCartOpen } = useStore();
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);
  const [modalType, setModalType] = useState<'quote' | 'consultation'>('quote');

  const openQuoteModal = (productName: string) => {
    setSelectedProduct(productName);
    setModalType('quote');
    setIsModalOpen(true);
  };

  const openConsultationModal = () => {
    setSelectedProduct(undefined);
    setModalType('consultation');
    setIsModalOpen(true);
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
            I più Venduti
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto mb-8">
            I nostri pezzi più amati, scelti dai nostri clienti
          </p>
          <button
            onClick={openConsultationModal}
            className="nav-link-caps border-b-2 border-neutral-900 pb-1 hover:text-neutral-500 hover:border-neutral-500 transition-all"
          >
            Prenota una Consulenza Progettuale
          </button>
        </motion.div>

        <Filters />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.filter(p => [1, 2, 3].includes(p.id)).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="group"
            >
              <div className="relative aspect-square overflow-hidden bg-neutral-100 mb-4 rounded-xl shadow-premium hover:shadow-2xl transition-all duration-500">
                <ParallaxImage
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full"
                />

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: hoveredProduct === product.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/20 flex items-center justify-center gap-4"
                >
                  <Link
                    to={`/product/${product.id}`}
                    className="bg-white p-3 rounded-full hover:bg-neutral-100 transition-colors duration-200"
                    aria-label="Anteprima rapida"
                  >
                    <Eye className="w-5 h-5 text-neutral-900" />
                  </Link>
                  <button
                    onClick={() => {
                      addToCart(product);
                      setIsCartOpen(true);
                    }}
                    className="bg-white p-3 rounded-full hover:bg-neutral-100 transition-colors duration-200"
                    aria-label="Aggiungi al carrello"
                  >
                    <ShoppingCart className="w-5 h-5 text-neutral-900" />
                  </button>
                </motion.div>

              </div>
              {product.isReadyToShip && (
                <div className="flex justify-end -mt-8 mb-4 mr-2 relative z-10">
                  <motion.span
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-green-600 text-white nav-link-caps px-2 py-1 rounded-sm shadow-lg flex items-center gap-1.5"
                  >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-100"></span>
                    </span>
                    Pronta Consegna
                  </motion.span>
                </div>
              )}

              <div className="flex justify-between items-start">
                <div>
                  <Link
                    to={`/product/${product.id}`}
                    className="block hover:text-neutral-600 transition-colors duration-200"
                  >
                    <h3 className="text-lg font-medium text-neutral-900 mb-1">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="text-xl font-light text-neutral-900">
                    €{product.price.toLocaleString()}
                  </p>
                </div>
                {product.category === "Cucina" || product.price > 2000 ? (
                  <button
                    onClick={() => openQuoteModal(product.name)}
                    className="nav-link-caps text-neutral-500 hover:text-neutral-900 transition-colors border-b border-neutral-300 pb-1"
                  >
                    Richiedi Preventivo
                  </button>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            to="/shop"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-neutral-900 text-neutral-900 font-medium hover:bg-neutral-900 hover:text-white transition-all duration-300"
          >
            Vedi tutti i prodotti
          </Link>
        </motion.div>
      </div>

      <LeadCaptureModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productName={selectedProduct}
        type={modalType}
      />
    </section>
  );
};
