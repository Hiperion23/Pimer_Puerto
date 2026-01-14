import { useState } from 'react'
import { ShoppingBag, Trash2, Plus, Minus, AlertCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'

export default function Cart() {
  const {
    cart,
    increaseQty,
    decreaseQty,
    removeFromCart
  } = useCart()

  const [sending, setSending] = useState(false)

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  const sendWhatsApp = () => {
    if (cart.length === 0) return

    setSending(true)
    const phone = '56982955585'

    let message = '🍽️ *Nuevo Pedido - Mi Primer Puerto*%0A%0A'
    cart.forEach(item => {
      message += `▸ ${item.quantity}x ${item.name}%0A  $${(
        item.price * item.quantity
      ).toLocaleString('es-CL')}%0A%0A`
    })
    message += `━━━━━━━━━━━━━━━%0A💰 *TOTAL: $${total.toLocaleString('es-CL')}*`

    setTimeout(() => {
      window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
      setSending(false)
    }, 500)
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">

        {/* Header */}
        <div className="mb-12 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <ShoppingBag className="w-7 h-7" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">Tu Pedido</h1>
            <p className="text-slate-400 text-sm">
              {cart.length} productos
            </p>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <AlertCircle className="w-16 h-16 mx-auto text-slate-600 mb-4" />
            <h3 className="text-xl font-semibold text-slate-400">
              Carrito vacío
            </h3>
          </div>
        ) : (
          <>
            {/* Items */}
            <div className="space-y-4 mb-8">
              {cart.map(item => (
                <div
                  key={item.id}
                  className="bg-slate-900/50 border border-slate-800 rounded-2xl p-5 flex gap-5"
                >
                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">{item.name}</h3>
                    <p className="text-slate-400 text-sm mb-3">
                      ${item.price.toLocaleString('es-CL')} c/u
                    </p>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-slate-800 rounded-lg p-1">
                        <button
                          onClick={() => decreaseQty(item.id)}
                          className="w-8 h-8 bg-slate-700 rounded-md flex items-center justify-center"
                        >
                          <Minus size={16} />
                        </button>

                        <span className="w-8 text-center font-bold">
                          {item.quantity}
                        </span>

                        <button
                          onClick={() => increaseQty(item.id)}
                          className="w-8 h-8 bg-blue-600 rounded-md flex items-center justify-center"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="ml-auto text-red-400 hover:text-red-300"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>

                  {/* Precio */}
                  <div className="text-right font-bold text-lg text-cyan-400">
                    ${(item.price * item.quantity).toLocaleString('es-CL')}
                  </div>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toLocaleString('es-CL')}</span>
              </div>
            </div>

            {/* WhatsApp */}
            <button
              onClick={sendWhatsApp}
              disabled={sending}
              className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-4 rounded-2xl transition disabled:opacity-50"
            >
              {sending ? 'Enviando...' : 'Enviar pedido por WhatsApp'}
            </button>
          </>
        )}
      </div>
    </div>
  )
}
