"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Home, Calendar, GraduationCap, Info, LogIn, UserPlus } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/cme.jpg" alt="CME Logo" width={150} height={50} className="h-10 w-auto mx-5" />
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <Link
            href="/events"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <Calendar className="h-4 w-4" />
            Events
          </Link>
          <Link
            href="/sessions"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <GraduationCap className="h-4 w-4" />
            Sessions
          </Link>
          <Link
            href="/about"
            className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <Info className="h-4 w-4" />
            About
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" asChild>
            <Link href="/login" className="flex items-center gap-2">
              <LogIn className="h-4 w-4" />
              Login
            </Link>
          </Button>
          <Button asChild>
            <Link href="/register" className="flex items-center gap-2">
              <UserPlus className="h-4 w-4" />
              Register
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
