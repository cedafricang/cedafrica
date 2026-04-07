"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* ============================= */
/* DATA (CMS READY) */
/* ============================= */

const data = {
  hero: {
    title: "Governance & Standards",
    desc: "A structured framework that defines how systems are designed, executed, and maintained — ensuring consistency, accountability, and performance.",
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

  principles: [
    "Defined system architecture across all projects",
    "Standardised design and performance benchmarks",
    "Controlled partner execution within approved frameworks",
    "Continuous oversight and compliance monitoring",
  ],

  standards: [
    {
      title: "Design Standards",
      desc: "Every system is defined with clear architecture, performance targets, and integration logic before execution begins.",
    },
    {
      title: "Execution Standards",
      desc: "All implementations follow controlled processes delivered only by certified partners.",
    },
    {
      title: "Performance Standards",
      desc: "Systems are measured against defined benchmarks to ensure consistency and reliability.",
    },
    {
      title: "Compliance & Oversight",
      desc: "CED maintains ongoing governance to ensure standards are upheld across every project.",
    },
  ],

  value: [
    {
      title: "Consistency Across Projects",
      desc: "Every system is delivered within the same controlled framework.",
    },
    {
      title: "Reduced Execution Risk",
      desc: "Structured standards eliminate variability and uncertainty.",
    },
    {
      title: "Defined Accountability",
      desc: "Clear ownership ensures responsibility at every stage.",
    },
    {
      title: "Long-Term System Integrity",
      desc: "Governed systems remain scalable and aligned over time.",
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
        <div className="absolute inset-0 bg-black/70" />

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
        <div className="absolute bottom-0 left-0 w-full pb-10 overflow-hidden">

          <div className="absolute left-0 w-40 h-full bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 w-40 h-full bg-gradient-to-l from-black to-transparent z-10" />

          <div className="overflow-hidden">
            <motion.div
              className="flex gap-20 min-w-max"
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
            Governed Partner Ecosystem
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* PRINCIPLES */}
      {/* ============================= */}
      <section className="py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-3xl font-light mb-12">
            Governance Principles
          </h2>

          <div className="grid md:grid-cols-2 gap-10 text-black/60">
            {data.principles.map((item, i) => (
              <p key={i}>{item}</p>
            ))}
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
          <p className="text-lg">Standards define the system.</p>

          <div className="w-12 h-[1px] bg-white/40 mx-auto my-6" />

          <p className="text-lg">Governance ensures compliance.</p>

          <div className="w-12 h-[1px] bg-white/40 mx-auto my-6" />

          <p className="text-lg">Execution follows controlled rules.</p>
        </div>
      </section>

      {/* ============================= */}
      {/* STANDARDS */}
      {/* ============================= */}
      <section className="py-28 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {data.standards.map((item, i) => (
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
          Work Within a Defined System
        </h2>

        <p className="text-white/60 mb-10">
          All engagements follow structured governance and standards.
        </p>

        <a
          href="/engage"
          className="border px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Enter Through Engage Gateway
        </a>
      </section>

    </main>
  );
}