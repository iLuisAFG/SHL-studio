import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SHL Studio | Sitios web que impulsan negocios",
  description: "Agencia de diseño web. Creamos sitios web que impulsan negocios. Desarrollo Móvil, Diseño Web, Alcance Global.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="antialiased min-h-screen flex flex-col selection:bg-shl-accent selection:text-white">
        {children}
      </body>
    </html>
  );
}
