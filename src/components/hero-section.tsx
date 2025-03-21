"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const HeroSection = () => {
  const BackgroundStars =
    "https://2t3690zz96.ufs.sh/f/LisFD3Cqijuv5JnGfkejThxfJzjOcDXKFbYIku81MV9yASQ4";

  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start end`, "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );

  return (
    <motion.section
      animate={{ backgroundPositionX: "100%" }}
      transition={{
        duration: 120,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      className="ezy__header23 light md:pt-28 md:pb-12 lg:py-32 text-zinc-900 dark:text-white relative overflow-hidden z-10 min-h-[500px] md:h-[800px] flex items-center [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] backdrop-blur-xl"
      style={{
        backgroundImage: `url(${BackgroundStars})`,
        backgroundPositionY,
      }}
      ref={sectionRef}
    >
      {/* Space background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,rgb(77,64,239,0.2)_15%,rgb(14,0,36,0.5)_78%,transparent)] backdrop-blur-xl" />

      {/* Planet */}
      <div className="absolute size-32 md:size-64 lg:size-96 rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgba(77,64,239,0.2)_37.7%,rgba(77,64,239,0.3))] shadow-[0_0_30px_rgba(77,64,239,0.8),-10px_-10px_30px_rgba(255,255,255,0.3),-10px_-10px_50px_rgba(255,255,255,0.1)] bg-[rgb(77,64,239)] opacity-40 z-0 filter blur-lg md:blur-xl" />


      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{
          duration: 60,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute size-[300px] md:size-[780px] rounded-full border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed opacity-40 z-0 filter blur-sm md:blur-xl"
      />

      <motion.div
        style={{ translateY: "-50%", translateX: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{
          duration: 90,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute size-[400px] md:size-[980px] rounded-full border border-white opacity-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 filter blur-sm md:blur-xl"
      >
        <div className="absolute size-1 md:size-2 bg-white rounded-full top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute size-1 md:size-2 bg-white rounded-full top-1/2 left-full -translate-x-1/2 -translate-y-1/2" />
      </motion.div>

      {/* Content Section */}
      <div className="container px-4 mx-auto relative z-10  md:mt-10 lg:mt-0">
        <div className="grid grid-cols-12 gap-y-6 lg:gap-x-8">
          <div className="col-span-12 lg:col-span-6 xl:pr-12 text-center lg:text-start">
            <div className="flex flex-col justify-center ml-32 h-full px-4 sm:px-6 md:px-8">
              <h2 className="text-left text-7xl md:text-6xl font-bold mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Where Possibility <br className="hidden md:block" /> Encounters
                Worth.
              </h2>
              <p className="text-sm md:text-sm lg:text-sm leading-relaxed opacity-80 text-white mb-8 max-w-[600px] mx-auto lg:mx-0">
                Welcome to Spruntler, where digital marketing meets a touch of
                magic and a whole lot of strategy. We turn your business from
                meh to marvelous with innovative, data-driven marketing,
                stunning websites, and creative content that doesn&apos;t just get
                seen—it gets results.
              </p>
              <div className="mt-4 md:mt-6">
                <a
                  href="/about"
                  className="bg-black-900 border rounded-lg py-3 px-8 md:py-4 md:px-10 hover:bg-opacity-90 duration-300 text-white text-lg md:text-xl inline-flex items-center gap-2"
                >
                  Get in touch
                  <svg
                    className="w-4 h-4 md:w-5 md:h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative py-10 lg:py-0">
            <div className="relative w-full max-w-[400px] md:max-w-[600px] lg:max-w-none">
              <img
                src="https://2t3690zz96.ufs.sh/f/LisFD3CqijuvJWxW8kAPmAIegLBjMEt7pvKbh068x1lfTCiX"
                alt="Design themes showcase"
                className="rounded-xl w-full h-auto object-contain aspect-[1.1] lg:aspect-auto"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
