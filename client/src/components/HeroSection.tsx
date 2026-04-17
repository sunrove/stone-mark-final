/*
 * STONEMARK HERO SECTION
 * Design: Industrial Brutalism — 60/40 left-heavy split, staggered word reveal
 * Full-bleed hero image with dark overlay, diagonal bottom cut
 * Background: dark overlay on Nashville roofing crew image
 */

import { useEffect, useRef, useState } from "react";
import { Phone, ChevronDown, Star } from "lucide-react";

const HERO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-hero-X7CfTXXzMU2mAAirGBeBZL.webp";

export default function HeroSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#1C1F26" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Gradient overlay — dark left, lighter right for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1C1F26]/95 via-[#1C1F26]/80 to-[#1C1F26]/40" />
      {/* Bottom diagonal cut */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 bg-[#3A3F4A]"
        style={{ clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)" }}
      />

      <div className="container relative z-10 pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Eyebrow label */}
          <div
            className={`flex items-center gap-3 mb-6 transition-all duration-700 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span
              className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold"
            >
              Nashville, Tennessee
            </span>
          </div>

          {/* Main headline */}
          <h1
            className={`font-['Barlow_Condensed'] text-white leading-[0.92] mb-6 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 900 }}
          >
            BUILT TO
            <br />
            <span className="text-[#F97316]">LAST.</span>
            <br />
            BUILT TO
            <br />
            PROTECT.
          </h1>

          {/* Sub-headline */}
          <p
            className={`font-['DM_Sans'] text-white/75 text-lg md:text-xl max-w-xl mb-8 leading-relaxed transition-all duration-700 delay-200 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            Middle Tennessee's trusted roofing contractor with{" "}
            <strong className="text-white">45+ years of experience</strong>. GAF Certified,
            OSHA certified, and backed by a{" "}
            <strong className="text-white">5-star reputation</strong>.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-300 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a href="tel:6152997552" className="btn-orange flex items-center gap-2 text-base">
              <Phone size={17} />
              Call (615) 299-7552
            </a>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-outline-orange text-base"
            >
              Free Estimate
            </button>
          </div>

          {/* Trust badges row */}
          <div
            className={`flex flex-wrap items-center gap-6 transition-all duration-700 delay-400 ${
              visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Stars */}
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#F97316] text-[#F97316]" />
              ))}
              <span className="text-white/70 text-sm ml-1 font-['DM_Sans']">5.0 Google</span>
            </div>
            <div className="w-px h-5 bg-white/20" />
            <span className="text-white/70 text-sm font-['DM_Sans']">A+ BBB Rating</span>
            <div className="w-px h-5 bg-white/20" />
            <span className="text-white/70 text-sm font-['DM_Sans']">GAF Certified</span>
            <div className="w-px h-5 bg-white/20" />
            <span className="text-white/70 text-sm font-['DM_Sans']">Licensed & Insured</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 text-white/40 hover:text-[#F97316] transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
