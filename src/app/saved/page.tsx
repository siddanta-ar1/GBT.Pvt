import { AppShell } from "@/components/layout/AppShell"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function SavedPage() {
  return (
    <AppShell dexCount={0} hubCount={0}>
      <Card>
        <CardHeader>
          <CardTitle>💾 Saved Bookings</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Here are trips youve saved for later.</p>
          {/* TODO: Render saved items from Supabase */}
        </CardContent>
      </Card>
    </AppShell>
  )
}
