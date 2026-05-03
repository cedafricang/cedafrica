"use client";

import { motion } from "framer-motion";
import {
  Church,
  Theater,
  Waves,
  Layout,
  Speaker,
  Sliders,
  ShieldCheck,
  Radio,
  Monitor,
  Network,
} from "lucide-react";

/* ============================= */
/* TYPOLOGIES (FROM BROCHURE) */
/* ============================= */

const typologies = [
  {
    title: "Houses of Worship",
    desc: "Spaces operating at the intersection of speech and music, requiring intelligibility across every seat regardless of programme type.",
    points: [
      "Multi-zone sanctuaries",
      "Livestream & broadcast systems",
      "Volunteer-grade interfaces",
      "Acoustic treatment coordination",
    ],
    icon: Church,
  },
  {
    title: "Performing Arts & Auditoriums",
    desc: "Performance environments requiring reference-grade reproduction across full dynamic range and compatibility with touring systems.",
    points: [
      "Touring rider compatibility",
      "Show control & communications",
      "Rigging coordination",
      "Broadcast & recording systems",
    ],
    icon: Theater,
  },
];

/* ============================= */
/* METHOD (FROM BROCHURE PAGE 4) */
/* ============================= */

const methodology = [
  {
    title: "Predictive Design",
    desc: "Every venue is modelled in EASE against SPL, STI, Echo Criteria and Frequency Response before installation.",
    icon: Waves,
  },
  {
    title: "Architectural Integration",
    desc: "Speaker placement, rigging and finishes align with the architectural intent. The AV system serves the room’s primary purpose.",
    icon: Layout,
  },
  {
    title: "Line-Source Coverage",
    desc: "Line-array systems deliver consistent SPL and intelligibility across the entire listening field.",
    icon: Speaker,
  },
  {
    title: "Calibration & Tuning",
    desc: "Final calibration produces reliable presets and performance consistency across years of use.",
    icon: Sliders,
  },
  {
    title: "Specification Governance",
    desc: "CED specifies and governs. The integrator installs. Separation ensures system integrity.",
    icon: ShieldCheck,
  },
];

/* ============================= */
/* SYSTEM LAYERS (PAGE 7) */
/* ============================= */

const systems = [
  {
    title: "Broadcast & Streaming",
    desc: "Multi-camera production, broadcast-grade audio routing, livestream encoding and recording — delivering studio-quality output beyond the room.",
    icon: Radio,
  },
  {
    title: "Show Control",
    desc: "Unified control across audio, video, lighting and scheduling systems through platforms like Q-SYS and Crestron.",
    icon: Monitor,
  },
  {
    title: "AV-over-IP Infrastructure",
    desc: "Dante, AES67, NDI and SDVoE systems running on a structured network backbone designed for scalability and long-term operation.",
    icon: Network,
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ProAVSolutions() {
  return (
    <section className="relative py-28 md:py-36 bg-[#f7f7f5] text-black overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/40 mb-4">
            ProAV Systems
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Designed for the Room. Calibrated for Every Seat.
          </h2>

          <p className="text-black/60 leading-relaxed">
            A specialist AV design practice for large-venue environments where
            intelligibility, fidelity and coverage are non-negotiable.
          </p>
        </div>

        {/* ================= TYPOLOGIES ================= */}
        <div className="mb-24">
          <h3 className="text-xl font-medium mb-10">
            Project Typologies
          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            {typologies.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-10 border border-black/10 bg-white"
                >
                  <div className="mb-6 text-black/50">
                    <Icon size={24} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-xl font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-black/60 mb-6 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="space-y-2 text-sm text-black/70">
                    {item.points.map((p, idx) => (
                      <p key={idx}>— {p}</p>
                    ))}
                  </div>

                </motion.div>
              );
            })}

          </div>
        </div>

        {/* ================= METHODOLOGY ================= */}
        <div className="mb-24">

          <h3 className="text-xl font-medium mb-12">
            Design Method
          </h3>

          <div className="grid md:grid-cols-2 gap-12">

            {methodology.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="p-10 border border-black/10 bg-white"
                >
                  <div className="mb-6 text-black/50">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-black/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

        {/* ================= SYSTEM LAYERS ================= */}
        <div>

          <h3 className="text-xl font-medium mb-12">
            System Infrastructure
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            {systems.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="p-8 border border-black/10 bg-white"
                >
                  <div className="mb-5 text-black/50">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-base font-medium mb-2">
                    {item.title}
                  </h3>

                  <p className="text-sm text-black/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

      {/* FADE EDGE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f7f7f5] to-transparent" />

    </section>
  );
}