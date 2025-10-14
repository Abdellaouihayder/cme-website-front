"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Users, BookOpen, DollarSign } from "lucide-react"
import type { User } from "@/lib/auth-context"

export default function AdminDashboardPage() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const storedUser = localStorage.getItem("cme_user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  if (!user) return null

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Dashboard</h2>
        <p className="text-muted-foreground">Overview of club activity</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Members</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">524</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12%</span> this month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Upcoming Events</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">4 this month</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Sessions</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">15</div>
            <p className="text-xs text-muted-foreground">342 registrations</p>
          </CardContent>
        </Card>

        {(user.role === "admin" || user.role === "treasurer") && (
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Budget</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12,450 TND</div>
              <p className="text-xs text-muted-foreground">Budget 2025</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest actions on the platform</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New event created</p>
                  <p className="text-xs text-muted-foreground">Robotics Competition - 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">25 new registrations</p>
                  <p className="text-xs text-muted-foreground">Arduino Workshop - 5 hours ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">New member approved</p>
                  <p className="text-xs text-muted-foreground">Sarah Mansour - 1 day ago</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="h-2 w-2 rounded-full bg-primary mt-2" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Session completed</p>
                  <p className="text-xs text-muted-foreground">CAD Introduction - 2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Upcoming Deadlines</CardTitle>
            <CardDescription>Upcoming events and tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-3 border rounded-lg">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">National Robotics Competition</p>
                  <p className="text-xs text-muted-foreground">March 15, 2025 - ENICarthage</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 border rounded-lg">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">Board Meeting</p>
                  <p className="text-xs text-muted-foreground">March 20, 2025 - Meeting Room</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-3 border rounded-lg">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div className="flex-1">
                  <p className="text-sm font-medium">AI & Vision Workshop</p>
                  <p className="text-xs text-muted-foreground">April 8, 2025 - Robotics Lab</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Role-specific sections */}
      {user.role === "president" && (
        <Card>
          <CardHeader>
            <CardTitle>President Actions</CardTitle>
            <CardDescription>Pending tasks and decisions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="text-sm font-medium">Approve Q2 budget</p>
                  <p className="text-xs text-muted-foreground">Submitted by treasurer</p>
                </div>
                <span className="text-xs text-primary">Pending</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="text-sm font-medium">Validate 3 new projects</p>
                  <p className="text-xs text-muted-foreground">Member proposals</p>
                </div>
                <span className="text-xs text-primary">Pending</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {user.role === "hr-secretary" && (
        <Card>
          <CardHeader>
            <CardTitle>HR Management</CardTitle>
            <CardDescription>Pending applications and members</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="text-sm font-medium">12 new applications</p>
                  <p className="text-xs text-muted-foreground">To review this week</p>
                </div>
                <span className="text-xs text-primary">Action required</span>
              </div>
              <div className="flex items-center justify-between p-3 border rounded-lg">
                <div>
                  <p className="text-sm font-medium">5 scheduled interviews</p>
                  <p className="text-xs text-muted-foreground">This week</p>
                </div>
                <span className="text-xs text-muted-foreground">Scheduled</span>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
