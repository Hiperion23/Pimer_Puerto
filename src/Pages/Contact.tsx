import { useState } from 'react'
import { MapPin, Mail, Phone, Calendar, Clock, Send, MessageCircle, Users, CheckCircle } from 'lucide-react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    date: '',
    time: '',
    guests: '2'
  })

  const handleSubmit = () => {
    // Validación básica
    if (!formData.name || !formData.email || !formData.phone || !formData.date || !formData.time) {
      alert('Por favor completa todos los campos obligatorios')
      return
    }
    
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        date: '',
        time: '',
        guests: '2'
      })
    }, 3000)
  }

  const handleWhatsApp = () => {
    const message = `Hola! Me gustaría hacer una reserva para ${formData.guests} personas`
    window.open(`https://wa.me/56959790676?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-cyan-400" />
            <span className="text-white font-medium text-sm">Estamos aquí para ti</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Contacto & <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Reservas</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            ¿Listo para disfrutar? Reserva tu mesa o contáctanos para eventos especiales
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/30 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            
            {/* INFO CARDS - 2 columnas */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Info Principal */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
                
                <div className="space-y-5">
                  <a 
                    href="https://maps.google.com/?q=Arica,Chile" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-blue-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Dirección</p>
                      <p className="text-gray-600 text-sm mt-1">Radio Urbano, Arica</p>
                      <p className="text-gray-500 text-xs">Arica y Parinacota, Chile</p>
                    </div>
                  </a>

                  <a 
                    href="tel:+56959790676"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-green-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Teléfono</p>
                      <p className="text-gray-600 text-sm mt-1">+569 5979 0676</p>
                      <p className="text-gray-500 text-xs">Lunes - Domingo</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:contacto@miprimerpuerto.cl"
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-amber-50 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Email</p>
                      <p className="text-gray-600 text-sm mt-1">contacto@miprimerpuerto.cl</p>
                      <p className="text-gray-500 text-xs">Respuesta en 24hrs</p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4 p-4 rounded-xl bg-purple-50">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Horario</p>
                      <p className="text-gray-600 text-sm mt-1">Lunes - Domingo</p>
                      <p className="text-gray-900 font-medium text-sm">19:00 - 00:00 hrs</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl shadow-xl p-8 text-white">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">¿Prefieres WhatsApp?</h3>
                    <p className="text-green-100 text-sm">Reserva más rápido</p>
                  </div>
                </div>
                <p className="text-green-50 mb-6 leading-relaxed">
                  Contáctanos directamente por WhatsApp para una respuesta inmediata y confirmación instantánea de tu reserva.
                </p>
                <button
                  onClick={handleWhatsApp}
                  className="w-full px-6 py-4 bg-white hover:bg-green-50 text-green-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                >
                  Abrir WhatsApp
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* FORM - 3 columnas */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                <div className="mb-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">Reserva tu Mesa</h3>
                  <p className="text-gray-600">Completa el formulario y te confirmaremos tu reserva</p>
                </div>

                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                      <CheckCircle className="w-10 h-10 text-white" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">¡Reserva Enviada!</h4>
                    <p className="text-gray-600 max-w-md mx-auto">
                      Hemos recibido tu solicitud. Te contactaremos pronto para confirmar tu reserva.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nombre completo *
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="Juan Pérez"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Teléfono *
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                          placeholder="+56 9 1234 5678"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Correo electrónico *
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="correo@ejemplo.com"
                      />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-blue-600" />
                          Fecha *
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({...formData, date: e.target.value})}
                          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          Hora *
                        </label>
                        <input
                          type="time"
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-600" />
                          Comensales *
                        </label>
                        <select
                          value={formData.guests}
                          onChange={(e) => setFormData({...formData, guests: e.target.value})}
                          className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 focus:outline-none focus:border-blue-500 transition-colors"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'persona' : 'personas'}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Mensaje o solicitudes especiales
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        rows={4}
                        className="w-full rounded-xl border-2 border-gray-200 px-4 py-3 resize-none focus:outline-none focus:border-blue-500 transition-colors"
                        placeholder="¿Tienes alguna preferencia o solicitud especial? (alergias, cumpleaños, etc.)"
                      />
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={handleSubmit}
                        className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3"
                      >
                        <Calendar className="w-6 h-6" />
                        Confirmar Reserva
                      </button>
                      <p className="text-center text-sm text-gray-500 mt-4">
                        * Campos obligatorios
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-gray-900 mb-4">
              Encuéntranos en <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Arica</span>
            </h3>
            <p className="text-gray-600 text-lg">Estamos ubicados en Radio Urbano, esperándote</p>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-gray-100">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.7!2d-70.3!3d-18.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDMwJzAwLjAiUyA3MMKwMTgnMDAuMCJX!5e0!3m2!1ses!2scl!4v1234567890"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </div>
  )
}