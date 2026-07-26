import React from 'react'

export interface Dish {
  allergens: string[] | undefined
  id: string
  name: string
  price: string
  description?: string
  image?: string
  images?: string[]
  ingredients?: string[]
  tags?: string[]
}

interface Props {
  dish: Dish
  onClick: (dish: Dish) => void
}

// Ícono/emoji según la categoría, para cuando no hay foto todavía
const getPlaceholderIcon = (tags?: string[]) => {
  const tag = tags?.[0] ?? ''
  if (tag.includes('Bebida')) return '🥤'
  if (tag.includes('Jugo')) return '🧃'
  if (tag.includes('Cevich')) return '🐟'
  if (tag.includes('Picante')) return '🌶️'
  if (tag.includes('Chaufa') || tag.includes('Arroz')) return '🍚'
  if (tag.includes('Chicharr')) return '🍗'
  if (tag.includes('Sudado')) return '🍲'
  if (tag.includes('Carne')) return '🥩'
  if (tag.includes('Pescado')) return '🐠'
  if (tag.includes('Pasta') || tag.includes('Risotto')) return '🍝'
  if (tag.includes('Vegetarian')) return '🥦'
  if (tag.includes('Guarnici')) return '🍟'
  if (tag.includes('Entrada')) return '🥗'
  return '🍽️'
}

const DishCard: React.FC<Props> = ({ dish, onClick }) => {
  return (
    <article
      onClick={() => onClick(dish)}
      className="bg-white rounded-2xl shadow-sm overflow-hidden border hover:shadow-md transition cursor-pointer"
    >
      <div className="h-44 overflow-hidden bg-gray-100">
        {dish.image ? (
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-1 bg-linear-to-br from-slate-100 to-slate-200 text-slate-400">
            <span className="text-4xl">{getPlaceholderIcon(dish.tags)}</span>
            <span className="text-xs">Foto próximamente</span>
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg">{dish.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{dish.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <div className="text-sky-700 font-semibold">{dish.price}</div>
          <span className="text-sm text-gray-400">Ver más</span>
        </div>
      </div>
    </article>
  )
}

export default DishCard