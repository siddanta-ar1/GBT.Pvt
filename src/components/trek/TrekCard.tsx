"use client"

import { MapPin, Clock, Star, Heart } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export interface Trek {
  id: number
  title: string
  location: string
  duration: string
  difficulty: string
  price: number
  rating: number
  reviews: number
  image: string
  description: string
  highlights: string[]
}

interface Props {
  trek: Trek
  isSaved: boolean
  onToggleSave: (id: number) => void
}

export function TrekCard({ trek, isSaved, onToggleSave }: Props) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <Image
          src={trek.image || "/placeholder.svg"}
          alt={trek.title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-3 right-3 bg-white/80 hover:bg-white"
          onClick={() => onToggleSave(trek.id)}
        >
          <Heart className={`h-4 w-4 ${isSaved ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
        </Button>
        <Badge className="absolute top-3 left-3 bg-white/90 text-gray-800">{trek.difficulty}</Badge>
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{trek.title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            {trek.location}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {trek.duration}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="font-medium">{trek.rating}</span>
          </div>
          <span className="text-sm text-gray-500">({trek.reviews} reviews)</span>
        </div>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{trek.description}</p>
        <div className="flex flex-wrap gap-1 mb-4">
          {trek.highlights.slice(0, 3).map((highlight, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {highlight}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div>
            <span className="text-2xl font-bold text-gray-900">NPR {trek.price.toLocaleString()}</span>
            <p className="text-sm text-gray-500">per person</p>
          </div>
          <Button className="bg-amber-500 hover:bg-amber-600">Add to Cart</Button>
        </div>
      </CardFooter>
    </Card>
  )
}
