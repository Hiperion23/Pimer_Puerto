import { useState, useEffect } from 'react'
import DishCard from '../Components/DishCard'
import type { Dish } from '../Components/DishCard'
import DishModal from '../Components/DishModal'
import { api } from '../api/api'

export default function Menu() {
  const [dishes, setDishes] = useState<Dish[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null)
  const [search, setSearch] = useState('')

  useEffect(() => {
    let cancelled = false

    async function fetchDishes() {
      setLoading(true)
      setError(null)
      try {
        const data = await api.get<Dish[]>('/api/platos')
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

  const filteredDishes = dishes.filter(d => {
    if (d.disponible === false) {
      return false
    }
    const text = search.toLowerCase()

    return (
      d.name.toLowerCase().includes(text) ||
      d.description?.toLowerCase().includes(text) ||
      d.tags?.some(tag => tag.toLowerCase().includes(text)) ||
      d.ingredients?.some(ing => ing.toLowerCase().includes(text))
    )
  })

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold mb-2">Nuestra Carta</h2>
      <p className="text-gray-600 mb-4">
        Tradición peruana con sabor casero.
      </p>

      <div className="mb-8">
        <input
          type="text"
          placeholder="Buscar platos, ingredientes o combos..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          disabled={loading}
          className="w-full md:w-1/2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 disabled:opacity-50"
        />
      </div>

      {loading && (
        <p className="text-center text-slate-400 mt-10">Cargando...</p>
      )}

      {!loading && error && (
        <div className="text-center mt-10">
          <p className="text-red-400 mb-3">No se pudo cargar la carta: {error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 rounded-lg bg-slate-800 text-white hover:bg-slate-700"
          >
            Reintentar
          </button>
        </div>
      )}

      {!loading && !error && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredDishes.map(d => (
              <DishCard key={d.id} dish={d} onClick={() => setSelectedDish(d)} />
            ))}
          </div>

          {filteredDishes.length === 0 && (
            <p className="text-center text-slate-400 mt-10">
              No se encontraron platos 😕
            </p>
          )}
        </>
      )}

      {selectedDish && (
        <DishModal dish={selectedDish} onClose={() => setSelectedDish(null)} />
      )}
    </section>
  )
}