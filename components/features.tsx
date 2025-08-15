"use client"

import { Wrench, Shield, Users, Cloud } from "lucide-react"

const features = [
  {
    name: "Reparación Correctiva",
    description: "Soluciones rápidas y eficientes para minimizar los tiempos de parada.",
    icon: Wrench,
  },
  {
    name: "Mantenimiento Preventivo",
    description:
      "Evitá fallas costosas y prolongá la vida útil de tus equipos con mantenimientos diseñados para tus operaciones.",
    icon: Shield,
  },
  {
    name: "Familiarización de Equipos",
    description: "Capacitaciones adaptadas a tus operadores y al personal técnico de tu empresa.",
    icon: Users,
  },
  {
    name: "GV Cloud",
    description: "Seguimiento online y trazabilidad completa del historial de mantenimientos de tus equipos.",
    icon: Cloud,
  },
]

export default function Features() {
  return (
    <section id="servicios" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Servicios de Vanguardia</h2>
        <p className="mt-6 text-muted-foreground sm:text-lg leading-relaxed px-4">
          No importa cuán grande o pequeño sea su negocio, GV Servicios está listo para trabajar con usted para llevar
          su negocio al próximo nivel.
        </p>
      </div>
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2">
        {features.map((feature, index) => (
          <div
            key={feature.name}
            className="relative overflow-hidden rounded-lg border bg-background p-8 hover:shadow-lg hover:scale-105 transition-all duration-300 ease-in-out group"
            style={{
              animationDelay: `${index * 150}ms`,
              animation: "fadeInUp 0.6s ease-out forwards",
            }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                <feature.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-bold text-lg">{feature.name}</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
