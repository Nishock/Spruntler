"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ActionButton } from "@/components/action-button"

const HeroSection = () => {
  const BackgroundStars = "https://2t3690zz96.ufs.sh/f/LisFD3Cqijuv5JnGfkejThxfJzjOcDXKFbYIku81MV9yASQ4"

  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: [`start end`, "end start"],
  })
  const backgroundPositionY = useTransform(scrollYProgress, [0, 1], [-300, 300])

  return (
    <motion.section
      animate={{ backgroundPositionX: "100%" }}
      transition={{
        duration: 120,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      className="ezy__header23 light md:pt-28 md:pb-12 lg:py-0 text-zinc-900 dark:text-white relative overflow-hidden z-10 min-h-[500px] md:h-[800px] flex items-center [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] backdrop-blur-xl"
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
      <div className="container px-8 py-8 mx-auto relative z-10 md:mt-10 lg:-mt-32">
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-8">
          {/* Text content - centered on mobile/tablet, left-aligned on desktop */}
          <div className="col-span-12 lg:col-span-6 xl:pr-12 flex items-center">
            <div className="flex flex-col justify-center w-full  px-4 sm:px-6 md:px-8">
              <h2 className="text-center lg:text-left text-5xl sm:text-5xl md:text-5xl font-bold mb-8 md:mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Where Possibility <br className="hidden md:block" /> Encounters Worth.
              </h2>
              <p className="text-xs md:text-sm leading-relaxed opacity-80 text-white mb-8 max-w-[600px] mx-auto lg:mx-0 text-center lg:text-left">
                Welcome to Spruntler, where digital marketing meets a touch of magic and a whole lot of strategy. We
                turn your business from meh to marvelous with innovative, data-driven marketing, stunning websites, and
                creative content that doesn&apos;t just get seen—it gets results.
              </p>
              {/* <div className="mt-4 md:mt-6 flex justify-center lg:justify-start">
                <a
                  href="/about"
                  className="bg-black-900 border rounded-lg py-3 px-8 md:py-4 md:px-10 hover:bg-opacity-90 duration-300 text-white text-lg md:text-xl inline-flex items-center gap-2"
                >
                  Get in touch
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div> */}
              <div className="mt-6 flex justify-left">
                <ActionButton label="Get in touch" onClick={() => window.location.href = "/about"} />
              </div>
              
            </div>
          </div>

          {/* Image section */}
          <div className="col-span-12 lg:col-span-6 flex items-center justify-center relative py-10 lg:py-0">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-none">
              <img
                src="https://2t3690zz96.ufs.sh/f/LisFD3Cqijuv3TDtHbi4L2TidwOEMYxr7tj91AWBhQNpZFly"
                alt="Design themes showcase"
                className="rounded-xl w-full h-auto object-contain aspect-[1.1] lg:aspect-auto"
                style={{ maxHeight: "500px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default HeroSection

