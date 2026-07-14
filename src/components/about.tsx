"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const highlights = [
  "Residential, commercial & industrial projects",
  "Experienced and dependable team",
  "Durable, high-quality workmanship",
  "Safety and customer satisfaction guaranteed",
];

export default function About() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="scroll-mt-nav py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F5F5F5]/40 -skew-x-12 origin-top-right hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-8">
                <div className="overflow-hidden rounded-2xl shadow-premium aspect-[3/4] group">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80"
                    alt="Construction site with workers"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-premium aspect-square group">
                  <img
                    src="https://images.unsplash.com/photo-1591790729098-7f93c0b9c255?auto=format&fit=crop&w=800&q=80"
                    alt="Painter working on building facade"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="overflow-hidden rounded-2xl shadow-premium aspect-square group">
                  <img
                    src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=800&q=80"
                    alt="Scaffolding installation on building"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl shadow-premium aspect-[3/4] group">
                  <img
                    src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=800&q=80"
                    alt="Modern construction equipment at work"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0A2345] text-white rounded-2xl px-6 py-4 shadow-premium-lg flex items-center gap-4 min-w-[260px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D89B00] flex-shrink-0">
                <span className="text-2xl font-bold">10+</span>
              </div>
              <div>
                <div className="font-bold text-sm leading-tight">Years of Trusted</div>
                <div className="text-[#D89B00] text-xs uppercase tracking-wider">
                  Construction Experience
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#D89B00]/10 rounded-full px-4 py-1.5 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D89B00]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D89B00]">
                About Us
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2345] leading-tight mb-6"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              About <span className="text-[#D89B00]">Selorm A Ventures</span>
            </h2>

            <p className="text-[#5c6b85] text-base lg:text-lg leading-relaxed mb-5">
              Selorm A Ventures is a trusted Ghanaian construction company specializing in
              professional painting and construction support services. We are committed to
              delivering durable, high-quality workmanship backed by reliability, safety, and
              customer satisfaction.
            </p>

            <p className="text-[#5c6b85] text-base lg:text-lg leading-relaxed mb-8">
              Whether it&apos;s residential, commercial, or industrial projects, our experienced team
              provides dependable solutions that meet the highest standards. We blend modern
              techniques with proven craftsmanship to deliver projects on time, every time — making
              us the preferred partner for clients across Ghana.
            </p>

            {/* Highlights */}
            <ul className="grid sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[#D89B00] flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-[#0A2345] font-medium">{h}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-[#0A2345] hover:bg-[#14315a] text-white rounded-full px-7 shadow-premium group"
            >
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo("#services");
                }}
              >
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
