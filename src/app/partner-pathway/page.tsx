"use client";

import { motion } from "framer-motion";
import Who from "../components/partner-pathway/who";
import Path from "../components/partner-pathway/pathways";
import How from "../components/partner-pathway/how";
import Requirement from "../components/partner-pathway/requirements";
import What from "../components/partner-pathway/what";
import Cta from "../components/partner-pathway/cta";

/* ============================= */
/* CMS DATA */
/* ============================= */

const heroData = {
  eyebrow: "Partners",
  title: "Partner Pathways",
  description:
    "Structured entry into the CED ecosystem — designed for professionals, firms, and organizations aligned with performance, standards, and long-term growth.",
  subtext: "Not all partners qualify. All partners are governed.",
  cta: {
    label: "Enter the Ecosystem",
    href: "/engage?type=partner",
  },
  image: "/images/hero/h5.webp",

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

const loopPartners = [...heroData.partners, ...heroData.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function PartnerPathwaysPage() {
  return (
    <main className="bg-white">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">

        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
          style={{ backgroundImage: `url(${heroData.image})` }}
        />

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
              <p className="text-white/50 tracking-[0.35em] uppercase text-xs mb-6">
                {heroData.eyebrow}
              </p>

              <h1 className="text-5xl text-white md:text-7xl font-light leading-[1.05]">
                {heroData.title}
              </h1>

              <p className="text-white/80 mt-6 text-lg leading-relaxed">
                {heroData.description}
              </p>

              <p className="text-white/50 mt-4 text-sm tracking-wide">
                {heroData.subtext}
              </p>

              <div className="mt-10">
                <a
                  href={heroData.cta.href}
                  className="inline-block border border-white/30 px-10 py-4 text-white text-sm tracking-widest uppercase hover:bg-white hover:text-black transition duration-500"
                >
                  {heroData.cta.label}
                </a>
              </div>
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
      animate={{ x: ["-50%", "0%"] }}
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
      {/* NEXT SECTION */}
      {/* ============================= */}
      <Who />
      <Path />
      <How />
      <Requirement />
      <What />
      <Cta />
      

    </main>
  );
}