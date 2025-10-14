import type { UserRole } from "./auth-context"

export const permissions = {
  admin: {
    canManageEvents: true,
    canManageSessions: true,
    canManageMembers: true,
    canManageFinances: true,
    canManageDocuments: true,
    canManageWebsite: true,
    canManageRecruitment: true,
    canViewAllData: true,
  },
  president: {
    canManageEvents: true,
    canManageSessions: true,
    canManageMembers: true,
    canManageFinances: true,
    canManageDocuments: true,
    canManageWebsite: true,
    canManageRecruitment: true,
    canViewAllData: true,
  },
  "vice-president": {
    canManageEvents: true,
    canManageSessions: true,
    canManageMembers: true,
    canManageFinances: false,
    canManageDocuments: true,
    canManageWebsite: false,
    canManageRecruitment: false,
    canViewAllData: true,
  },
  "events-manager": {
    canManageEvents: true,
    canManageSessions: true,
    canManageMembers: false,
    canManageFinances: false,
    canManageDocuments: false,
    canManageWebsite: false,
    canManageRecruitment: false,
    canViewAllData: false,
  },
  "hr-secretary": {
    canManageEvents: false,
    canManageSessions: false,
    canManageMembers: true,
    canManageFinances: false,
    canManageDocuments: true,
    canManageWebsite: false,
    canManageRecruitment: true,
    canViewAllData: false,
  },
  treasurer: {
    canManageEvents: false,
    canManageSessions: false,
    canManageMembers: false,
    canManageFinances: true,
    canManageDocuments: false,
    canManageWebsite: false,
    canManageRecruitment: false,
    canViewAllData: false,
  },
  "media-manager": {
    canManageEvents: true,
    canManageSessions: false,
    canManageMembers: false,
    canManageFinances: false,
    canManageDocuments: false,
    canManageWebsite: true,
    canManageRecruitment: false,
    canViewAllData: false,
  },
  "robotics-head": {
    canManageEvents: false,
    canManageSessions: true,
    canManageMembers: false,
    canManageFinances: false,
    canManageDocuments: false,
    canManageWebsite: false,
    canManageRecruitment: false,
    canViewAllData: false,
  },
  student: {
    canManageEvents: false,
    canManageSessions: false,
    canManageMembers: false,
    canManageFinances: false,
    canManageDocuments: false,
    canManageWebsite: false,
    canManageRecruitment: false,
    canViewAllData: false,
  },
}

export function hasPermission(role: UserRole, permission: keyof (typeof permissions)["admin"]): boolean {
  return permissions[role][permission] || false
}

export function isAdminRole(role: UserRole): boolean {
  return [
    "admin",
    "president",
    "vice-president",
    "events-manager",
    "hr-secretary",
    "treasurer",
    "media-manager",
    "robotics-head",
  ].includes(role)
}
