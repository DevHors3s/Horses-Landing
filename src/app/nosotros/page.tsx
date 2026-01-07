"use client";

import Contact from "../../components/Contact";
import { motion } from "framer-motion";

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
    <main className="min-h-screen bg-[#0A0F1C] overflow-hidden pt-32">
      
      {/* SECCIÓN NOSOTROS */}
      <section className="px-6 pb-20">
        <div className="container mx-auto max-w-4xl text-center mb-20">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="text-5xl md:text-7xl font-bold mb-8"
          >
            We are <span className="text-gradient">DevHorses</span>
          </motion.h1>
          <p className="text-xl text-slate-400">
            Born in the cloud, raised by code.
          </p>
        </div>

        {/* Grid Equipo */}
        <div className="container mx-auto max-w-6xl mb-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0B1121] p-8 rounded-2xl border border-slate-800"
              >
                  <div className={`w-16 h-16 rounded-full bg-linear-to-r ${member.gradient} mb-6 flex items-center justify-center text-xl font-bold`}>
                    {member.name.charAt(0)}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-mono mb-4">{member.role}</p>
                  <p className="text-slate-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECCIÓN CONTACTO (Unida aquí) */}
      <div className="border-t border-slate-800/50">
        <Contact />
      </div>

    </main>
  );
}