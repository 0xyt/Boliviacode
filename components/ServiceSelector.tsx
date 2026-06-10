'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from './ScrollReveal'
import type { Step } from '@/lib/types'

const physicalSteps: Step[] = [
  { step: '01', title: 'Nos cuentas tu historia', desc: 'Por WhatsApp o formulario. Qué quieres decir, a quién, por qué.' },
  { step: '02', title: 'Creamos tu carta', desc: 'Diseño único, caligrafía o tipografía elegante, papel premium.' },
  { step: '03', title: 'La entregamos', desc: 'En sobre lacrado. Envíos a toda Bolivia con cuidado de joya.' },
  { step: '04', title: 'Generas un recuerdo', desc: 'Esa carta se guardará por años. Un objeto con alma.' },
]

const digitalSteps: Step[] = [
  { step: '01', title: 'Cuéntanos tu proyecto', desc: 'Por WhatsApp o formulario. ¿Qué necesitas? ¿Para cuándo? ¿Cuál es tu idea?' },
  { step: '02', title: 'Recibes propuesta y cotización', desc: 'Te enviamos diseño, alcance y precio en 24-48 horas, sin compromiso.' },
  { step: '03', title: 'Desarrollamos en 5-10 días', desc: 'Tecnología moderna, diseño responsive, y revisión continua contigo.' },
  { step: '04', title: 'Entregamos y capacitamos', desc: 'Te damos acceso, te enseñamos a usarlo y te apoyamos post-entrega.' },
]

export default function ServiceSelector() {
  const [active, setActive] = useState<'fisico' | 'digital'>('fisico')

  const steps = active === 'fisico' ? physicalSteps : digitalSteps

  return (
    <section className="py-24 bg-paper relative">
      <div className="container-premium">
        <ScrollReveal>
          <h2 className="heading-serif text-center text-4xl">Así de simple funciona</h2>
          <div className="flex justify-center mt-8">
            <div className="inline-flex bg-accent-light/10 rounded-full p-1 gap-1">
              <button
                onClick={() => setActive('fisico')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === 'fisico'
                    ? 'bg-accent text-paper shadow-md'
                    : 'text-ink/60 hover:text-ink'
                }`}
              >
                Productos físicos
              </button>
              <button
                onClick={() => setActive('digital')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === 'digital'
                    ? 'bg-accent text-paper shadow-md'
                    : 'text-ink/60 hover:text-ink'
                }`}
              >
                Servicios digitales
              </button>
            </div>
          </div>
        </ScrollReveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-4 gap-8 mt-16"
          >
            {steps.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="text-center group">
                  <div className="text-6xl font-serif text-accent-light/30 group-hover:text-accent/50 transition-colors">
                    {item.step}
                  </div>
                  <h3 className="font-serif text-xl mt-4">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink/70">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
