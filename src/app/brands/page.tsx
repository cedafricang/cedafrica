"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/* ============================= */
/* IMPORT YOUR COMPONENT */
/* ============================= */

import Brands from "../components/home/history"; // 👈 CHANGE PATH IF NEEDED

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  hero: {
    eyebrow: "Ecosystem",
    title: "Brands",
    desc: "A curated portfolio of globally recognized audiovisual brands operating within defined standards, system design frameworks, and performance-driven environments.",
    subtext:
      "Every brand within the CED ecosystem is selected, aligned, and integrated — not just listed.",
    image: "/images/hero/avimage.jpg",
  },

  partners: [
    "/images/partners/sonos.svg",
    "/images/partners/focal.svg",
    "/images/partners/naim.svg",
    "/images/partners/k-array.svg",
    "/images/partners/sonance.svg",
    "/images/partners/trinnov.svg",
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function BrandsPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white text-black">

      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">

        {/* Background */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={data.hero.image}
            alt="Brands"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90" />

        {/* Content */}
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
                {data.hero.desc}
              </p>

              {/* Subtext */}
              <p className="text-white/50 mt-4 text-sm">
                {data.hero.subtext}
              </p>

            </motion.div>

          </div>
        </div>

        {/* ========================================= */}
        {/* PARTNER MARQUEE */}
        {/* ========================================= */}
        <div className="absolute bottom-0 left-0 w-full pb-10 overflow-hidden">

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex gap-20 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
          >
            {loopPartners.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-8 md:h-10 brightness-0 invert opacity-70"
              />
            ))}
          </motion.div>

          <p className="text-white/40 text-xs tracking-widest uppercase text-center mt-6">
            Global AV Brand Portfolio
          </p>
        </div>
      </section>

      {/* ========================================= */}
      {/* BRANDS COMPONENT SECTION */}
      {/* ========================================= */}
      <section className="relative py-28 md:py-36">

        {/* Premium Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f2f2f3] to-[#f9f9fa]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-20">

            <p className="text-black/40 text-xs uppercase tracking-[0.35em] mb-4">
              Portfolio
            </p>

            <h2 className="text-3xl md:text-4xl font-light mb-4">
              Our Brands
            </h2>

            <p className="text-black/60">
              Each brand is carefully selected and integrated into the CED ecosystem based on performance, design alignment, and system compatibility.
            </p>
          </div>

          {/* ============================= */}
          {/* YOUR COMPONENT GOES HERE */}
          {/* ============================= */}
          <Brands/>

        </div>
      </section>

    </main>
  );
}