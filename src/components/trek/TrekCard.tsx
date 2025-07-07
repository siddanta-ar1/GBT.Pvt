// components/trek/TrekCard.tsx
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { CartItem } from "@/lib/CartContext"
import Image from "next/image"

interface TrekCardProps {
  trek: CartItem
  inCart: boolean
  toggleCart: () => void
}
// components/trek/TrekCard.tsx

export type Trek = {
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


export function TrekCard({ trek, inCart, toggleCart }: TrekCardProps) {
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
      </div>

      <CardHeader className="pb-3">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2">{trek.title}</h3>
      </CardHeader>

      <CardContent className="pt-0">
        <p className="text-gray-600 text-sm line-clamp-3 mb-4">{trek.description}</p>
      </CardContent>

      <CardFooter className="pt-0">
        <div className="flex items-center justify-between w-full">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              NPR {trek.price.toLocaleString()}
            </span>
            <p className="text-sm text-gray-500">per person</p>
          </div>
          <Button
            onClick={toggleCart}
            className={inCart ? "bg-green-500 hover:bg-green-600" : "bg-amber-500 hover:bg-amber-600"}
          >
            {inCart ? "Added to Cart" : "Add to Cart"}
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
