"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "Engage",
  title: "Engage with CED",
  description:
    "All project engagements begin through the Engage Gateway.",

  ctas: [
    {
      label: "Request Design Consultation",
      href: "/engage?type=design",
    },
    {
      label: "Specifier Support",
      href: "/engage?type=specifier",
    },
    {
      label: "Engage with CED",
      href: "/engage",
    },
  ],
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ArchitectsCTA() {
  return (
    <section className="relative py-32 overflow-hidden text-white">

      {/* ============================= */}
      {/* BACKGROUND (DARK LUXURY) */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e] via-[#232326] to-[#2a2a2d]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Soft Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-[140px]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">

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
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            {data.title}
          </h2>

          {/* Description */}
          <p className="text-white/60 mb-12">
            {data.description}
          </p>

          {/* ============================= */}
          {/* CTA BUTTONS */}
          {/* ============================= */}
          <div className="flex flex-col sm:flex-row justify-center gap-6">

            {data.ctas.map((cta, index) => (
              <motion.a
                key={index}
                href={cta.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className={`px-10 py-4 text-sm tracking-widest uppercase transition duration-500 border ${
                  index === 0
                    ? "bg-white text-black border-white hover:bg-transparent hover:text-white"
                    : "border-white/30 text-white hover:bg-white hover:text-black"
                }`}
              >
                {cta.label}
              </motion.a>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
}