"use client"

import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, Home } from "lucide-react"
import Link from "next/link"
import type { User as UserType } from "@/lib/auth-context"
import { ThemeToggle } from "@/components/theme-toggle"

export function AdminHeader({ user, onLogout }: { user: UserType; onLogout: () => void }) {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  }

  const getRoleGreeting = (role: string) => {
    const greetings: Record<string, string> = {
      admin: "Welcome Admin",
      president: "Welcome President",
      "vice-president": "Welcome Vice-President",
      "events-manager": "Welcome Events Manager",
      "hr-secretary": "Welcome HR & Secretary",
      treasurer: "Welcome Treasurer",
      "media-manager": "Welcome Media Manager",
      "robotics-head": "Welcome Robotics Head",
      student: "Welcome Member",
    }
    return greetings[role] || "Welcome"
  }

  const getRoleLabel = (role: string) => {
    const roleLabels: Record<string, string> = {
      admin: "General Administrator",
      president: "President",
      "vice-president": "Vice-President",
      "events-manager": "Events & Sponsoring Manager",
      "hr-secretary": "HR Manager & General Secretary",
      treasurer: "Equipment Manager & Treasurer",
      "media-manager": "CFO & Media Manager",
      "robotics-head": "Robotics & Innovation Head",
      student: "Student Member",
    }
    return roleLabels[role] || role
  }

  return (
    <header className="border-b border-border bg-background px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{getRoleGreeting(user.role)}</h1>
          <p className="text-sm text-muted-foreground">
            {user.firstName} {user.lastName} - {getRoleLabel(user.role)}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 h-4 w-4" />
              Back to Site
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {getInitials(user.firstName, user.lastName)}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/admin/settings">
                  <User className="mr-2 h-4 w-4" />
                  My Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={onLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  )
}
