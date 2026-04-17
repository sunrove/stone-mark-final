/*
 * STONEMARK WHY US SECTION
 * Design: Industrial Brutalism — asymmetric 60/40 split, diagonal orange accents
 * Left: large image with overlay; Right: differentiator list
 */

import { useEffect, useRef, useState } from "react";
import { Shield, Clock, Award, DollarSign, Wrench, Users } from "lucide-react";

const SHINGLE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-shingle-roof-jQW6GRNKU9ZJ4WaJaoDf5b.webp";

const differentiators = [
  {
    icon: Clock,
    title: "Most Roofs Done in One Day",
    desc: "We mobilize a full crew so your home is protected fast — minimal disruption to your life.",
  },
  {
    icon: Award,
    title: "GAF Certified & Warranty-Backed",
    desc: "As a GAF Certified contractor, we offer manufacturer-backed warranty systems for lasting peace of mind.",
  },
  {
    icon: Shield,
    title: "$2M Liability Coverage",
    desc: "Licensed, bonded, and insured with $2 million in liability coverage. Your property is fully protected.",
  },
  {
    icon: Wrench,
    title: "45+ Years of Expertise",
    desc: "Owner Robert Yeatman brings over four decades of hands-on roofing knowledge to every job.",
  },
  {
    icon: DollarSign,
    title: "Fair, Competitive Pricing",
    desc: "Transparent estimates with no hidden fees. We provide honest pricing that reflects real value.",
  },
  {
    icon: Users,
    title: "Locally Owned & Hands-On",
    desc: "Robert is personally involved in every project. You deal with the owner, not a call center.",
  },
];

export default function WhyUsSection() {
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
      id="why-us"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #22252e 0%, #1C1F26 100%)" }}
    >
      {/* Background diagonal accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5"
        style={{
          background: "repeating-linear-gradient(45deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 20px)",
        }}
      />

      <div className="container relative z-10" ref={ref}>
        {/* Section header */}
        <div
          className={`mb-16 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">
              Why StoneMark
            </span>
          </div>
          <h2
            className="font-['Barlow_Condensed'] text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}
          >
            THE DIFFERENCE IS
            <br />
            <span className="text-[#F97316]">EXPERIENCE.</span>
          </h2>
        </div>

        {/* Asymmetric split layout */}
        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left: Image (3/5 width) */}
          <div
            className={`lg:col-span-2 transition-all duration-700 delay-100 ${
              visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="relative">
              <img
                src={SHINGLE_IMAGE}
                alt="StoneMark roofing crew at work"
                className="w-full object-cover"
                style={{ height: "500px" }}
                loading="lazy"
              />
              {/* Orange corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 bg-[#F97316]" />
              <div className="absolute bottom-0 right-0 w-12 h-12 bg-[#F97316]" />
              {/* Overlay card */}
              <div className="absolute bottom-8 left-8 right-8 bg-[#3A3F4A]/90 border border-[#F97316]/30 p-5 backdrop-blur-sm">
                <div
                  className="font-['Barlow_Condensed'] text-[#F97316] text-4xl leading-none mb-1"
                  style={{ fontWeight: 900 }}
                >
                  2012
                </div>
                <div className="font-['DM_Sans'] text-white/70 text-sm">
                  In business since 2012 — serving Middle Tennessee with integrity
                </div>
              </div>
            </div>
          </div>

          {/* Right: Differentiators (2/5 width) */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`p-5 border border-white/10 bg-[#3A3F4A]/60 hover:border-[#F97316]/40 transition-all duration-300 group ${
                    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-[#F97316]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316]/25 transition-colors">
                      <Icon size={18} className="text-[#F97316]" />
                    </div>
                    <div>
                      <h4
                        className="font-['Barlow_Condensed'] text-white text-base uppercase tracking-wide mb-1 leading-tight"
                        style={{ fontWeight: 700 }}
                      >
                        {item.title}
                      </h4>
                      <p className="font-['DM_Sans'] text-white/55 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Award callout */}
        <div
          className={`mt-12 flex items-center gap-6 border-l-4 border-[#F97316] pl-6 transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-widest text-xs font-semibold mb-1">
              Industry Recognition
            </div>
            <p className="font-['DM_Sans'] text-white/70 text-sm">
              Recognized by the{" "}
              <strong className="text-white">Middle Tennessee Home Builders Association</strong>{" "}
              for outstanding craftsmanship and quality workmanship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
