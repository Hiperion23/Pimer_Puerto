import { Heart, Users, Award, Sparkles, Target, Eye, ChefHat, Fish, Leaf, Clock } from 'lucide-react'
import heroVideo from '../assets/videos/hero.mp4'
import nosotrosVideo from '../assets/videos/nosotro.mp4'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
            <span className="text-white font-medium text-sm">Nuestra Historia</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Sobre <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Nosotros</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Donde la tradición peruana se encuentra con la pasión por los sabores auténticos del mar
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-20 bg-linear-to-br from-blue-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Texto */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <Sparkles className="w-4 h-4 text-blue-600" />
                <span className="text-blue-700 font-medium text-sm">Nuestro Origen</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Una Historia de <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Pasión</span>
              </h2>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Mi Primer Puerto nació en el corazón de Arica, inspirado en los sabores tradicionales del litoral peruano. Desde nuestros inicios, nos hemos dedicado a rescatar y celebrar las recetas que nos conectan con nuestras raíces.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                Cada plato que servimos cuenta una historia: la del pescador que selecciona el mejor pescado al amanecer, la de nuestro chef que perfeccionó su técnica por años, y la de cada ingrediente fresco que llega a nuestra cocina.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Creemos en una cocina honesta, creativa y cercana. Una cocina que celebra lo simple pero bien hecho, que respeta la tradición mientras abraza la innovación.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">5+</span>
                  </div>
                  <div>
                    <p className="font-semibold">Años</p>
                    <p className="text-sm text-gray-600">De experiencia</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-700">
                  <div className="w-12 h-12 bg-linear-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">500+</span>
                  </div>
                  <div>
                    <p className="font-semibold">Clientes</p>
                    <p className="text-sm text-gray-600">Satisfechos</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Imagen/Card decorativa */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video
                  src={nosotrosVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                
                {/* Badge flotante */}
                <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-linear-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shrink-0">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Calidad Garantizada</h4>
                      <p className="text-gray-600 text-sm">100% ingredientes frescos del mar</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Target className="w-4 h-4 text-amber-600" />
              <span className="text-amber-700 font-medium text-sm">Nuestros Valores</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Lo Que Nos <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Define</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Los principios que guían cada decisión y cada plato que preparamos
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 bg-linear-to-br from-blue-50 to-cyan-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-blue-100">
              <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ChefHat className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Autenticidad</h3>
              <p className="text-gray-700 leading-relaxed">
                Respetamos las recetas tradicionales peruanas, manteniendo los sabores que nos conectan con nuestras raíces.
              </p>
            </div>

            <div className="group p-8 bg-linear-to-br from-green-50 to-emerald-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-green-100">
              <div className="w-14 h-14 bg-linear-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Fish className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Frescura</h3>
              <p className="text-gray-700 leading-relaxed">
                Trabajamos solo con ingredientes frescos, seleccionados diariamente para garantizar la máxima calidad.
              </p>
            </div>

            <div className="group p-8 bg-linear-to-br from-amber-50 to-orange-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-amber-100">
              <div className="w-14 h-14 bg-linear-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Heart className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pasión</h3>
              <p className="text-gray-700 leading-relaxed">
                Cada plato es preparado con dedicación y amor, como si fuera para nuestra propia familia.
              </p>
            </div>

            <div className="group p-8 bg-linear-to-br from-purple-50 to-pink-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-purple-100">
              <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Comunidad</h3>
              <p className="text-gray-700 leading-relaxed">
                Colaboramos con pescadores y proveedores locales, apoyando la economía de nuestra región.
              </p>
            </div>

            <div className="group p-8 bg-linear-to-br from-indigo-50 to-blue-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-indigo-100">
              <div className="w-14 h-14 bg-linear-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Sostenibilidad</h3>
              <p className="text-gray-700 leading-relaxed">
                Nos comprometemos con prácticas responsables que cuidan el medio ambiente y los recursos marinos.
              </p>
            </div>

            <div className="group p-8 bg-linear-to-br from-red-50 to-rose-50 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-red-100">
              <div className="w-14 h-14 bg-linear-to-br from-red-500 to-rose-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excelencia</h3>
              <p className="text-gray-700 leading-relaxed">
                Buscamos constantemente mejorar y superar las expectativas de nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Imagen del equipo */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl order-2 lg:order-1">
                <video
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              <div className="absolute inset-0 bg-linear-to-t from-blue-900/80 via-transparent to-transparent"></div>
            </div>

            {/* Texto */}
            <div className="space-y-6 order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full">
                <Users className="w-4 h-4 text-cyan-400" />
                <span className="text-white font-medium text-sm">Nuestro Equipo</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold">
                La Gente Detrás del <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Sabor</span>
              </h2>
              
              <p className="text-xl text-blue-100 leading-relaxed">
                Somos un equipo unido por la pasión: chefs experimentados, pescadores comprometidos, y proveedores locales que comparten nuestros valores.
              </p>

              <p className="text-lg text-blue-200 leading-relaxed">
                Cada miembro de nuestro equipo aporta su talento y dedicación para crear experiencias gastronómicas memorables. Desde el que selecciona el pescado más fresco en el mercado, hasta el chef que da el toque final a cada plato.
              </p>

              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <ChefHat className="w-10 h-10 text-blue-400 mb-3" />
                  <h4 className="font-bold text-white text-lg mb-1">Chef Experto</h4>
                  <p className="text-blue-200 text-sm">Más de 15 años de experiencia en cocina peruana</p>
                </div>
                
                <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                  <Clock className="w-10 h-10 text-amber-400 mb-3" />
                  <h4 className="font-bold text-white text-lg mb-1">Dedicación Total</h4>
                  <p className="text-blue-200 text-sm">Comprometidos con tu satisfacción</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            
            <div className="p-10 bg-linear-to-br from-blue-600 to-cyan-600 rounded-3xl text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Nuestra Misión</h3>
              <p className="text-lg text-blue-50 leading-relaxed">
                Llevar los auténticos sabores del mar peruano a cada mesa, preservando las tradiciones culinarias mientras creamos experiencias gastronómicas inolvidables que conecten a las personas con nuestras raíces.
              </p>
            </div>

            <div className="p-10 bg-linear-to-br from-amber-500 to-orange-500 rounded-3xl text-white shadow-2xl">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Nuestra Visión</h3>
              <p className="text-lg text-orange-50 leading-relaxed">
                Ser el referente de cocina peruana en Arica, reconocidos por nuestra calidad excepcional, compromiso con la sostenibilidad y por crear momentos especiales que perduren en la memoria de cada cliente.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}