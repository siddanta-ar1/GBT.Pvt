
import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function DashboardPage() {
  return (
    <AppShell dexCount={0} hubCount={0}>
      <Card>
        <CardHeader>
          <CardTitle>📊 Dashboard Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-4">Welcome to your dashboard. Here youll find stats and quick links.</p>
          <ul className="space-y-1 text-sm text-gray-600">
            <li>🔢 Total Bookings: 48</li>
            <li>🛒 Items in Cart: 3</li>
            <li>💾 Saved Trips: 5</li>
            <li>✅ Confirmed: 12</li>
            <li>📋 Consumed: 8</li>
          </ul>
        </CardContent>
      </Card>
    </AppShell>
  )
}
