"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const philosophy = {
  eyebrow: "Operating Philosophy",
  title: "Why CED Exists",
  statement:
    "The audiovisual industry lacks structure, standardisation, and accountability. Projects are often fragmented and inconsistently executed.",
  statement2:
    "CED exists to bring order, governance, and performance certainty — operating as the structured layer between design, specification, and system delivery.",
  image: "/images/hero/h5.webp",
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function WhyCEDExists() {
  return (
    <section className="relative h-[110vh] flex items-center justify-center overflow-hidden">

      {/* Fixed Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${philosophy.image})` }}
      />

      {/* Premium Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Subtle Gradient Depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Eyebrow */}
          <p className="text-white/50 tracking-[0.35em] uppercase text-xs mb-6">
            {philosophy.eyebrow}
          </p>

          {/* Title */}
          <h2 className="text-white text-4xl md:text-5xl font-light mb-10 leading-tight">
            {philosophy.title}
          </h2>

          {/* Statement */}
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-8">
            {philosophy.statement}
          </p>

          {/* Divider */}
          <div className="w-16 h-[1px] bg-white/30 mx-auto my-8" />

          {/* Core Positioning */}
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            {philosophy.statement2}
          </p>
        </motion.div>
      </div>
    </section>
  );
}