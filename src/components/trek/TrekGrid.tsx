// TrekGrid.tsx
"use client"

import { CartItem, useCart } from "@/lib/CartContext"
import { TrekCard } from "./TrekCard"

interface Props {
  treks: CartItem[]
   saved: number[]                      // ✅ include this
  toggleSave: (id: number) => void    // ✅ and this
}

export function TrekGrid({ treks }: Props) {
  const { cart, addToCart, removeFromCart } = useCart()

  const toggleCart = (item: CartItem) => {
    const inCart = cart.some((ci) => ci.id === item.id)
    if (inCart) {
      removeFromCart(item.id)
    } else {
      addToCart({
        ...item,
        selectedDate: new Date().toDateString(),
        dateOptions: ["Jul 07", "Jul 08", "Jul 09", "Jul 10"],
      })
    }
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      {treks.map((trek) => (
        <TrekCard
          key={trek.id}
          trek={trek}
          inCart={cart.some((ci) => ci.id === trek.id)}
          toggleCart={() => toggleCart(trek)}
        />
      ))}
    </div>
  )
}
