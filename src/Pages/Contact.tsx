import { MapPin, Mail, Phone, Calendar, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section className="relative py-20 px-4">
      
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-amber-50 -z-10" />

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
        
        {/* INFO */}
        <div>
          <h2 className="text-4xl font-semibold leading-tight">
            Contacto & Reservas
          </h2>

          <p className="text-gray-600 mt-4 max-w-md">
            Reserva tu mesa o contáctanos para eventos especiales.
            Te responderemos a la brevedad.
          </p>

          <ul className="mt-8 space-y-4 text-gray-700">
            <li className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-sky-600" />
              Calle del Mar 123, Puerto
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-sky-600" />
              +56 9 1234 5678
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-sky-600" />
              contacto@miprimerpuerto.cl
            </li>
          </ul>
        </div>

        {/* FORM */}
        <form className="bg-white/70 backdrop-blur-lg border border-white/60 shadow-xl rounded-3xl p-8 grid gap-5">
          
          <div>
            <label className="text-sm text-gray-500">Nombre</label>
            <input
              className="mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Correo</label>
            <input
              type="email"
              className="mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="correo@email.com"
            />
          </div>

          <div>
            <label className="text-sm text-gray-500">Mensaje</label>
            <textarea
              rows={4}
              className="mt-1 w-full rounded-xl border px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="Cuéntanos qué necesitas..."
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Fecha
              </label>
              <input
                type="date"
                className="mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="text-sm text-gray-500 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Hora
              </label>
              <input
                type="time"
                className="mt-1 w-full rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-sky-600 to-amber-400 text-white py-3 rounded-xl font-semibold text-lg hover:opacity-90 transition"
          >
            Reservar mesa
          </button>
        </form>
      </div>
    </section>
  )
}
