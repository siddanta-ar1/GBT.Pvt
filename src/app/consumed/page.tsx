import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ConsumedPage() {
  return (
    <AppShell dexCount={0} hubCount={0}>
      <Card>
        <CardHeader>
          <CardTitle>📋 Consumed Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your travel history is shown here.</p>
          {/* TODO: Display past trip data */}
        </CardContent>
      </Card>
    </AppShell>
  )
}
