"use client"

import { TrekCard, Trek } from "./TrekCard"

interface Props {
  treks: Trek[]
  saved: number[]
  toggleSave: (id: number) => void
}

export function TrekGrid({ treks, saved, toggleSave }: Props) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
      {treks.map((trek) => (
        <TrekCard
          key={trek.id}
          trek={trek}
          isSaved={saved.includes(trek.id)}
          onToggleSave={toggleSave}
        />
      ))}
    </div>
  )
}
