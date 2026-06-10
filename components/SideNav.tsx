'use client'
import { useEffect, useState } from 'react'

export default function SideNav() {
  const [active, setActive] = useState('')
  const sections = ['hero', 'servicios', 'precios', 'portafolio', 'faq', 'contacto']

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    }, { threshold: 0.3 })
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col gap-3">
        {sections.map(s => (
          <button
            key={s}
            onClick={() => scrollTo(s)}
            className={`w-2 h-2 rounded-full transition-all ${active === s ? 'bg-accent scale-150' : 'bg-accent-light/50'}`}
            aria-label={`Ir a ${s}`}
          />
        ))}
      </div>
    </div>
  )
}
