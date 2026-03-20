"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const valueData = {
  eyebrow: "Outcome",
  title: "What This Means For You",
  items: [
    {
      title: "Clarity Before Execution",
      desc: "Every system is fully defined before implementation begins.",
    },
    {
      title: "Reduced Project Risk",
      desc: "Design eliminates uncertainty and prevents costly rework.",
    },
    {
      title: "Performance Assurance",
      desc: "Systems are engineered to meet defined performance outcomes.",
    },
    {
      title: "Seamless Integration",
      desc: "Aligned with architecture, engineering, and infrastructure.",
    },
  ],
};

const ctaData = {
  eyebrow: "Engagement",
  title: "Start with Design",
  description:
    "All systems begin with structured design and specification through the AV Design Studio.",
  cta: {
    label: "Request Design Consultation",
    href: "/engage?type=design",
  },
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ValueAndCTA() {
  return (
    <>
      {/* ============================= */}
      {/* VALUE SECTION */}
      {/* ============================= */}
      <section className="relative py-40 overflow-hidden">

        {/* Silver Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f2f2f3] to-[#f9f9fa]" />

        {/* Subtle Grid */}
        <div className="absolute inset-0 opacity-[0.025]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
        </div>

        {/* Soft Glow */}
        <div className="absolute top-[-200px] right-[-100px] w-[700px] h-[700px] bg-black/5 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative max-w-6xl mx-auto px-6">

          {/* Header */}
          <div className="max-w-2xl mb-24">
            <p className="text-black/40 tracking-[0.35em] uppercase text-xs mb-6">
              {valueData.eyebrow}
            </p>

            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              {valueData.title}
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">

            {valueData.items.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
              >
                {/* Divider */}
                <div className="w-full h-[1px] bg-black/10 mb-6" />

                <h3 className="text-xl text-black/70 md:text-2xl font-medium mb-3">
                  {item.title}
                </h3>

                <p className="text-black/60 leading-relaxed max-w-md">
                  {item.desc}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* CTA SECTION */}
      {/* ============================= */}
      <section className="relative py-40 overflow-hidden text-white">

        {/* Dark Graphite Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e] via-[#2a2a2d] to-[#1c1c1e]" />

        {/* Pattern Grid */}
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:120px_120px]" />
        </div>

        {/* Glow */}
        <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />

        {/* Content */}
        <div className="relative max-w-3xl mx-auto px-6 text-center">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Eyebrow */}
            <p className="text-white/40 tracking-[0.35em] uppercase text-xs mb-6">
              {ctaData.eyebrow}
            </p>

            {/* Title */}
            <h2 className="text-4xl text-white md:text-5xl font-light mb-6 leading-tight">
              {ctaData.title}
            </h2>

            {/* Description */}
            <p className="text-white/70 mb-10 leading-relaxed">
              {ctaData.description}
            </p>

            {/* CTA */}
            <a
              href={ctaData.cta.href}
              className="inline-block border border-white/30 px-12 py-5 text-sm tracking-widest uppercase hover:bg-white hover:text-black transition duration-500"
            >
              {ctaData.cta.label}
            </a>
          </motion.div>

        </div>
      </section>
    </>
  );
}