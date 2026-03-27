import { BRAND } from "@/data/content";

export default function CtaBanner() {
  return (
    <section className="bg-ink py-24 lg:py-32 relative overflow-hidden">
      {/* Decorative background circles */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <span className="text-pink-400 text-sm font-semibold tracking-widest uppercase">
          Sklep online
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6 text-balance leading-[1.1]">
          Zamów lody lub tort
          <br />
          <span className="text-pink-400">prosto do domu</span>
        </h2>
        <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
          Rzemieślnicze lody i torty lodowe dostępne online.
          Wybierz swoje ulubione smaki i złóż zamówienie w kilka minut.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={BRAND.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-400 text-white font-semibold px-10 py-4 rounded-full text-base transition-all duration-200 hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-0.5 inline-flex items-center justify-center gap-2"
          >
            <span>Przejdź do sklepu</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
            className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-medium px-10 py-4 rounded-full text-base transition-all duration-200 hover:bg-white/5 inline-flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span>{BRAND.phone1}</span>
          </a>
        </div>

        {/* Domain */}
        <p className="text-white/30 text-sm mt-8">
          sklep.lodydudek.pl
        </p>
      </div>
    </section>
  );
}
