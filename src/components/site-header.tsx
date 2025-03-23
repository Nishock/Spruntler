"use client";

import type React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon, CheckCircle } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState, useEffect } from "react";
import { ActionButton } from "@/components/action-button";
import ContactDialog from "./ContactDialog";



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
      <ContactDialog isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

    </header>
  );
}
