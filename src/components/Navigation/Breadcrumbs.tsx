import { Link, useLocation } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

export const Breadcrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        <nav className="flex items-center space-x-2 text-sm text-neutral-500 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <Link
                to="/"
                className="hover:text-neutral-900 transition-colors flex items-center"
            >
                <Home className="w-4 h-4" />
            </Link>

            {pathnames.map((name, index) => {
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                const isLast = index === pathnames.length - 1;
                
                const translations: Record<string, string> = {
                    kitchen: "Cucina",
                    living: "Zona Giorno",
                    bedroom: "Zona Notte",
                    office: "Ufficio",
                    utility: "Complementi",
                    modern: "Moderno",
                    classic: "Classico",
                    appliances: "Elettrodomestici",
                    sofas: "Divani",
                    "wall-units": "Pareti Attrezzate",
                    sideboards: "Madie e Credenze",
                    dining: "Tavoli e Sedie",
                    "adult-sets": "Camere Matrimoniali",
                    childrens: "Camerette",
                    mattresses: "Materassi",
                    desks: "Scrivanie",
                    "task-seating": "Sedute Operative",
                    storage: "Librerie e Contenitori",
                    entryway: "Ingressi",
                    bathroom: "Bagno",
                    "security-doors": "Porte Blindate",
                    shop: "Negozio",
                    product: "Prodotto",
                    collections: "Collezioni",
                    outlet: "Outlet"
                };

                const displayName = translations[name.toLowerCase()] || (name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, " "));

                return (
                    <div key={name} className="flex items-center space-x-2">
                        <ChevronRight className="w-4 h-4 text-neutral-300" />
                        {isLast ? (
                            <span className="text-neutral-900 font-medium lowercase first-letter:uppercase">
                                {displayName}
                            </span>
                        ) : (
                            <Link
                                to={routeTo}
                                className="hover:text-neutral-900 transition-colors"
                            >
                                {displayName}
                            </Link>
                        )}
                    </div>
                );
            })}
        </nav>
    );
};
