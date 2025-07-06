// components/layout/AppShell.tsx
"use client"

import { ReactNode, useState } from "react"
import { Sidebar } from "@/components/layout/Sidebar"
import { Sheet, SheetContent } from "@/components/ui/sheet"
import { Header } from "@/components/layout/Header"

interface AppShellProps {
  children: ReactNode
  dexCount: number
  hubCount: number
}

export function AppShell({ children, dexCount, hubCount }: AppShellProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState("name-az")

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Sidebar */}
      <Sheet open={sidebarOpen} onOpenChange={setSidebarOpen}>
        <SheetContent side="left" className="p-0 w-72">
          <Sidebar />
        </SheetContent>
      </Sheet>

      <div className="flex">
        {/* Desktop Sidebar */}
        <div className="hidden lg:block w-72 h-screen sticky top-0">
          <Sidebar />
        </div>

        {/* Main Area */}
        <div className="flex-1 min-h-screen">
          <Header
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            sortBy={sortBy}
            setSortBy={setSortBy}
            dexCount={dexCount}
            hubCount={hubCount}
          />

          <main className="p-4 lg:p-6">{children}</main>
        </div>
      </div>
    </div>
  )
}
