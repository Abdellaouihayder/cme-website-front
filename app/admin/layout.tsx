"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { AdminSidebar } from "@/components/admin-sidebar"
import { AdminHeader } from "@/components/admin-header"
import type { User, UserRole } from "@/lib/auth-context"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check authentication
    const storedUser = localStorage.getItem("cme_user")
    if (!storedUser) {
      router.push("/login")
      return
    }

    const userData = JSON.parse(storedUser) as User
    // Check if user has admin privileges
    const adminRoles: UserRole[] = ["admin",
      "president",
      "vice-president",      // Vice-President
      "events-manager",      // Events & Sponsoring Manager
      "hr-secretary",        // HR & General Secretary
      "treasurer",           // CFO
      "media-manager",       // Media Manager
      "robotics-head",]
    if (!adminRoles.includes(userData.role)) {
      router.push("/dashboard")
      return
    }

    setUser(userData)
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("cme_user")
    router.push("/login")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    )
  }

  if (!user) {
    return null
  }

  return (
    <div className="flex min-h-screen">
      <AdminSidebar userRole={user.role} />
      <div className="flex-1 flex flex-col">
        <AdminHeader user={user} onLogout={handleLogout} />
        <main className="flex-1 p-6 bg-background">{children}</main>
      </div>
    </div>
  )
}
