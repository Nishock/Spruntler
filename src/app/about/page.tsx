import SiteHeader from "@/components/site-header";
import { AboutUs } from "@/components/about-us";
import Master from "@/components/Master";
import { CallToAction } from "@/components/call-to-action";
import SplashCursor from '../SplashCursor'


import SiteFooter from "@/components/site-footer";

export default function About() {
    return (
        <>  
            <SplashCursor />
            <SiteHeader />
            <AboutUs />
            <Master />
            <CallToAction />
            <SiteFooter />
        </>
    );
}
