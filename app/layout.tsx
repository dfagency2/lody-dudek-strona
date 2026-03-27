import type { Metadata } from "next";
import "./globals.css";
import { BRAND, locations } from "@/data/content";

export const metadata: Metadata = {
  title: "Lody Dudek — Rzemieślnicze lody z pasją od 2017 | Mielec, Dąbrowa Tarnowska",
  description:
    "Lody Dudek — rzemieślnicze lody z naturalnych składników. 26 smaków, torty lodowe, lokale w Mielcu i Dąbrowie Tarnowskiej. Dowóz na trasie Mielec–Tarnów. Zamów online.",
  keywords: [
    "lody rzemieślnicze",
    "lody Mielec",
    "lody Dąbrowa Tarnowska",
    "lody Tarnów dowóz",
    "torty lodowe",
    "lody naturalne",
    "lodziarnia Mielec",
    "lody zamówienie online",
  ],
  authors: [{ name: "Lody Dudek" }],
  creator: "Lody Dudek",
  metadataBase: new URL("https://lodydudek.pl"),
  openGraph: {
    type: "website",
    locale: "pl_PL",
    url: "https://lodydudek.pl",
    siteName: "Lody Dudek",
    title: "Lody Dudek — Rzemieślnicze lody z pasją od 2017",
    description:
      "26 smaków, torty lodowe, naturalne składniki. Poznaj nasze rzemieślnicze lody w Tarnowie, Mielcu i Dąbrowie Tarnowskiej.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Lody Dudek — rzemieślnicze lody",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lody Dudek — Rzemieślnicze lody",
    description: "26 smaków, torty lodowe, naturalne składniki.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://lodydudek.pl/#organization",
      name: "Lody Dudek",
      description:
        "Rzemieślnicze lody z naturalnych składników. 26 smaków, torty lodowe.",
      url: "https://lodydudek.pl",
      telephone: BRAND.phone1,
      email: BRAND.email,
      openingHours: "Mo-Su 12:00-18:00",
      priceRange: "$$",
      servesCuisine: "Ice cream",
      foundingDate: String(BRAND.since),
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: BRAND.stats.googleRating,
        bestRating: 5,
        reviewCount: 100,
      },
      sameAs: ["https://sklep.lodydudek.pl"],
    },
    ...locations.map((loc) => ({
      "@type": "IceCreamShop",
      "@id": `https://lodydudek.pl/#${loc.id}`,
      name: `Lody Dudek — ${loc.city}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: loc.address,
        addressLocality: loc.city,
        addressCountry: "PL",
      },
      openingHours: "Mo-Su 12:00-18:00",
      telephone: BRAND.phone2,
      parentOrganization: {
        "@id": "https://lodydudek.pl/#organization",
      },
    })),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-cream-50 text-ink">
        {children}
      </body>
    </html>
  );
}
