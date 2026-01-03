import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChefHat, Clock, Truck, Star, Award, Heart, ArrowRight, Sparkles } from 'lucide-react'
import Hero from '../Components/Hero'
import DishCard from '../Components/DishCard'
import DishModal from '../Components/DishModal'
import type { Dish } from '../Components/DishCard'

import pulpoImg from '../assets/images/dishes/pulpo.png'
import anticuchoImg from '../assets/images/dishes/anticucho.png'
import tallarinSaltadoImg from '../assets/images/dishes/tallarin_saltado.png'
import pastaImg from '../assets/images/dishes/pasta.png'

const featuredDishes: Dish[] = [
  {
    id: '21',
    name: 'Pulpo a la Parrilla',
    price: '$10.000',
    description: 'Pulpo anticuchero con papas rústicas.',
    image: pulpoImg,
    images: [pulpoImg],
    tags: ['Especialidades'],
    ingredients: ['Pulpo', 'Ají panca', 'Chimichurri', 'Papas rústicas'],
    allergens: ['Mariscos']
  },
  {
    id: '22',
    name: 'Anticucho de Corazón',
    price: '$6.000',
    description: 'Anticucho peruano tradicional.',
    image: anticuchoImg,
    images: [anticuchoImg],
    tags: ['Especialidades'],
    ingredients: ['Corazón de res', 'Ají panca', 'Papa', 'Choclo'],
    allergens: undefined
  },
  {
    id: '23',
    name: 'Tallarín Saltado de Carne',
    price: '$8.000',
    description: 'Fideos salteados al wok.',
    image: tallarinSaltadoImg,
    images: [tallarinSaltadoImg],
    tags: ['Especialidades'],
    ingredients: ['Tallarines', 'Carne de res', 'Cebolla', 'Tomate'],
    allergens: ['Gluten']
  },
  {
    id: '24',
    name: 'Fetuccini al Ajillo con Camarones',
    price: '$8.000',
    description: 'Pasta al ajillo.',
    image: pastaImg,
    images: [pastaImg],
    tags: ['Especialidades'],
    ingredients: ['Fetuccini', 'Camarones', 'Ajo', 'Aceite de oliva'],
    allergens: ['Gluten', 'Mariscos']
  }
]

export default function Home() {
  const [selected, setSelected] = useState<Dish | null>(null)

  return (
    <>
      <Hero />

      {/* Features Section */}
      <section className="relative py-20 bg-linear-to-br from-blue-50 via-white to-cyan-50 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-blue-700 font-medium text-sm">Por qué elegirnos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Experiencia <span className="bg-linear-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Única</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <ChefHat className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recetas Auténticas</h3>
              <p className="text-gray-600 leading-relaxed">
                Platos tradicionales peruanos preparados con técnicas ancestrales y pasión.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ingredientes Frescos</h3>
              <p className="text-gray-600 leading-relaxed">
                Seleccionamos los mejores productos del mar para garantizar calidad superior.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Clock className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Horario Extendido</h3>
              <p className="text-gray-600 leading-relaxed">
                Abierto todos los días de 19:00 a 00:00 hrs para que disfrutes cuando quieras.
              </p>
            </div>

            <div className="group p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
              <div className="w-14 h-14 bg-linear-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Truck className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Delivery Rápido</h3>
              <p className="text-gray-600 leading-relaxed">
                Llevamos nuestros sabores hasta tu hogar con servicio de entrega eficiente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Dishes Section */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="absolute top-20 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute bottom-20 left-0 w-64 h-64 bg-amber-100 rounded-full blur-3xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 rounded-full mb-4">
              <Star className="w-4 h-4 text-amber-600 fill-amber-600" />
              <span className="text-amber-700 font-medium text-sm">Más pedidos</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Platos <span className="bg-linear-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Destacados</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Descubre nuestras preparaciones más solicitadas, cada una elaborada con ingredientes frescos y auténticos sabores del mar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredDishes.map(dish => (
              <DishCard
                key={dish.id}
                dish={dish}
                onClick={setSelected}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              to="/menu"
              className="group inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              Ver Carta Completa
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-4">
              <Heart className="w-4 h-4 text-pink-400 fill-pink-400" />
              <span className="text-white font-medium text-sm">Testimonios</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Lo Que Dicen Nuestros <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Clientes</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex text-amber-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                "El mejor ceviche de Arica, sin duda. Los ingredientes son fresquísimos y el sabor es auténtico. ¡Volveré seguro!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-blue-400 to-cyan-300"></div>
                <div>
                  <p className="font-semibold text-white">María González</p>
                  <p className="text-sm text-blue-300">Cliente frecuente</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex text-amber-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                "La atención es excepcional y los platos son de primera. El pulpo a la parrilla es espectacular, muy recomendado."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-amber-400 to-orange-300"></div>
                <div>
                  <p className="font-semibold text-white">Carlos Ramírez</p>
                  <p className="text-sm text-blue-300">Visitante</p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex text-amber-400 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-blue-100 mb-6 leading-relaxed">
                "Excelente relación calidad-precio. Los sabores me transportaron a Perú. Definitivamente mi nuevo lugar favorito."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-linear-to-br from-purple-400 to-pink-300"></div>
                <div>
                  <p className="font-semibold text-white">Andrea Silva</p>
                  <p className="text-sm text-blue-300">Cliente satisfecha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selected && (
        <DishModal dish={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}