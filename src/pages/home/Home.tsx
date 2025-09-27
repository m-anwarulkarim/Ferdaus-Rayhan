import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import CursorStars from "@/components/CursorLight/CursorLight";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Portfolio from "@/components/Portfolio/Portfolio";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";

// src/pages/Home.tsx
export default function Home() {
  return (
    <>
      <CursorStars />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
