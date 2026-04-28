"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Gauge,
  Layers,
  AudioWaveform,
  ShieldCheck,
  Sparkles,
  Grid,
  Box,
  TrendingUp,
} from "lucide-react";

/* ============================= */
/* DATA */
/* ============================= */

const data = {
  hero: {
    eyebrow: "Solutions",
    title: "Reference Performance Systems",
    description:
      "Systems engineered to define the highest level of audiovisual performance — setting the benchmark for design, execution, and experience.",
    cta: {
      label: "Request Consultation",
      href: "/engage/design-studio",
    },
    image: "/images/hero/foc.webp",
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

  definition: {
    eyebrow: "Benchmark Layer",
    title: "What This Is",
    desc: "The highest level of system design and performance.",
    statement:
      "Reference Performance Systems represent the highest level of system design and delivery — engineered without compromise to achieve absolute performance benchmarks.",
    points: [
      "Performance-first system architecture",
      "No compromise on design or execution",
      "Benchmark-level system calibration",
    ],
  },

  philosophy: {
    eyebrow: "Philosophy",
    title: "Performance Principles",
    desc: "Core principles that define reference-level systems.",
    items: [
      "Performance is defined, not assumed",
      "Every component serves a defined outcome",
      "Systems are engineered, not assembled",
    ],
  },

  scope: {
    eyebrow: "Scope",
    title: "What Defines a Reference System",
    desc: "Key elements that contribute to benchmark performance.",
    items: [
      {
        title: "Acoustic Precision",
        desc: "Engineered sound environments designed for accuracy.",
      },
      {
        title: "System Calibration",
        desc: "Advanced tuning to achieve reference-level output.",
      },
      {
        title: "High-Performance Components",
        desc: "Selection of world-class technologies.",
      },
      {
        title: "Environment Integration",
        desc: "Alignment with architecture and spatial design.",
      },
    ],
  },

  process: {
    eyebrow: "Process",
    title: "Performance Flow",
    desc: "A structured path to achieving reference performance.",
    steps: [
      { title: "Define Benchmark", desc: "Performance targets are established", icon: Gauge },
      { title: "System Design", desc: "Architecture built around performance goals", icon: Layers },
      { title: "Precision Tuning", desc: "Calibration ensures system accuracy", icon: AudioWaveform },
      { title: "Validation", desc: "System verified against benchmarks", icon: ShieldCheck },
    ],
  },

  value: {
    eyebrow: "Outcome",
    title: "What This Means",
    desc: "The impact of operating at reference level.",
    items: [
      { title: "Absolute Performance", desc: "Systems operate at the highest level of precision." },
      { title: "Benchmark Standards", desc: "Defines the reference for all other systems." },
      { title: "Uncompromised Design", desc: "Every decision is performance-driven." },
      { title: "Long-Term Integrity", desc: "Systems maintain performance over time." },
    ],
  },
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PREMIUM HEADER */
/* ============================= */

function SectionHeader({ eyebrow, title, desc, icon: Icon, dark }: any) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">

      {/* Icon */}
      {Icon && (
        <div className={`flex justify-center mb-6 ${dark ? "text-white/50" : "text-black/40"}`}>
          <Icon size={20} strokeWidth={1.5} />
        </div>
      )}

      {/* Eyebrow */}
      <p className={`${dark ? "text-white/40" : "text-black/40"} text-xs uppercase tracking-[0.35em] mb-4`}>
        {eyebrow}
      </p>

      {/* Title */}
      <h2 className={`${dark ? "text-white" : "text-black"} text-3xl md:text-4xl font-light mb-4`}>
        {title}
      </h2>

      {/* Description */}
      <p className={`${dark ? "text-white/60" : "text-black/60"} leading-relaxed`}>
        {desc}
      </p>
    </div>
  );
}

/* ============================= */
/* PAGE */
/* ============================= */

export default function ReferenceSystemsPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white">

      {/* HERO */}
      <section ref={ref} className="relative h-screen flex items-center overflow-hidden">

        <motion.div style={{ scale }} className="absolute inset-0">
          <img src={data.hero.image} className="w-full h-full object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 flex justify-end text-white">
            <div className="max-w-xl text-right">
              <p className="text-white/50 uppercase text-xs tracking-[0.35em] mb-6">
                {data.hero.eyebrow}
              </p>
              <h1 className="text-6xl text-white font-light">{data.hero.title}</h1>
              <p className="mt-6 text-white/80">{data.hero.description}</p>

              <a href={data.hero.cta.href} className="inline-block mt-10 border px-10 py-4 hover:bg-white hover:text-black transition">
                {data.hero.cta.label}
              </a>
            </div>
          </div>
        </div>

        {/* Marquee */}
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

      {/* DEFINITION */}
      <section className="py-28 bg-black text-white">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader {...data.definition} icon={Sparkles} dark />
          <p className="text-white/80 mb-6 text-center">{data.definition.statement}</p>
          <div className="space-y-3 text-center">
            {data.definition.points.map((p, i) => (
              <p key={i} className="text-white/60">{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <SectionHeader {...data.philosophy} icon={Grid} />
          {data.philosophy.items.map((p, i) => (
            <p key={i} className="text-black/70 mb-3">{p}</p>
          ))}
        </div>
      </section>

      {/* SCOPE */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader {...data.scope} icon={Box} />

          <div className="grid md:grid-cols-2 gap-16">
            {data.scope.items.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg text-black/70 md:text-xl mb-2">{item.title}</h3>
                <p className="text-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader {...data.process} icon={Layers} dark />

          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {data.process.steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="min-w-[260px] p-8 bg-white/5 border border-white/10">
                  <Icon className="mb-4" />
                  <h3 className="text-lg mb-2">{step.title}</h3>
                  <p className="text-white/60">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section className="py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
        <div className="max-w-6xl mx-auto px-6">
          <SectionHeader {...data.value} icon={TrendingUp} />

          <div className="grid md:grid-cols-2 gap-16">
            {data.value.items.map((item, i) => (
              <div key={i}>
                <h3 className="text-lg text-black/70 md:text-xl mb-2">{item.title}</h3>
                <p className="text-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center bg-[#1c1c1e] text-white">
        <h2 className="text-4xl text-white mb-6">Define Your Benchmark</h2>
        <p className="text-white/60 mb-8">
          Engage with CED to develop systems that operate at reference performance level.
        </p>
        <a href="/engage/design-studio" className="border px-10 py-4 hover:bg-white hover:text-black transition">
          Request Consultation
        </a>
      </section>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>

    </main>
  );
}