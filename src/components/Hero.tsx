"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import Link from "next/link";
import { ArrowRight, Sparkles, Code2 } from "lucide-react";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 40 }, // Más distancia inicial para una entrada más suave
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } // Curva "ease" más elegante
  },
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    // CAMBIO 1: 'min-h-[110vh]' para asegurar que sea alto y 'pt-40' para bajar todo el bloque
    // ANTES TENÍAS: pt-40 min-h-[105vh]
    // CAMBIA ESA LÍNEA POR ESTA:
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden pt-24 pb-12">
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        className="max-w-5xl mx-auto z-10 flex flex-col items-center text-center"
      >
        
        {/* BADGE DE ESTADO */}
        <motion.div 
          variants={fadeUpVariant}
          className="mb-8 inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-950/10 border border-cyan-500/20 text-cyan-400 text-sm font-mono tracking-wide backdrop-blur-md"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-50"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
          </span>
          <span>SYSTEM ONLINE V1.0</span>
        </motion.div>

        {/* TÍTULO PRINCIPAL */}
        {/* CAMBIO 2: Reduje ligeramente el tamaño máximo y aumenté el 'gap' visual con leading */}
        <motion.h1
          variants={fadeUpVariant}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.1] tracking-tight mb-8 text-white"
        >
          {t("hero_title_1")} <br className="hidden lg:block" />
          <span className="text-transparent bg-clip-text bg-linear-to-br from-cyan-300 via-cyan-500 to-purple-600">
            {t("hero_title_gradient")}
          </span>
          <br className="hidden md:block" />
          {" "}{t("hero_title_2")} 
          <span className="text-transparent bg-clip-text bg-linear-to-br from-purple-400 to-pink-500">
            {t("hero_title_gradient_2")}
          </span>
        </motion.h1>

        {/* SUBTÍTULO */}
        {/* CAMBIO 3: Más margen bottom (mb-12) para separar de los botones */}
        <motion.p 
            variants={fadeUpVariant}
            className="text-slate-400 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12"
        >
            Ingeniería de software de precisión para startups y empresas. 
            Especialistas en <span className="text-gray-200">Next.js</span>, <span className="text-gray-200">Scalable UI</span> y <span className="text-gray-200">Experiencias Digitales</span>.
        </motion.p>

        {/* BOTONES */}
        {/* CAMBIO 4: gap-6 para separar más los botones entre sí */}
        <motion.div 
          variants={fadeUpVariant}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto items-center justify-center mb-20"
        >
            <Link href="/proyectos" className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-cyan-50 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)] flex items-center justify-center gap-2">
                Ver Trabajo Reciente
                <ArrowRight size={18} />
            </Link>

            <Link href="/nosotros" className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 text-gray-300 font-medium hover:text-white hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <Sparkles size={18} className="text-purple-400"/>
                Sobre el Equipo
            </Link>
        </motion.div>

        {/* TECH STACK */}
        {/* CAMBIO 5: Integrado en el flujo con mucho margen superior, sin position absolute */}
        <motion.div 
            variants={fadeUpVariant}
            className="flex flex-col items-center gap-4"
        >
            <span className="text-xs font-mono text-gray-600 uppercase tracking-widest">Powering Next-Gen Apps With</span>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 px-8 py-4 rounded-2xl border border-white/5 bg-white/2">
                <TechItem text="Next.js" />
                <div className="w-1 h-1 rounded-full bg-gray-800 self-center hidden sm:block" />
                <TechItem text="TypeScript" />
                <div className="w-1 h-1 rounded-full bg-gray-800 self-center hidden sm:block" />
                <TechItem text="Tailwind" />
                <div className="w-1 h-1 rounded-full bg-gray-800 self-center hidden sm:block" />
                <TechItem text="Motion" />
            </div>
        </motion.div>

      </motion.div>

      {/* GLOW DE FONDO (Más sutil y grande) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-2000 bg-blue-900/10 rounded-full blur-[120px] -z-10 pointer-events-none mix-blend-screen"></div>
      <div className="absolute bottom-0 left-0 w-125 h-125 bg-purple-900/10 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
    </section>
  );
};

function TechItem({ text }: { text: string }) {
    return (
        <div className="flex items-center gap-2 group cursor-default">
            <Code2 size={14} className="text-gray-600 group-hover:text-cyan-400 transition-colors" />
            <span className="text-sm font-medium text-gray-500 group-hover:text-gray-300 transition-colors">
                {text}
            </span>
        </div>
    )
}

export default Hero;