/*
 * STONEMARK CONTACT PAGE
 * Estimate request form, contact info, hours, and owner intro
 */

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle, AlertCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";

const HERO_IMAGE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663463686821/KVD2cbSepdZ9AYQ9PcVg79/stonemark-metal-roof-YSzM9t43uu4gj6TMuEpYoM.webp";

const services = [
  "Asphalt Shingle Roofing",
  "Standing Seam Metal Roofing",
  "Low-Slope / TPO Roofing",
  "Seamless Gutters",
  "Gutter Guards",
  "Soffit & Fascia Repair",
  "Storm Damage / Insurance Claim",
  "Other / Not Sure",
];

const urgency = [
  "No rush — planning ahead",
  "Within the next month",
  "Within 1–2 weeks",
  "Urgent — storm damage or active leak",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({
    name: "", phone: "", email: "", address: "", service: "", urgency: "", message: "",
  });
  const [state, setState] = useState<FormState>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("submitting");
    // Simulate form submission (no backend in static mode)
    setTimeout(() => {
      setState("success");
    }, 1200);
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Free Estimate"
        title="REQUEST YOUR"
        titleAccent="FREE ESTIMATE."
        subtitle="Ready to protect your home? Fill out the form below or call Robert directly. We respond quickly — especially for storm damage."
        bgImage={HERO_IMAGE}
      />

      <section className="py-24 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-6 h-[3px] bg-[#F97316]" />
                  <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-xs font-semibold">Contact Info</span>
                </div>
                <div className="space-y-4">
                  <a href="tel:6152997552" className="flex items-start gap-4 group p-4 border border-border bg-card hover:border-[#F97316]/40 transition-all duration-300">
                    <div className="w-10 h-10 bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316]/20 transition-colors">
                      <Phone size={18} className="text-[#F97316]" />
                    </div>
                    <div>
                      <div className="font-['Barlow_Condensed'] text-muted-foreground uppercase tracking-widest text-xs mb-0.5">Phone</div>
                      <div className="font-['Barlow_Condensed'] text-foreground text-xl group-hover:text-[#F97316] transition-colors" style={{ fontWeight: 800 }}>(615) 299-7552</div>
                      <div className="font-['DM_Sans'] text-muted-foreground/60 text-xs">Call or text Robert directly</div>
                    </div>
                  </a>
                  <a href="mailto:robert@stonemarkco.com" className="flex items-start gap-4 group p-4 border border-border bg-card hover:border-[#F97316]/40 transition-all duration-300">
                    <div className="w-10 h-10 bg-[#F97316]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316]/20 transition-colors">
                      <Mail size={18} className="text-[#F97316]" />
                    </div>
                    <div>
                      <div className="font-['Barlow_Condensed'] text-muted-foreground uppercase tracking-widest text-xs mb-0.5">Email</div>
                      <div className="font-['DM_Sans'] text-foreground text-sm group-hover:text-[#F97316] transition-colors break-all">robert@stonemarkco.com</div>
                    </div>
                  </a>
                  <div className="flex items-start gap-4 p-4 border border-border bg-card">
                    <div className="w-10 h-10 bg-[#F97316]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin size={18} className="text-[#F97316]" />
                    </div>
                    <div>
                      <div className="font-['Barlow_Condensed'] text-muted-foreground uppercase tracking-widest text-xs mb-0.5">Location</div>
                      <div className="font-['DM_Sans'] text-foreground text-sm">Nashville, Tennessee</div>
                      <div className="font-['DM_Sans'] text-muted-foreground/60 text-xs">Serving Middle Tennessee</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="p-5 border border-border bg-card">
                <div className="flex items-center gap-3 mb-4">
                  <Clock size={16} className="text-[#F97316]" />
                  <span className="font-['Barlow_Condensed'] text-foreground uppercase tracking-wide text-sm" style={{ fontWeight: 700 }}>Business Hours</span>
                </div>
                <div className="space-y-2">
                  {[
                    { day: "Monday – Friday", hours: "7:00 AM – 6:00 PM" },
                    { day: "Saturday", hours: "8:00 AM – 4:00 PM" },
                    { day: "Sunday", hours: "Emergency calls only" },
                  ].map((h) => (
                    <div key={h.day} className="flex justify-between items-center">
                      <span className="font-['DM_Sans'] text-muted-foreground/70 text-sm">{h.day}</span>
                      <span className="font-['DM_Sans'] text-foreground font-medium text-sm">{h.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="font-['DM_Sans'] text-[#F97316] text-xs font-medium">Storm damage? We respond to emergency calls 7 days a week.</p>
                </div>
              </div>

              {/* Owner card */}
              <div className="p-5 border border-[#F97316]/30 bg-card">
                <div className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-widest text-xs mb-3">Owner & Operator</div>
                <div className="font-['Barlow_Condensed'] text-foreground text-2xl uppercase mb-2" style={{ fontWeight: 900 }}>Robert Yeatman</div>
                <p className="font-['DM_Sans'] text-muted-foreground/80 text-sm leading-relaxed mb-4">When you call StoneMark, you talk to Robert — not a call center. 45+ years of roofing experience, personally invested in every project.</p>
                <a href="tel:6152997552" className="btn-orange w-full flex items-center justify-center gap-2 text-sm">
                  <Phone size={15} /> Call Robert Now
                </a>
              </div>

              {/* Credentials */}
              <div className="p-5 border border-border bg-card">
                <div className="font-['Barlow_Condensed'] text-muted-foreground uppercase tracking-widest text-xs mb-3">Credentials</div>
                <div className="space-y-2">
                  {["GAF Certified Contractor", "OSHA Certified", "Licensed & Bonded", "$2M Liability Insurance", "A+ BBB Rating"].map((c) => (
                    <div key={c} className="flex items-center gap-2">
                      <CheckCircle size={13} className="text-[#F97316] flex-shrink-0" />
                      <span className="font-['DM_Sans'] text-muted-foreground text-sm">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[3px] bg-[#F97316]" />
                <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">Estimate Request Form</span>
              </div>

              {state === "success" ? (
                <div className="border border-[#F97316]/30 bg-card p-10 text-center">
                  <div className="w-16 h-16 bg-[#F97316]/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle size={32} className="text-[#F97316]" />
                  </div>
                  <h3 className="font-['Barlow_Condensed'] text-foreground text-3xl uppercase mb-3" style={{ fontWeight: 900 }}>Request Received!</h3>
                  <p className="font-['DM_Sans'] text-muted-foreground/80 text-base leading-relaxed mb-6 max-w-md mx-auto">
                    Thank you for reaching out. Robert will personally review your request and get back to you shortly. For urgent needs, call <a href="tel:6152997552" className="text-[#F97316] hover:underline">(615) 299-7552</a>.
                  </p>
                  <button onClick={() => { setState("idle"); setForm({ name: "", phone: "", email: "", address: "", service: "", urgency: "", message: "" }); }} className="btn-outline-orange !text-foreground text-sm">
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Barlow_Condensed'] text-foreground/70 uppercase tracking-widest text-xs mb-2">Full Name *</label>
                      <input
                        type="text" name="name" required value={form.name} onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full bg-card border border-border text-foreground font-['DM_Sans'] text-sm px-4 py-3 focus:outline-none focus:border-[#F97316]/60 placeholder-muted-foreground transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['Barlow_Condensed'] text-foreground/70 uppercase tracking-widest text-xs mb-2">Phone Number *</label>
                      <input
                        type="tel" name="phone" required value={form.phone} onChange={handleChange}
                        placeholder="(615) 000-0000"
                        className="w-full bg-card border border-border text-foreground font-['DM_Sans'] text-sm px-4 py-3 focus:outline-none focus:border-[#F97316]/60 placeholder-muted-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Barlow_Condensed'] text-foreground/70 uppercase tracking-widest text-xs mb-2">Email Address</label>
                      <input
                        type="email" name="email" value={form.email} onChange={handleChange}
                        placeholder="your@email.com"
                        className="w-full bg-card border border-border text-foreground font-['DM_Sans'] text-sm px-4 py-3 focus:outline-none focus:border-[#F97316]/60 placeholder-muted-foreground transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block font-['Barlow_Condensed'] text-foreground/70 uppercase tracking-widest text-xs mb-2">Property Address</label>
                      <input
                        type="text" name="address" value={form.address} onChange={handleChange}
                        placeholder="Street address or city"
                        className="w-full bg-card border border-border text-foreground font-['DM_Sans'] text-sm px-4 py-3 focus:outline-none focus:border-[#F97316]/60 placeholder-muted-foreground transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-['Barlow_Condensed'] text-foreground/70 uppercase tracking-widest text-xs mb-2">Service Needed *</label>
                      <select
                        name="service" required value={form.service} onChange={handleChange}
                        className="w-full bg-card border border-border text-foreground font-['DM_Sans'] text-sm px-4 py-3 focus:outline-none focus:border-[#F97316]/60 transition-colors appearance-none"
                      >
                        <option value="" disabled className="text-muted-foreground/40">Select a service</option>
                        {services.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-['Barlow_Condensed'] text-foreground/70 uppercase tracking-widest text-xs mb-2">Timeline</label>
                      <select
                        name="urgency" value={form.urgency} onChange={handleChange}
                        className="w-full bg-card border border-border text-foreground font-['DM_Sans'] text-sm px-4 py-3 focus:outline-none focus:border-[#F97316]/60 transition-colors appearance-none"
                      >
                        <option value="" disabled className="text-muted-foreground/40">How soon do you need this?</option>
                        {urgency.map((u) => <option key={u} value={u}>{u}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block font-['Barlow_Condensed'] text-foreground/70 uppercase tracking-widest text-xs mb-2">Additional Details</label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={5}
                      placeholder="Describe your roofing needs, any known issues, or questions you have..."
                      className="w-full bg-card border border-border text-foreground font-['DM_Sans'] text-sm px-4 py-3 focus:outline-none focus:border-[#F97316]/60 placeholder-muted-foreground transition-colors resize-none"
                    />
                  </div>

                  {state === "error" && (
                    <div className="flex items-center gap-3 p-4 border border-red-500/30 bg-red-500/10">
                      <AlertCircle size={16} className="text-red-400 flex-shrink-0" />
                      <p className="font-['DM_Sans'] text-red-400 text-sm">Something went wrong. Please call us directly at (615) 299-7552.</p>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      type="submit"
                      disabled={state === "submitting"}
                      className="btn-orange flex items-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {state === "submitting" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        "Submit Estimate Request"
                      )}
                    </button>
                    <p className="font-['DM_Sans'] text-muted-foreground/40 text-xs">
                      Or call directly: <a href="tel:6152997552" className="text-[#F97316] hover:underline">(615) 299-7552</a>
                    </p>
                  </div>

                  <p className="font-['DM_Sans'] text-muted-foreground/30 text-xs">
                    * Required fields. Your information is never shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">The Process</span>
          </div>
          <h2 className="font-['Barlow_Condensed'] text-foreground leading-none mb-10" style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 900 }}>
            WHAT TO EXPECT<br /><span className="text-[#F97316]">NEXT.</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "We Contact You", desc: "Robert or a member of his team will reach out within 1 business day to discuss your project." },
              { step: "02", title: "On-Site Inspection", desc: "We schedule a free, no-obligation inspection of your roof and discuss your options in person." },
              { step: "03", title: "Detailed Estimate", desc: "You receive a clear, itemized estimate with no hidden fees. We explain every line item." },
              { step: "04", title: "Work Begins", desc: "Once you approve, we schedule your project and get to work — most roofs done in one day." },
            ].map((step) => (
              <div key={step.step} className="p-6 border border-border bg-background relative">
                <div className="font-['Barlow_Condensed'] text-[#F97316]/10 text-6xl absolute top-4 right-4 leading-none select-none" style={{ fontWeight: 900 }}>{step.step}</div>
                <div className="font-['Barlow_Condensed'] text-[#F97316] text-sm uppercase tracking-widest mb-2 font-semibold">{step.step}</div>
                <h4 className="font-['Barlow_Condensed'] text-foreground text-xl uppercase mb-3" style={{ fontWeight: 800 }}>{step.title}</h4>
                <p className="font-['DM_Sans'] text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
