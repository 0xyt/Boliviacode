'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ChevronRight, Heart, Feather, Clock, MapPin, MessageCircle,
  Code, Monitor, BookOpen, Utensils, ExternalLink
} from 'lucide-react'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import ScrollReveal from '@/components/ScrollReveal'
import ServiceSelector from '@/components/ServiceSelector'
import PortfolioGallery from '@/components/PortfolioGallery'

const physicalServices = [
  { icon: Heart, title: 'Cartas de amor', desc: 'Declaraciones sinceras que quedan grabadas en el papel y en el corazón.', whatsapp: 'https://wa.me/59170000000?text=Quiero%20una%20carta%20de%20amor%20personalizada' },
  { icon: Feather, title: 'Cartas de disculpa', desc: 'Un "lo siento" escrito a mano pesa más que mil disculpas rápidas.', whatsapp: 'https://wa.me/59170000000?text=Quiero%20una%20carta%20de%20disculpa' },
  { icon: Clock, title: 'Cartas de agradecimiento', desc: 'A un amigo, a un padre, a quien estuvo ahí sin pedir nada.', whatsapp: 'https://wa.me/59170000000?text=Quiero%20una%20carta%20de%20agradecimiento' },
  { icon: MapPin, title: 'Cartas de aniversario', desc: 'Celebra el tiempo compartido con palabras que perduran.', whatsapp: 'https://wa.me/59170000000?text=Quiero%20una%20carta%20de%20aniversario' },
  { icon: Heart, title: 'Cartas sorpresa', desc: 'Porque la rutina mata lo especial. Sorpréndele sin motivo.', whatsapp: 'https://wa.me/59170000000?text=Quiero%20una%20carta%20sorpresa' },
  { icon: MessageCircle, title: 'Para cualquier ocasión', desc: 'Aniversario, cumpleaños, o simplemente un martes cualquiera.', whatsapp: 'https://wa.me/59170000000?text=Quiero%20una%20carta%20para%20una%20ocasi%C3%B3n%20especial' },
]

const digitalServices = [
  { icon: Code, title: 'Cartas en HTML', desc: 'Cartas digitales interactivas con animaciones. Se envían por enlace y se ven en cualquier navegador.', cta: 'Ver ejemplo', whatsapp: 'https://wa.me/59170000000?text=Quiero%20una%20carta%20en%20HTML', isPreview: true },
  { icon: Monitor, title: 'Páginas web', desc: 'Desarrollo web a medida para emprendedores y negocios. Diseño premium, responsive y optimizado.', cta: 'Cotizar proyecto', whatsapp: 'https://wa.me/59170000000?text=Quiero%20cotizar%20una%20p%C3%A1gina%20web' },
  { icon: BookOpen, title: 'Catálogos digitales', desc: 'Catálogos interactivos para mostrar tus productos con fotos, precios y enlace directo a WhatsApp.', cta: 'Cotizar proyecto', whatsapp: 'https://wa.me/59170000000?text=Quiero%20cotizar%20un%20cat%C3%A1logo%20digital' },
  { icon: Utensils, title: 'Menús digitales', desc: 'Menús QR interactivos para restaurantes. Tus clientes escanean y ven la carta completa en su celular.', cta: 'Cotizar proyecto', whatsapp: 'https://wa.me/59170000000?text=Quiero%20cotizar%20un%20men%C3%BA%20digital' },
]

const faqs = [
  { q: '¿Cómo personalizo mi carta?', a: 'Nos escribes por WhatsApp con tu mensaje, nombres y cualquier detalle. Nosotros la diseñamos y te enviamos vista previa.', category: 'fisico' },
  { q: '¿Cuánto cuesta una carta?', a: 'Desde 20 Bs la carta simple hasta 50 Bs la versión premium con sobre lacrado y caligrafía a mano.', category: 'fisico' },
  { q: '¿Realizan envíos a todo Bolivia?', a: 'Sí, a cualquier ciudad. El tiempo de entrega es de 2 a 5 días hábiles dependiendo la ubicación.', category: 'fisico' },
  { q: '¿Puedo pedir varias cartas?', a: 'Claro, paquetes para eventos o regalos corporativos. Consulta sin compromiso.', category: 'fisico' },
  { q: '¿Qué son las cartas en HTML?', a: 'Son cartas digitales interactivas con animaciones, fotos y diseño cuidado. Se envían por enlace y quien las recibe las abre en su navegador como una experiencia inmersiva.', category: 'digital' },
  { q: '¿Cuánto cuesta una página web / catálogo digital?', a: 'Desde 150 Bs un menú digital o catálogo simple, hasta 500 Bs una web completa con varias páginas. Todo depende de la complejidad.', category: 'digital' },
  { q: '¿Entregan el código fuente?', a: 'Sí, 100% tuyo. Te entregamos todo el código y te ayudamos a publicarlo. No quedas atado a nosotros.', category: 'digital' },
  { q: '¿Qué tecnología usan para las webs?', a: 'Next.js, Tailwind CSS y TypeScript. Desplegamos en Vercel con rendimiento ultrarrápido y SEO optimizado.', category: 'digital' },
  { q: '¿Cuánto tiempo toma desarrollar un menú digital?', a: 'Entre 3 y 5 días hábiles. Los catálogos y webs más complejos pueden tomar de 5 a 10 días.', category: 'digital' },
  { q: '¿Hacen mantenimiento?', a: 'Sí, ofrecemos planes mensuales de mantenimiento y soporte técnico. Consulta sin compromiso.', category: 'digital' },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scaleHero = useTransform(scrollYProgress, [0, 0.3], [1, 0.98])

  return (
    <>
      <FloatingWhatsApp />
      <main className="paper-texture">
        {/* HERO */}
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
              className="heading-serif text-ink text-5xl md:text-7xl"
            >
              No todas las palabras deberían quedarse sin decir.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="body-text mt-8 text-ink/70 max-w-2xl mx-auto"
            >
              Cartas que quedan para siempre. Código que construye presencia.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://wa.me/59170000000?text=Quiero%20crear%20mi%20carta%20personalizada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-paper px-8 py-4 rounded-full text-lg font-medium hover:bg-detail transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Crear mi carta <ChevronRight size={20} />
              </a>
              <a
                href="https://wa.me/59170000000?text=Quiero%20cotizar%20un%20proyecto%20digital"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-accent/30 text-accent px-8 py-4 rounded-full text-lg font-medium hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                <Code size={20} />
                Cotizar proyecto digital
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

        {/* HISTORIA EMOCIONAL */}
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

        {/* LO QUE HACEMOS */}
        <section className="py-24 bg-ink/5">
          <div className="container-premium">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl md:text-5xl">Lo que hacemos</h2>
              <p className="body-text text-center text-ink/60 max-w-2xl mx-auto mt-4">
                Productos que emocionan. Tecnología que impulsa.
              </p>
            </ScrollReveal>

            {/* Bloque A: Productos físicos */}
            <div className="mt-20">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-accent/40" />
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Cartas físicas</span>
                  <div className="flex-1 h-px bg-accent/20" />
                </div>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {physicalServices.map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.05}>
                    <a
                      href={item.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block group bg-paper p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent-light/20"
                    >
                      <item.icon className="w-10 h-10 text-accent mb-4" />
                      <h3 className="font-serif text-xl font-medium">{item.title}</h3>
                      <p className="mt-2 text-ink/70 text-sm leading-relaxed">{item.desc}</p>
                    </a>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Bloque B: Servicios digitales */}
            <div className="mt-20">
              <ScrollReveal>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-8 h-px bg-accent/40" />
                  <span className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Servicios digitales</span>
                  <div className="flex-1 h-px bg-accent/20" />
                </div>
              </ScrollReveal>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {digitalServices.map((item, idx) => (
                  <ScrollReveal key={idx} delay={idx * 0.05}>
                    <div className="group bg-paper p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent-light/20 flex flex-col h-full">
                      <item.icon className="w-10 h-10 text-accent mb-4" />
                      <h3 className="font-serif text-xl font-medium">{item.title}</h3>
                      <p className="mt-2 text-ink/70 text-sm leading-relaxed flex-1">{item.desc}</p>
                      <a
                        href={item.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-detail transition-colors mt-4 font-medium"
                      >
                        {item.cta} <ExternalLink size={12} />
                      </a>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* GALERÍA DETALLES */}
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
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CÓMO FUNCIONA (ServiceSelector) */}
        <ServiceSelector />

        {/* PORTAFOLIO */}
        <PortfolioGallery />

        {/* PRUEBA SOCIAL */}
        <section className="py-24">
          <div className="container-premium">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <ScrollReveal>
                <div className="space-y-6">
                  <h2 className="font-serif text-3xl md:text-4xl">Lo que dicen quienes ya confiaron en nosotros</h2>
                  <div className="bg-ink/5 p-6 rounded-sm italic text-ink/80">
                    "Nunca imaginé que unas palabras escritas a mano pudieran hacerme llorar así. Gracias BoliviaCode por ayudarme a pedir perdón."
                    <footer className="mt-3 text-accent text-sm not-italic">— Valeria S., Santa Cruz</footer>
                  </div>
                  <div className="bg-ink/5 p-6 rounded-sm italic text-ink/80">
                    "Mi novia vive en Cochabamba y yo en La Paz. La carta llegó justo el día de nuestro aniversario. Fue mágico."
                    <footer className="mt-3 text-accent text-sm not-italic">— Andrés M.</footer>
                  </div>
                  <div className="bg-ink/5 p-6 rounded-sm italic text-ink/80">
                    "Necesitaba un menú digital urgente para mi restaurante y lo tuvieron listo en 4 días. Mis clientes aman el QR."
                    <footer className="mt-3 text-accent text-sm not-italic">— Carla R., restaurante en La Paz</footer>
                  </div>
                  <div className="border border-accent-light/30 rounded-2xl p-4 max-w-sm">
                    <div className="flex items-center gap-2 text-xs text-ink/50 mb-2">WhatsApp · hace 2 días</div>
                    <div className="bg-accent/10 p-3 rounded-xl rounded-tl-none">💬 Me llegó la carta, no sabes cómo le gustó 🥹</div>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-square bg-gradient-to-br from-accent-light/10 to-transparent rounded-sm flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="text-6xl font-serif text-accent/30">"</p>
                    <p className="font-serif italic text-xl">Una carta es un abrazo de papel.</p>
                    <div className="w-16 h-px bg-accent/30 mx-auto my-6" />
                    <p className="font-serif italic text-lg text-ink/60">El código es un puente al futuro.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-paper border-t border-accent-light/20">
          <div className="container-premium max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl">Preguntas frecuentes</h2>
            </ScrollReveal>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.03}>
                  <details className="group border-b border-accent-light/30 pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none py-3 font-medium text-lg">
                      <span>
                        {faq.q}
                        {faq.category === 'digital' && (
                          <span className="ml-2 text-[10px] uppercase tracking-wider text-accent border border-accent/30 px-2 py-0.5 rounded-full align-middle">Digital</span>
                        )}
                      </span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90 shrink-0" />
                    </summary>
                    <p className="text-ink/70 pb-3 pl-2">{faq.a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-32 bg-gradient-to-b from-paper to-accent-light/10 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'url(/pattern-seal.png)', backgroundRepeat: 'repeat' }} />
          <div className="container-premium text-center relative z-10">
            <ScrollReveal>
              <h2 className="heading-serif text-4xl md:text-6xl">Escribe lo que el silencio no pudo decir</h2>
              <div className="w-24 h-0.5 bg-accent/40 mx-auto my-8" />
              <p className="body-text text-ink/80 max-w-2xl mx-auto">
                Una carta, una web, un menú digital. Sea lo que necesites, lo creamos con el mismo cuidado.
              </p>
              <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://wa.me/59170000000?text=Quiero%20crear%20mi%20carta%20personalizada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent text-paper px-10 py-5 rounded-full text-xl font-medium hover:bg-detail transition-all shadow-2xl hover:shadow-3xl"
                >
                  <Heart size={24} />
                  Quiero una carta
                </a>
                <a
                  href="https://wa.me/59170000000?text=Quiero%20cotizar%20un%20proyecto%20digital"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 border-2 border-accent/30 text-accent px-10 py-5 rounded-full text-xl font-medium hover:border-accent hover:bg-accent/5 transition-all shadow-xl"
                >
                  <Code size={24} />
                  Quiero un proyecto digital
                </a>
              </div>
              <p className="text-xs text-ink/40 mt-8">Respuesta en menos de 1 hora · Pago seguro contra entrega o transferencia</p>
            </ScrollReveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-accent-light/20">
          <div className="container-premium text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-ink/50">
              <a href="#" className="hover:text-accent transition-colors">Inicio</a>
              <a href="#portfolio" className="hover:text-accent transition-colors">Portafolio</a>
              <a href="#" className="hover:text-accent transition-colors">Políticas de privacidad</a>
              <a href="#" className="hover:text-accent transition-colors">Términos de servicio</a>
            </div>
            <p className="text-ink/50 text-sm">
              © 2025 BoliviaCode – Cartas que trascienden el tiempo. Código que construye presencia. Hecho a mano en Bolivia.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
