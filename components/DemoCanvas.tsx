'use client'

import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  alpha: number
  life: number
}

const colors = ['#8B5E3C', '#C7A17A', '#6D4C41', '#A67B5B', '#E8D5B7']

export default function DemoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let particles: Particle[] = []
    let textParticles: { x: number; y: number; char: string; targetX: number; targetY: number }[] = []

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)
    }
    resize()
    window.addEventListener('resize', resize)

    // Setup text particles
    const text = 'Te quiero'
    const fontSize = 42
    ctx.font = `bold ${fontSize}px "Playfair Display", Georgia, serif`
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    const metrics = ctx.measureText(text)
    const textWidth = metrics.width
    const startX = (canvas.getBoundingClientRect().width - textWidth) / 2
    const startY = canvas.getBoundingClientRect().height / 2

    // Sample text pixels
    const tempCanvas = document.createElement('canvas')
    const tempCtx = tempCanvas.getContext('2d')!
    tempCanvas.width = canvas.width
    tempCanvas.height = canvas.height
    tempCtx.font = `bold ${fontSize * (canvas.width / canvas.getBoundingClientRect().width)}px "Playfair Display", Georgia, serif`
    tempCtx.textAlign = 'center'
    tempCtx.textBaseline = 'middle'
    tempCtx.fillText(text, canvas.width / 2, canvas.height / 2)

    const imageData = tempCtx.getImageData(0, 0, canvas.width, canvas.height)
    const dpr = window.devicePixelRatio || 1
    const scale = canvas.getBoundingClientRect().width / canvas.width

    for (let y = 0; y < canvas.height; y += 4) {
      for (let x = 0; x < canvas.width; x += 4) {
        const i = (y * canvas.width + x) * 4
        if (imageData.data[i + 3] > 128) {
          textParticles.push({
            x: Math.random() * canvas.getBoundingClientRect().width,
            y: Math.random() * canvas.getBoundingClientRect().height,
            char: '',
            targetX: x * scale,
            targetY: y * scale,
          })
        }
      }
    }

    // Spawn confetti
    const spawnConfetti = () => {
      for (let i = 0; i < 3; i++) {
        const w = canvas.getBoundingClientRect().width
        const h = canvas.getBoundingClientRect().height
        particles.push({
          x: Math.random() * w,
          y: -10,
          vx: (Math.random() - 0.5) * 3,
          vy: Math.random() * 3 + 1,
          size: Math.random() * 6 + 3,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: 1,
          life: 1,
        })
      }
    }

    const animate = () => {
      const w = canvas.getBoundingClientRect().width
      const h = canvas.getBoundingClientRect().height
      ctx.clearRect(0, 0, w, h)

      // Update text particles (slowly converge)
      textParticles.forEach((p, i) => {
        p.x += (p.targetX - p.x) * 0.02
        p.y += (p.targetY - p.y) * 0.02
        ctx.fillStyle = `rgba(139, 94, 60, ${0.4 + Math.sin(Date.now() * 0.002 + i) * 0.2})`
        ctx.fillRect(p.x, p.y, 2, 2)
      })

      // Update confetti
      spawnConfetti()
      particles = particles.filter((p) => p.life > 0)
      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        p.vy += 0.05
        p.life -= 0.003
        p.alpha = Math.max(0, p.life)

        ctx.save()
        ctx.globalAlpha = p.alpha
        ctx.fillStyle = p.color
        ctx.translate(p.x, p.y)
        ctx.rotate(p.vx * 0.5)
        ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
        ctx.restore()
      })

      animId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full rounded-sm"
    />
  )
}
