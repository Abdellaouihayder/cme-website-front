"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, Eye, X } from "lucide-react"

// Mock data
const initialSessions = [
  {
    id: 1,
    title: "Introduction to Robotics",
    date: "2025-03-18",
    instructor: "Dr. Ahmed Ben Salem",
    capacity: 30,
    enrolled: 25,
    level: "Beginner",
    description: "Learn the basics of robotics and automation",
  },
  {
    id: 2,
    title: "Advanced Arduino Programming",
    date: "2025-03-25",
    instructor: "Eng. Sarah Mansour",
    capacity: 25,
    enrolled: 20,
    level: "Intermediate",
    description: "Master advanced Arduino programming techniques",
  },
  {
    id: 3,
    title: "CAD Design with SolidWorks",
    date: "2025-04-01",
    instructor: "Eng. Mohamed Trabelsi",
    capacity: 20,
    enrolled: 15,
    level: "Beginner",
    description: "Professional CAD design using SolidWorks",
  },
]

export default function AdminSessionsPage() {
  const [sessions, setSessions] = useState(initialSessions)
  const [searchQuery, setSearchQuery] = useState("")
  const [showDialog, setShowDialog] = useState(false)
  const [editDialog, setEditDialog] = useState(false)
  const [deleteDialog, setDeleteDialog] = useState(false)
  const [selectedSession, setSelectedSession] = useState(null)
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    instructor: "",
    capacity: "",
    enrolled: "",
    level: "Beginner",
    description: "",
  })

  const handleShowClick = (session) => {
    setSelectedSession(session)
    setShowDialog(true)
  }

  const handleEditClick = (session) => {
    setSelectedSession(session)
    setFormData(session)
    setEditDialog(true)
  }

  const handleDeleteClick = (session) => {
    setSelectedSession(session)
    setDeleteDialog(true)
  }

  const handleConfirmDelete = () => {
    setSessions(sessions.filter((s) => s.id !== selectedSession.id))
    setDeleteDialog(false)
    setSelectedSession(null)
  }

  const handleEditSubmit = () => {
    setSessions(sessions.map((s) => (s.id === selectedSession.id ? formData : s)))
    setEditDialog(false)
    setSelectedSession(null)
  }

  const handleFormChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const filteredSessions = sessions.filter(
    (session) =>
      session.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      session.instructor.toLowerCase().includes(searchQuery.toLowerCase()),
  )

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
              {filteredSessions.map((session) => (
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
                      <Button variant="ghost" size="icon" onClick={() => handleShowClick(session)}>
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleEditClick(session)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(session)}>
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

      {/* SHOW DIALOG */}
      {showDialog && selectedSession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="max-w-md w-full mx-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Session Details</CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setShowDialog(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Title</p>
                <p className="font-medium">{selectedSession.title}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">{new Date(selectedSession.date).toLocaleDateString("en-US")}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Instructor</p>
                <p className="font-medium">{selectedSession.instructor}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Level</p>
                <p className="font-medium">{selectedSession.level}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Capacity</p>
                <p className="font-medium">{selectedSession.capacity}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Enrolled</p>
                <p className="font-medium">{selectedSession.enrolled}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Description</p>
                <p className="font-medium">{selectedSession.description}</p>
              </div>
              <div className="flex justify-end pt-4">
                <Button onClick={() => setShowDialog(false)}>Close</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* EDIT DIALOG */}
      {editDialog && selectedSession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="max-w-md w-full mx-4" style={{ maxHeight: '90vh', overflowY: 'auto' }}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Edit Session</CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setEditDialog(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium">Title</label>
                <Input name="title" value={formData.title} onChange={handleFormChange} className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Date</label>
                <Input type="date" name="date" value={formData.date} onChange={handleFormChange} className="mt-1" />
              </div>
              <div>
                <label className="text-sm font-medium">Instructor</label>
                <Input name="instructor" value={formData.instructor} onChange={handleFormChange} className="mt-1" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium">Capacity</label>
                  <Input
                    type="number"
                    name="capacity"
                    value={formData.capacity}
                    onChange={handleFormChange}
                    className="mt-1"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Enrolled</label>
                  <Input
                    type="number"
                    name="enrolled"
                    value={formData.enrolled}
                    onChange={handleFormChange}
                    className="mt-1"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Level</label>
                <select
                  name="level"
                  value={formData.level}
                  onChange={handleFormChange}
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                >
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full mt-1 px-3 py-2 border border-input rounded-md"
                />
              </div>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setEditDialog(false)}>
                  Cancel
                </Button>
                <Button onClick={handleEditSubmit}>Save Changes</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* DELETE DIALOG */}
      {deleteDialog && selectedSession && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <Card className="max-w-sm w-full mx-4">
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Delete Session</CardTitle>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setDeleteDialog(false)}>
                <X className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">Are you sure you want to delete this session?</p>
              <p className="text-sm font-medium">"{selectedSession.title}"</p>
              <div className="flex justify-end gap-2 pt-4">
                <Button variant="outline" onClick={() => setDeleteDialog(false)}>
                  Cancel
                </Button>
                <Button variant="destructive" onClick={handleConfirmDelete}>
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}
