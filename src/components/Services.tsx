"use client";

import { motion } from "framer-motion";
import GlowCard from "./GlowCard"; // Importamos la tarjeta mágica

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 relative z-10">
      <div className="container mx-auto max-w-6xl">
        
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
            Comprehensive solutions tailored to your needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Tarjeta 1: Web Dev (Ancha) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 h-full"
          >
            <GlowCard>
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform text-blue-400">
                  💻
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Web Development</h3>
                <p className="text-slate-400 mb-6 grow">
                  Full-stack solutions built with modern frameworks. We build fast, secure, and SEO-friendly websites using the latest tech stack.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-blue-300">React</span>
                  <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-blue-300">Next.js</span>
                  <span className="text-xs font-mono bg-slate-800 px-2 py-1 rounded text-blue-300">Node</span>
                </div>
            </GlowCard>
          </motion.div>

          {/* Tarjeta 2: Mobile Apps */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-full"
          >
             <GlowCard>
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform text-purple-400">
                  📱
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">Mobile Apps</h3>
                <p className="text-slate-400">
                  Native and cross-platform mobile experiences that users love. iOS & Android ready.
                </p>
             </GlowCard>
          </motion.div>

          {/* Tarjeta 3: UI/UX Design */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
             <GlowCard>
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform text-pink-400">
                  🎨
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">UI/UX Design</h3>
                <p className="text-slate-400">
                  Beautiful, intuitive interfaces designed with user psychology and conversion in mind.
                </p>
             </GlowCard>
          </motion.div>

          {/* Tarjeta 4: E-commerce (Ancha) */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-2 h-full"
          >
             <GlowCard>
                <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform text-cyan-400">
                  🛒
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">E-commerce</h3>
                <p className="text-slate-300">
                  Scalable online stores optimized for sales. Secure payments, inventory management, and seamless shopping experiences.
                </p>
             </GlowCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Services;