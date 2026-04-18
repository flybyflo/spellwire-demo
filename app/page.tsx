import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function Page() {
  return (
    <main className="flex min-h-svh items-center justify-center bg-muted/30 p-6">
      <Card className="w-full max-w-md shadow-sm">
        <CardHeader className="gap-3">
          <div className="space-y-1">
            <CardTitle className="text-3xl">Hello world</CardTitle>
            <CardDescription>
              A minimal page with a button underneath and no click behavior.
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <Separator />
          <Button type="button" size="lg" className="w-full">
            Click me
          </Button>
        </CardContent>
      </Card>
    </main>
  )
}
