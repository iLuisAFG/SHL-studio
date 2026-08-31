"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Rocket,
  ShieldCheck,
  Smartphone,
  CreditCard,
  ArrowUpRight,
  Check,
  Rotate3d,
  LayoutGrid,
} from "lucide-react";
import Link from "next/link";
import { CoverflowCarousel } from "@/components/ui/coverflow-carousel";

const services = [
  {
    icon: Code,
    title: "Desarrollo Web a la Medida",
    tag: "Core Service",
    description:
      "Landing pages de alta conversión, plataformas web corporativas y aplicaciones dinámicas desarrolladas con Next.js, React y TypeScript.",
    features: [
      "Arquitectura moderna y escalable",
      "Carga instantánea (< 0.8s)",
      "Animaciones fluidas con Framer Motion",
      "Adaptabilidad 100% responsiva",
    ],
    accent: "from-blue-600/20 to-cyan-500/10",
    borderGlow: "group-hover:border-cyan-500/50",
    iconColor: "text-cyan-400 group-hover:text-cyan-300",
  },
  {
    icon: Palette,
    title: "Rediseño & UI/UX Pro Max",
    tag: "Diseño Premium",
    description:
      "Transformamos interfaces aburridas en experiencias visuales magnéticas centradas en retener usuarios e incentivar la compra.",
    features: [
      "Estructuras Bento Grid y Glassmorphism",
      "Prototipado interactivo de alta fidelidad",
      "Microinteracciones y feedback visual",
      "Accesibilidad WCAG y contraste óptimo",
    ],
    accent: "from-indigo-600/20 to-purple-500/10",
    borderGlow: "group-hover:border-indigo-500/50",
    iconColor: "text-indigo-400 group-hover:text-indigo-300",
  },
  {
    icon: Rocket,
    title: "Optimización de Rendimiento & SEO",
    tag: "Resultados",
    description:
      "Garantizamos calificaciones 100/100 en Google PageSpeed y estructuramos tu sitio para dominar las búsquedas en Google.",
    features: [
      "Optimización Core Web Vitals",
      "SEO on-page y Schema Markup",
      "Compresión de assets y lazy-loading",
      "Indexación inmediata en motores",
    ],
    accent: "from-emerald-600/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/50",
    iconColor: "text-emerald-400 group-hover:text-emerald-300",
  },
  {
    icon: CreditCard,
    title: "E-Commerce & Menús Digitales",
    tag: "Ventas 24/7",
    description:
      "Catálogos interactivos, tiendas virtuales fluidas y menús digitales con pedidos directos a WhatsApp o pasarelas de pago seguras.",
    features: [
      "Integración con WhatsApp y Stripe/MercadoPago",
      "Gestión de pedidos ágiles",
      "Experiencia móvil sin fricciones",
      "Checkout optimizado para conversión",
    ],
    accent: "from-amber-600/20 to-orange-500/10",
    borderGlow: "group-hover:border-amber-500/50",
    iconColor: "text-amber-400 group-hover:text-amber-300",
  },
  {
    icon: Smartphone,
    title: "Placas NFC & Conexión Rápida",
    tag: "Innovación Local",
    description:
      "Conecta el mundo físico con el digital. Placas y tarjetas inteligentes para reseñas en Google, menús y perfiles de empresa al toque del celular.",
    features: [
      "Configuración de chips NFC y códigos QR",
      "Perfiles digitales de alta velocidad",
      "Aumento directo de reseñas en Google Maps",
      "Materiales premium de larga duración",
    ],
    accent: "from-cyan-600/20 to-blue-500/10",
    borderGlow: "group-hover:border-cyan-500/50",
    iconColor: "text-cyan-400 group-hover:text-cyan-300",
  },
  {
    icon: ShieldCheck,
    title: "Mantenimiento & Soporte Continuo",
    tag: "Tranquilidad",
    description:
      "Nos encargamos de la infraestructura, seguridad, respaldos automáticos y actualizaciones para que te enfoques en hacer crecer tu negocio.",
    features: [
      "Monitoreo de disponibilidad 99.9%",
      "Copias de seguridad semanales en la nube",
      "Actualizaciones de seguridad y librerías",
      "Soporte técnico directo sin intermediarios",
    ],
    accent: "from-rose-600/20 to-pink-500/10",
    borderGlow: "group-hover:border-rose-500/50",
    iconColor: "text-rose-400 group-hover:text-rose-300",
  },
];

export default function Services() {
  const [viewMode, setViewMode] = React.useState<"3d" | "grid">("3d");

  return (
    <section
      id="servicios"
      className="py-24 sm:py-32 relative bg-[#07080d]/60 border-y border-white/5 overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Servicios Especializados
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Soluciones digitales diseñadas para{" "}
            <span className="text-gradient-accent">hacerte destacar</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Combinamos ingeniería de software de punta, diseño visual
            hipnótico y estrategias comerciales que convierten visitantes en
            clientes recurrentes.
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

        {/* 3D Coverflow View */}
        {viewMode === "3d" ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full relative"
          >
            <CoverflowCarousel
              slides={services}
              cardWidth="clamp(290px, 78vw, 420px)"
              cardHeight="520px"
              rotate={38}
              depth={0.55}
              perspective={3.2}
              falloff={0.55}
              fade={0.12}
              loop={true}
              showCaption={false}
              showPagination={true}
              showNavigation={true}
              label="Servicios 3D de SHL Studio"
              className="py-4"
              renderCard={(service, index, isSelected) => {
                const Icon = service.icon;
                return (
                  <div
                    className={`relative group rounded-3xl p-7 sm:p-8 bg-[#0d111c]/95 border ${
                      isSelected
                        ? "border-cyan-500/60 shadow-2xl shadow-cyan-500/10"
                        : "border-white/10"
                    } ${service.borderGlow} transition-all duration-300 flex flex-col justify-between h-[490px] overflow-hidden select-none backdrop-blur-xl`}
                  >
                    {/* Subtle Gradient Backing */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
                    />

                    <div className="relative z-10 flex-1 flex flex-col">
                      {/* Top bar with Icon and Tag */}
                      <div className="flex items-center justify-between mb-5">
                        <div className="size-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                          <Icon className={`size-6 ${service.iconColor}`} />
                        </div>
                        <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                          {service.tag}
                        </span>
                      </div>

                      {/* Title and Description */}
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-5 font-normal line-clamp-3 sm:line-clamp-none">
                        {service.description}
                      </p>

                      {/* Feature Checklist */}
                      <ul className="space-y-2.5 mb-5 flex-1">
                        {service.features.map((feat: string, fIdx: number) => (
                          <li
                            key={fIdx}
                            className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium"
                          >
                            <div className="size-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                              <Check className="size-2.5 text-cyan-400" />
                            </div>
                            <span className="truncate">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom Link */}
                    <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                      <Link
                        href="#contacto"
                        className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                      >
                        <span>Cotizar este servicio</span>
                        <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              }}
            />
          </motion.div>
        ) : (
          /* Grid View */
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className={`relative group rounded-3xl p-7 sm:p-8 bg-[#0d111c]/80 border border-white/10 ${service.borderGlow} transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/60 flex flex-col justify-between overflow-hidden cursor-pointer`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-6">
                      <div className="size-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all duration-300">
                        <Icon className="size-6" />
                      </div>
                      <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                        {service.tag}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                      {service.description}
                    </p>

                    <ul className="space-y-2.5 mb-6">
                      {service.features.map((feat, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-2 text-xs sm:text-sm text-slate-300 font-medium"
                        >
                          <div className="size-4 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center shrink-0">
                            <Check className="size-2.5 text-cyan-400" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/10 flex items-center justify-between">
                    <Link
                      href="#contacto"
                      className="text-xs font-semibold text-cyan-400 group-hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
                    >
                      <span>Cotizar este servicio</span>
                      <ArrowUpRight className="size-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
}
