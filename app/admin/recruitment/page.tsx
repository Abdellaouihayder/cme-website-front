"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { UserCheck, UserX, Eye, Mail } from "lucide-react"

// Mock data
const initialApplications = [
  {
    id: 1,
    name: "Amira Khalil",
    email: "amira.khalil@example.com",
    date: "2025-03-12",
    status: "pending",
    motivation: "Passionate about robotics and leadership in STEM fields.",
  },
  {
    id: 2,
    name: "Youssef Mansour",
    email: "youssef.mansour@example.com",
    date: "2025-03-11",
    status: "pending",
    motivation: "Interested in aeronautics and teamwork development.",
  },
  {
    id: 3,
    name: "Nadia Trabelsi",
    email: "nadia.trabelsi@example.com",
    date: "2025-03-10",
    status: "approved",
    motivation: "Experience in CAD/CAM and innovation management.",
  },
  {
    id: 4,
    name: "Karim Bouaziz",
    email: "karim.bouaziz@example.com",
    date: "2025-03-09",
    status: "rejected",
    motivation: "Worked on innovative student projects in AI.",
  },
]

export default function AdminRecruitmentPage() {
  const [applications, setApplications] = useState(initialApplications)
  const [selectedApp, setSelectedApp] = useState<any>(null)
  const [dialogType, setDialogType] = useState<"view" | "approve" | "reject" | null>(null)

  const handleOpenDialog = (app: any, type: "view" | "approve" | "reject") => {
    setSelectedApp(app)
    setDialogType(type)
  }

  const handleCloseDialog = () => {
    setSelectedApp(null)
    setDialogType(null)
  }

  const handleConfirmAction = () => {
    if (!selectedApp) return
    setApplications((prev) =>
      prev.map((app) =>
        app.id === selectedApp.id
          ? { ...app, status: dialogType === "approve" ? "approved" : "rejected" }
          : app
      )
    )
    handleCloseDialog()
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Recruitment Management</h2>
        <p className="text-muted-foreground">Manage applications and recruitment process</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{applications.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter((a) => a.status === "pending").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter((a) => a.status === "approved").length}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {applications.filter((a) => a.status === "rejected").length}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Applications</CardTitle>
          <CardDescription>Review and process new applications</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {applications.map((app) => (
                <TableRow key={app.id}>
                  <TableCell className="font-medium">{app.name}</TableCell>
                  <TableCell>{app.email}</TableCell>
                  <TableCell>{new Date(app.date).toLocaleDateString("en-US")}</TableCell>
                  <TableCell>
                    <Badge
                      variant="outline"
                      className={
                        app.status === "approved"
                          ? "text-green-600 border-green-600"
                          : app.status === "rejected"
                            ? "text-red-600 border-red-600"
                            : "text-yellow-600 border-yellow-600"
                      }
                    >
                      {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(app, "view")}>
                        <Eye className="h-4 w-4" />
                      </Button>

                      {app.status === "pending" && (
                        <>
                          <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(app, "approve")}>
                            <UserCheck className="h-4 w-4 text-green-600" />
                          </Button>
                          <Button variant="ghost" size="icon" onClick={() => handleOpenDialog(app, "reject")}>
                            <UserX className="h-4 w-4 text-red-600" />
                          </Button>
                        </>
                      )}

                      <Button variant="ghost" size="icon" title="Send email">
                        <Mail className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Dialog */}
      <Dialog open={!!dialogType} onOpenChange={handleCloseDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              {dialogType === "view"
                ? "Application Details"
                : dialogType === "approve"
                  ? "Approve Application"
                  : "Reject Application"}
            </DialogTitle>
          </DialogHeader>

          {dialogType === "view" && selectedApp && (
            <div className="space-y-2">
              <p><strong>Name:</strong> {selectedApp.name}</p>
              <p><strong>Email:</strong> {selectedApp.email}</p>
              <p><strong>Date:</strong> {new Date(selectedApp.date).toLocaleDateString("en-US")}</p>
              <p><strong>Motivation:</strong> {selectedApp.motivation}</p>
              <p>
                <strong>Status:</strong>{" "}
                <Badge
                  variant="outline"
                  className={
                    selectedApp.status === "approved"
                      ? "text-green-600 border-green-600"
                      : selectedApp.status === "rejected"
                        ? "text-red-600 border-red-600"
                        : "text-yellow-600 border-yellow-600"
                  }
                >
                  {selectedApp.status.charAt(0).toUpperCase() + selectedApp.status.slice(1)}
                </Badge>
              </p>
            </div>
          )}

          {(dialogType === "approve" || dialogType === "reject") && selectedApp && (
            <p>
              Are you sure you want to{" "}
              <strong className={dialogType === "approve" ? "text-green-600" : "text-red-600"}>
                {dialogType}
              </strong>{" "}
              the application of <strong>{selectedApp.name}</strong>?
            </p>
          )}

          <DialogFooter>
            <Button variant="outline" onClick={handleCloseDialog}>
              Cancel
            </Button>
            {(dialogType === "approve" || dialogType === "reject") && (
              <Button
                onClick={handleConfirmAction}
                className={dialogType === "approve" ? "bg-green-600 hover:bg-green-700" : "bg-red-600 hover:bg-red-700"}
              >
                Confirm
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
