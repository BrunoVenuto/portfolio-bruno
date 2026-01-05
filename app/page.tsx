import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <CTA />
      <WhatsAppFloat />
      <Footer />
    </>
  );
}
