import { motion } from "framer-motion";
import { Star } from "lucide-react";

import { TESTIMONIALS as testimonials } from "../../constants/data";


export const Testimonials = (): JSX.Element => {
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
            Cosa dicono i nostri clienti
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Unisciti a migliaia di clienti soddisfatti che hanno trasformato i
            loro spazi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-1 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden border border-neutral-100 flex flex-col"
            >
              {testimonial.image.includes("clientreview") ? (
                <div className="flex-1 bg-neutral-50 p-4 flex flex-col justify-center">
                  <div className="overflow-hidden rounded shadow-sm border border-neutral-200">
                    <img
                      src={testimonial.image}
                      alt={`Recensione di ${testimonial.name}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                  <div className="mt-4 flex items-center justify-between px-2">
                    <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-semibold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      Verified Google Review
                    </span>
                  </div>
                </div>
              ) : (
                <div className="p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-neutral-900 text-neutral-900"
                      />
                    ))}
                  </div>

                  <p className="text-neutral-700 leading-relaxed italic mb-8 flex-1">
                    "{testimonial.content}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <div className="relative">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover border-2 border-neutral-100"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1 shadow-sm border border-neutral-100">
                        <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      </div>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-neutral-500 tracking-wider uppercase">
                        {testimonial.role}
                      </div>
                    </div>
                  </div>
                </div>
              )}
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
          <div className="flex items-center justify-center gap-8 text-neutral-600">
            <div>
              <div className="text-3xl font-light text-neutral-900">4.9/5</div>
              <div className="text-sm">Valutazione Media</div>
            </div>
            <div className="w-px h-12 bg-neutral-300" />
            <div>
              <div className="text-3xl font-light text-neutral-900">2,500+</div>
              <div className="text-sm">Clienti Soddisfatti</div>
            </div>
            <div className="w-px h-12 bg-neutral-300" />
            <div>
              <div className="text-3xl font-light text-neutral-900">98%</div>
              <div className="text-sm">Tasso di Soddisfazione</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
