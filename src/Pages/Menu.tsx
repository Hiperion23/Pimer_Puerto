import DishCard from '../Components/DishCard'
import type { Dish } from '../Components/DishCard'

import cevicheImg from '../assets/images/dishes/ceviche.png'
import risottoImg from '../assets/images/dishes/risotto.png'
import salmonImg from '../assets/images/dishes/salmon.png'

const dishes: Dish[] = [
  {
    id: '1',
    name: 'Ceviche Mi Primer Puerto',
    price: '$9.900',
    description: 'Clásico con toque de la casa',
    image: cevicheImg,
    tags: ['Fresco', 'Cítrico']
  },
  {
    id: '2',
    name: 'Pasta al Mar',
    price: '$12.900',
    description: 'Pasta fresca con mariscos',
    image: risottoImg,
    tags: ['Pasta', 'Mariscos']
  },
  {
    id: '3',
    name: 'Pulpo a la Plancha',
    price: '$15.500',
    description: 'Pulpo tierno con chimichurri',
    image: salmonImg,
    tags: ['Parrilla']
  }
]

export default function Menu() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold">Nuestra Carta</h2>
        <p className="text-gray-600">
          Explora todas nuestras preparaciones. Filtra por categoría o precio.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map(d => (
          <DishCard key={d.id} dish={d} />
        ))}
      </div>
    </section>
  )
}
