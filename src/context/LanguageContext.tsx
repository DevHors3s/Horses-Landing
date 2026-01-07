"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "es" | "en";

type Translations = {
  nav_home: string;
  nav_services: string;
  nav_projects: string;
  nav_about: string;
  
  hero_title_1: string;
  hero_title_gradient: string;
  hero_title_2: string;
  hero_title_gradient_2: string;
};

const translations: Record<Language, Translations> = {
  es: {
    nav_home: "Inicio",
    nav_services: "Servicios",
    nav_projects: "Proyectos",
    nav_about: "Nosotros",
    
    hero_title_1: "Construyendo el ",
    hero_title_gradient: "Futuro",
    hero_title_2: "de las Experiencias ",
    hero_title_gradient_2: "Digitales",
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_projects: "Projects",
    nav_about: "About Us",
    
    hero_title_1: "Building the ",
    hero_title_gradient: "Future",
    hero_title_2: "of Digital ",
    hero_title_gradient_2: "Experiences",
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