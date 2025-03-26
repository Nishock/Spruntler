"use client";
import React, { useState } from "react";
import { ActionButton } from "@/components/action-button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCannabis,
  faHeart,
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
    title: "Branding & Identity – Make Your Brand Unforgettable",
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
    </div>
  </div>
);

// FAQ Component
const faqList = [
  {
    question: "What services does Spruntler offer?",
    answer: "Spruntler isn’t just another marketing agency—we’re your brand’s growth partner. We offer everything from social media management to advertising, branding, and website development. If it helps boost your brand’s presence, we’ve got it covered.",
  },
  {
    question: "What industries does Spruntler work with?",
    answer: "We’ve worked with brands in lifestyle, fashion, tech, healthcare, hospitality, and e-commerce—but we don’t believe in limits. If you have a business and a vision, we’re ready to make it happen.",
  },
  {
    question: "What is the typical onboarding process at Spruntler?",
    answer: "We keep it simple but thorough. First, we chat (coffee optional but recommended) to understand your goals. Then, we dive into market research, develop a tailored strategy, and hit the ground running with a structured execution plan.",
  },
  {
    question: "Does Spruntler work with startups and small businesses?",
    answer: "Absolutely! Whether you’re a fresh startup or an established business looking to scale, we create custom strategies to match your size, budget, and goals. No business is too small for big results.",
  },
  {
    question: "Is there a minimum contract period with Spruntler?",
    answer: "Yes, we typically work with clients for 3 to 6 months. Why? Because great results take time—and we’re here to build lasting success, not quick wins.",
  },
  {
    question: "What is Spruntler’s pricing structure?",
    answer: "Our pricing isn’t one-size-fits-all—it’s tailored to your needs. It depends on factors like platforms, content volume, and campaign scope. We’ll give you a custom quote that makes sense for your goals (and your budget).",
  },
];

const FaqItem = ({
  faq,
  isOpen,
  onClick,
}: {
  faq: typeof faqList[number];
  isOpen: boolean;
  onClick: () => void;
}) => (
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

  const handleFaqClick = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

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
          {/* <div className="mt-4 md:mt-6 flex justify-center">
  <a
    href="/blogs"
    className="bg-black-900 border rounded-lg py-3 px-8 md:py-4 md:px-10 hover:bg-opacity-90 duration-300 text-white text-lg md:text-xl inline-flex items-center gap-2"
  >
     Know More..
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
</div> */}

<div className="mt-6 flex justify-center">
  <ActionButton label="Read more" onClick={() => window.location.href = "/blogs"} />
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
                onClick={() => handleFaqClick(index)}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
