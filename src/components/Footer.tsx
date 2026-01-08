"use client";

import Link from "next/link";
import { useLanguage } from "../context/LanguageContext"; // 👈 Hook
import { Github, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";

export default function Footer() {
  const { t } = useLanguage(); // 👈 Hook
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#05080f] border-t border-white/10 pt-16 pb-8 overflow-hidden">
      
      {/* Luz ambiental superior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-linear-to-r from-transparent via-cyan-500 to-transparent opacity-50 blur-sm" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* COLUMNA 1: MARCA */}
          <div className="md:col-span-2">
            <Link href="/" className="text-2xl font-bold font-mono text-white mb-4 block">
              Dev<span className="text-cyan-400">Horses</span>.
            </Link>
            <p className="text-gray-400 leading-relaxed max-w-sm mb-6">
              {t("footer_desc")}
            </p>
            <div className="flex gap-4">
              <SocialIcon href="https://github.com/Mathifa59" icon={<Github size={20} />} />
              <SocialIcon href="https://www.linkedin.com/in/mathias-vasquez/" icon={<Linkedin size={20} />} />
              <SocialIcon href="mailto:hola@devhorses.com" icon={<Mail size={20} />} />
            </div>
          </div>

          {/* COLUMNA 2: NAVEGACIÓN */}
          <div>
            <h3 className="text-white font-bold mb-6">{t("footer_explore")}</h3>
            <ul className="space-y-4">
              {/* Usamos las claves de navegación que ya teníamos */}
              <FooterLink href="/" text={t("nav_home")} />
              <FooterLink href="/servicios" text={t("nav_services")} />
              <FooterLink href="/proyectos" text={t("nav_projects")} />
              <FooterLink href="/nosotros" text={t("nav_about")} />
            </ul>
          </div>

          {/* COLUMNA 3: LEGAL */}
          <div>
            <h3 className="text-white font-bold mb-6">{t("footer_legal")}</h3>
            <ul className="space-y-4">
              <FooterLink href="#" text="Privacidad" />
              <FooterLink href="#" text="Términos" />
              <li className="text-gray-500 text-sm mt-6">
                Lima, Perú 🇵🇪 <br />
                Miraflores
              </li>
            </ul>
          </div>
        </div>

        {/* BARRA INFERIOR */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} DevHorses. {t("footer_rights")}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{t("footer_coded")}</span>
            <Heart size={14} className="text-red-500 fill-red-500/20" />
            <span>y mucho café.</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

function FooterLink({ href, text }: { href: string, text: string }) {
  return (
    <li>
      <Link href={href} className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm">
        <span>{text}</span>
        <ArrowUpRight size={14} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </Link>
    </li>
  )
}

function SocialIcon({ href, icon }: { href: string, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-500/50 transition-all"
    >
      {icon}
    </a>
  )
}