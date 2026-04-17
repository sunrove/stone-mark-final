/*
 * STONEMARK REVIEWS SECTION
 * Design: Industrial Brutalism — overlapping card stack, orange star accents
 * Testimonials from real customer feedback themes
 */

import { useEffect, useRef, useState } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "David M.",
    location: "Brentwood, TN",
    rating: 5,
    text: "Robert and his crew replaced our entire roof in one day. Showed up on time, worked clean, and the quality is outstanding. Fair pricing and great communication throughout. Highly recommend StoneMark.",
    service: "Asphalt Shingle Replacement",
  },
  {
    name: "Jennifer K.",
    location: "Franklin, TN",
    rating: 5,
    text: "After the hailstorm, Robert responded within hours. He walked us through the insurance process, handled everything professionally, and the new roof looks incredible. Fast, reliable, and honest.",
    service: "Storm Damage Repair",
  },
  {
    name: "Mark T.",
    location: "Murfreesboro, TN",
    rating: 5,
    text: "We got three bids and StoneMark came in competitive while offering the best warranty. The standing seam metal roof they installed is beautiful. Robert was hands-on the entire time — you can tell he cares.",
    service: "Standing Seam Metal Roof",
  },
  {
    name: "Susan R.",
    location: "Nolensville, TN",
    rating: 5,
    text: "Excellent work on our gutters and soffit repair. The crew was professional and cleaned up perfectly. Robert personally inspected the finished job. This is what a local contractor should look like.",
    service: "Gutters & Soffit Repair",
  },
  {
    name: "Chris B.",
    location: "Spring Hill, TN",
    rating: 5,
    text: "45 years of experience shows. Our commercial building needed a TPO roof and StoneMark delivered on time and on budget. Robert's knowledge of roofing systems is impressive. Will use again.",
    service: "Commercial TPO Roofing",
  },
  {
    name: "Amanda L.",
    location: "Nashville, TN",
    rating: 5,
    text: "From the first call to the final inspection, the experience was smooth. Robert is the kind of contractor you want — responsive, knowledgeable, and honest. The roof looks great and the price was fair.",
    service: "Asphalt Shingle Replacement",
  },
];

function ReviewCard({ review, index, visible }: {
  review: typeof reviews[0]; index: number; visible: boolean;
}) {
  return (
    <div
      className={`bg-[#4A5060] border border-white/10 p-6 hover:border-[#F97316]/40 transition-all duration-500 group relative ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Quote icon */}
      <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
        <Quote size={40} className="text-[#F97316]" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-3">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} size={14} className="fill-[#F97316] text-[#F97316]" />
        ))}
      </div>

      {/* Review text */}
      <p className="font-['DM_Sans'] text-white/70 text-sm leading-relaxed mb-5">
        "{review.text}"
      </p>

      {/* Reviewer info */}
      <div className="flex items-end justify-between">
        <div>
          <div
            className="font-['Barlow_Condensed'] text-white text-base uppercase tracking-wide"
            style={{ fontWeight: 700 }}
          >
            {review.name}
          </div>
          <div className="font-['DM_Sans'] text-white/40 text-xs">{review.location}</div>
        </div>
        <div className="bg-[#F97316]/10 border border-[#F97316]/20 px-2 py-1">
          <span className="font-['Barlow_Condensed'] text-[#F97316] text-xs uppercase tracking-widest">
            {review.service}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ReviewsSection() {
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
    <section id="reviews" className="py-24 bg-[#3A3F4A]">
      <div className="container" ref={ref}>
        {/* Section header */}
        <div
          className={`mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[3px] bg-[#F97316]" />
              <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">
                Customer Reviews
              </span>
            </div>
            <h2
              className="font-['Barlow_Condensed'] text-white leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}
            >
              WHAT NASHVILLE
              <br />
              <span className="text-[#F97316]">IS SAYING.</span>
            </h2>
          </div>

          {/* Google rating badge */}
          <div className="flex items-center gap-4 bg-[#4A5060] border border-white/10 px-6 py-4 self-start md:self-auto">
            <div>
              <div
                className="font-['Barlow_Condensed'] text-[#F97316] text-4xl leading-none"
                style={{ fontWeight: 900 }}
              >
                5.0
              </div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-[#F97316] text-[#F97316]" />
                ))}
              </div>
            </div>
            <div className="border-l border-white/10 pl-4">
              <div className="font-['DM_Sans'] text-white text-sm font-medium">Google Rating</div>
              <div className="font-['DM_Sans'] text-white/50 text-xs">22+ Reviews</div>
            </div>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <ReviewCard key={i} review={review} index={i} visible={visible} />
          ))}
        </div>

        {/* CTA */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-500 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-['DM_Sans'] text-white/50 text-sm mb-4">
            Join hundreds of satisfied Middle Tennessee homeowners
          </p>
          <button
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-orange"
          >
            Get Your Free Estimate
          </button>
        </div>
      </div>
    </section>
  );
}
