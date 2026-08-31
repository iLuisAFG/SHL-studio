"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  TrendingUp,
  Code2,
  Layers,
  CheckCircle2,
  Activity,
} from "lucide-react";
import Link from "next/link";
import ConstellationGrid from "@/components/ui/constellation-grid";

export default function Hero() {
  const stats = [
    { label: "Proyectos Entregados", value: "+35", icon: Layers },
    { label: "Google PageSpeed", value: "100/100", icon: Zap },
    { label: "Satisfacción Cliente", value: "99.8%", icon: ShieldCheck },
    { label: "Retorno & Conversión", value: "3.8x", icon: TrendingUp },
  ];

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">
      {/* Constellation Grid Interactive Kinetic Mesh Background */}
      <ConstellationGrid className="min-h-screen pt-32 pb-20 md:pt-40 md:pb-28 flex items-center justify-center">
        {/* Dynamic Background Glow Elements */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-br from-blue-600/15 via-cyan-500/10 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10 animate-pulse-slow" />
        <div className="absolute top-1/3 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none -z-10" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center max-w-4xl mx-auto">
            {/* Top Pill Badge with Interactive Notice */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/60 border border-cyan-500/30 backdrop-blur-md mb-8 shadow-inner"
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-slate-200 tracking-wide flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-cyan-400" />
                Desarrollo Web de Alto Rendimiento
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-cyan-300/80 border-l border-white/10 pl-2">
                <Activity className="size-3 text-cyan-400" />
                Mueve tu cursor para activar ondas cinéticas
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6 drop-shadow-md"
            >
              Transformamos tu negocio en una{" "}
              <span className="text-gradient-accent">experiencia digital</span>{" "}
              inolvidable
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
            >
              Diseñamos y programamos sitios web, landing pages y aplicaciones a
              la medida con código ultrarrápido, estética de nivel mundial y
              estrategias orientadas a la máxima conversión.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 mb-16"
            >
              <Link
                href="#contacto"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-base shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <Zap className="size-4 text-cyan-200 group-hover:scale-110 transition-transform" />
                <span>Cotizar Mi Proyecto</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#portafolio"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-black/50 hover:bg-white/[0.1] border border-white/15 hover:border-cyan-500/40 text-slate-200 hover:text-white font-semibold text-base backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer hover:scale-105"
              >
                <Code2 className="size-4 text-slate-400" />
                <span>Ver Portafolio 3D</span>
              </Link>
            </motion.div>

            {/* Trust Guarantees */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-400 mb-16"
            >
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-emerald-400" />
                Sin plantillas genéricas
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-cyan-400" />
                Optimizado para Móviles & SEO
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="size-4 text-blue-400" />
                Soporte y Garantía Total
              </span>
            </motion.div>
          </div>

          {/* Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto"
          >
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div
                  key={idx}
                  className="relative group p-5 sm:p-6 rounded-2xl bg-[#0d111c]/80 border border-white/10 hover:border-cyan-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="size-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-cyan-400 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    <Icon className="size-5" />
                  </div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </ConstellationGrid>
    </section>
  );
}
