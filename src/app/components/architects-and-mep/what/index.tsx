"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const sectionData = {
  eyebrow: "Definition",
  title: "System Design & Coordination Layer",
  description:
    "CED integrates audiovisual systems into the broader design and engineering framework — ensuring alignment across architecture, MEP systems, and project delivery.",

  points: [
    "AV is defined during design, not added later",
    "System requirements are structured early",
    "Coordination across disciplines is maintained",
    "Performance is defined before execution",
  ],

  image: "/images/hero/avimage.jpg",
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ArchitectsWhatThisIs() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">

      {/* ============================= */}
      {/* FIXED BACKGROUND */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${sectionData.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/95" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-xl text-white"
        >

          {/* Eyebrow */}
          <p className="text-white/40 text-xs uppercase tracking-[0.35em] mb-6">
            {sectionData.eyebrow}
          </p>

          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            {sectionData.title}
          </h2>

          {/* Description */}
          <p className="text-white/70 leading-relaxed mb-10">
            {sectionData.description}
          </p>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-white/30 mb-8" />

          {/* Points */}
          <div className="space-y-4 text-white/60 text-sm md:text-base">

            {sectionData.points.map((point, i) => (
              <p key={i} className="flex items-start gap-3">
                <span className="text-white/40">—</span>
                {point}
              </p>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}