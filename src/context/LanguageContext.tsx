"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

type Translations = {
  // ... (Tus tipos anteriores se mantienen, agregamos estos nuevos)
  nav_home: string;
  nav_services: string;
  nav_projects: string;
  nav_about: string;

  hero_badge: string;
  hero_title_1: string;
  hero_title_gradient: string;
  hero_title_2: string;
  hero_title_gradient_2: string;
  hero_subtitle: string;
  hero_btn_primary: string;
  hero_btn_secondary: string;
  hero_stack_title: string;

  services_title: string;
  services_subtitle: string;
  services_web_title: string;
  services_web_desc: string;
  services_mobile_title: string;
  services_mobile_desc: string;
  services_ui_title: string;
  services_ui_desc: string;
  services_eco_title: string;
  services_eco_desc: string;

  projects_badge: string;
  projects_title: string;
  projects_subtitle: string;
  projects_btn_demo: string;
  projects_btn_code: string;
  // NUEVOS: Descripciones de proyectos
  project_1_desc: string;
  project_2_desc: string;
  project_3_desc: string;
  project_4_desc: string;

  about_badge: string;
  about_title_1: string;
  about_title_gradient: string;
  about_desc: string;
  about_stats_projects: string;
  about_stats_exp: string;
  about_stats_commitment: string;
  about_mission_comment: string;
  about_team_title: string;
  // NUEVOS: Equipo
  team_1_role: string;
  team_1_bio: string;
  team_2_role: string;
  team_2_bio: string;
  team_3_role: string;
  team_3_bio: string;

  cta_title: string;
  cta_desc: string;
  cta_btn: string;

  footer_desc: string;
  footer_explore: string;
  footer_legal: string;
  footer_rights: string;
  footer_coded: string;
};

const translations: Record<Language, Translations> = {
  es: {
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_projects: "Proyectos",
    nav_about: "Nosotros",

    hero_badge: "SISTEMA ONLINE V1.0",
    hero_title_1: "Construyendo el ",
    hero_title_gradient: "Futuro",
    hero_title_2: "de las Experiencias ",
    hero_title_gradient_2: "Digitales",
    hero_subtitle: "Ingeniería de software de precisión para startups y empresas. Especialistas en Next.js, UI Escalable y Experiencias Digitales.",
    hero_btn_primary: "Ver Trabajo Reciente",
    hero_btn_secondary: "Sobre el Equipo",
    hero_stack_title: "IMPULSANDO APPS NEXT-GEN CON",

    services_title: "Nuestros Servicios",
    services_subtitle: "Soluciones integrales diseñadas para escalar tu negocio digital.",
    services_web_title: "Desarrollo Web",
    services_web_desc: "Soluciones Full-stack rápidas, seguras y optimizadas para SEO utilizando tecnologías modernas.",
    services_mobile_title: "Apps Móviles",
    services_mobile_desc: "Experiencias nativas y multiplataforma para iOS y Android que los usuarios adoran.",
    services_ui_title: "Diseño UI/UX",
    services_ui_desc: "Interfaces intuitivas y hermosas diseñadas pensando en la conversión y la psicología del usuario.",
    services_eco_title: "E-commerce",
    services_eco_desc: "Tiendas online escalables con pagos seguros y gestión de inventario.",

    projects_badge: "PORTFOLIO V.1.0",
    projects_title: "Nuestros Proyectos",
    projects_subtitle: "Explora una selección de nuestro trabajo donde fusionamos ingeniería robusta con diseño de vanguardia.",
    projects_btn_demo: "Ver Demo",
    projects_btn_code: "Código",
    // NUEVOS PROYECTOS ES
    project_1_desc: "Plataforma de e-commerce headless con integración de pagos cripto y UI futurista de alto rendimiento.",
    project_2_desc: "Panel de control en tiempo real para visualización de datos masivos con gráficos D3.js y WebSockets.",
    project_3_desc: "Experiencia web inmersiva con animaciones 3D y transiciones fluidas utilizando Framer Motion.",
    project_4_desc: "Interfaz de chat impulsada por IA con streaming de respuestas y resaltado de sintaxis en tiempo real.",

    about_badge: "Sobre Nosotros",
    about_title_1: "Arquitectos de la ",
    about_title_gradient: "Realidad Digital",
    about_desc: "En DevHorses, no solo escribimos código; forjamos experiencias. Somos un colectivo de ingenieros y creativos unidos por una misión: transformar ideas abstractas en productos digitales de alto impacto.",
    about_stats_projects: "Proyectos",
    about_stats_exp: "Años Exp.",
    about_stats_commitment: "Compromiso",
    about_mission_comment: "// Nuestra misión principal",
    about_team_title: "El Escuadrón",
    // NUEVOS EQUIPO ES
    team_1_role: "FUNDADOR Y LEAD DEV",
    team_1_bio: "Arquitecto de soluciones escalables. Obsesionado con el Clean Code y el rendimiento.",
    team_2_role: "ESPECIALISTA UI/UX",
    team_2_bio: "Transforma conceptos complejos en interfaces intuitivas y visualmente impactantes.",
    team_3_role: "INGENIERO DE SISTEMAS",
    team_3_bio: "Experto en infraestructura en la nube y seguridad. Mantiene los sistemas robustos.",

    cta_title: "¿Listo para iniciar tu próximo gran proyecto?",
    cta_desc: "Ya sea una idea disruptiva o una mejora técnica, nuestro equipo está listo para desplegar.",
    cta_btn: "hola@devhorses.com",

    footer_desc: "Transformamos ideas en software de alto impacto. Especialistas en arquitecturas escalables.",
    footer_explore: "Explorar",
    footer_legal: "Legal",
    footer_rights: "Todos los derechos reservados.",
    footer_coded: "Codeado con",
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_about: "About Us",

    hero_badge: "SYSTEM ONLINE V1.0",
    hero_title_1: "Building the ",
    hero_title_gradient: "Future",
    hero_title_2: "of Digital ",
    hero_title_gradient_2: "Experiences",
    hero_subtitle: "Precision software engineering for startups and enterprises. Specialists in Next.js, Scalable UI, and Digital Experiences.",
    hero_btn_primary: "View Recent Work",
    hero_btn_secondary: "About the Team",
    hero_stack_title: "POWERING NEXT-GEN APPS WITH",

    services_title: "Our Services",
    services_subtitle: "Comprehensive solutions tailored to scale your digital business.",
    services_web_title: "Web Development",
    services_web_desc: "Fast, secure, and SEO-optimized Full-stack solutions built with modern technologies.",
    services_mobile_title: "Mobile Apps",
    services_mobile_desc: "Native and cross-platform experiences for iOS and Android that users love.",
    services_ui_title: "UI/UX Design",
    services_ui_desc: "Beautiful, intuitive interfaces designed with user psychology and conversion in mind.",
    services_eco_title: "E-commerce",
    services_eco_desc: "Scalable online stores with secure payments and inventory management.",

    projects_badge: "PORTFOLIO V.1.0",
    projects_title: "Our Projects",
    projects_subtitle: "Explore a selection of our work merging robust engineering with cutting-edge design.",
    projects_btn_demo: "View Demo",
    projects_btn_code: "Code",
    // NUEVOS PROYECTOS EN
    project_1_desc: "Headless e-commerce platform with crypto payment integration and high-performance futuristic UI.",
    project_2_desc: "Real-time dashboard for massive data visualization with D3.js charts and WebSockets.",
    project_3_desc: "Immersive web experience with 3D animations and seamless transitions using Framer Motion.",
    project_4_desc: "AI-powered chat interface with response streaming and real-time syntax highlighting.",

    about_badge: "About Us",
    about_title_1: "Architects of ",
    about_title_gradient: "Digital Reality",
    about_desc: "At DevHorses, we don't just write code; we forge experiences. We are a collective of engineers and creatives united by a mission: to transform abstract ideas into high-impact digital products.",
    about_stats_projects: "Projects",
    about_stats_exp: "Years Exp.",
    about_stats_commitment: "Commitment",
    about_mission_comment: "// Our core mission",
    about_team_title: "The Squad",
    // NUEVOS EQUIPO EN
    team_1_role: "FOUNDER & LEAD DEV",
    team_1_bio: "Scalable solutions architect. Obsessed with Clean Code and performance.",
    team_2_role: "UI/UX SPECIALIST",
    team_2_bio: "Transforms complex concepts into intuitive and visually striking interfaces.",
    team_3_role: "SYSTEM ENGINEER",
    team_3_bio: "Cloud infrastructure and security expert. Keeps systems robust and secure.",

    cta_title: "Ready to start your next big project?",
    cta_desc: "Whether it's a disruptive idea or a technical upgrade, our team is ready to deploy.",
    cta_btn: "hello@devhorses.com",

    footer_desc: "Transforming ideas into high-impact software. Specialists in scalable architectures.",
    footer_explore: "Explore",
    footer_legal: "Legal",
    footer_rights: "All rights reserved.",
    footer_coded: "Coded with",
  },
};

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: keyof Translations) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("es");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  const t = (key: keyof Translations) => {
    return translations[language][key];
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  return context;
};