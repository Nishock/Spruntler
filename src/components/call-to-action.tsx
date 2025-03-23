/* eslint-disable react/no-unescaped-entities */
"use client"

import type React from "react"

import { ActionButton } from "@/components/action-button"
import BackgroundStars from "@/assets/stars.png"
import BackgroundGrid from "@/assets/grid-lines.png"
import ContactDialog from "./ContactDialog";
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
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

    </section>
  )
}

