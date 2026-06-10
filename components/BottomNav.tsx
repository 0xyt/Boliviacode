'use client'
import { Home, Grid3x3, CreditCard, Image, HelpCircle, MessageCircle, Sparkles } from 'lucide-react'

const navItems = [
  { id: 'inicio', icon: Home, label: 'Inicio' },
  { id: 'dedicatorias', icon: Sparkles, label: 'Dedicatorias' },
  { id: 'servicios', icon: Grid3x3, label: 'Servicios' },
  { id: 'precios', icon: CreditCard, label: 'Precios' },
  { id: 'portafolio', icon: Image, label: 'Portafolio' },
  { id: 'faq', icon: HelpCircle, label: 'FAQ' },
  { id: 'contacto', icon: MessageCircle, label: 'Contacto' },
]

export default function BottomNav() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[999] bg-paper/95 backdrop-blur-md rounded-full shadow-xl border border-accent-light/30 px-2 py-2 sm:px-4 flex gap-2 sm:gap-5 md:gap-6">
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="flex flex-col items-center text-ink/60 hover:text-accent transition-colors min-w-[40px] sm:min-w-[48px] py-1"
          aria-label={label}
        >
          <Icon size={16} className="sm:w-[18px] sm:h-[18px]" />
          <span className="text-[9px] sm:text-[10px] leading-tight mt-1">{label}</span>
        </button>
      ))}
    </nav>
  )
}
