"use client"

import Link from "next/link"
import { Search, Menu } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sheet, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  searchQuery: string
  setSearchQuery: (v: string) => void
  sortBy: string
  setSortBy: (v: string) => void
  dexCount: number
  hubCount: number
}

export function Header({
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  dexCount,
  hubCount,
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="px-4 lg:px-6 py-4 flex items-center gap-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
        </Sheet>

        {/* Search */}
        <div className="flex-1 max-w-md relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search treks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 bg-gray-50 border-gray-200"
          />
        </div>

        {/* Tabs with count */}
        <div className="hidden sm:flex items-center gap-2">
          <Link href="/">
            <Badge variant="secondary" className="bg-amber-100 text-amber-800 cursor-pointer hover:bg-amber-200">
              My Dex | {dexCount}
            </Badge>
          </Link>
          <Link href="/hub">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 cursor-pointer hover:bg-blue-200">
              Travel Hub | {hubCount}
            </Badge>
          </Link>
        </div>

        {/* Sort */}
        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Sort" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name-az">Name (A-Z)</SelectItem>
            <SelectItem value="name-za">Name (Z-A)</SelectItem>
            <SelectItem value="price-low">Price (Low)</SelectItem>
            <SelectItem value="price-high">Price (High)</SelectItem>
            <SelectItem value="rating">Rating</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </header>
  )
}
