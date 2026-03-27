"use client";

import Image from "next/image";
import { BRAND, heroImage } from "@/data/content";

export default function HeroSection() {
  const handleScrollDown = () => {
    const target = document.querySelector("#o-nas");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Lody Dudek — rzemieślnicze lody"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/20 text-white/90 text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-8">
          <span className="text-pink-300">✦</span>
          <span>Z pasją od {BRAND.since} roku</span>
          <span className="text-pink-300">✦</span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 text-balance">
          Rzemieślnicze
          <br />
          <span className="text-pink-300">lody</span> z pasją
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
          Naturalne składniki, własna produkcja, 26 smaków.
          <br className="hidden sm:block" />
          Poznaj smak prawdziwych lodów rzemieślniczych.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12">
          {[
            { value: "26", label: "smaków" },
            { value: "7+", label: "lat pasji" },
            { value: "4.9★", label: "Google" },
            { value: "3", label: "lokale" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/60 font-medium mt-0.5">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://sklep.lodydudek.pl"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-8 py-4 rounded-full text-sm sm:text-base transition-all duration-200 hover:shadow-xl hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
          >
            <span>Zamów online</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <button
            onClick={handleScrollDown}
            className="border border-white/40 hover:border-white/70 text-white font-medium px-8 py-4 rounded-full text-sm sm:text-base transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
          >
            Poznaj nas
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={handleScrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-white/80 transition-colors animate-bounce"
        aria-label="Przewij w dół"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </section>
  );
}
