"use client";

import { motion } from "framer-motion";

export function LogoTicker() {
  const logos = ["Syscon", "Rashi", "Boganvilla", "New_Rishte"];

  return (
    <>
      <section className={"py-20 md:py-24"}>
        <div className={"container"}>
          <div className={"flex items-center gap-5"}>
            <div className={"flex-1 md:flex-none"}>
              <h2 className={"text-lg font-bold"}>
                Trusted by top innovative teams
              </h2>
            </div>
            <div
              className={
                "flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
              }
            >
              <motion.div
                initial={{ translateX: "-50%" }}
                animate={{ translateX: "0" }}
                transition={{
                  repeat: Infinity,
                  duration: 30,
                  ease: "linear",
                }}
                className={
                  "flex flex-none gap-14 pr-14 -translate-x-1/2 text-xl font-semibold"
                }
              >
                {[...logos, ...logos].map((logo, index) => (
                  <span key={index}>{logo}</span>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
