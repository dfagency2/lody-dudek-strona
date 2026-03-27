import Image from "next/image";
import { BRAND, brandPillars, aboutImages } from "@/data/content";

export default function AboutSection() {
  return (
    <section id="o-nas" className="bg-cream-50 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
            Nasza historia
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink mt-3 mb-6 text-balance">
            Lody z prawdziwego
            <br />
            <span className="text-pink-500">powołania</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Od 2017 roku tworzymy lody, które smakują jak powinny — z naturalnych
            składników, bez skrótów i kompromisów. Każda partia to nasza własna
            receptura, własne ręce, własna pasja.
          </p>
        </div>

        {/* Main grid: text + images */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Left: images mosaic */}
          <div className="grid grid-cols-2 gap-4 h-[480px]">
            <div className="relative rounded-2xl overflow-hidden row-span-2">
              <Image
                src={aboutImages[0]}
                alt="Rzemieślnicze lody — naturalne składniki"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src={aboutImages[1]}
                alt="Produkcja lodów Lody Dudek"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-pink-100 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="text-5xl font-bold text-pink-500 mb-2">
                  {BRAND.stats.years}+
                </div>
                <div className="text-sm font-medium text-slate">
                  lat pasji
                </div>
                <div className="text-xs text-muted mt-1">
                  od {BRAND.since} roku
                </div>
              </div>
            </div>
          </div>

          {/* Right: text */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-ink mb-4">
                Prawdziwy smak wymaga
                <br />
                prawdziwych składników
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Wszystko zaczęło się od prostego przekonania: lody mogą być
                lepsze. Zamiast używać gotowych mieszanek i półproduktów,
                postawiliśmy na własne receptury tworzone od podstaw.
              </p>
              <p className="text-muted leading-relaxed">
                Belgijska czekolada, świeże owoce, śmietanka z polskich mleczarni.
                Żadnych sztucznych aromatów, żadnych barwników. Tylko to, co
                natura ma najlepszego — a my to wydobywamy.
              </p>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-b border-cream-200">
              {[
                { value: `${BRAND.stats.flavors}`, label: "smaków" },
                { value: `${BRAND.stats.googleRating}★`, label: "Google" },
                { value: `${BRAND.stats.locations}`, label: "lokale" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-ink">{stat.value}</div>
                  <div className="text-xs text-muted font-medium mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://sklep.lodydudek.pl"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-500 font-semibold hover:text-pink-600 transition-colors group"
            >
              <span>Zamów nasze lody</span>
              <svg
                className="w-4 h-4 transition-transform group-hover:translate-x-1"
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

        {/* Brand pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {brandPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-cream-200"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h4 className="font-semibold text-ink mb-2">{pillar.title}</h4>
              <p className="text-sm text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
