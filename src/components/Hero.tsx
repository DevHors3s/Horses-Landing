"use client";

import { motion, Variants } from "framer-motion";
import CyberButton from "../components/CyberButton"; 
import GlowButton from "../components/GlowButton";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center pt-32 pb-20 px-6 overflow-hidden">
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-5xl mx-auto z-10"
      >
        {/* Etiqueta Superior */}
        <motion.div variants={fadeUpVariant} className="mb-6 flex justify-center">
           <span className="px-4 py-2 rounded-full bg-slate-800/50 text-cyan-400 text-sm font-medium border border-cyan-400/20 backdrop-blur-sm">
             ✨ INNOVATIVE DEVELOPMENT STUDIO
           </span>
        </motion.div>

        {/* Título Principal */}
        <motion.h1
          variants={fadeUpVariant}
          className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight mb-8"
        >
          Building the <span className="text-gradient">Future</span>
          <br />
          of Digital <span className="text-gradient">Experiences</span>
        </motion.h1>

        {/* Descripción (Con corrección de comillas) */}
        <motion.p
          variants={fadeUpVariant}
          className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto mb-12"
        >
          We craft cutting-edge software solutions that transform ideas into reality.
          From concept to deployment, we&apos;re your partner in digital innovation.
        </motion.p>

        {/* Grupo de Botones */}
        <motion.div variants={fadeUpVariant} className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
          
          {/* 1. Botón Principal: Efecto Intenso (Cyber) */}
          <CyberButton>
            Start Project
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </CyberButton>

          {/* 2. Botón Secundario: Efecto Brillo Suave (Glow) */}
          <GlowButton>
            View Our Work
          </GlowButton>

        </motion.div>
      </motion.div>

      {/* Luz de fondo ambiental */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;