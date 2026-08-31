"use client";

import * as React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { Home, Compass, Sparkles, ArrowLeft } from "lucide-react";

export function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#07080d] p-4">
      {/* Ambient background glow elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-blue-600/20 via-cyan-500/15 to-indigo-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      <Empty className="max-w-xl w-full border border-white/10 bg-[#0d111c]/80 backdrop-blur-2xl shadow-2xl relative z-10">
        <EmptyHeader>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-2">
            <Sparkles className="size-3.5" />
            Error 404 • Página No Encontrada
          </div>

          <EmptyTitle className="font-extrabold text-8xl sm:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-cyan-500/30 drop-shadow-[0_0_40px_rgba(56,189,248,0.25)] select-none">
            404
          </EmptyTitle>

          <EmptyDescription className="text-slate-300 text-sm sm:text-base font-normal max-w-sm mt-2">
            La página que buscas no existe o ha sido movida a otra dirección.
          </EmptyDescription>
        </EmptyHeader>

        <EmptyContent className="mt-4">
          <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
            <Button asChild variant="default" className="w-full sm:w-auto">
              <Link href="/">
                <Home className="size-4 mr-2" />
                Volver al Inicio
              </Link>
            </Button>

            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href="/#portafolio">
                <Compass className="size-4 mr-2" />
                Ver Portafolio
              </Link>
            </Button>
          </div>
        </EmptyContent>
      </Empty>
    </div>
  );
}

export default NotFound;
