/*
 * STONEMARK STATS BAR
 * Design: Industrial Brutalism — horizontal ticker-style band
 * Orange dividers, Barlow Condensed numbers, animated counters
 */

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 45, suffix: "+", label: "Years Experience" },
  { value: 5, suffix: ".0★", label: "Google Rating" },
  { value: 2, suffix: "M", prefix: "$", label: "Liability Coverage" },
  { value: 100, suffix: "%", label: "Satisfaction Goal" },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target, duration]);
  return count;
}

function StatItem({ value, suffix, prefix, label, active }: {
  value: number; suffix: string; prefix?: string; label: string; active: boolean;
}) {
  const count = useCountUp(value, 1600, active);
  return (
    <div className="flex flex-col items-center text-center px-6 py-6 md:py-8 flex-1 min-w-[140px]">
      <div
        className="font-['Barlow_Condensed'] text-[#F97316] leading-none mb-1"
        style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 900 }}
      >
        {prefix}{count}{suffix}
      </div>
      <div className="font-['Barlow_Condensed'] text-white/60 uppercase tracking-widest text-xs font-semibold">
        {label}
      </div>
    </div>
  );
}

export default function StatsBar() {
  const [active, setActive] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative bg-[#3A3F4A] border-y border-[#F97316]/30"
      style={{
        background: "linear-gradient(135deg, #1C1F26 0%, #22252e 100%)",
      }}
    >
      {/* Orange top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-[#F97316]" />

      <div className="container">
        <div className="flex flex-wrap justify-around divide-x divide-white/10">
          {stats.map((stat, i) => (
            <StatItem key={i} {...stat} active={active} />
          ))}
        </div>
      </div>

      {/* Credential badges row */}
      <div className="border-t border-white/10">
        <div className="container py-4">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            {[
              "GAF Certified Contractor",
              "OSHA Certified",
              "Licensed & Bonded",
              "A+ BBB Rating",
              "Middle TN Home Builders Award",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-[#F97316] rotate-45 flex-shrink-0" />
                <span className="font-['DM_Sans'] text-white/60 text-xs uppercase tracking-widest">
                  {badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
