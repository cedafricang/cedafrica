"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "Positioning",
  title: "Where We Operate",
  description:
    "CED operates between design, engineering, and execution.",
  statement:
    "CED sits between architectural intent and system delivery — ensuring audiovisual systems are properly defined, coordinated, and implemented.",
  image: "/images/hero/avimage.jpg",
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ArchitectsPositioning() {
  return (
    <section className="relative h-[80vh] flex items-center overflow-hidden">

      {/* ============================= */}
      {/* FIXED BACKGROUND */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${data.image})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          {/* Eyebrow */}
          <p className="text-white/40 text-xs uppercase tracking-[0.35em] mb-6">
            {data.eyebrow}
          </p>

          {/* Title */}
          <h2 className="text-4xl text-white md:text-5xl font-light mb-6">
            {data.title}
          </h2>

          {/* Description */}
          <p className="text-white/60 mb-10">
            {data.description}
          </p>

          {/* Divider */}
          <div className="w-12 h-[1px] bg-white/30 mx-auto mb-10" />

          {/* Statement */}
          <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-3xl mx-auto">
            {data.statement}
          </p>

        </motion.div>

      </div>
    </section>
  );
}