"use client";

import { motion, Variants } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
      
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
        className="max-w-6xl mx-auto z-10"
      >
        {/* Título Gigante */}
        <motion.h1
          variants={fadeUpVariant}
          className="text-6xl md:text-8xl lg:text-9xl font-extrabold leading-tight tracking-tighter"
        >
          {t("hero_title_1")} <br className="hidden md:block" />
          <span className="text-gradient">{t("hero_title_gradient")}</span>
          <br />
          {t("hero_title_2")} 
          <span className="text-gradient">{t("hero_title_gradient_2")}</span>
        </motion.h1>

      </motion.div>

      {/* Glow de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-blue-600/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
    </section>
  );
};

export default Hero;