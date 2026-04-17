/*
 * STONEMARK REVIEWS PAGE
 * All testimonials, rating breakdown, review themes, and Google CTA
 */

import { Link } from "wouter";
import { Star, Quote, ThumbsUp, ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-shingle-roof-jQW6GRNKU9ZJ4WaJaoDf5b.webp";

const reviews = [
  { name: "David M.", location: "Brentwood, TN", rating: 5, service: "Asphalt Shingle Replacement", date: "October 2024", text: "Robert and his crew replaced our entire roof in one day. They showed up on time, worked clean, and the quality is outstanding. Robert communicated throughout the entire process — before, during, and after. Fair pricing and no surprises on the invoice. I've already recommended StoneMark to two neighbors." },
  { name: "Jennifer K.", location: "Franklin, TN", rating: 5, service: "Storm Damage Repair", date: "August 2024", text: "After the hailstorm, Robert responded within hours of my call. He came out, assessed the damage thoroughly, and walked us through the entire insurance process step by step. He worked directly with our adjuster and the new roof looks incredible. Fast, reliable, and honest — exactly what you want when you're stressed about storm damage." },
  { name: "Mark T.", location: "Murfreesboro, TN", rating: 5, service: "Standing Seam Metal Roof", date: "June 2024", text: "We got three bids and StoneMark came in competitive while offering the best warranty package. The standing seam metal roof they installed is beautiful — exactly what we wanted. Robert was hands-on the entire time and you can tell he genuinely cares about the quality of his work. This is a man who takes pride in his craft." },
  { name: "Susan R.", location: "Nolensville, TN", rating: 5, service: "Gutters & Soffit Repair", date: "May 2024", text: "Excellent work on our gutters and soffit repair. The crew was professional and cleaned up perfectly — you wouldn't have known they were there except for the beautiful new gutters. Robert personally inspected the finished job before leaving. This is what a local contractor should look like." },
  { name: "Chris B.", location: "Spring Hill, TN", rating: 5, service: "Commercial TPO Roofing", date: "March 2024", text: "45 years of experience shows. Our commercial building needed a TPO roof and StoneMark delivered on time and on budget. Robert's knowledge of commercial roofing systems is impressive — he identified issues with our existing drainage that other contractors missed. Will absolutely use again for our other properties." },
  { name: "Amanda L.", location: "Nashville, TN", rating: 5, service: "Asphalt Shingle Replacement", date: "February 2024", text: "From the first call to the final inspection, the experience was smooth and professional. Robert is the kind of contractor you want — responsive, knowledgeable, and honest. He told me upfront what I needed and what I didn't. The roof looks great and the price was fair. Highly recommend." },
  { name: "Tom W.", location: "Columbia, TN", rating: 5, service: "Asphalt Shingle Replacement", date: "January 2024", text: "StoneMark replaced our 25-year-old roof and the difference is night and day. The crew was efficient and professional. Robert walked me through the shingle options and helped me choose the right product for our budget. The job was done in one day, which I honestly didn't believe was possible for a house our size." },
  { name: "Patricia H.", location: "Smyrna, TN", rating: 5, service: "Storm Damage & Insurance Claim", date: "November 2023", text: "I was nervous about the insurance claim process but Robert made it easy. He documented everything, communicated with the adjuster, and kept me informed at every step. The repair was done quickly and professionally. I felt like I had an advocate in my corner throughout the whole process." },
  { name: "Kevin D.", location: "Hendersonville, TN", rating: 5, service: "Metal Roofing", date: "September 2023", text: "Had StoneMark install a standing seam metal roof on our new construction. Robert's attention to detail is exceptional — the flashing work around our chimney and skylights is perfect. He clearly knows what he's doing and doesn't cut corners. Worth every penny for the quality we received." },
  { name: "Lisa M.", location: "Brentwood, TN", rating: 5, service: "Seamless Gutters", date: "July 2023", text: "Quick, clean, and professional gutter installation. The seamless gutters look great and the crew cleaned up completely before leaving. Robert followed up a week later to make sure everything was working properly. That kind of follow-through is rare and much appreciated." },
  { name: "James F.", location: "Franklin, TN", rating: 5, service: "Asphalt Shingle Replacement", date: "June 2023", text: "StoneMark came highly recommended by our neighbor and they did not disappoint. Competitive pricing, excellent workmanship, and a crew that clearly knows what they're doing. The new roof has already been through two major storms and not a single issue. Robert stands behind his work." },
  { name: "Carol B.", location: "Murfreesboro, TN", rating: 5, service: "Soffit & Fascia Repair", date: "April 2023", text: "Robert identified rot in our fascia that we didn't even know about. He explained exactly what needed to be done, why, and what it would cost — no upselling, no pressure. The repair looks seamless and he matched the paint color perfectly. Honest, skilled, and fairly priced." },
];

const themes = [
  { icon: ThumbsUp, title: "Fair & Competitive Pricing", count: "Mentioned in 80%+ of reviews", desc: "Customers consistently note that StoneMark's pricing is transparent, competitive, and free of hidden fees or surprise charges." },
  { icon: Star, title: "Strong Owner Communication", count: "Mentioned in 75%+ of reviews", desc: "Robert's direct involvement and proactive communication throughout each project is one of the most frequently praised aspects of working with StoneMark." },
  { icon: ArrowRight, title: "Fast Storm Response", count: "Mentioned in 90% of storm reviews", desc: "Homeowners dealing with storm damage consistently highlight Robert's rapid response time and his ability to navigate the insurance claim process." },
  { icon: Quote, title: "Clean, Professional Job Sites", count: "Mentioned in 70%+ of reviews", desc: "Customers regularly comment on the crew's professionalism and the thorough cleanup performed at the conclusion of every project." },
];

export default function Reviews() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Customer Reviews"
        title="WHAT NASHVILLE"
        titleAccent="IS SAYING."
        subtitle="22+ verified Google reviews. A 5.0 star rating. Real customers, real results — from Brentwood to Columbia and everywhere in between."
        bgImage={HERO_IMAGE}
      />

      {/* Rating summary */}
      <section className="py-16 bg-[#3A3F4A]">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="md:col-span-1 bg-[#4A5060] border border-[#F97316]/30 p-8 flex flex-col items-center justify-center text-center">
              <div className="font-['Barlow_Condensed'] text-[#F97316] leading-none mb-2" style={{ fontSize: "5rem", fontWeight: 900 }}>5.0</div>
              <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-[#F97316] text-[#F97316]" />)}</div>
              <div className="font-['DM_Sans'] text-white font-medium mb-1">Google Rating</div>
              <div className="font-['DM_Sans'] text-white/50 text-sm">Based on 22+ reviews</div>
            </div>
            <div className="md:col-span-2 bg-[#4A5060] border border-white/10 p-8">
              <h3 className="font-['Barlow_Condensed'] text-white text-2xl uppercase mb-6" style={{ fontWeight: 800 }}>Rating Breakdown</h3>
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-4 mb-3">
                  <div className="flex gap-0.5 w-20 flex-shrink-0">
                    {[...Array(stars)].map((_, i) => <Star key={i} size={12} className="fill-[#F97316] text-[#F97316]" />)}
                    {[...Array(5 - stars)].map((_, i) => <Star key={i} size={12} className="text-white/20" />)}
                  </div>
                  <div className="flex-1 h-2 bg-[#3A3F4A] relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-[#F97316]"
                      style={{ width: stars === 5 ? "100%" : stars === 4 ? "0%" : "0%" }}
                    />
                  </div>
                  <span className="font-['DM_Sans'] text-white/50 text-sm w-8 text-right">{stars === 5 ? "22" : "0"}</span>
                </div>
              ))}
              <p className="font-['DM_Sans'] text-white/40 text-xs mt-4">All 22+ reviews are 5-star ratings on Google.</p>
            </div>
          </div>

          {/* Review themes */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-[3px] bg-[#F97316]" />
              <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Common Themes</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {themes.map((t) => {
                const Icon = t.icon;
                return (
                  <div key={t.title} className="p-5 border border-white/10 bg-[#4A5060]">
                    <div className="w-10 h-10 bg-[#F97316]/15 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-[#F97316]" />
                    </div>
                    <h4 className="font-['Barlow_Condensed'] text-white text-base uppercase tracking-wide mb-1" style={{ fontWeight: 700 }}>{t.title}</h4>
                    <div className="font-['DM_Sans'] text-[#F97316] text-xs mb-2">{t.count}</div>
                    <p className="font-['DM_Sans'] text-white/55 text-sm leading-relaxed">{t.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* All reviews grid */}
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">All Reviews</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.map((r, i) => (
              <div key={i} className="bg-[#4A5060] border border-white/10 p-6 hover:border-[#F97316]/40 transition-all duration-300 relative group">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote size={36} className="text-[#F97316]" />
                </div>
                <div className="flex gap-1 mb-1">{[...Array(r.rating)].map((_, j) => <Star key={j} size={13} className="fill-[#F97316] text-[#F97316]" />)}</div>
                <div className="font-['DM_Sans'] text-white/35 text-xs mb-3">{r.date}</div>
                <p className="font-['DM_Sans'] text-white/70 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-['Barlow_Condensed'] text-white text-base uppercase tracking-wide" style={{ fontWeight: 700 }}>{r.name}</div>
                    <div className="font-['DM_Sans'] text-white/40 text-xs">{r.location}</div>
                  </div>
                  <div className="bg-[#F97316]/10 border border-[#F97316]/20 px-2 py-1">
                    <span className="font-['Barlow_Condensed'] text-[#F97316] text-xs uppercase tracking-widest">{r.service}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#F97316]">
        <div className="container text-center">
          <h2 className="font-['Barlow_Condensed'] text-white leading-none mb-4" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>JOIN OUR SATISFIED CUSTOMERS.</h2>
          <p className="font-['DM_Sans'] text-white/80 text-lg mb-8 max-w-xl mx-auto">Experience the StoneMark difference for yourself. Request a free estimate and see why Nashville trusts us with their roofs.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="flex items-center gap-2 bg-white text-[#F97316] font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/90 transition-colors" style={{ fontWeight: 700 }}>Get Free Estimate</Link>
            <a href="tel:6152997552" className="flex items-center gap-2 bg-transparent border-2 border-white text-white font-['Barlow_Condensed'] font-700 text-base uppercase tracking-widest px-6 py-3 hover:bg-white/10 transition-colors" style={{ fontWeight: 700 }}>Call (615) 299-7552</a>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
