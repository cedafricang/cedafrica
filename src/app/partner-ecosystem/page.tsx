"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import CTA from "../components/ctawork";
import {
  ShieldCheck,
  CheckCircle2,
  Layers,
  Network,
} from "lucide-react";
import {
  
  LineChart,
} from "lucide-react";

const icons = [
  ShieldCheck,
  CheckCircle2,
  Layers,
  LineChart,
];

const meaningIcons = [ShieldCheck, CheckCircle2, CheckCircle2, CheckCircle2];
const ecosystemIcons = [Layers, Network, Layers, Network];


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
    Certified Partner Network
  </p>

</div>
      </section>

      {/* ============================= */}
      {/* WHAT CERTIFIED MEANS */}
      {/* ============================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
      <div className="max-w-6xl mx-auto px-6">

        {/* SECTION HEADER */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-50 mb-4">
            Certification Framework
          </p>

          <h2 className="text-2xl md:text-3xl font-medium text-black">
            Defined Standards. Structured Ecosystem.
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* ================= LEFT: MEANING ================= */}
          <div className="relative border border-black/10 bg-white/70 backdrop-blur-sm p-6 md:p-8">

            {/* TOP GOLD LINE */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#b8a882]" />

            <h3 className="text-xl md:text-2xl font-medium mb-6">
              What Certified Means
            </h3>

            <div className="space-y-6">

              {data.meaning.map((item: string, i: number) => {
                const Icon = meaningIcons[i % meaningIcons.length];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >

                    {/* ICON */}
                    <div className="w-9 h-9 flex items-center justify-center border border-black/20 text-black/80 shrink-0">
                      <Icon size={16} />
                    </div>

                    {/* TEXT */}
                    <p className="text-sm md:text-[15px] text-black/70 leading-relaxed">
                      {item}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

          {/* ================= RIGHT: ECOSYSTEM ================= */}
          <div className="relative border border-black/10 bg-white/70 backdrop-blur-sm p-6 md:p-8">

            {/* TOP GOLD LINE */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#b8a882]" />

            <h3 className="text-xl md:text-2xl font-medium mb-6">
              Ecosystem
            </h3>

            <div className="space-y-6">

              {data.types.map((item: string, i: number) => {
                const Icon = ecosystemIcons[i % ecosystemIcons.length];

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 group"
                  >

                    {/* ICON */}
                    <div className="w-9 h-9 flex items-center justify-center border border-black/20 text-black/80 shrink-0">
                      <Icon size={16} />
                    </div>

                    {/* TEXT */}
                    <p className="text-sm md:text-[15px] text-black/70 leading-relaxed">
                      {item}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </div>
    </section>
      {/* ============================= */}
      {/* SYSTEM STATEMENT */}
      {/* ============================= */}
      <section className="relative min-h-[75vh] md:h-[80vh] flex items-center">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
      />

      {/* OVERLAY */}
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
            System Governance
          </p>

          <h1 className="text-2xl md:text-4xl font-medium leading-tight">
            Controlled Design. Structured Execution.
          </h1>
        </motion.div>

        {/* STATEMENTS */}
        <div className="space-y-6 md:space-y-8">

          {[
            "CED defines the system.",
            "Certified partners execute under governance.",
            "Every project is delivered within a controlled framework.",
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

              {i !== 2 && (
                <div className="w-10 md:w-12 h-[1px] bg-white/40 mx-auto my-4 md:my-6" />
              )}
            </motion.div>
          ))}

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent" />

    </section>

      {/* ============================= */}
      {/* VALUE */}
      {/* ============================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8f8f9] to-[#f1f1f2]">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 md:mb-20 max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-50 mb-4">
            System Value
          </p>

          <h2 className="text-2xl md:text-3xl font-medium text-black">
            Measurable Outcomes Through Structured Delivery
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

                {/* GOLD TOP LINE */}
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
      <CTA />

    </main>
  );
}