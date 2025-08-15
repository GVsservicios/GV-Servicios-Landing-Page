import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="container flex min-h-[calc(100vh-4rem)] max-w-screen-2xl flex-col items-center justify-center space-y-8 py-24 text-center md:py-32">
      <div className="space-y-6">
        <h1 className="bg-gradient-to-br from-foreground from-30% via-foreground/90 to-foreground/70 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
          Mantené tu obra en movimiento,
          <br />
          <span className="text-muted-foreground">sin paradas innecesarias</span>
        </h1>
        <p className="mx-auto max-w-4xl leading-relaxed text-muted-foreground sm:text-xl sm:leading-8 px-4">
          La solución integral en mantenimiento y reparación de equipos de elevación. Atención experta en menos de 24
          horas, diagnósticos precisos y resultados medibles.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <Link
          href="https://api.whatsapp.com/send/?phone=5492617757409&text=Hola%2C%20necesito%20agendar%20un%20diagn%C3%B3stico.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" className="px-8 py-6 text-base">
            <MessageCircle className="mr-2 h-5 w-5" />
            Hablar por WhatsApp
          </Button>
        </Link>
        <Link
          href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=gvserviciosinfo@gmail.com&su=Cotizaci%C3%B3n+de+Servicios"
          target="_blank"
          rel="noreferrer"
        >
          <Button variant="outline" size="lg" className="px-8 py-6 text-base bg-transparent">
            <Mail className="mr-2 h-5 w-5" />
            Cotizar Diagnóstico por Gmail
          </Button>
        </Link>
      </div>
    </section>
  )
}
