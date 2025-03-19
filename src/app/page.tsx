"use client";

import SiteHeader from "@/components/site-header";
import HeroSection from "@/components/hero-section";
import { LogoTicker } from "@/components/logo-ticker";
import SiteFooter from "@/components/site-footer";
import { CallToAction } from "@/components/call-to-action";
import  Market  from "@/components/MarketingThatWorks";
import  ClientSuccess  from "@/components/ClientSuccess";

// import AboutUs from "@/components/aboutUs";
// import Master from "@/components/Master";
// import { Features } from "@/components/features";
import SplashCursor from './SplashCursor'
import { Testimonials } from "@/components/testimonials";
// import { GithubIndicator } from "@/components/github-indicator";

export default function Home() {
    return (
        <>
            {/* <SplashCursor />         */}
            <SiteHeader />
            <HeroSection />
            <LogoTicker />
            <Market />
            <ClientSuccess />
            {/* <AboutUs /> */}
            {/* <Master /> */}
            {/* <Features /> */}
            <Testimonials />
            <CallToAction />
            {/* <GithubIndicator /> */}
            <SiteFooter />
        </>
    );
}
