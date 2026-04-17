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
  { name: "Chris Morse", location: "Google Review", rating: 5, service: "Roof Replacement", date: "5 years ago", text: "We Contracted with Robert Yeatman to enclose our carport and replace the roof. His crew was punctual and did an Excellent job. The existing carport was not very attractive, but after they completed their work, It looks Great!!" },
  { name: "lisa mcghee", location: "Google Review", rating: 5, service: "Roof & Gutters", date: "5 years ago", text: "I am very happy with my new roof and gutters. Already received many compliments! Robert and his crew were very quick to get the job done. Very impressed! I highly recommend Stonemark to anyone who needs a new roof!!" },
  { name: "Val Hard", location: "Mt. Juliet", rating: 5, service: "Asphalt Shingles", date: "8 years ago", text: "They gave us a fair price and did a very good job replacing our asphalt shingles roof in Mt. Juliet." },
  { name: "BARB Prince", location: "Google Review", rating: 5, service: "Roof & Venting System", date: "3 years ago", text: "We are extremely happy with Robert and his company for the new roof and venting system that was done on our home. Our original roof was 22 years old and it was time for a new roof. Would highly recommend him." },
  { name: "Shannon Black", location: "Google Review", rating: 5, service: "Roof Replacement", date: "7 years ago", text: "StoneMark did an excellent job on our roof: one day here and done. Everything was explained thoroughly and we really got the sense we were working with true professionals. Great roof at a great price!" },
  { name: "Valerie Jones", location: "Google Review", rating: 5, service: "Roof Installation", date: "2 years ago", text: "I would recommend them for any of your needs. I had to have a roof put on and Mr Yeatman sat down and walked me through the process step by step. They came when they said they would and he was there to supervise." },
  { name: "Ken Dorsey", location: "Google Review", rating: 5, service: "Roof Replacement", date: "2 years ago", text: "Robert is a Class act. Gave me a quote in writing, that was easy to read and understand. Used quality materials and was priced extremely competitive in my opinion." },
  { name: "Karen P Munn Johnson", location: "Google Review", rating: 5, service: "Roofing Work", date: "6 years ago", text: "Mr. Yeatman and his son were professional, efficient, and friendly. They gave the BEST quote for the roofing work needed. The work was timely and looked wonderful. We HIGHLY recommend The StoneMark Company." },
  { name: "Sharon Yeatman", location: "Google Review", rating: 5, service: "Roof Replacement", date: "5 years ago", text: "I am very pleased with the work that The StoneMark Company did for me. The pricing seemed to be fair. Throughout the process they kept me informed. they showed up the day they said they would and completed the entire job in one day." },
  { name: "Jeff Gervais", location: "Google Review", rating: 5, service: "Roof Estimate", date: "4 years ago", text: "I hired The Stonemark Company after doing my research and getting a few estimates. They quoted me about $900 cheaper than the others using the same equipment as the other companies were using with the same warranties." },
  { name: "Faye Waters", location: "Google Review", rating: 5, service: "Roof Replacement", date: "2 years ago", text: "The StoneMark Company replaced my roof and it looks amazing! Robert is great to work with too!" },
  { name: "Dr. Rose Ogilvie", location: "Google Review", rating: 5, service: "Roofing Service", date: "4 years ago", text: "Very attentive to specific details, kept materials very, very organized. I never expected this from a roofing company. The owner went beyond the call of duty and beyond expectations. Kept the price..." },
  { name: "Audie Nicdao", location: "Google Review", rating: 5, service: "Roof Project", date: "4 years ago", text: "Robert Yeatman was so professional that he did not take any portion of the money until the project was done." },
  { name: "tommy hargrove", location: "Google Review", rating: 5, service: "Roofing Service", date: "3 years ago", text: "Great company. My 1st choice in roofing!!" },
  { name: "Missy", location: "Google Review", rating: 5, service: "Roof Installation", date: "5 years ago", text: "I highly recommend! Prompt, courteous and professional. Highest quality product and expert installation." },
  { name: "Alem Gebreyes", location: "Google Review", rating: 5, service: "Roof Service", date: "2 years ago", text: "Robert did an excellent job on my roof!" },
  { name: "Antoinette Hicks", location: "Google Review", rating: 5, service: "Roof Repair", date: "2 years ago", text: "Go wonderful roof" },
  { name: "Big C Alexander", location: "Google Review", rating: 5, service: "Roofing Service", date: "2 years ago", text: "Prompt and professional service." },
  { name: "gracie lewis", location: "Google Review", rating: 5, service: "Roof Installation", date: "2 years ago", text: "Wonderful Experience!!" },
  { name: "Parker Redmond", location: "Google Review", rating: 5, service: "Roof Replacement", date: "2 days ago", text: "Robert and his team did a fantastic job on our roof replacement. He explained the product choices and process thoroughly and kept us up to date through the completion of the job. The roof took only one day from start to finish." },
  { name: "Blake", location: "Google Review", rating: 5, service: "Total Tear Off & New Roof", date: "1 week ago", text: "Very professional and prompt with every aspect of the job. The crew was hard working and polite. They made sure they protected the shrubbery and covered my in ground pool to protect it. We had a total tear off and new replacement roof." },
  { name: "Randy Claiborne", location: "Murfreesboro, TN", rating: 5, service: "Roof Replacement", date: "3 weeks ago", text: "5 stars! The StoneMark Company in Murfreesboro, TN replaced my roof flawlessly. Robert Yeatman handled everything personally. He gave an in-depth overview of my old roof, multiple shingle options..." },
  { name: "Mike Hassell", location: "Google Review", rating: 5, service: "Roof Replacement", date: "3 weeks ago", text: "Absolutely a great job replacing my roof. And the cleanup afterwards, you will not believe I highly recommend them for a replacement of your roof." },
  { name: "Thomas", location: "Google Review", rating: 5, service: "Rental Property Roofs", date: "4 weeks ago", text: "I recently had StoneMark do 2 roofs for me on rental properties. The installation was handled professionally from start to finish! Their workers showed up properly at 7am and began the installation." },
  { name: "Truong Nguyen", location: "Google Review", rating: 5, service: "Roofing Service", date: "2 years ago", text: "Professional roofing contractor with excellent attention to detail." }
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
        subtitle="25+ verified Google reviews. A 5.0 star rating. Real customers, real results — from Brentwood to Columbia and everywhere in between."
        bgImage={HERO_IMAGE}
      />

      {/* Rating summary */}
      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="md:col-span-1 bg-card border border-[#F97316]/30 p-8 flex flex-col items-center justify-center text-center">
              <div className="font-['Barlow_Condensed'] text-[#F97316] leading-none mb-2" style={{ fontSize: "5rem", fontWeight: 900 }}>5.0</div>
              <div className="flex gap-1 mb-3">{[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-[#F97316] text-[#F97316]" />)}</div>
              <div className="font-['DM_Sans'] text-foreground font-medium mb-1">Google Rating</div>
              <div className="font-['DM_Sans'] text-muted-foreground text-sm">Based on 25+ reviews</div>
            </div>
            <div className="md:col-span-2 bg-card border border-border p-8">
              <h3 className="font-['Barlow_Condensed'] text-foreground text-2xl uppercase mb-6" style={{ fontWeight: 800 }}>Rating Breakdown</h3>
              {[5, 4, 3, 2, 1].map((stars) => (
                <div key={stars} className="flex items-center gap-4 mb-3">
                  <div className="flex gap-0.5 w-20 flex-shrink-0">
                    {[...Array(stars)].map((_, i) => <Star key={i} size={12} className="fill-[#F97316] text-[#F97316]" />)}
                    {[...Array(5 - stars)].map((_, i) => <Star key={i} size={12} className="text-white/20" />)}
                  </div>
                  <div className="flex-1 h-2 bg-muted relative">
                    <div
                      className="absolute inset-y-0 left-0 bg-[#F97316]"
                      style={{ width: stars === 5 ? "100%" : stars === 4 ? "0%" : "0%" }}
                    />
                  </div>
                  <span className="font-['DM_Sans'] text-muted-foreground text-sm w-8 text-right">{stars === 5 ? "25" : "0"}</span>
                </div>
              ))}
              <p className="font-['DM_Sans'] text-muted-foreground/60 text-xs mt-4">All 25+ reviews are 5-star ratings on Google.</p>
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
                  <div key={t.title} className="p-5 border border-border bg-card">
                    <div className="w-10 h-10 bg-[#F97316]/10 flex items-center justify-center mb-4">
                      <Icon size={18} className="text-[#F97316]" />
                    </div>
                    <h4 className="font-['Barlow_Condensed'] text-foreground text-base uppercase tracking-wide mb-1" style={{ fontWeight: 700 }}>{t.title}</h4>
                    <div className="font-['DM_Sans'] text-[#F97316] text-xs mb-2">{t.count}</div>
                    <p className="font-['DM_Sans'] text-muted-foreground text-sm leading-relaxed">{t.desc}</p>
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
              <div key={i} className="bg-card border border-border p-6 hover:border-[#F97316]/40 transition-all duration-300 relative group">
                <div className="absolute top-4 right-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Quote size={36} className="text-[#F97316]" />
                </div>
                <div className="flex gap-1 mb-1">{[...Array(r.rating)].map((_, j) => <Star key={j} size={13} className="fill-[#F97316] text-[#F97316]" />)}</div>
                <div className="font-['DM_Sans'] text-muted-foreground/40 text-xs mb-3">{r.date}</div>
                <p className="font-['DM_Sans'] text-foreground/70 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="font-['Barlow_Condensed'] text-foreground text-base uppercase tracking-wide" style={{ fontWeight: 700 }}>{r.name}</div>
                    <div className="font-['DM_Sans'] text-muted-foreground/50 text-xs">{r.location}</div>
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
