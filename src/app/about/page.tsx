"use client";

import Navbar from "../../components/Navbar";
import Contact from "../../components/Contact";
import { motion } from "framer-motion";

// Datos ficticios del equipo (luego pones tus fotos reales)
const team = [
  {
    name: "Alex Dev",
    role: "Founder & Lead Architect",
    bio: "Visionary coder with 10+ years transforming coffee into scalable architecture.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Sarah Design",
    role: "Head of UX/UI",
    bio: "Obsessed with pixel perfection and user journeys that feel like magic.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    name: "Mike Systems",
    role: "Backend Specialist",
    bio: "Ensuring servers stay cool while the code runs hot. Security first.",
    gradient: "from-amber-500 to-orange-500"
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#0A0F1C] overflow-hidden">
      {/* Reutilizamos el Navbar para mantener la navegación */}
      <Navbar />

      {/* --- SECCIÓN HERO ABOUT --- */}
      <section className="pt-40 pb-20 px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl font-bold mb-8"
          >
            We are the <span className="text-gradient">DevHorses</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-400 leading-relaxed"
          >
            Born in the cloud, raised by code. We are a collective of dreamers, 
            architects, and creators united by a single mission: to build the digital 
            infrastructure of tomorrow.
          </motion.p>
        </div>
        
        {/* Fondo decorativo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-125 bg-purple-900/10 blur-[100px] -z-10"></div>
      </section>

      {/* --- SECCIÓN EQUIPO --- */}
      <section className="py-20 px-6 bg-slate-900/30 border-y border-slate-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-12 text-center">Meet the Squad</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-1 rounded-2xl bg-linear-to-b from-slate-800 to-slate-900 hover:from-blue-500 hover:to-purple-600 transition-all duration-500"
              >
                {/* Contenido de la tarjeta */}
                <div className="bg-[#0B1121] p-8 rounded-xl h-full relative z-10">
                  {/* Avatar Placeholder con Gradiente */}
                  <div className={`w-20 h-20 rounded-full bg-linear-to-r ${member.gradient} mb-6 flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform`}>
                    {member.name.charAt(0)}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-mono mb-4">{member.role}</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECCIÓN VALORES --- */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
           <h2 className="text-3xl font-bold mb-12">Our Core DNA</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="p-6 border border-slate-800 rounded-xl hover:bg-slate-800/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">⚡ Speed & Precision</h3>
                <p className="text-slate-400">We dont just write code; we engineer performance. Fast load times are non-negotiable.</p>
              </div>
              <div className="p-6 border border-slate-800 rounded-xl hover:bg-slate-800/50 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">🛡️ Security First</h3>
                <p className="text-slate-400">Building robust systems that stand the test of time and threats.</p>
              </div>
           </div>
        </div>
      </section>

      {/* Reutilizamos el Contacto al final para no perder leads */}
      <Contact />
    </main>
  );
}