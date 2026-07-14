"use client";

import { Award, Clock, HeartHandshake, BadgeCheck, ThumbsUp, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Quality Workmanship",
    description:
      "Every project is executed with meticulous attention to detail and the highest standards of craftsmanship.",
  },
  {
    icon: BadgeCheck,
    title: "Reliability",
    description:
      "Count on us to deliver on our promises — we show up, communicate clearly, and stand behind our work.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description:
      "Our experienced, skilled, and courteous team brings expertise and discipline to every job site.",
  },
  {
    icon: ThumbsUp,
    title: "Affordable Pricing",
    description:
      "Transparent, competitive pricing with no hidden fees — exceptional value for premium quality.",
  },
  {
    icon: HeartHandshake,
    title: "Customer Satisfaction",
    description:
      "Your satisfaction is our priority. We work closely with you to exceed expectations, every time.",
  },
  {
    icon: Clock,
    title: "Timely Project Delivery",
    description:
      "We respect your schedule and deliver projects on time, every time, without compromising quality.",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="scroll-mt-nav py-20 lg:py-28 bg-[#0A2345] relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D89B00]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D89B00]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(45deg, transparent 49%, #D89B00 49%, #D89B00 51%, transparent 51%)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-[#D89B00]/30 rounded-full px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D89B00]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D89B00]">
              Why Choose Us
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            The <span className="text-[#D89B00]">Selorm A Ventures</span> Advantage
          </h2>
          <p className="text-white/70 text-base lg:text-lg leading-relaxed">
            We don&apos;t just build structures — we build trust. Here&apos;s what sets us apart as
            Ghana&apos;s preferred construction and painting partner.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[#D89B00]/40 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#D89B00]/20 border border-[#D89B00]/30 flex-shrink-0 group-hover:bg-[#D89B00] group-hover:scale-110 transition-all duration-300">
                  <f.icon className="h-7 w-7 text-[#D89B00] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3
                    className="text-lg font-bold text-white mb-2 leading-tight"
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{f.description}</p>
                </div>
              </div>
              {/* Check badge */}
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-opacity">
                <BadgeCheck className="h-5 w-5 text-[#D89B00]" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div
              key={i}
              className="text-center bg-gradient-to-br from-white/10 to-transparent border border-white/10 rounded-2xl p-6 hover:border-[#D89B00]/40 transition-colors"
            >
              <div
                className="text-4xl lg:text-5xl font-bold text-[#D89B00] mb-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                {s.value}
              </div>
              <div className="text-white/70 text-sm uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
