"use client"

import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Méndez",
    position: "Gerente de Operaciones",
    company: "Constructora Andina S.R.L.",
    testimonial:
      "Desde que trabajamos con GV Servicios, las paradas inesperadas se redujeron al mínimo. Además, la capacitación a nuestro personal técnico marcó una gran diferencia en la operación diaria.",
    initial: "C",
  },
  {
    name: "Lucía Pereyra",
    position: "Jefa de Mantenimiento",
    company: "Alturas Seguras S.A.",
    testimonial:
      "El plan GV Predict nos permitió anticiparnos a fallas antes de que ocurran. El seguimiento y las alertas son precisos, y el soporte técnico es impecable.",
    initial: "L",
  },
  {
    name: "Jorge Ramírez",
    position: "Supervisor de Obra",
    company: "Edificaciones del Oeste",
    testimonial:
      "La rapidez de respuesta y el profesionalismo del equipo de GV Servicios nos dieron tranquilidad incluso en los momentos más críticos de la obra.",
    initial: "J",
  },
]

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="container space-y-16 py-24 md:py-32 bg-gradient-to-b from-background to-muted/20"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Clientes que confían en nosotros</h2>
        <p className="mt-6 text-muted-foreground sm:text-lg leading-relaxed px-4">
          GV Servicios ha permitido a cientos de empresas potenciar sus rentabilidades mediante la rápida intervención y
          arreglo de sus equipos. Descubra nuestros casos de éxito:
        </p>
      </div>
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.name}
            className="relative overflow-hidden rounded-xl border border-white/20 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-sm p-8 hover:shadow-xl hover:scale-105 transition-all duration-500 ease-out group"
            style={{
              animationDelay: `${index * 200}ms`,
              animation: "fadeInUp 0.8s ease-out forwards",
            }}
          >
            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial */}
              <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.testimonial}"
              </blockquote>

              {/* Client info */}
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-primary to-accent text-white font-bold text-lg">
                  {testimonial.initial}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  <div className="text-sm text-muted-foreground font-medium">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
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
