/*
 * STONEMARK NAVBAR — Multi-page version
 * Design: Industrial Brutalism — sharp edges, Barlow Condensed, orange accents
 * Sticky top nav with mobile slide-in drawer, active page highlighting
 */

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close drawer on route change
  useEffect(() => {
    setOpen(false);
    window.scrollTo({ top: 0 });
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass shadow-md border-b"
            : "bg-black/30 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="container">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center group py-2">
              <img 
                src="/stonemark-logo-recolor.png" 
                alt="StoneMark Roofing" 
                className={`h-11 md:h-14 w-auto transition-all duration-300 ${scrolled ? "drop-shadow-sm" : "brightness-0 invert drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"}`} 
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-['Barlow_Condensed'] font-700 text-sm uppercase tracking-widest transition-colors duration-200 pb-0.5 ${
                      isActive
                        ? "text-[#F97316] border-b-2 border-[#F97316]"
                        : (scrolled ? "text-foreground/80 hover:text-[#F97316]" : "text-white drop-shadow-md hover:text-[#F97316]") + " border-b-2 border-transparent"
                    }`}
                    style={{ fontWeight: 700 }}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA Phone */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href="tel:6152997552"
                className="flex items-center gap-2 btn-orange text-sm px-4 py-2"
              >
                <Phone size={15} />
                (615) 299-7552
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className={`md:hidden p-2 transition-colors ${scrolled ? "text-foreground" : "text-white"}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setOpen(false)} />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-card border-l border-border transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-6 border-b border-border">
            <span
              className="font-['Barlow_Condensed'] text-xl uppercase tracking-wider text-foreground"
              style={{ fontWeight: 800 }}
            >
              Menu
            </span>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X size={22} />
            </button>
          </div>
          <nav className="flex flex-col p-6 gap-1">
            {navLinks.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-left font-['Barlow_Condensed'] font-700 text-lg uppercase tracking-widest transition-colors py-3 border-b border-border/50 ${
                    isActive ? "text-[#F97316]" : "text-foreground/70 hover:text-[#F97316]"
                  }`}
                  style={{ fontWeight: 700 }}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:6152997552"
              className="mt-6 flex items-center justify-center gap-2 btn-orange text-base"
            >
              <Phone size={16} />
              (615) 299-7552
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
