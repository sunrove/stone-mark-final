/*
 * STONEMARK SERVICE AREA PAGE
 * All counties, cities, and coverage details for Middle Tennessee
 */

import { Link } from "wouter";
import { MapPin, Phone, CheckCircle, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-hero-X7CfTXXzMU2mAAirGBeBZL.webp";

const counties = [
  {
    name: "Davidson County",
    highlight: "Nashville Metro",
    color: "#F97316",
    cities: ["Nashville", "Antioch", "Bellevue", "Donelson", "Hermitage", "Madison", "Old Hickory", "Goodlettsville (partial)"],
    desc: "Our home base. We serve all Nashville neighborhoods and Davidson County communities with the same hands-on service that built our reputation.",
  },
  {
    name: "Williamson County",
    highlight: "Brentwood & Franklin",
    color: "#F97316",
    cities: ["Brentwood", "Franklin", "Nolensville", "Spring Hill (partial)", "Fairview", "Thompson's Station", "College Grove"],
    desc: "One of our most active service areas. Williamson County's growth has brought us hundreds of residential roofing projects across its thriving communities.",
  },
  {
    name: "Rutherford County",
    highlight: "Murfreesboro & Smyrna",
    color: "#F97316",
    cities: ["Murfreesboro", "Smyrna", "La Vergne", "Eagleville", "Rockvale", "Christiana", "Lascassas"],
    desc: "From Murfreesboro's established neighborhoods to Smyrna's growing residential areas, we bring the same quality and reliability to Rutherford County.",
  },
  {
    name: "Maury County",
    highlight: "Columbia & Spring Hill",
    color: "#F97316",
    cities: ["Columbia", "Spring Hill", "Mount Pleasant", "Hampshire", "Santa Fe"],
    desc: "As Middle Tennessee's growth extends south, StoneMark has expanded its presence in Maury County to serve homeowners in Columbia and the Spring Hill corridor.",
  },
];

const faqArea = [
  { q: "Do you serve my area?", a: "We serve Nashville and the greater Middle Tennessee region. If you're in Davidson, Williamson, Rutherford, or Maury County, we almost certainly cover your area. If you're in a neighboring county, give us a call — we may still be able to help." },
  { q: "Do you charge a travel fee?", a: "No. We do not charge travel fees within our standard service area. Your estimate reflects the cost of the work, not the drive." },
  { q: "How quickly can you respond?", a: "For standard estimates, we typically schedule within 1–3 business days. For storm damage emergencies, we prioritize rapid response — often same-day or next-day." },
  { q: "Can you handle large commercial projects in my area?", a: "Yes. We handle residential and light commercial roofing across all of our service counties. Contact us to discuss your project's scope and timeline." },
];

export default function ServiceArea() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Service Area"
        title="SERVING ALL OF"
        titleAccent="MIDDLE TENNESSEE."
        subtitle="Based in Nashville, we serve homeowners and businesses across Davidson, Williamson, Rutherford, and Maury counties — and the communities in between."
        bgImage={HERO_IMAGE}
      />

      {/* Overview */}
      <section className="py-24 bg-[#3A3F4A]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[3px] bg-[#F97316]" />
                <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Coverage Overview</span>
              </div>
              <h2 className="font-['Barlow_Condensed'] text-white text-4xl md:text-5xl uppercase mb-6 leading-none" style={{ fontWeight: 900 }}>
                YOUR LOCAL<br /><span className="text-[#F97316]">ROOFER.</span>
              </h2>
              <div className="space-y-4 font-['DM_Sans'] text-white/70 text-base leading-relaxed">
                <p>StoneMark is based in Nashville and serves the greater Middle Tennessee region. We cover four primary counties — Davidson, Williamson, Rutherford, and Maury — encompassing dozens of cities and communities from the Nashville metro to the southern suburbs.</p>
                <p>Unlike large regional contractors who dispatch crews from distant locations, StoneMark is genuinely local. Owner Robert Yeatman lives and works in Middle Tennessee. When you call, you're reaching a neighbor who understands your community, your climate, and the specific roofing challenges of the region.</p>
                <p>Not sure if we cover your specific area? Give us a call at <a href="tel:6152997552" className="text-[#F97316] hover:underline">(615) 299-7552</a>. We're happy to confirm coverage and schedule an estimate.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Counties Served", value: "4" },
                { label: "Cities & Communities", value: "30+" },
                { label: "Years Serving Middle TN", value: "12+" },
                { label: "Miles from Nashville", value: "50+" },
              ].map((stat) => (
                <div key={stat.label} className="bg-[#4A5060] border border-white/10 p-6 text-center">
                  <div className="font-['Barlow_Condensed'] text-[#F97316] text-4xl leading-none mb-2" style={{ fontWeight: 900 }}>{stat.value}</div>
                  <div className="font-['Barlow_Condensed'] text-white/60 uppercase tracking-widest text-xs">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* County cards */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Counties We Serve</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {counties.map((county) => (
              <div key={county.name} className="border border-white/10 bg-[#4A5060] hover:border-[#F97316]/40 transition-all duration-300">
                <div className="p-6 border-b border-white/10">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <MapPin size={16} className="text-[#F97316]" />
                        <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-widest text-xs font-semibold">{county.highlight}</span>
                      </div>
                      <h3 className="font-['Barlow_Condensed'] text-white text-2xl uppercase" style={{ fontWeight: 900 }}>{county.name}</h3>
                    </div>
                    <div className="w-10 h-10 bg-[#F97316]/15 flex items-center justify-center flex-shrink-0">
                      <div className="w-4 h-4 bg-[#F97316] rotate-45" />
                    </div>
                  </div>
                  <p className="font-['DM_Sans'] text-white/60 text-sm leading-relaxed">{county.desc}</p>
                </div>
                <div className="p-6">
                  <div className="font-['Barlow_Condensed'] text-white/40 uppercase tracking-widest text-xs mb-3">Cities & Communities</div>
                  <div className="flex flex-wrap gap-2">
                    {county.cities.map((city) => (
                      <div key={city} className="flex items-center gap-1.5 bg-[#3A3F4A] border border-white/10 px-3 py-1.5">
                        <CheckCircle size={11} className="text-[#F97316]" />
                        <span className="font-['DM_Sans'] text-white/70 text-xs">{city}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full city list */}
          <div className="bg-[#4A5060] border border-white/10 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-[3px] bg-[#F97316]" />
              <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">All Cities We Serve</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2">
              {[
                "Nashville", "Brentwood", "Franklin", "Murfreesboro", "Smyrna",
                "Nolensville", "Spring Hill", "Columbia", "La Vergne", "Antioch",
                "Bellevue", "Hermitage", "Madison", "Old Hickory", "Donelson",
                "Thompson's Station", "Fairview", "College Grove", "Mount Pleasant",
                "Eagleville", "Rockvale", "Christiana", "Lascassas", "Hampshire",
                "Goodlettsville", "Hendersonville", "Gallatin (partial)", "White House (partial)",
              ].map((city) => (
                <div key={city} className="flex items-center gap-2 py-1.5">
                  <div className="w-1 h-1 bg-[#F97316] rotate-45 flex-shrink-0" />
                  <span className="font-['DM_Sans'] text-white/60 text-sm">{city}</span>
                </div>
              ))}
            </div>
            <p className="font-['DM_Sans'] text-white/35 text-xs mt-6">Don't see your city? <a href="tel:6152997552" className="text-[#F97316] hover:underline">Call us</a> — we likely still serve your area.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24" style={{ background: "linear-gradient(135deg, #22252e 0%, #1C1F26 100%)" }}>
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Coverage Questions</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-white leading-none mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
            COMMON<br /><span className="text-[#F97316]">QUESTIONS.</span>
          </h2>
          <div className="max-w-3xl space-y-5">
            {faqArea.map((faq, i) => (
              <div key={i} className="border border-white/10 bg-[#3A3F4A]/60 p-6">
                <h4 className="font-['Barlow_Condensed'] text-white text-lg uppercase tracking-wide mb-2" style={{ fontWeight: 700 }}>{faq.q}</h4>
                <p className="font-['DM_Sans'] text-white/60 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F97316]">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="font-['Barlow_Condensed'] text-white leading-none mb-2" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>IN OUR AREA? LET'S TALK.</h2>
              <p className="font-['DM_Sans'] text-white/80 text-lg">Free estimates for all Middle Tennessee homeowners and businesses.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
              <a href="tel:6152997552" className="flex items-center justify-center gap-2 bg-white text-[#F97316] font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/90 transition-colors" style={{ fontWeight: 700 }}>
                <Phone size={17} /> (615) 299-7552
              </a>
              <Link href="/contact" className="flex items-center justify-center gap-2 bg-transparent border-2 border-white text-white font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/10 transition-colors" style={{ fontWeight: 700 }}>
                Free Estimate <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
