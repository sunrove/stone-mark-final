/*
 * STONEMARK SERVICES SECTION
 * Design: Industrial Brutalism — staggered brick-pattern grid
 * Orange left-border accent on hover, service images, Barlow Condensed headings
 */

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    title: "Asphalt Shingle Roofing",
    description:
      "Premium dimensional and architectural shingles installed with precision. Most residential roofs completed in a single day. GAF-backed warranty systems available.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-shingle-roof-jQW6GRNKU9ZJ4WaJaoDf5b.webp",
    tag: "Most Popular",
  },
  {
    title: "Standing Seam & Metal Roofing",
    description:
      "Durable, low-maintenance metal roofing systems for residential and commercial properties. Superior wind and impact resistance with a modern aesthetic.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-metal-roof-YSzM9t43uu4gj6TMuEpYoM.webp",
    tag: "Premium",
  },
  {
    title: "Low-Slope / TPO Roofing",
    description:
      "Commercial-grade TPO membrane systems for flat and low-slope roofs. Energy-efficient, UV-resistant, and engineered for long-term performance.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-tpo-roof-GWvFprdbgEknM55hGy7TBA.webp",
    tag: "Commercial",
  },
  {
    title: "Seamless Gutters & Guards",
    description:
      "Custom-fabricated seamless aluminum gutters with professional installation. Gutter guard systems to eliminate clogging and reduce maintenance.",
    image:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-gutters-inahw44ikfzdtCLnRktdzR.webp",
    tag: "Protection",
  },
  {
    title: "Soffit & Fascia Repair",
    description:
      "Expert repair and replacement of soffit and fascia boards. Protect your home's structure from moisture, pests, and rot with quality materials.",
    image: null,
    tag: "Repair",
  },
  {
    title: "Storm Damage Response",
    description:
      "Fast response for storm-damaged roofs. We work directly with insurance companies to streamline your claim and get your roof repaired quickly.",
    image: null,
    tag: "Emergency",
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`service-card transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image */}
      {service.image ? (
        <div className="relative h-48 overflow-hidden">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1C1F26] to-transparent" />
          {/* Tag */}
          <div className="absolute top-3 right-3 bg-[#F97316] px-2 py-0.5">
            <span className="font-['Barlow_Condensed'] text-white text-xs uppercase tracking-widest font-semibold">
              {service.tag}
            </span>
          </div>
        </div>
      ) : (
        <div className="relative h-20 bg-[#4A5060] flex items-center justify-center">
          <div className="w-10 h-10 bg-[#F97316]/20 flex items-center justify-center">
            <div className="w-4 h-4 bg-[#F97316] rotate-45" />
          </div>
          <div className="absolute top-3 right-3 bg-[#F97316] px-2 py-0.5">
            <span className="font-['Barlow_Condensed'] text-white text-xs uppercase tracking-widest font-semibold">
              {service.tag}
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3
          className="font-['Barlow_Condensed'] text-white text-xl uppercase tracking-wide mb-3 leading-tight"
          style={{ fontWeight: 800 }}
        >
          {service.title}
        </h3>
        <p className="font-['DM_Sans'] text-white/60 text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        <button
          onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-2 text-[#F97316] font-['Barlow_Condensed'] text-sm uppercase tracking-widest font-semibold hover:gap-3 transition-all duration-200"
        >
          Get a Quote <ArrowRight size={14} />
        </button>
      </div>
    </div>
  );
}

export default function ServicesSection() {
  const [titleVisible, setTitleVisible] = useState(false);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTitleVisible(true); },
      { threshold: 0.2 }
    );
    if (titleRef.current) observer.observe(titleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-24 bg-[#3A3F4A]">
      <div className="container">
        {/* Section header */}
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${
            titleVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">
              What We Do
            </span>
          </div>
          <h2
            className="font-['Barlow_Condensed'] text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}
          >
            ROOFING SERVICES
            <br />
            <span className="text-[#F97316]">DONE RIGHT.</span>
          </h2>
          <p className="font-['DM_Sans'] text-white/60 text-lg max-w-2xl mt-4 leading-relaxed">
            From complete roof replacements to seamless gutters, we handle every aspect of
            protecting your home or business — with the craftsmanship Nashville has trusted
            for over four decades.
          </p>
        </div>

        {/* Services grid — staggered brick pattern */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Financing callout */}
        <div className="mt-12 border border-[#F97316]/30 bg-[#F97316]/5 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 bg-[#F97316] rotate-45" />
              <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-widest text-sm font-semibold">
                Financing Available
              </span>
            </div>
            <h3
              className="font-['Barlow_Condensed'] text-white text-2xl uppercase"
              style={{ fontWeight: 800 }}
            >
              Don't Let Budget Hold You Back
            </h3>
            <p className="font-['DM_Sans'] text-white/60 text-sm mt-1">
              We offer flexible financing options to fit your needs. Ask us about payment plans.
            </p>
          </div>
          <a
            href="tel:6152997552"
            className="btn-orange whitespace-nowrap flex-shrink-0"
          >
            Ask About Financing
          </a>
        </div>
      </div>
    </section>
  );
}
