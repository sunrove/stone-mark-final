/*
 * STONEMARK FLOATING CTA
 * Design: Industrial Brutalism — orange beacon, pulsing animation
 * Floating phone button visible on mobile scroll
 */

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <a
      href="tel:6152997552"
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#F97316] text-white px-5 py-3 shadow-[0_4px_24px_rgba(249,115,22,0.5)] transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Call StoneMark"
    >
      {/* Pulse ring */}
      <span className="relative flex h-5 w-5 flex-shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full bg-white opacity-30" />
        <Phone size={18} className="relative" />
      </span>
      <span className="font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest hidden sm:block" style={{ fontWeight: 700 }}>
        (615) 299-7552
      </span>
    </a>
  );
}
