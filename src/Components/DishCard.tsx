/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

export interface Dish {
  allergens: any
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
          <div className="h-full flex items-center justify-center text-gray-400">
            Imagen
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
