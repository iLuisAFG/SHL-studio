"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  CoverflowCarousel,
  CoverflowSlide,
} from "@/components/ui/coverflow-carousel";
import {
  ExternalLink,
  Layers,
  Sparkles,
  LayoutGrid,
  Rotate3d,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const portfolioSlides: CoverflowSlide[] = [
  {
    src: "/portafolio/covers/Loyly Finnish Coffee.png",
    alt: "Löyly Finnish Coffee - Cafetería Nórdica",
    title: "Löyly Finnish Coffee",
    subtitle:
      "Primera cafetería de inspiración finlandesa en Neza. Landing minimalista y cálida con menú digital y experiencia inmersiva.",
    href: "https://löylyfinnishcoffee.com",
    meta: [
      { label: "Categoría", value: "Landing & Menú Digital" },
      { label: "Cliente", value: "Löyly Coffee House" },
      { label: "Tecnología", value: "Next.js + Tailwind" },
      { label: "Año", value: "2025" },
    ],
  },
  {
    src: "/portafolio/covers/Landing Page Gym Premium.png",
    alt: "Kraken Sport Gym - Plataforma Fitness",
    title: "Kraken Sport Gym",
    subtitle:
      "Plataforma web integral para gimnasio de alto rendimiento. Módulos de membresías, entrenadores certificados y sistema de citas.",
    href: "/portafolio/Kraken Sport Gym/index.html",
    meta: [
      { label: "Categoría", value: "Portal Web Completo" },
      { label: "Cliente", value: "Kraken Sport" },
      { label: "Tecnología", value: "HTML5 / JS / CSS3" },
      { label: "Año", value: "2024" },
    ],
  },
  {
    src: "/portafolio/covers/Armado de PCs a Medida.png",
    alt: "Custom Core - Armado de PCs",
    title: "Custom Core | Armado de PCs",
    subtitle:
      "Cotizador interactivo y plataforma para diseño de computadoras personalizadas ajustadas a medida del presupuesto del usuario.",
    href: "https://custom-core.vercel.app/",
    meta: [
      { label: "Categoría", value: "Web App Cotizador" },
      { label: "Cliente", value: "Custom Core" },
      { label: "Tecnología", value: "React + Framer Motion" },
      { label: "Año", value: "2025" },
    ],
  },
  {
    src: "/portafolio/covers/Catálogo de Boutique.png",
    alt: "Boutique & Catálogo de Moda",
    title: "Boutique & Catálogo de Moda",
    subtitle:
      "Catálogo digital interactivo de prendas y colecciones de temporada con checkout ágil y pedidos directos a WhatsApp.",
    href: "#contacto",
    meta: [
      { label: "Categoría", value: "E-Commerce / Catálogo" },
      { label: "Cliente", value: "Moda Urbana" },
      { label: "Tecnología", value: "UI/UX Pro Max" },
      { label: "Año", value: "2025" },
    ],
  },
  {
    src: "/portafolio/covers/Sistema de Reservas Barbería.png",
    alt: "Barbería Urbana Neza - Sistema de Reservas",
    title: "Barbería Urbana Neza",
    subtitle:
      "Portal de reservas interactivo tipo app móvil, con selección de barbero, catálogo de cortes y horarios en tiempo real.",
    href: "/portafolio/Barbería Urbana Neza/index.html",
    meta: [
      { label: "Categoría", value: "Sistema de Reservas" },
      { label: "Cliente", value: "Barbería Urbana" },
      { label: "Tecnología", value: "JavaScript / CSS3" },
      { label: "Año", value: "2024" },
    ],
  },
  {
    src: "/portafolio/covers/Restaurante de Alitas.png",
    alt: "Alitas & Bar - Menú Digital",
    title: "Alitas & Bar Restaurant",
    subtitle:
      "Menú digital optimizado para smartphones con pedidos rápidos y presentación visual de platillos y promociones.",
    href: "/portafolio/Alitas/index.html",
    meta: [
      { label: "Categoría", value: "Menú Digital & Pedidos" },
      { label: "Cliente", value: "Alitas & Bar" },
      { label: "Tecnología", value: "Mobile-First Web" },
      { label: "Año", value: "2024" },
    ],
  },
  {
    src: "/portafolio/covers/Electroseguro neza.png",
    alt: "ElectroSeguro Neza - Servicios Profesionales",
    title: "ElectroSeguro Neza",
    subtitle:
      "Página corporativa y de confianza técnica para servicios de electricidad e instalaciones, con contacto directo e inmediato.",
    href: "/portafolio/Electroseguro claude/index.html",
    meta: [
      { label: "Categoría", value: "Sitio Corporativo" },
      { label: "Cliente", value: "ElectroSeguro" },
      { label: "Tecnología", value: "HTML5 / Tailwind" },
      { label: "Año", value: "2024" },
    ],
  },
  {
    src: "/portafolio/covers/Taller marketing neza.png",
    alt: "Taller Marketing Emprendedores",
    title: "Taller de Marketing Neza",
    subtitle:
      "Página de captación y registro con contador regresivo y formulario para taller presencial de emprendimiento local.",
    href: "/portafolio/Taller de marketing emprendedores neza/index.html",
    meta: [
      { label: "Categoría", value: "Landing de Evento" },
      { label: "Cliente", value: "Emprendedores Neza" },
      { label: "Tecnología", value: "Tailwind CSS / JS" },
      { label: "Año", value: "2024" },
    ],
  },
];

export default function Portfolio() {
  const [viewMode, setViewMode] = React.useState<"3d" | "grid">("3d");

  return (
    <section
      id="portafolio"
      className="py-24 sm:py-32 relative bg-[#07080d] overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/15 via-cyan-500/15 to-indigo-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="size-3.5 text-cyan-400" />
            Casos de Éxito & Portafolio Real
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Resultados que hablan{" "}
            <span className="text-gradient-accent">por sí mismos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Explora algunos de nuestros proyectos más representativos. Soluciones
            digitales a medida que impulsan negocios locales y marcas en
            crecimiento.
          </motion.p>

          {/* View Mode Toggle Switch */}
          <div className="mt-8 inline-flex items-center p-1 rounded-full bg-[#0d111c] border border-white/10 shadow-lg">
            <button
              onClick={() => setViewMode("3d")}
              type="button"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === "3d"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Rotate3d className="size-4" />
              Vista 3D Coverflow
            </button>
            <button
              onClick={() => setViewMode("grid")}
              type="button"
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                viewMode === "grid"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md shadow-blue-500/20"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <LayoutGrid className="size-4" />
              Vista Cuadrícula
            </button>
          </div>
        </div>

        {/* 3D Coverflow Mode */}
        {viewMode === "3d" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full relative"
          >
            <CoverflowCarousel
              slides={portfolioSlides}
              cardWidth="clamp(280px, 32vw, 420px)"
              rotate={42}
              depth={0.65}
              perspective={3.2}
              falloff={0.58}
              fade={0.12}
              loop={true}
              showCaption={true}
              showPagination={true}
              showNavigation={true}
              label="Portafolio 3D de SHL Studio"
              className="py-4"
            />
          </motion.div>
        ) : (
          /* Grid Mode */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {portfolioSlides.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group rounded-3xl bg-[#0d111c] border border-white/10 hover:border-cyan-500/40 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 flex flex-col cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden bg-neutral-900">
                  <Image
                    src={project.src || "/logo.jpeg"}
                    alt={project.alt || project.title || "Proyecto SHL Studio"}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d111c] via-black/30 to-transparent" />
                  <span className="absolute bottom-3 left-4 px-3 py-1 rounded-full bg-black/60 border border-white/10 text-cyan-300 text-xs font-semibold backdrop-blur-md">
                    {project.meta?.[0]?.value || "Proyecto"}
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                      {project.subtitle}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-medium">
                      {project.meta?.[2]?.value || "Next.js"}
                    </span>
                    {project.href && (
                      <Link
                        href={project.href}
                        target={project.href.startsWith("http") || project.href.includes(".html") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Ver Proyecto</span>
                        <ExternalLink className="size-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Custom Project CTA Box */}
        <div className="mt-20 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900/40 via-[#0d111c] to-cyan-900/30 border border-white/15 backdrop-blur-xl text-center max-w-4xl mx-auto shadow-2xl">
          <div className="inline-flex items-center justify-center size-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 mb-4">
            <Layers className="size-6" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            ¿Tienes una idea en mente para tu negocio?
          </h3>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto mb-6">
            Cada empresa es única. Creamos desde landings express de alto
            impacto hasta ecosistemas web completos optimizados para generar
            ventas.
          </p>
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 transition-all hover:scale-105 cursor-pointer"
          >
            <Sparkles className="size-4 text-cyan-200" />
            <span>Solicitar Cotización Sin Compromiso</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
