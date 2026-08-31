"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Compass,
  Palette,
  Code2,
  Rocket,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const steps = [
  {
    number: "01",
    icon: Compass,
    title: "Descubrimiento & Estrategia",
    subtitle: "Entendemos tu modelo de negocio",
    description:
      "Analizamos a fondo tu nicho, tus competidores y los objetivos comerciales de tu empresa para definir la arquitectura, el mensaje clave y la estructura de conversión idónea.",
    highlights: [
      "Briefing estratégico y objetivos",
      "Análisis de competencia directa",
      "Estructura y wireframing inicial",
    ],
  },
  {
    number: "02",
    icon: Palette,
    title: "Diseño UI/UX Pro Max",
    subtitle: "Interfaces visuales de alto impacto",
    description:
      "Creamos prototipos interactivos de alta fidelidad aplicando las tendencias más avanzadas de diseño: Bento Grid, Glassmorphism, paletas cromáticas armónicas y microinteracciones fluidas.",
    highlights: [
      "Prototipos interactivos en Figma",
      "Paleta y tipografía de nivel premium",
      "Validación de experiencia de usuario",
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Desarrollo & Optimización",
    subtitle: "Ingeniería de software limpia",
    description:
      "Codificamos tu proyecto utilizando Next.js, React, TypeScript y Tailwind CSS. Implementamos animaciones con Framer Motion y auditamos la velocidad hasta alcanzar 100/100 en PageSpeed.",
    highlights: [
      "Código ultrarrápido y limpio",
      "100% responsivo para móviles",
      "SEO técnico y Core Web Vitals",
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Lanzamiento & Crecimiento",
    subtitle: "Tu negocio en producción",
    description:
      "Realizamos el despliegue en servidores cloud de alta disponibilidad (Vercel / AWS), configuramos analíticas de conversión, dominio SSL y te entregamos soporte técnico continuo.",
    highlights: [
      "Despliegue y configuración de dominio",
      "Integración de analíticas y WhatsApp",
      "Soporte y garantía de funcionamiento",
    ],
  },
];

export default function Process() {
  return (
    <section
      id="proceso"
      className="py-24 sm:py-32 relative bg-[#07080d]/80 border-t border-white/5 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            Metodología Ágil & Transparente
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            Nuestro camino hacia{" "}
            <span className="text-gradient-accent">tu éxito digital</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Un proceso estructurado de 4 etapas donde cada detalle está
            diseñado para garantizar calidad excepcional, velocidad de entrega y
            cero dolores de cabeza.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group p-7 sm:p-8 rounded-3xl bg-[#0d111c]/90 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between cursor-pointer"
              >
                <div>
                  {/* Step Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-400">
                      {step.number}
                    </span>
                    <div className="size-11 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                      <Icon className="size-5" />
                    </div>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400 mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6 font-normal">
                    {step.description}
                  </p>
                </div>

                {/* Highlights */}
                <div className="pt-4 border-t border-white/10 space-y-2">
                  {step.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className="flex items-center gap-2 text-xs text-slate-300 font-medium"
                    >
                      <CheckCircle className="size-3.5 text-cyan-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-cyan-300 transition-colors group cursor-pointer"
          >
            <span>¿Listo para dar el primer paso con tu proyecto?</span>
            <ArrowRight className="size-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
