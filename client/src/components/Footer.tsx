/*
 * STONEMARK FOOTER — Multi-page version
 * Design: Industrial Brutalism — dark charcoal, orange accents, sharp dividers
 */

import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "wouter";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Service Area", href: "/service-area" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Asphalt Shingle Roofing", href: "/services#asphalt-shingle" },
  { label: "Standing Seam Metal Roofing", href: "/services#metal-roofing" },
  { label: "Low-Slope / TPO Roofing", href: "/services#tpo-roofing" },
  { label: "Seamless Gutters", href: "/services#gutters" },
  { label: "Soffit & Fascia Repair", href: "/services#soffit-fascia" },
  { label: "Storm Damage Response", href: "/services#storm-damage" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      {/* Orange top accent */}
      <div className="h-[3px] bg-[#F97316]" />

      {/* Main footer content */}
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-6 group">
              <img 
                src="/stonemark-logo-recolor.png" 
                alt="StoneMark Roofing" 
                className="h-14 w-auto drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity" 
              />
            </Link>
            <p className="font-['DM_Sans'] text-foreground/50 text-sm leading-relaxed mb-5">
              Nashville's trusted roofing contractor. 45+ years of experience.
              GAF Certified. Serving Middle Tennessee since 2012.
            </p>
            {/* Credentials */}
            <div className="space-y-1.5">
              {["GAF Certified", "OSHA Certified", "Licensed & Bonded", "A+ BBB Rating"].map((c) => (
                <div key={c} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#F97316] rotate-45" />
                  <span className="font-['DM_Sans'] text-foreground/40 text-xs">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <div
              className="font-['Barlow_Condensed'] text-foreground text-sm uppercase tracking-widest mb-5"
              style={{ fontWeight: 700 }}
            >
              Our Services
            </div>
            <ul className="space-y-2">
              {serviceLinks.map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="font-['DM_Sans'] text-foreground/50 text-sm hover:text-[#F97316] transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation column */}
          <div>
            <div
              className="font-['Barlow_Condensed'] text-foreground text-sm uppercase tracking-widest mb-5"
              style={{ fontWeight: 700 }}
            >
              Quick Links
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-['DM_Sans'] text-foreground/50 text-sm hover:text-[#F97316] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <div
              className="font-['Barlow_Condensed'] text-foreground text-sm uppercase tracking-widest mb-5"
              style={{ fontWeight: 700 }}
            >
              Contact Us
            </div>
            <div className="space-y-4">
              <a href="tel:6152997552" className="flex items-start gap-3 group">
                <Phone size={15} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                <span className="font-['DM_Sans'] text-foreground/60 text-sm group-hover:text-[#F97316] transition-colors">
                  (615) 299-7552
                </span>
              </a>
              <a href="mailto:robert@stonemarkco.com" className="flex items-start gap-3 group">
                <Mail size={15} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                <span className="font-['DM_Sans'] text-foreground/60 text-sm group-hover:text-[#F97316] transition-colors break-all">
                  robert@stonemarkco.com
                </span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin size={15} className="text-[#F97316] mt-0.5 flex-shrink-0" />
                <span className="font-['DM_Sans'] text-foreground/60 text-sm">
                  Nashville, Tennessee
                  <br />
                  Middle Tennessee
                </span>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="mt-6 btn-orange inline-flex items-center gap-2 text-sm px-4 py-2.5"
            >
              Free Estimate
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-['DM_Sans'] text-foreground/30 text-xs">
            © {new Date().getFullYear()} The StoneMark Company. All rights reserved. Nashville, Tennessee.
          </p>
          <p className="font-['DM_Sans'] text-foreground/20 text-xs">
            Licensed · Bonded · Insured · $2M Liability Coverage
          </p>
        </div>
      </div>
    </footer>
  );
}
