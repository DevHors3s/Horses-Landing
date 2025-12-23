"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CyberButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const CyberButton = ({ children, onClick, className = "" }: CyberButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative group ${className}`}
    >
      {/* CAPA 1: SUPER GLOW (El cambio principal está aquí) */}
      {/* Más opacidad base (60%) y colores más chillones (Cyan y Fucsia) */}
      <div className="absolute inset-0 bg-linear-to-r from-cyan-500 via-purple-500 to-fuchsia-500 rounded-xl blur-[15px] opacity-60 transition-all duration-300 group-hover:blur-[30px] group-hover:opacity-100 group-hover:-inset-2"></div>
      
      {/* CAPA 2: Borde giratorio más intenso */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-400 via-white to-fuchsia-400 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-spin-slow group-hover:animate-spin-fast mix-blend-screen"></div>

      {/* CAPA 3: Cuerpo del botón */}
      <div className="relative px-8 py-4 bg-[#0A0F1C] rounded-lg border border-white/10 text-white font-bold tracking-wider overflow-hidden flex items-center gap-2 z-10 group-hover:border-white/50 transition-colors shadow-2xl">
        
        {/* Efecto de luz "Scan" mucho más fuerte */}
        <div className="absolute top-0 -left-full w-2/3 h-full bg-linear-to-r from-transparent via-white/40 to-transparent skew-x-30 transition-all duration-500 group-hover:left-[200%]"></div>
        
        {/* El contenido */}
        <span className="relative z-20 flex items-center gap-2 drop-shadow-md">
           {children}
        </span>
      </div>
    </motion.button>
  );
};

export default CyberButton;