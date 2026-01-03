import { Facebook, Instagram, Phone, MapPin, Clock, Star, Award, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  const handleWhatsApp = () => {
    window.open('https://wa.me/56959790676', '_blank')
  }

  return (
    <footer className="relative bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white mt-16 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Mi Primer Puerto
            </h3>
            <p className="text-blue-200 text-sm leading-relaxed">
              Sabores auténticos del mar peruano. Tradición y calidad en cada plato.
            </p>
            
            {/* Social Media */}
            <div className="flex gap-3 pt-2">
              <a 
                href="https://web.facebook.com/cevicheria.mi.primer.puerto/reels/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-blue-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/cevicheriamiprimerpuerto/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-linear-to-br hover:from-purple-500 hover:to-pink-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 hover:bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 group cursor-pointer">
                <MapPin className="w-5 h-5 text-blue-400 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <p className="text-blue-100 group-hover:text-white transition-colors">
                    Radio Urbano, Arica
                  </p>
                  <p className="text-blue-300 text-xs">Arica y Parinacota, Chile</p>
                </div>
              </div>
              
              <a href="tel:+56959790676" className="flex items-center gap-3 group hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                <span className="text-blue-100">+569 5979 0676</span>
              </a>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5" />
                <div>
                  <p className="text-blue-100">Lunes - Domingo</p>
                  <p className="text-blue-300 text-xs">19:00 - 00:00 hrs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
                Enlaces Rápidos
            </h4>

            <nav className="flex flex-col gap-2 text-sm">
                <Link
                to="/menu"
                className="text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                → Nuestra Carta
                </Link>

                <Link
                to="/about"
                className="text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                → Nosotros
                </Link>

                <Link
                to="/contact"
                className="text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                → Reservas
                </Link>

{/*                 <Link
                to="/menu"
                className="text-blue-200 hover:text-white hover:translate-x-1 transition-all duration-200"
                >
                → Delivery
                </Link>
 */}            </nav>
          </div>


          {/* Stats & Features */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">Nuestro Compromiso</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-linear-to-br from-green-500 to-emerald-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Ingredientes Frescos</p>
                  <p className="text-blue-300 text-xs">100% calidad garantizada</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-linear-to-br from-amber-500 to-orange-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Star className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Excelencia Culinaria</p>
                  <p className="text-blue-300 text-xs">Recetas tradicionales</p>
                </div>
              </div>

              <div className="flex items-start gap-3 group">
                <div className="p-2 bg-linear-to-br from-blue-500 to-cyan-600 rounded-lg group-hover:scale-110 transition-transform">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">500+ Clientes</p>
                  <p className="text-blue-300 text-xs">Satisfechos desde 2020</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 my-8"></div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
          <div className="text-blue-200">
            © {new Date().getFullYear()} Mi Primer Puerto. Todos los derechos reservados.
          </div>
          
          
          <div className="flex gap-6 text-blue-200">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacidad
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Términos
            </a>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <button
        onClick={handleWhatsApp}
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center z-50 animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </button>
    </footer>
  )
}