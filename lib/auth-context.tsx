"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter } from "next/navigation"

export type UserRole =
  | "student"
  | "admin"
  | "president"
  | "vice-president"
  | "events-manager"
  | "hr-secretary"
  | "treasurer"
  | "media-manager"
  | "robotics-head"
export type AccountStatus = "pending" | "approved" | "rejected"

export interface User {
  id: string
  firstName: string
  lastName: string
  email: string
  role: UserRole
  status: AccountStatus
  memberSince: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("cme_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string) => {
    // Mock login - replace with real authentication later
    const mockUser: User = {
      id: "1",
      firstName: "Jean",
      lastName: "Dupont",
      email: email,
      role: "admin",
      status: "approved",
      memberSince: "2024",
    }

    setUser(mockUser)
    localStorage.setItem("cme_user", JSON.stringify(mockUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("cme_user")
    router.push("/login")
  }

  return <AuthContext.Provider value={{ user, login, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
