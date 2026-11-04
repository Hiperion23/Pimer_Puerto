import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ChefHat, Clock, Truck, Star, Award, Heart, ArrowRight, Anchor, Compass } from 'lucide-react'
import Hero from '../Components/Hero'
import DishCard from '../Components/DishCard'
import DishModal from '../Components/DishModal'
import type { Dish } from '../Components/DishCard'
import { api } from '../api/api'

const COLORS = {
  abyss: '#060B14',
  abyssLight: '#0F2138',
  biolume: '#2FF3E0',
  aji: '#FF6B45',
  foam: '#EAF6F8',
  muted: '#9FB4C4',
}

function TiltCard({
  children,
  className = '',
}: {
  children: React.ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setTilt({ x, y })
  }

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s ease-out',
        transform: `perspective(800px) rotateY(${tilt.x * 6}deg) rotateX(${-tilt.y * 6}deg) translateY(${
          tilt.x || tilt.y ? -6 : 0
        }px)`,
      }}
    >
      {children}
    </div>
  )
}

const features = [
  {
    icon: ChefHat,
    title: 'Recetas Auténticas',
    text: 'Platos tradicionales peruanos preparados con técnicas ancestrales y pasión.',
    accent: COLORS.biolume,
  },
  {
    icon: Award,
    title: 'Ingredientes Frescos',
    text: 'Seleccionamos los mejores productos del mar para garantizar calidad superior.',
    accent: COLORS.aji,
  },
  {
    icon: Clock,
    title: 'Horario Extendido',
    text: 'Abierto todos los días de 19:00 a 00:00 hrs para que disfrutes cuando quieras.',
    accent: COLORS.biolume,
  },
  {
    icon: Truck,
    title: 'Delivery Rápido',
    text: 'Llevamos nuestros sabores hasta tu hogar con servicio de entrega eficiente.',
    accent: COLORS.aji,
  },
]

const testimonials = [
  {
    name: 'María González',
    role: 'Cliente frecuente',
    text: '"El mejor ceviche de Arica, sin duda. Los ingredientes son fresquísimos y el sabor es auténtico. ¡Volveré seguro!"',
    accent: COLORS.biolume,
  },
  {
    name: 'Carlos Ramírez',
    role: 'Visitante',
    text: '"La atención es excepcional y los platos son de primera. El pulpo a la parrilla es espectacular, muy recomendado."',
    accent: COLORS.aji,
  },
  {
    name: 'Andrea Silva',
    role: 'Cliente satisfecha',
    text: '"Excelente relación calidad-precio. Los sabores me transportaron a Perú. Definitivamente mi nuevo lugar favorito."',
    accent: COLORS.biolume,
  },
]

export default function Home() {
  const [featuredDishes, setFeaturedDishes] = useState<Dish[]>([])
  const [loadingDishes, setLoadingDishes] = useState(true)
  const [dishesError, setDishesError] = useState<string | null>(null)
  const [selected, setSelected] = useState<Dish | null>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchFeatured() {
      setLoadingDishes(true)
      setDishesError(null)
      try {
        const data = await api.get<Dish[]>('/api/platos')
        if (!cancelled) {
          const disponibles = data.filter(d => d.disponible !== false)
          setFeaturedDishes(disponibles.slice(0, 6))
        }
      } catch (err) {
        if (!cancelled) {
          setDishesError(
            err instanceof Error ? err.message : 'Error al cargar los platos'
          )
        }
      } finally {
        if (!cancelled) setLoadingDishes(false)
      }
    }

    fetchFeatured()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <>
      <Hero />

      <section
        className="relative py-24 overflow-hidden"
        style={{ background: `linear-gradient(180deg, ${COLORS.abyss} 0%, #081222 100%)` }}
      >
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full opacity-[0.08] pointer-events-none border" style={{ borderColor: COLORS.biolume }} />
        <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full opacity-[0.08] pointer-events-none border" style={{ borderColor: COLORS.aji }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
              style={{ background: 'rgba(47,243,224,0.06)', borderColor: 'rgba(47,243,224,0.25)' }}
            >
              <Compass className="w-4 h-4" style={{ color: COLORS.biolume }} />
              <span
                className="text-xs tracking-widest"
                style={{ color: COLORS.biolume, fontFamily: "'JetBrains Mono', monospace" }}
              >
                POR QUÉ ELEGIRNOS
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, color: COLORS.foam }}
            >
              Experiencia{' '}
              <span
                style={{
                  background: `linear-gradient(90deg, ${COLORS.biolume}, ${COLORS.aji})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Única
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <TiltCard key={f.title}>
                <div
                  className="group p-8 rounded-2xl border h-full transition-colors duration-300"
                  style={{
                    background: 'rgba(15,33,56,0.5)',
                    borderColor: 'rgba(255,255,255,0.08)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${f.accent}1F`, boxShadow: `0 0 24px ${f.accent}40` }}
                  >
                    <f.icon className="w-7 h-7" style={{ color: f.accent }} />
                  </div>
                  <h3
                    className="text-xl mb-3"
                    style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 600, color: COLORS.foam }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ color: COLORS.muted, fontFamily: "'Manrope', sans-serif" }} className="leading-relaxed">
                    {f.text}
                  </p>
                </div>
              </TiltCard>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-24 overflow-hidden"
        style={{ background: '#081222' }}
      >
        <div className="absolute top-20 right-0 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: COLORS.biolume }} />
        <div className="absolute bottom-20 left-0 w-72 h-72 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: COLORS.aji }} />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
              style={{ background: 'rgba(255,107,69,0.06)', borderColor: 'rgba(255,107,69,0.25)' }}
            >
              <Star className="w-4 h-4" style={{ color: COLORS.aji }} fill={COLORS.aji} />
              <span
                className="text-xs tracking-widest"
                style={{ color: COLORS.aji, fontFamily: "'JetBrains Mono', monospace" }}
              >
                MÁS PEDIDOS
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl mb-4"
              style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, color: COLORS.foam }}
            >
              Platos{' '}
              <span
                style={{
                  background: `linear-gradient(90deg, ${COLORS.aji}, ${COLORS.biolume})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Destacados
              </span>
            </h2>
            <p style={{ color: COLORS.muted, fontFamily: "'Manrope', sans-serif" }} className="text-lg leading-relaxed">
              Descubre nuestras preparaciones más solicitadas, cada una elaborada con ingredientes frescos y auténticos sabores del mar.
            </p>
          </div>

          {loadingDishes && (
            <p className="text-center" style={{ color: COLORS.muted, fontFamily: "'JetBrains Mono', monospace" }}>
              Cargando platos...
            </p>
          )}

          {!loadingDishes && dishesError && (
            <p className="text-center" style={{ color: COLORS.aji }}>
              No se pudieron cargar los platos: {dishesError}
            </p>
          )}

          {!loadingDishes && !dishesError && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredDishes.map(dish => (
                <TiltCard key={dish.id}>
                  <div
                    className="p-0.5 rounded-2xl h-full"
                    style={{ background: `linear-gradient(135deg, ${COLORS.biolume}66, ${COLORS.aji}66)` }}
                  >
                    <DishCard dish={dish} onClick={setSelected} />
                  </div>
                </TiltCard>
              ))}
            </div>
          )}

          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-transform duration-300 hover:scale-105"
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: COLORS.abyss,
                background: `linear-gradient(90deg, ${COLORS.biolume}, ${COLORS.aji})`,
                boxShadow: `0 0 30px ${COLORS.biolume}55`,
              }}
            >
              Ver Carta Completa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <section
        className="relative py-24 overflow-hidden"
        style={{ background: `linear-gradient(180deg, #081222 0%, ${COLORS.abyss} 100%)` }}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.05] pointer-events-none">
          {[1, 2, 3].map(i => (
            <div
              key={i}
              className="absolute rounded-full border"
              style={{ width: `${i * 300}px`, height: `${i * 300}px`, borderColor: COLORS.biolume }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-4"
              style={{ background: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.15)' }}
            >
              <Heart className="w-4 h-4" style={{ color: COLORS.aji }} fill={COLORS.aji} />
              <span
                className="text-xs tracking-widest"
                style={{ color: COLORS.foam, fontFamily: "'JetBrains Mono', monospace" }}
              >
                TESTIMONIOS
              </span>
            </div>
            <h2
              className="text-4xl md:text-5xl"
              style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, color: COLORS.foam }}
            >
              Lo Que Dicen Nuestros{' '}
              <span
                style={{
                  background: `linear-gradient(90deg, ${COLORS.biolume}, ${COLORS.aji})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Clientes
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <TiltCard key={t.name}>
                <div
                  className="p-8 rounded-2xl border h-full"
                  style={{
                    background: 'rgba(15,33,56,0.5)',
                    borderColor: `${t.accent}30`,
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <div className="flex gap-1 mb-4">
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star key={star} className="w-5 h-5 fill-current" style={{ color: COLORS.aji }} />
                    ))}
                  </div>
                  <p
                    className="mb-6 leading-relaxed"
                    style={{ color: COLORS.muted, fontFamily: "'Manrope', sans-serif" }}
                  >
                    {t.text}
                  </p>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-full"
                      style={{ background: `linear-gradient(135deg, ${t.accent}, ${COLORS.abyssLight})` }}
                    />
                    <div>
                      <p style={{ color: COLORS.foam, fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>
                        {t.name}
                      </p>
                      <p className="text-sm" style={{ color: t.accent, fontFamily: "'JetBrains Mono', monospace" }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </div>

          <div className="mt-16 flex items-center justify-center gap-2 opacity-60">
            <Anchor className="w-4 h-4" style={{ color: COLORS.biolume }} />
            <span style={{ color: COLORS.muted, fontFamily: "'JetBrains Mono', monospace" }} className="text-xs tracking-widest">
              MI PRIMER PUERTO · ARICA, CHILE
            </span>
          </div>
        </div>
      </section>

      {selected && (
        <DishModal dish={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}