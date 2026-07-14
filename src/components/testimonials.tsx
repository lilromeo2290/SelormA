"use client";

import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Kwame Mensah",
    role: "Homeowner, Accra",
    rating: 5,
    text: "Selorm A Ventures exceeded our expectations with excellent painting work and timely completion. The team was professional, courteous, and the finish quality is outstanding.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Abena Owusu",
    role: "Business Owner, Tema",
    rating: 5,
    text: "Highly professional team with quality workmanship. They painted our entire commercial building and the results speak for themselves. Highly recommended!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Yaw Asante",
    role: "Project Manager, Prampram",
    rating: 5,
    text: "Their scaffolding and construction support services were critical to our project's success. Reliable, safe, and delivered exactly as promised. Will hire again.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
  },
  {
    name: "Akosua Boateng",
    role: "Property Developer, Accra",
    rating: 5,
    text: "Working with Selorm A Ventures was a pleasure. Their attention to detail in concrete support and column box installation was exceptional. True professionals.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-[#F5F5F5] relative overflow-hidden">
      {/* Decorative quote */}
      <Quote className="absolute top-10 left-10 h-32 w-32 text-[#0A2345]/5" />
      <Quote className="absolute bottom-10 right-10 h-32 w-32 text-[#0A2345]/5 rotate-180" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D89B00]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D89B00]">
              Testimonials
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2345] leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            What Our <span className="text-[#D89B00]">Clients Say</span>
          </h2>
          <p className="text-[#5c6b85] text-base lg:text-lg leading-relaxed">
            Don&apos;t just take our word for it. Hear from our satisfied clients across Ghana who
            trust Selorm A Ventures for their construction and painting needs.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group bg-white rounded-2xl p-7 shadow-premium hover:shadow-premium-lg transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Top accent */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#D89B00] via-[#e9b33d] to-[#D89B00] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="h-12 w-12 text-[#0A2345]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="h-5 w-5 fill-[#D89B00] text-[#D89B00]"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#0A2345]/80 text-base leading-relaxed mb-6 relative z-10">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#e6e8ec]">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-12 w-12 rounded-full object-cover ring-2 ring-[#D89B00]/30"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-1 -right-1 h-5 w-5 rounded-full bg-[#D89B00] flex items-center justify-center ring-2 ring-white">
                    <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                <div>
                  <div
                    className="font-bold text-[#0A2345] leading-tight"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {t.name}
                  </div>
                  <div className="text-xs text-[#5c6b85]">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
