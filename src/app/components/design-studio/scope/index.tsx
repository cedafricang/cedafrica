"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "Scope",
  title: "What We Define",

  items: [
    {
      title: "System Architecture",
      desc: "The structure, layout, and logic of the entire audiovisual system.",
      image: "/images/hero/draw.png",
    },
    {
      title: "Performance Standards",
      desc: "Defined benchmarks for audio, visual, and system performance.",
      image: "/images/hero/cinema.webp",
    },
    {
      title: "Technology & Brand Alignment",
      desc: "Selection of technologies and brands aligned with system objectives.",
      image: "/images/hero/kar.webp",
    },
    {
      title: "Integration with Architecture & MEP",
      desc: "Seamless coordination with building systems, design, and infrastructure.",
      image: "/images/hero/son.webp",
    },
  ],
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function WhatWeDefine() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* ============================= */}
      {/* SILVER GRADIENT BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f2f2f3] to-[#f9f9fa]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Soft Glow */}
      <div className="absolute bottom-[-150px] right-[-100px] w-[700px] h-[700px] bg-black/5 rounded-full blur-[120px]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-28">
          <p className="text-black/40 tracking-[0.35em] uppercase text-xs mb-6">
            {data.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            {data.title}
          </h2>
        </div>

        {/* ============================= */}
        {/* ITEMS */}
        {/* ============================= */}

        <div className="space-y-32">

          {data.items.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-16 items-center`}
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`${isReverse ? "md:order-2" : ""}`}
                >
                  <div className="relative h-[420px] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-[1200ms]"
                    />

                    {/* subtle overlay */}
                    <div className="absolute inset-0 bg-black/10" />
                  </div>
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`${isReverse ? "md:order-1" : ""}`}
                >
                  <h3 className="text-2xl text-black/70 md:text-3xl font-light mb-4">
                    {item.title}
                  </h3>

                  <p className="text-black/60 leading-relaxed max-w-md">
                    {item.desc}
                  </p>

                  {/* divider */}
                  <div className="mt-6 w-12 h-[1px] bg-black/30" />
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}