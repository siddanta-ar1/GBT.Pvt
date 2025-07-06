// app/(main)/hub/page.tsx
"use client"

import { useEffect, useState } from "react"
import { AppShell } from "@/components/layout/AppShell"
import { TravelCard } from "@/components/travel/TravelCard"
import { supabase } from "@/lib/supabaseClient"

interface TravelItem {
  id: number
  title: string
  description: string
  price: number
  image_url: string
}

export default function TravelHubPage() {
  const [items, setItems] = useState<TravelItem[]>([])

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from("travel_items").select("*")
      if (error) console.error("Error fetching travel items:", error)
      else setItems(data)
    }
    fetchItems()
  }, [])

  return (
    <AppShell dexCount={2} hubCount={items.length}>
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Travel Hub</h1>
      <p className="text-gray-600 mb-6">All travel adventures fetched from Supabase dynamically.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {items.map((item) => (
          <TravelCard
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
            price={item.price}
            imageUrl={item.image_url}
          />
        ))}
      </div>
    </AppShell>
  )
}
