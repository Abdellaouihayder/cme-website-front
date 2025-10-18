"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Search, Edit, Trash2, Mail } from "lucide-react";

const initialMembers = [
  {
    id: 1,
    name: "Ahmed Ben Salem",
    email: "ahmed.bensalem@example.com",
    role: "student",
    level: "senior",
    joinDate: "2024-01-15",
  },
  {
    id: 2,
    name: "Sarah Mansour",
    email: "sarah.mansour@example.com",
    role: "student",
    level: "junior",
    joinDate: "2024-02-20",
  },
  {
    id: 3,
    name: "Mohamed Trabelsi",
    email: "mohamed.trabelsi@example.com",
    role: "student",
    level: "senior",
    joinDate: "2023-09-10",
  },
];

export default function AdminMembersPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [members, setMembers] = useState(initialMembers);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedMember, setSelectedMember] = useState<
    (typeof initialMembers)[0] | null
  >(null);
  const [editFormData, setEditFormData] = useState({
    name: "",
    email: "",
    role: "student",
    level: "junior",
  });

  const handleEditClick = (member: (typeof initialMembers)[0]) => {
    setSelectedMember(member);
    setEditFormData({
      name: member.name,
      email: member.email,
      role: member.role,
      level: member.level,
    });
    setEditDialogOpen(true);
  };

  const handleDeleteClick = (member: (typeof initialMembers)[0]) => {
    setSelectedMember(member);
    setDeleteDialogOpen(true);
  };

  const handleConfirmEdit = () => {
    if (selectedMember) {
      setMembers((prev) =>
        prev.map((member) =>
          member.id === selectedMember.id
            ? {
                ...member,
                name: editFormData.name,
                email: editFormData.email,
                role: editFormData.role,
                level: editFormData.level,
              }
            : member
        )
      );
      setEditDialogOpen(false);
      setSelectedMember(null);
    }
  };

  const handleConfirmDelete = () => {
    if (selectedMember) {
      setMembers((prev) =>
        prev.filter((member) => member.id !== selectedMember.id)
      );
      setDeleteDialogOpen(false);
      setSelectedMember(null);
    }
  };

  const getRoleLabel = (role: string) => {
    const roleLabels: Record<string, string> = {
      admin: "Administrator",
      president: "President",
      treasurer: "Treasurer",
      secretary: "Secretary",
      webmaster: "Webmaster",
      hr: "HR",
      student: "Student",
    };
    return roleLabels[role] || role;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold mb-2">Active Members</h2>
          <p className="text-muted-foreground">Manage active members only</p>
        </div>
      </div>

      {/* Member List */}
      <Card>
        <CardHeader>
          <CardTitle>Member List</CardTitle>
          <CardDescription>All active club members</CardDescription>
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
                <TableHead>Level</TableHead>
                <TableHead>Join Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {members
                .filter(
                  (member) =>
                    member.name
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase()) ||
                    member.email
                      .toLowerCase()
                      .includes(searchQuery.toLowerCase())
                )
                .map((member) => (
                  <TableRow key={member.id}>
                    <TableCell className="font-medium">{member.name}</TableCell>
                    <TableCell>{member.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline">
                        {getRoleLabel(member.role)}
                      </Badge>
                    </TableCell>

                    {/* Level color */}
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          member.level === "senior"
                            ? "text-purple-600 border-purple-600"
                            : "text-blue-600 border-blue-600"
                        }
                      >
                        {member.level === "senior" ? "Senior" : "Junior"}
                      </Badge>
                    </TableCell>

                    <TableCell>
                      {new Date(member.joinDate).toLocaleDateString("en-US")}
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button variant="ghost" size="icon" title="Send Email">
                          <Mail className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          title="Edit"
                          onClick={() => handleEditClick(member)}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          title="Delete"
                          onClick={() => handleDeleteClick(member)}
                        >
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

      {/* Edit Dialog */}
      {editDialogOpen && selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Member</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  value={editFormData.name}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, name: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <Input
                  type="email"
                  value={editFormData.email}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, email: e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Role</label>
                <select
                  value={editFormData.role}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, role: e.target.value })
                  }
                  className="w-full px-3 py-2 border rounded-md"
                >
                  <option value="student">Student</option>
                  <option value="admin">Administrator</option>
                  <option value="president">President</option>
                  <option value="treasurer">Treasurer</option>
                  <option value="secretary">Secretary</option>
                  <option value="webmaster">Webmaster</option>
                  <option value="hr">HR</option>
                </select>
              </div>

              <div className="flex gap-2 justify-end pt-4">
                <Button
                  variant="outline"
                  onClick={() => setEditDialogOpen(false)}
                >
                  Cancel
                </Button>
                <Button onClick={handleConfirmEdit}>Save Changes</Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Delete Dialog */}
      {deleteDialogOpen && selectedMember && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Delete Member</h2>
            <p className="text-gray-600 mb-6">
              Are you sure you want to delete{" "}
              <strong>{selectedMember.name}</strong>? This action cannot be
              undone.
            </p>
            <div className="flex gap-2 justify-end">
              <Button
                variant="outline"
                onClick={() => setDeleteDialogOpen(false)}
              >
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleConfirmDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
