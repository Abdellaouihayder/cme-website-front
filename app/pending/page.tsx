import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail } from "lucide-react";
import Link from "next/link";

export default function PendingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center space-y-4">
            <div className="mx-auto w-16 h-16 bg-yellow-100 dark:bg-yellow-900/20 rounded-full flex items-center justify-center">
              <Clock className="h-8 w-8 text-yellow-600 dark:text-yellow-500" />
            </div>
            <CardTitle className="text-2xl font-bold">
              Account Pending Approval
            </CardTitle>
            <CardDescription>
              Your registration is being reviewed
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Thank you for registering with CME Club Mécatronique
                ENICarthage!
              </p>
              <p className="text-muted-foreground">
                Your account is currently pending approval from our
                administrators. You will receive an email notification once your
                account has been reviewed.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div className="text-sm text-left">
                    <p className="font-medium mb-1">What happens next?</p>
                    <ul className="text-muted-foreground space-y-1">
                      <li>
                        • Admin, President, or HR will review your account
                      </li>
                      <li>• You&apos;ll receive an email with the decision</li>
                      <li>• Once approved, you can access your dashboard</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Button asChild variant="outline">
                <Link href="/">Return to Home</Link>
              </Button>
              <Button asChild variant="ghost">
                <Link href="/login">Try Login Again</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
