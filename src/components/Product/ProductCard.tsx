import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ShoppingCart, Eye } from "lucide-react";

interface ProductCardProps {
    product: {
        id: number | string;
        name: string;
        price: number;
        image: string;
        category: string;
        isReadyToShip?: boolean;
        isOutlet?: boolean;
        discountPercentage?: number;
    };
    onQuoteRequest?: (name: string) => void;
}

export const ProductCard = ({ product, onQuoteRequest }: ProductCardProps) => {
    const discountedPrice = product.discountPercentage 
        ? product.price * (1 - product.discountPercentage / 100) 
        : product.price;

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group"
        >
            <div className="relative aspect-square overflow-hidden bg-neutral-100 mb-4">
                <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <Link
                        to={`/product/${product.id}`}
                        className="bg-white p-3 rounded-full hover:bg-neutral-100 transition-colors duration-200"
                        aria-label="Anteprima rapida"
                    >
                        <Eye className="w-5 h-5 text-neutral-900" />
                    </Link>
                    <button
                        onClick={() => {}}
                        className="bg-white p-3 rounded-full hover:bg-neutral-100 transition-colors duration-200"
                        aria-label="Aggiungi al carrello"
                    >
                        <ShoppingCart className="w-5 h-5 text-neutral-900" />
                    </button>
                </div>

                <div className="absolute top-4 right-4 flex flex-col gap-2 items-end">
                    {product.isReadyToShip && (
                        <motion.span
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="bg-green-600 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm shadow-lg flex items-center gap-1.5"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-300 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-100"></span>
                            </span>
                            Pronta Consegna
                        </motion.span>
                    )}
                    {product.discountPercentage ? (
                        <span className="bg-red-600 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm">
                            -{product.discountPercentage}%
                        </span>
                    ) : null}
                    <span className="bg-neutral-900 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm shadow-sm">
                        {product.category}
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-start">
                <div>
                    <Link
                        to={`/product/${product.id}`}
                        className="block hover:text-neutral-600 transition-colors duration-200"
                    >
                        <h3 className="text-lg font-medium text-neutral-900 mb-1">
                            {product.name}
                        </h3>
                    </Link>
                    <div className="flex items-center gap-3">
                        <p className="text-xl font-light text-neutral-900">
                            €{discountedPrice.toLocaleString()}
                        </p>
                        {product.discountPercentage ? (
                            <p className="text-sm text-neutral-400 line-through">
                                €{product.price.toLocaleString()}
                            </p>
                        ) : null}
                    </div>
                </div>
                {(product.category === "Cucina" || product.price > 2000) && onQuoteRequest ? (
                    <button
                        onClick={() => onQuoteRequest(product.name)}
                        className="text-xs uppercase tracking-tighter font-semibold text-neutral-500 hover:text-neutral-900 transition-colors border-b border-neutral-300 pb-1"
                    >
                        Richiedi Preventivo
                    </button>
                ) : null}
            </div>
        </motion.div>
    );
};
