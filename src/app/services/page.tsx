"use client";

import SiteHeader from "@/components/site-header";
import  Services  from "@/components/services";
import SiteFooter from "@/components/site-footer";
import { CallToAction } from "@/components/call-to-action";


export default function ServicesPage() {
    return (
        <>
            <SiteHeader />
            <Services />
            <CallToAction />
            <SiteFooter />
        </>
    );
}
