"use client"

import { ReactNode, useState } from "react"
import Link from "next/link"
import { Sidebar } from "@/components/layout/Sidebar"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Header } from "@/components/layout/Header"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface AppShellProps {
  children: ReactNode
  dexCount: number
  hubCount: number
  searchQuery?: string
  setSearchQuery?: (value: string) => void
  sortBy?: string
  setSortBy?: (value: string) => void
  showSearch?: boolean
}

export function AppShell({
  children,
  dexCount,
  hubCount,
  searchQuery,
  setSearchQuery,
  sortBy,
  setSortBy,
  showSearch = false,
}: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-72">
          <SheetHeader>
            <SheetTitle className="px-6 py-4 text-lg font-semibold">Menu</SheetTitle>
          </SheetHeader>

          <div className="px-4">
            <Sidebar />

            {/* My Dex & Travel Hub Badges */}
            <div className="mt-4 space-y-2 block lg:hidden">
              <Link href="/">
                <Badge className="bg-amber-100 text-amber-800 w-full block text-center">
                  My Dex | {dexCount}
                </Badge>
              </Link>
              <Link href="/hub">
                <Badge className="bg-blue-100 text-blue-800 w-full block text-center">
                  Travel Hub | {hubCount}
                </Badge>
              </Link>
            </div>

            {/* Sort Select */}
            {sortBy && setSortBy && (
              <div className="mt-4 block lg:hidden">
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
        </SheetContent>
      </Sheet>

      {/* Desktop Layout */}
      <div className="flex">
        <div className="hidden lg:block w-72 h-screen sticky top-0">
          <Sidebar />
        </div>

        <div className="flex-1 min-h-screen">
          <Header
            sidebarToggle={() => setSidebarOpen(true)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            dexCount={dexCount}
            hubCount={hubCount}
            showSearch={showSearch}
          />
          <main className="p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
