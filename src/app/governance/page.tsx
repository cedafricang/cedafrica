"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ShieldCheck,
  Layers,
  Cpu,
  LineChart,
} from "lucide-react";

const icons = [
  ShieldCheck,
  Layers,
  Cpu,
  LineChart,
];

/* ============================= */
/* DATA (CMS READY) */
/* ============================= */

const data = {
  hero: {
    title: "Governance & Standards",
    desc: "A structured framework that defines how systems are designed, executed, and maintained — ensuring consistency, accountability, and performance.",
    image: "/images/hero/kar.webp",
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
        <div className="absolute inset-0 bg-black/90" />

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

  {/* Fade edges */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

  {/* Marquee */}
  <div className="relative w-full overflow-hidden">
    <motion.div
      className="flex items-center gap-8 md:gap-20 min-w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
    >
      {[...loopPartners, ...loopPartners].map((logo, i) => (
        <div
          key={i}
          className="flex items-center justify-center opacity-70 hover:opacity-100 transition duration-500"
        >
          <img
            src={logo}
            alt="partner"
            className="
              h-6 sm:h-7 md:h-8 lg:h-10
              object-contain
              brightness-0 invert
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>
      ))}
    </motion.div>
  </div>

  {/* Label */}
  <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase text-center mt-6">
    Governed Partner Ecosystem
  </p>

</div>
      </section>

      {/* ============================= */}
      {/* PRINCIPLES */}
      {/* ============================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <h2 className="text-2xl md:text-3xl font-light mb-12">
          Governance Principles
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {data.principles.map((item: string, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="
                group
                relative
                border border-black/10
                bg-white/60
                backdrop-blur-sm
                p-6 md:p-8
                rounded-sm
                transition
                hover:border-black/30
                hover:-translate-y-[2px]
              "
            >

              {/* BULLET SYSTEM */}
              <div className="flex items-start gap-4">

                {/* ICON / BULLET */}
                <div className="relative mt-1">

                  {/* outer glow */}
                  <div className="w-3 h-3 rounded-full bg-[#b8a882]/30 absolute blur-[6px]" />

                  {/* core dot */}
                  <div className="w-2 h-2 rounded-full bg-[#b8a882] relative z-10" />

                </div>

                {/* TEXT */}
                <p className="text-sm md:text-[15px] leading-relaxed text-black/70">
                  {item}
                </p>

              </div>

              {/* HOVER LINE (premium detail) */}
              <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-black/40 group-hover:w-[60%] group-hover:left-[20%] transition-all duration-500" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>

      {/* ============================= */}
      {/* SYSTEM STATEMENT */}
      {/* ============================= */}
  <section className="relative min-h-[75vh] md:h-[80vh] flex items-center">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-12"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-60 mb-4">
            Governance Framework
          </p>

          <h1 className="text-2xl md:text-4xl font-medium leading-tight">
            Structured Control. Defined Outcomes.
          </h1>
        </motion.div>

        {/* STATEMENTS */}
        <div className="space-y-6 md:space-y-8">

          {[
            "Standards define the system.",
            "Governance ensures compliance.",
            "Execution follows controlled rules.",
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <p className="text-base md:text-lg">
                {text}
              </p>

              {/* DIVIDER */}
              {i !== 2 && (
                <div className="w-10 md:w-12 h-[1px] bg-white/40 mx-auto my-4 md:my-6" />
              )}
            </motion.div>
          ))}

        </div>

      </div>

      {/* BOTTOM FADE (PREMIUM TOUCH) */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent" />

    </section>

      {/* ============================= */}
      {/* STANDARDS */}
      {/* ============================= */}
      <section className="py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 md:mb-20 max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-50 mb-4">
            Standards Framework
          </p>

          <h2 className="text-2xl md:text-3xl font-medium text-black">
            Defined Systems. Controlled Outcomes.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {data.standards.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="
                group
                relative
                border border-black/10
                p-6 md:p-8
                bg-[#fafafa]
                transition
                hover:border-black/30
                hover:-translate-y-[3px]
              "
            >

              {/* TOP ACCENT LINE */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#b8a882] group-hover:w-full transition-all duration-500" />

              {/* TITLE */}
              <h3 className="text-lg md:text-xl text-black font-medium mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-sm md:text-[15px] text-black/60 leading-relaxed">
                {item.desc}
              </p>

              {/* SUBTLE HOVER LINE */}
              <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-black/30 group-hover:w-[60%] group-hover:left-[20%] transition-all duration-500" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
      {/* ============================= */}
      {/* VALUE */}
      {/* ============================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8f8f9] to-[#f1f1f2]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 md:mb-20 max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-50 mb-4">
            Value Delivered
          </p>

          <h2 className="text-2xl md:text-3xl font-medium text-black">
            Engineered Outcomes. Measurable Impact.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">

          {data.value.map((item: any, i: number) => {
            const Icon = icons[i % icons.length];

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  border border-black/10
                  bg-white/70
                  backdrop-blur-sm
                  p-6 md:p-8
                  transition
                  hover:border-black/30
                  hover:-translate-y-[3px]
                "
              >

                {/* TOP GOLD LINE */}
                <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#b8a882] group-hover:w-full transition-all duration-500" />

                {/* ICON */}
                <div className="mb-4">
                  <div className="w-10 h-10 flex items-center justify-center border border-black/20 text-black/80">
                    <Icon size={18} />
                  </div>
                </div>

                {/* TITLE */}
                <h3 className="text-lg md:text-xl text-black font-medium mb-3">
                  {item.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm md:text-[15px] text-black/60 leading-relaxed">
                  {item.desc}
                </p>

                {/* BOTTOM HOVER LINE */}
                <div className="absolute bottom-0 left-1/2 w-0 h-[1px] bg-black/30 group-hover:w-[60%] group-hover:left-[20%] transition-all duration-500" />

              </motion.div>
            );
          })}

        </div>

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