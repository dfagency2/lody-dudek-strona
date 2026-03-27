import Logo from "@/components/Logo";
import { BRAND } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white/70 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Logo size={32} className="w-8 h-8 text-white" />
              <span className="text-white font-semibold">{BRAND.name}</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 max-w-xs">
              Rzemieślnicze lody z naturalnych składników. Od 2017 roku
              tworzymy smaki, które się pamięta.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-amber-400">★★★★★</span>
              <span className="text-white/50">4.9 Google · 4.9 Facebook</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Kontakt
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="text-white/40 text-xs block mb-0.5">
                  {BRAND.phone1Label}
                </span>
                <a
                  href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
                  className="hover:text-pink-400 transition-colors text-white/80"
                >
                  {BRAND.phone1}
                </a>
              </li>
              <li>
                <span className="text-white/40 text-xs block mb-0.5">
                  {BRAND.phone2Label}
                </span>
                <a
                  href={`tel:${BRAND.phone2.replace(/\s/g, "")}`}
                  className="hover:text-pink-400 transition-colors text-white/80"
                >
                  {BRAND.phone2}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover:text-pink-400 transition-colors text-white/80"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="text-white/50 text-xs">{BRAND.hours}</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4 uppercase tracking-wide">
              Sklep online
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Zamów lody", href: "https://sklep.lodydudek.pl/lody" },
                { label: "Torty lodowe", href: "https://sklep.lodydudek.pl/konfigurator" },
                { label: "Lokalizacje", href: "https://sklep.lodydudek.pl/lokale" },
                { label: "Regulamin", href: "https://sklep.lodydudek.pl/regulamin" },
                { label: "Polityka prywatności", href: "https://sklep.lodydudek.pl/polityka-prywatnosci" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-pink-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/30">
          <p>
            &copy; {year} {BRAND.name}. Wszelkie prawa zastrzeżone.
          </p>
          <p>
            lodydudek.pl · sklep.lodydudek.pl
          </p>
        </div>
      </div>
    </footer>
  );
}
