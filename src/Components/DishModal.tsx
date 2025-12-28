import { type Dish } from './DishCard'

interface Props {
  dish: Dish
  onClose: () => void
}

export default function DishModal({ dish, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
      
      <div className="bg-white rounded-2xl max-w-lg w-full overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-xl font-semibold">{dish.name}</h3>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        {/* Images */}
        <div className="flex overflow-x-auto gap-2 p-4">
          {(dish.images || []).map((img, i) => (
            <img
              key={i}
              src={img}
              className="h-40 w-60 object-cover rounded-lg flex-shrink-0"
            />
          ))}
        </div>

        {/* Content */}
        <div className="p-4">
          <p className="text-gray-600">{dish.description}</p>

          <div className="mt-4 text-lg font-semibold text-sky-700">
            {dish.price}
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {(dish.tags || []).map(t => (
              <span
                key={t}
                className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full"
              >
                {t}
              </span>
            ))}
          </div>

          <button className="mt-6 w-full bg-sky-700 text-white py-2 rounded-lg hover:bg-sky-800">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  )
}
