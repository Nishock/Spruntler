'use client';

import React, { useState } from "react";
import { faArrowRight, faCalendarAlt, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin } from "@fortawesome/free-brands-svg-icons";
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

const faqList = [
  {
    question: "What services does Spruntler offer?",
    answer: "Spruntler isn’t just another marketing agency—we’re your brand’s growth partner. We offer everything from social media management to advertising, branding, and website development.",
  },
  {
    question: "What industries does Spruntler work with?",
    answer: "We’ve worked with brands in lifestyle, fashion, tech, healthcare, hospitality, and e-commerce—but we don’t believe in limits.",
  },
  {
    question: "What is the typical onboarding process at Spruntler?",
    answer: "First, we chat to understand your goals. Then, we dive into market research, develop a strategy, and execute the plan effectively.",
  },
  {
    question: "Does Spruntler work with startups and small businesses?",
    answer: "Absolutely! Whether you’re a fresh startup or an established business looking to scale, we create custom strategies for all.",
  },
  {
    question: "Is there a minimum contract period with Spruntler?",
    answer: "Yes, we typically work with clients for 3 to 6 months to ensure long-term success and sustainable growth.",
  },
  {
    question: "What is Spruntler’s pricing structure?",
    answer: "Our pricing depends on factors like platforms, content volume, and campaign scope. We offer customized quotes based on your needs.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }: { faq: typeof faqList[number]; isOpen: boolean; onClick: () => void }) => (
  <div className="border border-gray-800 rounded-lg mb-4 overflow-hidden">
    <button
      onClick={onClick}
      className="w-full p-6 text-left flex justify-between items-center bg-black hover:bg-gray-900 transition-colors"
    >
      <span className="text-gray-200 font-medium">{faq.question}</span>
      <FontAwesomeIcon
        icon={isOpen ? faMinus : faPlus}
        className="text-gray-400 ml-4 transition-transform"
      />
    </button>
    {isOpen && (
      <div className="p-6 bg-black border-t border-gray-800">
        <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
      </div>
    )}
  </div>
);

const Master = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="ezy__header12 mb-20 md:mb-28 pt-10 md:pt-16 text-white relative">
      <HeroHeaderShapes />

      <div className="container px-6 md:px-10 mx-auto">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(77,64,239,0.5))] bg-clip-text text-transparent leading-[2] md:leading-[2]">
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
              Founder & CEO of Spruntler, blends data-driven strategy with creative storytelling to craft powerful digital marketing solutions.
            </p>
            <div className="flex justify-center lg:justify-start space-x-10 mt-10">
              <a href="https://wa.me/qr/ZVXUQM37PTK2G1" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faWhatsapp} className="text-green-500 text-4xl" />
              </a>
              <a href="https://www.linkedin.com/in/mohammed-aamir-1057aa1b8" target="_blank" rel="noopener noreferrer">
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
              className="rounded-lg w-max max-w-[250px] md:max-w-[300px] lg:max-w-[350px] mx-auto"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqList.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openIndex === index}
                onClick={() => handleFaqClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default Master;
