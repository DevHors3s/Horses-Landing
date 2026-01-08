import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. IMPORTAR COMPONENTES GLOBALES
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer";  // <-- Importas el footer aquí
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHorses - Arquitectura Digital",
  description: "Portafolio y servicios de desarrollo de software premium.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <LanguageProvider>
          
          {/* El Navbar va arriba de todo */}
          <Navbar /> 
          
          {/* El contenido de cada página se renderiza aquí */}
          {children}

          {/* 2. AGREGAR EL FOOTER AQUÍ ABAJO */}
          <Footer />

        </LanguageProvider>
      </body>
    </html>
  );
}