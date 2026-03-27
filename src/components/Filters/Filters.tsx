import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, Check } from 'lucide-react';

const materials = ['Legno', 'Laminato', 'Metallo', 'Tessuto'];
const styles = ['Moderno', 'Classico', 'Contemporaneo', 'Minimalista'];

export const Filters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState({
    materials: [] as string[],
    styles: [] as string[],
    priceRange: [0, 5000],
    dimensions: {
      width: [50, 300],
      height: [40, 250],
      depth: [30, 200]
    }
  });

  const toggleFilter = (type: 'materials' | 'styles', value: string) => {
    setActiveFilters(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  return (
    <div className="w-full mb-12">
      <div className="flex items-center justify-between border-b border-neutral-200 pb-4">
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-neutral-900 font-medium hover:text-neutral-600 transition-colors"
        >
          <SlidersHorizontal className="w-5 h-5" />
          <span>Filtri Avanzati</span>
        </button>
        <div className="flex gap-4 text-sm text-neutral-500">
          <span>{activeFilters.materials.length + activeFilters.styles.length} filtri attivi</span>
          <button className="underline hover:text-neutral-900 transition-colors">Resetta tutto</button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-8 border-b border-neutral-200">
              {/* Materials */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-neutral-900">Materiale</h4>
                <div className="space-y-2">
                  {materials.map(material => (
                    <label key={material} className="flex items-center gap-3 cursor-pointer group py-2 hover:bg-neutral-50 px-2 rounded-md transition-all active:scale-[0.98]">
                      <div 
                        onClick={() => toggleFilter('materials', material)}
                        className={`w-6 h-6 border flex items-center justify-center transition-colors ${
                          activeFilters.materials.includes(material) 
                            ? 'bg-neutral-900 border-neutral-900' 
                            : 'border-neutral-300 group-hover:border-neutral-400'
                        }`}
                      >
                        {activeFilters.materials.includes(material) && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-neutral-600 group-hover:text-neutral-900 transition-colors font-medium">{material}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Styles */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-neutral-900">Stile</h4>
                <div className="space-y-1">
                  {styles.map(style => (
                    <label key={style} className="flex items-center gap-3 cursor-pointer group py-2 hover:bg-neutral-50 px-2 rounded-md transition-all active:scale-[0.98]">
                      <div 
                        onClick={() => toggleFilter('styles', style)}
                        className={`w-6 h-6 border flex items-center justify-center transition-colors ${
                          activeFilters.styles.includes(style) 
                            ? 'bg-neutral-900 border-neutral-900' 
                            : 'border-neutral-300 group-hover:border-neutral-400'
                        }`}
                      >
                        {activeFilters.styles.includes(style) && <Check className="w-4 h-4 text-white" />}
                      </div>
                      <span className="text-neutral-600 group-hover:text-neutral-900 transition-colors font-medium">{style}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Dimensions */}
              <div className="md:col-span-2">
                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-neutral-900">Dimensioni (cm)</h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {Object.entries(activeFilters.dimensions).map(([key]) => {
                    const labels: Record<string, string> = {
                      width: 'Larghezza',
                      height: 'Altezza',
                      depth: 'Profondità'
                    };
                    return (
                      <div key={key}>
                        <span className="text-xs text-neutral-500 capitalize">{labels[key] || key}</span>
                        <div className="flex items-center gap-2 mt-2">
                          <input 
                            type="number" 
                            placeholder="Min" 
                            className="w-full border border-neutral-200 px-2 py-1 text-sm focus:outline-none focus:border-neutral-900"
                          />
                          <span className="text-neutral-300">-</span>
                          <input 
                            type="number" 
                            placeholder="Max" 
                            className="w-full border border-neutral-200 px-2 py-1 text-sm focus:outline-none focus:border-neutral-900"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 flex justify-end">
                   <button className="bg-neutral-900 text-white px-6 py-2 text-sm font-medium hover:bg-neutral-800 transition-colors">
                      Applica Filtri
                   </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
