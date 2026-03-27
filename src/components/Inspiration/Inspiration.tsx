import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const inspirations = [
  {
    id: 1,
    title: "Scandinavian Minimalism",
    description: "Clean lines, natural light, and functional beauty",
    image:
      "https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1200",
    size: "large",
  },
  {
    id: 2,
    title: "Modern Comfort",
    description: "Where style meets relaxation",
    image:
      "https://images.pexels.com/photos/2343468/pexels-photo-2343468.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "small",
  },
  {
    id: 3,
    title: "Timeless Elegance",
    description: "Classic designs for contemporary living",
    image:
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    size: "small",
  },
];

export const Inspiration = (): JSX.Element => {
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
            Design Inspiration
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore curated spaces that blend aesthetics with functionality
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {inspirations.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${
                item.size === "large"
                  ? "lg:row-span-2"
                  : "lg:row-span-1"
              }`}
            >
              <Link
                to={`/inspiration/${item.id}`}
                className="group block relative h-full overflow-hidden"
              >
                <div
                  className={`relative overflow-hidden ${
                    item.size === "large"
                      ? "h-full min-h-[600px]"
                      : "h-full min-h-[290px]"
                  }`}
                >
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl md:text-3xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-white/90 text-sm md:text-base">
                      {item.description}
                    </p>
                    <div className="mt-4 inline-block text-white text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Explore →
                    </div>
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
