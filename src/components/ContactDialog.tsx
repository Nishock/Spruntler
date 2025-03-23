"use client";
import { useState } from "react";
import axios from "axios";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

const ContactDialog = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "", message: "" });
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await axios.post("/api/submit-form", formData, { headers: { "Content-Type": "application/json" } });

      if (response.status === 200) {
        setMessageSent(true);
        setTimeout(() => {
          setMessageSent(false);
          setFormData({ name: "", email: "", mobile: "", message: "" });
          onClose();
        }, 2000);
      } else {
        throw new Error("Something went wrong. Please try again.");
      }
    } catch (error: any) {
      console.error("Error submitting form:", error);
      setErrorMessage(error.response?.data?.message || "Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-[#0b001c] border border-gray-700 rounded-xl text-white p-6 shadow-lg max-w-md w-full mx-auto">
        <DialogTitle className="sr-only">Contact Us</DialogTitle>
        <DialogDescription className="sr-only">Fill out the form to get in touch with us.</DialogDescription>

        {!messageSent ? (
          <motion.div className="space-y-6" initial="hidden" animate="visible">
            <div className="text-center">
              <h3 className="text-2xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">
                Contact Us
              </h3>
              <p className="text-gray-400 text-sm">We&apos;d love to hear from you.</p>
            </div>

            <form className="grid gap-5" onSubmit={handleSubmit} noValidate>
              <div className="space-y-4">
                {["name", "email", "mobile", "message"].map((field) => (
                  <div key={field} className="relative">
                    {field !== "message" ? (
                      <input
                        className={`w-full bg-gray-900/60 border ${focusedField === field ? "border-indigo-500 shadow-lg" : "border-gray-700"} rounded-lg text-white py-3 px-4 text-sm outline-none`}
                        type={field === "email" ? "email" : "text"}
                        name={field}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        value={formData[field as keyof typeof formData]}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    ) : (
                      <textarea
                        className={`w-full bg-gray-900/60 border ${focusedField === field ? "border-indigo-500 shadow-lg" : "border-gray-700"} rounded-lg text-white p-4 text-sm outline-none min-h-[120px] resize-none`}
                        name={field}
                        placeholder="Your Message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField(field)}
                        onBlur={() => setFocusedField(null)}
                        required
                      />
                    )}
                  </div>
                ))}
              </div>

              {errorMessage && <p className="text-red-500 text-sm text-center">{errorMessage}</p>}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-lg transition hover:from-blue-500 hover:to-purple-500 active:translate-y-0.5 disabled:opacity-60"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Sending...</span>
                  </span>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div className="flex flex-col items-center justify-center py-8 text-center">
            <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-green-400">Message Sent!</h3>
            <p className="text-gray-400 text-sm max-w-xs">Thank you for reaching out. We&apos;ll get back to you soon.</p>
          </motion.div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
