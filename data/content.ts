// ==========================================
// DANE MARKI — LODY DUDEK
// Jedno źródło prawdy dla całego one-pagera
// ==========================================

export const BRAND = {
  name: "Lody Dudek",
  tagline: "Rzemieślnicze lody z pasją od 2017 roku",
  taglineShort: "Z pasją od 2017",
  description:
    "Tworzymy wyjątkowe lody rzemieślnicze z naturalnych składników. Bez półproduktów, bez sztucznych aromatów. Tylko prawdziwy smak.",
  shopUrl: "https://sklep.lodydudek.pl",
  phone1: "511 892 559",
  phone1Label: "Torty & wesela",
  phone2: "602 228 415",
  phone2Label: "Pozostałe zamówienia",
  email: "kontakt@lodydudek.pl",
  hours: "Pn–Nd 12:00–18:00",
  since: 2017,
  stats: {
    flavors: 26,
    years: 7,
    googleRating: 4.9,
    facebookRating: 4.9,
    locations: 3,
  },
} as const;

// ==========================================
// LOKALIZACJE
// ==========================================
export interface Location {
  id: string;
  city: string;
  address: string;
  full: string;
  hours: string;
  mapEmbed: string;
  mapLink: string;
}

export const locations: Location[] = [
  {
    id: "tarnow-rynek",
    city: "Tarnów",
    address: "ul. Wielkie Schody 1",
    full: "ul. Wielkie Schody 1, Tarnów",
    hours: "Pn–Nd 12:00–18:00",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.8!2d20.9984!3d50.0125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWielkie+Schody+1%2C+Tarn%C3%B3w!5e0!3m2!1spl!2spl!4v1234567890",
    mapLink: "https://maps.google.com/?q=Wielkie+Schody+1,+Tarnów",
  },
  {
    id: "tarnow-jasna",
    city: "Tarnów",
    address: "ul. Jasna 65",
    full: "ul. Jasna 65, Tarnów",
    hours: "Pn–Nd 12:00–18:00",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2552.8!2d21.0100!3d50.0050!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sJasna+65%2C+Tarn%C3%B3w!5e0!3m2!1spl!2spl!4v1234567890",
    mapLink: "https://maps.google.com/?q=Jasna+65,+Tarnów",
  },
  {
    id: "mielec-zygmuntowska",
    city: "Mielec",
    address: "ul. Zygmuntowska 1/8",
    full: "ul. Zygmuntowska 1/8, Mielec",
    hours: "Pn–Nd 12:00–18:00",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.0!2d21.4318!3d50.2952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sZygmuntowska+1%2C+Mielec!5e0!3m2!1spl!2spl!4v1234567890",
    mapLink: "https://maps.google.com/?q=Zygmuntowska+1/8,+Mielec",
  },
  {
    id: "mielec-mickiewicza",
    city: "Mielec",
    address: "ul. Mickiewicza 24A",
    full: "ul. Mickiewicza 24A, Mielec",
    hours: "Pn–Nd 12:00–18:00",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.0!2d21.4350!3d50.2920!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sMickiewicza+24A%2C+Mielec!5e0!3m2!1spl!2spl!4v1234567890",
    mapLink: "https://maps.google.com/?q=Mickiewicza+24A,+Mielec",
  },
  {
    id: "dabrowa-tarnowska",
    city: "Dąbrowa Tarnowska",
    address: "ul. Spadowa 6",
    full: "ul. Spadowa 6, Dąbrowa Tarnowska",
    hours: "Pn–Nd 12:00–18:00",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2553.0!2d20.9900!3d50.1720!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSpadowa+6%2C+D%C4%85browa+Tarnowska!5e0!3m2!1spl!2spl!4v1234567890",
    mapLink: "https://maps.google.com/?q=Spadowa+6,+Dąbrowa+Tarnowska",
  },
];

// ==========================================
// SMAKI LODÓW (26)
// ==========================================
export interface Flavor {
  id: string;
  name: string;
  category: "klasyczne" | "owocowe" | "orzechowe" | "specjalne";
  image: string;
  color: string;
}

export const flavors: Flavor[] = [
  // Klasyczne
  { id: "smietanka", name: "Śmietanka", category: "klasyczne", image: "/smaki/smietanka.webp", color: "#FFF8E7" },
  { id: "straciatella", name: "Straciatella", category: "klasyczne", image: "/smaki/straciatella.webp", color: "#F5F0E8" },
  { id: "czekolada", name: "Czekolada", category: "klasyczne", image: "/smaki/czekolada.webp", color: "#5C3317" },
  { id: "wanilia", name: "Wanilia", category: "klasyczne", image: "/smaki/wanilia.webp", color: "#F5E6CA" },
  { id: "slony-karmel", name: "Słony karmel", category: "klasyczne", image: "/smaki/slony-karmel.webp", color: "#D4A046" },
  { id: "kawa", name: "Kawa", category: "klasyczne", image: "/smaki/kawa.webp", color: "#C4A882" },

  // Owocowe
  { id: "kokos", name: "Kokos", category: "owocowe", image: "/smaki/kokos.webp", color: "#FFFDD0" },
  { id: "wisnia", name: "Wiśnia", category: "owocowe", image: "/smaki/wisnia.webp", color: "#9B1B30" },
  { id: "truskawka", name: "Truskawka", category: "owocowe", image: "/smaki/truskawka.webp", color: "#FF6B6B" },
  { id: "jagoda", name: "Jagoda", category: "owocowe", image: "/smaki/jagoda.webp", color: "#4A0E78" },
  { id: "brzoskwinia", name: "Brzoskwinia", category: "owocowe", image: "/smaki/brzoskwinia.webp", color: "#FFCBA4" },
  { id: "malina", name: "Malina", category: "owocowe", image: "/smaki/malina.webp", color: "#E8305B" },
  { id: "mango", name: "Mango", category: "owocowe", image: "/smaki/mango.webp", color: "#FFB347" },
  { id: "sorbet-cytryna", name: "Sorbet cytryna", category: "owocowe", image: "/smaki/sorbet-cytryna.webp", color: "#FFF44F" },

  // Orzechowe
  { id: "pistacja", name: "Pistacja", category: "orzechowe", image: "/smaki/pistacja.webp", color: "#93C572" },
  { id: "sniki", name: "Sniki", category: "orzechowe", image: "/smaki/sniki.webp", color: "#C89B3C" },
  { id: "biala-czekolada-orzech-karmel", name: "Biała czekolada z orzechem laskowym i karmelem", category: "orzechowe", image: "/smaki/biala-czekolada-orzech-karmel.webp", color: "#F5DEB3" },
  { id: "bakalia", name: "Bakalia", category: "orzechowe", image: "/smaki/bakalia.webp", color: "#D2B48C" },

  // Specjalne
  { id: "czekolada-dubajska", name: "Czekolada dubajska", category: "specjalne", image: "/smaki/czekolada-dubajska.webp", color: "#3D1C02" },
  { id: "wanilia-karmel-pekan", name: "Wanilia karmel pekan", category: "specjalne", image: "/smaki/wanilia-karmel-pekan.webp", color: "#E8C97E" },
  { id: "oreo", name: "Oreo", category: "specjalne", image: "/smaki/oreo.webp", color: "#2C2C2C" },
  { id: "tiramisu", name: "Tiramisu", category: "specjalne", image: "/smaki/tiramisu.webp", color: "#C4A882" },
  { id: "nutella", name: "Nutella", category: "specjalne", image: "/smaki/nutella.webp", color: "#6B3A2A" },
  { id: "sycylia", name: "Sycylia", category: "specjalne", image: "/smaki/sycylia.webp", color: "#FFD166" },
  { id: "rosher", name: "Rosher", category: "specjalne", image: "/smaki/rosher.webp", color: "#E8D5B7" },
  { id: "biala-czekolada-jagoda", name: "Biała czekolada z jagodą i słonecznikiem", category: "specjalne", image: "/smaki/biala-czekolada-jagoda.webp", color: "#E8D5F0" },
];

export const flavorCategories = [
  { id: "klasyczne", label: "Klasyczne" },
  { id: "owocowe", label: "Owocowe" },
  { id: "orzechowe", label: "Orzechowe" },
  { id: "specjalne", label: "Specjalne" },
] as const;

// ==========================================
// TORTY LODOWE
// ==========================================
export interface CakeSize {
  id: string;
  name: string;
  portions: number;
  weight: string;
  price: number;
  maxFlavors: number;
  popular?: boolean;
}

export const cakeSizes: CakeSize[] = [
  {
    id: "maly",
    name: "Mały",
    portions: 8,
    weight: "1,50 kg",
    price: 190,
    maxFlavors: 2,
  },
  {
    id: "sredni",
    name: "Średni",
    portions: 16,
    weight: "2,30 kg",
    price: 240,
    maxFlavors: 3,
    popular: true,
  },
  {
    id: "duzy",
    name: "Duży",
    portions: 24,
    weight: "4,20 kg",
    price: 300,
    maxFlavors: 3,
  },
];

export const cakeFeatures = [
  "26 smaków do wyboru",
  "3 rodzaje spodów",
  "Spersonalizowany napis",
  "Dostawa lub odbiór",
  "Świeczki w cenie",
  "Zamówienie online 24/7",
];

// ==========================================
// OPINIE KLIENTÓW
// ==========================================
export interface Review {
  id: string;
  name: string;
  text: string;
  rating: number;
  source: "google" | "facebook";
  location?: string;
}

export const reviews: Review[] = [
  {
    id: "1",
    name: "Kasia W.",
    text: "Najlepsze lody jakie jadłam w życiu! Pistacja jest obłędna. Wracam tutaj za każdym razem gdy jestem w Tarnowie.",
    rating: 5,
    source: "google",
    location: "Tarnów",
  },
  {
    id: "2",
    name: "Marek K.",
    text: "Tort lodowy na urodziny syna był absolutnym hitem! Dzieci były zachwycone, dorośli również. Obsługa super pomocna przy wyborze smaków.",
    rating: 5,
    source: "google",
    location: "Mielec",
  },
  {
    id: "3",
    name: "Anna P.",
    text: "Zamawiałam lody na wesele — 15 litrów różnych smaków. Goście nie mogli przestać chwalić. Czekolada dubajska to absolutny bestseller!",
    rating: 5,
    source: "facebook",
    location: "Dąbrowa Tarnowska",
  },
  {
    id: "4",
    name: "Tomasz R.",
    text: "Naturalny skład, czuć różnicę od sklepowych lodów. Słony karmel to poziom. Zamawiamy regularnie dla całej rodziny.",
    rating: 5,
    source: "google",
    location: "Tarnów",
  },
];

// ==========================================
// FILARY MARKI (sekcja O nas)
// ==========================================
export const brandPillars = [
  {
    id: "naturalne",
    icon: "🌿",
    title: "Naturalne składniki",
    description:
      "Tylko prawdziwe owoce, belgijska czekolada i śmietanka. Bez sztucznych aromatów, bez barwników, bez kompromisów.",
  },
  {
    id: "wlasna-produkcja",
    icon: "👐",
    title: "Własna produkcja",
    description:
      "Każda porcja powstaje w naszej pracowni. Żadnych półproduktów — smak tworzony od podstaw, z sercem.",
  },
  {
    id: "od-2017",
    icon: "✨",
    title: "Z pasją od 2017",
    description:
      "Siedem lat doskonalenia receptur. Każdy sezon to nowe smaki, bo nieustannie szukamy tego, co najlepsze.",
  },
  {
    id: "rzemieslo",
    icon: "🏆",
    title: "Oceniani 4.9★",
    description:
      "Google i Facebook zgodnie przyznają nam najwyższe noty. Twoje zadowolenie to nasza największa nagroda.",
  },
];

// ==========================================
// HERO ZDJĘCIA (Unsplash)
// ==========================================
export const heroImage =
  "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1920&q=80";

// Zdjęcia do sekcji O nas (artisan feel)
export const aboutImages = [
  "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&q=80",
  "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=800&q=80",
];

// Zdjęcie do sekcji tortów
export const cakeImage =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80";
