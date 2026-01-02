import { useState, useRef } from 'react'
import type { Dish } from './DishCard'

interface Props {
  dish: Dish
  onClose: () => void
}

export default function DishModal({ dish, onClose }: Props) {
  const images =
    dish.images && dish.images.length > 0
      ? dish.images
      : dish.image
      ? [dish.image]
      : []

  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const startX = useRef(0)
  const dragging = useRef(false)

  const width = typeof window !== 'undefined' ? window.innerWidth : 360

  const start = (x: number) => {
    dragging.current = true
    startX.current = x
  }

  const move = (x: number) => {
    if (!dragging.current) return
    setOffset(x - startX.current)
  }

  const end = () => {
    dragging.current = false

    if (offset < -80 && index < images.length - 1) {
      setIndex(i => i + 1)
    } else if (offset > 80 && index > 0) {
      setIndex(i => i - 1)
    }

    setOffset(0)
  }

  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center">
      <div className="bg-white w-full max-w-xl rounded-2xl overflow-hidden relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-black/60 text-white rounded-full w-8 h-8"
        >
          ✕
        </button>

        {/* Carousel */}
        <div
          className="relative h-64 overflow-hidden touch-pan-y"
          onTouchStart={e => start(e.touches[0].clientX)}
          onTouchMove={e => move(e.touches[0].clientX)}
          onTouchEnd={end}
          onMouseDown={e => start(e.clientX)}
          onMouseMove={e => dragging.current && move(e.clientX)}
          onMouseUp={end}
          onMouseLeave={end}
        >
          <div
            className="flex h-full transition-transform duration-300"
            style={{
              transform: `translateX(${offset - index * width}px)`
            }}
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={img}
                className="h-full w-full object-cover shrink-0"
                draggable={false}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i === index ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold">{dish.name}</h3>
          <p className="text-gray-600 mt-2">{dish.description}</p>

          <div className="mt-4 text-xl font-semibold text-sky-700">
            {dish.price}
          </div>

          {/* Ingredients */}
          {dish.ingredients?.length && (
            <div className="mt-5">
              <h4 className="text-sm font-semibold mb-2">Ingredientes</h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {dish.ingredients.map(i => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Allergens */}
          {dish.allergens?.length && (
            <div className="mt-4 text-xs text-red-600">
              Alérgenos: {dish.allergens.join(', ')}
            </div>
          )}

          {/* Tags */}
          <div className="mt-4 flex flex-wrap gap-2">
            {dish.tags?.map(t => (
              <span
                key={t}
                className="bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-xs"
              >
                {t}
              </span>
            ))}
          </div>

          <button className="mt-6 w-full bg-sky-700 text-white py-3 rounded-lg hover:bg-sky-800 transition">
            Reservar / Agregar
          </button>
        </div>
      </div>
    </div>
  )
}
