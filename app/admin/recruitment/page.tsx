"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { UserCheck, UserX, Eye, Mail } from "lucide-react"

// Mock data
const applications = [
  {
    id: 1,
    name: "Amira Khalil",
    email: "amira.khalil@example.com",
    date: "2025-03-12",
    status: "pending",
    motivation: "Passionate about robotics...",
  },
  {
    id: 2,
    name: "Youssef Mansour",
    email: "youssef.mansour@example.com",
    date: "2025-03-11",
    status: "pending",
    motivation: "Interested in aeronautics...",
  },
  {
    id: 3,
    name: "Nadia Trabelsi",
    email: "nadia.trabelsi@example.com",
    date: "2025-03-10",
    status: "approved",
    motivation: "Experience in CAD/CAM...",
  },
  {
    id: 4,
    name: "Karim Bouaziz",
    email: "karim.bouaziz@example.com",
    date: "2025-03-09",
    status: "rejected",
    motivation: "Innovation project...",
  },
]

export default function AdminRecruitmentPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Recruitment Management</h2>
        <p className="text-muted-foreground">Manage applications and recruitment process</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">87</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Pending</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">52</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
          </CardContent>
        </Card>
      </div>

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
                      variant={
                        app.status === "approved" ? "default" : app.status === "rejected" ? "destructive" : "secondary"
                      }
                    >
                      {app.status === "pending" ? "Pending" : app.status === "approved" ? "Approved" : "Rejected"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button variant="ghost" size="icon" title="View profile">
                        <Eye className="h-4 w-4" />
                      </Button>
                      {app.status === "pending" && (
                        <>
                          <Button variant="ghost" size="icon" title="Approve">
                            <UserCheck className="h-4 w-4 text-green-600" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Reject">
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
    </div>
  )
}
