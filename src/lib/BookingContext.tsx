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

export interface Order {
  id: number
  product: string
  contact: string
  unitPrice: number
  subtotal: number
  vat: string
  municipalTax: string
  total: number
  discount: number
  createdAt: string
  state: string
}

export interface BookingGroup {
  id: number
  groupName: string
  date: string
  orders: Order[]
  state: "draft" | "confirmed"
}

interface BookingContextType {
  cart: CartItem[]
  addToCart: (item: CartItem) => void
  removeFromCart: (id: number) => void
  updateSelectedDate: (id: number, newDate: string) => void

  savedBookings: BookingGroup[]
  confirmedBookings: BookingGroup[]

  saveCurrentCart: (groupName: string, date: string) => void
  confirmBooking: (id: number) => void
  removeSavedBooking: (id: number) => void
}

const BookingContext = createContext<BookingContextType | undefined>(undefined)

export const BookingProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [savedBookings, setSavedBookings] = useState<BookingGroup[]>([])
  const [confirmedBookings, setConfirmedBookings] = useState<BookingGroup[]>([])

  // Cart methods
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

  // Save current cart as booking group
  const saveCurrentCart = (groupName: string, date: string) => {
    if (cart.length === 0) return
    const newBooking: BookingGroup = {
      id: Date.now(),
      groupName,
      date,
      orders: cart.map((item) => ({
        id: item.id,
        product: item.title,
        contact: "Primary Contact", // You can make this dynamic later
        unitPrice: item.price,
        subtotal: item.price,
        vat: "13%",
        municipalTax: "10.5%",
        total: parseFloat((item.price * 1.235).toFixed(2)), // rough total calculation
        discount: 0,
        createdAt: new Date().toLocaleDateString(),
        state: "draft",
      })),
      state: "draft",
    }
    setSavedBookings((prev) => [...prev, newBooking])
    setCart([]) // Clear cart after saving
  }

  // Confirm a saved booking (move from saved to confirmed)
  const confirmBooking = (id: number) => {
    setSavedBookings((prev) => {
      const booking = prev.find((b) => b.id === id)
      if (!booking) return prev

      // Remove from saved
      const newSaved = prev.filter((b) => b.id !== id)

      // Add to confirmed with state updated
      setConfirmedBookings((confPrev) => [
        ...confPrev,
        { ...booking, state: "confirmed" },
      ])

      return newSaved
    })
  }

  // Remove a saved booking
  const removeSavedBooking = (id: number) => {
    setSavedBookings((prev) => prev.filter((b) => b.id !== id))
  }

  return (
    <BookingContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateSelectedDate,
        savedBookings,
        confirmedBookings,
        saveCurrentCart,
        confirmBooking,
        removeSavedBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export const useBookingContext = (): BookingContextType => {
  const context = useContext(BookingContext)
  if (!context) {
    throw new Error("useBookingContext must be used within BookingProvider")
  }
  return context
}
