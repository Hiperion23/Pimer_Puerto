import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu as MenuIcon, ShoppingCart, X } from 'lucide-react'
import { useCart } from '../context/CartContext'
import logo from '../assets/images/logo.png'

const links = [
  { to: '/', label: 'Inicio', end: true },
  { to: '/menu', label: 'Carta' },
  { to: '/about', label: 'Nosotros' },
  { to: '/contact', label: 'Contacto' },
]

const CartLink: React.FC<{ count: number; onClick?: () => void }> = ({
  count,
  onClick,
}) => (
  <Link
    to="/carrito"
    onClick={onClick}
    aria-label={`Carrito, ${count} ${count === 1 ? 'producto' : 'productos'}`}
    className="relative flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#EAF6F8] transition-colors hover:border-[#2FF3E0]/50 hover:text-[#2FF3E0]"
  >
    <ShoppingCart className="h-5 w-5" />
    {count > 0 && (
      <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#FF6B45] px-1 font-['JetBrains_Mono'] text-[11px] font-semibold text-[#060B14]">
        {count}
      </span>
    )}
  </Link>
)

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { cart } = useCart()

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  useEffect(() => {
    if (!open) return

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)

    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = previous
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#060B14]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logo}
              alt="Mi primer Puerto"
              className="h-10 w-10 rounded-full border border-[#2FF3E0]/40 object-cover shadow-[0_0_18px_-4px_#2FF3E0]"
            />
            <div>
              <span className="block font-['Chakra_Petch'] text-lg font-semibold leading-tight text-[#EAF6F8]">
                Mi primer Puerto
              </span>
              <span className="-mt-0.5 block text-xs text-[#EAF6F8]/55">
                Sabores del puerto · cocina original
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-2">
            <nav aria-label="Principal" className="hidden items-center gap-1 md:flex">
              {links.map(({ to, label, end }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    `relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#2FF3E0]'
                        : 'text-[#EAF6F8]/75 hover:text-[#EAF6F8]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      <span
                        aria-hidden="true"
                        className={`absolute inset-x-4 bottom-0.5 h-px bg-[#2FF3E0] shadow-[0_0_8px_#2FF3E0] transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              ))}
            </nav>

            <div className="md:ml-2">
              <CartLink count={totalItems} />
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] text-[#EAF6F8] transition-colors hover:border-[#2FF3E0]/50 hover:text-[#2FF3E0] md:hidden"
            >
              <MenuIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menú principal"
          className="fixed inset-0 z-50 flex flex-col bg-[#060B14] bg-[radial-gradient(ellipse_at_top_left,rgba(47,243,224,0.12)_0%,transparent_55%)]"
        >
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3.5">
            <span className="font-['Chakra_Petch'] text-lg font-semibold text-[#EAF6F8]">
              Menú
            </span>

            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Cerrar menú"
              autoFocus
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-[#EAF6F8] transition-colors hover:border-[#2FF3E0]/50 hover:text-[#2FF3E0]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav
            aria-label="Principal"
            className="flex flex-1 flex-col justify-center px-6"
          >
            {links.map(({ to, label, end }, index) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `flex items-baseline gap-4 border-b border-white/10 py-5 font-['Chakra_Petch'] text-4xl font-semibold transition-colors ${
                    isActive
                      ? 'text-[#2FF3E0]'
                      : 'text-[#EAF6F8] hover:text-[#2FF3E0]'
                  }`
                }
              >
                <span className="font-['JetBrains_Mono'] text-sm font-normal text-[#2FF3E0]/70">
                  {String(index + 1).padStart(2, '0')}
                </span>
                {label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center justify-between px-6 pb-8 pt-4 text-sm text-[#EAF6F8]/50">
            <span>© {new Date().getFullYear()} Mi primer Puerto</span>
            <CartLink count={totalItems} onClick={() => setOpen(false)} />
          </div>
        </div>
      )}
    </>
  )
}