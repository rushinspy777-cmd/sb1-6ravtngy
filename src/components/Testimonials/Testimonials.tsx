import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Interior Designer",
    content:
      "Gli arredi di AM Mida hanno trasformato completamente lo spazio del mio cliente. La qualità è eccezionale e l'attenzione ai dettagli è senza pari. Ogni pezzo sembra un'opera d'arte.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Proprietario di casa",
    content:
      "Cercavo il tavolo da pranzo perfetto da mesi. Il tavolo Stockholm ha superato tutte le mie aspettative. È bellissimo, robusto e l'artigianato è fenomenale.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Architetto",
    content:
      "Come architetto, apprezzo il design che resiste alla prova del tempo. AM Mida offre esattamente questo. I loro pezzi sono degni di investimento e incredibilmente versatili.",
    rating: 5,
    image:
      "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200",
  },
];

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
              className="bg-white p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-neutral-900 text-neutral-900"
                  />
                ))}
              </div>

              <p className="text-neutral-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-medium text-neutral-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-neutral-600">
                    {testimonial.role}
                  </div>
                </div>
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
