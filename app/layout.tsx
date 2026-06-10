import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BoliviaCode – Cartas que trascienden el tiempo',
  description: 'Creamos cartas personalizadas con caligrafía y papel premium. Regalos únicos para momentos que importan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
