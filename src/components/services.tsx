"use client";

import { PaintRoller, Building2, Boxes, Layers, Wrench, Truck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const services = [
  {
    icon: PaintRoller,
    title: "Professional Painting",
    description:
      "Premium interior and exterior painting for residential, commercial, and industrial buildings using high-quality, weather-resistant paints for a flawless, lasting finish.",
    color: "from-[#D89B00] to-[#b07e00]",
  },
  {
    icon: Building2,
    title: "Scaffolding Services",
    description:
      "Safe, sturdy scaffolding solutions for buildings of all sizes — engineered for stability, accessibility, and compliance with safety standards.",
    color: "from-[#0A2345] to-[#14315a]",
  },
  {
    icon: Boxes,
    title: "Column Box Installation",
    description:
      "Precision column box formwork installation for reinforced concrete columns, ensuring structural integrity and clean, professional finishes.",
    color: "from-[#D89B00] to-[#b07e00]",
  },
  {
    icon: Layers,
    title: "Concrete Support",
    description:
      "Comprehensive concrete support services including mixing, pouring, curing, and finishing — built to deliver strength and durability.",
    color: "from-[#0A2345] to-[#14315a]",
  },
  {
    icon: Wrench,
    title: "Construction Support Services",
    description:
      "End-to-end site support — from prep work to finishing touches — assisting contractors and project managers with dependable on-site labor and expertise.",
    color: "from-[#D89B00] to-[#b07e00]",
  },
  {
    icon: Truck,
    title: "Wheel Barrow Supply",
    description:
      "Reliable supply of construction equipment including wheel barrows and tools, ensuring your project stays equipped and on schedule.",
    color: "from-[#0A2345] to-[#14315a]",
  },
];

export default function Services() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="scroll-mt-nav py-20 lg:py-28 bg-[#F5F5F5] relative overflow-hidden">
      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0A2345 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D89B00]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D89B00]">
              Our Services
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2345] leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Premium Services Built on <span className="text-[#D89B00]">Expertise</span>
          </h2>
          <p className="text-[#5c6b85] text-base lg:text-lg leading-relaxed">
            From professional painting to comprehensive construction support, we offer a complete
            range of services designed to bring your project to life with precision and care.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <Card
              key={i}
              className="group relative overflow-hidden border-0 rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-500 hover:-translate-y-2 bg-white"
            >
              {/* Top accent bar */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500`} />

              <CardContent className="p-7">
                {/* Icon */}
                <div
                  className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-white shadow-lg mb-5 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500`}
                >
                  <service.icon className="h-8 w-8" strokeWidth={2} />
                </div>

                {/* Number */}
                <span className="absolute top-6 right-6 text-5xl font-bold text-[#0A2345]/5 group-hover:text-[#D89B00]/15 transition-colors">
                  0{i + 1}
                </span>

                <h3
                  className="text-xl font-bold text-[#0A2345] mb-3 leading-tight"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {service.title}
                </h3>

                <p className="text-[#5c6b85] text-sm leading-relaxed mb-5">
                  {service.description}
                </p>

                <button
                  onClick={() => scrollTo("#contact")}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0A2345] group-hover:text-[#D89B00] transition-colors"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-[#5c6b85] mb-4">Need a service that&apos;s not listed? We&apos;ve got you covered.</p>
          <Button
            asChild
            size="lg"
            className="bg-[#D89B00] hover:bg-[#b07e00] text-white rounded-full px-8 shadow-gold transition-all hover:scale-105"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
            >
              Request a Custom Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
