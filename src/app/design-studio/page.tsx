"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import What from "../components/design-studio/what";
import Scope from "../components/design-studio/scope";
import How from "../components/design-studio/how";
import Cta from "../components/design-studio/valcta";

/* ============================= */
/* CMS DATA */
/* ============================= */

const heroData = {
  eyebrow: "Solutions",
  title: "AV Design Studio",
  description:
    "Where audiovisual systems are defined, structured, and engineered before execution begins.",
  cta: {
    label: "Request Design Consultation",
    href: "/engage?type=design",
  },
  image: "/images/hero/luk.webp",

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

export default function AVDesignHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section
        ref={ref}
        className="relative h-screen w-full overflow-hidden flex items-center"
      >
        {/* Background */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={heroData.image}
            alt=""
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-black/90" />

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 flex justify-end">

            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-xl text-right"
            >
              <p className="text-white/50 tracking-[0.35em] uppercase text-xs mb-6">
                {heroData.eyebrow}
              </p>

              <h1 className="text-white text-6xl md:text-7xl font-light leading-[1.05]">
                {heroData.title}
              </h1>

              <p className="text-white/80 mt-6 text-lg leading-relaxed">
                {heroData.description}
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

          <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              className="flex items-center gap-20 min-w-max"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                duration: 30,
                ease: "linear",
                repeat: Infinity,
              }}
            >
              {loopPartners.map((logo, i) => (
                <div key={i} className="flex-shrink-0">
                  <img
                    src={logo}
                    alt="partner"
                    className="h-4 md:h-6 object-contain brightness-0 invert opacity-70"
                  />
                </div>
              ))}
            </motion.div>
          </div>

          <p className="text-white/40 text-xs tracking-widest uppercase mt-6 text-center">
            Certified Partner Ecosystem
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* NEXT SECTION */}
      {/* ============================= */}
      <What />
        <Scope />

<How />
<Cta />

    </main>
  );
}