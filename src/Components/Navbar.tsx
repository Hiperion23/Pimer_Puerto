import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '../context/CartContext'
import logo from '../assets/images/logo.png'

const NavItem: React.FC<{
  to: string
  children: React.ReactNode
  onClick?: () => void
}> = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `
      text-2xl font-semibold transition-colors
      text-white md:text-gray-700
      hover:text-sky-300 md:hover:text-sky-600
      ${isActive ? 'md:text-sky-600' : ''}
      `
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { cart } = useCart()

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  return (
    <>
      {/* NAVBAR */}
      <header className="backdrop-blur-sm bg-white/60 border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Mi primer Puerto"
              className="w-10 h-10 rounded-full object-cover border"
            />
            <div>
              <h1 className="text-lg font-semibold">Mi primer Puerto</h1>
              <p className="text-xs text-gray-500 -mt-0.5">
                Sabores del puerto · cocina original
              </p>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-3">
            <NavLink to="/" className="px-3 py-2 rounded-md text-sm font-medium">Inicio</NavLink>
            <NavLink to="/menu" className="px-3 py-2 rounded-md text-sm font-medium">Carta</NavLink>
            <NavLink to="/about" className="px-3 py-2 rounded-md text-sm font-medium">Nosotros</NavLink>
            <NavLink to="/contact" className="px-3 py-2 rounded-md text-sm font-medium">Contacto</NavLink>

            {/* CARRITO */}
            <Link to="/carrito" className="relative ml-2">
              <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-sky-600 transition" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </nav>

          {/* HAMBURGER */}
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/97 flex flex-col">

          {/* TOP BAR */}
          <div className="flex items-center justify-between px-6 py-5 border-b text-white">
            <span className="text-lg font-semibold">Menú</span>

            <div className="flex items-center gap-4">
              {/* CARRITO */}
              <Link
                to="/carrito"
                onClick={() => setOpen(false)}
                className="relative"
              >
                <ShoppingCart className="w-6 h-6" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>

              {/* CLOSE */}
              <button onClick={() => setOpen(false)} aria-label="Cerrar menú">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* LINKS */}
          <nav className="flex-1 flex flex-col items-center justify-center gap-10">
            <NavItem to="/" onClick={() => setOpen(false)}>Inicio</NavItem>
            <NavItem to="/menu" onClick={() => setOpen(false)}>Carta</NavItem>
            <NavItem to="/about" onClick={() => setOpen(false)}>Nosotros</NavItem>
            <NavItem to="/contact" onClick={() => setOpen(false)}>Contacto</NavItem>
          </nav>

          <div className="pb-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Mi primer Puerto
          </div>
        </div>
      )}
    </>
  )
}
