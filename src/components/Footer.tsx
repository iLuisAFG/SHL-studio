import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-12 bg-shl-background relative overflow-hidden">
      {/* Subtle glow in footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-lg h-24 bg-shl-accent/5 blur-[80px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-shl-secondary text-sm">
          &copy; {currentYear} SHL Studio. Todos los derechos reservados.
        </div>

        <Link href="/" className="font-mono font-bold text-xl tracking-[0.3em] text-white/80 hover:text-white transition-colors">
          <span className="text-shl-accent/50">&lt;</span> S T U D I O <span className="text-shl-accent/50">/&gt;</span>
        </Link>
        
      </div>
    </footer>
  );
}
