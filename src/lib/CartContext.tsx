"use client"

import React, { createContext, useContext, useState, ReactNode } from "react"

export interface CartItem {
  id: number
  title: string
  location?: string
  price: number
  description: string
  selectedDate?: string
  dateOptions?: string[]
  duration?: string
  difficulty?: string
  rating?: number
  reviews?: number
  image?: string
  highlights?: string[]
}


interface CartContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateSelectedDate: (id: number, newDate: string) => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev
      return [...prev, item]
    })
  }

  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  const updateSelectedDate = (id: number, newDate: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selectedDate: newDate } : item
      )
    )
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateSelectedDate }}
    >
      {children}
    </CartContext.Provider>
  )
}
