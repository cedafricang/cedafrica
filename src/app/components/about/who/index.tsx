"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "About",
  title: "A Structured Approach to AV",
  description:
    "CED exists to bring order to the audiovisual industry — establishing standards, defining system architecture, and ensuring performance across design and delivery.",

  subtext:
    "We operate as an independent layer between design, specification, and execution — ensuring that audiovisual systems are properly defined before they are built.",

  images: [
    "/images/hero/avimage.jpg",
    "/images/hero/avimage.jpg",
    "/images/hero/avimage.jpg",
  ],
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function WhoWeAre() {
  const [index, setIndex] = useState(0);

  /* AUTO SLIDE */
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % data.images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">

      {/* ============================= */}
      {/* PREMIUM SILVER BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f2f2f3] to-[#f9f9fa]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:120px_120px]" />
      </div>

      {/* Soft glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-black/5 blur-[120px] rounded-full" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* ============================= */}
        {/* IMAGE SLIDESHOW */}
        {/* ============================= */}
        <div className="relative w-full h-[400px] md:h-[520px] overflow-hidden rounded-[2rem] shadow-[0_40px_100px_rgba(0,0,0,0.15)]">

          {data.images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              initial={{ opacity: 0 }}
              animate={{ opacity: index === i ? 1 : 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          ))}

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />

        </div>

        {/* ============================= */}
        {/* TEXT */}
        {/* ============================= */}
        <div>

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-black/40 uppercase tracking-[0.35em] text-xs mb-6"
          >
            {data.eyebrow}
          </motion.p>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-light leading-tight relative inline-block"
          >
            {data.title}

            {/* 🔥 ANIMATED SILVER UNDERLINE */}
            <span className="absolute left-0 -bottom-3 w-full h-[2px] overflow-hidden">
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cfcfd2] to-transparent animate-[shine_3s_linear_infinite]" />
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-8 text-black/70 leading-relaxed text-lg"
          >
            {data.description}
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-black/50 leading-relaxed"
          >
            {data.subtext}
          </motion.p>

        </div>

      </div>

      {/* ============================= */}
      {/* ANIMATION KEYFRAMES */}
      {/* ============================= */}
      <style jsx>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>

    </section>
  );
}