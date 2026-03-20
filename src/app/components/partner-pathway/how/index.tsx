"use client";

import { motion } from "framer-motion";
import {
  Send,
  SearchCheck,
  Network,
  Layers,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const steps = [
  {
    title: "Application",
    desc: "Application through the Engage Gateway",
    icon: Send,
  },
  {
    title: "Qualification",
    desc: "There will be Structured evaluation and review",
    icon: SearchCheck,
  },
  {
    title: "Assignment",
    desc: "Role defined within the ecosystem",
    icon: Network,
  },
  {
    title: "Participation",
    desc: "Access to projects and system execution",
    icon: Layers,
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function PartnershipProcess() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden bg-[#0f0f10] text-white">

      {/* ============================= */}
      {/* BACKGROUND DETAILS */}
      {/* ============================= */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Soft Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">

          <p className="text-white/40 text-xs uppercase tracking-[0.35em] mb-4">
            Process
          </p>

          <h2 className="text-3xl md:text-5xl font-light mb-4">
            How Partnership Works
          </h2>

          <p className="text-white/60">
            All partnerships operate within a structured system — ensuring clarity, accountability, and performance.
          </p>
        </div>

        {/* ============================= */}
        {/* FLOW */}
        {/* ============================= */}

        <div className="relative">

          {/* LINE (DESKTOP) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10" />

          {/* FLOW GRID */}
          <div className="flex md:grid md:grid-cols-4 gap-8 overflow-x-auto md:overflow-visible no-scrollbar">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative min-w-[260px] md:min-w-0"
                >

                  {/* NODE */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-2 h-2 bg-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />

                  {/* CARD */}
                  <div className="relative z-10 p-6 md:p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition duration-500">

                    {/* Icon */}
                    <div className="mb-5 text-white/50">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg md:text-xl font-medium mb-2">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 text-sm leading-relaxed">
                      {step.desc}
                    </p>

                  </div>

                  {/* MOBILE CONNECTOR */}
                  {i !== steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4 text-white/30">
                      ↓
                    </div>
                  )}

                </motion.div>
              );
            })}

          </div>
        </div>

      </div>

      {/* ============================= */}
      {/* HIDE SCROLLBAR */}
      {/* ============================= */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}