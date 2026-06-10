'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Sparkle, Monitor, Smartphone, QrCode, DollarSign } from 'lucide-react'
import ScrollReveal from './ScrollReveal'

const pricesBs = [
  {
    icon: Sparkles,
    title: 'Dedicatoria animada',
    price: '50',
    desc: 'Una animación personalizada con Canvas, texto animado y efectos visuales.',
    features: ['Animación única', 'Responsive', 'Código fuente incluido', 'Entrega en 48h'],
    cta: 'https://wa.me/59170000000?text=Hola!%20Quiero%20una%20dedicatoria%20animada%20desde%2050%20Bs',
  },
  {
    icon: Monitor,
    title: 'Página web',
    price: '300',
    desc: 'Landing page o web institucional moderna, rápida y optimizada.',
    features: ['Diseño responsive', 'SEO básico', 'Formulario de contacto', 'Hosting 1 mes gratis'],
    cta: 'https://wa.me/59170000000?text=Hola!%20Quiero%20una%20p%C3%A1gina%20web%20desde%20300%20Bs',
  },
  {
    icon: Smartphone,
    title: 'Catálogo digital',
    price: '150',
    desc: 'Catálogo interactivo con galería de productos y WhatsApp integrado.',
    features: ['Hasta 50 productos', 'Fotos y precios', 'WhatsApp directo', 'Actualizable'],
    cta: 'https://wa.me/59170000000?text=Hola!%20Quiero%20un%20cat%C3%A1logo%20digital%20desde%20150%20Bs',
  },
  {
    icon: QrCode,
    title: 'Menú QR',
    price: '100',
    desc: 'Menú digital interactivo para restaurantes. Escanean y piden.',
    features: ['Categorías y fotos', 'Enlace a WhatsApp', 'QR impreso incluido', 'Listo en 3 días'],
    cta: 'https://wa.me/59170000000?text=Hola!%20Quiero%20un%20men%C3%BA%20digital%20QR%20desde%20100%20Bs',
  },
]

const pricesUsd = [
  { ...pricesBs[0], price: '6' },
  { ...pricesBs[1], price: '40' },
  { ...pricesBs[2], price: '20' },
  { ...pricesBs[3], price: '12' },
]

export default function PriceSection() {
  const [currency, setCurrency] = useState<'bs' | 'usd'>('bs')

  const prices = currency === 'bs' ? pricesBs : pricesUsd
  const symbol = currency === 'bs' ? 'Bs' : 'USD'

  return (
    <section id="precios" className="py-24">
      <div className="container-premium">
        <ScrollReveal>
          <h2 className="heading-serif text-center text-4xl">Precios transparentes</h2>
          <p className="body-text text-center text-ink/60 mt-2 max-w-xl mx-auto">
            Desde una dedicatoria hasta un sitio web completo. Todo a tu alcance.
          </p>
        </ScrollReveal>

        {/* Toggle */}
        <div className="flex justify-center mt-10">
          <div className="inline-flex bg-accent-light/10 rounded-full p-1">
            <button
              onClick={() => setCurrency('bs')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                currency === 'bs'
                  ? 'bg-accent text-paper shadow-md'
                  : 'text-ink/60 hover:text-ink'
              }`}
            >
              Bs
            </button>
            <button
              onClick={() => setCurrency('usd')}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                currency === 'usd'
                  ? 'bg-accent text-paper shadow-md'
                  : 'text-ink/60 hover:text-ink'
              }`}
            >
              USD
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currency}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
          >
            {prices.map((item, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                <div className="group bg-paper border border-accent-light/20 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-accent/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <item.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-serif text-lg font-medium">{item.title}</h3>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-3xl font-serif font-bold text-accent">{item.price}</span>
                    <span className="text-sm text-ink/50">{symbol}</span>
                  </div>
                  <p className="text-sm text-ink/70 mt-3 leading-relaxed flex-1">{item.desc}</p>
                  <ul className="mt-4 space-y-1.5">
                    {item.features.map((f, fi) => (
                      <li key={fi} className="text-xs text-ink/60 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={item.cta}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-accent text-paper px-4 py-2.5 rounded-full text-xs font-medium hover:bg-detail transition-all w-full mt-6"
                  >
                    Lo quiero
                  </a>
                </div>
              </ScrollReveal>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Payment methods */}
        <div className="mt-16 text-center">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent/70 mb-4">
              <DollarSign size={14} />
              Métodos de pago
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-paper border border-accent-light/20 rounded-full px-5 py-2.5 text-sm text-ink/70 flex items-center gap-2">
                <QrCode size={16} className="text-accent" />
                QR · Bs
              </div>
              <div className="bg-paper border border-accent-light/20 rounded-full px-5 py-2.5 text-sm text-ink/70 flex items-center gap-2">
                <DollarSign size={16} className="text-accent" />
                Airtm · USD
              </div>
              <div className="bg-paper border border-accent-light/20 rounded-full px-5 py-2.5 text-sm text-ink/70 flex items-center gap-2">
                Transferencia bancaria
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
