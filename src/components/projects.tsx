"use client";

import { useState } from "react";
import { ArrowRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
};

const categories = [
  "All",
  "Residential Painting",
  "Commercial Buildings",
  "Scaffolding Installation",
  "Concrete Works",
  "Modern Construction",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Residential Painting",
    category: "Residential Painting",
    image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?auto=format&fit=crop&w=1200&q=80",
    description: "Complete interior and exterior painting of a modern Ghanaian residence with premium weather-resistant finishes.",
  },
  {
    id: 2,
    title: "Commercial Office Building",
    category: "Commercial Buildings",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description: "Full-scale painting and finishing work for a multi-story commercial office complex in Accra.",
  },
  {
    id: 3,
    title: "High-Rise Scaffolding Setup",
    category: "Scaffolding Installation",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?auto=format&fit=crop&w=1200&q=80",
    description: "Safe and sturdy scaffolding installation for a high-rise building project, fully compliant with safety standards.",
  },
  {
    id: 4,
    title: "Reinforced Concrete Columns",
    category: "Concrete Works",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    description: "Precision column box installation and concrete pouring for structural reinforcement on a commercial build.",
  },
  {
    id: 5,
    title: "Modern Construction Project",
    category: "Modern Construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    description: "End-to-end construction support for a modern multi-use development project in Prampram.",
  },
  {
    id: 6,
    title: "Industrial Facility Painting",
    category: "Commercial Buildings",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80",
    description: "Industrial-grade protective painting for a manufacturing facility, ensuring durability and corrosion resistance.",
  },
  {
    id: 7,
    title: "Luxury Home Exterior",
    category: "Residential Painting",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description: "Premium exterior painting and finishing for a luxury residential property with custom color palette.",
  },
  {
    id: 8,
    title: "Bridge Scaffolding System",
    category: "Scaffolding Installation",
    image: "https://images.unsplash.com/photo-1517089596392-fb9a9033e05b?auto=format&fit=crop&w=1200&q=80",
    description: "Heavy-duty scaffolding system installed for bridge maintenance and concrete restoration work.",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.category === filter);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const y = (el as HTMLElement).getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section id="projects" className="scroll-mt-nav py-20 lg:py-28 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-[#D89B00]/10 rounded-full px-4 py-1.5 mb-5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#D89B00]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#D89B00]">
              Featured Projects
            </span>
          </div>
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0A2345] leading-tight mb-5"
            style={{ fontFamily: "var(--font-montserrat)" }}
          >
            Our Recent <span className="text-[#D89B00]">Work</span>
          </h2>
          <p className="text-[#5c6b85] text-base lg:text-lg leading-relaxed">
            Browse our portfolio of completed projects — a testament to our commitment to quality,
            craftsmanship, and customer satisfaction across Ghana.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === cat
                  ? "bg-[#0A2345] text-white shadow-premium"
                  : "bg-[#F5F5F5] text-[#0A2345] hover:bg-[#0A2345]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelected(project)}
              className="group relative overflow-hidden rounded-2xl shadow-premium hover:shadow-premium-lg transition-all duration-500 cursor-pointer aspect-[4/3]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2345]/95 via-[#0A2345]/30 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Category badge */}
              <div className="absolute top-4 left-4 bg-[#D89B00] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                {project.category}
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform transition-transform duration-500">
                <h3
                  className="text-lg font-bold mb-1 leading-tight"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm line-clamp-2 mb-2">
                  {project.description}
                </p>
                <span className="inline-flex items-center gap-1.5 text-[#D89B00] text-sm font-semibold">
                  View Project <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button
            asChild
            size="lg"
            className="bg-[#0A2345] hover:bg-[#14315a] text-white rounded-full px-8 shadow-premium"
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollTo("#contact");
              }}
            >
              Start Your Project With Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      {/* Project detail modal */}
      <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-white border-0 rounded-2xl">
          {selected && (
            <>
              <div className="relative aspect-[16/10]">
                <img
                  src={selected.image}
                  alt={selected.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white/90 hover:bg-white flex items-center justify-center shadow-md transition-colors"
                  aria-label="Close"
                >
                  <X className="h-5 w-5 text-[#0A2345]" />
                </button>
                <div className="absolute top-4 left-4 bg-[#D89B00] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {selected.category}
                </div>
              </div>
              <div className="p-6">
                <DialogTitle
                  className="text-2xl font-bold text-[#0A2345] mb-3"
                  style={{ fontFamily: "var(--font-montserrat)" }}
                >
                  {selected.title}
                </DialogTitle>
                <p className="text-[#5c6b85] leading-relaxed mb-5">{selected.description}</p>
                <Button
                  asChild
                  className="bg-[#D89B00] hover:bg-[#b07e00] text-white rounded-full px-6"
                >
                  <a href="#contact" onClick={(e) => { e.preventDefault(); setSelected(null); scrollTo("#contact"); }}>
                    Request Similar Project <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
