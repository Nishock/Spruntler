"use client"
import { useState } from "react"
import type React from "react"

import axios from "axios"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { CheckCircle, Loader2 } from "lucide-react"
import { motion } from "framer-motion"

const ContactDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" })
  const [messageSent, setMessageSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [focusedField, setFocusedField] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await axios.post("/api/submit-form", formData, { headers: { "Content-Type": "application/json" } })
      setMessageSent(true)
      setTimeout(() => {
        setMessageSent(false)
        setFormData({ name: "", email: "", mobile: "", message: "" })
        onClose()
      }, 2000)
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setLoading(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24,
      },
    },
  }

  const successVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0b001c] border border-gray-700 rounded-xl text-white p-6 shadow-lg max-w-md w-full mx-auto overflow-hidden">
        {!messageSent ? (
          <motion.div className="space-y-6" initial="hidden" animate="visible" variants={containerVariants}>
            <motion.div className="text-center" variants={itemVariants}>
              <h3 className="text-2xl md:text-3xl font-extrabold mb-2 bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Contact Us
              </h3>
              <p className="text-gray-400 text-sm md:text-base">We&apos;d love to hear from you.</p>
            </motion.div>

            <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
              <motion.div className="space-y-4" variants={itemVariants}>
                <div className="relative">
                  <input
                    className={`w-full bg-gray-900/60 backdrop-blur-sm border ${
                      focusedField === "name"
                        ? "border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                        : "border-gray-700"
                    } rounded-lg placeholder-gray-500 text-white py-3 px-4 text-sm outline-none transition-all duration-300`}
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    className={`w-full bg-gray-900/60 backdrop-blur-sm border ${
                      focusedField === "email"
                        ? "border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                        : "border-gray-700"
                    } rounded-lg placeholder-gray-500 text-white py-3 px-4 text-sm outline-none transition-all duration-300`}
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
                <div className="relative">
                  <input
                    className={`w-full bg-gray-900/60 backdrop-blur-sm border ${
                      focusedField === "mobile"
                        ? "border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                        : "border-gray-700"
                    } rounded-lg placeholder-gray-500 text-white py-3 px-4 text-sm outline-none transition-all duration-300`}
                    type="text"
                    name="mobile"
                    placeholder="Contact No."
                    value={formData.mobile}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("mobile")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
                <div className="relative">
                  <textarea
                    className={`w-full bg-gray-900/60 backdrop-blur-sm border ${
                      focusedField === "message"
                        ? "border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.3)]"
                        : "border-gray-700"
                    } rounded-lg placeholder-gray-500 text-white p-4 text-sm outline-none transition-all duration-300 min-h-[120px] resize-none`}
                    name="message"
                    placeholder="Your Message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                  />
                </div>
              </motion.div>
              <motion.div variants={itemVariants}>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(79,70,229,0.5)] hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 active:translate-y-0.5 disabled:opacity-60 disabled:pointer-events-none group"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {loading ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></span>
                </button>
              </motion.div>
            </form>
          </motion.div>
        ) : (
          <motion.div
            className="flex flex-col items-center justify-center py-8 text-center"
            initial="hidden"
            animate="visible"
            variants={successVariants}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500/20 animate-ping"></div>
              <CheckCircle className="h-16 w-16 text-green-500 mb-4 relative z-10" />
            </div>
            <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Message Sent!
            </h3>
            <p className="text-gray-400 text-sm max-w-xs">Thank you for reaching out. We&apos;ll get back to you soon.</p>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default ContactDialog

