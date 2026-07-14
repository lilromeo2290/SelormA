"use client";

import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Floating action buttons stack - bottom right (desktop) / adjusted (mobile) */}
      <div className="fixed bottom-5 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">
        {/* Back to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className={`flex h-11 w-11 items-center justify-center rounded-full bg-[#0A2345] text-white shadow-premium-lg hover:bg-[#14315a] transition-all duration-300 hover:scale-110 ${
            showTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <ArrowUp className="h-5 w-5" />
        </button>

        {/* WhatsApp */}
        <a
          href="https://wa.me/233500297816?text=Hello%20Selorm%20A%20Ventures,%20I%20would%20like%20to%20enquire%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with us on WhatsApp"
          className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-premium-lg hover:bg-[#1da851] transition-all duration-300 hover:scale-110"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
          <MessageCircle className="h-7 w-7 relative z-10" fill="white" />
          {/* Tooltip */}
          <span className="absolute right-full mr-3 whitespace-nowrap bg-[#0A2345] text-white text-xs font-medium px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            Chat on WhatsApp
          </span>
        </a>

        {/* Call - mobile only */}
        <a
          href="tel:0244264614"
          aria-label="Call us"
          className="sm:hidden flex h-14 w-14 items-center justify-center rounded-full bg-[#D89B00] text-white shadow-premium-lg hover:bg-[#b07e00] transition-all duration-300 hover:scale-110"
        >
          <Phone className="h-6 w-6" />
        </a>
      </div>
    </>
  );
}
