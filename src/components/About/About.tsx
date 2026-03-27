import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const About = (): JSX.Element => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-square overflow-hidden">
              <img
                src="https://images.pexels.com/photos/1457847/pexels-photo-1457847.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Artisan crafting furniture"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h2 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight">
              Crafted with Care,
              <br />
              <span className="font-semibold">Built to Last</span>
            </h2>

            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p className="text-lg">
                At AM Mida, we believe that furniture is more than just
                functional objects. Each piece tells a story of exceptional
                craftsmanship, sustainable materials, and timeless design.
              </p>

              <p>
                Our artisans combine traditional techniques with modern
                innovation, creating furniture that transforms houses into
                homes. Every detail is carefully considered, from the selection
                of premium hardwoods to the hand-finished surfaces that bear the
                mark of human touch.
              </p>

              <p>
                We source our materials responsibly, ensuring that beauty and
                sustainability go hand in hand. Our commitment to quality means
                that each piece is built to be cherished for generations,
                developing character and warmth with time.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-light text-neutral-900 mb-2">
                  25+
                </div>
                <div className="text-sm text-neutral-600">
                  Years of Expertise
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-neutral-900 mb-2">
                  100%
                </div>
                <div className="text-sm text-neutral-600">
                  Sustainable Materials
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-neutral-900 mb-2">
                  500+
                </div>
                <div className="text-sm text-neutral-600">
                  Unique Designs
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all duration-300"
              >
                Our Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
