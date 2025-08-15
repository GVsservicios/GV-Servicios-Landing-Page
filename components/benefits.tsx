"use client"

import { BarChart, Shield, Zap, Check } from "lucide-react"

const benefits = [
  {
    metric: "25%",
    title: "Horas de trabajo recuperadas",
    icon: BarChart,
    items: [
      "Diagnósticos rápidos y precisos",
      "Reparaciones eficientes",
      "Menor tiempo de inactividad",
      "Optimización de recursos",
    ],
    featured: false,
  },
  {
    metric: "40%",
    title: "Paradas evitadas",
    icon: Shield,
    items: [
      "Mantenimiento preventivo programado",
      "Detección temprana de fallas",
      "Monitoreo continuo GV Cloud",
      "Alertas predictivas avanzadas",
    ],
    featured: true,
  },
  {
    metric: "15%",
    title: "Costos operativos reducidos",
    icon: Zap,
    items: [
      "Menor gasto en reparaciones de emergencia",
      "Extensión de vida útil de equipos",
      "Eficiencia energética mejorada",
      "Reducción de costos de reemplazo",
    ],
    featured: false,
  },
]

const stats = [
  { value: "24h", label: "Tiempo máximo de respuesta" },
  { value: "95%", label: "Tasa de resolución en primera visita" },
  { value: "17+", label: "Equipos bajo mantenimiento" },
]

export default function Benefits() {
  return (
    <section className="container space-y-20 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center space-y-4">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Beneficios claros y medibles</h2>
        <p className="text-muted-foreground sm:text-lg leading-relaxed px-4">
          Descubrí cómo GV Servicios impacta directamente en las operaciones de uno de nuestros clientes.
        </p>
      </div>

      {/* Cards principales */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className={`relative overflow-hidden rounded-xl bg-gradient-to-b from-background to-muted/10 backdrop-blur p-8 transition-all duration-500 ease-out hover:shadow-xl ${
              benefit.featured
                ? "border-2 border-primary shadow-lg scale-105"
                : "border border-border/40 shadow-md hover:scale-105"
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "fadeInUp 0.6s ease-out forwards",
            }}
          >
            {/* Badge para card destacada */}
            {benefit.featured && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                Más Destacado
              </div>
            )}

            {/* Ícono circular */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 mb-6">
              <benefit.icon className="h-6 w-6 text-primary" />
            </div>

            {/* Métrica destacada */}
            <div className="mb-4">
              <div className="text-4xl font-bold text-primary mb-2">{benefit.metric}</div>
              <h3 className="text-xl font-bold text-foreground">{benefit.title}</h3>
            </div>

            {/* Lista de beneficios */}
            <ul className="space-y-3">
              {benefit.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-start gap-3">
                  <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Sección de estadísticas inferiores */}
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-bold text-foreground">Impacto Real en su Operación</h3>
          <p className="text-muted-foreground leading-relaxed">
            Promedio de mejoras que nuestro cliente experimentó después de implementar nuestros servicios durante unos 6
            meses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{
                animationDelay: `${(index + 3) * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground leading-relaxed">{stat.label}</div>
            </div>
          ))}
        </div>
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
