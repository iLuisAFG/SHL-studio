"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-shl-background/80 backdrop-blur-md border-b border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center group relative w-32 h-10">
          <Image 
            src="/logo.png" 
            alt="SHL Studio Logo" 
            fill
            className="object-contain object-left group-hover:opacity-80 transition-opacity"
            priority
          />
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-shl-secondary">
          <Link href="#servicios" className="hover:text-white transition-colors">Servicios</Link>
          <Link href="#portafolio" className="hover:text-white transition-colors">Portafolio</Link>
          <Link href="#nosotros" className="hover:text-white transition-colors">Nosotros</Link>
          <Link href="#contacto" className="hover:text-white transition-colors">Contacto</Link>
        </div>

        <Link 
          href="/cotizar"
          className="hidden md:flex px-5 py-2 rounded-full border border-shl-accent/30 text-shl-accent hover:bg-shl-accent/10 transition-all neon-shadow-hover"
        >
          Cotizar Proyecto
        </Link>
      </div>
    </motion.nav>
  );
}
