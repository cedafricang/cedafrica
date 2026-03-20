"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Network,
  Star,
  TrendingUp,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const values = [
  {
    title: "Qualified Project Access",
    desc: "Engage only in structured, high-quality project opportunities.",
    icon: Briefcase,
  },
  {
    title: "Defined System Role",
    desc: "Operate within a clearly assigned role in a governed ecosystem.",
    icon: Network,
  },
  {
    title: "Premium Alignment",
    desc: "Work alongside leading brands and high-value clients.",
    icon: Star,
  },
  {
    title: "Sustained Growth",
    desc: "Build long-term value within a structured system framework.",
    icon: TrendingUp,
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function PartnerValue() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">

      {/* ============================= */}
      {/* FIXED BACKGROUND */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6 text-white">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">

          <p className="text-white/40 text-xs uppercase tracking-[0.35em] mb-4">
            Value
          </p>

          <h2 className="text-3xl md:text-5xl font-light mb-4">
            What This Means For You
          </h2>

          <p className="text-white/60 leading-relaxed">
            Partnership is not access — it is structured opportunity.
          </p>
        </div>

        {/* ============================= */}
        {/* GRID */}
        {/* ============================= */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">

          {values.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition duration-500"
              >

                {/* Top Divider */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-white/20 transition" />

                {/* Icon */}
                <div className="mb-6 text-white/50 group-hover:text-white transition">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-medium mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 leading-relaxed text-sm">
                  {item.desc}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}