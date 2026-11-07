import React from 'react'
import { ArrowUpRight } from 'lucide-react'

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
    <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0B1626] transition-all duration-300 hover:-translate-y-1 hover:border-[#2FF3E0]/40 hover:shadow-[0_18px_50px_-18px_rgba(47,243,224,0.35)] has-[:focus-visible]:border-[#2FF3E0] motion-reduce:transition-none motion-reduce:hover:translate-y-0">
      <div className="relative aspect-[4/3] overflow-hidden">
        {img ? (
          <img
            src={img}
            alt={dish.name}
            loading="lazy"
            draggable={false}
            className="h-full w-full object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-1 bg-linear-to-br from-[#0F2138] to-[#0B1626] text-[#EAF6F8]/40">
            <span className="text-5xl">{getPlaceholderIcon(dish.tags)}</span>
            <span className="text-xs">Foto próximamente</span>
          </div>
        )}

        {/* Degradado para fundir la imagen con el cuerpo de la tarjeta */}
        <div className="absolute inset-0 bg-linear-to-t from-[#0B1626] via-[#0B1626]/10 to-transparent" />

        {combo && (
          <span className="absolute left-4 top-4 rounded-full bg-[#FF6B45] px-3 py-1 text-xs font-semibold text-[#060B14]">
            Combo {combo}
          </span>
        )}

        <span className="absolute right-4 top-4 rounded-full border border-[#2FF3E0]/30 bg-[#060B14]/70 px-3 py-1 font-['JetBrains_Mono'] text-sm font-medium text-[#2FF3E0] backdrop-blur-md">
          ${Number(dish.price).toLocaleString('es-CL')}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-1.5 p-5 pt-2">
        <h3 className="font-['Chakra_Petch'] text-xl font-semibold leading-snug text-[#EAF6F8]">
          {/* El botón se estira sobre toda la tarjeta para que sea clickeable */}
          <button
            type="button"
            onClick={() => onClick(dish)}
            className="text-left after:absolute after:inset-0 after:z-10 after:content-[''] focus:outline-none"
          >
            {dish.name}
          </button>
        </h3>

        {dish.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-[#EAF6F8]/60">
            {dish.description}
          </p>
        )}

        <div className="mt-auto flex items-center justify-between pt-4">
          <span className="text-sm text-[#EAF6F8]/55 transition-colors group-hover:text-[#EAF6F8]">
            Ver detalle
          </span>
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#2FF3E0]/40 text-[#2FF3E0] transition-colors duration-300 group-hover:bg-[#2FF3E0] group-hover:text-[#060B14]">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </div>
    </article>
  )
}

export default DishCard