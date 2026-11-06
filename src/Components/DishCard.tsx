import React from 'react'

export interface Dish {
  disponible: boolean
  allergens: string[] | undefined
  id: string
  name: string
  price: number
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
  const img = dish.images?.[0] ?? dish.image

  const combo = dish.tags?.includes('Trío')
    ? 'Trío'
    : dish.tags?.includes('Dúo')
    ? 'Dúo'
    : null

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#0F2138]/60 transition-colors hover:border-[#2FF3E0]/40 has-[:focus-visible]:border-[#2FF3E0]">
      <div className="relative aspect-[16/10] overflow-hidden bg-[#0B1626]">
        {img ? (
          <img
            src={img}
            alt={dish.name}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-linear-to-br from-[#0F2138] to-[#0B1626] text-[#EAF6F8]/40">
            <span className="text-4xl">{getPlaceholderIcon(dish.tags)}</span>
            <span className="text-xs">Foto próximamente</span>
          </div>
        )}

        {combo && (
          <span className="absolute left-3 top-3 rounded-full bg-[#FF6B45] px-2.5 py-1 text-xs font-semibold text-[#060B14]">
            Combo {combo}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-['Chakra_Petch'] text-lg font-semibold leading-snug text-[#EAF6F8]">
          {/* El botón se estira sobre toda la tarjeta para que sea clickeable */}
          <button
            type="button"
            onClick={() => onClick(dish)}
            className="text-left after:absolute after:inset-0 after:content-[''] focus:outline-none"
          >
            {dish.name}
          </button>
        </h3>

        {dish.description && (
          <p className="mt-1 line-clamp-2 text-sm text-[#EAF6F8]/60">
            {dish.description}
          </p>
        )}

        <div className="mt-auto flex items-end justify-between pt-4">
          <span className="font-['JetBrains_Mono'] text-base font-medium text-[#2FF3E0]">
            ${Number(dish.price).toLocaleString('es-CL')}
          </span>
          <span className="text-sm text-[#EAF6F8]/55 transition-colors group-hover:text-[#EAF6F8]">
            Ver más
          </span>
        </div>
      </div>
    </article>
  )
}

export default DishCard