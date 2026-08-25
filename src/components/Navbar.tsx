"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-shl-secondary">
          <Link href="/#servicios" className="hover:text-white transition-colors">Servicios</Link>
          <Link href="/#portafolio" className="hover:text-white transition-colors">Portafolio</Link>
          <Link href="/placas-nfc" className="hover:text-white transition-colors">Placas NFC</Link>
          <Link href="/#nosotros" className="hover:text-white transition-colors">Nosotros</Link>
          <Link href="/#contacto" className="hover:text-white transition-colors">Contacto</Link>
        </div>

        <Link 
          href="/cotizar"
          className="hidden md:flex px-5 py-2 rounded-full border border-shl-accent/30 text-shl-accent hover:bg-shl-accent/10 transition-all neon-shadow-hover"
        >
          Cotizar Proyecto
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-shl-secondary hover:text-white transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/5 bg-shl-background/95 backdrop-blur-lg overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              <Link href="/#servicios" onClick={() => setIsMobileMenuOpen(false)} className="text-shl-secondary hover:text-white font-medium">Servicios</Link>
              <Link href="/#portafolio" onClick={() => setIsMobileMenuOpen(false)} className="text-shl-secondary hover:text-white font-medium">Portafolio</Link>
              <Link href="/placas-nfc" onClick={() => setIsMobileMenuOpen(false)} className="text-shl-accent font-medium">Placas NFC</Link>
              <Link href="/#nosotros" onClick={() => setIsMobileMenuOpen(false)} className="text-shl-secondary hover:text-white font-medium">Nosotros</Link>
              <Link href="/#contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-shl-secondary hover:text-white font-medium">Contacto</Link>
              
              <Link 
                href="/cotizar"
                onClick={() => setIsMobileMenuOpen(false)}
                className="inline-flex justify-center px-5 py-3 mt-4 rounded-xl bg-shl-accent text-white font-semibold shadow-lg shadow-shl-accent/20"
              >
                Cotizar Proyecto
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
