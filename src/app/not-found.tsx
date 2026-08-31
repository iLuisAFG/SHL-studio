import { NotFound } from "@/components/ui/not-found-2";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Página No Encontrada | SHL Studio",
  description: "La página que buscas no existe o ha sido trasladada.",
};

export default function NotFoundPage() {
  return <NotFound />;
}
