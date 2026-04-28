"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function RetailExperience() {
  return (
    <section className="relative py-28 md:py-36 bg-[#0a0a0a] text-white overflow-hidden">

      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* soft glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[120px] rounded-full" />

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-4">
            Retail Experience
          </p>

          <h2 className="text-3xl md:text-4xl font-light mb-6">
            What a Sonos Retail Experience Looks Like
          </h2>

          <p className="text-white/60 leading-relaxed">
            Retail environments are designed to showcase real listening
            experiences, structured product displays, and guided customer
            interaction.
          </p>
        </div>

        {/* ================= MAIN GRID ================= */}
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* ================= LEFT (IMAGES) ================= */}
          <div className="grid grid-cols-2 gap-4">

            {/* MAIN IMAGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="col-span-2 relative h-[280px] md:h-[320px] overflow-hidden"
            >
              <Image
                src="/images/hero/son2.webp"
                alt="Soundhous Sonos Retail"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* SMALL IMAGES */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="relative h-[140px] overflow-hidden"
            >
              <Image
                src="/images/hero/son1.jpg"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="relative h-[140px] overflow-hidden"
            >
              <Image
                src="/images/hero/son3.webp"
                alt=""
                fill
                className="object-cover"
              />
            </motion.div>

          </div>

          {/* ================= RIGHT (CONTENT) ================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >

            {/* SUB LABEL */}
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-4">
              Reference Retail
            </p>

            {/* TITLE */}
            <h3 className="text-2xl font-medium mb-4">
              Soundhous Experience Center
            </h3>

            {/* DESCRIPTION */}
            <p className="text-white/60 leading-relaxed mb-6">
              The Soundhous Experience Center demonstrates how Sonos can be
              positioned within a retail environment, combining immersive
              listening zones with structured product display and seamless
              customer interaction.
            </p>

            <p className="text-white/60 leading-relaxed mb-8">
              This approach enables customers to experience audio across
              different spaces while maintaining a clean, guided retail journey.
            </p>

            {/* FEATURES */}
            <div className="space-y-3 mb-10">
              {[
                "Dedicated listening zones",
                "Structured product display systems",
                "Multi-room experience simulation",
                "Clean architectural integration",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                  <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="https://soundhous.com"
              target="_blank"
              className="inline-flex items-center gap-4 text-[11px] tracking-[0.35em] uppercase border border-white/20 px-6 py-3 hover:bg-white hover:text-black transition"
            >
              Visit Soundhous
              <span className="w-6 h-[1px] bg-current" />
            </Link>

          </motion.div>

        </div>

      </div>

    </section>
  );
}