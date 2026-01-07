import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// CAMBIO AQUÍ: Usamos ../ para salir de 'app' e ir a 'context' y 'components'
import { LanguageProvider } from "../context/LanguageContext"; 
import Navbar from "../components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevHorses | Startup",
  description: "Innovative Software Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${inter.className} bg-[#0A0F1C] text-white`}>
        <LanguageProvider>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}