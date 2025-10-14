"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Globe, ImageIcon, Palette, Settings } from "lucide-react"

export default function AdminWebsitePage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold mb-2">Website Management</h2>
        <p className="text-muted-foreground">Manage website content and appearance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Active Pages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Visitors This Month</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,847</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Images</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium">Last Update</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm font-bold">2h ago</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Globe className="h-5 w-5 text-primary" />
              <CardTitle>Homepage Content</CardTitle>
            </div>
            <CardDescription>Edit main text</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="hero-title">Main Title</Label>
              <Input id="hero-title" defaultValue="Welcome to CME" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-subtitle">Subtitle</Label>
              <Input id="hero-subtitle" defaultValue="Club Mecatronique ENICarthage" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="hero-description">Description</Label>
              <Textarea id="hero-description" defaultValue="Aeronautics • Robotics • Innovation • CAD/CAM" rows={3} />
            </div>
            <Button>Save Changes</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <ImageIcon className="h-5 w-5 text-primary" />
              <CardTitle>Media</CardTitle>
            </div>
            <CardDescription>Manage images and files</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
              <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-sm text-muted-foreground mb-4">Drag and drop images here</p>
              <Button variant="outline">Browse Files</Button>
            </div>
            <div className="space-y-2">
              <p className="text-sm font-medium">Recent Images</p>
              <div className="grid grid-cols-4 gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-square bg-muted rounded-lg" />
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Palette className="h-5 w-5 text-primary" />
              <CardTitle>Appearance</CardTitle>
            </div>
            <CardDescription>Customize colors</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Primary Color</Label>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-primary border" />
                <Input type="color" defaultValue="#dc2626" className="w-20" />
                <span className="text-sm text-muted-foreground">#dc2626</span>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Secondary Color</Label>
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 rounded-lg bg-secondary border" />
                <Input type="color" defaultValue="#1a1a1a" className="w-20" />
                <span className="text-sm text-muted-foreground">#1a1a1a</span>
              </div>
            </div>
            <Button>Apply Colors</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-primary" />
              <CardTitle>SEO Settings</CardTitle>
            </div>
            <CardDescription>Search engine optimization</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="meta-title">Page Title</Label>
              <Input id="meta-title" defaultValue="CME - Club Mecatronique ENICarthage" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="meta-description">Description</Label>
              <Textarea
                id="meta-description"
                defaultValue="Club Mecatronique ENICarthage - Aeronautics, Robotics, Innovation, CAD/CAM"
                rows={3}
              />
            </div>
            <Button>Save Settings</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
