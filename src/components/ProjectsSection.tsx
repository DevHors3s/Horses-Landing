"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, ArrowRight, Layers } from "lucide-react"; // <-- ExternalLink eliminado

// 1. DEFINIMOS EL TIPO DE DATOS (Para que TypeScript no se queje del 'any')
interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  linear: string;
  link: string;
  github: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Neon Commerce",
    description: "Plataforma de e-commerce headless con integración de pagos cripto y UI futurista de alto rendimiento.",
    tags: ["Next.js", "Stripe", "Tailwind"],
    linear: "from-cyan-500 to-blue-500",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "CyberAnalytics Dashboard",
    description: "Panel de control en tiempo real para visualización de datos masivos con gráficos D3.js y WebSockets.",
    tags: ["React", "D3.js", "Node.js"],
    linear: "from-purple-500 to-pink-500",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Quantum Portfolio",
    description: "Experiencia web inmersiva con animaciones 3D y transiciones fluidas utilizando Framer Motion.",
    tags: ["Three.js", "Framer", "TypeScript"],
    linear: "from-emerald-400 to-cyan-500",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "AI Chat Interface",
    description: "Interfaz de chat impulsada por IA con streaming de respuestas y resaltado de sintaxis en tiempo real.",
    tags: ["OpenAI", "Vercel SDK", "Redis"],
    linear: "from-orange-400 to-red-500",
    link: "#",
    github: "#",
  },
];

export default function ProjectsSection() {
  return (
    <section className="relative min-h-screen py-20 px-4 md:px-8 bg-[#0A0F1C] overflow-hidden">
      
      {/* Luz de fondo ambiental */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        
        {/* ENCABEZADO */}
        <div className="mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="p-2 bg-cyan-950/30 border border-cyan-500/30 rounded-lg">
              <Layers className="text-cyan-400" size={20} />
            </div>
            <span className="text-cyan-400 font-mono text-sm tracking-wider">PORTFOLIO V.1.0</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Nuestros <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-purple-500">Proyectos</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl text-lg"
          >
            Explora una selección de nuestro trabajo donde fusionamos ingeniería robusta con diseño de vanguardia.
          </motion.p>
        </div>

        {/* GRILLA DE TARJETAS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}

// 2. CORREGIMOS EL TIPO AQUÍ ABAJO TAMBIÉN
function ProjectCard({ project, index }: { project: Project, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative"
    >
      {/* Efecto Glow trasero al Hover */}
      <div className={`absolute -inset-0.5 bg-linear-to-r ${project.linear} rounded-2xl blur opacity-0 group-hover:opacity-40 transition duration-500 group-hover:duration-200`} />

      <div className="relative h-full bg-[#0d121f] border border-white/10 rounded-2xl overflow-hidden flex flex-col md:flex-row hover:border-white/20 transition-colors">
        
        {/* "Imagen" (Placeholder visual con lineare) */}
        <div className={`w-full md:w-2/5 h-48 md:h-auto bg-linear-to-br ${project.linear} opacity-20 group-hover:opacity-30 transition-opacity flex items-center justify-center`}>
          <Layers size={48} className="text-white/50" />
        </div>

        {/* Contenido */}
        <div className="p-6 md:p-8 flex flex-col grow">
          <div className="mb-4">
             <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
               {project.title}
             </h3>
             <div className="flex flex-wrap gap-2">
               {project.tags.map((tag: string) => (
                 <span key={tag} className="px-2 py-1 text-[10px] uppercase font-bold tracking-wider text-gray-400 bg-white/5 rounded border border-white/5">
                   {tag}
                 </span>
               ))}
             </div>
          </div>

          <p className="text-gray-400 text-sm mb-6 leading-relaxed grow">
            {project.description}
          </p>

          <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
            <Link href={project.link} className="flex items-center gap-2 text-white font-medium hover:text-cyan-400 transition-colors text-sm">
              Ver Demo <ArrowRight size={16} />
            </Link>
            <Link href={project.github} className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-sm ml-auto">
              <Github size={18} /> Código
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
}