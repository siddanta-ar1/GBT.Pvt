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
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name-az") 

  useEffect(() => {
    const fetchItems = async () => {
      const { data, error } = await supabase.from("travel_items").select("*")
      if (error) console.error("Error fetching travel items:", error)
      else setItems(data)
    }
    fetchItems()
  }, [])

  // Apply search filter and then sort
  const filteredItems = items
    .filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      switch (sortBy) {
        case "name-az":
          return a.title.localeCompare(b.title)
        case "name-za":
          return b.title.localeCompare(a.title)
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        default:
          return 0
      }
    })

  return (
    <AppShell
      dexCount={2}               // You can make this dynamic if needed
      hubCount={items.length}
      showSearch={true}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      sortBy={sortBy}
      setSortBy={setSortBy}
    >
      <h1 className="text-2xl font-bold text-gray-900 mb-4">Travel Hub</h1>
      <p className="text-gray-600 mb-6">
        All travel adventures fetched from Supabase dynamically.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
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
