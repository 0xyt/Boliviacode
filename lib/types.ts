import { type LucideIcon } from 'lucide-react'

export interface PhysicalService {
  icon: LucideIcon
  title: string
  desc: string
  whatsapp: string
}

export interface DigitalService {
  icon: LucideIcon
  title: string
  desc: string
  cta: string
  whatsapp: string
  isPreview?: boolean
}

export interface Step {
  step: string
  title: string
  desc: string
}

export interface PortfolioItem {
  title: string
  type: string
  description: string
  image: string
  demoUrl?: string
  whatsapp: string
}

export interface FAQ {
  q: string
  a: string
  category: 'fisico' | 'digital'
}

export interface GalleryImage {
  src: string
  alt: string
  size: 'tall' | 'wide' | 'square'
}
