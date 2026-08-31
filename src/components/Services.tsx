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
} from "lucide-react";
import Link from "next/link";

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
      "Microinteracciones y feedback háptico/visual",
      "Accesibilidad WCAG y contraste óptimo",
    ],
    accent: "from-indigo-600/20 to-purple-500/10",
    borderGlow: "group-hover:border-indigo-500/50",
  },
  {
    icon: Rocket,
    title: "Optimización de Rendimiento & SEO",
    tag: "Resultados",
    description:
      "Garantizamos calificaciones 100/100 en Google PageSpeed y estructuramos tu sitio para dominar las búsquedas en Google.",
    features: [
      "Optimización Core Web Vitals",
      "SEO on-page y Schema Markup estructurado",
      "Compresión de assets y lazy-loading inteligente",
      "Indexación inmediata en motores de búsqueda",
    ],
    accent: "from-emerald-600/20 to-teal-500/10",
    borderGlow: "group-hover:border-emerald-500/50",
  },
  {
    icon: CreditCard,
    title: "E-Commerce & Menús Digitales",
    tag: "Ventas 24/7",
    description:
      "Catálogos interactivos, tiendas virtuales fluidas y menús digitales con pedidos directos a WhatsApp o pasarelas de pago seguras.",
    features: [
      "Integración con WhatsApp y Stripe/MercadoPago",
      "Gestión de inventario y pedidos ágiles",
      "Experiencia móvil sin fricciones",
      "Checkout optimizado para conversión",
    ],
    accent: "from-amber-600/20 to-orange-500/10",
    borderGlow: "group-hover:border-amber-500/50",
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
      "Actualizaciones de seguridad y dependencias",
      "Soporte técnico directo sin intermediarios",
    ],
    accent: "from-rose-600/20 to-pink-500/10",
    borderGlow: "group-hover:border-rose-500/50",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="py-24 sm:py-32 relative bg-[#07080d]/60 border-y border-white/5"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
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
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
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
                {/* Subtle Gradient Backing */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div className="relative z-10">
                  {/* Top bar with Icon and Tag */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="size-12 rounded-2xl bg-white/[0.06] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:text-cyan-300 transition-all duration-300">
                      <Icon className="size-6" />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-300">
                      {service.tag}
                    </span>
                  </div>

                  {/* Title and Description */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {service.description}
                  </p>

                  {/* Feature Checklist */}
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
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
