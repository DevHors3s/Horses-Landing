"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "../context/LanguageContext";
import { Globe } from "lucide-react"; 

export default function Navbar() {
  const pathname = usePathname();
  const { language, toggleLanguage, t } = useLanguage();
  const links = [
    { name: t("nav_home"), href: "/" },
    { name: t("nav_services"), href: "/servicios" },
    { name: t("nav_projects"), href: "/proyectos" },
    { name: t("nav_about"), href: "/nosotros" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-6 px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center justify-between gap-8 bg-[#0A0F1C]/80 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full shadow-2xl min-w-fit">
        
        {/* LOGO */}
        <Link href="/" className="text-xl font-bold font-mono text-white shrink-0">
          Dev<span className="text-cyan-400">Horses</span>.
        </Link>

        {/* LINKS */}
        <ul className="hidden md:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.href}>
                <Link href={link.href} className="relative px-4 py-2 text-sm font-medium group block">
                  <span className={`transition-colors duration-300 ${isActive ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                    {link.name}
                  </span>
                  {isActive && (
                    <motion.div 
                      layoutId="activeTab"
                      className="absolute inset-0 bg-white/10 rounded-full border border-white/10 -z-10"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* BOTÓN IDIOMA */}
        <button 
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold text-gray-300 hover:text-white hover:bg-white/10 transition-all shrink-0"
        >
          <Globe size={14} className={language === 'en' ? "text-purple-400" : "text-cyan-400"} />
          {language === 'es' ? 'ES' : 'EN'}
        </button>

      </div>
    </nav>
  );
}