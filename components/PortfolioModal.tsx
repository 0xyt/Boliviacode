'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Play } from 'lucide-react'
import DemoCanvas from './DemoCanvas'

interface PortfolioModalProps {
  isOpen: boolean
  onClose: () => void
  demoId: string | null
}

export default function PortfolioModal({ isOpen, onClose, demoId }: PortfolioModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-ink/80 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative bg-paper rounded-sm max-w-4xl w-full max-h-[90vh] overflow-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 z-10 flex justify-between items-center p-6 border-b border-accent-light/20 bg-paper">
              <div>
                <h3 className="font-serif text-xl text-ink">
                  {demoId === 'love'
                    ? 'Dedicatoria "Te Amo"'
                    : demoId === 'birthday'
                    ? 'Dedicatoria "Feliz Cumpleaños"'
                    : demoId === 'sorry'
                    ? 'Dedicatoria "Lo Siento"'
                    : 'Demo interactiva'}
                </h3>
                <p className="text-xs text-ink/50 mt-1">Animación en Canvas · HTML · JavaScript</p>
              </div>
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full flex items-center justify-center text-ink/40 hover:text-ink hover:bg-ink/5 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-6">
              <div className="aspect-video bg-gradient-to-br from-accent-light/10 to-accent/5 rounded-sm overflow-hidden border border-accent-light/20">
                <DemoCanvas />
              </div>

              <div className="mt-6 grid md:grid-cols-2 gap-4">
                <div className="bg-ink/5 p-4 rounded-sm">
                  <h4 className="text-xs uppercase tracking-wider text-accent font-medium">Incluye</h4>
                  <ul className="mt-2 space-y-1 text-sm text-ink/70">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Animación de partículas personalizada
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Texto animado con efecto escritura
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Confeti y efectos visuales
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Responsive (se ve en cualquier celular)
                    </li>
                  </ul>
                </div>
                <div className="bg-ink/5 p-4 rounded-sm">
                  <h4 className="text-xs uppercase tracking-wider text-accent font-medium">Personalizable</h4>
                  <ul className="mt-2 space-y-1 text-sm text-ink/70">
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Texto, colores y tipografía
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Música de fondo (opcional)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Fotos o imágenes
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-accent" />
                      Efectos especiales únicos
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 text-center">
                <a
                  href="https://wa.me/59170000000?text=Hola!%20Quiero%20una%20dedicatoria%20animada%20como%20la%20del%20demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-accent text-paper px-8 py-4 rounded-full font-medium hover:bg-detail transition-all shadow-lg"
                >
                  <Play size={18} />
                  Quiero una dedicatoria así
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
