"use client"

import Link from "next/link"
import { Menu, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  sidebarToggle?: () => void
  searchQuery?: string
  setSearchQuery?: (v: string) => void
  sortBy?: string
  setSortBy?: (v: string) => void
  dexCount: number
  hubCount: number
  showSearch?: boolean
}

export function Header({
  sidebarToggle,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  dexCount,
  hubCount,
  showSearch = false,
}: HeaderProps) {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="px-4 lg:px-6 py-5 flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between lg:hidden">
          <Button variant="ghost" size="icon" onClick={sidebarToggle}>
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Search Input */}
        {showSearch && searchQuery !== undefined && setSearchQuery && (
          <div className="flex-1 relative max-w-xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <Input
              placeholder="Search treks or destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 text-base py-2.5 bg-gray-50 border-gray-200"
            />
          </div>
        )}

        
        
{/* Larger Badge Links */}
<div className="flex gap-3 items-center justify-between lg:justify-end">
  <Link href="/">
    <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 px-4 py-2 text-base rounded-md">
      My Dex | {dexCount}
    </Badge>
  </Link>
  <Link href="/hub">
    <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 px-4 py-2 text-base rounded-md">
      Travel Hub | {hubCount}
    </Badge>
  </Link>
</div>

        {/* Sort Selector */}
        {sortBy !== undefined && setSortBy && (
          <div className="w-full lg:w-36">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full">
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
        )}
      </div>
    </header>
  )
}
