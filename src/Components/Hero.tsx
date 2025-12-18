import { Link } from 'react-router-dom'
import imgPrincipal from '../assets/images/principal.png'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-8 items-center">
        
        {/* Texto */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Mi primer Puerto
          </h2>

          <p className="mt-4 text-gray-600 max-w-xl">
            Cocina de autor inspirada en la brisa del mar. Ingredientes frescos, recetas creativas y un ambiente acogedor.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to="/menu"
              className="px-5 py-3 rounded-full bg-gradient-to-r from-sky-600 to-amber-400 text-white font-semibold shadow"
            >
              Ver Carta
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 rounded-full border"
            >
              Reservar
            </Link>
          </div>

          <div className="mt-8 flex gap-4 text-sm text-gray-500">
            <div>
              <div className="font-semibold">Horario</div>
              <div>Mié - Dom · 12:00 - 23:00</div>
            </div>

            <div>
              <div className="font-semibold">Dirección</div>
              <div>Calle del Mar 123, Puerto</div>
            </div>
          </div>
        </div>

        {/* Imagen principal */}
        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src={imgPrincipal}
            alt="Img principal de Mi primer Puerto"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </section>
  )
}
