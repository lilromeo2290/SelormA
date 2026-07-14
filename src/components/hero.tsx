"use client";

import { ArrowRight, Phone, Star, ShieldCheck, Award, Hammer } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center overflow-hidden pt-20"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=2000&q=80"
          alt="Professional construction workers painting a modern building with scaffolding"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2345]/95 via-[#0A2345]/80 to-[#0A2345]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2345]/90 via-transparent to-transparent" />
      </div>

      {/* Decorative gold accents */}
      <div className="absolute top-1/4 right-12 hidden lg:block">
        <div className="h-32 w-32 rounded-full bg-[#D89B00]/20 blur-3xl" />
      </div>
      <div className="absolute bottom-20 left-1/3 hidden lg:block">
        <div className="h-40 w-40 rounded-full bg-[#D89B00]/10 blur-3xl" />
      </div>

      {/* Floating logo watermark (top right) */}
      <div className="absolute top-24 right-6 sm:right-12 lg:right-20 hidden md:block z-10 animate-float">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-2 shadow-premium-lg ring-1 ring-white/40 max-w-[180px] lg:max-w-[220px]">
          <img
            src="/selorm-logo.png"
            alt="Selorm A Ventures brand logo"
            className="w-full h-auto rounded-xl"
            width={220}
            height={150}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#D89B00]/40 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Star className="h-4 w-4 fill-[#D89B00] text-[#D89B00]" />
            <span className="text-xs sm:text-sm font-medium text-white tracking-wide">
              Ghana&apos;s Trusted Construction & Painting Experts
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.05] mb-6 animate-fade-in-up"
            style={{ fontFamily: "var(--font-montserrat)", animationDelay: "0.1s" }}
          >
            Building Excellence
            <br />
            Through{" "}
            <span className="text-gradient-gold">Quality Craftsmanship</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-base sm:text-lg lg:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Selorm A Ventures provides professional painting, construction support, scaffolding,
            concrete support systems, column box installation, and equipment services throughout
            Ghana with a commitment to quality, reliability, and excellence.
          </p>

          {/* Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
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
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-white/5 backdrop-blur-md border-2 border-white/40 hover:bg-white hover:text-[#0A2345] text-white rounded-full px-8 py-6 text-base font-semibold transition-all"
            >
              <a href="tel:0244264614">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </a>
            </Button>
          </div>

          {/* Trust indicators */}
          <div
            className="mt-10 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { icon: ShieldCheck, label: "Reliable Service", value: "100%" },
              { icon: Award, label: "Quality Work", value: "Premium" },
              { icon: Hammer, label: "Projects Done Right", value: "Expert" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#D89B00]/20 border border-[#D89B00]/30 flex-shrink-0">
                  <item.icon className="h-5 w-5 text-[#D89B00]" />
                </div>
                <div className="min-w-0">
                  <div className="text-white font-bold text-base sm:text-lg leading-tight">
                    {item.value}
                  </div>
                  <div className="text-white/70 text-xs">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 z-10">
        <span className="text-white/60 text-xs tracking-widest uppercase">Scroll</span>
        <div className="h-10 w-6 rounded-full border-2 border-white/40 flex items-start justify-center p-1.5">
          <div className="h-2 w-1 bg-[#D89B00] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
