/*
 * STONEMARK ABOUT PAGE
 * Company history, owner bio, credentials, certifications, awards
 */

import { Link } from "wouter";
import { Shield, Award, Users, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const HERO_IMAGE   = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-hero-X7CfTXXzMU2mAAirGBeBZL.webp";
const METAL_IMAGE  = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-metal-roof-YSzM9t43uu4gj6TMuEpYoM.webp";

const credentials = [
  { label: "GAF Certified Contractor", desc: "Authorized to install GAF roofing systems with full manufacturer warranty backing. Only a select percentage of roofing contractors earn GAF Certified status." },
  { label: "OSHA Certified", desc: "All crew members are trained and certified under OSHA safety standards, ensuring a safe worksite for our team and your property." },
  { label: "Licensed & Bonded", desc: "Fully licensed to operate as a roofing contractor in Tennessee. Bonded for your financial protection against incomplete or substandard work." },
  { label: "$2M Liability Insurance", desc: "We carry $2 million in general liability insurance. You can request a certificate of insurance before any work begins." },
  { label: "A+ BBB Rating", desc: "StoneMark maintains an A+ rating with the Better Business Bureau, reflecting our commitment to resolving customer concerns and operating with integrity." },
  { label: "In Business Since 2012", desc: "Over a decade of serving Middle Tennessee homeowners and businesses, building a reputation on quality, reliability, and honest dealing." },
];

const values = [
  { icon: Shield, title: "Integrity First", desc: "We give honest assessments, transparent pricing, and straightforward recommendations. If your roof doesn't need replacing, we'll tell you." },
  { icon: Wrench, title: "Craftsmanship", desc: "Every nail, every shingle, every seam is installed with care. We take pride in the details that most homeowners never see." },
  { icon: Users, title: "Community Focus", desc: "We're your neighbors. We live and work in Middle Tennessee and are invested in the communities we serve." },
  { icon: Award, title: "Continuous Excellence", desc: "Recognized by the Middle Tennessee Home Builders Association for craftsmanship, we hold ourselves to the highest professional standards." },
];

const timeline = [
  { year: "1980s", title: "The Foundation", desc: "Robert Yeatman begins his roofing career, learning the trade from the ground up — literally. He develops his expertise across residential and commercial projects throughout Tennessee." },
  { year: "1990s", title: "Mastering the Craft", desc: "Over two decades of hands-on work across hundreds of roofing projects, Robert refines his techniques and builds deep knowledge of roofing systems, materials, and best practices." },
  { year: "2000s", title: "Building a Reputation", desc: "Word-of-mouth referrals grow as Robert's reputation for quality, honesty, and reliability spreads across Middle Tennessee neighborhoods." },
  { year: "2012", title: "StoneMark Founded", desc: "Robert establishes The StoneMark Company, bringing his 30+ years of experience under a formal business structure focused on residential and light commercial roofing." },
  { year: "2015+", title: "GAF Certification", desc: "StoneMark earns GAF Certified Contractor status, allowing the company to offer manufacturer-backed warranty systems and access to premium GAF roofing products." },
  { year: "Today", title: "Middle Tennessee's Trusted Roofer", desc: "With 45+ years of experience, a 5-star Google rating, and hundreds of completed projects, StoneMark continues to serve Nashville and surrounding communities with the same hands-on commitment Robert started with." },
];

export default function About() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="About StoneMark"
        title="45+ YEARS OF"
        titleAccent="ROOFING EXCELLENCE."
        subtitle="Founded on experience, built on integrity. The StoneMark Company is Nashville's locally owned roofing contractor with the credentials, track record, and hands-on commitment to get the job done right."
        bgImage={HERO_IMAGE}
      />

      {/* Owner bio */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-[3px] bg-[#F97316]" />
                <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Owner & Operator</span>
              </div>
              <h2 className="font-['Barlow_Condensed'] text-foreground text-4xl md:text-5xl uppercase mb-6 leading-none" style={{ fontWeight: 900 }}>
                ROBERT<br /><span className="text-[#F97316]">YEATMAN.</span>
              </h2>
              <div className="space-y-4 font-['DM_Sans'] text-foreground/70 text-base leading-relaxed">
                <p>Robert Yeatman has been in the roofing industry for over 45 years — a career that began with learning the trade from the ground up and has grown into one of Middle Tennessee's most trusted roofing operations.</p>
                <p>When you hire StoneMark, you're not hiring a franchise or a company where the owner is removed from the work. Robert is personally involved in every project — from the initial estimate to the final inspection. He answers his own phone, shows up on the job, and stands behind every roof his team installs.</p>
                <p>That hands-on approach is rare in the roofing industry, and it's the foundation of StoneMark's reputation. Customers consistently cite Robert's communication, transparency, and genuine investment in their project as what sets StoneMark apart from larger contractors.</p>
                <p>Robert founded The StoneMark Company in 2012 to bring the full weight of his experience to Nashville-area homeowners and businesses under a professional, warranty-backed operation. Since then, StoneMark has earned a 5.0 Google rating, an A+ BBB rating, and recognition from the Middle Tennessee Home Builders Association for craftsmanship.</p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="tel:6152997552" className="btn-orange flex items-center gap-2">Call Robert Directly</a>
                <Link href="/contact" className="btn-outline-orange flex items-center gap-2">Free Estimate <ArrowRight size={16} /></Link>
              </div>
            </div>
            <div className="relative">
              <img src={METAL_IMAGE} alt="StoneMark quality roofing work" className="w-full object-cover" style={{ height: "520px" }} loading="lazy" />
              <div className="absolute top-0 right-0 w-12 h-12 bg-[#F97316]" />
              <div className="absolute bottom-8 left-8 right-8 bg-card/90 border border-[#F97316]/30 p-5 backdrop-blur-sm">
                <div className="font-['Barlow_Condensed'] text-[#F97316] text-4xl leading-none mb-1" style={{ fontWeight: 900 }}>45+</div>
                <div className="font-['DM_Sans'] text-foreground/70 text-sm">Years of hands-on roofing experience across Middle Tennessee</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company values */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">What We Stand For</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-foreground leading-none mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
            OUR CORE<br /><span className="text-[#F97316]">VALUES.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="p-6 border border-border bg-card hover:border-[#F97316]/40 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-[#F97316]/10 flex items-center justify-center mb-4 group-hover:bg-[#F97316]/20 transition-colors">
                    <Icon size={22} className="text-[#F97316]" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-foreground text-xl uppercase tracking-wide mb-3" style={{ fontWeight: 800 }}>{v.title}</h3>
                  <p className="font-['DM_Sans'] text-foreground/60 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company timeline */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Our History</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-foreground leading-none mb-16" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
            DECADES OF<br /><span className="text-[#F97316]">EXPERIENCE.</span>
          </h2>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-[#F97316]/20 hidden md:block" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-8 items-start">
                  <div className="flex-shrink-0 hidden md:flex flex-col items-center">
                    <div className="w-12 h-12 bg-[#F97316] flex items-center justify-center z-10 relative">
                      <span className="font-['Barlow_Condensed'] text-white text-xs font-semibold uppercase">{i + 1}</span>
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-b border-border last:border-0">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="font-['Barlow_Condensed'] text-[#F97316] text-2xl" style={{ fontWeight: 900 }}>{item.year}</span>
                      <h3 className="font-['Barlow_Condensed'] text-foreground text-xl uppercase tracking-wide" style={{ fontWeight: 800 }}>{item.title}</h3>
                    </div>
                    <p className="font-['DM_Sans'] text-foreground/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="py-24 bg-background">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Credentials & Certifications</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-foreground leading-none mb-12" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
            LICENSED, CERTIFIED,<br /><span className="text-[#F97316]">AND INSURED.</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {credentials.map((c) => (
              <div key={c.label} className="p-6 border border-border bg-card hover:border-[#F97316]/40 transition-all duration-300">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle size={18} className="text-[#F97316] flex-shrink-0 mt-0.5" />
                  <h3 className="font-['Barlow_Condensed'] text-foreground text-lg uppercase tracking-wide" style={{ fontWeight: 800 }}>{c.label}</h3>
                </div>
                <p className="font-['DM_Sans'] text-foreground/60 text-sm leading-relaxed pl-7">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Award callout */}
          <div className="mt-10 border-l-4 border-[#F97316] pl-6 py-2">
            <div className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-widest text-xs font-semibold mb-1">Industry Recognition</div>
            <p className="font-['DM_Sans'] text-foreground/70 text-base">
              Recognized by the <strong className="text-foreground">Middle Tennessee Home Builders Association</strong> for outstanding craftsmanship and quality workmanship — a distinction awarded to contractors who consistently demonstrate excellence in their trade.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F97316]">
        <div className="container text-center">
          <h2 className="font-['Barlow_Condensed'] text-white leading-none mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>READY TO WORK WITH ROBERT?</h2>
          <p className="font-['DM_Sans'] text-white/80 text-lg mb-8 max-w-xl mx-auto">Get a free, no-obligation estimate from a contractor who will personally oversee your project from start to finish.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:6152997552" className="flex items-center gap-2 bg-white text-[#F97316] font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/90 transition-colors" style={{ fontWeight: 700 }}>Call (615) 299-7552</a>
            <Link href="/contact" className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/10 transition-colors" style={{ fontWeight: 700 }}>Request Estimate</Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
