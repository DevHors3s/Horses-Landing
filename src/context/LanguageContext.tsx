"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

type Translations = {
  // ... (TIPOS ANTERIORES SE MANTIENEN IGUAL)
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
  services_web_desc: string; // <--- ESTA ES LA QUE CAMBIAMOS
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
  
  team_1_role: string;
  team_1_bio: string;
  team_2_role: string;
  team_2_bio: string;
  team_3_role: string;
  team_3_bio: string;
  team_4_role: string;
  team_4_bio: string;

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
    // ... (SECCIONES PREVIAS SIN CAMBIOS)
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
    
    // --- CAMBIO AQUÍ: ÉNFASIS EN BACKEND SÓLIDO ---
    services_web_title: "Desarrollo Web",
    services_web_desc: "Construimos plataformas sobre una infraestructura backend sólida e inquebrantable. Combinamos la agilidad de frameworks modernos con la robustez de lógica de servidor compleja (Python, Spring Boot) para garantizar seguridad, escalabilidad y una base firme para tu negocio.",
    
    services_mobile_title: "Apps Móviles",
    services_mobile_desc: "Desarrollo de aplicaciones nativas y multiplataforma con rendimiento de primer nivel. Nos enfocamos en una experiencia de usuario fluida, animaciones suaves y una integración perfecta con el hardware del dispositivo.",
    services_ui_title: "Diseño UI/UX",
    services_ui_desc: "Diseño centrado en el usuario que convierte visitantes en clientes. Creamos prototipos interactivos de alta fidelidad y sistemas de diseño coherentes que fortalecen tu identidad de marca visual.",
    services_eco_title: "E-commerce",
    services_eco_desc: "Tiendas online robustas diseñadas para maximizar ventas. Integramos pasarelas de pago seguras globales, gestión de inventario automatizada y experiencias de checkout optimizadas para reducir el abandono.",

    // ... (RESTO DEL ARCHIVO SIN CAMBIOS)
    projects_badge: "PORTFOLIO V.1.0",
    projects_title: "Nuestros Proyectos",
    projects_subtitle: "Explora una selección de nuestro trabajo donde fusionamos ingeniería robusta con diseño de vanguardia.",
    projects_btn_demo: "Ver Demo",
    projects_btn_code: "Código",
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

    team_1_role: "FRONTEND & UI/UX LEAD",
    team_1_bio: "El arquitecto visual. Fusiona psicología del usuario con código React impecable para crear interfaces que no solo se ven bien, sino que se sienten naturales.",
    team_2_role: "BACKEND SPECIALIST",
    team_2_bio: "Maestro de la lógica del servidor. Diseña APIs robustas y arquitecturas de bases de datos optimizadas para velocidad y seguridad extrema.",
    team_3_role: "DEVOPS & CLOUD ARCHITECT",
    team_3_bio: "El puente entre el código y la nube. Experto en pipelines de despliegue (CI/CD) y escalabilidad horizontal para que el sistema nunca caiga.",
    team_4_role: "DATA ANALYST & SYSTEMS",
    team_4_bio: "Transforma datos crudos en estrategias de oro. Analiza patrones sistémicos para optimizar el rendimiento y la toma de decisiones del negocio.",

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
    // ... (SECCIONES EN INGLÉS)
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
    
    // --- CHANGE HERE: SOLID BACKEND EMPHASIS ---
    services_web_title: "Web Development",
    services_web_desc: "We build platforms on a solid, unbreakable backend infrastructure. We combine the agility of modern frameworks with the robustness of complex server logic (Python, Spring Boot) to ensure security, scalability, and a firm foundation for your business.",
    
    services_mobile_title: "Mobile Apps",
    services_mobile_desc: "Development of native and cross-platform applications with top-tier performance. We focus on fluid user experience, smooth animations, and seamless device hardware integration.",
    services_ui_title: "UI/UX Design",
    services_ui_desc: "User-centered design that converts visitors into customers. We create high-fidelity interactive prototypes and coherent design systems that strengthen your visual brand identity.",
    services_eco_title: "E-commerce",
    services_eco_desc: "Robust online stores designed to maximize sales. We integrate secure global payment gateways, automated inventory management, and optimized checkout experiences to reduce abandonment.",

    // ... (RESTO DEL ARCHIVO EN INGLÉS SIN CAMBIOS)
    projects_badge: "PORTFOLIO V.1.0",
    projects_title: "Our Projects",
    projects_subtitle: "Explore a selection of our work merging robust engineering with cutting-edge design.",
    projects_btn_demo: "View Demo",
    projects_btn_code: "Code",
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

    team_1_role: "FRONTEND & UI/UX LEAD",
    team_1_bio: "The visual architect. Merges user psychology with flawless React code to create interfaces that not only look good but feel natural.",
    team_2_role: "BACKEND SPECIALIST",
    team_2_bio: "Master of server logic. Designs robust APIs and database architectures optimized for speed and extreme security.",
    team_3_role: "DEVOPS & CLOUD ARCHITECT",
    team_3_bio: "The bridge between code and cloud. Expert in deployment pipelines (CI/CD) and horizontal scalability ensuring zero downtime.",
    team_4_role: "DATA ANALYST & SYSTEMS",
    team_4_bio: "Transforms raw data into golden strategies. Analyzes systemic patterns to optimize performance and business decision-making.",

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