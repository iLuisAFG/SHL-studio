"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageSquare,
  Send,
  Sparkles,
  CheckCircle2,
  Clock,
  MapPin,
  ExternalLink,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "Desarrollo Web a Medida",
    message: "",
  });

  const [submitted, setSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare WhatsApp URL with prefilled text
    const text = `¡Hola SHL Studio! Me gustaría cotizar un proyecto:%0A%0A*Nombre:* ${encodeURIComponent(
      formData.name,
    )}%0A*Email:* ${encodeURIComponent(
      formData.email,
    )}%0A*Teléfono:* ${encodeURIComponent(
      formData.phone || "No especificado",
    )}%0A*Servicio:* ${encodeURIComponent(
      formData.service,
    )}%0A*Detalles:* ${encodeURIComponent(formData.message)}`;

    const whatsappUrl = `https://wa.me/525529156160?text=${text}`;

    setSubmitted(true);

    // Open WhatsApp in new tab
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <section
      id="contacto"
      className="py-24 sm:py-32 relative bg-[#07080d] overflow-hidden"
    >
      {/* Dynamic Glow Elements */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold tracking-wider uppercase mb-4"
          >
            <Sparkles className="size-3.5" />
            Hablemos de tu Proyecto
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5"
          >
            ¿Listo para llevar tu marca al{" "}
            <span className="text-gradient-accent">siguiente nivel?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-slate-400 leading-relaxed"
          >
            Cuéntanos qué necesitas. Te responderemos en menos de 24 horas con
            una propuesta clara, detallada y adaptada a tu presupuesto.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-[#0d111c]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-3">
                Canales de Atención Directa
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-8">
                Prefieres una respuesta inmediata? Escríbenos directamente por
                WhatsApp o correo electrónico.
              </p>

              <div className="space-y-4">
                {/* WhatsApp Button Card */}
                <a
                  href="https://wa.me/525529156160"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/50 hover:bg-emerald-500/15 transition-all duration-300 group cursor-pointer"
                >
                  <div className="size-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <MessageSquare className="size-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block">
                      WhatsApp Directo
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors">
                      +52 55 2915 6160
                    </span>
                  </div>
                  <ExternalLink className="size-4 text-emerald-400 group-hover:translate-x-1 transition-transform" />
                </a>

                {/* Email Card */}
                <a
                  href="mailto:shlwebstudio@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-blue-500/10 border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-500/15 transition-all duration-300 group cursor-pointer"
                >
                  <div className="size-12 rounded-xl bg-blue-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="size-6" />
                  </div>
                  <div className="flex-1">
                    <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider block">
                      Correo Electrónico
                    </span>
                    <span className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors break-all">
                      shlwebstudio@gmail.com
                    </span>
                  </div>
                  <ExternalLink className="size-4 text-cyan-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Extras */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-3 text-xs text-slate-400">
                <div className="flex items-center gap-2.5">
                  <Clock className="size-4 text-cyan-400" />
                  <span>Horario de atención: Lunes a Sábado, 9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <MapPin className="size-4 text-cyan-400" />
                  <span>Atención en México y Proyectos Globales Remotos</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-emerald-400" />
                  <span>Cotización inicial 100% gratuita y sin compromiso</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl bg-[#0d111c]/90 border border-white/10 shadow-2xl backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-2">
                Envíanos los Detalles de tu Proyecto
              </h3>
              <p className="text-sm text-slate-400 mb-8">
                Completa este breve formulario y te contactaremos por WhatsApp o
                correo a la brevedad.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="size-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="size-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    ¡Mensaje listo para enviar!
                  </h4>
                  <p className="text-sm text-slate-300">
                    Se abrirá la ventana de WhatsApp con tu mensaje. Si no se
                    abrió automáticamente, puedes hacer clic aquí:
                  </p>
                  <a
                    href={`https://wa.me/525529156160?text=${encodeURIComponent(
                      `Hola SHL Studio, mi nombre es ${formData.name} y deseo cotizar: ${formData.service}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-sm transition-all"
                  >
                    <MessageSquare className="size-4" />
                    Abrir WhatsApp Directamente
                  </a>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Carlos Mendoza"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="carlos@empresa.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="Ej. 55 1234 5678"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                        Servicio de Interés
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl bg-[#0d111c] border border-white/10 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm cursor-pointer"
                      >
                        <option value="Desarrollo Web a Medida">
                          Desarrollo Web a Medida
                        </option>
                        <option value="Landing Page de Alta Conversión">
                          Landing Page de Alta Conversión
                        </option>
                        <option value="Rediseño & UI/UX Pro Max">
                          Rediseño & UI/UX Pro Max
                        </option>
                        <option value="E-Commerce & Menú Digital">
                          E-Commerce & Menú Digital
                        </option>
                        <option value="Placas NFC & Conexión Rápida">
                          Placas NFC & Conexión Rápida
                        </option>
                        <option value="Mantenimiento & Optimización SEO">
                          Mantenimiento & Optimización SEO
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                      ¿Qué objetivos tienes para tu proyecto? *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Cuéntanos sobre tu negocio, qué funcionalidades necesitas o si ya cuentas con alguna referencia de diseño..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-sm resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold text-sm shadow-xl shadow-blue-500/25 hover:shadow-cyan-500/35 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
                  >
                    <Send className="size-4 group-hover:translate-x-1 transition-transform" />
                    <span>Enviar y Cotizar por WhatsApp</span>
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
