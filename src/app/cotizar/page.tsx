"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, LayoutTemplate, Layers, ShoppingCart, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const projectTypes = [
  {
    id: "landing",
    title: "Landing Page",
    description: "Una página de alto impacto enfocada en un solo objetivo. Ideal para captar clientes, promocionar un servicio o campañas de publicidad.",
    icon: LayoutTemplate
  },
  {
    id: "corporativo",
    title: "Sitio Web Corporativo",
    description: "Múltiples secciones (Inicio, Nosotros, Servicios, Contacto). Ideal para negocios establecidos que buscan presencia profesional completa.",
    icon: Layers
  },
  {
    id: "ecommerce",
    title: "Tienda Online (E-commerce)",
    description: "Catálogo de productos con carrito de compras y pasarela de pagos. Todo lo necesario para vender en línea de forma segura.",
    icon: ShoppingCart
  }
];

export default function CotizarPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    negocio: "",
    tipoProyecto: "",
    detalles: ""
  });
  const [error, setError] = useState("");

  const handleSelectType = (id: string) => {
    setFormData(prev => ({ ...prev, tipoProyecto: id }));
    setError(""); // clear error on selection
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validations
    if (!formData.nombre.trim()) {
      setError("Por favor, ingresa tu nombre.");
      return;
    }
    if (!formData.negocio.trim()) {
      setError("Por favor, ingresa el nombre de tu negocio.");
      return;
    }
    if (!formData.tipoProyecto) {
      setError("Por favor, selecciona un tipo de proyecto.");
      return;
    }

    const selectedType = projectTypes.find(t => t.id === formData.tipoProyecto)?.title || "";

    // Build WhatsApp message
    const mensaje = `¡Hola equipo de SHL Studio! Mi nombre es ${formData.nombre.trim()} y escribo de parte de ${formData.negocio.trim()}. Me interesa cotizar un(a) ${selectedType}. Detalles adicionales: ${formData.detalles.trim() || "Ninguno por el momento."}`;
    
    const mensajeCodificado = encodeURIComponent(mensaje);
    const waUrl = `https://wa.me/525529156160?text=${mensajeCodificado}`;

    window.open(waUrl, '_blank');
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6">
        
        {/* Glow background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-shl-accent/5 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl w-full relative z-10"
        >
          <Link href="/" className="inline-flex items-center text-shl-secondary hover:text-white transition-colors mb-8 group font-medium">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> Volver al Inicio
          </Link>

          <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-xl shadow-2xl">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Cuéntanos sobre tu <span className="text-shl-accent">Proyecto</span>
            </h1>
            <p className="text-shl-secondary text-lg mb-10">
              Completa este breve formulario y prepararemos una propuesta a la medida de tus necesidades.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-10">
              
              {/* Datos Básicos */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-white ml-1">Tu Nombre *</label>
                  <input 
                    type="text" 
                    id="nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                    placeholder="Ej. Alan Turing"
                    className="bg-shl-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-shl-accent focus:ring-1 focus:ring-shl-accent transition-all"
                  />
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="negocio" className="text-sm font-medium text-white ml-1">Nombre de tu Negocio/Empresa *</label>
                  <input 
                    type="text" 
                    id="negocio"
                    value={formData.negocio}
                    onChange={(e) => setFormData({...formData, negocio: e.target.value})}
                    placeholder="Ej. Pied piper"
                    className="bg-shl-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-shl-accent focus:ring-1 focus:ring-shl-accent transition-all"
                  />
                </div>
              </div>

              {/* Tipo de Proyecto (Selectable Cards) */}
              <div className="flex flex-col gap-4">
                <label className="text-sm font-medium text-white ml-1">¿Qué tipo de proyecto tienes en mente? *</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {projectTypes.map((type) => {
                    const Icon = type.icon;
                    const isSelected = formData.tipoProyecto === type.id;
                    
                    return (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => handleSelectType(type.id)}
                        className={`flex flex-col text-left p-6 rounded-2xl border transition-all duration-300 ${
                          isSelected 
                            ? "bg-shl-accent/10 border-shl-accent shadow-[0_0_20px_rgba(37,99,235,0.2)] scale-[1.02]" 
                            : "bg-shl-background border-white/10 hover:border-shl-accent/50 hover:bg-white/5"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${isSelected ? "bg-shl-accent text-white" : "bg-white/5 text-shl-secondary"}`}>
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className={`font-semibold text-lg mb-2 ${isSelected ? "text-white" : "text-gray-300"}`}>{type.title}</h3>
                        <p className={`text-sm leading-relaxed ${isSelected ? "text-gray-300" : "text-shl-secondary"}`}>
                          {type.description}
                        </p>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Detalles Adicionales */}
              <div className="flex flex-col gap-2">
                <label htmlFor="detalles" className="text-sm font-medium text-white ml-1">Detalles Adicionales</label>
                <textarea 
                  id="detalles"
                  rows={5}
                  value={formData.detalles}
                  onChange={(e) => setFormData({...formData, detalles: e.target.value})}
                  placeholder="Cuéntanos un poco más sobre tu idea, referentes que te gusten o funciones especiales que necesites..."
                  className="bg-shl-background border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-shl-accent focus:ring-1 focus:ring-shl-accent transition-all resize-none"
                />
              </div>

              {error && (
                <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-xl text-red-400 text-sm font-medium">
                  {error}
                </div>
              )}

              {/* Submit Button */}
              <button 
                type="submit"
                className="group flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-none mx-auto bg-[#25D366] text-white rounded-xl py-4 sm:py-5 px-4 font-semibold text-base sm:text-lg hover:bg-[#20bd5a] transition-colors shadow-[0_0_15px_rgba(37,211,102,0.3)] hover:shadow-[0_0_25px_rgba(37,211,102,0.5)]"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                <span className="text-center leading-tight">Enviar Proyecto a WhatsApp</span>
                <Send className="w-5 h-5 shrink-0 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </motion.div>
      </main>
      <Footer />
    </>
  );
}
