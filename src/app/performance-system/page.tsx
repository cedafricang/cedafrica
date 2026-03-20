"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Gauge,
  Layers,
  AudioWaveform,
  ShieldCheck,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  hero: {
    eyebrow: "Solutions",
    title: "Reference Performance Systems",
    description:
      "Systems engineered to define the highest level of audiovisual performance — setting the benchmark for design, execution, and experience.",
    cta: {
      label: "Request Consultation",
      href: "/engage?type=reference",
    },
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

  definition: {
    title: "What This Is",
    statement:
      "Reference Performance Systems represent the highest level of system design and delivery — engineered without compromise to achieve absolute performance benchmarks.",
    points: [
      "Performance-first system architecture",
      "No compromise on design or execution",
      "Benchmark-level system calibration",
    ],
  },

  philosophy: [
    "Performance is defined, not assumed",
    "Every component serves a defined outcome",
    "Systems are engineered, not assembled",
  ],

  scope: [
    {
      title: "Acoustic Precision",
      desc: "Engineered sound environments designed for accuracy and clarity.",
    },
    {
      title: "System Calibration",
      desc: "Advanced tuning to achieve reference-level performance.",
    },
    {
      title: "High-Performance Components",
      desc: "Selection of world-class technologies aligned to system objectives.",
    },
    {
      title: "Environment Integration",
      desc: "Full alignment with architectural and spatial design.",
    },
  ],

  process: [
    {
      title: "Define Benchmark",
      desc: "Performance targets are established",
      icon: Gauge,
    },
    {
      title: "System Design",
      desc: "Architecture built around performance goals",
      icon: Layers,
    },
    {
      title: "Precision Tuning",
      desc: "Calibration ensures system accuracy",
      icon: AudioWaveform,
    },
    {
      title: "Validation",
      desc: "System verified against benchmarks",
      icon: ShieldCheck,
    },
  ],

  value: [
    {
      title: "Absolute Performance",
      desc: "Systems operate at the highest level of precision.",
    },
    {
      title: "Benchmark Standards",
      desc: "Defines the reference for all other systems.",
    },
    {
      title: "Uncompromised Design",
      desc: "Every decision is driven by performance outcomes.",
    },
    {
      title: "Long-Term Integrity",
      desc: "Systems maintain performance over time.",
    },
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function ReferenceSystemsPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white text-black">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section ref={ref} className="relative h-screen flex items-center overflow-hidden">

        <motion.div style={{ scale }} className="absolute inset-0">
          <img src={data.hero.image} className="w-full h-full object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 flex justify-end">

            <div className="max-w-xl text-right text-white">
              <p className="text-white/50 uppercase text-xs tracking-[0.35em] mb-6">
                {data.hero.eyebrow}
              </p>

              <h1 className="text-6xl text-white md:text-7xl font-light">
                {data.hero.title}
              </h1>

              <p className="mt-6 text-white/80">
                {data.hero.description}
              </p>

              <a
                href={data.hero.cta.href}
                className="inline-block mt-10 border px-10 py-4 hover:bg-white hover:text-black transition"
              >
                {data.hero.cta.label}
              </a>
            </div>

          </div>
        </div>

        {/* Partner Marquee */}
        <div className="absolute bottom-0 w-full pb-10 overflow-hidden">
          <motion.div
            className="flex gap-20 min-w-max"
            animate={{ x: ["-50%", "0%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {loopPartners.map((logo, i) => (
              <img key={i} src={logo} className="h-8 brightness-0 invert opacity-70" />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ============================= */}
      {/* DEFINITION */}
      {/* ============================= */}
      <section className="relative h-[90vh] flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${data.hero.image})` }}
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-3xl mx-auto text-white px-6">
          <h2 className="text-4xl text-white font-light mb-6">
            {data.definition.title}
          </h2>

          <p className="text-white/80 mb-8">
            {data.definition.statement}
          </p>

          <div className="space-y-3 text-white/60">
            {data.definition.points.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* PHILOSOPHY */}
      {/* ============================= */}
      <section className="py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
        <div className="max-w-4xl mx-auto text-center space-y-6 px-6">
          {data.philosophy.map((p, i) => (
            <p key={i} className="text-black/70">{p}</p>
          ))}
        </div>
      </section>

      {/* ============================= */}
      {/* SCOPE */}
      {/* ============================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {data.scope.map((item, i) => (
            <div key={i}>
              <h3 className="text-2xl text-black font-light mb-3">{item.title}</h3>
              <p className="text-black/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================= */}
      {/* PROCESS */}
      {/* ============================= */}
      <section className="py-28 bg-black text-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 flex gap-10 overflow-x-auto no-scrollbar">

          {data.process.map((step, i) => {
            const Icon = step.icon;

            return (
              <div key={i} className="min-w-[260px] p-8 bg-white/5 border border-white/10 backdrop-blur">
                <Icon className="mb-4" />
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-white/60">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { scrollbar-width: none; }
        `}</style>
      </section>

      {/* ============================= */}
      {/* VALUE */}
      {/* ============================= */}
      <section className="py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {data.value.map((item, i) => (
            <div key={i}>
              <h3 className="text-xl text-black/70 mb-2">{item.title}</h3>
              <p className="text-black/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================= */}
      {/* CTA */}
      {/* ============================= */}
      <section className="py-28 text-center bg-gradient-to-b from-[#1c1c1e] to-[#2a2a2d] text-white">

        <h2 className="text-4xl text-white mb-6">
          Define Your Benchmark
        </h2>

        <p className="text-white/60 mb-8">
          Engage with CED to develop systems that operate at reference performance level.
        </p>

        <a
          href="/engage"
          className="border px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Enter the System
        </a>
      </section>

    </main>
  );
}