// components/travel/TravelCard.tsx
"use client"

import Image from "next/image"
import { useState } from "react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

interface TravelCardProps {
  id: number
  title: string
  description: string
  price: number
  imageUrl: string
}

export function TravelCard({  title, description, price, imageUrl }: TravelCardProps) {
  const [added, setAdded] = useState(false)

  return (
    <Card className="hover:shadow-md transition-shadow duration-200 overflow-hidden">
      <Image
        src={imageUrl}
        alt={title}
        width={500}
        height={300}
        className="w-full h-48 object-cover"
      />
      <CardHeader>
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 line-clamp-3 mb-2">{description}</p>
        <p className="text-xl font-bold text-gray-900">NPR {price.toLocaleString()}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => setAdded(!added)}
          className={added ? "bg-green-500 hover:bg-green-600" : "bg-amber-500 hover:bg-amber-600"}
        >
          {added ? "Added to Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
