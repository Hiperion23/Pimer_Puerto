import { useState, useEffect, useRef, useMemo } from 'react'
import { Clock, MapPin, Star, Anchor, Compass } from 'lucide-react'
import imgPrincipal from '../assets/images/principal.png'
import { Link } from 'react-router-dom'

interface Particle {
  id: number
  left: number
  size: number
  duration: number
  delay: number
  drift: number
}

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [reducedMotion, setReducedMotion] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const portholeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
  }, [])

  const particles = useMemo<Particle[]>(() => {
    return Array.from({ length: 16 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 3,
      duration: 8 + Math.random() * 10,
      delay: Math.random() * 8,
      drift: (Math.random() - 0.5) * 60,
    }))
  }, [])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion || !portholeRef.current) return
    const rect = portholeRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setTilt({ x, y })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <section
      className="relative min-h-screen overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% -10%, #0F2138 0%, #060B14 55%, #030509 100%)' }}
    >
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none">
        {[1, 2, 3, 4].map(i => (
          <div
            key={i}
            className="absolute rounded-full border"
            style={{
              width: `${i * 340}px`,
              height: `${i * 340}px`,
              borderColor: '#2FF3E0',
            }}
          />
        ))}
      </div>

      {!reducedMotion && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {particles.map(p => (
            <span
              key={p.id}
              className="absolute rounded-full mpp-particle"
              style={{
                left: `${p.left}%`,
                bottom: '-10px',
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: '#2FF3E0',
                boxShadow: '0 0 6px 2px rgba(47,243,224,0.6)',
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                ['--drift' as string]: `${p.drift}px`,
              }}
            />
          ))}
        </div>
      )}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>

            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border"
              style={{ background: 'rgba(47,243,224,0.06)', borderColor: 'rgba(47,243,224,0.25)' }}
            >
              <Compass className="w-4 h-4" style={{ color: '#2FF3E0' }} />
              <span
                className="text-xs tracking-widest"
                style={{ color: '#2FF3E0', fontFamily: "'JetBrains Mono', monospace" }}
              >
                18.4783° S · 70.3126° O — ARICA, CHILE
              </span>
            </div>

            <div className="space-y-4">
              <h1
                className="text-5xl md:text-7xl leading-[0.95]"
                style={{ fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, color: '#EAF6F8' }}
              >
                Mi Primer
                <span
                  className="block"
                  style={{
                    background: 'linear-gradient(90deg, #2FF3E0 0%, #7DE8FF 50%, #FF6B45 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Puerto
                </span>
              </h1>

              <p
                className="text-lg leading-relaxed max-w-lg"
                style={{ color: '#9FB4C4', fontFamily: "'Manrope', sans-serif" }}
              >
                Donde la <span style={{ color: '#FF6B45', fontWeight: 600 }}>tradición peruana</span> se
                encuentra con la profundidad del océano. Sabores auténticos del mar en cada bocado.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="group relative px-8 py-4 rounded-full font-semibold overflow-hidden transition-transform duration-300 hover:scale-105"
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  color: '#060B14',
                  background: 'linear-gradient(90deg, #2FF3E0, #FF6B45)',
                  boxShadow: '0 0 30px rgba(47,243,224,0.35)',
                }}
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ver Nuestra Carta
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 pt-6">
              <div
                className="p-5 rounded-2xl border backdrop-blur-sm"
                style={{ background: 'rgba(15,33,56,0.5)', borderColor: 'rgba(47,243,224,0.15)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl" style={{ background: 'rgba(47,243,224,0.12)' }}>
                    <Clock className="w-5 h-5" style={{ color: '#2FF3E0' }} />
                  </div>
                  <div>
                    <div className="text-xs tracking-wider" style={{ color: '#6B8496', fontFamily: "'JetBrains Mono', monospace" }}>HORARIO</div>
                    <div className="mt-1" style={{ color: '#EAF6F8', fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>Lun – Dom</div>
                    <div style={{ color: '#2FF3E0', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px' }}>19:00 – 00:00</div>
                  </div>
                </div>
              </div>

              <div
                className="p-5 rounded-2xl border backdrop-blur-sm"
                style={{ background: 'rgba(15,33,56,0.5)', borderColor: 'rgba(255,107,69,0.15)' }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-2.5 rounded-xl" style={{ background: 'rgba(255,107,69,0.12)' }}>
                    <MapPin className="w-5 h-5" style={{ color: '#FF6B45' }} />
                  </div>
                  <div>
                    <div className="text-xs tracking-wider" style={{ color: '#6B8496', fontFamily: "'JetBrains Mono', monospace" }}>UBICACIÓN</div>
                    <div className="mt-1" style={{ color: '#EAF6F8', fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>Arica, Chile</div>
                    <div style={{ color: '#FF6B45', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px' }}>Delivery disponible</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-2">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map(i => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2"
                    style={{ background: 'linear-gradient(135deg, #2FF3E0, #0F2138)', borderColor: '#060B14' }}
                  />
                ))}
              </div>
              <div>
                <div style={{ color: '#EAF6F8', fontFamily: "'Manrope', sans-serif", fontWeight: 600 }}>500+ clientes felices</div>
                <div className="text-sm flex items-center gap-1" style={{ color: '#9FB4C4' }}>
                  <Star className="w-3.5 h-3.5" fill="#FF6B45" stroke="#FF6B45" /> 4.9 de calificación
                </div>
              </div>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div
              className="relative mx-auto"
              style={{ width: 'min(460px, 90vw)', height: 'min(460px, 90vw)', perspective: '1000px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              ref={portholeRef}
            >
              <div
                className="relative w-full h-full transition-transform duration-200 ease-out mpp-float"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: `rotateY(${tilt.x * 10}deg) rotateX(${-tilt.y * 10}deg)`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-full"
                  style={{
                    background: 'conic-gradient(from 0deg, #1a2b3d, #3a5570, #1a2b3d, #3a5570, #1a2b3d)',
                    boxShadow: '0 0 60px rgba(47,243,224,0.25), inset 0 0 30px rgba(0,0,0,0.6)',
                  }}
                />

                <div className="absolute inset-2.5 rounded-full overflow-hidden">
                  <div
                    className="absolute inset-0 mpp-radar"
                    style={{
                      background: 'conic-gradient(from 0deg, rgba(47,243,224,0.5), transparent 25%)',
                    }}
                  />
                </div>

                <div
                  className="absolute inset-[18px] rounded-full overflow-hidden border-4"
                  style={{ borderColor: '#0F2138' }}
                >
                  <img
                    src={imgPrincipal}
                    alt="Platos de Mi Primer Puerto"
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-200"
                    style={{
                      background: `radial-gradient(circle at ${50 + tilt.x * 30}% ${50 + tilt.y * 30}%, rgba(255,255,255,0.25), transparent 45%)`,
                    }}
                  />
                </div>

                {Array.from({ length: 12 }).map((_, i) => {
                  const angle = (i / 12) * 360
                  return (
                    <div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        background: '#4a6478',
                        top: '50%',
                        left: '50%',
                        transform: `rotate(${angle}deg) translate(226px) rotate(-${angle}deg)`,
                        boxShadow: '0 0 4px rgba(0,0,0,0.5)',
                      }}
                    />
                  )
                })}

                <div
                  className="absolute -top-6 -left-4 p-4 rounded-2xl border mpp-badge-float"
                  style={{
                    background: 'rgba(6,11,20,0.85)',
                    borderColor: 'rgba(47,243,224,0.25)',
                    backdropFilter: 'blur(8px)',
                    transform: `translate(${tilt.x * -18}px, ${tilt.y * -18}px) translateZ(60px)`,
                  }}
                >
                  <div className="flex text-[#FF6B45] gap-0.5">
                    {[1, 2, 3, 4, 5].map(s => (
                      <Star key={s} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs mt-1.5 max-w-40" style={{ color: '#CBD9E3', fontFamily: "'Manrope', sans-serif" }}>
                    "El mejor ceviche que he probado"
                  </p>
                </div>

                <div
                  className="absolute -bottom-4 -right-4 px-4 py-3 rounded-2xl border flex items-center gap-3 mpp-badge-float"
                  style={{
                    background: 'rgba(6,11,20,0.85)',
                    borderColor: 'rgba(255,107,69,0.25)',
                    backdropFilter: 'blur(8px)',
                    transform: `translate(${tilt.x * 24}px, ${tilt.y * 24}px) translateZ(80px)`,
                    animationDelay: '1s',
                  }}
                >
                  <Anchor className="w-5 h-5" style={{ color: '#FF6B45' }} />
                  <div>
                    <div className="text-xs font-semibold" style={{ color: '#EAF6F8' }}>100% Frescos</div>
                    <div className="text-[10px]" style={{ color: '#6B8496', fontFamily: "'JetBrains Mono', monospace" }}>
                      DIRECTO DEL PUERTO
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        @keyframes mppRise {
          0% { transform: translateY(0) translateX(0); opacity: 0; }
          10% { opacity: 0.9; }
          90% { opacity: 0.7; }
          100% { transform: translateY(-100vh) translateX(var(--drift)); opacity: 0; }
        }
        .mpp-particle {
          animation-name: mppRise;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
        }

        @keyframes mppRadarSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .mpp-radar {
          animation: mppRadarSpin 4s linear infinite;
        }

        @keyframes mppFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .mpp-float {
          animation: mppFloat 5s ease-in-out infinite;
        }

        @keyframes mppBadgeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .mpp-badge-float {
          animation: mppBadgeFloat 4s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .mpp-float, .mpp-badge-float, .mpp-radar, .mpp-particle {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  )
}