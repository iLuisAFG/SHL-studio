"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Armado de PCs a Medida",
    category: "Custom Core",
    description: "Landing page interactiva para cotizar y diseñar computadoras personalizadas ajustadas al presupuesto del cliente.",
    image: "/portafolio/covers/Armado de PCs a Medida.png",
    href: "https://custom-core.vercel.app/",
  },
  {
    title: "Landing Page Gym Premium",
    category: "Muscle Factory",
    description: "Landing page de alto impacto para un gimnasio de pesas. Diseño brutalista, tema oscuro y animaciones interactivas.",
    image: "/portafolio/covers/Landing Page Gym Premium.png",
    href: "/portafolio/Muscle Factory/index.html",
  },
  {
    title: "Restaurante de Alitas",
    category: "Alitas & Bar",
    description: "Menú digital y pedidos para un restaurante casual de alitas y cervezas.",
    image: "/portafolio/covers/Restaurante de Alitas.png",
    href: "/portafolio/Alitas/index.html",
  },
  {
    title: "Sistema de Reservas",
    category: "Barbería Urbana Neza",
    description: "Portal de reservas tipo app para una barbería, con selección de barbero y horario.",
    image: "/portafolio/covers/Sistema de Reservas Barbería.png",
    href: "/portafolio/Barbería Urbana Neza/index.html",
  },
  {
    title: "Catálogo de Boutique",
    category: "Brisa Marina",
    description: "Landing con catálogo de producto para una boutique de ropa inspirada en la costa.",
    image: "/portafolio/covers/Catálogo de Boutique.png",
    href: "/portafolio/Brisa marina/index.html",
  },
  {
    title: "Servicios Profesionales",
    category: "ElectroSeguro Neza",
    description: "Página de confianza para un electricista local, con llamado directo a contacto.",
    image: "/portafolio/covers/Electroseguro neza.png",
    href: "/portafolio/Electroseguro claude/index.html",
  },
  {
    title: "Landing Page de Evento",
    category: "Taller Marketing Neza",
    description: "Página de registro con contador regresivo para un taller de marketing local.",
    image: "/portafolio/covers/Taller marketing neza.png",
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
              <div className="h-48 w-full relative overflow-hidden flex items-end p-6 shrink-0">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay gradient to make text readable and blend with dark theme */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                <span className="relative z-10 text-white font-bold text-xl drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
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
