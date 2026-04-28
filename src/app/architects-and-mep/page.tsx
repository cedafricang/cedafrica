"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import What from "../components/architects-and-mep/what";
import How from "../components/architects-and-mep/how";
import Get from "../components/architects-and-mep/get";
import Where from "../components/architects-and-mep/where";
import Projects from "../components/architects-and-mep/project-types";
import Cta from "../components/ctawork";

/* ============================= */
/* CMS DATA */
/* ============================= */

const heroData = {
  eyebrow: "Industry",
  title: "Architects & MEP Consultants",
  description:
    "CED operates as the system design and coordination layer — aligning audiovisual infrastructure with architectural intent and engineering requirements from the earliest stages of the project.",
  subtext:
    "Designed systems. Coordinated delivery. Defined performance.",
  image: "/images/hero/arch.webp",

   partners: [
    "/images/partners/baron.svg",
    "/images/partners/avantis.svg",
    "/images/partners/ca.svg",
    "/images/partners/gabonn.svg",
    "/images/partners/idlewoods.svg",
    "/images/partners/jam.svg",
    "/images/partners/saota.svg",
    
    "/images/partners/topklan.svg",
   
  ],
};

const loopPartners = [...heroData.partners, ...heroData.partners];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ArchitectsPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">

        {/* Background */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={heroData.image}
            alt="Architects and MEP"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
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

              <p className="text-white/50 mt-4 text-sm">
                {heroData.subtext}
              </p>
            </motion.div>

          </div>
        </div>

        {/* Partner Marquee */}
        <div className="absolute bottom-0 left-0 w-full pb-10 overflow-hidden">

          <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex items-center gap-20 min-w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {loopPartners.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="partner"
                className="h-6 md:h-8 brightness-0 invert opacity-70"
              />
            ))}
          </motion.div>

          <p className="text-white/40 text-xs tracking-widest uppercase mt-6 text-center">
            Integrated Technology Ecosystem
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* NEXT SECTION */}
      {/* ============================= */}
      <What />
      <How/>
      <Get />
      <Where />
      <Projects />
      <Cta />

    </main>
  );
}