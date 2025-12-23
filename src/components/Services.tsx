"use client";

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
        {/* Título de Sección */}
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Our <span className="text-gradient">Services</span>
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Comprehensive solutions tailored to your needs, delivered with precision and passion.
          </p>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Tarjeta 1: Web Development (Grande - Ocupa 2 columnas) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-blue-500/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              💻
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Web Development</h3>
            <p className="text-slate-400 mb-6">
              Full-stack solutions built with modern frameworks and scalable architecture. We build fast, secure, and SEO-friendly websites.
            </p>
            <div className="flex gap-2">
              <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-blue-300">React</span>
              <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-blue-300">Next.js</span>
              <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-blue-300">Node</span>
            </div>
          </motion.div>

          {/* Tarjeta 2: Mobile Apps */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-purple-500/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              📱
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">Mobile Apps</h3>
            <p className="text-slate-400">
              Native and cross-platform mobile experiences that users love. iOS & Android ready.
            </p>
          </motion.div>

          {/* Tarjeta 3: UI/UX Design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl hover:border-pink-500/50 transition-colors group"
          >
            <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
              🎨
            </div>
            <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
            <p className="text-slate-400">
              Beautiful, intuitive interfaces designed with user psychology in mind.
            </p>
          </motion.div>

          {/* Tarjeta 4: Performance (Grande - Ocupa 2 columnas si quisieras, aquí lo dejo normal o ancho según prefieras) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-2 bg-linear-to-r from-slate-900 to-slate-800 border border-slate-700 p-8 rounded-3xl relative overflow-hidden group"
          >
             <div className="relative z-10">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                  ⚡
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Performance Optimization</h3>
                <p className="text-slate-300">
                  Lightning-fast applications optimized for speed and efficiency. We optimize Core Web Vitals to ensure max ranking.
                </p>
             </div>
             {/* Decoración de fondo */}
             <div className="absolute right-0 bottom-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl z-0"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;