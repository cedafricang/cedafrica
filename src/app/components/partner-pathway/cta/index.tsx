"use client";

import { motion } from "framer-motion";

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function PartnerCTA() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden text-white">

      {/* ============================= */}
      {/* BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e] via-[#2a2a2d] to-[#1c1c1e]" />

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Glow */}
      <div className="absolute bottom-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-3xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >

          {/* Eyebrow */}
          <p className="text-white/40 text-xs uppercase tracking-[0.35em] mb-6">
            Engagement
          </p>

          {/* Title */}
          <h2 className="text-3xl text-white md:text-5xl font-light mb-6 leading-tight">
            Enter the Ecosystem
          </h2>

          {/* Description */}
          <p className="text-white/60 mb-12 leading-relaxed">
            All partnership requests are processed through the Engage Gateway.
          </p>

          {/* ============================= */}
          {/* CTA BUTTONS */}
          {/* ============================= */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">

            {/* PRIMARY CTA */}
            <a
              href="/engage?type=certified-partner"
              className="w-full md:w-auto text-center border border-white px-10 py-4 text-sm tracking-widest uppercase bg-white text-black hover:bg-transparent hover:text-white transition duration-500"
            >
              Become a Certified Partner
            </a>

            {/* SECONDARY CTA */}
            <a
              href="/engage?type=partner"
              className="w-full md:w-auto text-center border border-white/30 px-10 py-4 text-sm tracking-widest uppercase hover:border-white hover:bg-white hover:text-black transition duration-500"
            >
              Apply for Partnership
            </a>

            {/* TERTIARY CTA */}
            <a
              href="/engage"
              className="w-full md:w-auto text-center text-white/70 text-sm tracking-widest uppercase hover:text-white transition duration-300"
            >
              Engage with CED
            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}