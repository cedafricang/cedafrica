"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Shield,
  FileCheck,
  Cpu,
  Layers,
  Settings2,
  CheckCircle2,
} from "lucide-react";
import {
  ShieldCheck,
  
  LineChart,
} from "lucide-react";


const items = [
  {
    text: "CED defines system architecture.",
    icon: Cpu,
  },
  {
    text: "Certified integrators execute within defined frameworks.",
    icon: ShieldCheck,
  },
  {
    text: "Performance is validated before delivery.",
    icon: CheckCircle2,
  },
];




const icons = [
  Shield,
  FileCheck,
  Cpu,
  Layers,
  Settings2,
   ShieldCheck,
  Layers,
  Cpu,
  LineChart,
  CheckCircle2,
];

/* ============================= */
/* DATA */
/* ============================= */

const data = {
  hero: {
    title: "ProAV SI Program",
    desc: "A certification framework for professional AV system integrators delivering complex audiovisual systems within defined standards, governed execution, and performance validation.",
    image: "/images/hero/proav.webp",
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

  timeline: [
    {
      title: "Technical Qualification",
      desc: "Integrators are assessed based on ProAV system experience, technical capability, and ability to deliver complex integrated environments.",
      image: "/images/hero/install.webp",
    },
    {
      title: "Certification & Approval",
      desc: "Qualified integrators are certified to operate within CED-defined ProAV system frameworks and execution standards.",
      image: "/images/hero/proav.webp",
    },
    {
      title: "System Integration Alignment",
      desc: "Integrators align with defined system architectures, signal flow, performance targets, and integration methodologies.",
      image: "/images/hero/studio.webp",
    },
    {
      title: "Execution & Performance Validation",
      desc: "All systems are deployed under governance, with validation ensuring performance, reliability, and system integrity.",
      image: "/images/hero/si.webp",
    },
  ],

  value: [
    {
      title: "High-Value Project Access",
      desc: "Participate in complex ProAV projects within a structured and qualified pipeline.",
    },
    {
      title: "Defined System Responsibility",
      desc: "Operate within clearly assigned integration roles across system delivery.",
    },
    {
      title: "Performance-Based Execution",
      desc: "Deliver systems aligned with defined performance benchmarks.",
    },
    {
      title: "Long-Term Technical Positioning",
      desc: "Establish credibility within a governed ProAV ecosystem.",
    },
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white text-black">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section className="relative h-screen flex items-center overflow-hidden">

        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={data.hero.image}
            className="w-full h-full object-cover"
            alt="ProAV SI Program"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl text-white md:text-7xl font-light max-w-4xl leading-tight">
            {data.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-white/80 text-lg">
            {data.hero.desc}
          </p>
        </div>

        {/* ============================= */}
        {/* PARTNER MARQUEE */}
        {/* ============================= */}
        <div className="absolute bottom-0 w-full pb-10 overflow-hidden">

  {/* Fade edges */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

  {/* Marquee */}
  <div className="overflow-hidden">
    <motion.div
      className="flex items-center gap-10 md:gap-20 min-w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
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
  <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase text-center mt-6">
    ProAV Technology Ecosystem
  </p>

</div>
      </section>

      {/* ============================= */}
      {/* TIMELINE */}
      {/* ============================= */}
      <section className="py-32 bg-[#f6f6f6] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
            How the ProAV SI Program Works
          </h2>

          <p className="text-white/60 text-lg leading-relaxed">
            A structured pathway from qualification to governed system execution.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE (glow style) */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-black/10" />

          <div className="space-y-28">
            {data.timeline.map((item: any, i: number) => {
              const isLeft = i % 2 === 0;
              const Icon = icons[i % icons.length];

              return (
                <div key={i} className="relative flex items-center">

                  {/* LEFT */}
                  <div className={`w-1/2 pr-14 ${isLeft ? "" : "hidden md:block"}`}>
                    {isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-right"
                      >
                        {/* STEP NUMBER */}
                        <div className="text-black/20 text-5xl font-light mb-2">
                          {String(i + 1).padStart(2, "0")}
                        </div>

                        <h3 className="text-xl font-medium text-black/90 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-black/60 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                  {/* CENTER NODE */}
                  <div className="absolute left-1/2 -translate-x-1/2 z-10">
                    <div className="relative flex items-center justify-center">
                      
                      {/* outer glow */}
                      <div className="absolute w-14 h-14 rounded-full bg-black/5 blur-md" />

                      {/* icon container */}
                      <div className="w-12 h-12 rounded-full bg-[#0A0F1C] border border-white/20 flex items-center justify-center">
                        <Icon size={18} className="text-white/80" />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className={`w-1/2 pl-14 ${!isLeft ? "" : "hidden md:block"}`}>
                    {!isLeft && (
                      <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        {/* STEP NUMBER */}
                        <div className="text-black/20 text-5xl font-light mb-2">
                          {String(i + 1).padStart(2, "0")}
                        </div>

                        <h3 className="text-xl font-medium text-black/90 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-black/60 leading-relaxed">
                          {item.desc}
                        </p>
                      </motion.div>
                    )}
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
      {/* ============================= */}
      {/* SYSTEM STATEMENT */}
      {/* ============================= */}
      <section className="relative min-h-[65vh] md:h-[70vh] flex items-center">

      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/80" />

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
            Delivery Framework
          </p>

          <h2 className="text-2xl md:text-4xl font-medium leading-tight">
            Structured Systems. Verified Performance.
          </h2>
        </motion.div>

        {/* STATEMENTS */}
        <div className="space-y-6 md:space-y-8">

          {items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col items-center gap-4"
              >

                {/* ICON */}
                <div className="w-10 h-10 flex items-center justify-center border border-white/30 text-white/90">
                  <Icon size={18} />
                </div>

                {/* TEXT */}
                <p className="text-sm md:text-lg max-w-[500px] leading-relaxed">
                  {item.text}
                </p>

                {/* DIVIDER */}
                {i !== items.length - 1 && (
                  <div className="w-10 md:w-12 h-[1px] bg-white/30" />
                )}

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black/70 to-transparent" />

    </section>

      {/* ============================= */}
      {/* VALUE */}
      {/* ============================= */}
      <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8f8f9] to-[#f1f1f2]">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 md:mb-20 max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-50 mb-4">
            Delivered Value
          </p>

          <h2 className="text-2xl md:text-3xl font-medium text-black">
            Structured Benefits Across Every Project
          </h2>
        </div>

        {/* LIST */}
        <div className="divide-y divide-black/10">

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
                  py-8 md:py-10
                  flex gap-6 md:gap-8
                  items-start
                "
              >

                {/* ICON COLUMN */}
                <div className="relative flex-shrink-0">

                  {/* subtle glow */}
                  <div className="absolute inset-0 bg-[#b8a882]/20 blur-[8px] rounded-full opacity-0 group-hover:opacity-100 transition" />

                  <div className="w-10 h-10 flex items-center justify-center border border-black/20 text-black/80 relative z-10">
                    <Icon size={18} />
                  </div>

                </div>

                {/* TEXT CONTENT */}
                <div className="flex-1">

                  <h3 className="text-base md:text-lg font-medium text-black mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-[15px] text-black/60 leading-relaxed max-w-[600px]">
                    {item.desc}
                  </p>

                </div>

                {/* RIGHT HOVER LINE (premium detail) */}
                <div className="hidden md:block w-0 group-hover:w-16 h-[1px] bg-black/30 self-center transition-all duration-500" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>


      {/* ============================= */}
      {/* CTA */}
      {/* ============================= */}
      <section className="py-28 text-center bg-[#1c1c1e] text-white">

        <h2 className="text-3xl text-white font-light mb-6">
          Apply for ProAV SI Certification
        </h2>

        <p className="text-white/60 mb-10">
          Entry into the ProAV SI Program is structured, evaluated, and governed.
        </p>

        <a
          href="/engage?type=proav-si"
          className="border px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Enter the System
        </a>

      </section>

    </main>
  );
}