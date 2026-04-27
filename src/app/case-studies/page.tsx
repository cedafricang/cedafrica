"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import CaseStudies from "../components/home/testimonial"; // your component

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  hero: {
  eyebrow: "Case Studies",
  title: "Integrated AV Design Across Spaces",
  description:
    "A portfolio of performance-driven audiovisual systems delivered across residential, hospitality, and ProAV environments — each structured through a unified design framework ensuring alignment between architecture, engineering, and execution.",

  image: "/images/hero/avimage.jpg",
},

partners: [
    "/images/partners/baron.svg",
    "/images/partners/avantis.svg",
    "/images/partners/ca.svg",
    "/images/partners/gabonn.svg",
    "/images/partners/idlewoods.svg",
    "/images/partners/jam.svg",
    "/images/partners/saota.svg",
    "/images/partners/spectra.svg",
    "/images/partners/topklan.svg",
    "/images/partners/triangle.svg",
    "/images/partners/wse.svg",
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function CaseStudyPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white text-black">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section className="relative h-screen w-full flex items-center overflow-hidden">

        {/* BACKGROUND (ZOOM) */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={data.hero.image}
            alt="case study"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* OVERLAYS */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90" />

        {/* ============================= */}
        {/* CONTENT */}
        {/* ============================= */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 flex justify-end">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-xl text-right text-white"
            >

              {/* Eyebrow */}
              <p className="text-white/50 tracking-[0.35em] uppercase text-xs mb-6">
                {data.hero.eyebrow}
              </p>

              {/* Title */}
              <h1 className="text-5xl text-white md:text-7xl font-light leading-[1.05]">
                {data.hero.title}
              </h1>

              {/* Description */}
              <p className="text-white/80 mt-6 text-lg leading-relaxed">
                {data.hero.description}
              </p>

              {/* ============================= */}
              

            </motion.div>

          </div>
        </div>

        {/* ============================= */}
        {/* PARTNER MARQUEE */}
        {/* ============================= */}
       <div className="absolute bottom-0 left-0 w-full pb-10 overflow-hidden">

  {/* Fade edges */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

  {/* Marquee */}
  <div className="overflow-hidden">
    <motion.div
      className="flex items-center gap-10 md:gap-20 min-w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        duration: 30,
        ease: "linear",
        repeat: Infinity,
      }}
    >
      {[...loopPartners, ...loopPartners].map((logo, i) => (
        <div key={i} className="flex-shrink-0">
          <img
            src={logo}
            alt="partner"
            className="
              h-6 sm:h-7 md:h-6
              object-contain
              brightness-0 invert
              opacity-70
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>
      ))}
    </motion.div>
  </div>

  {/* Label */}
  <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase mt-6 text-center">
    Certified Partner Ecosystem
  </p>

</div>

      </section>

      {/* ============================= */}
      {/* YOUR CASE STUDY COMPONENT */}
      {/* ============================= */}
      <CaseStudies />

    </main>
  );
}