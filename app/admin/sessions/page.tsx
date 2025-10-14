"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"

// Mock data
const sessions = [
  {
    id: 1,
    title: "Introduction to Robotics",
    date: "2025-03-18",
    instructor: "Dr. Ahmed Ben Salem",
    capacity: 30,
    enrolled: 25,
    level: "Beginner",
  },
  {
    id: 2,
    title: "Advanced Arduino Programming",
    date: "2025-03-25",
    instructor: "Eng. Sarah Mansour",
    capacity: 25,
    enrolled: 20,
    level: "Intermediate",
  },
  {
    id: 3,
    title: "CAD Design with SolidWorks",
    date: "2025-04-01",
    instructor: "Eng. Mohamed Trabelsi",
    capacity: 20,
    enrolled: 15,
    level: "Beginner",
  },
]

export default function AdminSessionsPage() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Session Management</h2>
          <p className="text-muted-foreground">Create and manage sessions and workshops</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Session
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Sessions</CardTitle>
          <CardDescription>Complete list of sessions and workshops</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for a session..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Instructor</TableHead>
                <TableHead>Level</TableHead>
                <TableHead>Registrations</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sessions.map((session) => (
                <TableRow key={session.id}>
                  <TableCell className="font-medium">{session.title}</TableCell>
                  <TableCell>{new Date(session.date).toLocaleDateString("en-US")}</TableCell>
                  <TableCell>{session.instructor}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        session.level === "Beginner"
                          ? "bg-green-500/10 text-green-700 border-green-500/20"
                          : session.level === "Intermediate"
                            ? "bg-yellow-500/10 text-yellow-700 border-yellow-500/20"
                            : "bg-red-500/10 text-red-700 border-red-500/20"
                      }
                    >
                      {session.level}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {session.enrolled}/{session.capacity}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
