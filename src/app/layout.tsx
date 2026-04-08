import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/layout/Sidebar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VIVER DE IA - Plataforma",
  description: "Plataforma completa de IA para negócios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} h-full`}>
      <body className="min-h-screen bg-[var(--bg-primary)] text-white antialiased">
        <Sidebar />
        <main className="ml-[220px] min-h-screen">{children}</main>
      </body>
    </html>
  );
}
