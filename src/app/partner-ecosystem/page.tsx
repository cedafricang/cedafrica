"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ============================= */
/* DATA (CMS READY) */
/* ============================= */

const data = {
  hero: {
    title: "Certified Partner Ecosystem",
    desc: "A governed network of approved partners operating within defined standards to ensure consistent system performance and controlled project delivery.",
    image: "/images/hero/cust.webp",
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

  meaning: [
    "Technically qualified",
    "Standards compliant",
    "Accountable within a defined framework",
    "Continuously evaluated",
  ],

  types: [
    "System Integrators",
    "ProAV Integrators",
    "Retail Partners",
    "Contractors & Developers",
  ],

  value: [
    {
      title: "Consistent Performance",
      desc: "Systems are executed within defined standards across every project.",
    },
    {
      title: "Controlled Delivery",
      desc: "Execution is governed, not left to chance.",
    },
    {
      title: "Reduced Risk",
      desc: "Only approved partners operate within the system.",
    },
    {
      title: "Clear Accountability",
      desc: "Defined roles ensure responsibility at every stage.",
    },
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page() {
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
        {/* Background */}
        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={data.hero.image}
            className="w-full h-full object-cover"
            alt=""
          />
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/85" />

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <h1 className="text-white text-6xl md:text-7xl font-light max-w-4xl leading-tight">
            {data.hero.title}
          </h1>

          <p className="text-white/80 mt-6 max-w-xl text-lg">
            {data.hero.desc}
          </p>
        </div>

        {/* Partner Marquee */}
        <div className="absolute bottom-0 left-0 w-full pb-10">

          {/* Fade edges */}
          <div className="absolute left-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-20 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            >
              {loopPartners.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  className="h-4 md:h-6 brightness-0 invert opacity-70"
                  alt=""
                />
              ))}
            </motion.div>
          </div>

          <p className="text-white/40 text-xs tracking-widest uppercase text-center mt-6">
            Certified Partner Network
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* WHAT CERTIFIED MEANS */}
      {/* ============================= */}
      <section className="py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20">

          <div>
            <h2 className="text-3xl font-light mb-6">
              What Certified Means
            </h2>
            <div className="space-y-3 text-black/60">
              {data.meaning.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-light mb-6">
              Ecosystem
            </h2>
            <div className="space-y-3 text-black/60">
              {data.types.map((item, i) => (
                <p key={i}>{item}</p>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ============================= */}
      {/* SYSTEM STATEMENT */}
      {/* ============================= */}
      <section className="relative h-[80vh] flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
        />

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6">
          <p className="text-lg">CED defines the system.</p>

          <div className="w-12 h-[1px] bg-white/40 mx-auto my-6" />

          <p className="text-lg">
            Certified partners execute under governance.
          </p>

          <div className="w-12 h-[1px] bg-white/40 mx-auto my-6" />

          <p className="text-lg">
            Every project is delivered within a controlled framework.
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* VALUE */}
      {/* ============================= */}
      <section className="py-28 bg-gradient-to-b from-[#f8f8f9] to-[#f1f1f2]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {data.value.map((item, i) => (
            <div key={i} className="border-t border-black/10 pt-6">
              <h3 className="text-xl text-black/70 font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-black/60 text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ============================= */}
      {/* CTA */}
      {/* ============================= */}
      <section className="py-28 text-center bg-gradient-to-b from-[#1c1c1e] to-[#2a2a2d] text-white">
        <h2 className="text-3xl text-white font-light mb-6">
          Become Part of the Ecosystem
        </h2>

        <p className="text-white/60 mb-10">
          Entry into the CED ecosystem is structured and controlled.
        </p>

        <a
          href="/engage?type=partner"
          className="border px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Apply Through Engage Gateway
        </a>
      </section>

    </main>
  );
}