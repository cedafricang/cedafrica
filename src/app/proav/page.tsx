"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList,
  
  Settings,
  CheckCircle2,
} from "lucide-react";



import {
  Wrench,
  Network,
  SlidersHorizontal,
  ClipboardCheck,
} from "lucide-react";

/* ============================= */
/* ICON MAP (CMS FRIENDLY) */
/* ============================= */

const iconMap = [
  Wrench,
  Network,
  SlidersHorizontal,
  ClipboardCheck,
];

/* ============================= */
/* DATA */
/* ============================= */

const data = {
  hero: {
    eyebrow: "Solutions",
    title: "ProAV Systems",
    description:
      "Systems executed within defined standards and governed frameworks to ensure performance, consistency, and control.",
    cta: {
      label: "Start Your Project",
      href: "/engage",
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
    eyebrow: "Execution Layer",
    title: "What This Is",
    desc: "The layer where systems move from design to reality.",
    statement:
      "ProAV Systems is the execution layer where defined audiovisual systems are delivered through certified partners under structured governance.",
    points: [
      "Execution follows defined design",
      "Delivery is controlled, not random",
      "Only certified partners operate within the system",
    ],
  },

  executionModel: {
    eyebrow: "System Model",
    title: "How Execution Is Structured",
    desc: "A controlled framework connecting design, execution, and governance.",
    items: [
      "CED defines system architecture and standards",
      "Certified partners execute within defined scope",
      "CED governs performance, compliance, and delivery",
    ],
  },

  scope: {
    eyebrow: "Scope",
    title: "What Is Delivered",
    desc: "Execution is structured across defined system components.",
    items: [
      {
        title: "System Installation",
        desc: "Deployment of defined audiovisual systems.",
      },
      {
        title: "System Integration",
        desc: "Coordination across AV and engineering systems.",
      },
      {
        title: "Calibration & Tuning",
        desc: "Performance optimisation aligned to standards.",
      },
      {
        title: "Final Delivery",
        desc: "Structured handover with full system integrity.",
      },
    ],
  },

  process: {
    eyebrow: "Process",
    title: "Execution Flow",
    desc: "A defined sequence ensuring controlled delivery.",
    steps: [
      {
        title: "Assignment",
        desc: "Certified partner assigned based on scope",
        icon: ClipboardList,
      },
      {
        title: "Execution",
        desc: "System implemented according to design",
        icon: Network,
      },
      {
        title: "Validation",
        desc: "Performance and compliance verified",
        icon: Settings,
      },
      {
        title: "Delivery",
        desc: "System handed over with integrity",
        icon: CheckCircle2,
      },
    ],
  },

  value: {
    eyebrow: "Outcome",
    title: "What This Means For You",
    desc: "Execution outcomes translated into real value.",
    items: [
      {
        title: "Reliable Execution",
        desc: "Systems are delivered consistently across projects.",
      },
      {
        title: "No Design Compromise",
        desc: "Execution aligns fully with defined architecture.",
      },
      {
        title: "Controlled Delivery",
        desc: "Every stage is governed and structured.",
      },
      {
        title: "Long-Term Performance",
        desc: "Systems maintain integrity over time.",
      },
    ],
  },
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function ProAVPage() {
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

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 flex justify-end text-white">
            <div className="max-w-xl text-right">
              <p className="text-white/50 text-xs uppercase tracking-[0.3em] mb-6">
                {data.hero.eyebrow}
              </p>
              <h1 className="text-6xl text-white font-light">{data.hero.title}</h1>
              <p className="mt-6 text-white/80">{data.hero.description}</p>

              <a
                href={data.hero.cta.href}
                className="inline-block mt-10 border px-10 py-4 hover:bg-white hover:text-black transition"
              >
                {data.hero.cta.label}
              </a>
            </div>
          </div>
        </div>

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
      <section className="py-28 bg-black ">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/40 text-xs uppercase mb-4">
            {data.definition.eyebrow}
          </p>
          <h2 className="text-4xl text-white font-light mb-4">
            {data.definition.title}
          </h2>
          <p className="text-white/70 mb-6">{data.definition.desc}</p>
          <p className="text-white/80 mb-6">{data.definition.statement}</p>

          {data.definition.points.map((p, i) => (
            <p key={i} className="text-white/60">{p}</p>
          ))}
        </div>
      </section>

      {/* EXECUTION MODEL */}
      <section className="py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3] text-center">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-black/40 text-xs uppercase mb-4">
            {data.executionModel.eyebrow}
          </p>
          <h2 className="text-4xl text-black font-light mb-4">
            {data.executionModel.title}
          </h2>
          <p className="text-black/60 mb-10">{data.executionModel.desc}</p>

          {data.executionModel.items.map((item, i) => (
            <p key={i} className="text-black/70 mb-3">{item}</p>
          ))}
        </div>
      </section>

      {/* SCOPE */}
      

<section className="py-24 md:py-28">
  <div className="max-w-6xl mx-auto px-6">

    {/* Header */}
    <div className="max-w-2xl mb-16 md:mb-20">
      <p className="text-black/40 text-xs uppercase tracking-[0.3em] mb-4">
        {data.scope.eyebrow}
      </p>

      <h2 className="text-3xl md:text-4xl font-light mb-4 text-black">
        {data.scope.title}
      </h2>

      <p className="text-black/60">
        {data.scope.desc}
      </p>
    </div>

    {/* Grid */}
    <div className="grid md:grid-cols-2 gap-y-14 md:gap-y-20 gap-x-16">

      {data.scope.items.map((item, i) => {
        const Icon = iconMap[i];

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
            viewport={{ once: true }}
            className="group"
          >
            {/* Divider */}
            <div className="w-full h-[1px] bg-black/10 mb-6 group-hover:bg-black/20 transition" />

            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-3">

              {/* Icon */}
              <div className="mt-1 text-black/50 group-hover:text-black/80 transition">
                <Icon size={20} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-lg md:text-xl text-black/80 font-medium">
                {item.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-black/60 leading-relaxed pl-8">
              {item.desc}
            </p>

          </motion.div>
        );
      })}

    </div>
  </div>
</section>
      {/* PROCESS */}
      <section className="py-28 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-white/40 text-xs uppercase mb-4">
            {data.process.eyebrow}
          </p>
          <h2 className="text-4xl text-white font-light mb-4">
            {data.process.title}
          </h2>
          <p className="text-white/60 mb-12">{data.process.desc}</p>

          <div className="flex gap-8 overflow-x-auto no-scrollbar">
            {data.process.steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="min-w-[260px] p-8 bg-white/5 border border-white/10">
                  <Icon className="mb-4" />
                  <h3 className="text-lg text-white mb-2">{step.title}</h3>
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
          <p className="text-black/40 text-xs uppercase mb-4">
            {data.value.eyebrow}
          </p>
          <h2 className="text-4xl text-black font-light mb-4">
            {data.value.title}
          </h2>
          <p className="text-black/60 mb-12">{data.value.desc}</p>

          <div className="grid md:grid-cols-2 gap-16">
            {data.value.items.map((item, i) => (
              <div key={i}>
                <h3 className="text-xl text-black/70 mb-2">{item.title}</h3>
                <p className="text-black/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center bg-[#1c1c1e] text-white">
        <h2 className="text-4xl mb-6 text-white">Enter the System</h2>
        <p className="text-white/60 mb-8">
          All projects are structured and governed through the Engage Gateway.
        </p>
        <a href="/engage" className="border px-10 py-4 hover:bg-white hover:text-black transition">
          Engage Now
        </a>
      </section>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }
      `}</style>

    </main>
  );
}