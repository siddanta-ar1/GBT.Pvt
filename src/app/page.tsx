"use client"

import { useEffect, useState } from "react"
import { AppShell } from "@/components/layout/AppShell"
import { TrekGrid } from "@/components/trek/TrekGrid"
import { Pagination } from "@/components/ui/Pagination"
import { supabase } from "@/lib/supabaseClient"
import { Trek } from "@/components/trek/TrekCard" // ✅ import the type



export default function TravelBookingApp() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name-az")
  const [savedTreks, setSavedTreks] = useState<number[]>([])
  const [treks, setTreks] = useState<Trek[]>([]) // ✅ use the Trek type
  const [loading, setLoading] = useState(true)

  const toggleSaved = (id: number) => {
    setSavedTreks((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  useEffect(() => {
    const fetchTreks = async () => {
      setLoading(true)
      const { data, error } = await supabase.from("treks").select("*")
      if (error) {
        console.error(error)
      } else {
        setTreks(data as Trek[])
      }
      setLoading(false)
    }

    fetchTreks()
  }, [])

  const filteredTreks = treks
    .filter((t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase())
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
        case "rating":
          return (b.rating || 0) - (a.rating || 0)
        default:
          return 0
      }
    })

  return (
    <AppShell
      dexCount={treks.length}
      hubCount={savedTreks.length}
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      sortBy={sortBy}
      setSortBy={setSortBy}
      showSearch={true}
    >
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Available Treks</h1>
        <p className="text-gray-600">Discover amazing trekking adventures in Nepal</p>
      </div>

      {loading ? (
        <p className="text-center text-gray-600">Loading treks...</p>
      ) : (
        <>
          <TrekGrid treks={filteredTreks} saved={savedTreks} toggleSave={toggleSaved} />
          <Pagination />
        </>
      )}
    </AppShell>
  )
}
