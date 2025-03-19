"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { MenuIcon, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState, useEffect } from "react"
import { ActionButton } from "@/components/action-button"

// Custom Modal Component
const ContactModal = ({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
}) => {
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose()
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isOpen, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white" aria-label="Close">
          <X size={24} />
        </button>
      </div>
    </div>
  )
}

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false)
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [validated, setValidated] = useState(false)
  const pathname = usePathname()

  const getActiveClass = (path: string) =>
    pathname.startsWith(path) ? "text-white font-bold" : "text-white/70 hover:text-white transition"

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.currentTarget as HTMLFormElement
    if (form.checkValidity() === false) {
      event.stopPropagation()
    } else {
      // Handle form submission here
      console.log("Form submitted!")
      setIsContactOpen(false)
    }

    setValidated(true)
  }

  return (
    <header className="py-4 border-b border-white/10 max-md:backdrop-blur-sm md:border-none sticky top-0 z-10 bg-transparent backdrop-blur-sm">
      <div className="container max-md:px-4">
        <div className="flex items-center justify-between md:border md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur-md md:bg-white/5 md:border-white/10">
          {/* Glowing Text Logo */}
          <Link href="/" aria-label="Home">
            <div
              className="animate-pulse"
              style={{
                fontFamily:
                  '"FONTSPRING DEMO - Proxima Nova Bold", "FONTSPRING DEMO - Proxima Nova Bold Placeholder", sans-serif',
                fontSize: "30px",
                textAlign: "left",
                color: "rgb(77, 64, 239)",
                fontWeight: "bold",
              }}
            >
              Spruntler
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/" className={getActiveClass("/services")}>
              Home
            </Link>
            <Link href="/about" className={getActiveClass("/about")}>
              About Us
            </Link>
            <Link href="/services" className={getActiveClass("/services")}>
              Services
            </Link>
            <Link href="/blogs" className={getActiveClass("/blogs")}>
              Blogs
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <section className="flex max-md:gap-4 items-center">
            {/* Open Contact Modal */}
            <ActionButton label="Contact Us" onClick={() => setIsContactOpen(true)} />

            {/* Contact Form Modal */}
            <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
              <div className="bg-black/80 backdrop-blur-sm text-white border-2 border-white/20 p-12 max-w-2xl rounded-xl">
                <div className="text-center pb-6">
                  <h3 className="text-4xl font-bold mb-4">Contact Us</h3>
                  <p className="text-lg text-white/80">We&apos;d love to hear from you.</p>
                </div>

                <form className="grid grid-cols-1 gap-6" onSubmit={handleSubmit} noValidate>
                  <div className="space-y-8">
                    <input
                      className="w-full bg-transparent border-b-2 border-white/30 placeholder:text-white/50 text-white focus:border-blue-500 focus:outline-none py-3 transition-colors duration-300"
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      required
                    />

                    <input
                      className="w-full bg-transparent border-b-2 border-white/30 placeholder:text-white/50 text-white focus:border-blue-500 focus:outline-none py-3 transition-colors duration-300"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required
                    />

                    <input
                      className="w-full bg-transparent border-b-2 border-white/30 placeholder:text-white/50 text-white focus:border-blue-500 focus:outline-none py-3 transition-colors duration-300"
                      type="text"
                      name="phone"
                      placeholder="Contact No."
                      required
                    />

                    <textarea
                      className="w-full bg-transparent border-2 border-white/30 placeholder:text-white/50 text-white focus:border-blue-500 focus:outline-none p-4 rounded-lg transition-colors duration-300"
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      required
                    ></textarea>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </ContactModal>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger aria-label="Open Navigation Menu">
                <MenuIcon className="size-9 md:hidden text-white/70 hover:text-white transition" />
              </SheetTrigger>
              <SheetContent side="top" className="p-8 bg-black/80 border-b border-white/10 backdrop-blur-lg">
                <div className="inline-flex items-center center gap-3">
                  <p className="font-bold text-blue-400 animate-pulse text-xl">Spruntler</p>
                </div>
                <div className="mt-8 mb-4">
                  <nav className="grid gap-4 items-center text-lg">
                    <Link href="/" className={getActiveClass("/services")}>
                      Home
                    </Link>
                    <Link href="/about" className={getActiveClass("/about")}>
                      About Us
                    </Link>
                    <Link href="/services" className={getActiveClass("/services")}>
                      Services
                    </Link>
                    <Link href="/blogs" className={getActiveClass("/blogs")}>
                      Blogs
                    </Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </section>
        </div>
      </div>
    </header>
  )
}

