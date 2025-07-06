"use client"

import { useState } from "react"
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarDays, Trash2 } from "lucide-react"

interface CartTrek {
  id: number
  title: string
  location: string
  price: number
  description: string
  selectedDate: string
  dateOptions: string[]
}

export default function CartPage() {
  const [cart, setCart] = useState<CartTrek[]>([
    {
      id: 1,
      title: "Guerrilla 7 Day Trek Rukum",
      location: "Rukum",
      price: 150000,
      description:
        "Explore the remote and rugged trails of Rukum, retracing the historic paths used during Nepal's guerrilla conflict. This off-the-beaten-track adventure offers stunning landscapes, pristine forests, and insights into local culture and history.",
      selectedDate: "Sun, Jul 06, 2025",
      dateOptions: ["Jul 07", "Jul 08", "Jul 09", "Jul 10", "Jul 11"],
    },
    {
      id: 2,
      title: "Everest Base Camp Trek",
      location: "Khumbu",
      price: 250000,
      description:
        "Experience the iconic trek to the base of the world’s highest mountain, offering breathtaking views and Sherpa culture.",
      selectedDate: "Mon, Jul 07, 2025",
      dateOptions: ["Jul 08", "Jul 09", "Jul 10", "Jul 11", "Jul 12"],
    },
  ])

  // Remove item from cart
  const removeFromCart = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id))
  }

  // Optionally: Update selected date for an item
  const updateSelectedDate = (id: number, newDate: string) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, selectedDate: newDate } : item
      )
    )
  }

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <AppShell dexCount={0} hubCount={0}>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="text-xl">🛒 Your Cart ({cart.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {cart.length === 0 ? (
            <p className="text-center text-gray-600">Your cart is empty.</p>
          ) : (
            <>
              {cart.map((trek) => (
                <div key={trek.id} className="mb-8 border-b pb-6 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-center mb-2">
                    <h2 className="text-lg font-semibold">{trek.title}</h2>
                    <p className="text-right text-lg font-bold text-green-800">NPR {trek.price}</p>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4">{trek.description}</p>

                  <div className="border p-4 rounded-lg bg-muted/40 mb-4">
                    <p className="font-medium mb-2">
                      Selected Date: <span className="font-semibold">{trek.selectedDate}</span>
                    </p>

                    <div className="flex items-center gap-2 mb-2">
                      <CalendarDays className="w-5 h-5 text-amber-500" />
                      <span className="text-sm font-semibold">Pick a date</span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {trek.dateOptions.map((date) => (
                        <Button
                          key={date}
                          variant={date === trek.selectedDate ? "default" : "secondary"}
                          className="bg-yellow-100 hover:bg-yellow-200 text-black"
                          onClick={() => updateSelectedDate(trek.id, date)}
                        >
                          {date}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <Button className="bg-amber-500 hover:bg-amber-600">Book Now</Button>
                    <Button
                      variant="destructive"
                      className="flex items-center gap-1"
                      onClick={() => removeFromCart(trek.id)}
                    >
                      <Trash2 className="w-4 h-4" /> Remove from cart
                    </Button>
                  </div>
                </div>
              ))}

              <div className="text-right mt-4 text-lg font-semibold">
                Total Price: NPR {totalPrice}
              </div>
            </>
          )}
        </CardContent>
      </Card>
    </AppShell>
  )
}
