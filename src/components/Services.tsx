"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, Globe } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Diseño Web",
    description: "Sitios web a medida, estéticos y diseñados para convertir. Interfaces que cautivan a tus usuarios desde el primer segundo.",
  },
  {
    icon: Smartphone,
    title: "Desarrollo Móvil",
    description: "Experiencias 100% responsivas. Tu negocio se verá y funcionará de manera impecable en cualquier dispositivo y pantalla.",
  },
  {
    icon: Globe,
    title: "Alcance Global",
    description: "Arquitectura optimizada para SEO. Hacemos que el mundo te encuentre con facilidad mediante las mejores prácticas técnicas.",
  }
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Nuestros <span className="text-shl-accent">Servicios</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-shl-secondary max-w-2xl mx-auto"
          >
            Soluciones tecnológicas de alto nivel para escalar tu marca.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-shl-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="w-14 h-14 bg-shl-background border border-white/10 rounded-xl flex items-center justify-center mb-6 group-hover:border-shl-accent/50 transition-colors">
                  <Icon className="w-7 h-7 text-shl-accent" />
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-shl-secondary leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
