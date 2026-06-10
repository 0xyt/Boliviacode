'use client'

import { useState } from 'react'
import { MessageCircle, X, Heart, Code } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

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
            className="absolute bottom-16 right-0 w-72 bg-white rounded-2xl shadow-2xl p-5 mb-4"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-serif text-lg text-ink">¿Qué necesitas?</h3>
              <button onClick={() => setIsOpen(false)} className="text-ink/30 hover:text-ink/60 transition-colors">
                <X size={18} />
              </button>
            </div>
            <div className="space-y-3">
              <a
                href="https://wa.me/59170000000?text=Hola!%20Quiero%20crear%20una%20carta%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Heart size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Una carta física</p>
                  <p className="text-xs text-ink/50">Personalizada y lacrada</p>
                </div>
              </a>
              <a
                href="https://wa.me/59170000000?text=Hola!%20Quiero%20cotizar%20un%20proyecto%20digital"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Code size={18} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-ink">Un proyecto digital</p>
                  <p className="text-xs text-ink/50">Web, catálogo o menú QR</p>
                </div>
              </a>
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
