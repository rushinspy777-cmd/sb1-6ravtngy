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
                src="src/assets/images/chisiamo.jpg"
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
              Qualità e Risparmio
              <br />
              <span className="font-semibold">hanno trovato Casa</span>
            </h2>

            <div className="space-y-4 text-neutral-600 leading-relaxed">
              <p className="text-lg">
                Fondata nel 1966 da un piccolo laboratorio artigianale, AM Mida è
                oggi uno dei marchi italiani più affidabili nel settore dell'arredamento,
                con oltre mezzo secolo di storia, due showroom in Campania e più di
                4.500 mq tra esposizione e deposito.
              </p>

              <p>
                Progettata con la collaborazione di architetti e designer italiani,
                ogni collezione nasce dalla ricerca continua, dall'eleganza delle forme
                e dall'attenzione ai dettagli — per soddisfare ogni stile di vita,
                a un prezzo giusto.
              </p>

              <p>
                Insigniti del Premio Compasso d'Oro nel 1998.
                L'avventura continua.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-4xl font-light text-neutral-900 mb-2">
                  60+
                </div>
                <div className="text-sm text-neutral-600">
                  Anni di Esperienza
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-neutral-900 mb-2">
                  2
                </div>
                <div className="text-sm text-neutral-600">
                  Showroom in Campania
                </div>
              </div>
              <div>
                <div className="text-4xl font-light text-neutral-900 mb-2">
                  4.500+
                </div>
                <div className="text-sm text-neutral-600">
                  mq di Esposizione
                </div>
              </div>
            </div>

            <div className="pt-4">
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-neutral-900 text-white font-medium hover:bg-neutral-800 transition-all duration-300"
              >
                La Nostra Storia
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
