import { useState, useRef } from "react"
import { useCart } from "../context/CartContext"
import type { Dish } from "./DishCard"

interface Props {
  dish: Dish
  onClose: () => void
}

export default function DishModal({ dish, onClose }: Props) {
  const { addToCart } = useCart()

  // =========================
  // Tipo de plato
  // =========================
  const isCombo =
    dish.tags?.includes("Dúo") || dish.tags?.includes("Trío")

  const isSide =
    dish.tags?.includes("Guarniciones")

  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const comboOptions = dish.ingredients?.filter(
    i => !i.toLowerCase().includes("elige")
  )

  // =========================
  // Imágenes
  // =========================
  const images =
    dish.images && dish.images.length > 0
      ? dish.images
      : dish.image
      ? [dish.image]
      : []

  // =========================
  // Carousel
  // =========================
  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState(0)
  const startX = useRef(0)
  const dragging = useRef(false)

  const width =
    typeof window !== "undefined" ? window.innerWidth : 360

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

  // =========================
  // Render
  // =========================
  return (
    <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-xl rounded-2xl overflow-hidden relative">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center"
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

          {images.length > 1 && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <span
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i === index ? "bg-white" : "bg-white/40"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-semibold">{dish.name}</h3>

          <p className="text-gray-600 mt-2">{dish.description}</p>

          <div className="mt-4 text-xl font-semibold text-sky-700">
            {dish.price}
          </div>

          {/* Badges */}
          {isSide && (
            <div className="mt-2 inline-block bg-amber-100 text-amber-700 px-3 py-1 rounded-full text-xs font-medium">
              🍟 Guarnición
            </div>
          )}

          {isCombo && (
            <div className="mt-2 inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-medium">
              🤝 Combo {dish.tags?.includes("Trío") ? "Trío" : "Dúo"}
            </div>
          )}

          {/* Ingredientes normales */}
          {!isCombo && dish.ingredients && dish.ingredients.length > 0 && (
            <div className="mt-5">
              <h4 className="text-sm font-semibold mb-2">
                Ingredientes
              </h4>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {dish.ingredients.map(i => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Selector combo */}
          {isCombo && comboOptions && (
            <div className="mt-5">
              <h4 className="text-sm font-semibold mb-3">
                {dish.tags?.includes("Trío")
                  ? "Elige 3 platos"
                  : "Elige 2 platos"}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {comboOptions.map(option => {
                  const selected = selectedOptions.includes(option)
                  const max =
                    dish.tags?.includes("Trío") ? 3 : 2

                  return (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedOptions(prev => {
                          if (selected)
                            return prev.filter(o => o !== option)
                          if (prev.length >= max) return prev
                          return [...prev, option]
                        })
                      }}
                      className={`border rounded-lg px-3 py-2 text-sm text-left transition ${
                        selected
                          ? "bg-sky-700 text-white border-sky-700"
                          : "bg-white hover:bg-sky-50"
                      }`}
                    >
                      {selected ? "✓ " : ""}{option}
                    </button>
                  )
                })}
              </div>

              <p className="mt-2 text-xs text-gray-500">
                Seleccionados: {selectedOptions.length}
              </p>
            </div>
          )}

          {/* Allergens */}
          {dish.allergens && dish.allergens.length > 0 && (
            <div className="mt-4 text-xs text-red-600">
              Alérgenos: {dish.allergens.join(", ")}
            </div>
          )}

          {/* Add to cart */}
          <button
            disabled={
              isCombo &&
              selectedOptions.length !==
                (dish.tags?.includes("Trío") ? 3 : 2)
            }
            onClick={() => {
              if (isCombo) {
                const required =
                  dish.tags?.includes("Trío") ? 3 : 2
                if (selectedOptions.length !== required) return
              }

              addToCart({
                id: Number(dish.id),
                name: dish.name,
                price: Number(
                  dish.price.replace(/\./g, "").replace("$", "")
                ),
                quantity: 1,
              })

              onClose()
            }}
            className={`mt-6 w-full py-3 rounded-lg transition ${
              isSide
                ? "bg-amber-600 hover:bg-amber-700 text-white"
                : isCombo
                ? "bg-purple-700 hover:bg-purple-800 text-white disabled:opacity-40"
                : "bg-sky-700 hover:bg-sky-800 text-white"
            }`}
          >
            {isSide
              ? "➕ Agregar guarnición"
              : isCombo
              ? "🧩 Agregar combo"
              : "🛒 Agregar al pedido"}
          </button>
        </div>
      </div>
    </div>
  )
}
