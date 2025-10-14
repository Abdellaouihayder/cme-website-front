"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search, Edit, Trash2, Mail, UserCheck, X } from "lucide-react"

const initialMembers = [
  {
    id: 1,
    name: "Ahmed Ben Salem",
    email: "ahmed.bensalem@example.com",
    role: "student",
    status: "approved",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Sarah Mansour",
    email: "sarah.mansour@example.com",
    role: "student",
    status: "approved",
    joinDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Mohamed Trabelsi",
    email: "mohamed.trabelsi@example.com",
    role: "webmaster",
    status: "approved",
    joinDate: "2023-09-10",
  },
  {
    id: 4,
    name: "Leila Gharbi",
    email: "leila.gharbi@example.com",
    role: "student",
    status: "pending",
    joinDate: "2025-03-01",
  },
  {
    id: 5,
    name: "Karim Jebali",
    email: "karim.jebali@example.com",
    role: "student",
    status: "pending",
    joinDate: "2025-03-05",
  },
]

export default function AdminMembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [members, setMembers] = useState(initialMembers)

  const handleApprove = (memberId: number) => {
    setMembers((prev) => prev.map((member) => (member.id === memberId ? { ...member, status: "approved" } : member)))
    console.log("[v0] Approved member:", memberId)
  }

  const handleReject = (memberId: number) => {
    setMembers((prev) => prev.map((member) => (member.id === memberId ? { ...member, status: "rejected" } : member)))
    console.log("[v0] Rejected member:", memberId)
  }

  const getRoleLabel = (role: string) => {
    const roleLabels: Record<string, string> = {
      admin: "Administrator",
      president: "President",
      treasurer: "Treasurer",
      secretary: "Secretary",
      webmaster: "Webmaster",
      hr: "HR",
      student: "Student",
    }
    return roleLabels[role] || role
  }

  const stats = {
    total: members.length,
    active: members.filter((m) => m.status === "approved").length,
    pending: members.filter((m) => m.status === "pending").length,
    rejected: members.filter((m) => m.status === "rejected").length,
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Member Management</h2>
          <p className="text-muted-foreground">Manage members and their roles</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Member
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Total Members</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Approved</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">{stats.active}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Rejected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">{stats.rejected}</div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Member List</CardTitle>
          <CardDescription>All club members - Approve or reject pending accounts</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search for a member..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members.map((member) => (
                <TableRow key={member.id}>
                  <TableCell className="font-medium">{member.name}</TableCell>
                  <TableCell>{member.email}</TableCell>
                  <TableCell>
                    <Badge variant="outline">{getRoleLabel(member.role)}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        member.status === "approved"
                          ? "default"
                          : member.status === "pending"
                            ? "secondary"
                            : "destructive"
                      }
                    >
                      {member.status === "approved" ? "Approved" : member.status === "pending" ? "Pending" : "Rejected"}
                    </Badge>
                  </TableCell>
                  <TableCell>{new Date(member.joinDate).toLocaleDateString("en-US")}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      {member.status === "pending" && (
                        <>
                          <Button variant="ghost" size="icon" title="Approve" onClick={() => handleApprove(member.id)}>
                            <UserCheck className="h-4 w-4 text-green-600" />
                          </Button>
                          <Button variant="ghost" size="icon" title="Reject" onClick={() => handleReject(member.id)}>
                            <X className="h-4 w-4 text-red-600" />
                          </Button>
                        </>
                      )}
                      <Button variant="ghost" size="icon" title="Send Email">
                        <Mail className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Edit">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon" title="Delete">
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
