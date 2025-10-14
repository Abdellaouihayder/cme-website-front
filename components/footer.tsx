import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-bold text-lg">CME</h3>
            <p className="text-sm text-muted-foreground">Club Mecatronique ENICarthage - Since 2010</p>
            <p className="text-sm text-muted-foreground">Aeronautics • Robotics • Innovation • CAD/CAM</p>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:contact@cme.tn" className="hover:text-primary transition-colors">
                  contact@cme.tn
                </a>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+216 XX XXX XXX</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>ENICarthage, Tunisia</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Navigation</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Events
              </Link>
              <Link href="/sessions" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Sessions & Workshops
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Member Area</h4>
            <nav className="flex flex-col gap-2">
              <Link href="/login" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Login
              </Link>
              <Link href="/register" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Register
              </Link>
              <Link href="/dashboard" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Dashboard
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-background border border-border hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Club Mecatronique ENICarthage. All rights reserved.</p>
          <p className="mt-2">
            Created by <span className="font-medium text-foreground">Abdellaoui Hayder</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
