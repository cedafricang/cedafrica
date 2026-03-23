"use client";

import { motion } from "framer-motion";
import {
  Layers,
  Network,
  Users,
  ShieldCheck,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "Capabilities",
  title: "What We Do",
  description:
    "CED defines how audiovisual systems are designed and delivered — ensuring alignment across all stakeholders involved in a project.",

  items: [
    {
      title: "System Design & Specification",
      desc: "Defining architecture, performance standards, and system intent before execution begins.",
      icon: Layers,
      gradient: "from-[#ffffff] to-[#f3f3f4]",
    },
    {
      title: "AV Consulting",
      desc: "Supporting architects, consultants, and developers with structured AV planning and coordination.",
      icon: Network,
      gradient: "from-[#fafafa] to-[#f0f0f1]",
    },
    {
      title: "Partner Ecosystem Management",
      desc: "Working with certified partners who execute within defined standards and structured frameworks.",
      icon: Users,
      gradient: "from-[#ffffff] to-[#eeeeef]",
    },
    {
      title: "Governance & Oversight",
      desc: "Ensuring systems are delivered as designed — with consistency, accountability, and integrity.",
      icon: ShieldCheck,
      gradient: "from-[#fafafa] to-[#f2f2f3]",
    },
  ],
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function WhatWeDo() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* ============================= */}
      {/* PREMIUM BACKGROUND */}
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
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <p className="text-black/40 uppercase tracking-[0.35em] text-xs mb-6">
            {data.eyebrow}
          </p>

          <h2 className="text-4xl md:text-5xl font-light mb-6">
            {data.title}
          </h2>

          <p className="text-black/60 leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* ============================= */}
        {/* GRID */}
        {/* ============================= */}
        <div className="grid md:grid-cols-2 gap-10">

          {data.items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-10 bg-gradient-to-br ${item.gradient} border border-black/5 shadow-[0_25px_80px_rgba(0,0,0,0.08)] hover:shadow-[0_35px_100px_rgba(0,0,0,0.12)] transition duration-500`}
              >

                {/* Soft hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-tr from-white/40 via-transparent to-white/20" />

                {/* ============================= */}
                {/* ICON */}
                {/* ============================= */}
                <div className="mb-6 text-black/60">
                  <Icon size={28} strokeWidth={1.5} />
                </div>

                {/* ============================= */}
                {/* TITLE */}
                {/* ============================= */}
                <h3 className="text-xl font-medium mb-4 text-black/80">
                  {item.title}
                </h3>

                {/* ============================= */}
                {/* DESCRIPTION */}
                {/* ============================= */}
                <p className="text-black/60 leading-relaxed">
                  {item.desc}
                </p>

                {/* ============================= */}
                {/* BOTTOM LINE (PREMIUM DETAIL) */}
                {/* ============================= */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#d6d6d8] via-[#bfbfc2] to-[#d6d6d8] group-hover:w-full transition-all duration-500" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}