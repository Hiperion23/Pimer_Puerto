import { useState } from 'react'
import Hero from '../Components/Hero'
import DishCard from '../Components/DishCard'
import DishModal from '../Components/DishModal'
import type { Dish } from '../Components/DishCard'
import { Link } from 'react-router-dom'

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

      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-3xl font-semibold">Platos destacados</h3>
          <p className="text-gray-600 mt-3">
            Una selección de nuestras preparaciones más solicitadas.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {featuredDishes.map(dish => (
            <DishCard
              key={dish.id}
              dish={dish}
              onClick={setSelected}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/menu"
            className="inline-block px-6 py-3 rounded-full bg-sky-600 text-white font-semibold hover:bg-sky-700 transition"
          >
            Ver carta completa
          </Link>
        </div>
      </section>

      {selected && (
        <DishModal dish={selected} onClose={() => setSelected(null)} />
      )}
    </>
  )
}
