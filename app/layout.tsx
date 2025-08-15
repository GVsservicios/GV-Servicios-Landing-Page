import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"
import type { Metadata } from "next"
import MouseMoveEffect from "@/components/mouse-move-effect"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "GV Servicios – Mantenimiento de Equipos de Elevación",
  description:
    "Servicios rápidos, confiables y con más de 15 años de experiencia en mantenimiento y reparación de plataformas elevadoras. Atención en menos de 24 horas.",
  keywords:
    "mantenimiento equipos elevación, reparación plataformas elevadoras, servicio técnico Mendoza, GV Servicios, mantenimiento preventivo, reparación correctiva",
  authors: [{ name: "GV Servicios" }],
  creator: "GV Servicios",
  publisher: "GV Servicios",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://gvservicios.com",
    siteName: "GV Servicios",
    title: "GV Servicios – Mantenimiento de Equipos de Elevación",
    description: "Servicios rápidos, confiables y con más de 15 años de experiencia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "GV Servicios - Mantenimiento de Equipos de Elevación",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GV Servicios – Mantenimiento de Equipos de Elevación",
    description: "Servicios rápidos, confiables y con más de 15 años de experiencia.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/logo.svg",
    shortcut: "/logo.svg",
    apple: "/logo.svg",
  },
  manifest: "/site.webmanifest",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground antialiased`}>
        <MouseMoveEffect />
        {children}
      </body>
    </html>
  )
}
