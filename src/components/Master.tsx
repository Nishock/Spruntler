'use client';

import React from "react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const HeroHeaderShapes = () => (
  <>
    <svg
      className="absolute left-0 top-0 -z-10 w-28 md:w-44"
      viewBox="0 0 168 213"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="62" cy="106.602" r="106" fill="#1e3a8a" fillOpacity="0.4" />
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="text-center lg:text-start">
            <motion.h2
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-[55px] mb-20 lg:text-[70px] font-bold leading-none mb-6"
            >
              Mohammed Aamir
            </motion.h2>
            <p className="text-[14px] my-20 md:text-[15px] text-gray-300">
              Founder & CEO of Spruntler, blends data-driven strategy with creative storytelling to craft powerful digital marketing solutions that drive brand growth and engagement.
            </p>
            <div>
              <a
                href="#!"
                className="bg-indigo-600 text-white shadow-xl rounded-lg py-2 px-6 text-lg md:text-xl mt-6 inline-block transition-all hover:bg-indigo-700 hover:shadow-2xl"
              >
                Contact Now <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
              </a>
            </div>
          </div>

          <div className="text-center lg:text-start">
            <motion.img
              src="https://2t3690zz96.ufs.sh/f/LisFD3CqijuvBSEuaytWAMI9yDljtGTCoY07mk3NRLJi2UVF"
              alt="Mohammed Aamir"
              className="border rounded-lg w-max max-w-[300px] md:max-w-[400px] lg:max-w-full mx-auto"
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
