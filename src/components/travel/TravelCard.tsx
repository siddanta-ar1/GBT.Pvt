import { useCart } from "@/lib/CartContext"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card"
import { Button } from "../ui/button"

interface TravelCardProps {
  id: number
  title: string
  description: string
  price: number
  imageUrl: string
  inCart: boolean
  toggleCart: () => void
}

export function TravelCard({ id, title, description, price, imageUrl }: TravelCardProps) {
  const { addToCart, cart } = useCart()
  const inCart = cart.some((item) => item.id === id)

  const handleClick = () => {
    if (!inCart) {
      addToCart({ id, title, description, price, image: imageUrl })
    }
  }

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
        <p className="text-xl font-bold text-gray-900">
          NPR {price.toLocaleString()}
        </p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={handleClick}
          className={
            inCart ? "bg-green-500 hover:bg-green-600" : "bg-amber-500 hover:bg-amber-600"
          }
        >
          {inCart ? "Added to Cart" : "Add to Cart"}
        </Button>
      </CardFooter>
    </Card>
  )
}
