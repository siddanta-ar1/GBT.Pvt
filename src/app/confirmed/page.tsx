import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Pencil, FileText } from "lucide-react"

export default function ConfirmedBookingsPage() {
  return (
    <AppShell dexCount={0} hubCount={0}>
      <div className="px-4 py-6">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Confirmed Bookings</h1>
          <Button variant="secondary">Verify Order Consumption</Button>
        </div>

        {/* Booking Group - Gaurav Dhungana */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Gaurav Dhungana Book – Mon, Sep 15, 2025</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2">Select</th>
                  <th className="p-2">ID</th>
                  <th className="p-2">PNR</th>
                  <th className="p-2">Product Name</th>
                  <th className="p-2">Primary Contact</th>
                  <th className="p-2">Contact</th>
                  <th className="p-2">Unit Price</th>
                  <th className="p-2">Subtotal</th>
                  <th className="p-2">VAT 13%</th>
                  <th className="p-2">Total</th>
                  <th className="p-2">Discount</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">State</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    id: "433",
                    pnr: "PNR/20250703/00118",
                    product: "1 Hour Hot Air Balloon Ride Pokhara (6am to 7am)",
                    primaryContact: "Gaurav Dhungana",
                    contact: "Josh Brown",
                    unitPrice: 17000,
                    subtotal: 17000,
                    vat: 2210,
                    total: 19210,
                    discount: 0,
                    date: "7/3/2025",
                  },
                  {
                    id: "432",
                    pnr: "PNR/20250703/00117",
                    product: "1 Hour Hot Air Balloon Ride Pokhara (6am to 7am)",
                    primaryContact: "Gaurav Dhungana",
                    contact: "Gaurav Dhungana",
                    unitPrice: 17000,
                    subtotal: 17000,
                    vat: 2210,
                    total: 19210,
                    discount: 0,
                    date: "7/3/2025",
                  },
                  {
                    id: "431",
                    pnr: "PNR/20250703/00116",
                    product: "1 Hour Hot Air Balloon Ride Pokhara (6am to 7am)",
                    primaryContact: "Gaurav Dhungana",
                    contact: "Gaurav Dhungana",
                    unitPrice: 20000,
                    subtotal: 20000,
                    vat: 2600,
                    total: 22600,
                    discount: 0,
                    date: "7/3/2025",
                  },
                ].map((booking, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2"><input type="checkbox" /></td>
                    <td className="p-2">{booking.id}</td>
                    <td className="p-2">{booking.pnr}</td>
                    <td className="p-2">{booking.product}</td>
                    <td className="p-2">{booking.primaryContact}</td>
                    <td className="p-2">{booking.contact}</td>
                    <td className="p-2">{booking.unitPrice.toFixed(2)}</td>
                    <td className="p-2">{booking.subtotal.toFixed(2)}</td>
                    <td className="p-2">13%</td>
                    <td className="p-2">{booking.total.toFixed(2)}</td>
                    <td className="p-2">0.00</td>
                    <td className="p-2">{booking.date}</td>
                    <td className="p-2">
                      <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                        proforma
                      </span>
                    </td>
                    <td className="p-2 flex gap-2">
                      <Pencil className="h-4 w-4 cursor-pointer text-blue-600" />
                      <FileText className="h-4 w-4 cursor-pointer text-green-600" />
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="font-bold">
                  <td colSpan={6} className="p-2 text-right">Group Totals</td>
                  <td className="p-2">54000.00</td>
                  <td className="p-2">54000.00</td>
                  <td className="p-2">7020.00</td>
                  <td className="p-2">61020.00</td>
                  <td colSpan={4}></td>
                </tr>
              </tfoot>
            </table>
          </CardContent>
        </Card>

        {/* Booking Group - Bishnu Dhakal */}
        <Card>
          <CardHeader>
            <CardTitle>bishnu sir boking jan 13 – Tue, Jan 14, 2025</CardTitle>
          </CardHeader>
          <CardContent className="overflow-auto">
            <table className="w-full text-sm text-left">
              <tbody>
                <tr className="border-b">
                  <td className="p-2"><input type="checkbox" /></td>
                  <td className="p-2">418</td>
                  <td className="p-2">PNR/20250113/00114</td>
                  <td className="p-2">1 Hour Hot Air Balloon Ride Kathmandu (6am to 7am)</td>
                  <td className="p-2">Bishnu Dhakal</td>
                  <td className="p-2">Heather Heath</td>
                  <td className="p-2">5000.00</td>
                  <td className="p-2">5000.00</td>
                  <td className="p-2">13%</td>
                  <td className="p-2">5650.00</td>
                  <td className="p-2">0.00</td>
                  <td className="p-2">1/13/2025</td>
                  <td className="p-2">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                      proforma
                    </span>
                  </td>
                  <td className="p-2 flex gap-2">
                    <Pencil className="h-4 w-4 cursor-pointer text-blue-600" />
                    <FileText className="h-4 w-4 cursor-pointer text-green-600" />
                  </td>
                </tr>
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  )
}
