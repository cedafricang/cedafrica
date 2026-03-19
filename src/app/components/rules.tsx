"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const rulesData = {
  eyebrow: "Operating Principles",
  title: "The Rules",
  description:
    "CED operates within a defined system. Every engagement follows structured boundaries designed to ensure clarity, accountability, and performance.",

  background: "/images/hero/avimage.jpg",

  rules: [
    "CED does not operate as a contractor",
    "CED does not sell products directly",
    "All engagements must go through the Engage Gateway",
    "Only certified partners can execute CED-defined systems",
    "Projects must meet defined standards",
  ],
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function RulesSection() {
  return (
    <section className="relative min-h-[120vh] flex items-center overflow-hidden">

      {/* ============================= */}
      {/* FIXED BACKGROUND */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: `url(${rulesData.background})` }}
      />

      {/* Dark Base Overlay */}
      <div className="absolute inset-0 bg-black/80" />

      {/* Depth Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95" />

      {/* Subtle Noise Layer (Luxury Feel) */}
      <div className="absolute inset-0 opacity-[0.05] mix-blend-overlay pointer-events-none bg-[url('/images/noise.png')]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-20"
        >
          <p className="text-white/50 tracking-[0.35em] uppercase text-xs mb-6">
            {rulesData.eyebrow}
          </p>

          <h2 className="text-white text-4xl md:text-5xl font-light leading-tight mb-6">
            {rulesData.title}
          </h2>

          <p className="text-white/70 leading-relaxed">
            {rulesData.description}
          </p>
        </motion.div>

        {/* ============================= */}
        {/* RULES LIST */}
        {/* ============================= */}

        <div className="space-y-10">

          {rulesData.rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="flex items-start gap-8 border-t border-white/10 pt-8"
            >
              {/* Number */}
              <div className="text-white/30 text-sm tracking-widest">
                {String(index + 1).padStart(2, "0")}
              </div>

              {/* Rule */}
              <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl">
                {rule}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}