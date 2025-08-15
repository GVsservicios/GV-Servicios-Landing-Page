import Link from "next/link"
import { Mail, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-8 py-8 md:flex-row md:py-12">
        <div className="flex-1 space-y-4">
          <div className="flex items-center space-x-0.5">
            <Image src="/logo.svg" alt="GV Servicios Logo" width={40} height={40} className="h-10 w-10" />
            <h2 className="font-bold">GV Servicios</h2>
          </div>
          <p className="text-sm text-muted-foreground">Soluciones de mantenimiento adaptadas a tus necesidades.</p>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Soluciones</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#servicios" className="text-muted-foreground transition-colors hover:text-primary">
                  Reparación Correctiva
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground transition-colors hover:text-primary">
                  Mantenimiento Preventivo
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground transition-colors hover:text-primary">
                  Familiarización de Equipos
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground transition-colors hover:text-primary">
                  GV Cloud
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-sm font-medium">Empresa</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground transition-colors hover:text-primary">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#testimonios" className="text-muted-foreground transition-colors hover:text-primary">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#servicios" className="text-muted-foreground transition-colors hover:text-primary">
                  Servicios
                </Link>
              </li>
              <li>
                <Link
                  href="https://api.whatsapp.com/send/?phone=5492617757409&text=Hola%2C%20necesito%20informaci%C3%B3n.&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4 col-span-2 sm:col-span-1">
            <h3 className="text-sm font-medium">Conecta con Nosotros</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/gvservicios.cuyo/"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
                aria-label="Síguenos en Instagram"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=gvserviciosinfo@gmail.com&su=Cotizaci%C3%B3n+de+Servicios"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
                aria-label="Envíanos un email"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Gmail</span>
              </Link>
              <Link
                href="https://www.linkedin.com/company/gv-servicios/"
                className="text-muted-foreground transition-colors hover:text-primary"
                target="_blank"
                rel="noreferrer"
                aria-label="Conéctate en LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container border-t py-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} GV Servicios. Todos los Derechos Reservados.
        </p>
      </div>
    </footer>
  )
}
