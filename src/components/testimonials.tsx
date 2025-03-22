"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const testimonials = [
  {
    text: '"Social Media Marketing Secrets: How to Build a Powerful Online Presence"',
    name: "Spruntler Team",
    avatarImg: "https://cdn.easyfrontend.com/pictures/blog/blog_14_3.jpg",
  },
  {
    text: '"Content Marketing Playbook: How to Create Viral and High-Impact Content"',
    name: "Spruntler Team",
    avatarImg: "https://cdn.easyfrontend.com/pictures/blog/blog_8.jpg", // Replace with online URL
  },
  {
    text: '"The Rise of AI in Marketing: How Artificial Intelligence is Changing the Game"',
    name: "Spruntler Team",
    avatarImg: "https://cdn.easyfrontend.com/pictures/blog/blog_4.jpg", // Replace with online URL
  },
  {
    text: '"Understanding Customer Behavior with Analytics: A Guide to Smarter Marketing"',
    name: "Spruntler Team",
    avatarImg: "https://cdn.easyfrontend.com/pictures/blog/blog_5.jpg", // Replace with online URL
  },
];

export function Testimonials() {
  const router = useRouter();

  return (
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
                      src={testimonial.avatarImg || "/placeholder.svg"}
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
  );
}
