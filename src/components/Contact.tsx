"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Globe, Mail, Phone } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", business: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const { name, business, email, message } = formData;
    
    const whatsappNumber = '5529156160';
    const text = `¡Hola SHL Studio! Me gustaría iniciar un proyecto.\n\nMis datos:\n- Nombre: ${name}\n- Negocio: ${business}\n- Correo: ${email}\n\nMensaje:\n${message}`;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    setFormData({ name: "", business: "", email: "", message: "" });
  };

  return (
    <section id="contacto" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Inicia tu <br />
              <span className="text-shl-accent">Proyecto</span>
            </h2>
            <p className="text-shl-secondary mb-10 text-lg">
              ¿Listo para transformar tu idea en una realidad digital? Cuéntanos sobre tu visión y te contactaremos en menos de 24 horas.
            </p>

            <a 
              href="https://wa.me/5529156160"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-4 bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/30 rounded-2xl hover:bg-[#25D366] hover:text-white transition-all font-medium mb-10 shadow-[0_0_15px_rgba(37,211,102,0.15)] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
              </svg>
              Escríbeme por WhatsApp
            </a>

            <div className="flex gap-4">
              {[
                { icon: Globe, href: "#" },
                { icon: Mail, href: "mailto:shlwebstudio@gmail.com" },
                { icon: Phone, href: "tel:5529156160" }
              ].map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a 
                    key={idx}
                    href={social.href}
                    className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-shl-secondary hover:text-white hover:border-shl-accent hover:bg-shl-accent/10 transition-all neon-shadow-hover"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm text-shl-secondary font-medium ml-1">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Ej. Jane Doe"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-shl-secondary/50 focus:outline-none focus:border-shl-accent focus:ring-1 focus:ring-shl-accent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="business" className="text-sm text-shl-secondary font-medium ml-1">Nombre de tu Negocio</label>
                <input 
                  type="text" 
                  id="business"
                  name="business"
                  required
                  value={formData.business}
                  onChange={(e) => setFormData(prev => ({ ...prev, business: e.target.value }))}
                  placeholder="Ej. Mi Empresa S.A."
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-shl-secondary/50 focus:outline-none focus:border-shl-accent focus:ring-1 focus:ring-shl-accent transition-all"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-shl-secondary font-medium ml-1">Correo Electrónico</label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="jane@ejemplo.com"
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-shl-secondary/50 focus:outline-none focus:border-shl-accent focus:ring-1 focus:ring-shl-accent transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm text-shl-secondary font-medium ml-1">Mensaje</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  placeholder="Háblanos de tu proyecto..."
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white placeholder-shl-secondary/50 focus:outline-none focus:border-shl-accent focus:ring-1 focus:ring-shl-accent transition-all resize-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <button 
                  type="submit"
                  className="group flex items-center justify-center gap-2 w-full mt-2 bg-shl-accent text-white rounded-xl py-4 font-semibold hover:bg-shl-accent-hover transition-colors neon-shadow"
                >
                  Enviar Mensaje
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
