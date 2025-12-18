import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/images/logo.png'

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => (
<NavLink
to={to}
className={({ isActive }) =>
`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
isActive ? 'bg-sky-100 text-sky-700' : 'text-gray-700 hover:bg-sky-50'
}`
}
>
{children}
</NavLink>
)


export default function Navbar() {
return (
<header className="backdrop-blur-sm bg-white/60 border-b border-gray-100 sticky top-0 z-40">
<div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
<Link to="/" className="flex items-center gap-3">
  <img
  src={logo}
  alt="Mi primer Puerto"
  className="w-10 h-10 rounded-full object-cover border"
  />
<div>
<h1 className="text-lg font-semibold">Mi primer Puerto</h1>
<p className="text-xs text-gray-500 -mt-0.5">Sabores del puerto · cocina original</p>
</div>
</Link>


<nav className="hidden md:flex items-center gap-2">
<NavItem to="/">Inicio</NavItem>
<NavItem to="/menu">Carta</NavItem>
<NavItem to="/about">Nosotros</NavItem>
<NavItem to="/contact">Contacto</NavItem>
</nav>


<div className="md:hidden">
{/* pequeño menú móvil: reemplazar por un menú hamburger si quieres */}
<Link to="/menu" className="px-3 py-2 rounded-md text-sm font-medium bg-sky-600 text-white">Ver carta</Link>
</div>
</div>
</header>
)
}