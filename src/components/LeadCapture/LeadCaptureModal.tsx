import { motion, AnimatePresence } from "framer-motion";
import { X, MessageSquare, Mail, Calendar } from "lucide-react";

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  productName?: string;
  type?: 'quote' | 'consultation';
}

export const LeadCaptureModal = ({ isOpen, onClose, productName, type = 'quote' }: LeadCaptureModalProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-lg shadow-2xl overflow-hidden"
          >
            <div className="p-8">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <h3 className="text-2xl font-light text-neutral-900 mb-2">
                  {type === 'quote' ? 'Richiedi un Preventivo' : 'Prenota una Consulenza'}
                </h3>
                {productName && (
                  <p className="text-neutral-500">
                    Articolo: <span className="text-neutral-900 font-medium">{productName}</span>
                  </p>
                )}
              </div>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">Nome Completo</label>
                  <input
                    type="text"
                    className="w-full border-b border-neutral-200 py-2 focus:border-neutral-900 outline-none transition-colors"
                    placeholder="Mario Rossi"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">Email</label>
                    <input
                      type="email"
                      className="w-full border-b border-neutral-200 py-2 focus:border-neutral-900 outline-none transition-colors"
                      placeholder="mario@esempio.it"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">Telefono</label>
                    <input
                      type="tel"
                      className="w-full border-b border-neutral-200 py-2 focus:border-neutral-900 outline-none transition-colors"
                      placeholder="+39 333 123 4567"
                    />
                  </div>
                </div>

                {type === 'consultation' && (
                  <div>
                    <label className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">Data Preferita</label>
                    <div className="relative">
                      <input
                        type="date"
                        className="w-full border-b border-neutral-200 py-2 focus:border-neutral-900 outline-none transition-colors"
                      />
                      <Calendar className="absolute right-2 top-2 w-4 h-4 text-neutral-400" />
                    </div>
                  </div>
                )}

                <div>
                  <label className="block text-xs uppercase tracking-widest font-bold text-neutral-400 mb-1">Messaggio (Opzionale)</label>
                  <textarea
                    rows={2}
                    className="w-full border-b border-neutral-200 py-2 focus:border-neutral-900 outline-none transition-colors resize-none"
                    placeholder="Vorrei maggiori informazioni su..."
                  />
                </div>

                <div className="pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 bg-neutral-900 text-white px-6 py-4 hover:bg-neutral-800 transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Invia Richiesta Email</span>
                  </button>
                  <button
                    type="button"
                    className="flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-4 hover:bg-green-700 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Invia via WhatsApp</span>
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
