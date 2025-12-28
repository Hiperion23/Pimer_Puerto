import Hero from '../Components/Hero'
import DishCard from '../Components/DishCard'
import type { Dish } from '../Components/DishCard'

import cevicheImg from '../assets/images/dishes/ceviche.png'
import risottoImg from '../assets/images/dishes/risotto.png'
import salmonImg from '../assets/images/dishes/salmon.png'
import { Link } from 'react-router-dom'

const featuredDishes: Dish[] = [
  {
    id: '1',
    name: 'Ceviche Mi Primer Puerto',
    price: '$9.900',
    description: 'Pescado fresco del día, cítrico y cilantro.',
    image: cevicheImg,
    tags: ['Fresco', 'Marino']
  },
  {
    id: '2',
    name: 'Pasta al Mar',
    price: '$12.900',
    description: 'Pasta fresca con mariscos seleccionados.',
    image: risottoImg,
    tags: ['Pasta', 'Mariscos']
  },
  {
    id: '3',
    name: 'Salmón a la Parrilla',
    price: '$15.900',
    description: 'Salmón chileno con mantequilla de limón.',
    image: salmonImg,
    tags: ['Premium']
  }
]

export default function Home() {
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
            <DishCard key={dish.id} dish={dish} onClick={function (): void {
                  throw new Error('Function not implemented.')
              } } />
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
    </>
  )
}
