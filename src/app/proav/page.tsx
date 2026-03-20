"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList,
  Network,
  Settings,
  CheckCircle2,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
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
    title: "What This Is",
    statement:
      "ProAV Systems is the execution layer where defined audiovisual systems are delivered through certified partners under structured governance.",
    points: [
      "Execution follows defined design",
      "Delivery is controlled, not random",
      "Only certified partners operate within the system",
    ],
  },

  executionModel: [
    "CED defines system architecture and standards",
    "Certified partners execute within defined scope",
    "CED governs performance, compliance, and delivery",
  ],

  scope: [
    {
      title: "System Installation",
      desc: "Deployment of defined audiovisual systems within project environments.",
    },
    {
      title: "System Integration",
      desc: "Coordination across AV, architectural, and engineering systems.",
    },
    {
      title: "Calibration & Tuning",
      desc: "Performance optimisation aligned with defined standards.",
    },
    {
      title: "Final Delivery",
      desc: "Structured handover with documentation and system integrity.",
    },
  ],

  process: [
    {
      title: "Assignment",
      desc: "Certified partner assigned based on project scope",
      icon: ClipboardList,
    },
    {
      title: "Execution",
      desc: "System implemented according to defined design",
      icon: Network,
    },
    {
      title: "Validation",
      desc: "Performance and compliance verified",
      icon: Settings,
    },
    {
      title: "Delivery",
      desc: "System handed over with full integrity",
      icon: CheckCircle2,
    },
  ],

  value: [
    {
      title: "Reliable Execution",
      desc: "Systems are delivered consistently across projects.",
    },
    {
      title: "No Design Compromise",
      desc: "Execution aligns fully with defined system architecture.",
    },
    {
      title: "Controlled Delivery",
      desc: "Every stage is governed and structured.",
    },
    {
      title: "Long-Term Performance",
      desc: "Systems maintain integrity beyond project completion.",
    },
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function ProAVPage() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white text-black">

      {/* ========================================= */}
      {/* HERO */}
      {/* ========================================= */}
      <section ref={ref} className="relative h-screen flex items-center overflow-hidden">

        <motion.div style={{ scale }} className="absolute inset-0">
          <img src={data.hero.image} className="w-full h-full object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 flex justify-end">

            <div className="max-w-xl text-right text-white">
              <p className="tracking-[0.35em] text-xs mb-6 text-white/50 uppercase">
                {data.hero.eyebrow}
              </p>

              <h1 className="text-6xl md:text-7xl font-light leading-tight">
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

      {/* ========================================= */}
      {/* DEFINITION */}
      {/* ========================================= */}
      <section className="relative h-[90vh] flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${data.hero.image})` }}
        />
        <div className="absolute inset-0 bg-black/75" />

        <div className="relative z-10 max-w-3xl mx-auto text-white px-6">
          <h2 className="text-4xl font-light mb-6">
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

      {/* ========================================= */}
      {/* EXECUTION MODEL */}
      {/* ========================================= */}
      <section className="py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          {data.executionModel.map((item, i) => (
            <p key={i} className="text-black/70">{item}</p>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* SCOPE */}
      {/* ========================================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {data.scope.map((item, i) => (
            <div key={i}>
              <h3 className="text-2xl font-light mb-3">{item.title}</h3>
              <p className="text-black/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* PROCESS */}
      {/* ========================================= */}
      <section className="py-28 bg-black text-white overflow-hidden">

        <div className="max-w-7xl mx-auto px-6 flex gap-10 overflow-x-auto no-scrollbar">

          {data.process.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="min-w-[260px] p-8 bg-white/5 backdrop-blur border border-white/10">
                <Icon className="mb-4" />
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-white/60">{step.desc}</p>
              </div>
            );
          })}
        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            scrollbar-width: none;
          }
        `}</style>

      </section>

      {/* ========================================= */}
      {/* VALUE */}
      {/* ========================================= */}
      <section className="py-28 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {data.value.map((item, i) => (
            <div key={i}>
              <h3 className="text-xl mb-2">{item.title}</h3>
              <p className="text-black/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ========================================= */}
      {/* CTA */}
      {/* ========================================= */}
      <section className="py-28 text-center bg-gradient-to-b from-[#1c1c1e] to-[#2a2a2d] text-white">
        <h2 className="text-4xl mb-6">Enter the System</h2>
        <p className="text-white/60 mb-8">
          All projects are structured and governed through the Engage Gateway.
        </p>

        <a
          href="/engage"
          className="border px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Engage Now
        </a>
      </section>

    </main>
  );
}