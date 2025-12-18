import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavItem: React.FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({
  to,
  children,
  onClick
}) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      `block px-4 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive
          ? 'bg-sky-100 text-sky-700'
          : 'text-gray-700 hover:bg-sky-50'
      }`
    }
  >
    {children}
  </NavLink>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="backdrop-blur-sm bg-white/60 border-b border-gray-100 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
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

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-2">
          <NavItem to="/">Inicio</NavItem>
          <NavItem to="/menu">Carta</NavItem>
          <NavItem to="/about">Nosotros</NavItem>
          <NavItem to="/contact">Contacto</NavItem>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md hover:bg-sky-50"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <nav className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="px-4 py-3 space-y-1">
            <NavItem to="/" onClick={() => setOpen(false)}>Inicio</NavItem>
            <NavItem to="/menu" onClick={() => setOpen(false)}>Carta</NavItem>
            <NavItem to="/about" onClick={() => setOpen(false)}>Nosotros</NavItem>
            <NavItem to="/contact" onClick={() => setOpen(false)}>Contacto</NavItem>
          </div>
        </nav>
      )}
    </header>
  )
}
