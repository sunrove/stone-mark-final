/*
 * STONEMARK SERVICE AREA SECTION
 * Design: Industrial Brutalism — dark bg with orange grid pattern
 * Cities and counties listed in a structured grid
 */

import { useEffect, useRef, useState } from "react";
import { MapPin } from "lucide-react";

const cities = [
  "Nashville", "Brentwood", "Franklin", "Murfreesboro",
  "Smyrna", "Nolensville", "Spring Hill", "Columbia",
  "Antioch", "Hermitage", "Mount Juliet", "Hendersonville",
  "Gallatin", "Lebanon", "La Vergne", "Lavergne",
];

const counties = [
  { name: "Davidson County", note: "Nashville Metro" },
  { name: "Williamson County", note: "Brentwood, Franklin" },
  { name: "Rutherford County", note: "Murfreesboro, Smyrna" },
  { name: "Maury County", note: "Columbia, Spring Hill" },
];

export default function ServiceAreaSection() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="service-area"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #22252e 0%, #1C1F26 100%)" }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(#F97316 1px, transparent 1px),
            linear-gradient(90deg, #F97316 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text content */}
          <div>
            <div
              className={`transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[3px] bg-[#F97316]" />
                <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">
                  Where We Work
                </span>
              </div>
              <h2
                className="font-['Barlow_Condensed'] text-white leading-none mb-6"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}
              >
                SERVING ALL OF
                <br />
                <span className="text-[#F97316]">MIDDLE TENNESSEE.</span>
              </h2>
              <p className="font-['DM_Sans'] text-white/60 text-lg leading-relaxed mb-8">
                We serve the greater Middle Tennessee region. We service any home within 
                an hour of Murfreesboro. We cover Davidson, Williamson, Rutherford, 
                and Maury counties. If you're unsure whether we cover your area, give us a call.
              </p>
            </div>

            {/* Counties */}
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 transition-all duration-700 delay-100 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              {counties.map((county) => (
                <div
                  key={county.name}
                  className="border border-[#F97316]/30 bg-[#F97316]/5 p-4"
                >
                  <div
                    className="font-['Barlow_Condensed'] text-white text-base uppercase tracking-wide mb-0.5"
                    style={{ fontWeight: 700 }}
                  >
                    {county.name}
                  </div>
                  <div className="font-['DM_Sans'] text-white/50 text-xs">{county.note}</div>
                </div>
              ))}
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <a
                href="tel:6152997552"
                className="btn-orange inline-flex items-center gap-2"
              >
                <MapPin size={16} />
                Check Your Area — Call Us
              </a>
            </div>
          </div>

          {/* Right: Cities grid */}
          <div
            className={`transition-all duration-700 delay-150 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="bg-[#3A3F4A] border border-white/10 p-8">
              <div
                className="font-['Barlow_Condensed'] text-white text-xl uppercase tracking-wide mb-6"
                style={{ fontWeight: 800 }}
              >
                Cities We Serve
              </div>
              <div className="grid grid-cols-2 gap-2">
                {cities.map((city) => (
                  <div key={city} className="flex items-center gap-2 py-2 border-b border-white/5">
                    <div className="w-1.5 h-1.5 bg-[#F97316] rotate-45 flex-shrink-0" />
                    <span className="font-['DM_Sans'] text-white/70 text-sm">{city}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-4 border-t border-white/10">
                <p className="font-['DM_Sans'] text-white/40 text-xs">
                  Don't see your city? We likely still serve your area.{" "}
                  <a href="tel:6152997552" className="text-[#F97316] hover:underline">
                    Call to confirm.
                  </a>
                </p>
              </div>
            </div>

            {/* Quick contact card */}
            <div className="mt-4 bg-[#F97316] p-6">
              <div
                className="font-['Barlow_Condensed'] text-white text-2xl uppercase mb-2"
                style={{ fontWeight: 900 }}
              >
                Storm Damage?
              </div>
              <p className="font-['DM_Sans'] text-white/85 text-sm mb-4">
                We respond fast to storm damage calls. Don't wait — protect your home now.
              </p>
              <a
                href="tel:6152997552"
                className="inline-block bg-white text-[#F97316] font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-2 hover:bg-white/90 transition-colors"
                style={{ fontWeight: 700 }}
              >
                Call Now: (615) 299-7552
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
