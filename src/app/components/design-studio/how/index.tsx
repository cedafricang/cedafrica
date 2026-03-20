"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Route,
  DraftingCompass,
  FileText,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const steps = [
  {
    title: "Engage",
    desc: "Structured intake through the Engage Gateway",
    icon: ClipboardList,
  },
  {
    title: "Define",
    desc: "Project scope, requirements, and constraints are established",
    icon: Route,
  },
  {
    title: "Design",
    desc: "System architecture and performance are fully defined",
    icon: DraftingCompass,
  },
  {
    title: "Deliver",
    desc: "Documentation prepared for execution by certified partners",
    icon: FileText,
  },
];

const gradients = [
  "from-[#ffffff] to-[#f3f3f4]",
  "from-[#fafafa] to-[#f0f0f1]",
  "from-[#ffffff] to-[#eeeeef]",
  "from-[#fafafa] to-[#f2f2f3]",
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function HowItWorks() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* ============================= */}
      {/* FIXED BACKGROUND */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Depth gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-20 text-white">
          <h2 className="text-4xl text-white md:text-5xl font-light mb-6">
            How It Works
          </h2>
          <p className="text-white/70">
            A structured process that defines every system before execution begins.
          </p>
        </div>

        {/* ============================= */}
        {/* HORIZONTAL FLOW */}
        {/* ============================= */}

        <div className="relative">

          {/* Scroll Container */}
          <div className="flex gap-6 overflow-x-auto no-scrollbar">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div key={index} className="flex items-center">

                  {/* CARD */}
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`min-w-[260px] md:min-w-[300px] p-8 bg-gradient-to-br ${gradients[index]} border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.2)]`}
                  >
                    {/* Icon */}
                    <div className="mb-6 text-black/70">
                      <Icon size={28} strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl text-black/70 font-medium mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-black/60 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </motion.div>

                  {/* Arrow */}
                  {index !== steps.length - 1 && (
                    <div className="mx-6 text-white/40 text-xl">
                      →
                    </div>
                  )}
                </div>
              );
            })}

          </div>

        </div>
      </div>

      {/* ============================= */}
      {/* HIDE SCROLLBAR (IMPORTANT) */}
      {/* ============================= */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}