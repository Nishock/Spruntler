"use client";

import SiteHeader from "@/components/site-header";
import SiteFooter from "@/components/site-footer";
import { CallToAction } from "@/components/call-to-action";
import Blog8 from "@/components/Blogs";

export default function BlogsPage() {
    return (
        <>
            <SiteHeader />
            <Blog8 />
            <CallToAction />
            <SiteFooter />
        </>
    );
}
