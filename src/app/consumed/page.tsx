import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { FileText } from "lucide-react"
import { Button } from "@/components/ui/button"

type ConsumedOrder = {
  id: number
  pnr: string
  product: string
  contact: string
  unitPrice: number
  subtotal: number
  vat: string
  municipalTax?: string // ✅ make it optional
  total: number
  discount: number
  createdAt: string
  state: string
  icon: boolean
}

type ConsumedGroup = {
  id: number
  groupName: string
  date: string
  orders: ConsumedOrder[]
}

const consumedBookings: ConsumedGroup[] = [
  {
    id: 1,
    groupName: "twoqty",
    date: "Tue, Jan 14, 2025",
    orders: [
      {
        id: 414,
        pnr: "PNR/20250113/00111",
        product: "1 Hour Hot Air Balloon Ride Kathmandu (6am to 7am)",
        contact: "Gaurav Dhungana",
        unitPrice: 20000.0,
        subtotal: 20000.0,
        vat: "13%",
        total: 22600.0,
        discount: 0,
        createdAt: "1/13/2025",
        state: "posted",
        icon: true,
        // municipalTax omitted
      },
    ],
  },
  {
    id: 2,
    groupName: "nauravs booking",
    date: "Mon, Feb 24, 2025",
    orders: [
      {
        id: 411,
        pnr: "PNR/20250112/00108",
        product: "River Splash",
        contact: "Naurav Nhungana",
        unitPrice: 400.43,
        subtotal: 400.43,
        vat: "13%",
        municipalTax: "10.5%", // ✅ present here
        total: 494.54,
        discount: 0,
        createdAt: "1/13/2025",
        state: "posted",
        icon: true,
      },
    ],
  },
]

export default function ConsumedPage() {
  return (
    <AppShell dexCount={0} hubCount={0}>
      <Card>
        <CardHeader>
          <CardTitle>📋 Consumed Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <Input placeholder="🔍 Search for orders..." className="mb-4 max-w-md" />

          {consumedBookings.map((group) => (
            <div key={group.id} className="mb-6 border rounded-lg p-4 bg-muted/30">
              <div className="flex justify-between items-center mb-2">
                <div className="flex items-center gap-2">
                  <Checkbox />
                  <h2 className="font-semibold text-md">
                    {group.groupName} - <span className="text-gray-600">{group.date}</span>
                  </h2>
                </div>
                <Button variant="link" className="text-sm text-amber-600">View Detail &gt;</Button>
              </div>

              <div className="overflow-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-100 font-semibold">
                    <tr className="text-left">
                      <th className="p-2">Select</th>
                      <th>ID</th>
                      <th>PNR</th>
                      <th>Product Name</th>
                      <th>Primary Contact</th>
                      <th>Unit Price</th>
                      <th>Subtotal</th>
                      <th>VAT</th>
                      {group.orders.some(o => o.municipalTax) && <th>Municipal Tax</th>}
                      <th>Total</th>
                      <th>Discount</th>
                      <th>Date</th>
                      <th>State</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                 <tbody>
  {group.orders.map((order) => (
    <tr key={order.id} className="border-t">
      <td className="p-2">
        <Checkbox />
      </td>
      <td>{order.id}</td>
      <td>{order.pnr}</td>
      <td>{order.product}</td>
      <td>{order.contact}</td>
      <td>{order.unitPrice.toFixed(2)}</td>
      <td>{order.subtotal.toFixed(2)}</td>
      <td>{order.vat}</td>
      {group.orders.some(o => o.municipalTax) && (
        <td>{order.municipalTax ?? "-"}</td>
      )}
      <td>{order.total.toFixed(2)}</td>
      <td>{order.discount.toFixed(2)}</td>
      <td>{order.createdAt}</td>
      <td>
        <Badge variant="outline" className="bg-green-200 text-green-800 lowercase">
          {order.state}
        </Badge>
      </td>
      <td>
        <Button variant="ghost" size="icon">
          <FileText className="w-4 h-4 text-green-600" />
        </Button>
      </td>
    </tr>
  ))}

  {/* Totals Row */}
  <tr className="font-bold border-t bg-gray-50">
    <td colSpan={5} className="text-right pr-2">Group Totals</td>
    <td>
      {group.orders.reduce((acc, o) => acc + o.unitPrice, 0).toFixed(2)}
    </td>
    <td>
      {group.orders.reduce((acc, o) => acc + o.subtotal, 0).toFixed(2)}
    </td>
    <td>
      {group.orders
        .filter(o => o.vat)
        .reduce((acc, o) => acc + (o.unitPrice * 0.13), 0)
        .toFixed(2)}
    </td>
    {group.orders.some(o => o.municipalTax) && (
      <td>
        {group.orders
          .filter(o => o.municipalTax)
          .reduce((acc, o) => acc + (o.unitPrice * 0.105), 0)
          .toFixed(2)}
      </td>
    )}
    <td>
      {group.orders.reduce((acc, o) => acc + o.total, 0).toFixed(2)}
    </td>
    <td colSpan={4}></td>
  </tr>
</tbody>

                </table>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </AppShell>
  )
}
