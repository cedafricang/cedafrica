"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const sectionData = {
  eyebrow: "Definition",
  title: "What This Is",
  statement:
    "The AV Design Studio is the control layer where system architecture, performance standards, and integration logic are defined — before any installation begins.",

  points: [
    "No execution happens at this stage",
    "No assumptions enter the project",
    "Everything is defined before delivery",
  ],

  image: "/images/hero/son.webp",
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function AVDesignDefinition() {
  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden">

      {/* ============================= */}
      {/* FIXED BACKGROUND IMAGE */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${sectionData.image})` }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Depth Gradient (Premium Layering) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/80" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}

      <div className="relative z-10 w-full">
        <div className="max-w-6xl mx-auto px-6">

          {/* LEFT CONTENT BLOCK */}
          <div className="max-w-2xl text-left">

            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-white/50 tracking-[0.35em] uppercase text-xs mb-6"
            >
              {sectionData.eyebrow}
            </motion.p>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white text-4xl md:text-5xl font-light leading-tight mb-10"
            >
              {sectionData.title}
            </motion.h2>

            {/* Statement */}
            <motion.p
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed"
            >
              {sectionData.statement}
            </motion.p>

            {/* Divider */}
            <div className="w-16 h-[1px] bg-white/30 my-10" />

            {/* Points */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-white/70"
            >
              {sectionData.points.map((point, i) => (
                <p key={i}>{point}</p>
              ))}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}