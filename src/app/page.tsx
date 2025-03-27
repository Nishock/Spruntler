"use client";

import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import { LogoTicker } from "@/components/logo-ticker";
import SiteFooter from "@/components/site-footer";
import { CallToAction } from "@/components/call-to-action";
import  Market  from "@/components/MarketingThatWorks";
import  ClientSuccess  from "@/components/ClientSuccess";
import { Testimonials } from "@/components/testimonials";
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
    return (
        <>|
             <Analytics/>   
            <SiteHeader />
            <HeroSection />
            {/* <LogoTicker /> */}
            <Market />
            <ClientSuccess />
            <Testimonials />
            <CallToAction />
            <SiteFooter />
        </>
    );
}
