"use client";

import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext"; // 👈 Importar hook
import GlowCard from "./GlowCard";
import { Laptop, Smartphone, Palette, ShoppingCart } from "lucide-react";

const Services = () => {
  const { t } = useLanguage(); // 👈 Inicializar hook

  return (
    <section id="services" className="pt-0 pb-32 px-6 relative z-10 bg-[#0A0F1C]">
      <div className="container mx-auto max-w-6xl">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
             {/* Usamos el texto completo traducido */}
             {t("services_title")}
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            {t("services_subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Card 1: Web */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 h-full"
          >
            <GlowCard>
                <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform border border-cyan-500/20">
                  <Laptop size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t("services_web_title")}</h3>
                <p className="text-slate-400 mb-6 grow leading-relaxed">
                  {t("services_web_desc")}
                </p>
                <div className="flex gap-2 flex-wrap mt-auto">
                  <TechBadge text="React" color="cyan" />
                  <TechBadge text="Next.js" color="cyan" />
                  <TechBadge text="Node.js" color="cyan" />
                </div>
            </GlowCard>
          </motion.div>

          {/* Card 2: Mobile */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="h-full"
          >
             <GlowCard>
                <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform border border-purple-500/20">
                  <Smartphone size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t("services_mobile_title")}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t("services_mobile_desc")}
                </p>
             </GlowCard>
          </motion.div>

          {/* Card 3: UI/UX */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="h-full"
          >
             <GlowCard>
                <div className="w-12 h-12 bg-pink-500/10 rounded-xl flex items-center justify-center mb-6 text-pink-400 group-hover:scale-110 transition-transform border border-pink-500/20">
                  <Palette size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t("services_ui_title")}</h3>
                <p className="text-slate-400 leading-relaxed">
                  {t("services_ui_desc")}
                </p>
             </GlowCard>
          </motion.div>

          {/* Card 4: Ecommerce */}
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="md:col-span-2 h-full"
          >
             <GlowCard>
                <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform border border-emerald-500/20">
                  <ShoppingCart size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{t("services_eco_title")}</h3>
                <p className="text-slate-300 leading-relaxed">
                  {t("services_eco_desc")}
                </p>
             </GlowCard>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

function TechBadge({ text, color }: { text: string; color: string }) {
    return (
        <span className={`text-xs font-mono bg-${color}-950/30 border border-${color}-500/20 px-2 py-1 rounded text-${color}-300`}>
            {text}
        </span>
    );
}

export default Services;