"use client"

import { useEffect, useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Header } from "@/components/layout/Header"
import { TrekGrid } from "@/components/trek/TrekGrid"
import { Pagination } from "@/components/ui/Pagination"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { supabase } from "@/lib/supabaseClient"
import { Trek } from "@/components/trek/TrekCard"

export default function TravelBookingApp() {
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name-az")
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [savedTreks, setSavedTreks] = useState<number[]>([])
  const [treks, setTreks] = useState<Trek[]>([])
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
      if (error) console.error(error)
      else setTreks(data as Trek[])
      setLoading(false)
    }

    fetchTreks()
  }, [])

  const filteredTreks = treks.filter((t) =>
    t.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-72">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex">
        <div className="hidden lg:block w-72 h-screen sticky top-0">
          <Sidebar />
        </div>

        <div className="flex-1 min-h-screen">
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            dexCount={treks.length}
            hubCount={savedTreks.length}
          />

          <main className="p-4 lg:p-6">
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
          </main>
        </div>
      </div>
    </div>
  )
}
