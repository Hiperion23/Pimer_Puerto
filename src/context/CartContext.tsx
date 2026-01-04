import { createContext, useContext, useState } from "react"

export type CartItem = {
  id: number
  name: string
  price: number
  quantity: number
  image?: string
}

type CartContextType = {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  increaseQty: (id: number) => void
  decreaseQty: (id: number) => void
  removeFromCart: (id: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart(prev => {
      const existing = prev.find(p => p.id === item.id)
      if (existing) {
        return prev.map(p =>
          p.id === item.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const increaseQty = (id: number) => {
    setCart(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    )
  }

  const decreaseQty = (id: number) => {
    setCart(prev =>
      prev
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        decreaseQty,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext)!
