import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Instagram } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-2xl items-center">
        <Link href="/" className="mr-8 flex items-center space-x-0.5">
          <Image src="/logo.svg" alt="Logo" width={48} height={48} className="h-12 w-12" />
          <span className="text-lg font-bold">Servicios</span>
        </Link>
        <nav className="flex flex-1 items-center space-x-6 text-sm font-medium">
          <Link href="#servicios" className="transition-colors hover:text-primary">
            Soluciones
          </Link>
          <Link href="#testimonios" className="transition-colors hover:text-primary">
            Opiniones
          </Link>
          <Link href="#about" className="transition-colors hover:text-primary">
            ¿Por qué GV?
          </Link>
          <Link href="#faq" className="transition-colors hover:text-primary">
            FAQ
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="https://www.instagram.com/gvservicios.cuyo/" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Button>
          </Link>
          <Link href="https://tally.so/r/nr4olo" target="_blank" rel="noreferrer">
            <Button variant="ghost" size="sm">
              Contacto
            </Button>
          </Link>
          <Link
            href="https://api.whatsapp.com/send/?phone=5492617757409&text=Hola%2C%20necesito%20agendar%20un%20diagn%C3%B3stico.&type=phone_number&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <Button size="sm" className="whitespace-nowrap">
              Agendar Diagnóstico
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
