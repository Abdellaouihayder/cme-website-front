"use client";

import type React from "react";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import type { UserRole, AccountStatus } from "@/lib/auth-context";

const mockUserDatabase: Record<
  string,
  { firstName: string; lastName: string; role: UserRole; status: AccountStatus }
> = {
  "admin@cme.tn": {
    firstName: "Admin",
    lastName: "General",
    role: "admin",
    status: "approved",
  },
  "tarek.ajmi@cme.tn": {
    firstName: "Tarek",
    lastName: "Ajmi",
    role: "president",
    status: "approved",
  },
  "amine.kallel@cme.tn": {
    firstName: "Amine",
    lastName: "Kallel",
    role: "vice-president",
    status: "approved",
  },
  "khouloud.bibi@cme.tn": {
    firstName: "Khouloud",
    lastName: "Bibi",
    role: "events-manager",
    status: "approved",
  },
  "yosr.gabsi@cme.tn": {
    firstName: "Yosr",
    lastName: "Gabsi",
    role: "hr-secretary",
    status: "approved",
  },
  "yahya.merai@cme.tn": {
    firstName: "Yahya",
    lastName: "Merai",
    role: "treasurer",
    status: "approved",
  },
  "sawsen.batti@cme.tn": {
    firstName: "Sawsen",
    lastName: "Batti",
    role: "media-manager",
    status: "approved",
  },
  "aziz.saidi@cme.tn": {
    firstName: "Aziz",
    lastName: "Saidi",
    role: "robotics-head",
    status: "approved",
  },
  // Test accounts for pending status
  "pending@cme.tn": {
    firstName: "Pending",
    lastName: "User",
    role: "student",
    status: "pending",
  },
  "pending1@cme.tn": {
    firstName: "Ali",
    lastName: "Mahmoud",
    role: "student",
    status: "pending",
  },
  "pending2@cme.tn": {
    firstName: "Sara",
    lastName: "Ben Ahmed",
    role: "student",
    status: "pending",
  },
  // Test accounts for rejected status
  "rejected@cme.tn": {
    firstName: "Rejected",
    lastName: "User",
    role: "student",
    status: "rejected",
  },
  "rejected1@cme.tn": {
    firstName: "Omar",
    lastName: "Hassan",
    role: "student",
    status: "rejected",
  },
  "rejected2@cme.tn": {
    firstName: "Nour",
    lastName: "Khalil",
    role: "student",
    status: "rejected",
  },
};

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      const userFromDb = mockUserDatabase[email];

      // Check if user is in pending users list
      const pendingUsers = JSON.parse(
        localStorage.getItem("cme_pending_users") || "[]"
      );
      const pendingUser = pendingUsers.find((u: any) => u.email === email);

      const mockUser = {
        id: "1",
        firstName: userFromDb?.firstName || pendingUser?.firstName || "Student",
        lastName: userFromDb?.lastName || pendingUser?.lastName || "Member",
        email: email,
        role: userFromDb?.role || pendingUser?.role || "student",
        status: userFromDb?.status || pendingUser?.status || "approved",
        memberSince: "2024",
      };

      console.log("[v0] Login attempt:", mockUser);
      localStorage.setItem("cme_user", JSON.stringify(mockUser));

      if (mockUser.status === "pending") {
        router.push("/pending");
      } else if (mockUser.status === "rejected") {
        router.push("/rejected");
      } else if (mockUser.status === "approved") {
        // All these roles should be redirected to admin dashboard
        const adminRoles: UserRole[] = [
          "admin",
          "president",
          "vice-president",      // Vice-President
          "events-manager",      // Events & Sponsoring Manager
          "hr-secretary",        // HR & General Secretary
          "treasurer",           // CFO
          "media-manager",       // Media Manager
          "robotics-head",       // Robotics & Innovation Head
        ];
        
        console.log(`[DEBUG] User role: ${mockUser.role}, Is admin: ${adminRoles.includes(mockUser.role)}`);
        if (adminRoles.includes(mockUser.role)) {
          router.push("/admin");
        } else {
          router.push("/dashboard");
        }
      }
    }, 1000);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">
              Login
            </CardTitle>
            <CardDescription className="text-center">
              Sign in to your CME account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link
                    href="/forgot-password"
                    className="text-sm text-primary hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            <div className="mt-6 p-4 bg-muted rounded-lg">
              <p className="text-xs font-semibold mb-2">Test accounts:</p>
              <div className="text-xs text-muted-foreground space-y-1">
                <p className="font-semibold text-foreground mt-2">
                  Approved Accounts:
                </p>
                <p>• admin@cme.tn - Administrator</p>
                <p>• tarek.ajmi@cme.tn - President</p>
                <p>• amine.kallel@cme.tn - Vice-President</p>
                <p>• khouloud.bibi@cme.tn - Events & Sponsoring Manager</p>
                <p>• yosr.gabsi@cme.tn - HR & General Secretary</p>
                <p>• yahya.merai@cme.tn - Equipment & Treasurer</p>
                <p>• sawsen.batti@cme.tn - CFO & Media Manager</p>
                <p>• aziz.saidi@cme.tn - Robotics & Innovation Head</p>
                <p className="font-semibold text-foreground mt-2">
                  Pending Approval:
                </p>
                <p>• pending@cme.tn, pending1@cme.tn, pending2@cme.tn</p>
                <p className="font-semibold text-foreground mt-2">
                  Rejected Accounts:
                </p>
                <p>• rejected@cme.tn, rejected1@cme.tn, rejected2@cme.tn</p>
              </div>
            </div>

            <div className="mt-6 text-center text-sm">
              <span className="text-muted-foreground">Not a member yet? </span>
              <Link
                href="/register"
                className="text-primary hover:underline font-medium"
              >
                Create an account
              </Link>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
}
