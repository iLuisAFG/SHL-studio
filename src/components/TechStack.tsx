"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Cpu,
  Globe,
  Layers,
  Sparkles,
  Zap,
  CheckCircle2,
  Shield,
} from "lucide-react";

const techItems = [
  {
    name: "Next.js 15+",
    role: "Framework Fullstack",
    desc: "Renderizado híbrido (SSR/SSG), velocidad máxima y Core Web Vitals.",
    badge: "Core Stack",
  },
  {
    name: "React 19 & TypeScript",
    role: "Ecosistema Frontend",
    desc: "Tipado estricto y código robusto sin errores en tiempo de ejecución.",
    badge: "Modern UI",
  },
  {
    name: "Tailwind CSS v4",
    role: "Diseño & Estilos",
    desc: "Arquitectura CSS modular y componentes con estética ultra moderna.",
    badge: "Pixel Perfect",
  },
  {
    name: "Framer Motion",
    role: "Motor de Animaciones",
    desc: "Microinteracciones físicas y transiciones dinámicas a 60fps.",
    badge: "Fluid UX",
  },
  {
    name: "Vercel & Cloud Edge",
    role: "Infraestructura Global",
    desc: "Despliegues con 99.99% uptime y servidores CDN ultrarrápidos.",
    badge: "Cloud Scale",
  },
  {
    name: "Figma UI/UX Pro",
    role: "Diseño & Prototipado",
    desc: "Sistemas de diseño atómicos y alineación visual antes del código.",
    badge: "Pro Design",
  },
];

export default function TechStack() {
  return (
    <section className="py-20 relative bg-[#07080d]/90 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-3"
          >
            <Cpu className="size-3.5" />
            Stack Tecnológico Premium
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight"
          >
            Construido con las herramientas líderes de la industria
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techItems.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="p-6 rounded-2xl bg-[#0d111c]/60 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:-translate-y-1 backdrop-blur-md"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-base font-bold text-white">
                  {tech.name}
                </span>
                <span className="text-[10px] font-semibold uppercase px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  {tech.badge}
                </span>
              </div>
              <p className="text-xs font-medium text-slate-400 mb-2">
                {tech.role}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">
                {tech.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
