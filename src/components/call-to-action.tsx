"use client"

import type React from "react"

import { ActionButton } from "@/components/action-button"
import BackgroundStars from "@/assets/stars.png"
import BackgroundGrid from "@/assets/grid-lines.png"
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion"
import { type RefObject, useEffect, useRef, useState } from "react"

// Custom Hook for Relative Mouse Position
const useRelativeMousePosition = (to: RefObject<HTMLElement>) => {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const updateMousePosition = (event: MouseEvent) => {
    if (!to.current) return
    const { top, left } = to.current.getBoundingClientRect()
    mouseX.set(event.clientX - left)
    mouseY.set(event.clientY - top)
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => window.removeEventListener("mousemove", updateMousePosition)
  }, [])

  return [mouseX, mouseY]
}

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
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-2xl" onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white" aria-label="Close">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
    </div>
  )
}

export function CallToAction() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const borderedDivRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef)
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Form submitted successfully!")
    setIsContactOpen(false)
  }

  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isContactOpen) {
        setIsContactOpen(false)
      }
    }

    window.addEventListener("keydown", handleEscape)
    return () => window.removeEventListener("keydown", handleEscape)
  }, [isContactOpen])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isContactOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isContactOpen])

  return (
    <section className="py-10 md:py-12" ref={sectionRef}>
      <div className="container">
        <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)}>
          <div className="bg-black/80 backdrop-blur-sm text-white border-2 border-white/20 p-12 max-w-2xl rounded-xl">
            <div className="text-center pb-6">
              <h3 className="text-4xl font-bold mb-4">Contact Us</h3>
              <p className="text-lg text-white/80">We'd love to hear from you.</p>
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

        <motion.div
          animate={{
            backgroundPositionX:
              typeof BackgroundStars === "object" && "width" in BackgroundStars ? BackgroundStars.width : "100%",
          }}
          transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="border border-muted py-24 px-6 rounded-xl overflow-hidden relative group"
          style={{
            backgroundImage: `url(${
              typeof BackgroundStars === "object" && "src" in BackgroundStars ? BackgroundStars.src : BackgroundStars
            })`,
            backgroundPositionY,
          }}
        >
          <div
            className="absolute inset-0 bg-[rgb(54,40,255)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{
              backgroundImage: `url(${
                typeof BackgroundGrid === "object" && "src" in BackgroundGrid ? BackgroundGrid.src : BackgroundGrid
              })`,
            }}
          />

          <motion.div
            className="absolute inset-0 bg-[rgb(54,40,255)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{
              backgroundImage: `url(${
                typeof BackgroundGrid === "object" && "src" in BackgroundGrid ? BackgroundGrid.src : BackgroundGrid
              })`,
              maskImage,
            }}
            ref={borderedDivRef}
          />

          <div className="relative">
            <h2 className="text-5xl tracking-tighter text-center font-medium">Let's get to work</h2>
            <p className="text-center text-lg md:text-xl text-white/70 tracking-tight px-4 mt-5">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="flex justify-center mt-8">
              <ActionButton label="Contact Us" onClick={() => setIsContactOpen(true)} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

