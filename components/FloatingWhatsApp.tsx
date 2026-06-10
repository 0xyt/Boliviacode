'use client'

import { useState } from 'react'
import { MessageCircle, X, Sparkles, Globe, Image, UtensilsCrossed } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface WhatsAppOption {
  icon: typeof Sparkles
  label: string
  desc: string
  href: string
}

const options: WhatsAppOption[] = [
  {
    icon: Sparkles,
    label: 'Dedicatoria animada',
    desc: 'HTML + Canvas personalizado',
    href: 'https://wa.me/59170000000?text=Hola!%20Quiero%20una%20dedicatoria%20animada%20en%20HTML',
  },
  {
    icon: Globe,
    label: 'Página web',
    desc: 'Desarrollo a medida',
    href: 'https://wa.me/59170000000?text=Hola!%20Quiero%20cotizar%20una%20p%C3%A1gina%20web',
  },
  {
    icon: Image,
    label: 'Catálogo digital',
    desc: 'Productos en línea con WhatsApp',
    href: 'https://wa.me/59170000000?text=Hola!%20Quiero%20cotizar%20un%20cat%C3%A1logo%20digital',
  },
  {
    icon: UtensilsCrossed,
    label: 'Menú QR',
    desc: 'Menú interactivo para restaurante',
    href: 'https://wa.me/59170000000?text=Hola!%20Quiero%20cotizar%20un%20men%C3%BA%20digital%20QR',
  },
]

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl p-4 mb-4"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-serif text-lg text-ink">¿Qué necesitas?</h3>
              <button onClick={() => setIsOpen(false)} className="text-ink/30 hover:text-ink/60 transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-2">
              {options.map((opt, idx) => (
                <a
                  key={idx}
                  href={opt.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors shrink-0">
                    <opt.icon size={18} className="text-accent" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-ink truncate">{opt.label}</p>
                    <p className="text-xs text-ink/50 truncate">{opt.desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20BD5A] transition-all hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={28} className="text-white" />
      </button>
    </div>
  )
}
