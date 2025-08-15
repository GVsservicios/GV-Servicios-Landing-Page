"use client"

import { User, Award, Clock, Users, Wrench } from "lucide-react"

const metrics = [
  {
    icon: Award,
    title: "Certificación IPAF Internacional",
    description: "Estándar global en seguridad y operación de equipos de elevación",
  },
  {
    icon: Clock,
    title: "+15 años de experiencia técnica",
    description: "Historial sólido de resultados y confianza en proyectos industriales y de construcción",
  },
  {
    icon: Users,
    title: "Empresa especializada",
    description: "Compromiso directo con cada cliente, sin intermediarios",
  },
  {
    icon: Wrench,
    title: "Atención técnica directa",
    description: "Soluciones a medida para cada flota y operación",
  },
]

export default function About() {
  return (
    <section id="about" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          El Profesional detrás de GV Servicios
        </h2>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-16 lg:grid-cols-2 items-center justify-items-center">
        {/* Columna izquierda - Avatar */}
        <div className="flex justify-center">
          <div className="relative">
            <div className="h-80 w-80 rounded-full bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center border-4 border-white/20 shadow-2xl">
              <User className="h-32 w-32 text-primary/60" />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 blur-xl -z-10" />
          </div>
        </div>

        {/* Columna derecha - Contenido */}
        <div className="space-y-8 max-w-xl">
          <div>
            <h3 className="text-2xl font-bold mb-6">Sobre mí</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Soy <span className="font-semibold text-foreground">Gonzalo Vergara</span>, técnico con certificación
                IPAF con más de 15 años de experiencia en mantenimiento y reparación de plataformas elevadoras y equipos
                Haulotte. Como responsable y rostro principal de GV Servicios, acompaño personalmente cada etapa del
                servicio, desde el diagnóstico inicial hasta la entrega del equipo listo para trabajar.
              </p>
              <p>
                GV Servicios es una empresa familiar comprometida con la seguridad, la eficiencia y el trato humano. En
                cada proyecto, combino la trayectoria técnica con la atención personalizada que nos caracteriza como
                familia.
              </p>
              <p>
                Mi objetivo es que cada cliente encuentre en GV Servicios un aliado de confianza y un servicio
                profesional, ágil y transparente.
              </p>
            </div>
          </div>

          {/* Métricas destacadas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metrics.map((metric, index) => (
              <div
                key={metric.title}
                className="p-4 rounded-lg border bg-background/50 hover:bg-background/80 transition-colors duration-300"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: "fadeInUp 0.6s ease-out forwards",
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                    <metric.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{metric.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{metric.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
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
