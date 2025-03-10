"use client";  // 👈 Make sure this is here!

import Link from "next/link";
import SiteLogo from "@/assets/logo.svg";
import { CodeXml, Feather, MenuIcon, Wallet2 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { ActionButton } from "@/components/action-button";

interface SiteHeaderProps {
    onBlogClick: () => void;  // New prop for handling blog click
}

export default function SiteHeader({ onBlogClick }: SiteHeaderProps) {  // Accept the prop
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <header className={"py-4 border-b max-md:backdrop-blur md:border-none sticky top-0 z-10"}>
                <div className={"container max-md:px-4"}>
                    <div className={"flex items-center justify-between md:border md:p-2.5 md:rounded-xl max-w-2xl mx-auto md:backdrop-blur"}>
                        <Link href={"/"}>
                            <div className={"border size-10 rounded-lg inline-flex items-center justify-center"}>
                                <SiteLogo className={"size-8 h-auto rotate-13"} />
                            </div>
                        </Link>
                        <section className={"max-md:hidden"}>
                            <nav className={"flex gap-8 items-center text-sm"}>
                                <Link href={"#"} className={"text-white/70 hover:text-white transition"}>Services</Link>
                                <Link href={"#"} className={"text-white/70 hover:text-white transition"}>About Us</Link>
                                <button
                                    onClick={onBlogClick}  // Use the prop for scrolling
                                    className={"text-white/70 hover:text-white transition"}
                                >
                                    Blogs
                                </button>
                            </nav>
                        </section>
                        <section className={"flex max-md:gap-4 items-center"}>
                            <ActionButton label={"Contact Us"} />
                            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                                <SheetTrigger>
                                    <MenuIcon className={"size-9 md:hidden hover:text-white/70 transition"} />
                                </SheetTrigger>
                                <SheetContent side={"top"} className={"p-8"}>
                                    <div className={"inline-flex items-center center gap-3"}>
                                        <div className={"border size-8 rounded-lg inline-flex items-center justify-center"}>
                                            <SiteLogo className={"size-6 h-auto"} />
                                        </div>
                                        <p className={"font-bold"}>Spruntler</p>
                                    </div>
                                    <div className={"mt-8 mb-4"}>
                                        <nav className={"grid gap-4 items-center text-lg"}>
                                            <Link href={"#"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
                                                <Feather className={"size-6"} />
                                                Services
                                            </Link>
                                            <Link href={"#"} className={"flex items-center gap-3 text-white/70 hover:text-white transition"}>
                                                <CodeXml className={"size-6"} />
                                                About Us
                                            </Link>
                                            <button
                                                onClick={() => { setIsOpen(false); onBlogClick(); }}
                                                className={"flex items-center gap-3 text-white/70 hover:text-white transition"}
                                            >
                                                <Wallet2 className={"size-6"} />
                                                Blogs
                                            </button>
                                        </nav>
                                    </div>
                                </SheetContent>
                            </Sheet>
                        </section>
                    </div>
                </div>
            </header>
        </>
    );
}
