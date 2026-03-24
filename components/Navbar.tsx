"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#dla-kogo", label: "Dla kogo" },
  { href: "#uslugi", label: "Usługi" },
  { href: "#o-mnie", label: "O mnie" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLink = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-cream/95 backdrop-blur-md shadow-sm border-b border-stone-light"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-18">
        {/* Logo / nazwa — ZMIEŃ */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-serif text-lg text-text tracking-wide hover:text-sage-dark transition-colors"
        >
          {/* ZMIEŃ: nazwa biura rachunkowego */}
          Biuro Rachunkowe
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-sm text-text-muted hover:text-text transition-colors duration-200 cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink("#kontakt")}
            className="text-sm bg-sage-dark text-cream px-5 py-2.5 rounded-full hover:bg-sage-deeper transition-colors duration-200 cursor-pointer"
          >
            Zapytaj o wycenę
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-text transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 pt-2 flex flex-col gap-1 border-t border-stone-light">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleLink(link.href)}
              className="text-left py-3 text-sm text-text-soft hover:text-sage-dark transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleLink("#kontakt")}
            className="mt-2 bg-sage-dark text-cream text-sm px-5 py-3 rounded-full hover:bg-sage-deeper transition-colors cursor-pointer"
          >
            Zapytaj o wycenę
          </button>
        </div>
      </div>
    </header>
  );
}
