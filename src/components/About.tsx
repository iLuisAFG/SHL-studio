"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-shl-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 backdrop-blur-sm">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              El dúo dinámico detrás de <br />
              <span className="text-shl-accent font-mono tracking-tight mt-2 inline-block">&lt;SHL Studio /&gt;</span>
            </h2>
            <p className="text-shl-secondary text-lg leading-relaxed mb-6">
              Somos dos amigos apasionados por la tecnología y el diseño. Combinamos nuestra experiencia en ingeniería de software y estética visual para crear productos digitales que destacan en un mercado competitivo.
            </p>
            <p className="text-shl-secondary text-lg leading-relaxed">
              Nuestro enfoque es simple: <strong className="text-white font-medium">escalar marcas a través de código limpio y diseño excepcional.</strong> No usamos plantillas genéricas; construimos herramientas hechas a medida para impulsar tu negocio.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full md:w-[400px] aspect-square rounded-2xl bg-gradient-to-br from-shl-background via-white/5 to-shl-accent/10 border border-white/10 flex items-center justify-center relative overflow-hidden"
          >
            {/* Abstract tech representation for the duo */}
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop')] bg-cover bg-center opacity-20 mix-blend-overlay grayscale"></div>
            
            <div className="relative z-10 flex gap-4">
              <div className="w-16 h-32 rounded-full border border-shl-accent/40 bg-shl-accent/10 backdrop-blur-md animate-[pulse_4s_ease-in-out_infinite]" />
              <div className="w-16 h-40 rounded-full border border-shl-accent/60 bg-shl-accent/20 backdrop-blur-md translate-y-4 animate-[pulse_4s_ease-in-out_infinite_1s]" />
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
