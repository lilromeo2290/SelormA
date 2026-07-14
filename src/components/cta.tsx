"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 lg:py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f35680f?auto=format&fit=crop&w=2000&q=80"
              alt="Construction project in progress"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A2345]/95 via-[#0A2345]/85 to-[#0A2345]/70" />
          </div>

          {/* Decorative */}
          <div className="absolute top-0 right-0 h-64 w-64 bg-[#D89B00]/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-48 w-48 bg-[#D89B00]/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-24 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#D89B00]/40 rounded-full px-4 py-1.5 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#D89B00] animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#D89B00]">
                Let&apos;s Build Together
              </span>
            </div>

            <h2
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-5 max-w-3xl mx-auto"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Ready to Start Your{" "}
              <span className="text-gradient-gold">Next Project?</span>
            </h2>

            <p className="text-white/80 text-base lg:text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
              Contact Selorm A Ventures today for a free, no-obligation quote. Our team is ready to
              bring your vision to life with quality, reliability, and excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-[#D89B00] hover:bg-[#b07e00] text-white rounded-full px-8 py-6 text-base font-semibold shadow-gold transition-all hover:scale-105 group"
              >
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo("#contact");
                  }}
                >
                  Request a Free Quote
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/40 text-white hover:bg-white hover:text-[#0A2345] rounded-full px-8 py-6 text-base font-semibold transition-all"
              >
                <a href="tel:0244264614">Call: 0244 264 614</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
