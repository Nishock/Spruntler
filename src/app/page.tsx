"use client";  // 👈 Yeh zaroor hona chahiye

import SiteHeader from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { LogoTicker } from "@/components/logo-ticker";
import SiteFooter from "@/components/site-footer";
import { CallToAction } from "@/components/call-to-action";
import  AboutUs  from "@/components/aboutUs";
import { Features } from "@/components/features";
import { Testimonials } from "@/components/testimonials";  // 
import { GithubIndicator } from "@/components/github-indicator";
import { Element, scroller } from "react-scroll";  // 👈 Import for scrolling

export default function Home() {
    return (
        <>
            <SiteHeader onBlogClick={() => scroller.scrollTo("testimonials-section", { smooth: true, duration: 800 })} />
            <HeroSection />
            <LogoTicker />
            <AboutUs />
            <Features />

            <Element name="testimonials-section">  
                <Testimonials />
            </Element>

            <CallToAction />
            <GithubIndicator />
            <SiteFooter />
        </>
    );
}
