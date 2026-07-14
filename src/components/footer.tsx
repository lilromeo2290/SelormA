"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ArrowRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

const serviceLinks = [
  "Professional Painting",
  "Scaffolding Services",
  "Column Box Installation",
  "Concrete Support",
  "Construction Support",
  "Wheel Barrow Supply",
];

export default function Footer() {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#061732] text-white relative overflow-hidden mt-auto">
      {/* Top gold accent */}
      <div className="h-1 bg-gradient-to-r from-transparent via-[#D89B00] to-transparent" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D89B00]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D89B00]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl overflow-hidden bg-white ring-1 ring-white/10">
                <img
                  src="/selorm-logo.png"
                  alt="Selorm A Ventures logo"
                  className="h-full w-full object-cover"
                  width={48}
                  height={48}
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span
                  className="font-bold text-base tracking-tight"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  Selorm A
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#D89B00]">
                  Ventures
                </span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-5">
              Professional painting, construction support, scaffolding, and building services
              throughout Ghana. Building excellence through quality craftsmanship.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:bg-[#D89B00] hover:border-[#D89B00] hover:text-[#0A2345] transition-all duration-300 hover:scale-110"
                >
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="font-bold text-base mb-5 text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav(l.href);
                    }}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#D89B00] transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="font-bold text-base mb-5 text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNav("#services");
                    }}
                    className="group inline-flex items-center gap-2 text-sm text-white/70 hover:text-[#D89B00] transition-colors"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="font-bold text-base mb-5 text-white"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Contact Info
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:0244264614" className="flex items-start gap-3 group">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#D89B00] group-hover:border-[#D89B00] transition-all flex-shrink-0">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">Phone</div>
                    <div className="text-sm text-white/90 group-hover:text-[#D89B00] transition-colors">
                      0244 264 614
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:selormagble@gmail.com" className="flex items-start gap-3 group">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:bg-[#D89B00] group-hover:border-[#D89B00] transition-all flex-shrink-0">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">Email</div>
                    <div className="text-sm text-white/90 group-hover:text-[#D89B00] transition-colors break-all">
                      selormagble@gmail.com
                    </div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 border border-white/10 flex-shrink-0">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">Location</div>
                  <div className="text-sm text-white/90 leading-snug">
                    Classic Hotel Junction,<br />Prampram, Ghana
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/60 text-center sm:text-left">
            &copy; 2026 Selorm A Ventures. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4 text-xs text-white/50">
            <a href="#" className="hover:text-[#D89B00] transition-colors">Privacy Policy</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="hover:text-[#D89B00] transition-colors">Terms of Service</a>
            <span className="h-3 w-px bg-white/20" />
            <a href="#" className="hover:text-[#D89B00] transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
