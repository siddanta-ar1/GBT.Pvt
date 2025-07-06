import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Pencil, Trash2, Eye } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const savedBookings = [
  {
    id: 1,
    groupName: "okoknotok",
    date: "Mon, Feb 17, 2025",
    orders: [
      {
        id: 393,
        product: "River Splash",
        contact: "Gaurav Dhungana",
        unitPrice: 400.43,
        subtotal: 400.43,
        vat: "13%",
        municipalTax: "10.5%",
        total: 494.54,
        discount: 0.0,
        createdAt: "1/9/2025",
        state: "draft",
      },
    ],
  },
  {
    id: 2,
    groupName: "riverbooked",
    date: "Wed, Apr 9, 2025",
    orders: [
      {
        id: 390,
        product: "River Splash",
        contact: "Gaurav Dhungana",
        unitPrice: 400.43,
        subtotal: 400.43,
        vat: "13%",
        municipalTax: "10.5%",
        total: 494.54,
        discount: 0.0,
        createdAt: "1/9/2025",
        state: "draft",
      },
    ],
  },
]

export default function SavedPage() {
  return (
    <AppShell dexCount={0} hubCount={0}>
      <Card>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>💾 Saved Bookings</CardTitle>
          <Button className="bg-muted text-black">Confirm Order</Button>
        </CardHeader>
        <CardContent>
          <Input placeholder="🔍 Search for orders..." className="mb-4 w-full max-w-md" />

          {savedBookings.map((group) => (
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
                      <th>Product Name</th>
                      <th>Primary Contact</th>
                      <th>Unit Price</th>
                      <th>Subtotal</th>
                      <th>VAT 13%</th>
                      <th>Municipal Tax</th>
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
                        <td>{order.product}</td>
                        <td>{order.contact}</td>
                        <td>{order.unitPrice.toFixed(2)}</td>
                        <td>{order.subtotal.toFixed(2)}</td>
                        <td>{order.vat}</td>
                        <td>{order.municipalTax}</td>
                        <td>{order.total.toFixed(2)}</td>
                        <td>{order.discount.toFixed(2)}</td>
                        <td>{order.createdAt}</td>
                        <td>
                          <Badge variant="outline" className="bg-yellow-200 text-yellow-800">
                            {order.state}
                          </Badge>
                        </td>
                        <td className="flex gap-2">
                          <Button size="icon" variant="ghost"><Eye className="h-4 w-4" /></Button>
                          <Button size="icon" variant="ghost"><Pencil className="h-4 w-4" /></Button>
                          <Button size="icon" variant="ghost"><Trash2 className="h-4 w-4 text-red-500" /></Button>
                        </td>
                      </tr>
                    ))}
                    <tr className="font-bold border-t bg-gray-50">
                      <td colSpan={4} className="text-right pr-2">Group Totals</td>
                      <td>{group.orders[0].unitPrice.toFixed(2)}</td>
                      <td>{group.orders[0].subtotal.toFixed(2)}</td>
                      <td>52.06</td>
                      <td>42.05</td>
                      <td>{group.orders[0].total.toFixed(2)}</td>
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
