/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { ActionButton } from "@/components/action-button"
import BackgroundStars from "@/assets/stars.png"
import BackgroundGrid from "@/assets/grid-lines.png"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { motion, useMotionTemplate, useMotionValue, useScroll, useTransform } from "framer-motion"
import { type RefObject, useEffect, useRef, useState } from "react"
import { CheckCircle } from "lucide-react"

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

export function CallToAction() {
  const [isContactOpen, setIsContactOpen] = useState(false)
  const [messageSent, setMessageSent] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const borderedDivRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  const [mouseX, mouseY] = useRelativeMousePosition(borderedDivRef)
  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`

  // Reset form state when dialog closes
  useEffect(() => {
    if (!isContactOpen) {
      setTimeout(() => {
        setMessageSent(false)
      }, 300)
    }
  }, [isContactOpen])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted!")
    setMessageSent(true)

    // Auto close dialog after 3 seconds
    setTimeout(() => {
      setIsContactOpen(false)
    }, 3000)
  }

  return (
    <section className="py-10 md:py-12" ref={sectionRef}>
      <div className="container">
        <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
          <DialogContent>
            {!messageSent ? (
              <>
                <div className="text-center mb-5">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                    Contact Us
                  </h3>
                  <p className="text-sm md:text-base text-white/70">We&apos;d love to hear from you.</p>
                </div>

                <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit} noValidate>
                  <div className="space-y-4">
                    <div className="relative">
                      <input
                        className="w-full bg-black/40 border border-white/10 rounded-lg placeholder:text-white/40 text-white focus:border-blue-500 focus:outline-none py-2 px-3 text-sm transition-colors duration-300"
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="relative">
                      <input
                        className="w-full bg-black/40 border border-white/10 rounded-lg placeholder:text-white/40 text-white focus:border-blue-500 focus:outline-none py-2 px-3 text-sm transition-colors duration-300"
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                      />
                    </div>

                    <div className="relative">
                      <input
                        className="w-full bg-black/40 border border-white/10 rounded-lg placeholder:text-white/40 text-white focus:border-blue-500 focus:outline-none py-2 px-3 text-sm transition-colors duration-300"
                        type="text"
                        name="Mobile No."
                        placeholder="Contact No."
                        required
                      />
                    </div>

                    <div className="relative">
                      <textarea
                        className="w-full bg-black/40 border border-white/10 rounded-lg placeholder:text-white/40 text-white focus:border-blue-500 focus:outline-none p-3 text-sm transition-colors duration-300"
                        name="message"
                        placeholder="Your Message"
                        rows={3}
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-2">
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-sm shadow-lg shadow-blue-500/20"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center py-6 text-center">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="rounded-full bg-green-500/20 p-3 mb-4"
                >
                  <CheckCircle className="h-10 w-10 text-green-500" />
                </motion.div>
                <motion.h3
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-xl font-bold mb-2"
                >
                  Message Sent!
                </motion.h3>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/70 text-sm max-w-xs"
                >
                  Thank you for reaching out. We'll get back to you as soon as possible.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-5 text-xs text-white/50"
                >
                  Closing automatically...
                </motion.div>
              </div>
            )}
          </DialogContent>
        </Dialog>

        <motion.div
          animate={{ backgroundPositionX: BackgroundStars.width }}
          transition={{ duration: 120, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="border border-muted py-24 px-6 rounded-xl overflow-hidden relative group"
          style={{ backgroundImage: `url(${BackgroundStars.src})`, backgroundPositionY }}
        >
          <div
            className="absolute inset-0 bg-[rgb(54,40,255)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${BackgroundGrid.src})` }}
          />

          <motion.div
            className="absolute inset-0 bg-[rgb(54,40,255)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{ backgroundImage: `url(${BackgroundGrid.src})`, maskImage }}
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

