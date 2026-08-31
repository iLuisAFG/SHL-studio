import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://shlstudio.com"),
  title: "SHL Studio | Agencia Digital & Desarrollo Web de Alto Rendimiento",
  description:
    "Transformamos negocios con sitios web a medida, diseño UI/UX de alto impacto, e-commerce y soluciones digitales optimizadas para máxima conversión.",
  keywords: [
    "SHL Studio",
    "desarrollo web",
    "diseño UI/UX",
    "landing pages",
    "agencia digital",
    "Next.js",
    "React",
    "tiendas online",
    "desarrollo web CDMX",
    "desarrollo web Neza"
  ],
  authors: [{ name: "SHL Studio" }],
  creator: "SHL Studio",
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
  openGraph: {
    title: "SHL Studio | Agencia Digital & Desarrollo Web",
    description:
      "Transformamos negocios con sitios web a medida, diseño UI/UX premium y desarrollo de alto rendimiento.",
    url: "https://shlstudio.com",
    siteName: "SHL Studio",
    images: [
      {
        url: "/logo.jpeg",
        width: 800,
        height: 800,
        alt: "SHL Studio Logo",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo.jpeg" />
      </head>
      <body className="min-h-screen bg-[#07080d] text-slate-100 antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
