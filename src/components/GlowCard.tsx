"use client";

import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
}

const GlowCard = ({ children, className = "" }: GlowCardProps) => {
  return (
    <div className={`relative group h-full ${className}`}>
      {/* EL EFECTO: Gradiente detrás que aparece al hacer hover */}
      <div className="absolute -inset-0.5 bg-linear-to-r from-cyan-500 via-purple-500 to-fuchsia-500 rounded-2xl blur opacity-20 group-hover:opacity-100 transition duration-500 group-hover:duration-200"></div>
      
      {/* EL CONTENIDO: Fondo oscuro encima */}
      <div className="relative h-full bg-[#0B1121] rounded-2xl border border-slate-800 p-8 hover:border-transparent transition-colors z-10 flex flex-col">
        {children}
      </div>
    </div>
  );
};

export default GlowCard;