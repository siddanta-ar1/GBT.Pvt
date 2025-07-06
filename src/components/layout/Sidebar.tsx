"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { sidebarItems } from "@/lib/data"

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col h-full bg-white border-r border-gray-200">
      {/* Top logo section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">MT</span>
          </div>
          <div>
            <h2 className="font-semibold text-gray-900">Mechi Treks</h2>
            <p className="text-xs text-gray-500">Pvt Ltd</p>
          </div>
        </div>
      </div>

      {/* Sidebar navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <li key={item.href}>
                <Link href={item.href}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start gap-3 px-3 py-2.5 rounded-lg text-left transition-colors ${
                      isActive
                        ? "bg-amber-50 text-amber-700 border border-amber-200"
                        : "text-gray-600 hover:bg-gray-50"
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Button>
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>

      {/* Logout button */}
      <div className="p-4 border-t border-gray-200">
        <Button variant="outline" className="w-full justify-start gap-2 bg-transparent">
          <span>🚪</span>
          Logout
        </Button>
      </div>
    </div>
  )
}
