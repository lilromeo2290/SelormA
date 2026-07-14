import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import CTA from "@/components/cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import FloatingButtons from "@/components/floating-buttons";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <WhyChooseUs />
        <Projects />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
