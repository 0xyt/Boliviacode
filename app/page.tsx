'use client'

import { useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ChevronRight, Sparkles, Globe, Image, UtensilsCrossed,
  Code, Zap, Shield, Play, ExternalLink,
  MessageCircle, Heart, Star
} from 'lucide-react'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'
import ScrollReveal from '@/components/ScrollReveal'
import DemoCanvas from '@/components/DemoCanvas'
import PortfolioModal from '@/components/PortfolioModal'
import SideNav from '@/components/SideNav'

const digitalServices = [
  {
    icon: Globe,
    title: 'Páginas web completas',
    desc: 'Desde landing pages hasta e-commerce. Modernas, rápidas, responsivas y optimizadas para SEO.',
    cta: 'Cotizar web',
    whatsapp: 'https://wa.me/59170000000?text=Hola!%20Quiero%20cotizar%20una%20p%C3%A1gina%20web',
  },
  {
    icon: Image,
    title: 'Catálogos digitales',
    desc: 'Tu catálogo de productos en línea, actualizable al instante, con fotos, precios y WhatsApp integrado.',
    cta: 'Cotizar catálogo',
    whatsapp: 'https://wa.me/59170000000?text=Hola!%20Quiero%20cotizar%20un%20cat%C3%A1logo%20digital',
  },
  {
    icon: UtensilsCrossed,
    title: 'Menús digitales QR',
    desc: 'Escanean el código QR y ven tu carta completa. Menús interactivos para restaurantes, cafés y food trucks.',
    cta: 'Cotizar menú',
    whatsapp: 'https://wa.me/59170000000?text=Hola!%20Quiero%20cotizar%20un%20men%C3%BA%20digital%20QR',
  },
]

const dedications = [
  {
    id: 'love',
    title: 'Te Amo',
    desc: 'Corazones flotantes, fuegos artificiales y un mensaje que aparece letra por letra.',
  },
  {
    id: 'birthday',
    title: 'Feliz Cumpleaños',
    desc: 'Confeti, velas animadas y una dedicatoria musical para el día especial.',
  },
  {
    id: 'sorry',
    title: 'Lo Siento',
    desc: 'Un perdón animado con partículas que forman un abrazo virtual.',
  },
]

const benefits = [
  { icon: Code, title: 'Código limpio y moderno', desc: 'Next.js, TypeScript, Tailwind CSS y Canvas. Tecnología que funciona en cualquier dispositivo.' },
  { icon: Zap, title: 'Entrega relámpago', desc: 'Dedicatorias animadas en 48 horas. Páginas web y catálogos en 7 a 10 días.' },
  { icon: Shield, title: '30 días de ajustes gratis', desc: 'No te dejamos solo. Después de entregar, tienes un mes de soporte sin costo.' },
  { icon: Heart, title: 'Precios en bolivianos', desc: 'Desde 50 Bs una dedicatoria animada. Desde 300 Bs una página web. Accesible y transparente.' },
]

const faqs = [
  { q: '¿Qué es una dedicatoria animada en HTML?', a: 'Es una experiencia digital interactiva que combina texto animado, partículas, efectos visuales y música. Se abre en cualquier navegador, se ve en celulares y se puede compartir por enlace.' },
  { q: '¿Se puede ver en cualquier celular?', a: 'Sí, todas nuestras creaciones son 100% responsivas. Se ven perfectas en iPhone, Android, tablets y computadoras.' },
  { q: '¿Puedo editar el texto después de entregada?', a: 'Si entregamos el código fuente, puedes modificar el texto fácilmente. También ofrecemos ajustes posteriores sin costo durante 30 días.' },
  { q: '¿Cuánto cuesta una dedicatoria animada?', a: 'Desde 50 Bs una dedicatoria simple con animaciones predefinidas. Las versiones más elaboradas con efectos personalizados pueden llegar a 150 Bs.' },
  { q: '¿Entregan el código fuente?', a: 'Sí, 100% tuyo. Te entregamos todo el código, los archivos y te ayudamos a publicarlo. No quedas atado a nosotros.' },
  { q: '¿Hacen páginas web para negocios pequeños?', a: 'Sí, desde 300 Bs. Ideal para emprendedores, restaurantes, tiendas, artistas y profesionales que quieren presencia digital profesional.' },
  { q: '¿Cómo es el proceso para un menú QR?', a: 'Nos envías tu carta (en PDF, foto oWord). Nosotros la digitalizamos con fotos, precios y categorías. Te entregamos el código QR para imprimir y poner en las mesas.' },
  { q: '¿Ofrecen mantenimiento?', a: 'Sí, tenemos planes mensuales desde 50 Bs que incluyen actualizaciones, soporte técnico y cambios de contenido.' },
]

export default function Home() {
  const { scrollYProgress } = useScroll()
  const opacityHero = useTransform(scrollYProgress, [0, 0.3], [1, 0])
  const scaleHero = useTransform(scrollYProgress, [0, 0.3], [1, 0.98])
  const [modalOpen, setModalOpen] = useState(false)
  const [activeDemo, setActiveDemo] = useState<string | null>(null)

  const openDemo = (id: string) => {
    setActiveDemo(id)
    setModalOpen(true)
  }

  return (
    <>
      <FloatingWhatsApp />
      <PortfolioModal isOpen={modalOpen} onClose={() => setModalOpen(false)} demoId={activeDemo} />
      <SideNav />
      <main className="paper-texture">
        {/* SECTION 1: HERO */}
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
          <motion.div style={{ opacity: opacityHero, scale: scaleHero }} className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-b from-paper/95 via-paper/80 to-paper/95" />
          </motion.div>
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <DemoCanvas />
          </div>
          <div className="relative z-10 container-premium text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent bg-accent/5 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles size={14} />
              Experiencias digitales personalizadas
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="heading-serif text-ink text-5xl md:text-7xl"
            >
              Las palabras que no se olvidan.
              <br />
              <span className="text-accent">Ahora con movimiento.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="body-text mt-8 text-ink/70 max-w-2xl mx-auto"
            >
              Dedicatorias animadas en HTML, páginas web, catálogos y menús digitales.
              Hechos con código y corazón.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <a
                href="https://wa.me/59170000000?text=Hola!%20Quiero%20crear%20mi%20dedicatoria%20animada"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-paper px-8 py-4 rounded-full text-lg font-medium hover:bg-detail transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Sparkles size={20} />
                Crear mi dedicatoria animada <ChevronRight size={20} />
              </a>
              <a
                href="#servicios"
                className="inline-flex items-center gap-2 border-2 border-accent/30 text-accent px-8 py-4 rounded-full text-lg font-medium hover:border-accent hover:bg-accent/5 transition-all duration-300"
              >
                Ver servicios digitales
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

        {/* SECTION 2: PRODUCTO ESTRELLA - DEDICATORIAS ANIMADAS */}
        <section className="py-24 md:py-32 relative" id="dedicatorias">
          <div className="container-premium">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <ScrollReveal direction="left">
                <div>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent mb-4">
                    <Sparkles size={14} />
                    Producto estrella
                  </div>
                  <h2 className="font-serif text-4xl md:text-5xl text-ink leading-tight">
                    Una carta que <span className="text-accent italic">late</span>. Literalmente.
                  </h2>
                  <p className="mt-6 body-text text-ink/80 leading-relaxed">
                    Olvida el papel. Una dedicatoria animada se ve en cualquier celular, se guarda en favoritos,
                    se puede compartir. Incluye animaciones personalizadas: corazones que flotan, fuegos artificiales,
                    escritura a máquina, confeti, o lo que imagine tu corazón.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/59170000000?text=Hola!%20Quiero%20una%20dedicatoria%20animada"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent text-paper px-6 py-3 rounded-full text-sm font-medium hover:bg-detail transition-all shadow-md"
                    >
                      <Play size={16} />
                      Quiero una para mí
                    </a>
                  </div>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="relative aspect-[4/3] bg-gradient-to-br from-accent-light/10 to-accent/5 rounded-sm overflow-hidden border border-accent-light/20 shadow-2xl">
                  <DemoCanvas />
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-paper/90 backdrop-blur-sm text-xs text-ink/60 px-4 py-2 rounded-full">
                    Demo en vivo · Animación Canvas
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Mini galería de ejemplos */}
            <div className="mt-24">
              <ScrollReveal>
                <h3 className="font-serif text-2xl text-center text-ink">Ejemplos de dedicatorias</h3>
              </ScrollReveal>
              <div className="grid sm:grid-cols-3 gap-6 mt-10">
                {dedications.map((d, idx) => (
                  <ScrollReveal key={d.id} delay={idx * 0.1}>
                    <div className="group bg-paper border border-accent-light/20 p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="aspect-video bg-gradient-to-br from-accent-light/20 to-accent/5 rounded-sm mb-4 flex items-center justify-center overflow-hidden">
                        <div className="text-center">
                          <div className="w-12 h-12 border-2 border-accent/30 rounded-full mx-auto flex items-center justify-center">
                            <Heart size={18} className="text-accent" />
                          </div>
                        </div>
                      </div>
                      <h4 className="font-serif text-lg font-medium">{d.title}</h4>
                      <p className="text-sm text-ink/70 mt-2">{d.desc}</p>
                      <button
                        onClick={() => openDemo(d.id)}
                        className="inline-flex items-center gap-1.5 text-xs text-accent hover:text-detail transition-colors mt-4 font-medium"
                      >
                        <Play size={12} />
                        Ver demo
                      </button>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: OTROS SERVICIOS DIGITALES */}
        <section className="py-24 bg-ink/5" id="servicios">
          <div className="container-premium">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl md:text-5xl">Más servicios digitales</h2>
              <p className="body-text text-center text-ink/60 max-w-2xl mx-auto mt-4">
                Tecnología artesanal para tu negocio o proyecto personal.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
              {digitalServices.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="group bg-paper p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-accent-light/20 flex flex-col h-full">
                    <div className="w-14 h-14 rounded-full bg-accent/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-medium">{item.title}</h3>
                    <p className="mt-3 text-ink/70 text-sm leading-relaxed flex-1">{item.desc}</p>
                    <a
                      href={item.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-accent text-paper px-5 py-2.5 rounded-full text-xs font-medium hover:bg-detail transition-all w-fit mt-6"
                    >
                      {item.cta} <ExternalLink size={12} />
                    </a>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 4: CÓMO FUNCIONA */}
        <section className="py-24 bg-paper">
          <div className="container-premium">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl">Cómo funciona</h2>
              <p className="body-text text-center text-ink/60 max-w-xl mx-auto mt-2">
                Sin vueltas. Así de simple es trabajar con nosotros.
              </p>
            </ScrollReveal>
            <div className="grid md:grid-cols-3 gap-12 mt-16 max-w-5xl mx-auto">
              {[
                { step: '01', icon: MessageCircle, title: 'Nos cuentas tu idea', desc: 'Escríbenos por WhatsApp. Cuéntanos qué necesitas, para cuándo y tu presupuesto. Sin compromiso.' },
                { step: '02', icon: Star, title: 'Recibes propuesta en 24h', desc: 'Te enviamos diseño, alcance, precio exacto y tiempo de entrega. Ajustamos hasta que te encante.' },
                { step: '03', icon: Zap, title: 'Entregamos en 3 a 10 días', desc: 'Desarrollamos, probamos y entregamos. Te capacitamos si es necesario. 30 días de soporte incluido.' },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.1}>
                  <div className="text-center group">
                    <div className="w-16 h-16 rounded-full bg-accent/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/10 transition-colors">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <div className="text-5xl font-serif text-accent-light/30 group-hover:text-accent/50 transition-colors -mt-2 mb-2">
                      {item.step}
                    </div>
                    <h3 className="font-serif text-xl mt-2">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70 max-w-xs mx-auto">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5: PORTAFOLIO / DEMOS */}
        <section id="portafolio" className="py-24 bg-ink/5">
          <div className="container-premium">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl">Proyectos que hablan por nosotros</h2>
              <p className="body-text text-center text-ink/60 mt-2 max-w-2xl mx-auto">
                Cada línea de código cuenta una historia.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                { title: 'Dedicatoria "Te Amo"', type: 'HTML + Canvas', desc: 'Animación de partículas con texto animado y confeti.', emoji: '❤️', demo: 'love' },
                { title: 'Menú QR — Café Central', type: 'Menú digital', desc: 'Menú interactivo con categorías, fotos y WhatsApp.', emoji: '☕', demo: null },
                { title: 'Catálogo — Tienda Moda', type: 'Catálogo digital', desc: 'Catálogo de ropa con filtros, galería y pedidos por WhatsApp.', emoji: '👗', demo: null },
                { title: 'Web — Artista Local', type: 'Página web', desc: 'Portafolio con galería, blog y formulario de contacto.', emoji: '🎨', demo: null },
              ].map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="group bg-paper border border-accent-light/20 overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    <div className="aspect-[4/3] bg-gradient-to-br from-accent-light/20 to-accent/5 flex items-center justify-center">
                      <span className="text-5xl">{item.emoji}</span>
                    </div>
                    <div className="p-5">
                      <p className="text-[10px] uppercase tracking-[0.15em] text-accent font-medium">{item.type}</p>
                      <h3 className="font-serif text-lg font-medium mt-1">{item.title}</h3>
                      <p className="text-sm text-ink/70 mt-2 line-clamp-2">{item.desc}</p>
                      <div className="flex items-center gap-3 mt-4">
                        {item.demo ? (
                          <button
                            onClick={() => openDemo(item.demo!)}
                            className="text-xs flex items-center gap-1.5 bg-accent text-paper px-4 py-2 rounded-full hover:bg-detail transition-colors"
                          >
                            <Play size={12} />
                            Ver demo
                          </button>
                        ) : (
                          <a
                            href="https://wa.me/59170000000?text=Hola!%20Quiero%20un%20proyecto%20como%20el%20de%20su%20portafolio"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs bg-accent text-paper px-4 py-2 rounded-full hover:bg-detail transition-colors"
                          >
                            Quiero uno igual
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 6: POR QUÉ ELEGIRNOS */}
        <section id="precios" className="py-24">
          <div className="container-premium">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl">Por qué BoliviaCode</h2>
              <p className="body-text text-center text-ink/60 mt-2 max-w-xl mx-auto">
                No solo escribimos código. Creamos experiencias que emocionan.
              </p>
            </ScrollReveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {benefits.map((item, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <div className="text-center group">
                    <div className="w-16 h-16 rounded-full bg-accent/5 flex items-center justify-center mx-auto mb-5 group-hover:bg-accent/10 transition-colors">
                      <item.icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-lg font-medium">{item.title}</h3>
                    <p className="mt-2 text-sm text-ink/70">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 7: FAQ */}
        <section id="faq" className="py-24 bg-paper border-t border-accent-light/20">
          <div className="container-premium max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="heading-serif text-center text-4xl">Preguntas frecuentes</h2>
            </ScrollReveal>
            <div className="mt-12 space-y-4">
              {faqs.map((faq, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.03}>
                  <details className="group border-b border-accent-light/30 pb-4">
                    <summary className="flex justify-between items-center cursor-pointer list-none py-3 font-medium text-lg">
                      <span>{faq.q}</span>
                      <ChevronRight className="w-5 h-5 transition-transform group-open:rotate-90 shrink-0 ml-4" />
                    </summary>
                    <p className="text-ink/70 pb-3 pl-2">{faq.a}</p>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 8: CTA FINAL */}
        <section id="contacto" className="py-32 bg-gradient-to-b from-paper to-accent-light/5 relative overflow-hidden">
          <div className="container-premium text-center relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-accent bg-accent/5 px-4 py-2 rounded-full mb-6">
                <Sparkles size={14} />
                Comienza hoy
              </div>
              <h2 className="heading-serif text-4xl md:text-6xl">
                Convierte tus palabras en una
                <br />
                <span className="text-accent italic">experiencia que se mueve</span>
              </h2>
              <div className="w-24 h-0.5 bg-accent/40 mx-auto my-8" />
              <p className="body-text text-ink/80 max-w-2xl mx-auto text-lg">
                Escribe tu mensaje. Nosotros lo animamos.
              </p>
              <div className="mt-12">
                <a
                  href="https://wa.me/59170000000?text=Hola!%20Quiero%20crear%20mi%20dedicatoria%20animada"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-accent text-paper px-10 py-5 rounded-full text-xl font-medium hover:bg-detail transition-all shadow-2xl hover:shadow-3xl"
                >
                  <MessageCircle size={24} />
                  Crear mi dedicatoria animada por WhatsApp
                </a>
              </div>
              <p className="text-xs text-ink/40 mt-8">Respuesta en menos de 1 hora · Pago seguro · Todo Bolivia</p>
            </ScrollReveal>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-accent-light/20">
          <div className="container-premium text-center">
            <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm text-ink/50">
              <a href="#dedicatorias" className="hover:text-accent transition-colors">Dedicatorias</a>
              <a href="#servicios" className="hover:text-accent transition-colors">Servicios</a>
              <a href="#" className="hover:text-accent transition-colors">Políticas de privacidad</a>
              <a href="#" className="hover:text-accent transition-colors">Términos de servicio</a>
            </div>
            <p className="text-ink/50 text-sm">
              © 2025 BoliviaCode – Experiencias digitales personalizadas. Hecho con código y corazón en Bolivia.
            </p>
          </div>
        </footer>
      </main>
    </>
  )
}
