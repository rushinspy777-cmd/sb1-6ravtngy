export interface Hotspot {
  x: number;
  y: number;
  productId: number;
}

export interface Slide {
  image: string;
  category: string;
  title: string;
  subtitle: string;
  hotspots?: Hotspot[];
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isReadyToShip: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface Collection {
  id: number;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface NavItem {
  name: string;
  href: string;
  subItems?: { name: string; href: string }[];
}

export const HERO_SLIDES: Slide[] = [
  {
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=format,compress&cs=tinysrgb&w=1920&q=80",
    category: "Cucina",
    title: "Cucine da Sogno",
    subtitle: "Soluzioni su misura per il cuore della tua casa, dove funzionalità ed estetica si incontrano.",
    hotspots: [
      { x: 55, y: 75, productId: 7 }
    ]
  },
  {
    image: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=format,compress&cs=tinysrgb&w=1920&q=80",
    category: "Zona Giorno",
    title: "Il Tuo Living",
    subtitle: "Scopri arredi senza tempo creati con precisione e passione per il tuo spazio relax.",
    hotspots: [
      { x: 35, y: 70, productId: 2 },
      { x: 58, y: 75, productId: 6 }
    ]
  },
  {
    image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=format,compress&cs=tinysrgb&w=1920&q=80",
    category: "Zona Notte",
    title: "Comfort Notturno",
    subtitle: "Eleganza e riposo senza compromessi. Crea il tuo rifugio personale con i nostri letti e complementi.",
    hotspots: [
      { x: 50, y: 75, productId: 4 }
    ]
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Oslo Lounge Chair",
    price: 1299,
    image: "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    category: "Sedute",
    isReadyToShip: true,
  },
  {
    id: 2,
    name: "Copenhagen Sofa",
    price: 2899,
    image: "https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    category: "Sedute",
    isReadyToShip: false,
  },
  {
    id: 3,
    name: "Stockholm Dining Table",
    price: 1899,
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    category: "Tavoli",
    isReadyToShip: true,
  },
  {
    id: 4,
    name: "Helsinki Bed Frame",
    price: 2199,
    image: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    category: "Zona Notte",
    isReadyToShip: false,
  },
  {
    id: 5,
    name: "Bergen Bookshelf",
    price: 899,
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    category: "Contenitori",
    isReadyToShip: true,
  },
  {
    id: 6,
    name: "Trondheim Coffee Table",
    price: 799,
    image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    category: "Tavoli",
    isReadyToShip: false,
  },
  {
    id: 7,
    name: "Minimalist Kitchen Island",
    price: 4599,
    image: "https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    category: "Cucina",
    isReadyToShip: false,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Interior Designer",
    content: "Gli arredi di AM Mida hanno trasformato completamente lo spazio del mio cliente. La qualità è eccezionale e l'attenzione ai dettagli è senza pari. Ogni pezzo sembra un'opera d'arte.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=format,compress&cs=tinysrgb&w=200&q=75",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Proprietario di casa",
    content: "Cercavo il tavolo da pranzo perfetto da mesi. Il tavolo Stockholm ha superato tutte le mie aspettative. È bellissimo, robusto e l'artigianato è fenomenale.",
    rating: 5,
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=format,compress&cs=tinysrgb&w=200&q=75",
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    role: "Architetto",
    content: "Come architetto, apprezzo il design che resiste alla prova del tempo. AM Mida offre esattamente questo. I loro pezzi sono degni di investimento e incredibilmente versatili.",
    rating: 5,
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=format,compress&cs=tinysrgb&w=200&q=75",
  },
];

export const COLLECTIONS: Collection[] = [
  {
    id: 1,
    title: "Zona Giorno",
    description: "Comfort sofisticato",
    image: "https://images.pexels.com/photos/1918291/pexels-photo-1918291.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    href: "/collections/living-room",
  },
  {
    id: 2,
    title: "Zona Notte",
    description: "Santuari di pace",
    image: "https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    href: "/collections/bedroom",
  },
  {
    id: 3,
    title: "Sala da Pranzo",
    description: "Riunirsi con stile",
    image: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    href: "/collections/dining",
  },
  {
    id: 4,
    title: "Ufficio",
    description: "Eleganza produttiva",
    image: "https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=format,compress&cs=tinysrgb&w=800&q=75",
    href: "/collections/office",
  },
];

export const NAVIGATION_ITEMS: NavItem[] = [
  {
    name: "Cucina",
    href: "/kitchen",
    subItems: [
      { name: "Moderno", href: "/kitchen/modern" },
      { name: "Classico", href: "/kitchen/classic" },
      { name: "Elettrodomestici da incasso", href: "/kitchen/appliances" },
    ],
  },
  {
    name: "Zona Giorno",
    href: "/living",
    subItems: [
      { name: "Divani", href: "/living/sofas" },
      { name: "Pareti Attrezzate", href: "/living/wall-units" },
      { name: "Madie e Credenze", href: "/living/sideboards" },
      { name: "Tavoli e Sedie", href: "/living/dining" },
    ],
  },
  {
    name: "Zona Notte",
    href: "/bedroom",
    subItems: [
      { name: "Camere Matrimoniali", href: "/bedroom/adult-sets" },
      { name: "Camerette", href: "/bedroom/childrens" },
      { name: "Materassi", href: "/bedroom/mattresses" },
    ],
  },
  {
    name: "Ufficio",
    href: "/office",
    subItems: [
      { name: "Scrivanie", href: "/office/desks" },
      { name: "Sedute Operative", href: "/office/task-seating" },
      { name: "Librerie e Contenitori", href: "/office/storage" },
    ],
  },
  {
    name: "Complementi",
    href: "/utility",
    subItems: [
      { name: "Ingressi", href: "/utility/entryway" },
      { name: "Bagno", href: "/utility/bathroom" },
      { name: "Porte Blindate", href: "/utility/security-doors" },
    ],
  },
];
