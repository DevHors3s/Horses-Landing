"use client";
// CORRECCIÓN: Usamos ../ para salir de 'app' e ir a 'components'
import Hero from "../components/Hero";
import TechTicker from "../components/TechTicker";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0F1C]">
      {/* Solo Hero y Ticker */}
      <Hero />
      <TechTicker />
    </main>
  );
}