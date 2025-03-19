"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCannabis,
  faHeart,
  faLongArrowAltRight,
  faRandom,
  faVest,
  faYinYang,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

// Services Component
const services = [
  {
    icon: faHeart,
    title: "Digital Marketing –Smarter Strategies, Bigger Wins",
    description: "SEO, PPC, content, and social—optimized for engagement, conversions, and growth. AI-powered insights and omnichannel precision keep your brand ahead.",
  },
  {
    icon: faCannabis,
    title: "Website Design & Development – Fast, Sleek, and Built to Convert",
    description: "UX-driven, mobile-first, SEO-ready sites with seamless integrations and data-backed performance for maximum impact.",
  },
  {
    icon: faRandom,
    title: "Branding & Identity Make Your Brand Unforgettable",
    description: "Strategic storytelling, bold visuals, and market insights ensure your brand stands out with purpose and personality.",
  },
  {
    icon: faYinYang,
    title: "E-commerce Solutions – Sell More, Stress Less",
    description: "Shopify, WooCommerce, and headless commerce optimized with CRO, A/B testing, and AI-driven personalization.",
  },
  {
    icon: faVest,
    title: "Video & Influencer Marketing – Content That Captivates",
    description: "High-impact video, influencer collabs, and social-proof strategies that amplify reach and credibility.",
  },
  {
    icon: faRandom,
    title: "Custom Solutions – Tailored Strategies for Unique Challenges",
    description: "From automation to AI-powered insights, we craft bespoke digital solutions that fit your business like a glove.",
  },
];

const ServiceItem = ({ service }: { service: typeof services[number] }) => (
  <div className="bg-black-900 hover:bg-gray-700 border border-white-800 rounded-xl p-6 transition-all duration-300 group h-full">
    <div className="p-4 text-blue-400 group-hover:text-white transition-colors">
      <FontAwesomeIcon icon={service.icon} className="text-4xl mb-4" />
    </div>
    <div className="p-4">
      <h3 className="text-lg font-semibold mb-4 text-white">{service.title}</h3>
      <p className="text-gray-400 mb-6">{service.description}</p>
      {/* <button className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors">
        Learn More
        <FontAwesomeIcon icon={faLongArrowAltRight} className="ml-2" />
      </button> */}
    </div>
  </div>
);

// FAQ Component
const faqList = [
  {
    question: "What services do you offer?",
    answer: "We provide comprehensive digital solutions including web development, content creation, and brand strategy.",
  },
  {
    question: "How long do projects typically take?",
    answer: "Project timelines vary based on complexity, but we always deliver within agreed deadlines.",
  },
  {
    question: "Do you offer ongoing support?",
    answer: "Yes, we provide maintenance and support packages for all our solutions.",
  },
  {
    question: "What's your pricing model?",
    answer: "We offer flexible pricing including project-based and retainer options.",
  },
  {
    question: "How do we start a project?",
    answer: "Contact us for a free consultation to discuss your requirements.",
  },
  {
    question: "What industries do you serve?",
    answer: "We work with businesses across all sectors, from startups to enterprises.",
  },
];

const FaqItem = ({ faq, isOpen, onClick }: { faq: typeof faqList[number], isOpen: boolean, onClick: () => void }) => (
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

// Main Page Component
export default function ServicesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen">
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Our Premium Services
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Delivering exceptional digital solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceItem key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

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
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}