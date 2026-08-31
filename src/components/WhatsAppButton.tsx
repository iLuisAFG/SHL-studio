"use client";

import * as React from "react";
import { MessageSquare } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <aside aria-label="Contacto flotante" className="fixed bottom-6 right-6 z-40 group">
      <a
        href="https://wa.me/525529156160?text=Hola%20SHL%20Studio,%20me%20gustar%C3%ADa%20solicitar%20informes%20y%20cotizar%20un%20proyecto."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar por WhatsApp"
        className="relative flex items-center justify-center size-14 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-2xl shadow-emerald-500/40 hover:scale-110 hover:shadow-emerald-500/60 transition-all duration-300 cursor-pointer"
      >
        {/* Pulsing ring */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />

        <MessageSquare className="size-7 relative z-10" />
      </a>

      {/* Floating tooltip on desktop */}
      <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden sm:block pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-neutral-900/95 text-white border border-white/10 text-xs px-3.5 py-1.5 rounded-xl shadow-xl whitespace-nowrap">
        ¡Cotiza por WhatsApp en directo!
      </div>
    </aside>
  );
}
