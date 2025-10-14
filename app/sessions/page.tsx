"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, Users, BookOpen, Code, Cpu, Wrench, Rocket, Zap, Microscope } from "lucide-react"
import { useRouter } from "next/navigation"

// Mock data - replace with real data from database later
const sessions = [
  {
    id: 1,
    title: "Introduction to Robotics",
    description: "Learn the basics of robotics and build your first robot",
    date: "March 18, 2025",
    time: "2:00 PM - 5:00 PM",
    duration: "3 hours",
    instructor: "Dr. Ahmed Ben Salem",
    capacity: 30,
    enrolled: 25,
    level: "Beginner",
    type: "Workshop",
  },
  {
    id: 2,
    title: "Advanced Arduino Programming",
    description: "Master advanced Arduino programming techniques",
    date: "March 25, 2025",
    time: "10:00 AM - 1:00 PM",
    duration: "3 hours",
    instructor: "Eng. Sarah Mansour",
    capacity: 25,
    enrolled: 20,
    level: "Intermediate",
    type: "Workshop",
  },
  {
    id: 3,
    title: "CAD Design with SolidWorks",
    description: "Learn to design 3D mechanical parts",
    date: "April 1, 2025",
    time: "2:00 PM - 6:00 PM",
    duration: "4 hours",
    instructor: "Eng. Mohamed Trabelsi",
    capacity: 20,
    enrolled: 15,
    level: "Beginner",
    type: "Session",
  },
  {
    id: 4,
    title: "AI & Computer Vision",
    description: "Discover AI applications in robotics",
    date: "April 8, 2025",
    time: "3:00 PM - 6:00 PM",
    duration: "3 hours",
    instructor: "Dr. Leila Gharbi",
    capacity: 35,
    enrolled: 30,
    level: "Advanced",
    type: "Session",
  },
  {
    id: 5,
    title: "PCB Fabrication & Electronics",
    description: "Design and fabricate your own printed circuit boards",
    date: "April 15, 2025",
    time: "1:00 PM - 5:00 PM",
    duration: "4 hours",
    instructor: "Eng. Karim Bouaziz",
    capacity: 20,
    enrolled: 18,
    level: "Intermediate",
    type: "Workshop",
  },
  {
    id: 6,
    title: "Drones & Autonomous Systems",
    description: "Program and pilot autonomous drones",
    date: "April 22, 2025",
    time: "10:00 AM - 2:00 PM",
    duration: "4 hours",
    instructor: "Eng. Nadia Hamdi",
    capacity: 25,
    enrolled: 22,
    level: "Advanced",
    type: "Workshop",
  },
]

const getSessionIcon = (title: string) => {
  if (title.toLowerCase().includes("programming") || title.toLowerCase().includes("arduino")) {
    return <Code className="h-5 w-5" />
  } else if (title.toLowerCase().includes("robotics")) {
    return <Cpu className="h-5 w-5" />
  } else if (title.toLowerCase().includes("cad") || title.toLowerCase().includes("design")) {
    return <Wrench className="h-5 w-5" />
  } else if (title.toLowerCase().includes("ai") || title.toLowerCase().includes("vision")) {
    return <Microscope className="h-5 w-5" />
  } else if (title.toLowerCase().includes("pcb") || title.toLowerCase().includes("electronics")) {
    return <Zap className="h-5 w-5" />
  } else if (title.toLowerCase().includes("drone") || title.toLowerCase().includes("autonomous")) {
    return <Rocket className="h-5 w-5" />
  }
  return <BookOpen className="h-5 w-5" />
}

export default function SessionsPage() {
  const router = useRouter()

  const handleRegister = (sessionId: number) => {
    router.push("/login")
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sessions & Workshops</h1>
              <p className="text-lg text-muted-foreground">
                Participate in our training sessions and practical workshops to develop your skills in mechatronics,
                robotics, and innovation.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {sessions.map((session) => (
                <Card key={session.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="default" className="flex items-center gap-1">
                        {getSessionIcon(session.title)}
                        {session.type}
                      </Badge>
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
                    </div>
                    <CardTitle className="text-xl">{session.title}</CardTitle>
                    <CardDescription>{session.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="p-1.5 rounded-md bg-primary/10">
                        <Calendar className="h-4 w-4 text-primary" />
                      </div>
                      <span>{session.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="p-1.5 rounded-md bg-primary/10">
                        <Clock className="h-4 w-4 text-primary" />
                      </div>
                      <span>
                        {session.time} ({session.duration})
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="p-1.5 rounded-md bg-primary/10">
                        <BookOpen className="h-4 w-4 text-primary" />
                      </div>
                      <span>Instructor: {session.instructor}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="p-1.5 rounded-md bg-primary/10">
                        <Users className="h-4 w-4 text-primary" />
                      </div>
                      <span
                        className={session.enrolled >= session.capacity ? "text-destructive" : "text-muted-foreground"}
                      >
                        {session.enrolled}/{session.capacity} spots
                      </span>
                      {session.enrolled >= session.capacity && (
                        <Badge variant="destructive" className="ml-auto">
                          Full
                        </Badge>
                      )}
                    </div>
                    <Button
                      className="w-full mt-4"
                      disabled={session.enrolled >= session.capacity}
                      onClick={() => handleRegister(session.id)}
                    >
                      {session.enrolled >= session.capacity ? "Session Full" : "Register"}
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
