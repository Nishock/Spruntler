"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const MarketingThatWorks = () => {
  const services = [
    {
      title: "Digital Marketing",
      description: "SEO, PPC, and strategies sharper than a samurai sword.",
      image:
        "https://2t3690zz96.ufs.sh/f/LisFD3CqijuviIWDPRS2L1PVtBbFAKuflw3nSUz6xREYkZQ9",
    },
    {
      title: "Website Design & Development",
      description:
        "Because a good website is like a good date: fast, attractive, and doesn’t crash.",
      image: "https://2t3690zz96.ufs.sh/f/LisFD3Cqijuv3kQ57Mi4L2TidwOEMYxr7tj91AWBhQNpZFly",
    },
    {
      title: "Branding & Identity",
      description:
        "We make your brand so cool even your competitors will double-tap.",
      image: "https://2t3690zz96.ufs.sh/f/LisFD3Cqijuvyqlmunz9b7hSKwY0q1Je6PpfkmQWvtTAGs2X",
    },
    {
      title: "E-commerce Solutions",
      description:
        "From setting up your online store to making people actually buy stuff.",
      image: "https://2t3690zz96.ufs.sh/f/LisFD3CqijuvG3sRTyBBhmcKtz2UvyOroljMFeqXkf0D16uV",
    },
    {
      title: "Video Production & Influencer Marketing",
      description: "Because nobody reads anymore.",
      image: "https://2t3690zz96.ufs.sh/f/LisFD3CqijuvGI3hJyBBhmcKtz2UvyOroljMFeqXkf0D16uV",
    },
    {
      title: "Much More!!!",
      description: "Just cut to the chase and let’s talk business.",
      image: "https://2t3690zz96.ufs.sh/f/LisFD3CqijuvUlERouToRQgrtHfX2hT87suK43ZzYO1v9PF0",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto p-8 text-center text-white">
      <motion.h1
        className="text-center text-2xl md:text-5xl font-semibold mb-10 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Marketing That Works (Seriously.)
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-zinc-900 p-8 rounded-xl shadow-lg flex flex-col items-center text-center hover:shadow-xl transition-shadow"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="w-16 h-16 mb-4 relative">
              <img
                src={service.image}
                alt={service.title}
                width={64}
                height={64}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              {service.title}
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MarketingThatWorks;
