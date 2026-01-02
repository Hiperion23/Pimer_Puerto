import { useState, useEffect } from 'react'
import { Waves, Clock, MapPin, Star, ChefHat } from 'lucide-react'
import imgPrincipal from '../assets/images/principal.png'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  
  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden bg-linear-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <Waves className="w-32 h-32 text-white" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <ChefHat className="w-24 h-24 text-white" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
              <span className="text-white text-sm font-medium">Experiencia Gastronómica Única</span>
            </div>

            {/* Main heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                Mi Primer
                <span className="block bg-linear-to-r from-blue-400 via-cyan-300 to-amber-400 bg-clip-text text-transparent">
                  Puerto
                </span>
              </h1>
              
              <p className="text-xl text-blue-100 leading-relaxed max-w-lg">
                Donde la <span className="font-semibold text-amber-300">tradición peruana</span> se encuentra con la innovación culinaria. 
                Sabores auténticos del mar en cada bocado.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Link
                to="/menu"
                className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Ver Nuestra Carta
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              
              <Link
                to="/contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                Reservar Mesa
              </Link>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 pt-8">
              <div className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Horario</div>
                    <div className="text-blue-200 text-sm mt-1">Lunes - Domingo</div>
                    <div className="text-blue-100 font-medium">19:00 - 00:00 hrs</div>
                  </div>
                </div>
              </div>

              <div className="group p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-linear-to-br from-amber-500 to-orange-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-white text-lg">Ubicación</div>
                    <div className="text-blue-200 text-sm mt-1">Arica, Chile</div>
                    <div className="text-blue-100 font-medium">Delivery disponible</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-linear-to-br from-blue-400 to-cyan-300 border-2 border-slate-900"></div>
                ))}
              </div>
              <div className="text-white">
                <div className="font-semibold">500+ clientes felices</div>
                <div className="text-sm text-blue-200">⭐ 4.9 de calificación</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            
            {/* Floating badge */}
            <div className="absolute -top-6 -left-6 z-20 p-4 bg-white rounded-2xl shadow-2xl animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-linear-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">✓</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">Ingredientes</div>
                  <div className="text-sm text-gray-600">100% Frescos</div>
                </div>
              </div>
            </div>

            {/* Main image container */}
            <div className="relative group">
              {/* Gradient border effect */}
              <div className="absolute -inset-1 bg-linear-to-r from-blue-500 via-cyan-400 to-amber-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse-slow"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={imgPrincipal}
                  alt="Platos de Mi Primer Puerto"
                  className="w-full h-[500px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 p-5 bg-white rounded-2xl shadow-2xl animate-float animation-delay-1000 max-w-xs">
              <div className="flex items-center gap-3 mb-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-gray-700 font-medium">
                "El mejor ceviche que he probado. ¡Totalmente recomendado!"
              </p>
              <p className="text-xs text-gray-500 mt-2">- María González</p>
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}