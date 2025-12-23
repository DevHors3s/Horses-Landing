import Link from "next/link";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0F1C]/80 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <Link href="/" className="text-2xl font-bold font-mono">
          Dev<span className="text-blue-500">Horses</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-slate-300 text-sm font-medium">
          <Link href="#services" className="hover:text-white transition-colors">Services</Link>
          <Link href="#process" className="hover:text-white transition-colors">Process</Link>
          <Link href="#work" className="hover:text-white transition-colors">Work</Link>
        </nav>

        <Link
            href="#contact"
            className="hidden md:inline-block px-6 py-2 rounded-full text-sm font-bold bg-white text-black hover:bg-slate-200 transition-colors"
        >
          Lets Talk
        </Link>
      </div>
    </header>
  );
};

export default Navbar;