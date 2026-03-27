import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";
import { useState } from "react";

const products = [
  {
    id: 1,
    name: "Oslo Lounge Chair",
    price: 1299,
    image:
      "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Seating",
  },
  {
    id: 2,
    name: "Copenhagen Sofa",
    price: 2899,
    image:
      "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Seating",
  },
  {
    id: 3,
    name: "Stockholm Dining Table",
    price: 1899,
    image:
      "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tables",
  },
  {
    id: 4,
    name: "Helsinki Bed Frame",
    price: 2199,
    image:
      "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Bedroom",
  },
  {
    id: 5,
    name: "Bergen Bookshelf",
    price: 899,
    image:
      "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Storage",
  },
  {
    id: 6,
    name: "Trondheim Coffee Table",
    price: 799,
    image:
      "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Tables",
  },
];

export const BestSellers = (): JSX.Element => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

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
            Best Sellers
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our most loved pieces, handpicked by our customers
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
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
              <div className="relative aspect-square overflow-hidden bg-neutral-100 mb-4">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
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
                    aria-label="Quick view"
                  >
                    <Eye className="w-5 h-5 text-neutral-900" />
                  </Link>
                  <button
                    onClick={() => {}}
                    className="bg-white p-3 rounded-full hover:bg-neutral-100 transition-colors duration-200"
                    aria-label="Add to cart"
                  >
                    <ShoppingCart className="w-5 h-5 text-neutral-900" />
                  </button>
                </motion.div>

                <span className="absolute top-4 left-4 bg-neutral-900 text-white text-xs font-medium px-3 py-1">
                  {product.category}
                </span>
              </div>

              <div>
                <Link
                  to={`/product/${product.id}`}
                  className="block hover:text-neutral-600 transition-colors duration-200"
                >
                  <h3 className="text-lg font-medium text-neutral-900 mb-2">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-xl font-light text-neutral-900">
                  ${product.price.toLocaleString()}
                </p>
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
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
