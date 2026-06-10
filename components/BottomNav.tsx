'use client'
import { Home, Grid3x3, CreditCard, Image, HelpCircle, MessageCircle } from 'lucide-react'

const navItems = [
  { id: 'inicio', icon: Home, label: 'Inicio' },
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
    <nav className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 bg-paper/90 backdrop-blur-sm rounded-full shadow-lg border border-accent-light/30 px-3 py-2 sm:px-4 sm:py-2 flex gap-4 sm:gap-6 md:gap-8">
      {navItems.map(({ id, icon: Icon, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="flex flex-col items-center text-ink/60 hover:text-accent transition-colors min-w-[40px]"
          aria-label={label}
        >
          <Icon size={18} className="sm:w-5 sm:h-5" />
          <span className="text-[8px] sm:text-[10px] leading-none mt-0.5 hidden sm:inline">{label}</span>
        </button>
      ))}
    </nav>
  )
}
