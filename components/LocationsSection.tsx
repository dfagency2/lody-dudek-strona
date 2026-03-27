import { locations, BRAND } from "@/data/content";

export default function LocationsSection() {
  return (
    <section id="lokale" className="bg-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-pink-500 text-sm font-semibold tracking-widest uppercase">
            Nasze lokale
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold text-ink mt-3 mb-6">
            Znajdź nas
            <br />
            <span className="text-pink-500">w swoim mieście</span>
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto">
            {locations.length} lokale w Mielcu i Dąbrowie Tarnowskiej.
            Czynne {BRAND.hours}. Dowóz na trasie Mielec–Tarnów.
          </p>
        </div>

        {/* Locations grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className="group bg-cream-50 rounded-2xl overflow-hidden border border-cream-200 hover:border-pink-200 hover:shadow-lg transition-all duration-300"
            >
              {/* Map embed */}
              <div className="relative h-52 bg-cream-200 overflow-hidden">
                <iframe
                  src={location.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`Mapa: ${location.full}`}
                  className="w-full h-full"
                />
              </div>

              {/* Info */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="w-2 h-2 bg-pink-400 rounded-full flex-shrink-0" />
                      <span className="text-xs font-semibold text-pink-500 uppercase tracking-wide">
                        {location.city}
                      </span>
                    </div>
                    <h3 className="font-semibold text-ink text-base">
                      {location.address}
                    </h3>
                  </div>
                  <a
                    href={location.mapLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 w-9 h-9 bg-white rounded-full border border-cream-200 flex items-center justify-center hover:bg-pink-50 hover:border-pink-300 transition-colors group-hover:shadow-sm"
                    aria-label="Otwórz w Google Maps"
                  >
                    <svg
                      className="w-4 h-4 text-muted group-hover:text-pink-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-2 text-sm text-muted">
                  <svg
                    className="w-4 h-4 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{location.hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom info: delivery */}
        <div className="mt-12 bg-cream-50 rounded-2xl p-6 sm:p-8 border border-cream-200 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
          <div className="text-4xl flex-shrink-0">🚗</div>
          <div>
            <h3 className="font-bold text-ink text-lg mb-1">
              Dowóz na trasie Mielec – Dąbrowa Tarnowska – Tarnów
            </h3>
            <p className="text-muted">
              Nie możesz odebrać osobiście? Dowozimy zamówienia.
              Koszt dowozu: <span className="font-semibold text-ink">20 zł</span>.
              Skontaktuj się z nami.
            </p>
          </div>
          <a
            href={`tel:${BRAND.phone2.replace(/\s/g, "")}`}
            className="flex-shrink-0 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors whitespace-nowrap"
          >
            {BRAND.phone2}
          </a>
        </div>
      </div>
    </section>
  );
}
