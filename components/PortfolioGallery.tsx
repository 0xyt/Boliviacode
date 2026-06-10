'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import type { PortfolioItem } from '@/lib/types'

const portfolioItems: PortfolioItem[] = [
  {
    title: 'Menú Digital – La Paz',
    type: 'Menú QR para restaurante',
    description: 'Menú interactivo con fotos, precios y categorías. Escaneas el QR y ves el menú completo en tu celular.',
    image: '/menu-digital-1.png',
    demoUrl: '#',
    whatsapp: 'https://wa.me/59170000000?text=Hola,%20quiero%20un%20men%C3%BA%20digital%20como%20el%20de%20La%20Paz',
  },
  {
    title: 'Catálogo de Productos – Santa Cruz',
    type: 'Catálogo digital interactivo',
    description: 'Catálogo online con galería de productos, filtros por categoría y enlace directo a WhatsApp para pedidos.',
    image: '/catalogo-digital-1.png',
    demoUrl: '#',
    whatsapp: 'https://wa.me/59170000000?text=Hola,%20quiero%20un%20cat%C3%A1logo%20digital%20como%20el%20de%20Santa%20Cruz',
  },
  {
    title: 'Web Corporativa – Cochabamba',
    type: 'Página web para emprendedor',
    description: 'Sitio web profesional con portafolio, blog, y formulario de contacto. Diseño premium responsive.',
    image: '/web-corporativa-1.png',
    demoUrl: '#',
    whatsapp: 'https://wa.me/59170000000?text=Hola,%20quiero%20una%20p%C3%A1gina%20web%20como%20la%20de%20Cochabamba',
  },
  {
    title: 'Carta Digital – Aniversario',
    type: 'Carta en HTML interactiva',
    description: 'Carta digital con animaciones, fotos y música. Se envía por enlace y se ve en cualquier navegador.',
    image: '/carta-html-1.png',
    demoUrl: '#',
    whatsapp: 'https://wa.me/59170000000?text=Hola,%20quiero%20una%20carta%20en%20HTML%20como%20la%20de%20aniversario',
  },
]

export default function PortfolioGallery() {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null)

  return (
    <section className="py-24">
      <div className="container-premium">
        <ScrollReveal>
          <h2 className="heading-serif text-center text-4xl">Trabajos que hablan por nosotros</h2>
          <p className="body-text text-center text-ink/60 mt-2 max-w-2xl mx-auto">
            De cartas digitales a menús interactivos. Esto es lo que hemos creado.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {portfolioItems.map((item, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.08}>
              <div className="group bg-paper border border-accent-light/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent-light/20 to-accent/10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-16 h-16 border-2 border-accent/30 rounded-full mx-auto mb-3 flex items-center justify-center">
                      <span className="text-accent font-serif text-lg">{idx + 1}</span>
                    </div>
                    <p className="text-xs text-ink/50 uppercase tracking-wider">{item.type}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-ink/70 mt-2 line-clamp-2">{item.description}</p>
                  <div className="flex items-center gap-3 mt-4">
                    <a
                      href={item.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs bg-accent text-paper px-4 py-2 rounded-full hover:bg-detail transition-colors"
                    >
                      Quiero uno igual
                    </a>
                    <button
                      onClick={() => setPreviewUrl(item.demoUrl || null)}
                      className="text-xs flex items-center gap-1 text-accent hover:text-detail transition-colors"
                    >
                      <ExternalLink size={14} />
                      Ver demo
                    </button>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {previewUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-4"
            onClick={() => setPreviewUrl(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-paper rounded-sm max-w-2xl w-full p-8"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewUrl(null)}
                className="absolute top-4 right-4 text-ink/40 hover:text-ink"
              >
                <X size={20} />
              </button>
              <div className="aspect-video bg-gradient-to-br from-accent-light/20 to-accent/10 rounded-sm flex items-center justify-center">
                <p className="text-accent font-serif italic">
                  [Vista previa del proyecto]
                </p>
              </div>
              <p className="text-center mt-4 text-sm text-ink/60">
                La demo interactiva estará disponible pronto.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
