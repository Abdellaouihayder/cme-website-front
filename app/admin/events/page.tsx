"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, Eye } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"

// Mock data
const events = [
  {
    id: 1,
    title: "National Robotics Competition",
    date: "2025-03-15",
    location: "ENICarthage",
    attendees: 150,
    status: "upcoming",
  },
  {
    id: 2,
    title: "Innovation & AI Conference",
    date: "2025-03-22",
    location: "Amphitheater A",
    attendees: 200,
    status: "upcoming",
  },
  {
    id: 3,
    title: "Aeronautics Hackathon",
    date: "2025-04-05",
    location: "ENICarthage Campus",
    attendees: 80,
    status: "upcoming",
  },
]

export default function AdminEventsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [showDialog, setShowDialog] = useState(false)
  const [editDialog, setEditDialog] = useState(false)
  const [deleteDialog, setDeleteDialog] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<(typeof events)[0] | null>(null)
  const [editFormData, setEditFormData] = useState({
    title: "",
    date: "",
    location: "",
    attendees: 0,
  })

  const handleShowClick = (event: (typeof events)[0]) => {
    setSelectedEvent(event)
    setShowDialog(true)
  }

  const handleEditClick = (event: (typeof events)[0]) => {
    setSelectedEvent(event)
    setEditFormData({
      title: event.title,
      date: event.date,
      location: event.location,
      attendees: event.attendees,
    })
    setEditDialog(true)
  }

  const handleDeleteClick = (event: (typeof events)[0]) => {
    setSelectedEvent(event)
    setDeleteDialog(true)
  }

  const handleConfirmDelete = () => {
    // TODO: Add actual delete logic here
    console.log("Deleting event:", selectedEvent?.id)
    setDeleteDialog(false)
    setSelectedEvent(null)
  }

  const handleEditSubmit = () => {
    // TODO: Add actual update logic here
    console.log("Updating event:", selectedEvent?.id, editFormData)
    setEditDialog(false)
    setSelectedEvent(null)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Event Management</h2>
          <p className="text-muted-foreground">Create and manage club events</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Event
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>All Events</CardTitle>
          <CardDescription>Complete list of club events</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for an event..."
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
                <TableHead>Location</TableHead>
                <TableHead>Participants</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {events.map((event) => (
                <TableRow key={event.id}>
                  <TableCell className="font-medium">{event.title}</TableCell>
                  <TableCell>{new Date(event.date).toLocaleDateString("en-US")}</TableCell>
                  <TableCell>{event.location}</TableCell>
                  <TableCell>{event.attendees}</TableCell>
                  <TableCell>
                    <Badge variant="default">Upcoming</Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleShowClick(event)}
                        title="View event details"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleEditClick(event)} title="Edit event">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" onClick={() => handleDeleteClick(event)} title="Delete event">
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

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Event Details</DialogTitle>
          </DialogHeader>
          {selectedEvent && (
            <div className="space-y-4">
              <div>
                <Label className="text-sm font-semibold">Title</Label>
                <p className="text-sm text-muted-foreground">{selectedEvent.title}</p>
              </div>
              <div>
                <Label className="text-sm font-semibold">Date</Label>
                <p className="text-sm text-muted-foreground">
                  {new Date(selectedEvent.date).toLocaleDateString("en-US")}
                </p>
              </div>
              <div>
                <Label className="text-sm font-semibold">Location</Label>
                <p className="text-sm text-muted-foreground">{selectedEvent.location}</p>
              </div>
              <div>
                <Label className="text-sm font-semibold">Participants</Label>
                <p className="text-sm text-muted-foreground">{selectedEvent.attendees}</p>
              </div>
              <div>
                <Label className="text-sm font-semibold">Status</Label>
                <p className="text-sm text-muted-foreground capitalize">{selectedEvent.status}</p>
              </div>
            </div>
          )}
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowDialog(false)}>
              Close
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={editDialog} onOpenChange={setEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Event</DialogTitle>
            <DialogDescription>Update the event details below</DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <Label htmlFor="title">Title</Label>
              <Input
                id="title"
                value={editFormData.title}
                onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                placeholder="Event title"
              />
            </div>
            <div>
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={editFormData.date}
                onChange={(e) => setEditFormData({ ...editFormData, date: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                value={editFormData.location}
                onChange={(e) => setEditFormData({ ...editFormData, location: e.target.value })}
                placeholder="Event location"
              />
            </div>
            <div>
              <Label htmlFor="attendees">Participants</Label>
              <Input
                id="attendees"
                type="number"
                value={editFormData.attendees}
                onChange={(e) => setEditFormData({ ...editFormData, attendees: Number.parseInt(e.target.value) })}
                placeholder="Number of participants"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setEditDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleEditSubmit}>Save Changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={deleteDialog} onOpenChange={setDeleteDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Delete Event</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete "{selectedEvent?.title}"? This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteDialog(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={handleConfirmDelete}>
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
