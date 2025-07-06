import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CartPage() {
  return (
    <AppShell dexCount={0} hubCount={0}>
      <Card>
        <CardHeader>
          <CardTitle>🛒 My Cart</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">You have 3 items in your cart.</p>
          {/* TODO: Render items in cart */}
          <Button className="bg-amber-500">Proceed to Checkout</Button>
        </CardContent>
      </Card>
    </AppShell>
  )
}
