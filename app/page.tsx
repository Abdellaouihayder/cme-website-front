import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Calendar, Users, Wrench, Rocket, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  const eventImages = [
    {
      id: 1,
      title: "Robotics Competition 2024",
      image: "/robotics-competition-students-robots.jpg",
      description: "Our team at the national robotics competition",
    },
    {
      id: 2,
      title: "Aeronautics Workshop",
      image: "/aeronautics-workshop-drone-engineering.jpg",
      description: "Hands-on workshop on drone design",
    },
    {
      id: 3,
      title: "Innovation Hackathon",
      image: "/hackathon-innovation-technology-students.jpg",
      description: "24 hours of creation and technological innovation",
    },
    {
      id: 4,
      title: "CAD/CAM Conference",
      image: "/cad-cam-conference-engineering-design.jpg",
      description: "Conference on new CAD/CAM technologies",
    },
  ];

  const officers = [
    {
      name: "Tarek Ajmi",
      role: "President",
      image: "/tarek.jpg",
      description: "Overall club management and strategic direction",
      linkedin: "https://www.linkedin.com/in/tarek-ajmi-5952a231a/",
    },
    {
      name: "Amine Kallel",
      role: "Vice-President",
      image: "/professional-male-student.png",
      description: "Assists president and coordinates activities",
      linkedin: "https://www.linkedin.com/in/amine-kallel",
    },
    {
      name: "Khouloud Bibi",
      role: "Events & Sponsoring Manager",
      image: "/Khouloud.jpg",
      description: "Organizes events and manages sponsorships",
      linkedin: "https://www.linkedin.com/in/khouloud-bibi-831573360/",
    },
    {
      name: "Yosr Gabsi",
      role: "HR & General Secretary",
      image: "/Yosr.jpg",
      description: "Human resources and official documentation",
      linkedin: "https://www.linkedin.com/in/yosr-gabsi-ab4584369/",
    },
    {
      name: "Yahya Merai",
      role: "Equipment & Treasurer",
      image: "/Yahya.jpg",
      description: "Financial management and equipment oversight",
      linkedin: "https://www.linkedin.com/in/yahya-merai-7080a7372/",
    },
    {
      name: "Sawsen Batti",
      role: "CFO & Media Manager",
      image: "/sawsen.jpg",
      description: "Financial operations and media communications",
      linkedin: "https://www.linkedin.com/in/sawsen-batti-9006b8233/",
    },
    {
      name: "Aziz Saidi",
      role: "Robotics & Innovation Head",
      image: "/aziz.jpg",
      description: "Leads robotics projects and innovation initiatives",
      linkedin: "https://www.linkedin.com/in/aziz-saidi",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative bg-background overflow-hidden">
          {/* Geometric Background Shapes */}
          <div className="absolute left-0 top-0 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2">
            <div className="w-full h-full rounded-full bg-primary/10" />
          </div>
          <div className="absolute right-0 bottom-0 w-[500px] h-[500px] translate-x-1/3 translate-y-1/3">
            <div className="w-full h-full rounded-full bg-primary/5" />
          </div>

          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center gap-12">
                {/* Logo */}
                <div className="flex-shrink-0">
                  <Image
                    src="/cme.jpg"
                    alt="CME Logo"
                    width={350}
                    height={120}
                    className="w-72 md:w-96 h-auto opacity-90"
                    priority
                  />
                </div>

                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="space-y-4">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                      WE <span className="text-primary">ARE</span>
                    </h1>
                    <p className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                      Club Mecatronique ENICarthage
                    </p>
                  </div>

                  <div className="space-y-3 text-lg text-muted-foreground max-w-2xl">
                    <p>
                      <strong className="text-foreground">CME</strong> is the
                      leading mechatronics club at the National School of
                      Engineers of Carthage.
                    </p>
                    <p>
                      Since <strong className="text-foreground">2010</strong>,
                      we have been training tomorrow's engineers through
                      innovative projects in aeronautics, robotics, innovation,
                      and CAD/CAM.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" asChild className="text-base">
                      <Link href="/register">
                        Join the Club
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      asChild
                      className="text-base bg-transparent"
                    >
                      <Link href="/about">Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted/30 to-transparent" />
        </section>

        {/* Events Slideshow Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Events in Pictures
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the highlights of our activities and events
              </p>
            </div>

            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-5xl mx-auto"
            >
              <CarouselContent>
                {eventImages.map((event) => (
                  <CarouselItem key={event.id}>
                    <div className="relative">
                      <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
                        <Image
                          src={event.image || "/placeholder.svg"}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-2xl md:text-3xl font-bold mb-2">
                            {event.title}
                          </h3>
                          <p className="text-sm md:text-base opacity-90">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Areas of Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Since 2010, we have been training tomorrow's engineers in
                cutting-edge technologies
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Aeronautics</CardTitle>
                  <CardDescription>
                    Design and development of innovative aeronautical systems
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Robotics</CardTitle>
                  <CardDescription>
                    Creation of autonomous robots and intelligent systems
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <CardTitle>Innovation</CardTitle>
                  <CardDescription>
                    Innovative projects and creative technological solutions
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <svg
                      className="h-6 w-6 text-primary"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                      />
                    </svg>
                  </div>
                  <CardTitle>CAD/CAM</CardTitle>
                  <CardDescription>
                    Computer-aided design and manufacturing
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Officers Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Executive Board
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the team leading CME with passion and dedication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" >
              {officers.map((officer, index) => (
                <Card
                key={index}
                className="overflow-hidden hover:shadow-lg transition-shadow p-0" // remove extra padding
              >
                {/* Remove extra spacing on top */}
                <div className="relative w-full aspect-[4/3]"> {/* keeps consistent aspect ratio */}
                  <Image
                    src={officer.image || "/placeholder.svg"}
                    alt={officer.name}
                    fill
                    className="object-cover object-top" // ensures image sticks to the top
                  />
                </div>
              
                <CardHeader className="text-center pt-4"> {/* small top padding for text only */}
                  <CardTitle className="text-lg">{officer.name}</CardTitle>
                  <div className="text-sm font-semibold text-primary">
                    {officer.role}
                  </div>
                  <CardDescription className="text-xs mt-2">
                    {officer.description}
                  </CardDescription>
              
                  <div className="mt-4 flex justify-center">
                    <div className="p-2 bg-white rounded-lg border-2 border-muted">
                      <Image
                        src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(
                          officer.linkedin
                        )}`}
                        alt={`${officer.name} LinkedIn QR Code`}
                        width={100}
                        height={100}
                        className="w-24 h-24"
                      />
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    Scan to connect on LinkedIn
                  </p>
                </CardHeader>
              </Card>
              
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Calendar className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Events</CardTitle>
                  <CardDescription>
                    Discover our upcoming events, competitions, and conferences
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-transparent"
                  >
                    <Link href="/events">View Events</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Users className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Sessions & Workshops</CardTitle>
                  <CardDescription>
                    Participate in our training sessions and hands-on workshops
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-transparent"
                  >
                    <Link href="/sessions">View Sessions</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Wrench className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>Join Us</CardTitle>
                  <CardDescription>
                    Become a CME member and participate in our innovative
                    projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/register">Register Now</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Stats Banner with Bold Design */}
        <section className="bg-primary text-primary-foreground py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-2">15+</div>
                <div className="text-sm md:text-base opacity-90 font-medium">
                  Years
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-2">500+</div>
                <div className="text-sm md:text-base opacity-90 font-medium">
                  Members
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-2">50+</div>
                <div className="text-sm md:text-base opacity-90 font-medium">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-5xl md:text-6xl font-bold mb-2">100+</div>
                <div className="text-sm md:text-base opacity-90 font-medium">
                  Workshops
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
