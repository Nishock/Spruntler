"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import BackgroundStars from "@/assets/stars.png";

interface StoryItemProps {
  item: {
    title: string;
    description: string;
    image: string;
  };
  index: number;
}

const stories = [
  {
    title: "Our Vision",
    description:
      "To transform online advertising from jargon-centric to victory-focused.",
    image:
      "https://2t3690zz96.ufs.sh/f/LisFD3CqijuvYjN6IybMENgCYhBFIJAtr2PZqxG86dKOwk05",
  },
  {
    title: "Our Mission",
    description:
      "Support businesses in their growth with creative, data-driven marketing tactics that aren’t merely aesthetically pleasing, but genuinely yield fruitful results.",
    image:
      "https://2t3690zz96.ufs.sh/f/LisFD3Cqijuv35nrdGi4L2TidwOEMYxr7tj91AWBhQNpZFly",
  },
];

const StoryItem: React.FC<StoryItemProps> = ({ item, index }) => {
  const { title, description, image } = item;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:ml-0 items-center text-center md:text-center">
      <div className="order-2 md:order-1">
        <h4 className="text-3xl font-semibold mb-4 text-white">{title}</h4>
        <p className="text-base leading-relaxed text-white/70 mb-0">
          {description}
        </p>
      </div>
      <div className="order-1 md:order-2">
        <img
          src={image}
          alt={title}
          width={300}
          height={300}
          className="w-40 h-auto mx-auto md:mx-100 rounded-2xl shadow-lg hover:opacity-90 transition-opacity duration-300"
        />
      </div>
    </div>
  );
};

export const AboutUs = () => {
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
          We’re a team of creative strategists, digital wizards, and marketing
          nerds...
        </p>

        <div className="space-y-16 ml-0 lg:ml-32">
          {stories.map((item, i) => (
            <StoryItem key={i} item={item} index={i + 1} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};
