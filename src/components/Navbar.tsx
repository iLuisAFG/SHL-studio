"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const [imgError, setImgError] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Portafolio", href: "#portafolio" },
    { name: "Proceso", href: "#proceso" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#07080d]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#inicio"
            className="flex items-center gap-3 group cursor-pointer focus:outline-none"
          >
            <div className="relative size-10 sm:size-11 rounded-xl overflow-hidden border border-white/15 group-hover:border-cyan-400/60 shadow-lg shadow-blue-500/10 transition-all duration-300 group-hover:scale-105 bg-neutral-900 flex items-center justify-center">
              {!imgError ? (
                <Image
                  src="/logo.jpeg"
                  alt="SHL Studio Logo"
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <span className="font-extrabold text-lg text-cyan-400 tracking-tighter">
                  SHL
                </span>
              )}
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                SHL Studio
                <span className="inline-block size-1.5 rounded-full bg-cyan-400 animate-ping" />
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-widest text-slate-400">
                Digital Agency
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-full hover:bg-white/[0.08] transition-all duration-200 cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="#contacto"
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden rounded-full font-semibold group cursor-pointer shadow-lg shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-105"
            >
              <span className="w-full h-full bg-gradient-to-br from-blue-600 via-cyan-500 to-indigo-600 group-hover:from-blue-500 group-hover:to-cyan-400 absolute"></span>
              <span className="relative px-5 py-2 transition-all ease-out bg-[#07080d] rounded-full group-hover:bg-opacity-0 text-white text-sm flex items-center gap-2">
                <Sparkles className="size-3.5 text-cyan-300" />
                Cotizar Proyecto
                <ArrowRight className="size-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-300 hover:text-white focus:outline-none cursor-pointer"
              aria-label="Abrir menú de navegación"
            >
              {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#07080d]/95 border-b border-white/10 backdrop-blur-2xl px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-slate-200 hover:bg-white/[0.08] hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10">
                <Link
                  href="#contacto"
                  onClick={() => setIsOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-sm shadow-lg shadow-blue-500/25"
                >
                  <Sparkles className="size-4 text-cyan-200" />
                  Cotizar Proyecto Ahora
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
