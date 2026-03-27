"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { BRAND } from "@/data/content";

const navLinks = [
  { label: "O nas", href: "#o-nas" },
  { label: "Smaki", href: "#smaki" },
  { label: "Torty", href: "#torty" },
  { label: "Lokale", href: "#lokale" },
  { label: "Opinie", href: "#opinie" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream-50/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="flex items-center gap-2 flex-shrink-0"
        >
          <Image
            src="/logo.svg"
            alt="Lody Dudek"
            width={36}
            height={36}
            className="w-9 h-9"
          />
          <span
            className={`font-semibold text-base tracking-wide transition-colors ${
              scrolled ? "text-ink" : "text-white"
            }`}
          >
            Lody Dudek
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-colors hover:text-pink-500 ${
                  scrolled ? "text-slate" : "text-white/90"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={BRAND.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-pink-500 hover:bg-pink-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-md hover:-translate-y-0.5"
          >
            Zamów online
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled ? "text-ink" : "text-white"
          }`}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-cream-50 border-t border-cream-200 shadow-lg">
          <ul className="px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 px-4 text-sm font-medium text-slate rounded-xl hover:bg-cream-100 hover:text-pink-500 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href={BRAND.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-pink-500 text-white text-sm font-semibold py-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                Zamów online
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
