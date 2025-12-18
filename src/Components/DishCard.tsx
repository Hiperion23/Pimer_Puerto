import React from 'react'

export interface Dish {
  id: string
  name: string
  price: string
  description?: string
  image?: string
  tags?: string[]
}

const DishCard: React.FC<{ dish: Dish }> = ({ dish }) => {
  return (
    <article className="bg-white rounded-2xl shadow-sm overflow-hidden border hover:shadow-md transition-shadow">
      
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
          <button className="text-sm px-3 py-1 rounded-md border hover:bg-sky-50">
            Agregar
          </button>
        </div>

        <div className="mt-3 flex flex-wrap gap-2">
          {(dish.tags || []).map(t => (
            <span
              key={t}
              className="text-xs bg-sky-50 px-2 py-1 rounded-full text-sky-700"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

    </article>
  )
}

export default DishCard
