/*
 * STONEMARK HOME PAGE — Multi-page version
 * Design: Industrial Brutalism with Orange Fire
 * Sections: Hero → Stats → Services Overview → Why Us Preview → Reviews Teaser → Service Area Teaser → CTA Banner
 */

import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { Phone, Star, ArrowRight, Shield, Clock, Award, DollarSign, Wrench, Users, Check } from "lucide-react";
import PageLayout from "@/components/PageLayout";

const HERO_IMAGE = "/hero-premium.png";
const SHINGLE_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-shingle-roof-jQW6GRNKU9ZJ4WaJaoDf5b.webp";
const METAL_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-metal-roof-YSzM9t43uu4gj6TMuEpYoM.webp";
const GUTTERS_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-gutters-inahw44ikfzdtCLnRktdzR.webp";
const TPO_IMAGE =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-tpo-roof-GWvFprdbgEknM55hGy7TBA.webp";

// ─── Animated counter hook ────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

// ─── Intersection observer hook ───────────────────────────────────────────────
function useVisible(threshold = 0.15) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 100); return () => clearTimeout(t); }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${HERO_IMAGE})` }} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/30" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-card" style={{ clipPath: "polygon(0 60%, 100% 0%, 100% 100%, 0% 100%)" }} />

      <div className="container relative z-10 pt-24 pb-32">
        <div className="max-w-3xl">
          <div className={`flex items-center gap-3 mb-6 transition-all duration-700 ${visible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Nashville, Tennessee</span>
          </div>

          <h1
            className={`font-['Barlow_Condensed'] text-foreground leading-[0.92] mb-6 transition-all duration-700 delay-100 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{ fontSize: "clamp(3.5rem, 8vw, 7rem)", fontWeight: 900 }}
          >
            BUILT TO<br /><span className="text-[#F97316]">LAST.</span><br />BUILT TO<br />PROTECT.
          </h1>

          <p className={`font-['DM_Sans'] text-foreground/70 text-lg md:text-xl max-w-xl mb-8 leading-relaxed transition-all duration-700 delay-200 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            Middle Tennessee's trusted roofing contractor with <strong className="text-foreground">45+ years of experience</strong>. GAF Certified, OSHA certified, and backed by a <strong className="text-foreground">5-star reputation</strong>.
          </p>

          <div className={`flex flex-wrap gap-4 mb-10 transition-all duration-700 delay-300 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <a href="tel:6152997552" className="btn-orange flex items-center gap-2 text-base"><Phone size={17} />Call (615) 299-7552</a>
            <Link href="/contact" className="btn-outline-orange text-base">Free Estimate</Link>
          </div>

          <div className={`flex flex-wrap items-center gap-6 transition-all duration-700 delay-400 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-[#F97316] text-[#F97316]" />)}
              <span className="text-foreground/60 text-sm ml-1 font-['DM_Sans']">5.0 Google</span>
            </div>
            <div className="w-px h-5 bg-border" />
            <span className="text-foreground/60 text-sm font-['DM_Sans']">A+ BBB Rating</span>
            <div className="w-px h-5 bg-border" />
            <span className="text-foreground/60 text-sm font-['DM_Sans']">GAF Certified</span>
            <div className="w-px h-5 bg-border" />
            <span className="text-foreground/60 text-sm font-['DM_Sans']">Licensed & Insured</span>
          </div>
        </div>
      </div>

    </section>
  );
}

// ─── Stats Bar ────────────────────────────────────────────────────────────────
function StatsBar() {
  const { ref, visible } = useVisible(0.3);
  const stats = [
    { value: 45, suffix: "+", label: "Years Experience" },
    { value: 5, suffix: ".0★", label: "Google Rating" },
    { value: 2, suffix: "M", prefix: "$", label: "Liability Coverage" },
    { value: 25, suffix: "+", label: "Google Reviews" },
  ];
  return (
    <section id="stats" ref={ref} className="relative bg-card border-y border-border">
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F97316]" />
      <div className="container">
        <div className="flex flex-wrap justify-around divide-x divide-border">
          {stats.map((s, i) => {
            const count = useCountUp(s.value, 1600, visible);
            return (
              <div key={i} className="flex flex-col items-center text-center px-6 py-6 md:py-8 flex-1 min-w-[130px]">
                <div className="font-['Barlow_Condensed'] text-[#F97316] leading-none mb-1" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}>
                  {s.prefix}{count}{s.suffix}
                </div>
                <div className="font-['Barlow_Condensed'] text-foreground/60 uppercase tracking-widest text-xs font-semibold">{s.label}</div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {["GAF Certified Contractor", "OSHA Certified", "Licensed & Bonded", "A+ BBB Rating", "Middle TN Home Builders Award"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#F97316] rotate-45 flex-shrink-0" />
                <span className="font-['DM_Sans'] text-foreground/60 text-xs uppercase tracking-widest">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services Overview ────────────────────────────────────────────────────────
const serviceCards = [
  { title: "Asphalt Shingle Roofing", tag: "Most Popular", image: SHINGLE_IMAGE, desc: "Premium dimensional shingles installed with precision. Most residential roofs completed in a single day with GAF-backed warranty systems." },
  { title: "Standing Seam Metal", tag: "Premium", image: METAL_IMAGE, desc: "Durable, low-maintenance metal roofing for residential and commercial properties. Superior wind and impact resistance." },
  { title: "Low-Slope / TPO", tag: "Commercial", image: TPO_IMAGE, desc: "Commercial-grade TPO membrane systems for flat and low-slope roofs. Energy-efficient and UV-resistant." },
  { title: "Seamless Gutters & Guards", tag: "Protection", image: GUTTERS_IMAGE, desc: "Custom-fabricated seamless aluminum gutters with gutter guard systems to eliminate clogging." },
];

function ServicesOverview() {
  const { ref, visible } = useVisible(0.1);
  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container">
        <div className={`mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#F97316]" />
              <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">What We Do</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-foreground leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}>
              ROOFING SERVICES<br /><span className="text-[#F97316]">DONE RIGHT.</span>
            </h2>
          </div>
          <Link href="/services" className="btn-outline-orange flex items-center gap-2 self-start md:self-auto whitespace-nowrap">
            All Services <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {serviceCards.map((s, i) => (
            <div
              key={s.title}
              className={`service-card transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={s.image} alt={s.title} className="w-full h-full object-cover" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                <div className="absolute top-3 right-3 bg-[#F97316] px-2 py-0.5">
                  <span className="font-['Barlow_Condensed'] text-white text-xs uppercase tracking-widest font-semibold">{s.tag}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-['Barlow_Condensed'] text-foreground text-lg uppercase tracking-wide mb-2 leading-tight" style={{ fontWeight: 800 }}>{s.title}</h3>
                <p className="font-['DM_Sans'] text-foreground/60 text-sm leading-relaxed mb-4">{s.desc}</p>
                <Link href="/services" className="flex items-center gap-2 text-[#F97316] font-['Barlow_Condensed'] text-sm uppercase tracking-widest font-semibold hover:gap-3 transition-all duration-200">
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Soffit + Storm damage mini cards */}
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {[
            { title: "Soffit & Fascia Repair", desc: "Expert repair and replacement of soffit and fascia boards to protect your home from moisture and pests." },
            { title: "Storm Damage Response", desc: "Fast emergency response for storm-damaged roofs. We work directly with insurance companies to streamline your claim." },
          ].map((s, i) => (
            <div key={s.title} className={`service-card p-6 flex items-start gap-4 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${(i + 4) * 80}ms` }}>
              <div className="w-10 h-10 bg-[#F97316]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <div className="w-4 h-4 bg-[#F97316] rotate-45" />
              </div>
              <div>
                <h3 className="font-['Barlow_Condensed'] text-foreground text-lg uppercase tracking-wide mb-1" style={{ fontWeight: 800 }}>{s.title}</h3>
                <p className="font-['DM_Sans'] text-foreground/60 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Why Us Preview ───────────────────────────────────────────────────────────
const highlights = [
  { icon: Clock, title: "Most Roofs Done in One Day", desc: "Full crew mobilized so your home is protected fast." },
  { icon: Award, title: "GAF Certified & Warranty-Backed", desc: "Manufacturer-backed warranty systems on every eligible install." },
  { icon: Shield, title: "$2M Liability Coverage", desc: "Fully licensed, bonded, and insured for your protection." },
  { icon: Wrench, title: "45+ Years of Expertise", desc: "Owner Robert Yeatman brings decades of hands-on knowledge." },
  { icon: DollarSign, title: "Fair, Competitive Pricing", desc: "Transparent estimates with no hidden fees." },
  { icon: Users, title: "Locally Owned & Hands-On", desc: "You deal directly with the owner, not a call center." },
];

function WhyUsPreview() {
  const { ref, visible } = useVisible(0.1);
  return (
    <section className="py-24 relative overflow-hidden bg-background" ref={ref}>
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]" style={{ background: "repeating-linear-gradient(45deg, #F97316 0px, #F97316 1px, transparent 1px, transparent 20px)" }} />
      <div className="container relative z-10">
        <div className={`mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#F97316]" />
              <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Why StoneMark</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-foreground leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}>
              THE DIFFERENCE IS<br /><span className="text-[#F97316]">EXPERIENCE.</span>
            </h2>
          </div>
          <Link href="/about" className="btn-outline-orange flex items-center gap-2 self-start md:self-auto whitespace-nowrap">
            About Us <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {highlights.map((item, i) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`p-5 border border-border bg-card hover:border-[#F97316]/40 transition-all duration-300 group ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316]/20 transition-colors">
                    <Icon size={18} className="text-[#F97316]" />
                  </div>
                  <div>
                    <h4 className="font-['Barlow_Condensed'] text-foreground text-base uppercase tracking-wide mb-1 leading-tight" style={{ fontWeight: 700 }}>{item.title}</h4>
                    <p className="font-['DM_Sans'] text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Financing Section ────────────────────────────────────────────────────────
const financingBenefits = [
  "Various finance options available",
  "No pre-payment penalties",
  "120 month low interest loans",
  "Approval within 60 seconds!",
  "All loans are non-secured"
];

function FinancingSection() {
  const { ref, visible } = useVisible(0.1);
  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container relative z-10">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div className="flex-1 w-full order-2 lg:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#F97316]" />
              <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Flexible Payments</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-foreground leading-none mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900 }}>
              FINANCING OPTIONS<br /><span className="text-[#F97316]">AVAILABLE.</span>
            </h2>
            <p className="font-['DM_Sans'] text-foreground/70 text-lg mb-8 max-w-lg leading-relaxed">
              Get the roof you need today and pay over time. We partner with Wisetack to offer flexible, stress-free financing tailored to your budget.
            </p>
            <ul className="space-y-4 mb-10">
              {financingBenefits.map((benefit, i) => (
                <li key={i} className={`flex items-start gap-4 transition-all duration-500`} style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="w-6 h-6 rounded-full bg-[#F97316]/10 border border-[#F97316]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={14} className="text-[#F97316]" />
                  </div>
                  <span className="font-['DM_Sans'] text-foreground text-base leading-snug">{benefit}</span>
                </li>
              ))}
            </ul>
            <a href="https://wisetack.com/" target="_blank" rel="noopener noreferrer" className="btn-orange inline-flex items-center gap-2">
              Apply for Wisetack Financing <ArrowRight size={16} />
            </a>
          </div>
          <div className="flex-1 w-full order-1 lg:order-2">
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-border shadow-[0_20px_50px_rgba(0,0,0,0.05)] bg-card">
              <img src={SHINGLE_IMAGE} alt="Premium Roofing Showcase" className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                 <div className="bg-background/80 backdrop-blur-md border border-border p-6 shadow-xl">
                   <div className="font-['Barlow_Condensed'] text-foreground text-xl uppercase tracking-widest font-bold mb-1">Upgrade Your Roof Today</div>
                   <div className="font-['DM_Sans'] text-foreground/70 text-sm">Don't let budget constraints stop you from protecting your home. Fast approvals, competitive rates.</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Reviews Teaser ───────────────────────────────────────────────────────────
const featuredReviews = [
  { name: "David M.", location: "Brentwood, TN", text: "Robert and his crew replaced our entire roof in one day. Showed up on time, worked clean, and the quality is outstanding. Fair pricing and great communication throughout.", service: "Asphalt Shingle" },
  { name: "Jennifer K.", location: "Franklin, TN", text: "After the hailstorm, Robert responded within hours. He walked us through the insurance process and the new roof looks incredible. Fast, reliable, and honest.", service: "Storm Damage" },
  { name: "Mark T.", location: "Murfreesboro, TN", text: "We got three bids and StoneMark came in competitive while offering the best warranty. The standing seam metal roof is beautiful. Robert was hands-on the entire time.", service: "Metal Roof" },
];

function ReviewsTeaser() {
  const { ref, visible } = useVisible(0.1);
  return (
    <section className="py-24 bg-card" ref={ref}>
      <div className="container">
        <div className={`mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#F97316]" />
              <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Customer Reviews</span>
            </div>
            <h2 className="font-['Barlow_Condensed'] text-foreground leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}>
              WHAT NASHVILLE<br /><span className="text-[#F97316]">IS SAYING.</span>
            </h2>
          </div>
          <div className="flex items-center gap-4 bg-muted border border-border px-6 py-4 self-start">
            <div>
              <div className="font-['Barlow_Condensed'] text-[#F97316] text-4xl leading-none" style={{ fontWeight: 900 }}>5.0</div>
              <div className="flex gap-0.5 mt-1">{[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-[#F97316] text-[#F97316]" />)}</div>
            </div>
            <div className="border-l border-border pl-4">
              <div className="font-['DM_Sans'] text-foreground text-sm font-medium">Google Rating</div>
              <div className="font-['DM_Sans'] text-foreground/50 text-xs">25+ Reviews</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {featuredReviews.map((r, i) => (
            <div key={i} className={`bg-card border border-border p-6 hover:border-[#F97316]/40 transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex gap-1 mb-3">{[...Array(5)].map((_, j) => <Star key={j} size={14} className="fill-[#F97316] text-[#F97316]" />)}</div>
              <p className="font-['DM_Sans'] text-foreground/70 text-sm leading-relaxed mb-5">"{r.text}"</p>
              <div className="flex items-end justify-between">
                <div>
                  <div className="font-['Barlow_Condensed'] text-foreground text-base uppercase tracking-wide" style={{ fontWeight: 700 }}>{r.name}</div>
                  <div className="font-['DM_Sans'] text-foreground/40 text-xs">{r.location}</div>
                </div>
                <div className="bg-[#F97316]/10 border border-[#F97316]/20 px-2 py-1">
                  <span className="font-['Barlow_Condensed'] text-[#F97316] text-xs uppercase tracking-widest">{r.service}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center transition-all duration-700 delay-300 ${visible ? "opacity-100" : "opacity-0"}`}>
          <Link href="/reviews" className="btn-outline-orange inline-flex items-center gap-2">
            Read All Reviews <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Banner ───────────────────────────────────────────────────────────────
function CTABanner() {
  const { ref, visible } = useVisible(0.2);
  return (
    <section className="py-20 relative overflow-hidden bg-[#F97316]" ref={ref}>
      <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: "repeating-linear-gradient(45deg, #000 0px, #000 1px, transparent 1px, transparent 20px)" }} />
      <div className="container relative z-10">
        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <div>
            <h2 className="font-['Barlow_Condensed'] text-white leading-none mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
              READY TO PROTECT YOUR HOME?
            </h2>
            <p className="font-['DM_Sans'] text-white/80 text-lg">
              Call Robert directly or request a free estimate online. We respond fast.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <a href="tel:6152997552" className="flex items-center justify-center gap-2 bg-white text-[#F97316] font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/90 transition-colors" style={{ fontWeight: 700 }}>
              <Phone size={17} /> (615) 299-7552
            </a>
            <Link href="/contact" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/10 transition-colors" style={{ fontWeight: 700 }}>
              Free Estimate
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <PageLayout>
      <Hero />
      <StatsBar />
      <ServicesOverview />
      <WhyUsPreview />
      <FinancingSection />
      <ReviewsTeaser />
      <CTABanner />
    </PageLayout>
  );
}
