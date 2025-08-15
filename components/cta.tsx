import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="border-t">
      <div className="container flex flex-col items-center gap-4 py-24 text-center md:py-32">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          ¿Listo para Evitar tu Próxima Parada?
        </h2>
        <p className="max-w-[48rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Súmate a las empresas líderes que confían en GV Servicios para mantener sus operaciones al máximo rendimiento
          y seguir a la vanguardia del sector.
        </p>
        <Link
          href="https://api.whatsapp.com/send/?phone=5492617757409&text=Hola%2C%20necesito%20un%20servicio%20urgente.&type=phone_number&app_absent=0"
          target="_blank"
          rel="noreferrer"
        >
          <Button size="lg" className="mt-4">
            Solicitar un Servicio Urgente
          </Button>
        </Link>
      </div>
    </section>
  )
}
