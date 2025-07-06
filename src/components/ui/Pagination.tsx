import { Button } from "@/components/ui/button"

export function Pagination() {
  return (
    <div className="flex justify-center">
      <div className="flex items-center gap-2">
        <Button variant="outline" size="sm" disabled>
          Previous
        </Button>
        <Button variant="default" size="sm" className="bg-amber-500 hover:bg-amber-600">
          1
        </Button>
        <Button variant="outline" size="sm">2</Button>
        <Button variant="outline" size="sm">3</Button>
        <Button variant="outline" size="sm">Next</Button>
      </div>
    </div>
  )
}
