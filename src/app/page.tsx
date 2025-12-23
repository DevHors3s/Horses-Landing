import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact"; // <--- Importamos el nuevo componente

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1C]">
      <Navbar />
      <Hero />
      <TechTicker />
      <Services />
      <Process />
      <Testimonials />
      
      {/* Sección Final */}
      <Contact />
    </main>
  );
}