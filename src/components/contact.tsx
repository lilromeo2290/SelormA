"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Globe, MessageCircle, Send, User, Clock, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "0244 264 614",
    href: "tel:0244264614",
    color: "bg-[#0A2345]",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "0500 297 816",
    href: "https://wa.me/233500297816",
    color: "bg-[#25D366]",
  },
  {
    icon: Mail,
    label: "Email",
    value: "selormagble@gmail.com",
    href: "mailto:selormagble@gmail.com",
    color: "bg-[#D89B00]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Classic Hotel Junction, Prampram, Ghana",
    href: "https://www.google.com/maps/search/?api=1&query=Classic+Hotel+Junction+Prampram+Ghana",
    color: "bg-[#0A2345]",
  },
];

const serviceOptions = [
  "Professional Painting",
  "Scaffolding Services",
  "Column Box Installation",
  "Concrete Support",
  "Construction Support Services",
  "Wheel Barrow Supply",
  "Other / Multiple Services",
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed");
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. Our team will get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
    } catch {
      toast({
        variant: "destructive",
        title: "Something went wrong",
        description: "Please try again or call us directly at 0244 264 614.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="scroll-mt-nav py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-[#D89B00]/10 rounded-full px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D89B00]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D89B00]">
              Contact Us
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2345] leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Get In <span className="text-[#D89B00]">Touch</span>
          </h2>
          <p className="text-[#5c6b85] text-base lg:text-lg leading-relaxed">
            Have a project in mind? We&apos;d love to hear from you. Reach out through any of the
            channels below or fill out our contact form for a free quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Left: Contact info */}
          <div>
            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              {contactInfo.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group bg-white border border-[#e6e8ec] rounded-2xl p-5 hover:shadow-premium hover:border-[#D89B00]/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <div
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${c.color} text-white mb-3 group-hover:scale-110 transition-transform`}
                  >
                    <c.icon className="h-6 w-6" />
                  </div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5c6b85] mb-1">
                    {c.label}
                  </div>
                  <div className="text-sm font-bold text-[#0A2345] leading-snug break-words">
                    {c.value}
                  </div>
                </a>
              ))}
            </div>

            {/* Website + hours */}
            <div className="bg-[#F5F5F5] rounded-2xl p-6 mb-6">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0A2345] text-[#D89B00] flex-shrink-0">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5c6b85] mb-1">
                    Website
                  </div>
                  <a
                    href="https://www.selormaventures.com"
                    className="text-sm font-bold text-[#0A2345] hover:text-[#D89B00] transition-colors"
                  >
                    www.selormaventures.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D89B00] text-white flex-shrink-0">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#5c6b85] mb-1">
                    Working Hours
                  </div>
                  <div className="text-sm font-bold text-[#0A2345]">
                    Mon – Sat: 7:00 AM – 6:00 PM
                  </div>
                  <div className="text-xs text-[#5c6b85]">Sunday: By appointment</div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden shadow-premium border border-[#e6e8ec]">
              <iframe
                title="Selorm A Ventures location - Classic Hotel Junction, Prampram, Ghana"
                src="https://www.google.com/maps?q=Prampram+Ghana&output=embed"
                width="100%"
                height="280"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </div>

          {/* Right: Contact form */}
          <div className="bg-[#0A2345] rounded-3xl p-7 sm:p-10 shadow-premium-lg relative overflow-hidden">
            {/* Decorative */}
            <div className="absolute top-0 right-0 h-48 w-48 bg-[#D89B00]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="relative">
              <h3
                className="text-2xl font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                Request a Free Quote
              </h3>
              <p className="text-white/70 text-sm mb-6">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-white text-sm font-medium">
                      Full Name <span className="text-[#D89B00]">*</span>
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        required
                        placeholder="Your name"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 pl-10 focus-visible:ring-[#D89B00] focus-visible:border-[#D89B00]"
                      />
                    </div>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-white text-sm font-medium">
                      Phone <span className="text-[#D89B00]">*</span>
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                      <Input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        required
                        placeholder="0244 000 000"
                        className="bg-white/10 border-white/20 text-white placeholder:text-white/40 pl-10 focus-visible:ring-[#D89B00] focus-visible:border-[#D89B00]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-white text-sm font-medium">
                    Email Address <span className="text-[#D89B00]">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/40" />
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="you@example.com"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 pl-10 focus-visible:ring-[#D89B00] focus-visible:border-[#D89B00]"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="service" className="text-white text-sm font-medium">
                    Service Needed <span className="text-[#D89B00]">*</span>
                  </Label>
                  <Select
                    value={form.service}
                    onValueChange={(v) => setForm({ ...form, service: v })}
                    required
                  >
                    <SelectTrigger
                      id="service"
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-[#D89B00] focus-visible:border-[#D89B00] h-11"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {serviceOptions.map((s) => (
                        <SelectItem key={s} value={s}>
                          {s}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-white text-sm font-medium">
                    Message <span className="text-[#D89B00]">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                    placeholder="Tell us about your project..."
                    rows={4}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus-visible:ring-[#D89B00] focus-visible:border-[#D89B00] resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full bg-[#D89B00] hover:bg-[#b07e00] text-white rounded-full py-6 text-base font-semibold shadow-gold transition-all hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Submit Request
                    </>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
