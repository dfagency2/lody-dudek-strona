# Lody Dudek Strona — instrukcja dla Claude

## Stack
- Next.js 14.2.35 (nie wyżej — serwer ma glibc 2.28)
- React 18
- TypeScript
- Tailwind CSS (ciepła paleta — kreamy + różowe)
- Static export (`output: "export"` w next.config.mjs)

## Hosting
- Serwer: CyberFolks, s180.cyber-folks.pl
- Panel: DirectAdmin (port 2222)
- SSH: `ssh jacbar22@s180.cyber-folks.pl -p 222`
- Ścieżka: `/home/jacbar22/domains/lodydudek.pl/public_html`
- Domena: lodydudek.pl (domena główna)

## WAŻNE — static export
Ta strona jest budowana jako **static HTML** (`output: "export"`).
Nie wymaga Node.js/Passenger na serwerze — tylko pliki statyczne.
Folder `out/` jest wgrywany przez rsync.

## Deploy
```bash
./deploy.sh
```

Lub ręcznie:
1. `npm run build` — tworzy folder `out/`
2. `rsync -avz --delete ./out/ jacbar22@s180.cyber-folks.pl:/home/jacbar22/domains/lodydudek.pl/public_html/ -e "ssh -p 222"`

## Struktura projektu
```
app/
  layout.tsx       — Metadata SEO, OpenGraph, JSON-LD (5 lokali)
  page.tsx         — One-pager: importuje wszystkie sekcje
  globals.css      — Tailwind + Google Fonts Poppins
components/
  Navbar.tsx       — Sticky navbar z smooth-scroll
  HeroSection.tsx  — 100vh fullscreen hero
  AboutSection.tsx — Historia, statystyki, 4 filary marki
  FlavorsSection.tsx — 26 smaków WebP z filtrem kategorii
  CakesSection.tsx — Torty lodowe + tabela cen
  ReviewsSection.tsx — Opinie klientów + Google/FB ratings
  LocationsSection.tsx — 5 kart z Google Maps Embed
  CtaBanner.tsx    — Dark banner CTA do sklepu
  Footer.tsx       — Footer z kontaktem i linkami
data/
  content.ts       — Jedno źródło prawdy: lokale, smaki, opinie, ceny
public/
  logo.svg         — Logo SVG
  smaki/           — 26 zdjęć WebP smaków (skopiowane ze sklepu)
```

## Kolory marki (Tailwind)
- `cream-50` / `cream-100` — kremowe tła ciepłe
- `pink-400` / `pink-500` — główny różowy akcent
- `ink` — #1A1A1A czarny
- `slate` — #383838 ciemny szary
- `muted` — #888888 szary

## Zdjęcia
Aktualnie: Unsplash (hero, about, cakes).
Do podmiany na własne: zmień URL w `data/content.ts` (heroImage, aboutImages, cakeImage).

## Repozytorium GitHub
- URL: https://github.com/dfagency2/lody-dudek-strona
- Branch: main
- Po każdej zmianie: `git add . && git commit -m "..." && git push origin main`

## Sklep
Sklep działa osobno pod: https://sklep.lodydudek.pl
Repo: https://github.com/dfagency2/lody-dudek-sklep
