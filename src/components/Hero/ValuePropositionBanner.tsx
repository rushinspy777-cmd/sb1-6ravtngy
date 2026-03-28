import { motion } from "framer-motion";
import { Truck, ShieldCheck, Award } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    label: "Qualità Certificata",
    description: "Made in Italy Premium"
  },
  {
    icon: ShieldCheck,
    label: "Garanzia 5 Anni",
    description: "Protezione totale"
  },
  {
    icon: Truck,
    label: "Spedizione Gratuita",
    description: "Sopra €5.000"
  }
];

export const ValuePropositionBanner = (): JSX.Element => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
      className="relative bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 text-white"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center justify-center md:justify-start gap-3"
              >
                <div className="flex-shrink-0">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <div className="hidden sm:block">
                  <p className="text-xs md:text-sm font-semibold tracking-wide uppercase">
                    {item.label}
                  </p>
                  <p className="text-[10px] md:text-xs text-neutral-300">
                    {item.description}
                  </p>
                </div>
                <div className="sm:hidden text-xs font-semibold">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </motion.div>
  );
};
