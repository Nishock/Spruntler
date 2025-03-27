"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

// -------------------------
// Testimonials Data
// -------------------------

const testimonials = [
  {
    text: '"Social Media Marketing Secrets: How to Build a Powerful Online Presence"',
    name: "Spruntler Team",
    avatarImg: "https://cdn.easyfrontend.com/pictures/blog/blog_14_3.jpg",
  },
  {
    text: '"Content Marketing Playbook: How to Create Viral and High-Impact Content"',
    name: "Spruntler Team",
    avatarImg: "https://cdn.easyfrontend.com/pictures/blog/blog_8.jpg",
  },
  {
    text: '"The Rise of AI in Marketing: How Artificial Intelligence is Changing the Game"',
    name: "Spruntler Team",
    avatarImg: "https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg",
  },
  {
    text: '"Understanding Customer Behavior with Analytics: A Guide to Smarter Marketing"',
    name: "Spruntler Team",
    avatarImg: "https://cdn.easyfrontend.com/pictures/blog/blog_5.jpg",
  },
];

// -------------------------
// FAQ Data
// -------------------------

const faqList = [
  {
    question: "What services does Spruntler offer?",
    answer:
      "Spruntler isn’t just another marketing agency—we’re your brand’s growth partner. We offer everything from social media management to advertising, branding, and website development.",
  },
  {
    question: "What industries does Spruntler work with?",
    answer:
      "We’ve worked with brands in lifestyle, fashion, tech, healthcare, hospitality, and e-commerce—but we don’t believe in limits.",
  },
  {
    question: "What is the typical onboarding process at Spruntler?",
    answer:
      "First, we chat to understand your goals. Then, we dive into market research, develop a strategy, and execute the plan effectively.",
  },
  {
    question: "Does Spruntler work with startups and small businesses?",
    answer:
      "Absolutely! Whether you’re a fresh startup or an established business looking to scale, we create custom strategies for all.",
  },
  {
    question: "Is there a minimum contract period with Spruntler?",
    answer:
      "Yes, we typically work with clients for 3 to 6 months to ensure long-term success and sustainable growth.",
  },
  {
    question: "What is Spruntler’s pricing structure?",
    answer:
      "Our pricing depends on factors like platforms, content volume, and campaign scope. We offer customized quotes based on your needs.",
  },
];

// -------------------------
// FAQ Item Component with + / -
// -------------------------

function FaqItem({ faq, isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      className="border border-muted p-5 rounded-xl bg-zinc-900 cursor-pointer hover:bg-zinc-800 transition"
    >
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">{faq.question}</h3>
        <span className="text-xl font-bold">
          {isOpen ? "-" : "+"}
        </span>
      </div>
      {isOpen && <p className="text-gray-400 mt-2">{faq.answer}</p>}
    </div>
  );
}

// -------------------------
// Main Component
// -------------------------

export function Testimonials() {
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);

  const handleFaqClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {/* Testimonials Section */}
      <section
        className="py-20 md:py-24 cursor-pointer"
        onClick={() => router.push("/blogs")}
      >
        <div className="container">
          <h2 className="text-5xl md:text-6xl font-medium text-center tracking-tighter">
            Latest Insights & Trends
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto text-center tracking-tight mt-5">
            Explore our latest blogs covering industry trends, expert insights,
            and actionable strategies to elevate your business.
          </p>

          <div className="flex overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 50,
                ease: "linear",
              }}
              className="flex flex-none gap-5"
            >
              {[...testimonials, ...testimonials].map((testimonial, index) => (
                <div
                  key={index}
                  className="border border-muted p-6 md:p-10 rounded-xl bg-[linear-gradient(to_bottom_left,#1e00ff,black)] max-w-xs md:max-w-md flex-none"
                >
                  <p className="text-lg md:text-2xl tracking-tight">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3 mt-5">
                    <div className="relative">
                      <Image
                        src={testimonial.avatarImg}
                        alt={testimonial.name}
                        width={44}
                        height={44}
                        className="rounded-lg grayscale"
                      />
                    </div>
                    <div>
                      <p>{testimonial.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
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
    </>
  );
}
