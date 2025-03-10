"use client";
import React from "react";
import Image from "next/image"; // Import optimized Image component
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCannabis,
    faHeart,
    faLongArrowAltRight,
    faRandom,
    faVest,
    faYinYang,
} from "@fortawesome/free-solid-svg-icons";
import BackgroundStars from "@/assets/stars.png";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

// Type definitions
interface StoryItemProps {
    item: {
        title: string;
        description: string;
        image: string;
    };
    index: number;
}

interface StoryProps {
    title: string;
    description: string;
    image: string;
}

interface ServiceProps {
    icon: IconDefinition;
    title: string;
    description: string;
}

// About Us Section Data
const stories: StoryProps[] = [
    {
        title: "Vision",
        description:
            "Transform online advertising by shifting the focus from confusing jargon to clear, results-driven strategies that lead to measurable victories for businesses.",
        image: "",
    },
    {
        title: "Mission",
        description:
            "More off this less hello salamander lied porpoise much over tightly circa horse taped so innocuously outside crud mightily rigorous negative one inside gorilla and drew humbly shot tortoise inside opaquely.",
        image: "",
    },
];

const StoryItem: React.FC<StoryItemProps> = ({ item, index }) => {
    const { title, description, image } = item;
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center text-center md:text-center">
            <div className="order-2 md:order-1">
                <h4 className="text-3xl font-semibold mb-4 text-white">{title}</h4>
                <p className="text-base leading-relaxed text-white/70 mb-0">{description}</p>
            </div>
            <div className="order-1 md:order-2">
                <Image
                    src={image}
                    alt={title}
                    width={256}
                    height={256}
                    className="w-64 h-auto mx-auto md:mx-100 rounded-2xl shadow-lg hover:opacity-90 transition-opacity duration-300"
                />
            </div>
        </div>
    );
};

// Services Section Data
const services: ServiceProps[] = [
    {
        icon: faHeart,
        title: "Background Removing",
        description:
            "To them sea. Give upon. Divide land called second lesser. Created dominion own unto form days created can't fifth doesn't.",
    },
    {
        icon: faCannabis,
        title: "Fun Video Creating",
        description:
            "Under is So wherein heaven meat great so. In man void. Multiply creepeth. Morning i, fruit gathering itself i make...",
    },
    {
        icon: faRandom,
        title: "Blog Writing",
        description:
            "Without Given bring there seasons our have second you're seasons waters he form, us forth, divided cattle. She'd..",
    },
    {
        icon: faYinYang,
        title: "Professional Editing",
        description:
            "Kind gathered saw them itself had very day may set herb created them. Meat together upon of creeping, god that.",
    },
    {
        icon: faVest,
        title: "Signature Analysis",
        description:
            "Created. Saw god wherein appear our subdue for earth subdue above every. Divided seas fowl grass sea good there moved..",
    },
    {
        icon: faRandom,
        title: "Branding Cloths",
        description:
            "Void bearing day forth set a whose. Second a darkness be also spirit own made darkness and image unto so..",
    },
];

const ServiceItem: React.FC<{ service: ServiceProps }> = ({ service }) => (
    <div className="bg-white/10 backdrop-blur-lg hover:shadow-lg hover:-translate-y-1 h-full p-6 transition duration-500 rounded-lg">
        <div className="pt-6 p-4 text-white">
            <FontAwesomeIcon icon={service.icon} className="text-[40px]" />
        </div>
        <div className="p-4 text-white">
            <h5 className="text-lg font-semibold mb-4">{service.title}</h5>
            <p className="opacity-70 mb-6">{service.description}</p>
            <a
                href="#!"
                className="text-sm font-semibold hover:text-blue-400 duration-300"
            >
                LEARN MORE{" "}
                <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-1" />
            </a>
        </div>
    </div>
);

// Main Component
const AboutUs: React.FC = () => {
    return (
        <motion.section
            style={{
                backgroundImage: `url(${BackgroundStars.src})`,
                backgroundSize: "cover",
            }}
            className="py-14 md:py-24 text-white bg-black"
        >
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl font-bold mb-6 bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(77,64,239,0.5))] bg-clip-text text-transparent">
                    Spruntler: The Marketing Avengers.
                </h2>
                <p className="text-xl opacity-80 mb-12 text-white/70">
                    We’re a team of creative strategists, digital wizards, and marketing nerds who believe in one thing—making your business ridiculously successful.
                </p>

                <div className="space-y-16">
                    {stories.map((item, i) => (
                        <StoryItem key={i} item={item} index={i + 1} />
                    ))}
                </div>
            </div>

            {/* Services Section */}
            <section className="py-14 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-4xl font-bold mb-12 text-white">Our Services</h3>
                    <div className="grid grid-cols-12 gap-6">
                        {services.map((service, i) => (
                            <div className="col-span-12 md:col-span-6 xl:col-span-4" key={i}>
                                <ServiceItem service={service} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </motion.section>
    );
};

export default AboutUs;
