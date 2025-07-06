import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ConfirmedPage() {
  return (
    <AppShell dexCount={0} hubCount={0}>
      <Card>
        <CardHeader>
          <CardTitle>✅ Confirmed Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Your confirmed bookings are listed below.</p>
          {/* TODO: Fetch and list confirmed bookings */}
        </CardContent>
      </Card>
    </AppShell>
  )
}
