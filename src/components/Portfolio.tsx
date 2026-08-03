"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "Armado de PCs a Medida",
    category: "Custom Core",
    description: "Landing page interactiva para cotizar y diseñar computadoras personalizadas ajustadas al presupuesto del cliente.",
    gradient: "from-teal-600 to-orange-500",
    href: "https://custom-core.vercel.app/",
  },
  {
    title: "Landing Page Gym Premium",
    category: "Muscle Factory",
    description: "Landing page de alto impacto para un gimnasio de pesas. Diseño brutalista, tema oscuro y animaciones interactivas.",
    gradient: "from-zinc-900 to-[#D4FF00]",
    href: "/portafolio/Muscle Factory/index.html",
  },
  {
    title: "Restaurante de Alitas",
    category: "Alitas & Bar",
    description: "Menú digital y pedidos para un restaurante casual de alitas y cervezas.",
    gradient: "from-red-600 to-amber-500",
    href: "/portafolio/Alitas/index.html",
  },
  {
    title: "Sistema de Reservas",
    category: "Barbería Urbana Neza",
    description: "Portal de reservas tipo app para una barbería, con selección de barbero y horario.",
    gradient: "from-gray-800 to-yellow-600",
    href: "/portafolio/Barbería Urbana Neza/index.html",
  },
  {
    title: "Catálogo de Boutique",
    category: "Brisa Marina",
    description: "Landing con catálogo de producto para una boutique de ropa inspirada en la costa.",
    gradient: "from-cyan-700 to-teal-400",
    href: "/portafolio/Brisa marina/index.html",
  },
  {
    title: "Servicios Profesionales",
    category: "ElectroSeguro Neza",
    description: "Página de confianza para un electricista local, con llamado directo a contacto.",
    gradient: "from-blue-900 to-yellow-400",
    href: "/portafolio/Electroseguro claude/index.html",
  },
  {
    title: "Landing Page de Evento",
    category: "Taller Marketing Neza",
    description: "Página de registro con contador regresivo para un taller de marketing local.",
    gradient: "from-violet-800 to-orange-500",
    href: "/portafolio/Taller de marketing emprendedores neza/index.html",
  },
];

export default function Portfolio() {
  return (
    <section id="portafolio" className="py-24 relative bg-white/[0.02] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Nuestro <span className="text-shl-accent">Portafolio</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-shl-secondary max-w-2xl mx-auto"
          >
            Explora algunos de nuestros proyectos más recientes. Soluciones a medida que impulsan negocios locales.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-shl-background border border-white/10 rounded-2xl overflow-hidden group hover:border-white/20 transition-all hover:-translate-y-2 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex flex-col"
            >
              <div className={`h-48 w-full bg-gradient-to-br ${project.gradient} relative overflow-hidden flex items-end p-6 shrink-0`}>
                {/* Overlay gradient to match dark theme */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <span className="relative z-10 text-white font-bold text-xl drop-shadow-md">
                  {project.category}
                </span>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-shl-accent transition-colors">{project.title}</h3>
                <p className="text-shl-secondary mb-6 text-sm leading-relaxed flex-1">
                  {project.description}
                </p>
                <Link 
                  href={project.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-shl-accent text-sm font-semibold group-hover:text-shl-accent-hover transition-colors w-max"
                >
                  Ver Detalles <ExternalLink className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
