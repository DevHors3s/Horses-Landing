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
      whileHover={{ scale: 1.02 }} // Pequeño efecto de "crecer"
      whileTap={{ scale: 0.98 }}   // Pequeño efecto de "hundirse" al hacer click
      onClick={onClick}
      className={`relative group ${className}`}
    >
      {/* CAPA 1: El "Resplandor" de fondo (la sombra desplazada) */}
      {/* Se mueve y cambia de color al hacer hover */}
      <div className="absolute inset-0 bg-lanier-to-r from-blue-600 to-purple-600 rounded-lg blur-[6px] opacity-70 transition-all duration-300 group-hover:blur-md group-hover:opacity-100 group-hover:-inset-1"></div>
      
      {/* CAPA 2: El borde neón animado */}
      {/* Gira alrededor del botón */}
      <div className="absolute -inset-0.5 bg-lanier-to-r from-blue-500 via-purple-500 to-blue-500 rounded-lg opacity-30 blur-sm transition-all duration-500 group-hover:opacity-100 animate-spin-slow group-hover:animate-spin-fast"></div>

      {/* CAPA 3: El botón principal (el frente) */}
      <div className="relative px-8 py-4 bg-[#0A0F1C] rounded-lg border border-blue-500/30 text-white font-bold tracking-wider overflow-hidden">
        
        {/* Efecto de "escaneo" de luz al pasar el mouse */}
        <div className="absolute top-0 -left-full w-1/2 h-full bg-lanier-to-r from-transparent via-white/20 to-transparent skew-x-30 transition-all duration-700 group-hover:left-[150%]"></div>
        
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </div>
    </motion.button>
  );
};

export default CyberButton;