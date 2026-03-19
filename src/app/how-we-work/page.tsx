"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Who from "../components/who";
import Why from "../components/why-ced";
import Operate from "../components/operate";
import Rules from "../components/rules";
import Value from "../components/value";
import CTA from "../components/ctawork";

/* ============================= */
/* CMS DATA (REPLACE LATER) */
/* ============================= */

const pageData = {
  hero: {
    eyebrow: "Platform",
    title: "How We Work",
    description:
      "A structured operating system designed to deliver certainty, performance, and control across every AV project.",
    image: "/images/hero/avimage.jpg",
  },

  partners: [
    "/images/partners/sonos.svg",
    "/images/partners/focal.svg",
    "/images/partners/naim.svg",
    "/images/partners/k-array.svg",
    "/images/partners/sonance.svg",
    "/images/partners/trinnov.svg",
    "/images/partners/vicoustic.svg",
  ],
};

/* Duplicate for seamless loop */
const loopPartners = [...pageData.partners, ...pageData.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function HowWeWorkPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <main className="bg-white text-black">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section
        ref={ref}
        className="relative h-screen w-full overflow-hidden flex items-center"
      >
        {/* Background Image */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={pageData.hero.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-white/60 tracking-[0.35em] uppercase text-xs mb-6">
              {pageData.hero.eyebrow}
            </p>

            <h1 className="text-white text-6xl md:text-7xl font-light leading-[1.05] max-w-4xl">
              {pageData.hero.title}
            </h1>

            <p className="text-white/80 mt-8 max-w-2xl text-lg leading-relaxed">
              {pageData.hero.description}
            </p>
          </motion.div>
        </div>

        {/* ============================= */}
        {/* PARTNER MARQUEE (PREMIUM) */}
        {/* ============================= */}
        <div className="absolute bottom-0 left-0 w-full pb-10 overflow-hidden">
          
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-black to-transparent z-10" />

          {/* Marquee */}
          <div className="relative w-full overflow-hidden">
            <motion.div
              className="flex gap-20 items-center"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                duration: 25,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loopPartners.map((logo, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center opacity-70 hover:opacity-100 transition duration-500"
                >
                  <img
                    src={logo}
                    alt="partner"
                    className="h-8 md:h-10 object-contain filter brightness-0 invert"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Label */}
          <p className="text-white/40 text-xs tracking-widest uppercase mt-6 text-center">
            Certified Partner Ecosystem
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* NEXT SECTION (PLACEHOLDER) */}
      {/* ============================= */}
     <Who />
     <Why />
      <Operate />
      <Rules />
      <Value />
      <CTA />

    </main>
  );
}