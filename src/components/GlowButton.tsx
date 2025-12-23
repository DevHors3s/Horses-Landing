"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlowButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

const GlowButton = ({ children, onClick, className = "" }: GlowButtonProps) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative group ${className}`}
    >
      {/* CAPA 1: El Brillo (Glow) - Inicialmente invisible (opacity-0) */}
      <div className="absolute inset-0 bg-blue-600 rounded-lg blur-lg opacity-0 transition-all duration-300 group-hover:opacity-60 group-hover:-inset-1"></div>
      
      {/* CAPA 2: El cuerpo del botón */}
      <div className="relative px-6 py-3 bg-[#0A0F1C] rounded-lg border border-slate-700 text-slate-300 font-medium z-10 transition-colors group-hover:text-white group-hover:border-blue-500">
        {children}
      </div>
    </motion.button>
  );
};

export default GlowButton;