/*
 * STONEMARK SERVICES PAGE
 * Full detail on all 6 services with images, features, and FAQs
 */

import { useState } from "react";
import { useSEO } from "@/hooks/useSEO";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, ChevronDown, ChevronUp, Phone, ExternalLink, Shield, Layers, BarChart2, Grid } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const SHINGLE_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-shingle-roof-jQW6GRNKU9ZJ4WaJaoDf5b.webp";
const METAL_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-metal-roof-YSzM9t43uu4gj6TMuEpYoM.webp";
const GUTTERS_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-gutters-inahw44ikfzdtCLnRktdzR.webp";
const TPO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-tpo-roof-GWvFprdbgEknM55hGy7TBA.webp";
const SOFFIT_IMAGE = "/soffit-fascia.png";
const STORM_IMAGE = "/storm-damage.png";

const services = [
  {
    id: "asphalt-shingle",
    title: "Asphalt Shingle Roofing",
    tag: "Most Popular",
    image: SHINGLE_IMAGE,
    intro: "Asphalt shingles are the most widely used roofing material in Middle Tennessee — and for good reason. They offer an outstanding balance of durability, aesthetics, and value. StoneMark installs premium architectural and dimensional shingles from top manufacturers, including GAF-backed systems that carry industry-leading warranties.",
    features: [
      "Most residential roofs completed in a single day",
      "GAF-certified installation with manufacturer warranty",
      "Architectural (dimensional) and 3-tab shingle options",
      "Wide range of colors and styles to match your home",
      "Proper ventilation and underlayment included",
      "Full tear-off and disposal of old roofing",
      "Storm-resistant options available (Class 4 impact-rated)",
      "Financing options available",
    ],
    details: "Our asphalt shingle installations begin with a thorough inspection of your decking and structural components. We replace any damaged decking, install high-quality synthetic underlayment, and apply proper ice-and-water shield in vulnerable areas. Every installation follows GAF's strict installation standards, ensuring your warranty remains valid and your roof performs at its best for decades.",
    warranty: "GAF system warranties available — up to 50-year limited warranty on qualifying products.",
  },
  {
    id: "metal-roofing",
    title: "Standing Seam & Metal Roofing",
    tag: "Premium",
    image: METAL_IMAGE,
    intro: "Metal roofing has surged in popularity across Middle Tennessee, and StoneMark is at the forefront of this trend. Standing seam metal roofs offer unmatched longevity — often lasting 40–70 years — with minimal maintenance. Whether you're looking for a modern architectural statement or a practical long-term investment, metal roofing delivers.",
    features: [
      "Standing seam concealed fastener systems",
      "Exposed fastener metal panels (R-panel, corrugated)",
      "Residential and commercial applications",
      "Exceptional wind and impact resistance",
      "Energy-efficient — reflects solar heat",
      "Available in dozens of colors and profiles",
      "Ideal for steep-slope and low-slope applications",
      "Lifetime performance expectation",
    ],
    details: "StoneMark installs both standing seam (concealed fastener) and exposed fastener metal roofing systems. Standing seam is our most popular metal option — the hidden fastener design eliminates potential leak points and creates a clean, modern look. We work with premium steel and aluminum panels, properly flashed and sealed at every transition, valley, and penetration.",
    warranty: "Metal roofing systems typically carry 40-year paint warranties and lifetime structural warranties from the manufacturer.",
  },
  {
    id: "tpo-roofing",
    title: "Low-Slope / TPO Roofing",
    tag: "Commercial",
    image: TPO_IMAGE,
    intro: "For flat and low-slope roofs on commercial buildings, additions, and some residential structures, TPO (Thermoplastic Polyolefin) membrane roofing is the industry standard. StoneMark installs commercial-grade TPO systems that are energy-efficient, highly durable, and designed for the demanding Middle Tennessee climate.",
    features: [
      "Commercial and light industrial applications",
      "Energy Star rated — reduces cooling costs",
      "Heat-welded seams for maximum waterproofing",
      "Resistant to UV, ozone, and chemical exposure",
      "Available in white, grey, and tan",
      "Fully adhered, mechanically fastened, or ballasted systems",
      "Proper drainage design included",
      "Parapet wall and penetration flashing",
    ],
    details: "Our TPO installations are performed by OSHA-certified crews using commercial-grade hot-air welding equipment. Every seam is heat-welded to create a monolithic waterproof membrane — far superior to adhesive or tape-based systems. We assess your roof's drainage, substrate condition, and insulation needs before recommending the right system for your building.",
    warranty: "TPO systems carry 10–20 year manufacturer warranties depending on the system specified.",
  },
  {
    id: "gutters",
    title: "Seamless Gutters & Gutter Guards",
    tag: "Protection",
    image: GUTTERS_IMAGE,
    intro: "Your roof is only as good as the drainage system protecting it. StoneMark fabricates and installs custom seamless aluminum gutters on-site, eliminating the joints that cause leaks in sectional gutters. Paired with professional gutter guard installation, your home's drainage system will perform reliably for years with minimal maintenance.",
    features: [
      "Custom seamless aluminum gutters — fabricated on-site",
      "5\" and 6\" K-style profiles available",
      "Half-round gutters for historic and custom homes",
      "Gutter guard systems to prevent clogging",
      "Proper slope and drainage design",
      "Downspout sizing and placement",
      "Fascia board inspection and replacement if needed",
      "Wide color selection to match your home",
    ],
    details: "Unlike sectional gutters purchased from a hardware store, our seamless gutters are custom-formed from a continuous roll of aluminum at your property. This eliminates the joints that are the most common source of gutter leaks. We size every gutter system to your roof's square footage and local rainfall intensity, ensuring proper water management during heavy Tennessee storms.",
    warranty: "Seamless gutters carry a manufacturer warranty on materials, plus our workmanship guarantee.",
  },
  {
    id: "soffit-fascia",
    title: "Soffit & Fascia Repair",
    tag: "Repair",
    image: SOFFIT_IMAGE,
    intro: "Soffit and fascia are critical components of your roofing system that are often overlooked until serious damage occurs. These boards protect the rafters and roof structure from moisture, pests, and weather. StoneMark provides expert soffit and fascia repair and replacement using durable materials that match your home's existing profile.",
    features: [
      "Rotted or damaged wood fascia replacement",
      "Vinyl and aluminum fascia wrapping",
      "Vented and non-vented soffit replacement",
      "Pest damage repair and prevention",
      "Moisture barrier installation",
      "Color-matched materials available",
      "Coordination with gutter installation",
      "Full inspection of connected roofing components",
    ],
    details: "Damaged soffit and fascia often signal deeper moisture problems in your roofline. Our team performs a thorough inspection to identify the root cause — whether it's a failed gutter, inadequate ventilation, or direct water intrusion. We address the underlying issue before replacing the cosmetic components, ensuring the repair lasts.",
    warranty: "All soffit and fascia work is covered by our workmanship guarantee.",
  },
  {
    id: "storm-damage",
    title: "Storm Damage Repair & Insurance Claims",
    tag: "Emergency",
    image: STORM_IMAGE,
    intro: "Middle Tennessee is no stranger to severe weather — hail, high winds, and tornadoes can cause significant roof damage in minutes. StoneMark provides rapid response for storm-damaged roofs and has extensive experience working with homeowners' insurance companies to ensure you receive the coverage you're entitled to.",
    features: [
      "Rapid response — often same-day or next-day",
      "Thorough storm damage documentation",
      "Insurance claim assistance and adjuster coordination",
      "Emergency tarping to prevent further damage",
      "Hail damage assessment and reporting",
      "Wind damage repair and full replacement",
      "Supplement negotiation with insurance carriers",
      "No out-of-pocket surprises — we work with your deductible",
    ],
    details: "When a storm hits, time is critical. Water intrusion can cause tens of thousands of dollars in secondary damage within days. Our team responds quickly to assess damage, install emergency tarps if needed, and document everything thoroughly for your insurance claim. We have a proven track record of working with all major insurance carriers and ensuring our customers receive fair settlements.",
    warranty: "Storm damage repairs carry the same workmanship guarantee as our standard installations.",
  },
];

const faqs = [
  { q: "How long does a roof replacement take?", a: "Most residential asphalt shingle roofs are completed in a single day. Larger homes, complex roof geometries, or premium materials like metal may require 2–3 days. We'll give you a specific timeline during your estimate." },
  { q: "Do you offer financing?", a: "Yes. StoneMark offers flexible financing options to fit a variety of budgets. Ask us about available payment plans when you request your estimate." },
  { q: "What warranty do I get on a new roof?", a: "Warranty coverage depends on the product and installation system. The GAF System Plus Warranty provides for a full 50 years of non prorated protection. It is transferrable to the next buyer. Metal and TPO systems carry their own manufacturer warranties. We'll explain all warranty options during your consultation." },
  { q: "Are you licensed and insured?", a: "Yes. StoneMark is fully licensed, bonded, and insured with $2 million in liability coverage. We're also GAF Certified and OSHA certified. We're happy to provide proof of insurance before any work begins." },
  { q: "Do you handle insurance claims?", a: "Absolutely. We work directly with insurance adjusters and have extensive experience documenting storm damage, preparing estimates, and negotiating with carriers to ensure you receive fair coverage." },
  { q: "What areas do you serve?", a: "We serve Nashville and the greater Middle Tennessee region, including Brentwood, Franklin, Murfreesboro, Smyrna, Nolensville, Spring Hill, Columbia, and surrounding areas across Davidson, Williamson, Rutherford, and Maury counties." },
];

const gafWidgets = [
  {
    id: "shingle-widget",
    icon: Grid,
    title: "Timberline HDZ® Shingle Colors",
    desc: "Explore every available color for GAF's most popular architectural shingle. See how each shade looks on a real home before you commit.",
    embedId: "timberline-hdz",
    url: "https://www.gaf.com/en-us/roofing-products/residential-roofing/roof-shingles/timberline-hdz",
  },
  {
    id: "parts-of-roof",
    icon: Layers,
    title: "Parts of a Roof",
    desc: "An interactive educational tool that walks you through every layer of a GAF roof system — from decking to shingles — and the products that protect each one.",
    embedId: "parts-of-roof",
    url: "https://www.gaf.com/en-us/for-homeowners/how-roofing-works",
  },
  {
    id: "warranty-chart",
    icon: Shield,
    title: "GAF Warranty Chart",
    desc: "Compare the warranty tiers available based on our GAF certification level — from standard coverage up to the Golden Pledge® Master Elite® system warranty.",
    embedId: "warranty-chart",
    url: "https://www.gaf.com/en-us/roofing-products/residential-roofing/warranties",
  },
  {
    id: "shingle-comparison",
    icon: BarChart2,
    title: "Shingle Comparison Chart",
    desc: "Side-by-side comparison of GAF's four most popular shingle lines — performance specs, price points, and visual profiles at a glance.",
    embedId: "shingle-comparison",
    url: "https://www.gaf.com/en-us/roofing-products/residential-roofing/roof-shingles",
  },
];

function GafContentBuilder() {
  const [activeWidget, setActiveWidget] = useState<string>("timberline-hdz");
  const active = gafWidgets.find((w) => w.embedId === activeWidget)!;

  return (
    <section className="py-24 bg-card border-y border-border" id="gaf-content">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end gap-8 mb-14">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#F97316]" />
              <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">
                Powered by GAF Partner Portal
              </span>
            </div>
            <h2
              className="font-['Barlow_Condensed'] text-foreground leading-none mb-4"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}
            >
              EXPLORE GAF PRODUCTS<br />
              <span className="text-[#F97316]">INTERACTIVELY.</span>
            </h2>
            <p className="font-['DM_Sans'] text-foreground/65 text-base max-w-xl leading-relaxed">
              As a <strong className="text-foreground/80">GAF-certified contractor</strong>, StoneMark has access to GAF's ContentBuilder
              tools — interactive resources that let you explore shingle colors, roof system layers, warranty
              tiers, and product comparisons on GAF's site.
            </p>
          </div>

          {/* GAF badge */}
          <div className="flex-shrink-0">
            <div className="border-2 border-[#F97316] px-6 py-4 text-center bg-background">
              <div className="font-['Barlow_Condensed'] text-xs text-muted-foreground uppercase tracking-widest mb-1">Certified By</div>
              <div className="font-['Barlow_Condensed'] text-foreground text-2xl font-black uppercase tracking-wide">GAF</div>
              <div className="font-['Barlow_Condensed'] text-[#F97316] text-xs uppercase tracking-widest">Master Elite® Contractor</div>
            </div>
          </div>
        </div>

        {/* Widget selector tabs */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          {gafWidgets.map((w) => {
            const Icon = w.icon;
            const isActive = activeWidget === w.embedId;
            return (
              <button
                key={w.id}
                id={`gaf-widget-btn-${w.id}`}
                onClick={() => setActiveWidget(w.embedId)}
                className={`text-left p-5 border-2 transition-all duration-200 group ${isActive
                    ? "border-[#F97316] bg-[#F97316]/5"
                    : "border-border bg-background hover:border-[#F97316]/50 hover:bg-[#F97316]/[0.02]"
                  }`}
              >
                <div className={`w-10 h-10 flex items-center justify-center mb-3 transition-colors ${isActive ? "bg-[#F97316]" : "bg-muted group-hover:bg-[#F97316]/10"
                  }`}>
                  <Icon size={20} className={isActive ? "text-white" : "text-[#F97316]"} />
                </div>
                <div className={`font-['Barlow_Condensed'] text-sm uppercase tracking-wide mb-1 font-bold ${isActive ? "text-[#F97316]" : "text-foreground"
                  }`}>
                  {w.title}
                </div>
                <p className="font-['DM_Sans'] text-muted-foreground text-xs leading-relaxed">{w.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Content panel */}
        <div className="border-2 border-[#F97316] bg-background overflow-hidden">
          {/* Panel header bar */}
          <div className="flex items-center justify-between px-5 py-3 bg-[#F97316]">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <div className="w-2 h-2 rounded-full bg-white/40" />
            </div>
            <span className="font-['Barlow_Condensed'] text-white/90 text-xs uppercase tracking-widest">
              GAF ContentBuilder — {active.title}
            </span>
            <a
              href={active.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/80 hover:text-white text-xs font-['DM_Sans'] transition-colors underline underline-offset-2"
            >
              <ExternalLink size={12} /> Open on GAF.com
            </a>
          </div>

          {/* Panel body — Timberline HDZ */}
          {activeWidget === "timberline-hdz" && (
            <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="font-['Barlow_Condensed'] text-[#F97316] text-xs uppercase tracking-widest mb-2">Most Popular Shingle</div>
                <h3 className="font-['Barlow_Condensed'] text-foreground text-3xl mb-4" style={{ fontWeight: 900 }}>Timberline HDZ®</h3>
                <p className="font-['DM_Sans'] text-foreground/65 text-sm leading-relaxed mb-6">
                  GAF's #1 selling shingle in America. The Timberline HDZ® features LayerLock™ technology and StainGuard Plus™ protection — available in over 30 colors to complement any home style.
                </p>
                <ul className="space-y-2 mb-8">
                  {["30+ designer colors available", "LayerLock™ nailing technology", "StainGuard Plus™ algae protection", "ENERGY STAR® qualified options", "Up to 130 MPH wind warranty", "Lifetime ltd. warranty (transferable)"].map(f => (
                    <li key={f} className="flex items-start gap-2">
                      <CheckCircle size={14} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                      <span className="font-['DM_Sans'] text-foreground/65 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <a href="https://www.gaf.com/en-us/roofing-products/residential-roofing/roof-shingles/timberline-hdz" target="_blank" rel="noopener noreferrer" className="btn-orange inline-flex items-center gap-2">
                  Explore Colors on GAF.com <ExternalLink size={15} />
                </a>
              </div>
              <div className="bg-muted border border-border p-6 space-y-4">
                <div className="font-['Barlow_Condensed'] text-foreground text-sm uppercase tracking-widest mb-4 font-bold">Popular Color Families</div>
                {[
                  { name: "Charcoal", swatch: "#4a4a4a" },
                  { name: "Weathered Wood", swatch: "#8b7355" },
                  { name: "Barkwood", swatch: "#5c4a2a" },
                  { name: "Pewter Gray", swatch: "#9e9e9e" },
                  { name: "Hunter Green", swatch: "#2d4a2d" },
                  { name: "Oyster Gray", swatch: "#b5b0a8" },
                ].map(c => (
                  <div key={c.name} className="flex items-center gap-3">
                    <div className="w-8 h-8 flex-shrink-0 border border-border" style={{ backgroundColor: c.swatch }} />
                    <span className="font-['DM_Sans'] text-foreground/70 text-sm">{c.name}</span>
                  </div>
                ))}
                <p className="font-['DM_Sans'] text-muted-foreground text-xs pt-2">+ 24 more colors available on GAF.com</p>
              </div>
            </div>
          )}

          {/* Panel body — Parts of a Roof */}
          {activeWidget === "parts-of-roof" && (
            <div className="p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="font-['Barlow_Condensed'] text-[#F97316] text-xs uppercase tracking-widest mb-2">Educational Resource</div>
                <h3 className="font-['Barlow_Condensed'] text-foreground text-3xl mb-4" style={{ fontWeight: 900 }}>Parts of a Roof</h3>
                <p className="font-['DM_Sans'] text-foreground/65 text-sm leading-relaxed mb-6">
                  A complete roof is a system of layered components — not just shingles. GAF's interactive tool breaks down every layer, from the decking up, and shows the specific GAF products used at each stage.
                </p>
                <a href="https://www.gaf.com/en-us/for-homeowners/how-roofing-works" target="_blank" rel="noopener noreferrer" className="btn-orange inline-flex items-center gap-2">
                  Explore on GAF.com <ExternalLink size={15} />
                </a>
              </div>
              <div className="space-y-3">
                {[
                  { layer: "01", name: "Roof Deck", desc: "The structural plywood or OSB substrate everything sits on." },
                  { layer: "02", name: "Leak Barrier", desc: "Self-adhering protection at valleys, eaves, and penetrations." },
                  { layer: "03", name: "Roof Deck Protection", desc: "Synthetic underlayment across the full deck surface." },
                  { layer: "04", name: "Starter Strip Shingles", desc: "Bonded first row that anchors the shingle system." },
                  { layer: "05", name: "Shingles", desc: "The visible finish layer — Timberline HDZ®, Solar, or designer lines." },
                  { layer: "06", name: "Attic Ventilation", desc: "Ridge and intake vents to manage heat and moisture." },
                ].map(item => (
                  <div key={item.layer} className="flex gap-4 p-3 border border-border bg-muted/30">
                    <div className="font-['Barlow_Condensed'] text-[#F97316] text-lg font-black flex-shrink-0 leading-none pt-0.5">{item.layer}</div>
                    <div>
                      <div className="font-['Barlow_Condensed'] text-foreground text-sm uppercase font-bold">{item.name}</div>
                      <div className="font-['DM_Sans'] text-muted-foreground text-xs leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Panel body — Warranty Chart */}
          {activeWidget === "warranty-chart" && (
            <div className="p-8 lg:p-12">
              <div className="font-['Barlow_Condensed'] text-[#F97316] text-xs uppercase tracking-widest mb-2">Coverage Levels</div>
              <h3 className="font-['Barlow_Condensed'] text-foreground text-3xl mb-4" style={{ fontWeight: 900 }}>GAF Warranty Tiers</h3>
              <p className="font-['DM_Sans'] text-foreground/65 text-sm leading-relaxed mb-8 max-w-2xl">
                GAF offers multiple warranty tiers. The tier you qualify for depends on the certification level of your contractor. As a GAF-certified contractor, StoneMark can provide System Plus and Golden Pledge® coverage.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { tier: "Standard", cert: "Any Contractor", coverage: "Limited lifetime on shingles only", highlight: false },
                  { tier: "System Plus", cert: "Certified Contractor", coverage: "Lifetime on full roofing system", highlight: false },
                  { tier: "Silver Pledge™", cert: "Certified Plus™", coverage: "25-yr workmanship + full system", highlight: false },
                  { tier: "Golden Pledge®", cert: "Master Elite®", coverage: "50-yr workmanship + full system", highlight: true },
                ].map(t => (
                  <div key={t.tier} className={`p-5 border-2 ${t.highlight ? "border-[#F97316] bg-[#F97316]/5" : "border-border bg-background"}`}>
                    {t.highlight && <div className="font-['Barlow_Condensed'] text-[#F97316] text-xs uppercase tracking-widest mb-2">Best Available</div>}
                    <div className={`font-['Barlow_Condensed'] text-xl font-black mb-1 ${t.highlight ? "text-[#F97316]" : "text-foreground"}`}>{t.tier}</div>
                    <div className="font-['DM_Sans'] text-muted-foreground text-xs mb-3">{t.cert}</div>
                    <div className="font-['DM_Sans'] text-foreground/70 text-sm">{t.coverage}</div>
                  </div>
                ))}
              </div>
              <a href="https://www.gaf.com/en-us/roofing-products/residential-roofing/warranties" target="_blank" rel="noopener noreferrer" className="btn-orange inline-flex items-center gap-2">
                View Full Warranty Info on GAF.com <ExternalLink size={15} />
              </a>
            </div>
          )}

          {/* Panel body — Shingle Comparison */}
          {activeWidget === "shingle-comparison" && (
            <div className="p-8 lg:p-12">
              <div className="font-['Barlow_Condensed'] text-[#F97316] text-xs uppercase tracking-widest mb-2">Product Lines</div>
              <h3 className="font-['Barlow_Condensed'] text-foreground text-3xl mb-4" style={{ fontWeight: 900 }}>Shingle Comparison</h3>
              <p className="font-['DM_Sans'] text-foreground/65 text-sm leading-relaxed mb-8 max-w-2xl">
                GAF makes shingles at multiple performance and price tiers. Compare the four most popular lines StoneMark installs:
              </p>
              <div className="overflow-x-auto mb-8">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-[#F97316]">
                      {["Feature", "Timberline HDZ®", "Timberline CS™", "Camelot® II", "Royal Sovereign®"].map(h => (
                        <th key={h} className="font-['Barlow_Condensed'] text-white uppercase tracking-wide text-left p-3 text-xs">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { feature: "Style", hdz: "Dimensional", cs: "Dimensional", cam: "Designer", royal: "3-Tab" },
                      { feature: "Wind Rating", hdz: "130 mph", cs: "150 mph", cam: "130 mph", royal: "60 mph" },
                      { feature: "Algae Resist.", hdz: "StainGuard Plus™", cs: "StainGuard Plus™", cam: "StainGuard Plus™", royal: "StainGuard®" },
                      { feature: "Warranty", hdz: "Lifetime Ltd.", cs: "Lifetime Ltd.", cam: "Lifetime Ltd.", royal: "25-yr Ltd." },
                      { feature: "Best For", hdz: "Most homes", cs: "High-wind areas", cam: "Premium look", royal: "Budget-friendly" },
                    ].map((row, i) => (
                      <tr key={row.feature} className={i % 2 === 0 ? "bg-muted/30" : "bg-background"}>
                        <td className="font-['Barlow_Condensed'] text-foreground uppercase text-xs p-3 font-bold border-b border-border">{row.feature}</td>
                        <td className="font-['DM_Sans'] text-foreground/70 text-xs p-3 border-b border-border">{row.hdz}</td>
                        <td className="font-['DM_Sans'] text-foreground/70 text-xs p-3 border-b border-border">{row.cs}</td>
                        <td className="font-['DM_Sans'] text-foreground/70 text-xs p-3 border-b border-border">{row.cam}</td>
                        <td className="font-['DM_Sans'] text-foreground/70 text-xs p-3 border-b border-border">{row.royal}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <a href="https://www.gaf.com/en-us/roofing-products/residential-roofing/roof-shingles" target="_blank" rel="noopener noreferrer" className="btn-orange inline-flex items-center gap-2">
                Compare All Shingles on GAF.com <ExternalLink size={15} />
              </a>
            </div>
          )}
        </div>

        {/* Footnote */}
        <p className="font-['DM_Sans'] text-muted-foreground text-xs mt-4 leading-relaxed">
          * Product specs and warranty details sourced from GAF.com. As an authorized GAF-certified contractor, StoneMark can offer System Plus and Golden Pledge® warranty coverage on qualifying installations.
        </p>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <section className="py-24 bg-card">
      <div className="container">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[3px] bg-[#F97316]" />
          <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Common Questions</span>
        </div>
        <h2 className="font-['Barlow_Condensed'] text-foreground leading-none mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
          FREQUENTLY ASKED<br /><span className="text-[#F97316]">QUESTIONS.</span>
        </h2>
        <div className="max-w-3xl space-y-2">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-border bg-background">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left gap-4"
              >
                <span className="font-['Barlow_Condensed'] text-foreground text-base uppercase tracking-wide" style={{ fontWeight: 700 }}>{faq.q}</span>
                {openIdx === i ? <ChevronUp size={18} className="text-[#F97316] flex-shrink-0" /> : <ChevronDown size={18} className="text-muted-foreground flex-shrink-0" />}
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 border-t border-border pt-4">
                  <p className="font-['DM_Sans'] text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  useSEO({
    title: "Roofing Services Nashville TN | Shingles, Metal, TPO, Gutters | StoneMark",
    description: "Complete roofing services in Nashville and Middle Tennessee. Asphalt shingle roof replacement, standing seam metal roofing, TPO flat roofing, seamless gutters, soffit & fascia, and storm damage repair. GAF Certified. Free estimates.",
    canonical: "/services",
  });
  return (
    <PageLayout>
      <PageHero
        eyebrow="Our Services"
        title="COMPLETE ROOFING"
        titleAccent="SOLUTIONS."
        subtitle="From asphalt shingles to commercial TPO, seamless gutters to storm damage response — StoneMark handles every aspect of protecting your home or business."
        bgImage={SHINGLE_IMAGE}
      />

      {/* Services list */}
      <section className="py-16 bg-background">
        <div className="container space-y-20">
          {services.map((service, i) => (
            <div key={service.id} id={service.id} className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 === 1 ? "lg:grid-flow-dense" : ""}`}>
              {/* Image or placeholder */}
              <div className={i % 2 === 1 ? "lg:col-start-2" : ""}>
                {service.image ? (
                  <div className="relative">
                    <img src={service.image} alt={service.title} className="w-full object-cover" style={{ height: "400px" }} loading="lazy" />
                    <div className="absolute top-0 left-0 w-12 h-12 bg-[#F97316]" />
                    <div className="absolute top-4 left-4 bg-[#F97316] px-3 py-1">
                      <span className="font-['Barlow_Condensed'] text-white text-sm uppercase tracking-widest font-semibold">{service.tag}</span>
                    </div>
                  </div>
                ) : (
                  <div className="relative h-64 bg-muted border border-border flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#F97316]/10 flex items-center justify-center mx-auto mb-4">
                        <div className="w-8 h-8 bg-[#F97316] rotate-45" />
                      </div>
                      <div className="font-['Barlow_Condensed'] text-muted-foreground uppercase tracking-widest text-sm">{service.tag}</div>
                    </div>
                    <div className="absolute top-4 left-4 bg-[#F97316] px-3 py-1">
                      <span className="font-['Barlow_Condensed'] text-white text-sm uppercase tracking-widest font-semibold">{service.tag}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className={i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-6 h-[3px] bg-[#F97316]" />
                  <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-widest text-xs font-semibold">{service.tag}</span>
                </div>
                <h2 className="font-['Barlow_Condensed'] text-foreground text-3xl md:text-4xl uppercase mb-4 leading-tight" style={{ fontWeight: 900 }}>{service.title}</h2>
                <p className="font-['DM_Sans'] text-foreground/70 text-base leading-relaxed mb-5">{service.intro}</p>
                <p className="font-['DM_Sans'] text-foreground/55 text-sm leading-relaxed mb-6">{service.details}</p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                      <span className="font-['DM_Sans'] text-foreground/65 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                {/* Warranty note */}
                <div className="border-l-4 border-[#F97316] pl-4 mb-6">
                  <p className="font-['DM_Sans'] text-foreground/55 text-sm italic">{service.warranty}</p>
                </div>

                <Link href="/contact" className="btn-orange inline-flex items-center gap-2">
                  Get a Free Quote <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GAF ContentBuilder Interactive Section */}
      <GafContentBuilder />

      {/* Financing callout */}
      <section className="py-12 bg-[#F97316]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-['Barlow_Condensed'] text-white text-3xl uppercase mb-1" style={{ fontWeight: 900 }}>Financing Available</h3>
              <p className="font-['DM_Sans'] text-white/85">Don't let budget hold you back. Ask us about flexible payment plans.</p>
            </div>
            <a href="tel:6152997552" className="flex items-center gap-2 bg-white text-[#F97316] font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/90 transition-colors flex-shrink-0" style={{ fontWeight: 700 }}>
              <Phone size={17} /> Call to Learn More
            </a>
          </div>
        </div>
      </section>

      <FAQ />
    </PageLayout>
  );
}
