"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, Hammer } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Why Choose Us", href: "#why-choose-us" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      // active section detection
      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom >= 120;
      });
      if (current) setActive(`#${current}`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-premium py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#home");
          }}
          className="flex items-center gap-2.5 group"
          aria-label="Selorm A Ventures home"
        >
          <div
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300",
              scrolled
                ? "bg-[#0A2345] text-[#D89B00]"
                : "bg-[#0A2345]/90 text-[#D89B00] backdrop-blur"
            )}
          >
            <Hammer className="h-6 w-6" strokeWidth={2.2} />
          </div>
          <div className="flex flex-col leading-tight">
            <span
              className={cn(
                "font-bold text-base sm:text-lg tracking-tight transition-colors",
                scrolled ? "text-[#0A2345]" : "text-white"
              )}
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Selorm A
            </span>
            <span
              className={cn(
                "text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase transition-colors",
                scrolled ? "text-[#D89B00]" : "text-[#D89B00]"
              )}
            >
              Ventures
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNav(link.href);
                }}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-md transition-all duration-200",
                  scrolled ? "text-[#0A2345] hover:bg-[#F5F5F5]" : "text-white/90 hover:text-white",
                  active === link.href && (scrolled ? "text-[#D89B00]" : "text-[#D89B00]")
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-[#D89B00] transition-all duration-300 rounded-full",
                    active === link.href ? "w-6 opacity-100" : "w-0 opacity-0"
                  )}
                />
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:0244264614"
            className={cn(
              "flex items-center gap-2 text-sm font-semibold transition-colors",
              scrolled ? "text-[#0A2345] hover:text-[#D89B00]" : "text-white hover:text-[#D89B00]"
            )}
          >
            <Phone className="h-4 w-4" />
            0244 264 614
          </a>
          <Button
            asChild
            className="bg-[#D89B00] hover:bg-[#b07e00] text-white rounded-full px-6 shadow-gold transition-all hover:scale-105"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("#contact");
              }}
            >
              Get a Quote
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((p) => !p)}
          className={cn(
            "lg:hidden p-2 rounded-md transition-colors",
            scrolled ? "text-[#0A2345]" : "text-white"
          )}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 ease-out",
          open ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="bg-white border-t border-[#e6e8ec] shadow-premium">
          <ul className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNav(link.href);
                  }}
                  className={cn(
                    "block px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                    active === link.href
                      ? "bg-[#0A2345] text-[#D89B00]"
                      : "text-[#0A2345] hover:bg-[#F5F5F5]"
                  )}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2 flex flex-col gap-2 px-2">
              <a
                href="tel:0244264614"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#0A2345] text-white text-sm font-semibold"
              >
                <Phone className="h-4 w-4" /> Call: 0244 264 614
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNav("#contact");
                }}
                className="flex items-center justify-center py-3 rounded-full bg-[#D89B00] hover:bg-[#b07e00] text-white text-sm font-semibold"
              >
                Get a Quote
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
