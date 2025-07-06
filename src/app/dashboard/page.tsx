import { AppShell } from "@/components/layout/AppShell"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const stats = [
  { label: "Bookings", value: 0 },
  { label: "Products", value: 0 },
  { label: "Customers", value: 0 },
  { label: "Countries", value: 0 },
  { label: "Revenue", value: 0 },
]

const BookingStatRow = () => (
  <div className="flex flex-wrap gap-4 items-center px-4 py-2 bg-white rounded shadow-sm">
    {stats.map((stat, index) => (
      <div key={index} className="text-sm text-gray-700">
        <span className="font-medium">{stat.label}:</span>{" "}
        <span className="text-black font-semibold">{stat.value}</span>{" "}
        <span className="text-gray-500 text-xs">→ 0%</span>
      </div>
    ))}
  </div>
)

const BookingCard = ({ title }: { title: string }) => (
  <Card className="mb-4 bg-green-50 border border-green-100">
    <CardHeader className="flex flex-row justify-between items-center">
      <CardTitle className="text-md font-bold text-gray-900">{title}</CardTitle>
      <Button variant="ghost" size="sm" className="text-gray-600 text-xs">︿</Button>
    </CardHeader>
    <CardContent className="space-y-3">
      <BookingStatRow />
      <div className="flex justify-end gap-2 mt-2">
        <Button variant="outline" size="sm">Previous</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </CardContent>
  </Card>
)

export default function DashboardPage() {
  return (
    <AppShell dexCount={0} hubCount={0}>
      <div className="p-6">
        <BookingCard title="Today's Bookings - Sunday, July 6, 2025" />
        <BookingCard title="Tomorrow's Bookings - Monday, July 7, 2025" />
        <BookingCard title="Yesterday's Bookings - Saturday, July 5, 2025" />
      </div>
    </AppShell>
  )
}
