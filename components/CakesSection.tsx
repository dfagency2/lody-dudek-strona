import Image from "next/image";
import { cakeSizes, cakeFeatures, cakeImage } from "@/data/content";

export default function CakesSection() {
  return (
    <section id="torty" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-20">
          <span className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
            Torty lodowe
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink mt-3 mb-6 text-balance">
            Tort lodowy na każdą
            <br />
            <span className="text-pink-500">wyjątkową chwilę</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            Urodziny, wesele, rocznica — każdy powód jest dobry. Wybierz rozmiar,
            smaki i spersonalizuj napis. My zrobimy resztę.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: image + features */}
          <div className="space-y-8">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl">
              <Image
                src={cakeImage}
                alt="Tort lodowy Lody Dudek"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-5 py-4 inline-block">
                  <p className="text-sm font-semibold text-ink">
                    26 smaków do wyboru
                  </p>
                  <p className="text-xs text-muted">
                    dowolna personalizacja
                  </p>
                </div>
              </div>
            </div>

            {/* Features list */}
            <div className="grid grid-cols-2 gap-3">
              {cakeFeatures.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-sm text-slate"
                >
                  <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: pricing table */}
          <div className="space-y-4">
            {cakeSizes.map((size) => (
              <div
                key={size.id}
                className={`relative rounded-2xl p-6 border-2 transition-all duration-200 ${
                  size.popular
                    ? "border-pink-400 bg-pink-50 shadow-lg"
                    : "border-cream-200 bg-cream-50 hover:border-pink-200"
                }`}
              >
                {size.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="bg-pink-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                      Popularny
                    </span>
                  </div>
                )}

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-ink">
                      Tort {size.name}
                    </h3>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="text-sm text-muted">
                        {size.portions} porcji
                      </span>
                      <span className="text-muted">·</span>
                      <span className="text-sm text-muted">{size.weight}</span>
                      <span className="text-muted">·</span>
                      <span className="text-sm text-muted">
                        do {size.maxFlavors} smaków
                      </span>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0 ml-4">
                    <div className="text-3xl font-bold text-ink">
                      {size.price}
                      <span className="text-lg font-medium"> zł</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Extras */}
            <div className="bg-cream-50 rounded-2xl p-5 border border-cream-200">
              <p className="text-sm font-semibold text-ink mb-3">
                Opcje dodatkowe:
              </p>
              <div className="space-y-2 text-sm text-muted">
                <div className="flex justify-between">
                  <span>Napis czekoladowy</span>
                  <span className="font-medium text-green-600">gratis</span>
                </div>
                <div className="flex justify-between">
                  <span>Świeczki urodzinowe</span>
                  <span className="font-medium text-green-600">gratis</span>
                </div>
                <div className="flex justify-between">
                  <span>Topper na tort</span>
                  <span className="font-medium text-ink">+20 zł</span>
                </div>
                <div className="flex justify-between">
                  <span>Dostawa (trasa Mielec–Tarnów)</span>
                  <span className="font-medium text-ink">+20 zł</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <a
              href="https://sklep.lodydudek.pl/konfigurator"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-ink hover:bg-slate text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Zaprojektuj swój tort
            </a>
            <p className="text-xs text-center text-muted">
              Tort na wesele lub event? Zadzwoń:{" "}
              <a
                href="tel:511892559"
                className="text-pink-500 hover:text-pink-600 font-medium"
              >
                511 892 559
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
