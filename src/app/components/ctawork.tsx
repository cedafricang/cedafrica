"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const ctaData = {
  eyebrow: "Engagement",
  title: "Enter the CED System",
  description:
    "All engagements are structured, qualified, and routed through the CED platform. Select the appropriate path to begin.",

  actions: [
    {
      title: "Request Design Consultation",
      desc: "For projects requiring structured AV design, system architecture, and performance definition.",
      href: "/engage?type=design",
    },
    {
      title: "Become a Partner",
      desc: "For system integrators, contractors, and retail partners seeking to join the CED ecosystem.",
      href: "/engage?type=partner",
    },
    {
      title: "Specifier Support",
      desc: "For architects and consultants requiring guidance, specifications, and system planning support.",
      href: "/engage?type=specifier",
    },
  ],
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function EngageCTA() {
  return (
    <section className="relative py-40 overflow-hidden text-white">

      {/* ============================= */}
      {/* DARK SILVER GRADIENT */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e] via-[#2a2a2d] to-[#1c1c1e]" />

      {/* Subtle Texture Grid */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Soft Glow */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 rounded-full blur-[140px]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto mb-20"
        >
          <p className="text-white/40 tracking-[0.35em] uppercase text-xs mb-6">
            {ctaData.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl text-white font-light leading-tight mb-6">
            {ctaData.title}
          </h2>

          <p className="text-white/70 leading-relaxed">
            {ctaData.description}
          </p>
        </motion.div>

        {/* ============================= */}
        {/* PATH OPTIONS */}
        {/* ============================= */}

        <div className="grid md:grid-cols-3 gap-12 text-left">

          {ctaData.actions.map((action, index) => (
            <motion.a
              key={index}
              href={action.href}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative block"
            >
              {/* Top Line */}
              <div className="w-full h-[1px] bg-white/10 mb-6 group-hover:bg-white/40 transition duration-500" />

              {/* Content */}
              <div className="flex items-start gap-4">

                {/* Number */}
                <span className="text-white/30 text-sm tracking-widest mt-1">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Text */}
                <div>
                  <h3 className="text-lg md:text-xl font-medium mb-3 group-hover:text-white transition">
                    {action.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed">
                    {action.desc}
                  </p>
                </div>
              </div>

              {/* Subtle Arrow */}
              <div className="mt-6 text-white/30 group-hover:text-white transition duration-300">
                →
              </div>
            </motion.a>
          ))}

        </div>

        {/* ============================= */}
        {/* FINAL STATEMENT */}
        {/* ============================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-24"
        >
          <p className="text-white/40 text-sm tracking-widest uppercase">
            All paths lead through the Engage Gateway
          </p>
        </motion.div>

      </div>
    </section>
  );
}