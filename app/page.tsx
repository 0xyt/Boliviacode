'use client'
import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ChevronRight, Heart, Feather, Clock, MapPin, MessageCircle } from 'lucide-react'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import ScrollReveal from '@/components/ScrollReveal'
import Image from 'next/image'

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scaleHero = useTransform(scrollYProgress, [0, 0.3], [1, 0.98])

  // Datos mock para galería (usar imágenes reales)
  const galleryImages = [
    { src: '/carta1.jpg', alt: 'Carta abierta con caligrafía', size: 'tall' },
    { src: '/sobre-sello.jpg', alt: 'Sobre con sello de lacre', size: 'wide' },
    { src: '/carta-detalle.jpg', alt: 'Detalle de papel texturizado', size: 'square' },
    { src: '/manos-carta.jpg', alt: 'Manos sosteniendo carta', size: 'tall' },
  ]

  return (
    <>
      <FloatingWhatsApp />
      <main className="paper-texture">
        {/* SECCIÓN 1: HERO EMOCIONAL - PANTALLA COMPLETA */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ opacity: opacityHero, scale: scaleHero }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-paper/90 via-paper/70 to-paper/90" />
            <div className="absolute inset-0 bg-[url('/paper-texture-dark.png')] opacity-5 mix-blend-multiply" />
          </motion.div>
          <div className="relative z-10 container-premium text-center max-w-4xl">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="heading-serif text-ink"
            >
              No todas las palabras deberían quedarse sin decir.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="body-text mt-8 text-ink/70 max-w-2xl mx-auto"
            >
              Una carta física no se borra con un dedo. Perdura en cajones, en libros, en recuerdos.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12"
            >
              <a
                href="https://wa.me/59170000000?text=Quiero%20crear%20mi%20carta%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-paper px-8 py-4 rounded-full text-lg font-medium hover:bg-detail transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Crear mi carta <ChevronRight size={20} />
              </a>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-accent/40 rounded-full flex justify-center">
              <div className="w-1 h-2 bg-accent/60 rounded-full animate-bounce mt-2" />
            </div>
          </motion.div>
        </section>

        {/* SECCIÓN 2: HISTORIA EMOCIONAL (storytelling asimétrico) */}
        <section className="py-24 md:py-32 relative">
          <div className="container-premium">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div className="relative">
                  <div className="absolute -top-8 -left-8 w-32 h-32 border border-accent-light/30 rounded-full" />
                  <div className="relative bg-paper shadow-2xl p-8 md:p-12 rounded-sm">
                    <h2 className="font-serif text-3xl md:text-4xl italic text-accent">¿Por qué una carta?</h2>
                    <p className="mt-6 body-text text-ink/80 leading-relaxed">
                      Un mensaje de WhatsApp desaparece entre notificaciones. Un "te quiero" dicho rápido se olvida.
                      Pero una carta… una carta se guarda. Se vuelve a leer años después. Llega a emocionar de nuevo.
                      No hay algoritmo que archive una letra manuscrita o el aroma del papel.
                    </p>
                    <div className="mt-8 flex items-center gap-2 text-accent">
                      <Feather size={20} />
                      <span className="text-sm uppercase tracking-wider">Craftsmanship emocional</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="space-y-6">
                  <blockquote className="border-l-4 border-accent pl-6 italic text-xl md:text-2xl font-serif text-ink/90">
                    "Una carta es un objeto. Pero lo que contiene es un puente entre dos almas."
                  </blockquote>
                  <p className="body-text text-ink/70">
                    En BoliviaCode no vendemos papel impreso. Vendemos el valor de detener el tiempo, de elegir las palabras
                    con cuidado, de crear un recuerdo que duele y sana al mismo tiempo.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECCIÓN 3: EXPERIENCIAS (situaciones) */}
        <section className="py-24 bg-ink/5">
          <div className="container-premium">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl md:text-5xl">Lo que sientes, lo que necesitas decir</h2>
              <p className="body-text text-center text-ink/60 max-w-2xl mx-auto mt-4">No hay ocasión pequeña cuando el corazón habla.</p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {[
                { icon: Heart, title: 'Quiero pedir perdón', desc: 'Un "lo siento" escrito a mano pesa más que mil disculpas rápidas.' },
                { icon: Feather, title: 'Quiero sorprender', desc: 'Porque la rutina mata lo especial. Sorpréndele sin motivo.' },
                { icon: Clock, title: 'Quiero agradecer', desc: 'A un amigo, a un padre, a quien estuvo ahí sin pedir nada.' },
                { icon: MapPin, title: 'Quiero decir te amo', desc: 'Las tres palabras que merecen un papel, no una pantalla.' },
                { icon: MessageCircle, title: 'Quiero recuperar una relación', desc: 'Una carta puede abrir puertas que el orgullo cerró.' },
                { icon: Heart, title: 'Para cualquier ocasión', desc: 'Aniversario, cumpleaños, o simplemente un martes cualquiera.' },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <div className="group bg-paper p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent-light/20">
                    <item.icon className="w-10 h-10 text-accent mb-4" />
                    <h3 className="font-serif text-xl font-medium">{item.title}</h3>
                    <p className="mt-2 text-ink/70 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 4: GALERÍA PREMIUM (Pinterest editorial) */}
        <section className="py-24">
          <div className="container-premium">
            <ScrollReveal>
              <h2 className="heading-serif text-3xl md:text-4xl text-center">La belleza está en los detalles</h2>
              <p className="body-text text-center text-ink/60 mt-2">Papeles con textura, sobres de lino, caligrafía cuidada.</p>
            </ScrollReveal>
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 mt-16 space-y-6">
              {[...Array(6)].map((_, i) => (
                <ScrollReveal key={i} delay={i * 0.03}>
                  <div className="break-inside-avoid mb-6 relative overflow-hidden group">
                    <div className="aspect-auto bg-detail/10 rounded-sm overflow-hidden">
                      <div className="w-full h-auto bg-gradient-to-br from-accent-light/20 to-accent/10 p-8 text-center">
                        <div className="text-accent font-serif italic text-sm">[Mockup carta {i + 1}]</div>
                        <div className="mt-4 w-20 h-20 border border-accent/30 rounded-full mx-auto" />
                      </div>
                      {/* En producción: reemplazar con imágenes reales <Image src={...} /> */}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 5: CÓMO FUNCIONA (4 pasos) */}
        <section className="py-24 bg-paper relative">
          <div className="container-premium">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl">Crear tu carta es más sencillo de lo que crees</h2>
            </ScrollReveal>
            <div className="grid md:grid-cols-4 gap-8 mt-16">
              {[
                { step: '01', title: 'Nos cuentas tu historia', desc: 'Por WhatsApp o formulario. Qué quieres decir, a quién, por qué.' },
                { step: '02', title: 'Creamos tu carta', desc: 'Diseño único, caligrafía o tipografía elegante, papel premium.' },
                { step: '03', title: 'La entregamos', desc: 'En sobre lacrado. Envíos a toda Bolivia con cuidado de joya.' },
                { step: '04', title: 'Generas un recuerdo', desc: 'Esa carta se guardará por años. Un objeto con alma.' },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="text-center group">
                    <div className="text-6xl font-serif text-accent-light/30 group-hover:text-accent/50 transition-colors">{item.step}</div>
                    <h3 className="font-serif text-xl mt-4">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 6: PRUEBA SOCIAL (formato chat / real) */}
        <section className="py-24">
          <div className="container-premium">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl md:text-4xl">Lo que dicen quienes ya recibieron una carta</h2>
                  <div className="bg-ink/5 p-6 rounded-sm italic text-ink/80">
                    "Nunca imaginé que unas palabras escritas a mano pudieran hacerme llorar así. Gracias BoliviaCode por ayudarme a pedir perdón."
                    <footer className="mt-3 text-accent text-sm not-italic">— Valeria S., Santa Cruz</footer>
                  </div>
                  <div className="bg-ink/5 p-6 rounded-sm italic text-ink/80">
                    "Mi novia vive en Cochabamba y yo en La Paz. La carta llegó justo el día de nuestro aniversario. Fue mágico."
                    <footer className="mt-3 text-accent text-sm not-italic">— Andrés M.</footer>
                  </div>
                  {/* Captura tipo chat */}
                  <div className="border border-accent-light/30 rounded-2xl p-4 max-w-sm">
                    <div className="flex items-center gap-2 text-xs text-ink/50 mb-2">WhatsApp · hace 2 días</div>
                    <div className="bg-accent/10 p-3 rounded-xl rounded-tl-none">💬 Me llegó la carta, no sabes cómo le gustó 🥹</div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-square bg-gradient-to-br from-accent-light/10 to-transparent rounded-sm flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-6xl font-serif text-accent/30">"</p>
                    <p className="font-serif italic text-xl">Una carta es un abrazo de papel.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* SECCIÓN 7: FAQ elegante (acordeón) */}
        <section className="py-24 bg-paper border-t border-accent-light/20">
          <div className="container-premium max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl">Preguntas frecuentes</h2>
            </ScrollReveal>
            <div className="mt-12 space-y-4">
              {[
                { q: '¿Cómo personalizo mi carta?', a: 'Nos escribes por WhatsApp con tu mensaje, nombres y cualquier detalle. Nosotros la diseñamos y te enviamos vista previa.' },
                { q: '¿Cuánto cuesta?', a: 'Desde 20 Bs la carta simple hasta 50 Bs la versión premium con sobre lacrado y caligrafía a mano.' },
                { q: '¿Realizan envíos a todo Bolivia?', a: 'Sí, a cualquier ciudad. El tiempo de entrega es de 2 a 5 días hábiles dependiendo la ubicación.' },
                { q: '¿Puedo pedir varias cartas?', a: 'Claro, paquetes para eventos o regalos corporativos. Consulta sin compromiso.' },
              ].map((faq, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.05}>
                  <details className="group border-b border-accent-light/30 pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none py-3 font-medium text-lg">
                      {faq.q}
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90" />
                    </summary>
                    <p className="text-ink/70 pb-3 pl-2">{faq.a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECCIÓN 8: CTA FINAL (impacto visual) */}
        <section className="py-32 bg-gradient-to-b from-paper to-accent-light/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/pattern-seal.png)', backgroundRepeat: 'repeat' }} />
          <div className="container-premium text-center relative z-10">
            <ScrollReveal>
              <h2 className="heading-serif text-4xl md:text-6xl">Escribe lo que el silencio no pudo decir</h2>
              <div className="w-24 h-0.5 bg-accent/40 mx-auto my-8" />
              <p className="body-text text-ink/80 max-w-2xl mx-auto">
                No dejes pasar otra oportunidad. Una carta puede cambiar una relación, sanar una herida o regalar una sonrisa eterna.
              </p>
              <div className="mt-12">
                <a
                  href="https://wa.me/59170000000?text=Quiero%20crear%20mi%20carta%20personalizada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent text-paper px-10 py-5 rounded-full text-xl font-medium hover:bg-detail transition-all shadow-2xl hover:shadow-3xl"
                >
                  <MessageCircle size={24} />
                  Crear mi carta por WhatsApp
                </a>
              </div>
              <p className="text-xs text-ink/40 mt-8">Respuesta en menos de 1 hora · Pago seguro contra entrega o transferencia</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Footer simple y elegante */}
        <footer className="py-12 border-t border-accent-light/20 text-center text-ink/50 text-sm">
          <p>© 2025 BoliviaCode – Cartas que trascienden el tiempo. Hecho a mano en Bolivia.</p>
        </footer>
      </main>
    </>
  )
}
