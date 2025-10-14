"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Trophy, Presentation, Code, Lightbulb } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock data - replace with real data from database later
const events = [
  {
    id: 1,
    title: "National Robotics Competition",
    description: "Participate in Tunisia's largest robotics competition",
    date: "March 15, 2025",
    location: "ENICarthage",
    attendees: 150,
    category: "Competition",
    status: "upcoming",
  },
  {
    id: 2,
    title: "Innovation & AI Conference",
    description: "Discover the latest advances in artificial intelligence",
    date: "March 22, 2025",
    location: "Amphitheater A",
    attendees: 200,
    category: "Conference",
    status: "upcoming",
  },
  {
    id: 3,
    title: "Aeronautics Hackathon",
    description: "48 hours to develop innovative solutions for aeronautics",
    date: "April 5, 2025",
    location: "ENICarthage Campus",
    attendees: 80,
    category: "Hackathon",
    status: "upcoming",
  },
  {
    id: 4,
    title: "CME Open House",
    description: "Discover our projects and meet club members",
    date: "April 12, 2025",
    location: "CME Room",
    attendees: 300,
    category: "Event",
    status: "upcoming",
  },
]

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Competition":
      return <Trophy className="h-5 w-5" />
    case "Conference":
      return <Presentation className="h-5 w-5" />
    case "Hackathon":
      return <Code className="h-5 w-5" />
    case "Event":
      return <Lightbulb className="h-5 w-5" />
    default:
      return <Calendar className="h-5 w-5" />
  }
}

export default function EventsPage() {
  const router = useRouter()

  const handleRegister = () => {
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
              <p className="text-lg text-muted-foreground">
                Discover our upcoming events, competitions, and conferences. Join us for unforgettable experiences!
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {events.map((event) => (
                <Card key={event.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge
                        variant={event.status === "upcoming" ? "default" : "secondary"}
                        className="flex items-center gap-1"
                      >
                        {getCategoryIcon(event.category)}
                        {event.category}
                      </Badge>
                      <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                        Upcoming
                      </Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="p-1.5 rounded-md bg-primary/10">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="p-1.5 rounded-md bg-primary/10">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="p-1.5 rounded-md bg-primary/10">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <span>{event.attendees} expected participants</span>
                    </div>
                    <Button className="w-full mt-4" onClick={handleRegister}>
                      Register for Event
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
