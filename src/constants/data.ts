

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



export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Divano Letto Roberta Materasso",
    price: 1299,
    image: "src/assets/images/besellerdivano.jpg",
    category: "",
    isReadyToShip: true,
  },
  {
    id: 2,
    name: "Poltrona Flora Relax Alza persona Blu Jeans",
    price: 2899,
    image: "src/assets/images/besellerpoltron.jpg",
    category: "",
    isReadyToShip: true,
  },
  {
    id: 3,
    name: "Consolle allungabile ",
    price: 1899,
    image: "src/assets/images/besellertables.jpg",
    category: "",
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
    name: "Alfio Papalardo",
    role: "Guida locale",
    content: "Abbiamo preso 1 divano e 6 sedie (con ritiro delle ns vecchie)... ci hanno consegnato il 23/12/2025 [rispettando i 20gg lavorativi dall'ordine (25/11/25)]... Sig. Matteo molto disponibile per modifiche/variazioni/personalizzazione agli articoli. Consigliatissimo... torneremo a trovarvi!",
    rating: 5,
    image: "src/assets/images/clientreview1.jpg",
  },
  {
    id: 2,
    name: "Marina di Marco",
    role: "Guida locale",
    content: "Esperienza molto positiva e buon prodotto. Siamo stati in questo negozio per scegliere un divano letto: gentilezza e competenza ci hanno convinto all'acquisto. Il prodotto è arrivato nei tempi previsti e ha confermato le caratteristiche esposte in negozio. Mi ha colpito anche l'assistenza ricevuta. Super consigliato.",
    rating: 5,
    image: "src/assets/images/clientreview2.jpg",
  },
  {
    id: 3,
    name: "Chris",
    role: "Cliente",
    content: "Ho finalmente realizzato il sogno di una vita. Ho acquistato la cucina seguendo i consigli di Luigia e del suo team, sempre precisi e puntuali. La qualità offerta valorizza la cucina. Sono felice della mia scelta e consiglio a tutti di visitare il loro sito web.",
    rating: 5,
    image: "src/assets/images/clientreview3.jpg",
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
