import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Navigation/Breadcrumbs";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { ProductGallery } from "../components/Product/ProductGallery";
import { useState } from "react";
import { LeadCaptureModal } from "../components/LeadCapture";
import { Ruler, ShieldCheck, Truck, Clock } from "lucide-react";

const products = {
    "1": {
        id: "1",
        name: "Oslo Lounge Chair",
        price: 1299,
        category: "Living",
        sub_category: "Sofas",
        description: "A contemporary lounge chair with clean lines and exceptional comfort. Features premium upholstery and solid wood frame. Perfect for minimalist and modern interiors.",
        images: [
            "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800",
            "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
        ],
        specs: {
            dimensions: "80 x 85 x 75 cm",
            material: "Rovere Massello, Tessuto Tecnico",
            origin: "Made in Italy",
            warranty: "5 Years"
        },
        isReadyToShip: true,
    }
};

export const ProductDetail = () => {
    const { id } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    const product = products[id as keyof typeof products];
    
    if (!product) return <div className="pt-20 text-center">Prodotto non trovato</div>;

    return (
        <div className="pt-20">
            <Navigation />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <Breadcrumbs />
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:items-start">
                    <ProductGallery images={product.images} />
                    
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-4 mb-2">
                                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-400 font-bold border-b border-neutral-100 pb-1">
                                    {product.category} / {product.sub_category}
                                </span>
                                {product.isReadyToShip && (
                                    <span className="bg-green-600 text-white text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded-sm shadow-lg flex items-center gap-1.5">
                                        Pronta Consegna
                                    </span>
                                )}
                            </div>
                            <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">{product.name}</h1>
                            <p className="text-3xl font-light text-neutral-900">€{product.price.toLocaleString()}</p>
                        </div>

                        <p className="text-neutral-600 leading-relaxed text-lg">{product.description}</p>
                        
                        <div className="space-y-4 pt-4">
                            <button className="w-full bg-neutral-900 text-white py-5 px-8 hover:bg-neutral-800 transition-all font-medium uppercase tracking-widest text-sm">
                                Aggiungi al Carrello
                            </button>
                            <button 
                                onClick={() => setIsModalOpen(true)}
                                className="w-full border-2 border-neutral-900 text-neutral-900 py-5 px-8 hover:bg-neutral-900 hover:text-white transition-all font-medium uppercase tracking-widest text-sm"
                            >
                                Richiedi Preventivo Su Misura
                            </button>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-neutral-100">
                           <div className="flex items-start gap-3">
                                <Ruler className="w-5 h-5 text-neutral-400" />
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-900 mb-1">Dimensioni</h4>
                                    <p className="text-sm text-neutral-500">{product.specs.dimensions}</p>
                                </div>
                           </div>
                           <div className="flex items-start gap-3">
                                <ShieldCheck className="w-5 h-5 text-neutral-400" />
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-900 mb-1">Garanzia</h4>
                                    <p className="text-sm text-neutral-500">{product.specs.warranty}</p>
                                </div>
                           </div>
                           <div className="flex items-start gap-3">
                                <Truck className="w-5 h-5 text-neutral-400" />
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-900 mb-1">Consegna</h4>
                                    <p className="text-sm text-neutral-500">Gratuita sopra €5.000</p>
                                </div>
                           </div>
                           <div className="flex items-start gap-3">
                                <Clock className="w-5 h-5 text-neutral-400" />
                                <div>
                                    <h4 className="text-xs uppercase tracking-widest font-bold text-neutral-900 mb-1">Produzione</h4>
                                    <p className="text-sm text-neutral-500">{product.specs.origin}</p>
                                </div>
                           </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
            <LeadCaptureModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={product.name}
                type="quote"
            />
        </div>
    );
};
