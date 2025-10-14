import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { MapPin, ExternalLink } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-background via-background to-primary/5 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">About CME</h1>
              <p className="text-lg text-muted-foreground">Club Mecatronique ENICarthage - Since 2010</p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              <div className="flex justify-center">
                <Image src="/logo.png" alt="CME Logo" width={600} height={200} className="w-full max-w-2xl h-auto" />
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Our Mission</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-gray max-w-none">
                  <p className="text-muted-foreground">
                    The Club Mecatronique ENICarthage (CME) is a student association founded in 2010 at the National
                    School of Engineers of Carthage. Our mission is to promote excellence in the fields of mechatronics,
                    robotics, aeronautics, and technological innovation.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Areas of Expertise</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Aeronautics</h3>
                    <p className="text-muted-foreground">
                      Design and development of aeronautical systems, drones, and autonomous aerial vehicles.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Robotics</h3>
                    <p className="text-muted-foreground">
                      Creation of autonomous robots, intelligent systems, and participation in national and
                      international competitions.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Innovation</h3>
                    <p className="text-muted-foreground">
                      Development of innovative projects and creative technological solutions to solve real-world
                      problems.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">CAD/CAM (Computer-Aided Design & Manufacturing)</h3>
                    <p className="text-muted-foreground">
                      Mastery of CAD/CAM tools for the design and manufacturing of mechanical and electronic parts.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Our Values</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Excellence:</strong> We strive for excellence in all our projects and activities
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Innovation:</strong> We encourage creativity and technological innovation
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Collaboration:</strong> We promote teamwork and knowledge sharing
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary font-bold">•</span>
                      <span>
                        <strong>Passion:</strong> We are passionate about technology and engineering
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div className="p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Years</div>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Members</div>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
                <div className="p-6 bg-muted rounded-lg">
                  <div className="text-3xl font-bold text-primary mb-2">100+</div>
                  <div className="text-sm text-muted-foreground">Workshops</div>
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    Visit us at the National School of Engineers of Carthage (ENICarthage)
                  </p>
                  <div className="relative w-full h-[400px] rounded-lg overflow-hidden border border-border">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.2976891234567!2d10.1234567!3d36.8512345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzbCsDUxJzA0LjQiTiAxMMKwMDcnMjQuNCJF!5e0!3m2!1sen!2stn!4v1234567890123"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="CME Location Map"
                    />
                  </div>
                  <div className="flex justify-center">
                    <Button asChild variant="outline">
                      <a
                        href="https://maps.app.goo.gl/x99FUqHWv4AGmfHJA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <MapPin className="h-4 w-4" />
                        Open in Google Maps
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
