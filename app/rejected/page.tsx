import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { XCircle, Mail } from "lucide-react"
import Link from "next/link"

export default function RejectedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center">
              <XCircle className="h-8 w-8 text-red-600 dark:text-red-500" />
            </div>
            <CardTitle className="text-2xl font-bold">Account Not Approved</CardTitle>
            <CardDescription>Your registration was not approved</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Unfortunately, your account registration for CME Club Mécatronique ENICarthage was not approved.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div className="text-sm text-left">
                    <p className="font-medium mb-1">Need help?</p>
                    <p className="text-muted-foreground">
                      If you believe this is a mistake or would like more information, please contact our administrators
                      at{" "}
                      <a href="mailto:contact@cme.tn" className="text-primary hover:underline">
                        contact@cme.tn
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button asChild>
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/register">Register Again</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
