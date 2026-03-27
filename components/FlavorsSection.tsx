"use client";

import { useState } from "react";
import Image from "next/image";
import { flavors, flavorCategories, BRAND } from "@/data/content";

type Category = (typeof flavorCategories)[number]["id"] | "wszystkie";

export default function FlavorsSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("wszystkie");

  const filtered =
    activeCategory === "wszystkie"
      ? flavors
      : flavors.filter((f) => f.category === activeCategory);

  return (
    <section id="smaki" className="bg-cream-100 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
            Nasze smaki
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink mt-3 mb-6">
            {BRAND.stats.flavors} smaków,
            <br />
            <span className="text-pink-500">jeden wybór</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Od klasycznej wanilii po czekoladę dubajską. Każdy smak to historia
            z naturalnych składników.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveCategory("wszystkie")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === "wszystkie"
                ? "bg-ink text-white shadow-md"
                : "bg-white text-slate border border-cream-200 hover:border-pink-300 hover:text-pink-500"
            }`}
          >
            Wszystkie ({flavors.length})
          </button>
          {flavorCategories.map((cat) => {
            const count = flavors.filter((f) => f.category === cat.id).length;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat.id
                    ? "bg-pink-500 text-white shadow-md"
                    : "bg-white text-slate border border-cream-200 hover:border-pink-300 hover:text-pink-500"
                }`}
              >
                {cat.label} ({count})
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((flavor) => (
            <div
              key={flavor.id}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-cream-200"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={flavor.image}
                  alt={flavor.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                {/* Category badge */}
                <div className="absolute top-2 right-2">
                  <span
                    className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                      flavor.category === "specjalne"
                        ? "bg-pink-500 text-white"
                        : flavor.category === "orzechowe"
                        ? "bg-amber-500 text-white"
                        : "bg-white/80 text-slate"
                    }`}
                  >
                    {flavor.category === "specjalne" ? "✦" : flavor.category === "orzechowe" ? "★" : ""}
                  </span>
                </div>
              </div>
              <div className="p-3">
                <p className="text-xs sm:text-sm font-medium text-ink leading-tight text-center">
                  {flavor.name}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-muted mb-6">
            Dostępne do zamówienia online — min. 5L, dowolny mix smaków
          </p>
          <a
            href="https://sklep.lodydudek.pl/lody"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Zamów lody</span>
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
