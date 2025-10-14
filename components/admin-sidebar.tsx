"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Calendar,
  BookOpen,
  Users,
  DollarSign,
  FileText,
  Globe,
  Settings,
  UserPlus,
} from "lucide-react"
import type { UserRole } from "@/lib/auth-context"

interface NavItem {
  title: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  roles: UserRole[]
}

const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/admin",
    icon: LayoutDashboard,
    roles: [
      "admin",
      "president",
      "vice-president",
      "events-manager",
      "hr-secretary",
      "treasurer",
      "media-manager",
      "robotics-head",
    ],
  },
  {
    title: "Events",
    href: "/admin/events",
    icon: Calendar,
    roles: ["admin", "president", "vice-president", "events-manager", "media-manager"],
  },
  {
    title: "Sessions & Workshops",
    href: "/admin/sessions",
    icon: BookOpen,
    roles: ["admin", "president", "vice-president", "events-manager", "robotics-head"],
  },
  {
    title: "Members",
    href: "/admin/members",
    icon: Users,
    roles: ["admin", "president", "vice-president", "hr-secretary"],
  },
  {
    title: "Finances",
    href: "/admin/finances",
    icon: DollarSign,
    roles: ["admin", "president", "treasurer"],
  },
  {
    title: "Documents",
    href: "/admin/documents",
    icon: FileText,
    roles: ["admin", "president", "hr-secretary"],
  },
  {
    title: "Website",
    href: "/admin/website",
    icon: Globe,
    roles: ["admin", "president", "media-manager"],
  },
  {
    title: "Recruitment",
    href: "/admin/recruitment",
    icon: UserPlus,
    roles: ["admin", "president", "hr-secretary"],
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
    roles: [
      "admin",
      "president",
      "vice-president",
      "events-manager",
      "hr-secretary",
      "treasurer",
      "media-manager",
      "robotics-head",
    ],
  },
]

export function AdminSidebar({ userRole }: { userRole: UserRole }) {
  const pathname = usePathname()

  const filteredNavItems = navItems.filter((item) => item.roles.includes(userRole))

  return (
    <aside className="w-64 border-r border-border bg-muted/30 min-h-screen p-4">
      <div className="mb-6">
        <h2 className="text-lg font-bold text-primary">CME Administration</h2>
      </div>
      <nav className="space-y-1">
        {filteredNavItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              <Icon className="h-4 w-4" />
              {item.title}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}
