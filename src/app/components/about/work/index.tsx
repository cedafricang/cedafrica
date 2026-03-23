"use client";

import { motion } from "framer-motion";
import {
  Building,
  Wrench,
  HardHat,
  Briefcase,
  Cpu,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "Ecosystem",
  title: "Who We Work With",
  description:
    "CED works with stakeholders across the built environment and audiovisual ecosystem.",

  items: [
    {
      title: "Architects & MEP Consultants",
      icon: Building,
    },
    {
      title: "System Integrators",
      icon: Wrench,
    },
    {
      title: "Developers & Contractors",
      icon: HardHat,
    },
    {
      title: "Enterprise & Corporate Clients",
      icon: Briefcase,
    },
    {
      title: "Technology & Brand Partners",
      icon: Cpu,
    },
  ],
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function WhoWeWorkWith() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* ============================= */}
      {/* SILVER BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f3f3f4] to-[#f9f9fa]" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="w-full h-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-black/5 blur-[120px] rounded-full" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">

          <p className="text-black/40 uppercase tracking-[0.35em] text-xs mb-6">
            {data.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-6">
            {data.title}
          </h2>

          <p className="text-black/60">
            {data.description}
          </p>

        </div>

        {/* ============================= */}
        {/* GRID */}
        {/* ============================= */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {data.items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative p-8 bg-white border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)] hover:shadow-[0_30px_80px_rgba(0,0,0,0.12)] transition duration-500"
              >

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-white/40 via-transparent to-white/20" />

                {/* ICON */}
                <div className="mb-6 text-black/60">
                  <Icon size={26} strokeWidth={1.5} />
                </div>

                {/* TITLE */}
                <h3 className="text-lg font-medium text-black/80">
                  {item.title}
                </h3>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#d6d6d8] via-[#bfbfc2] to-[#d6d6d8] group-hover:w-full transition-all duration-500" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}