"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "Foundation",
  title: "Why CED Exists",
  description:
    "The audiovisual industry operates without consistent structure, standards, or accountability.",

  issues: [
    "Poorly defined systems",
    "Inconsistent delivery across projects",
    "Dependence on individual vendors",
    "Misalignment with design intent",
  ],

  conclusion:
    "CED exists to correct this — introducing structure, governance, and performance certainty into every project.",

  image: "/images/hero/avimage.jpg",
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function WhyCEDExists() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* ============================= */}
      {/* FIXED BACKGROUND */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${data.image})` }}
      />

      {/* ============================= */}
      {/* DARK DEPTH OVERLAYS */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Gradient layering for richness */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/95" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-transparent to-black/90" />

      {/* Soft center glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] bg-white/5 rounded-full blur-[120px]" />
      </div>

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-white/40 uppercase tracking-[0.4em] text-xs mb-6"
        >
          {data.eyebrow}
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl text-white md:text-5xl font-light mb-8"
        >
          {data.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white/70 text-lg leading-relaxed mb-12"
        >
          {data.description}
        </motion.p>

        {/* ============================= */}
        {/* ISSUES LIST (PREMIUM STYLE) */}
        {/* ============================= */}
        <div className="space-y-6 mb-16">

          {data.issues.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center gap-6"
            >
              {/* Line */}
              <div className="w-10 h-[1px] bg-white/30" />

              {/* Text */}
              <p className="text-white/60 text-sm md:text-base">
                {item}
              </p>

              {/* Line */}
              <div className="w-10 h-[1px] bg-white/30" />
            </motion.div>
          ))}

        </div>

        {/* Divider */}
        <div className="w-16 h-[1px] bg-white/20 mx-auto mb-10" />

        {/* Conclusion */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto"
        >
          {data.conclusion}
        </motion.p>

      </div>
    </section>
  );
}