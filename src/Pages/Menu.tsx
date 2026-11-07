import { useState, useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { ChevronLeft, ChevronRight, Search, X } from 'lucide-react'
import DishCard from '../Components/DishCard'
import type { Dish } from '../Components/DishCard'
import DishModal from '../Components/DishModal'
import { api } from '../api/api'


const CATEGORY_ORDER = [
  'Entradas',
  'Carta Cevichera',
  'Carta Picantera',
  'Pescados',
  'Sudados',
  'Especialidades',
  'Lomo Saltado',
  'Pastas',
  'Arroces',
  'Chaufas',
  'Risottos',
  'Carnes',
  'Chicharrones',
  'Dúo',
  'Trío',
  'Vegetariano',
  'Guarniciones',
  'Bebidas',
]

const MODIFIER_TAGS = new Set(['Picante', 'Nuevo', 'Recomendado'])

const OTHER = 'Otros'

const FONT_CSS =
  "@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=JetBrains+Mono:wght@400;500&family=Manrope:wght@400;500;600&display=swap');"


type Named = { id: string; name?: string; nombre?: string }
type RawDish = Dish & { categoria_id?: string | null; category_id?: string | null }
type MenuDish = Dish & { category?: string }

const UUID_RE =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function toMap(result: PromiseSettledResult<Named[]>) {
  const map = new Map<string, string>()

  if (result.status === 'fulfilled' && Array.isArray(result.value)) {
    for (const item of result.value) {
      const label = (item.nombre ?? item.name ?? '').trim()
      if (item.id && label) map.set(item.id, label)
    }
  }

  return map
}

async function loadMenu(): Promise<MenuDish[]> {
  const [platos, tags, cats, allergens] = await Promise.allSettled([
    api.get<RawDish[]>('/api/platos'),
    api.get<Named[]>('/api/tags'),
    api.get<Named[]>('/api/categorias'),
    api.get<Named[]>('/api/allergens'),
  ])

  if (platos.status === 'rejected') throw platos.reason

  const catMap = toMap(cats)
  const lookup = new Map<string, string>([
    ...catMap,
    ...toMap(tags),
    ...toMap(allergens),
  ])
  const catNames = new Set(catMap.values())

  const resolve = (values?: string[]) =>
    (values ?? [])
      .map(v => lookup.get(v) ?? v)
      .filter(v => !UUID_RE.test(v))

  return platos.value.map(dish => {
    const resolvedTags = resolve(dish.tags)
    const categoryId = dish.categoria_id ?? dish.category_id

    const category =
      (categoryId && catMap.get(categoryId)) ||
      resolvedTags.find(t => catNames.has(t)) ||
      resolvedTags.find(t => !MODIFIER_TAGS.has(t)) ||
      OTHER

    return {
      ...dish,
      tags: resolvedTags,
      allergens: dish.allergens ? resolve(dish.allergens) : dish.allergens,
      category,
    }
  })
}

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

const slug = (s: string) => norm(s).replace(/[^a-z0-9]+/g, '-')

function rank(name: string) {
  if (name === OTHER) return 999
  const i = CATEGORY_ORDER.indexOf(name)
  return i === -1 ? 500 : i
}

function buildGroups(dishes: MenuDish[]) {
  const map = new Map<string, MenuDish[]>()

  for (const dish of dishes) {
    const name = dish.category || OTHER
    const list = map.get(name)
    if (list) list.push(dish)
    else map.set(name, [dish])
  }

  return [...map.entries()]
    .map(([name, items]) => ({ name, items }))
    .sort((a, b) => {
      const ra = rank(a.name)
      const rb = rank(b.name)
      if (ra === rb) return a.name.localeCompare(b.name, 'es')
      return ra - rb
    })
}

const prefersReducedMotion = () =>
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Menu() {
  const [dishes, setDishes] = useState<MenuDish[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [search, setSearch] = useState('')
  const [active, setActive] = useState('')

  const rootRef = useRef<HTMLDivElement>(null)
  const chipsRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    let cancelled = false

    async function fetchDishes() {
      setLoading(true)
      setError(null)
      try {
        const data = await loadMenu()
        if (!cancelled) setDishes(data)
      } catch (err) {
        if (!cancelled) {
          setError(
            err instanceof Error ? err.message : 'Error al cargar la carta'
          )
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    fetchDishes()
    return () => {
      cancelled = true
    }
  }, [])

  useEffect(() => {
    const header = document.querySelector('header')
    const root = rootRef.current
    if (!header || !root) return

    const update = () =>
      root.style.setProperty(
        '--nav-h',
        `${header.getBoundingClientRect().height}px`
      )

    update()
    const observer = new ResizeObserver(update)
    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName
      if (e.key === '/' && tag !== 'INPUT' && tag !== 'TEXTAREA') {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const groups = useMemo(() => {
    const text = norm(search.trim())

    const filtered = dishes.filter(d => {
      if (d.disponible === false) return false
      if (!text) return true

      return (
        norm(d.name).includes(text) ||
        norm(d.description ?? '').includes(text) ||
        !!d.tags?.some(tag => norm(tag).includes(text)) ||
        !!d.ingredients?.some(ing => norm(ing).includes(text))
      )
    })

    return buildGroups(filtered)
  }, [dishes, search])

  const total = groups.reduce((sum, g) => sum + g.items.length, 0)

  const current = groups.some(g => g.name === active)
    ? active
    : groups[0]?.name ?? ''

  useEffect(() => {
    const sections = document.querySelectorAll<HTMLElement>('[data-cat]')
    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      entries => {
        const visible = entries.find(e => e.isIntersecting)
        const name = visible?.target.getAttribute('data-cat')
        if (name) setActive(name)
      },
      { rootMargin: '-25% 0px -65% 0px' }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [groups])

  useEffect(() => {
    const container = chipsRef.current
    if (!container || !current) return

    const chip = container.querySelector<HTMLElement>(
      `[data-chip="${CSS.escape(current)}"]`
    )
    if (!chip) return

    container.scrollTo({
      left: chip.offsetLeft - container.clientWidth / 2 + chip.clientWidth / 2,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }, [current])

  const goTo = (name: string) => {
    document.getElementById(slug(name))?.scrollIntoView({
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
      block: 'start',
    })
  }

  const scrollChips = (dir: 1 | -1) => {
    chipsRef.current?.scrollBy({
      left: dir * 320,
      behavior: prefersReducedMotion() ? 'auto' : 'smooth',
    })
  }

  return (
    <div
      ref={rootRef}
      className="relative isolate min-h-screen overflow-x-clip bg-[#060B14] font-['Manrope'] text-[#EAF6F8]"
    >
      <style>{FONT_CSS}</style>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(234,246,248,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(234,246,248,0.04)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:radial-gradient(ellipse_at_top,black_25%,transparent_72%)]" />
        <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#2FF3E0]/10 blur-3xl" />
        <div className="absolute -right-48 top-[44rem] h-[30rem] w-[30rem] rounded-full bg-[#FF6B45]/10 blur-3xl" />

        <div className="absolute -right-48 -top-8 hidden h-[36rem] w-[36rem] md:block">
          <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(47,243,224,0.22)_70deg,transparent_71deg)] motion-safe:animate-[spin_9s_linear_infinite]" />
          <svg
            viewBox="0 0 400 400"
            fill="none"
            stroke="currentColor"
            className="absolute inset-0 h-full w-full text-[#2FF3E0]/20"
          >
            <circle cx="200" cy="200" r="62" />
            <circle cx="200" cy="200" r="112" />
            <circle cx="200" cy="200" r="162" strokeDasharray="3 7" />
            <circle cx="200" cy="200" r="198" />
            <line x1="200" y1="0" x2="200" y2="400" />
            <line x1="0" y1="200" x2="400" y2="200" />
          </svg>
        </div>
      </div>

      <header className="mx-auto max-w-6xl px-4 pt-14 sm:px-6 sm:pt-20">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2FF3E0]/25 bg-[#2FF3E0]/5 px-3.5 py-1.5 font-['JetBrains_Mono'] text-xs text-[#2FF3E0]">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#2FF3E0] opacity-60 motion-safe:animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#2FF3E0]" />
          </span>
          {loading || error
            ? 'Sincronizando carta'
            : `${dishes.filter(d => d.disponible !== false).length} platos en carta`}
        </div>

        <h1 className="mt-5 font-['Chakra_Petch'] text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
          Nuestra{' '}
          <span className="bg-linear-to-r from-[#2FF3E0] to-[#8AF9EE] bg-clip-text text-transparent">
            Carta
          </span>
        </h1>

        <p className="mt-4 max-w-md text-lg text-[#EAF6F8]/70">
          <span className="text-[#FF6B45]">Tradición peruana</span> con sabor
          casero.
        </p>

        <div className="group relative mt-8 max-w-xl">
          <div
            aria-hidden="true"
            className="absolute -inset-px rounded-full bg-linear-to-r from-[#2FF3E0]/50 via-transparent to-[#FF6B45]/50 opacity-0 blur-sm transition-opacity duration-300 group-focus-within:opacity-100"
          />
          <Search
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute left-5 top-1/2 z-10 -translate-y-1/2 text-[#EAF6F8]/45"
          />
          <input
            ref={inputRef}
            type="text"
            inputMode="search"
            aria-label="Buscar en la carta"
            placeholder="Buscar platos, ingredientes o combos..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            disabled={loading}
            className="relative w-full rounded-full border border-white/10 bg-[#0B1626]/90 py-3.5 pl-12 pr-14 text-base text-[#EAF6F8] placeholder:text-[#EAF6F8]/40 focus:border-[#2FF3E0]/60 focus:outline-none disabled:opacity-50"
          />
          {search ? (
            <button
              type="button"
              onClick={() => setSearch('')}
              aria-label="Borrar búsqueda"
              className="absolute inset-y-0 right-0 z-10 flex w-12 items-center justify-center text-[#EAF6F8]/55 hover:text-[#EAF6F8]"
            >
              <X size={18} />
            </button>
          ) : (
            <kbd className="absolute right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-md border border-white/15 px-2 py-0.5 font-['JetBrains_Mono'] text-xs text-[#EAF6F8]/45 sm:block">
              /
            </kbd>
          )}
        </div>

        {search && !loading && !error && (
          <p className="mt-3 font-['JetBrains_Mono'] text-xs text-[#EAF6F8]/55">
            {total} {total === 1 ? 'resultado' : 'resultados'}
          </p>
        )}
      </header>

      {/* Barra de categorías */}
      {!loading && !error && groups.length > 0 && (
        <div className="sticky top-[var(--nav-h,80px)] z-30 mt-10 border-y border-white/10 bg-[#060B14]/80 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl items-center gap-1 px-2 sm:px-4">
            <button
              type="button"
              onClick={() => scrollChips(-1)}
              aria-label="Categorías anteriores"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#EAF6F8]/60 transition-colors hover:bg-white/5 hover:text-[#2FF3E0] md:flex"
            >
              <ChevronLeft size={20} />
            </button>

            <div
              ref={chipsRef}
              className="relative flex flex-1 gap-2 overflow-x-auto px-6 py-3 [mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {groups.map(({ name, items }) => {
                const isActive = current === name
                return (
                  <button
                    key={name}
                    type="button"
                    data-chip={name}
                    onClick={() => goTo(name)}
                    aria-current={isActive ? 'true' : undefined}
                    className={`flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border px-4 py-2 text-sm transition-all duration-300 ${
                      isActive
                        ? 'border-[#2FF3E0]/60 bg-[#2FF3E0]/10 text-[#2FF3E0] shadow-[0_0_24px_-6px_#2FF3E0]'
                        : 'border-white/10 bg-white/[0.03] text-[#EAF6F8]/75 hover:border-white/25 hover:text-[#EAF6F8]'
                    }`}
                  >
                    <span>{name}</span>
                    <span className="font-['JetBrains_Mono'] text-[11px] opacity-60">
                      {items.length}
                    </span>
                  </button>
                )
              })}
            </div>

            <button
              type="button"
              onClick={() => scrollChips(1)}
              aria-label="Más categorías"
              className="hidden h-9 w-9 shrink-0 items-center justify-center rounded-full text-[#EAF6F8]/60 transition-colors hover:bg-white/5 hover:text-[#2FF3E0] md:flex"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-6xl px-4 pb-28 sm:px-6">
        {loading && (
          <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="h-80 rounded-3xl border border-white/5 bg-white/[0.04] motion-safe:animate-pulse"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="mt-16 text-center">
            <p className="mb-4 text-[#FFB09C]">
              No se pudo cargar la carta: {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="rounded-full border border-white/15 px-5 py-2 text-sm hover:border-[#2FF3E0]/50"
            >
              Reintentar
            </button>
          </div>
        )}

        {!loading &&
          !error &&
          groups.map(({ name, items }, index) => (
            <section
              key={name}
              id={slug(name)}
              data-cat={name}
              className="scroll-mt-[calc(var(--nav-h,80px)+5rem)] pt-14"
            >
              <div className="mb-6 flex items-end gap-4">
                <span className="mb-1.5 font-['JetBrains_Mono'] text-sm text-[#2FF3E0]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 className="font-['Chakra_Petch'] text-3xl font-semibold tracking-tight sm:text-4xl">
                  {name}
                </h2>
                <span className="mb-2.5 h-px flex-1 bg-linear-to-r from-[#2FF3E0]/40 via-white/10 to-transparent" />
                <span className="mb-1.5 hidden font-['JetBrains_Mono'] text-xs text-[#EAF6F8]/45 sm:block">
                  {items.length} {items.length === 1 ? 'plato' : 'platos'}
                </span>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(d => (
                  <DishCard
                    key={d.id}
                    dish={d}
                    onClick={() => setSelectedDish(d)}
                  />
                ))}
              </div>
            </section>
          ))}

        {!loading && !error && groups.length === 0 && (
          <div className="py-24 text-center">
            <p className="font-['Chakra_Petch'] text-2xl">
              No encontramos platos{search ? ` para “${search}”` : ''}
            </p>
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="mt-5 rounded-full border border-white/15 px-5 py-2 text-sm hover:border-[#2FF3E0]/50"
              >
                Ver toda la carta
              </button>
            )}
          </div>
        )}
      </main>

      {selectedDish &&
        createPortal(
          <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />,
          document.body
      )}
    </div>
  )
}