import { useParams } from "react-router-dom";
import { Breadcrumbs } from "../components/Navigation/Breadcrumbs";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { ProductCard } from "../components/Product/ProductCard";
import { useState } from "react";
import { LeadCaptureModal } from "../components/LeadCapture";
import SectionReveal from "../components/SectionReveal";

const products = [
    {
        id: 1,
        name: "Oslo Lounge Chair",
        price: 1299,
        image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Zona Giorno",
        sub_category: "Divani",
        isReadyToShip: true,
    },
    {
        id: 2,
        name: "Copenhagen Sofa",
        price: 2899,
        image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Zona Giorno",
        sub_category: "Divani",
        isReadyToShip: false,
    },
    {
        id: 7,
        name: "Minimalist Kitchen Island",
        price: 4599,
        image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800",
        category: "Cucina",
        sub_category: "Moderno",
        isReadyToShip: false,
    }
];

export const CategoryPage = () => {
    const { category, subCategory } = useParams();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<string | undefined>(undefined);

    const filteredProducts = products.filter(p => 
        p.category.toLowerCase() === category?.toLowerCase() && 
        (!subCategory || p.sub_category.toLowerCase() === subCategory.toLowerCase())
    );

    const handleQuoteRequest = (name: string) => {
        setSelectedProduct(name);
        setIsModalOpen(true);
    };

    return (
        <div className="pt-20 bg-[#FDFCFB] min-h-screen">
            <Navigation />
            <SectionReveal>
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <Breadcrumbs />
                    <div className="mb-12">
                        <h1 className="text-4xl font-light text-neutral-900 mb-2 capitalize">
                            {subCategory || category}
                        </h1>
                        <p className="text-neutral-500">
                            {filteredProducts.length} Risultati
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} onQuoteRequest={handleQuoteRequest} />
                        ))}
                        {filteredProducts.length === 0 && (
                            <div className="col-span-full py-24 text-center">
                                <p className="text-xl text-neutral-400">Nessun prodotto trovato in questa categoria.</p>
                            </div>
                        )}
                    </div>
                </main>
            </SectionReveal>
            <Footer />
            <LeadCaptureModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={selectedProduct}
            />
        </div>
    );
};
