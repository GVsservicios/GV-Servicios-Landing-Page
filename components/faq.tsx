"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "¿Qué tipo de equipos atiende GV Servicios?",
    answer:
      "Atendemos plataformas elevadoras, brazos articulados, tijeras hidráulicas/eléctricas, autoelevadores y manipuladores telescópicos.",
  },
  {
    question: "¿El diagnóstico tiene costo?",
    answer:
      "El diagnóstico es gratuito si se acepta el presupuesto de reparación. Si no se realiza la reparación, se cobra solo el diagnóstico.",
  },
  {
    question: "¿Cuánto tarda el servicio técnico?",
    answer: "La atención estándar es en menos de 24 horas hábiles.",
  },
  {
    question: "¿Puedo acceder al historial de mantenimiento de mis equipos?",
    answer:
      "Sí, todos los clientes tienen acceso a GV Cloud para consultar historial de fallas, reparaciones y mantenimientos realizados.",
  },
  {
    question: "¿Ofrecen capacitaciones para el personal gratuitas?",
    answer:
      "Sí, los clientes que cuentan con más de 6 meses consecutivos de servicios recurrentes reciben capacitaciones técnicas gratuitas, presenciales y adaptadas a sus operarios y encargados, para optimizar el uso y mantenimiento de sus equipos.",
  },
  {
    question: "¿Cuentan con una Newsletter propia?",
    answer:
      "Sí contamos con una Newsletter gratuita para todos nuestros clientes en donde reciben recomendaciones, noticias del sector, temas relevantes y casos de éxito técnicos.",
  },
  {
    question: "¿Se pueden recibir reportes de ahorro, rentabilidad y paradas evitadas?",
    answer:
      "Sí, si se solicitan se les entrega semestral o trimestralmente informes, con indicadores de valor claros y amigables.",
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="container space-y-16 py-24 md:py-32">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-5xl">Preguntas Frecuentes</h2>
        <p className="mt-6 text-muted-foreground sm:text-lg leading-relaxed px-4">
          Encuentra respuestas a las consultas más comunes sobre nuestros servicios de mantenimiento y reparación.
        </p>
      </div>

      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="rounded-lg border bg-background/50 backdrop-blur-sm transition-all duration-300 hover:shadow-md"
            style={{
              animationDelay: `${index * 100}ms`,
              animation: "fadeInUp 0.6s ease-out forwards",
            }}
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-muted/50"
              aria-expanded={openIndex === index}
              aria-controls={`faq-answer-${index}`}
            >
              <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
              <div className="flex-shrink-0">
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-primary transition-transform duration-200" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-muted-foreground transition-transform duration-200" />
                )}
              </div>
            </button>
            <div
              id={`faq-answer-${index}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        ))}
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
