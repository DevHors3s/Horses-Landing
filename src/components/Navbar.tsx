import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        
        {/* LOGO */}
        <Link href="/" className="text-2xl font-bold font-mono group">
          Dev<span className="text-blue-500 group-hover:text-purple-500 transition-colors">Horses</span>
        </Link>

        {/* MENÚ DE NAVEGACIÓN */}
        <nav className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">
          <Link href="/#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="/#process" className="hover:text-white transition-colors">Process</Link>
          <Link href="/#work" className="hover:text-white transition-colors">Work</Link>
          
          {/* Link a la página de equipo */}
          <Link href="/about" className="hover:text-white transition-colors text-cyan-400 font-bold border border-cyan-500/30 px-3 py-1 rounded-lg hover:bg-cyan-500/10">
            Nosotros
          </Link>
        </nav>

        {/* BOTÓN CONTACTO (Con efecto Glow integrado) */}
        <Link href="/#contact" className="relative group hidden md:inline-block">
            {/* El Brillo detrás (invisible hasta hacer hover) */}
            <div className="absolute inset-0 bg-white rounded-full blur-md opacity-0 transition-opacity duration-300 group-hover:opacity-40"></div>
            
            {/* El Botón visible */}
            <div className="relative px-6 py-2.5 rounded-full text-sm font-bold bg-white text-black transition-transform group-hover:scale-105">
              Lets Talk
            </div>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;