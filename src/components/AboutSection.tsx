"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Terminal, Cpu, Code2, Globe, Mail, ArrowRight } from "lucide-react";

// DATOS DEL EQUIPO
const team = [
  {
    name: "Mathias Vasquez",
    role: "Founder & Lead Dev",
    bio: "Arquitecto de soluciones escalables. Obsesionado con el Clean Code y el rendimiento.",
    icon: <Terminal size={32} />,
    color: "text-cyan-400",
    border: "group-hover:border-cyan-500/50"
  },
  {
    name: "Sofia Design",
    role: "UI/UX Specialist",
    bio: "Transforma conceptos complejos en interfaces intuitivas y visualmente impactantes.",
    icon: <Globe size={32} />,
    color: "text-purple-400",
    border: "group-hover:border-purple-500/50"
  },
  {
    name: "Alex Backend",
    role: "System Engineer",
    bio: "Experto en infraestructura en la nube y seguridad. Mantiene los sistemas robustos.",
    icon: <Cpu size={32} />,
    color: "text-emerald-400",
    border: "group-hover:border-emerald-500/50"
  }
];

export default function AboutSection() {
  return (
    <section className="relative min-h-screen py-20 px-4 bg-[#0A0F1C] overflow-hidden">
      
      {/* Luces decorativas de fondo */}
      <div className="absolute top-20 right-0 w-125 h-125 bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 w-100 h-100 bg-cyan-600/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        
        {/* PARTE 1: INTRO / MISIÓN */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div 
             initial={{ opacity: 0, x: -50 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-900/20 border border-purple-500/20 text-purple-400 text-xs font-mono mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Sobre Nosotros
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Arquitectos de la <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-cyan-400">
                Realidad Digital
              </span>
            </h1>
            
            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              En <strong className="text-white">DevHorses</strong>, no solo escribimos código; forjamos experiencias. Somos un colectivo de ingenieros y creativos unidos por una misión: transformar ideas abstractas en productos digitales de alto impacto.
            </p>

            <div className="flex gap-6">
              <Stats number="10+" label="Proyectos" />
              <Stats number="3+" label="Años Exp." />
              <Stats number="100%" label="Compromiso" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Elemento visual abstracto (Caja de código CORREGIDA) */}
            <div className="rounded-2xl bg-[#0d121f] border border-white/10 p-6 relative z-10 shadow-2xl">
               <div className="flex gap-2 mb-4">
                 <div className="w-3 h-3 rounded-full bg-red-500/50"/>
                 <div className="w-3 h-3 rounded-full bg-yellow-500/50"/>
                 <div className="w-3 h-3 rounded-full bg-green-500/50"/>
               </div>
               <div className="space-y-3 font-mono text-sm">
                 <div className="text-gray-500">{"// Nuestra misión principal"}</div>
                 <div className="text-purple-400">const <span className="text-white">mission</span> = <span className="text-yellow-300">{"{"}</span></div>
                 <div className="pl-4 text-cyan-300">focus: <span className="text-green-300">&quot;Innovation&quot;</span>,</div>
                 <div className="pl-4 text-cyan-300">quality: <span className="text-green-300">&quot;Premium&quot;</span>,</div>
                 <div className="pl-4 text-cyan-300">limit: <span className="text-red-400">null</span></div>
                 <div className="text-yellow-300">{"}"};</div>
               </div>
            </div>
            {/* Decoración detrás */}
            <div className="absolute -top-4 -right-4 w-full h-full border border-white/5 rounded-2xl -z-10 bg-white/5" />
          </motion.div>
        </div>

        {/* PARTE 2: EQUIPO */}
        <div className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
             <h2 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
               <Code2 className="text-cyan-400" /> El Escuadrón
             </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`group p-6 rounded-2xl bg-[#0d121f] border border-white/10 hover:bg-white/5 transition-all duration-300 ${member.border}`}
              >
                <div className={`mb-6 p-4 rounded-xl bg-white/5 w-fit ${member.color}`}>
                  {member.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${member.color}`}>{member.role}</p>
                <p className="text-gray-400 text-sm mb-6">
                  {member.bio}
                </p>

                <div className="flex gap-3 pt-4 border-t border-white/5">
                  <SocialBtn icon={<Github size={16}/>} />
                  <SocialBtn icon={<Linkedin size={16}/>} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* PARTE 3: CONTACTA CON NOSOTROS (CTA) */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 md:p-16 rounded-3xl overflow-hidden text-center border border-white/10"
        >
            {/* Fondo con lineare oscuro */}
            <div className="absolute inset-0 bg-linear-to-br from-cyan-900/20 via-[#0d121f] to-purple-900/20 backdrop-blur-xl z-0" />
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 border border-white/10">
                    <Mail className="text-white" size={32} />
                </div>

                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    ¿Listo para iniciar tu próximo gran proyecto?
                </h3>
                <p className="text-gray-300 mb-8 max-w-xl text-lg">
                    Ya sea una idea disruptiva o una mejora técnica, nuestro equipo está listo para desplegar. Hablemos sobre cómo podemos llevar tus ideas a la realidad digital.
                </p>
                
                <a 
                    href="mailto:hola@devhorses.com" 
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-300 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(103,232,249,0.5)] group"
                >
                    <Mail size={20} />
                    hola@devhorses.com
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
            </div>
        </motion.div>

      </div>
    </section>
  );
}

function Stats({ number, label }: { number: string, label: string }) {
  return (
    <div>
      <div className="text-3xl font-bold text-white">{number}</div>
      <div className="text-gray-500 text-sm uppercase tracking-wider">{label}</div>
    </div>
  )
}

function SocialBtn({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
      {icon}
    </button>
  )
}