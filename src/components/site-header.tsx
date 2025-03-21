"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, CheckCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { ActionButton } from "@/components/action-button";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [validated, setValidated] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const pathname = usePathname();

  // ✅ Fixed function to check exact pathname match
  const getActiveClass = (path: string) =>
    pathname === path
      ? "text-white font-bold"
      : "text-white/70 hover:text-white transition";

  // Reset form state when dialog closes
  useEffect(() => {
    if (!isContactOpen) {
      setTimeout(() => {
        setMessageSent(false);
      }, 300);
    }
  }, [isContactOpen]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
      setValidated(true);
    } else {
      console.log("Form submitted!");
      setMessageSent(true);
      setTimeout(() => {
        setIsContactOpen(false);
      }, 3000);
    }
  };

  return (
    <header className="py-4 border-b border-white/10 max-md:backdrop-blur-sm md:border-none sticky top-0 z-10 bg-transparent backdrop-blur-sm">
      <div className="container max-md:px-4">
        <div className="flex items-center justify-between md:border md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur-md md:bg-white/5 md:border-white/10">
          
          {/* Glowing Text Logo */}
          <Link href="/" aria-label="Home">
            <div
              className="animate"
              style={{
                fontFamily:
                  '"FONTSPRING DEMO - Proxima Nova Bold", sans-serif',
                fontSize: "30px",
                textAlign: "left",
                color: "rgb(77, 64, 239)",
                fontWeight: "bold",
                textShadow:
                  "0 0 10px rgba(77, 64, 239, 0.8), 0 0 20px rgba(77, 64, 239, 0.6)",
              }}
            >
              Spruntler
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8 items-center text-sm">
            <Link href="/" className={getActiveClass("/")}>Home</Link>
            <Link href="/about" className={getActiveClass("/about")}>About Us</Link>
            <Link href="/services" className={getActiveClass("/services")}>Services</Link>
            <Link href="/blogs" className={getActiveClass("/blogs")}>Blogs</Link>
          </nav>

          {/* Mobile Navigation */}
          <section className="flex max-md:gap-4 items-center">
            <ActionButton label="Contact Us" onClick={() => setIsContactOpen(true)} />

            {/* Contact Form Dialog */}
            <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
              <DialogContent>
                {!messageSent ? (
                  <>
                    <div className="text-center mb-5">
                      <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">
                        Contact Us
                      </h3>
                      <p className="text-sm md:text-base text-white/70">
                        We&apos;d love to hear from you.
                      </p>
                    </div>

                    <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit} noValidate>
                      <div className="space-y-4">
                        <div className="relative">
                          <input className="w-full bg-black/40 border border-white/10 rounded-lg placeholder:text-white/40 text-white focus:border-blue-500 focus:outline-none py-2 px-3 text-sm transition-colors duration-300"
                            type="text" name="name" placeholder="Full Name" required />
                        </div>

                        <div className="relative">
                          <input className="w-full bg-black/40 border border-white/10 rounded-lg placeholder:text-white/40 text-white focus:border-blue-500 focus:outline-none py-2 px-3 text-sm transition-colors duration-300"
                            type="email" name="email" placeholder="Email" required />
                        </div>

                        <div className="relative">
                          <input className="w-full bg-black/40 border border-white/10 rounded-lg placeholder:text-white/40 text-white focus:border-blue-500 focus:outline-none py-2 px-3 text-sm transition-colors duration-300"
                            type="text" name="Mobile No." placeholder="Contact No." required />
                        </div>

                        <div className="relative">
                          <textarea className="w-full bg-black/40 border border-white/10 rounded-lg placeholder:text-white/40 text-white focus:border-blue-500 focus:outline-none p-3 text-sm transition-colors duration-300"
                            name="message" placeholder="Your Message" rows={3} required></textarea>
                        </div>
                      </div>

                      <div className="mt-2">
                        <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors duration-300 text-sm shadow-lg shadow-blue-500/20">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </>
                ) : (
                  <div className="flex flex-col items-center justify-center py-6 text-center">
                    <div className="rounded-full bg-green-500/20 p-3 mb-4">
                      <CheckCircle className="h-10 w-10 text-green-500" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/70 text-sm max-w-xs">
                      Thank you for reaching out. We&apos;ll get back to you as soon as possible.
                    </p>
                    <div className="mt-5 text-xs text-white/50">
                      Closing automatically...
                    </div>
                  </div>
                )}
              </DialogContent>
            </Dialog>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger aria-label="Open Navigation Menu">
                <MenuIcon className="size-9 md:hidden text-white/70 hover:text-white transition" />
              </SheetTrigger>
              <SheetContent className="p-8 bg-black/80 border-b border-white/10 backdrop-blur-lg">
                <div className="inline-flex items-center center gap-3">
                  <p className="font-bold text-blue-400 animate-pulse text-xl">Spruntler</p>
                </div>
                <div className="mt-8 mb-4">
                  <nav className="grid gap-4 items-center text-lg">
                    <Link href="/" className={getActiveClass("/")}>Home</Link>
                    <Link href="/about" className={getActiveClass("/about")}>About Us</Link>
                    <Link href="/services" className={getActiveClass("/services")}>Services</Link>
                    <Link href="/blogs" className={getActiveClass("/blogs")}>Blogs</Link>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </section>
        </div>
      </div>
    </header>
  );
}
