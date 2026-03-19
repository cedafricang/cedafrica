"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const valueData = {
  eyebrow: "Outcome",
  title: "What This Means For You",
  description:
    "A structured system produces defined outcomes — reducing uncertainty while maintaining performance, control, and long-term reliability.",

  items: [
    {
      title: "Reduced Project Risk",
      desc: "Structured qualification and system design eliminate ambiguity before execution begins.",
    },
    {
      title: "Clear Accountability",
      desc: "Defined ownership across every stage ensures responsibility is never unclear.",
    },
    {
      title: "Performance-Driven Design",
      desc: "Every system is engineered against defined performance standards, not assumptions.",
    },
    {
      title: "Governed Partner Ecosystem",
      desc: "Execution is limited to certified partners operating within a controlled framework.",
    },
    {
      title: "Long-Term System Reliability",
      desc: "Systems are delivered with continuity, scalability, and future alignment built in.",
    },
  ],
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ValueSection() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* ============================= */}
      {/* SILVER BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f2f2f3] to-[#f9f9fa]" />

      {/* Fine Grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Soft Glow */}
      <div className="absolute top-[-150px] left-[-100px] w-[600px] h-[600px] bg-black/5 rounded-full blur-[120px]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-24">
          <p className="text-black/40 tracking-[0.35em] uppercase text-xs mb-6">
            {valueData.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
            {valueData.title}
          </h2>

          <p className="text-black/60 leading-relaxed">
            {valueData.description}
          </p>
        </div>

        {/* ============================= */}
        {/* VALUE GRID */}
        {/* ============================= */}

        <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">

          {valueData.items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              className="group relative"
            >
              {/* Subtle Background Layer */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition duration-700" />

              {/* Divider */}
              <div className="w-full h-[1px] bg-black/10 mb-8 group-hover:bg-black/30 transition duration-500" />

              {/* Content */}
              <div className="flex items-start gap-6">

                {/* Number */}
                <span className="text-black/25 text-sm tracking-widest mt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Text Block */}
                <div>
                  <h3 className="text-xl text-black/70 md:text-2xl font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="text-black/55 leading-relaxed max-w-md text-sm md:text-base">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}