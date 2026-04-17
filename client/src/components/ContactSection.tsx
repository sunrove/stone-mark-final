/*
 * STONEMARK CONTACT SECTION
 * Design: Industrial Brutalism — dark bg, orange accents, sharp form inputs
 * Left: contact info; Right: estimate request form
 */

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would send to a backend/email service
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-[#4A5060] border border-white/15 text-white placeholder-white/30 px-4 py-3 font-['DM_Sans'] text-sm focus:outline-none focus:border-[#F97316]/60 transition-colors";

  return (
    <section id="contact" className="py-24 bg-[#3A3F4A]">
      <div className="container">
        {/* Section header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[3px] bg-[#F97316]" />
            <span className="font-['Barlow_Condensed'] text-[#F97316] uppercase tracking-[0.25em] text-sm font-semibold">
              Get In Touch
            </span>
          </div>
          <h2
            className="font-['Barlow_Condensed'] text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 900 }}
          >
            REQUEST YOUR
            <br />
            <span className="text-[#F97316]">FREE ESTIMATE.</span>
          </h2>
          <p className="font-['DM_Sans'] text-white/60 text-lg max-w-2xl mt-4">
            Ready to protect your home? Contact us for a free, no-obligation estimate.
            We respond quickly — especially for storm damage.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left: Contact info (2/5) */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact cards */}
            <div className="border border-white/10 bg-[#4A5060] p-6">
              <div
                className="font-['Barlow_Condensed'] text-white text-lg uppercase tracking-wide mb-5"
                style={{ fontWeight: 800 }}
              >
                Contact Info
              </div>
              <div className="space-y-5">
                <a
                  href="tel:6152997552"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#F97316]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316]/25 transition-colors">
                    <Phone size={17} className="text-[#F97316]" />
                  </div>
                  <div>
                    <div className="font-['Barlow_Condensed'] text-white/50 text-xs uppercase tracking-widest mb-0.5">
                      Phone
                    </div>
                    <div className="font-['DM_Sans'] text-white font-medium group-hover:text-[#F97316] transition-colors">
                      (615) 299-7552
                    </div>
                  </div>
                </a>

                <a
                  href="mailto:robert@stonemarkco.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 bg-[#F97316]/15 flex items-center justify-center flex-shrink-0 group-hover:bg-[#F97316]/25 transition-colors">
                    <Mail size={17} className="text-[#F97316]" />
                  </div>
                  <div>
                    <div className="font-['Barlow_Condensed'] text-white/50 text-xs uppercase tracking-widest mb-0.5">
                      Email
                    </div>
                    <div className="font-['DM_Sans'] text-white font-medium group-hover:text-[#F97316] transition-colors break-all">
                      robert@stonemarkco.com
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F97316]/15 flex items-center justify-center flex-shrink-0">
                    <MapPin size={17} className="text-[#F97316]" />
                  </div>
                  <div>
                    <div className="font-['Barlow_Condensed'] text-white/50 text-xs uppercase tracking-widest mb-0.5">
                      Location
                    </div>
                    <div className="font-['DM_Sans'] text-white font-medium">
                      Nashville, Tennessee
                    </div>
                    <div className="font-['DM_Sans'] text-white/50 text-sm">
                      Serving Middle Tennessee
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-[#F97316]/15 flex items-center justify-center flex-shrink-0">
                    <Clock size={17} className="text-[#F97316]" />
                  </div>
                  <div>
                    <div className="font-['Barlow_Condensed'] text-white/50 text-xs uppercase tracking-widest mb-0.5">
                      Hours
                    </div>
                    <div className="font-['DM_Sans'] text-white font-medium">
                      Mon–Fri: 7am – 6pm
                    </div>
                    <div className="font-['DM_Sans'] text-white/50 text-sm">
                      Sat: 8am – 4pm · Emergency calls welcome
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Owner card */}
            <div className="border border-[#F97316]/30 bg-[#F97316]/5 p-6">
              <div
                className="font-['Barlow_Condensed'] text-[#F97316] text-sm uppercase tracking-widest mb-2"
              >
                Owner & Operator
              </div>
              <div
                className="font-['Barlow_Condensed'] text-white text-2xl uppercase mb-2"
                style={{ fontWeight: 900 }}
              >
                Robert Yeatman
              </div>
              <p className="font-['DM_Sans'] text-white/60 text-sm leading-relaxed">
                When you call StoneMark, you talk to Robert — not a call center. 
                45+ years of roofing experience, personally invested in every project.
              </p>
            </div>
          </div>

          {/* Right: Form (3/5) */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 border border-[#F97316]/30 bg-[#F97316]/5">
                <CheckCircle size={56} className="text-[#F97316] mb-4" />
                <h3
                  className="font-['Barlow_Condensed'] text-white text-3xl uppercase mb-3"
                  style={{ fontWeight: 900 }}
                >
                  Message Received!
                </h3>
                <p className="font-['DM_Sans'] text-white/60 max-w-sm">
                  Thank you for reaching out. Robert will contact you shortly to discuss your
                  roofing project and schedule a free estimate.
                </p>
                <div className="mt-6 font-['DM_Sans'] text-white/50 text-sm">
                  Or call directly:{" "}
                  <a href="tel:6152997552" className="text-[#F97316] hover:underline">
                    (615) 299-7552
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-['Barlow_Condensed'] text-white/50 text-xs uppercase tracking-widest block mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-['Barlow_Condensed'] text-white/50 text-xs uppercase tracking-widest block mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(615) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>
                </div>

                <div>
                  <label className="font-['Barlow_Condensed'] text-white/50 text-xs uppercase tracking-widest block mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label className="font-['Barlow_Condensed'] text-white/50 text-xs uppercase tracking-widest block mb-1.5">
                    Service Needed *
                  </label>
                  <select
                    name="service"
                    required
                    value={form.service}
                    onChange={handleChange}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="" disabled>Select a service...</option>
                    <option value="asphalt-shingle">Asphalt Shingle Roof Replacement</option>
                    <option value="metal-roofing">Standing Seam / Metal Roofing</option>
                    <option value="tpo-roofing">Low-Slope / TPO Roofing</option>
                    <option value="gutters">Seamless Gutters & Gutter Guards</option>
                    <option value="soffit-fascia">Soffit & Fascia Repair</option>
                    <option value="storm-damage">Storm Damage Repair</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="font-['Barlow_Condensed'] text-white/50 text-xs uppercase tracking-widest block mb-1.5">
                    Project Details
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your project — address, current roof condition, timeline, any concerns..."
                    value={form.message}
                    onChange={handleChange}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  className="btn-orange w-full text-base py-4"
                >
                  Send My Free Estimate Request
                </button>

                <p className="font-['DM_Sans'] text-white/30 text-xs text-center">
                  By submitting, you agree to be contacted by The StoneMark Company.
                  We never share your information.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
