import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
    images: string[];
}

export const ProductGallery = ({ images }: ProductGalleryProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
    const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="space-y-4">
            <div className="relative group aspect-[4/5] bg-neutral-100 overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <button
                        onClick={prevImage}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full pointer-events-auto hover:bg-white transition-colors"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full pointer-events-auto hover:bg-white transition-colors"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
                {images.map((img, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`aspect-square overflow-hidden bg-neutral-100 border-2 transition-all ${
                            currentIndex === index ? "border-neutral-900" : "border-transparent opacity-60 hover:opacity-100"
                        }`}
                    >
                        <img src={img} className="w-full h-full object-cover" alt="" />
                    </button>
                ))}
            </div>
        </div>
    );
};
