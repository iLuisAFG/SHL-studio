"use client";

import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Globe, MessageCircle, Users, Camera, Video, ShoppingCart } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

const nfcProducts = [
  {
    id: "maps",
    name: "Placa NFC Google Maps",
    description: "Consigue más reseñas de 5 estrellas al instante. Tus clientes solo acercan su teléfono y los redirige directo a tu perfil de Google.",
    price: "$399 MXN",
    icon: MapPin,
    imagePlaceholder: "maps-placeholder",
    color: "text-blue-500",
  },
  {
    id: "web",
    name: "Placa NFC Sitio Web",
    description: "Lleva tráfico directo a tu tienda en línea, menú digital o página de aterrizaje sin necesidad de escanear códigos QR.",
    price: "$399 MXN",
    icon: Globe,
    imagePlaceholder: "web-placeholder",
    color: "text-emerald-500",
  },
  {
    id: "whatsapp",
    name: "Placa NFC WhatsApp",
    description: "Inicia conversaciones de venta al instante. El cliente acerca su móvil y se abre un chat de WhatsApp directo con tu negocio.",
    price: "$399 MXN",
    icon: MessageCircle,
    imagePlaceholder: "wa-placeholder",
    color: "text-green-500",
  },
  {
    id: "instagram",
    name: "Placa NFC Instagram",
    description: "Aumenta tus seguidores orgánicamente. Un toque y tus clientes estarán viendo tu perfil listos para seguirte.",
    price: "$399 MXN",
    icon: Camera,
    imagePlaceholder: "ig-placeholder",
    color: "text-pink-500",
  },
  {
    id: "facebook",
    name: "Placa NFC Facebook",
    description: "Gana 'Me gusta' y visibilidad en tu Fanpage local de forma rápida y sencilla en tu mostrador o mesas.",
    price: "$399 MXN",
    icon: Users,
    imagePlaceholder: "fb-placeholder",
    color: "text-blue-600",
  },
  {
    id: "tiktok",
    name: "Placa NFC TikTok",
    description: "Haz crecer tu comunidad en TikTok. Ideal para restaurantes y negocios aesthetic donde la gente quiere ver tu contenido.",
    price: "$399 MXN",
    icon: Video, // Close enough to TikTok
    imagePlaceholder: "tiktok-placeholder",
    color: "text-white",
  },
];

export default function PlacasNFC() {
  const handleBuy = (productName: string) => {
    const text = `¡Hola SHL Studio! Me interesa adquirir la "${productName}". ¿Podrían darme más información para la compra?`;
    const whatsappUrl = `https://wa.me/525529156160?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <main className="min-h-screen bg-shl-background text-white selection:bg-shl-accent/30 selection:text-shl-accent">
      <Navbar />

      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Decorative blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-shl-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-shl-accent/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-shl-secondary hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>

          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mb-6"
            >
              Tecnología que <span className="text-shl-accent">Conecta</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-shl-secondary"
            >
              Placas inteligentes NFC para negocios. Haz que tus clientes interactúen con tu marca con un solo toque, sin descargar apps ni usar la cámara.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {nfcProducts.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl overflow-hidden hover:border-shl-accent/50 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] transition-all group flex flex-col"
                >
                  {/* Image Placeholder */}
                  <div className="h-64 w-full bg-black/40 relative flex items-center justify-center border-b border-white/5 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10" />
                    
                    {/* Placeholder content until actual images are provided */}
                    <div className="relative z-20 flex flex-col items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity group-hover:scale-110 duration-500">
                       <Icon className={`w-24 h-24 mb-4 ${product.color}`} />
                       <span className="text-sm font-medium tracking-widest uppercase text-white/50 border border-white/20 px-3 py-1 rounded-full">Espacio para Imagen</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold mb-3 flex items-center gap-3">
                      {product.name}
                    </h3>
                    <p className="text-shl-secondary mb-8 flex-grow">
                      {product.description}
                    </p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-xl font-bold text-white">{product.price}</span>
                      <button 
                        onClick={() => handleBuy(product.name)}
                        className="flex items-center gap-2 bg-shl-accent text-white px-5 py-2.5 rounded-xl font-medium hover:bg-shl-accent-hover transition-colors shadow-lg shadow-shl-accent/20"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Comprar
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Call to action for custom plates */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 p-10 bg-gradient-to-br from-shl-accent/20 to-transparent border border-shl-accent/30 rounded-3xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4">¿Necesitas un diseño personalizado?</h2>
            <p className="text-shl-secondary max-w-2xl mx-auto mb-8">
              Podemos imprimir tu logotipo y programar la placa para que redirija a donde tú necesites: linktrees, menús PDF en Drive, o sitios corporativos.
            </p>
            <button 
              onClick={() => handleBuy("Placa NFC Personalizada")}
              className="inline-block px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors shadow-xl"
            >
              Cotizar Placa Personalizada
            </button>
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
