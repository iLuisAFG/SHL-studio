"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, ArrowUp, Heart, Sparkles, MessageSquare } from "lucide-react";

export default function Footer() {
  const [imgError, setImgError] = React.useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#05060a] border-t border-white/10 relative text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="#inicio"
              className="flex items-center gap-3 group cursor-pointer focus:outline-none w-max"
            >
              <div className="relative size-10 rounded-xl overflow-hidden border border-white/15 group-hover:border-cyan-400/60 shadow-lg shadow-blue-500/10 transition-all bg-neutral-900 flex items-center justify-center">
                {!imgError ? (
                  <Image
                    src="/logo.jpeg"
                    alt="SHL Studio Logo"
                    fill
                    className="object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <span className="font-extrabold text-base text-cyan-400">
                    SHL
                  </span>
                )}
              </div>
              <span className="text-xl font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                SHL Studio
              </span>
            </Link>

            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Agencia de desarrollo web y diseño digital de alta gama.
              Transformamos la visión de marcas y negocios en plataformas
              ultrarrápidas y de alta conversión.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://wa.me/525529156160"
                target="_blank"
                rel="noopener noreferrer"
                className="size-9 rounded-xl bg-white/[0.05] border border-white/10 hover:border-emerald-500/50 hover:bg-emerald-500/20 text-slate-300 hover:text-emerald-400 flex items-center justify-center transition-all cursor-pointer"
                aria-label="WhatsApp SHL Studio"
              >
                <MessageSquare className="size-4" />
              </a>
              <a
                href="mailto:shlwebstudio@gmail.com"
                className="size-9 rounded-xl bg-white/[0.05] border border-white/10 hover:border-cyan-500/50 hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-400 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Email SHL Studio"
              >
                <Mail className="size-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Enlaces Rápidos */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="#inicio"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link
                  href="#servicios"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="#portafolio"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Portafolio 3D
                </Link>
              </li>
              <li>
                <Link
                  href="#proceso"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Proceso de Trabajo
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="hover:text-cyan-300 transition-colors"
                >
                  Contacto & Cotización
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Servicios */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="text-slate-400">Desarrollo Web Next.js</li>
              <li className="text-slate-400">Landing Pages de Conversión</li>
              <li className="text-slate-400">Diseño UI/UX Pro Max</li>
              <li className="text-slate-400">E-Commerce & Menús Digitales</li>
              <li className="text-slate-400">Placas NFC & Tecnologías Smart</li>
              <li className="text-slate-400">Optimización Core Web Vitals</li>
            </ul>
          </div>

          {/* Col 4: Contacto */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Contacto Directo
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-center gap-2">
                <Mail className="size-4 text-cyan-400 shrink-0" />
                <a
                  href="mailto:shlwebstudio@gmail.com"
                  className="hover:text-white transition-colors break-all"
                >
                  shlwebstudio@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 text-emerald-400 shrink-0" />
                <a
                  href="https://wa.me/525529156160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  +52 55 2915 6160
                </a>
              </li>
              <li className="pt-2 text-slate-500">
                Disponibilidad inmediata para nuevos proyectos.
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-slate-500">
            © {new Date().getFullYear()} SHL Studio. Todos los derechos
            reservados.
          </p>

          <div className="flex items-center gap-6">
            <span className="text-slate-500 flex items-center gap-1">
              Desarrollado con <Heart className="size-3.5 text-rose-500 inline fill-rose-500" /> por SHL Studio
            </span>

            <button
              onClick={scrollToTop}
              type="button"
              className="size-8 rounded-full bg-white/[0.05] border border-white/10 hover:border-cyan-500/50 hover:bg-white/[0.1] text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer"
              aria-label="Volver arriba"
            >
              <ArrowUp className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
