'use client';

import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const HeroHeaderShapes = () => (
  <>
    <svg
      className="absolute left-0 top-0 -z-10 w-28 md:w-44"
      viewBox="0 0 168 213"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="62" cy="106.602" r="106" fill="#1e3a8a" />
    </svg>

    <svg
      className="absolute right-0 bottom-0 w-40 md:w-96"
      viewBox="0 0 385 539"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56 538.602C81.3333 435.923 192.8 230.774 436 231.604"
        stroke="#3730a3"
        strokeWidth="2"
      />
      <path
        d="M45 492.602C70.3333 389.923 181.8 184.774 425 185.604"
        stroke="#3730a3"
        strokeWidth="2"
      />
    </svg>
  </>
);

const Master = () => {
  return (
    <section className="ezy__header12 mb-20 md:mb-28 pt-10 md:pt-16 text-white relative">
      <HeroHeaderShapes />
      

      <div className="container px-6 md:px-10 mx-auto">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6 bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(77,64,239,0.5))] bg-clip-text text-transparent">
        The Visionary Behind Spruntler
        </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-start space-y-14">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-[55px] lg:text-[70px] font-bold leading-none"
            >
              Mohammed Aamir
            </motion.h2>
            <p className="text-[14px] md:text-[15px] text-gray-300">
              Founder & CEO of Spruntler, blends data-driven strategy with creative storytelling to craft powerful digital marketing solutions that drive brand growth and engagement.
            </p>
            <div className="flex justify-center lg:justify-start space-x-10 mt-10">
              <a href="https://wa.me/qr/ZVXUQM37PTK2G1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl" />
              </a>
              <a href="https://www.linkedin.com/in/mohammed-aamir-1057aa1b8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="text-blue-500 text-4xl" />
              </a>
              <a href="https://calendly.com/aamir-spruntler/30min" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCalendarAlt} className="text-yellow-500 text-4xl" />
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <motion.img
              src="https://2t3690zz96.ufs.sh/f/LisFD3CqijuvvEIoxn3Rq9Ue1BLcGshHtWQuX5j3KpYIxCln"
              alt="Mohammed Aamir"
              className=" rounded-lg w-max max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Master;