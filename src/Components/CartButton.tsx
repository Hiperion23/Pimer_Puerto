import { Link } from "react-router-dom"
import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext"

export default function CartButton() {
  const { cart } = useCart()

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  )

  if (totalItems === 0) return null

  return (
    <Link
      to="/carrito"
      className="fixed bottom-6 right-6 bg-green-600 text-white rounded-full px-4 py-3 shadow-lg flex items-center gap-2 z-50 hover:scale-105 transition"
    >
      <ShoppingCart size={20} />
      <span className="font-bold">{totalItems}</span>
    </Link>
  )
}
