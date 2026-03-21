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
    <section className="relative py-24 md:py-36 overflow-hidden bg-[#0f0f10] text-white">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* SOFT GLOW */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">

          <p className="text-white/40 text-xs uppercase tracking-[0.35em] mb-4">
            Process
          </p>

          <h2 className="text-3xl text-white md:text-5xl font-light mb-4">
            How Partnership Works
          </h2>

          <p className="text-white/60">
            All partnerships operate within a structured system — ensuring clarity, accountability, and performance.
          </p>
        </div>

        {/* FLOW */}
        <div className="relative">

          {/* DESKTOP LINE */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-[1px] bg-white/10" />

          {/* MOBILE VERTICAL LINE */}
          <div className="md:hidden absolute top-0 bottom-0 left-5 w-[1px] bg-white/10" />

          {/* GRID / STACK */}
          <div className="flex flex-col md:grid md:grid-cols-4 gap-10 md:gap-8">

            {steps.map((step, i) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="relative flex md:block"
                >

                  {/* DESKTOP NODE */}
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-2 h-2 bg-white/40 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />

                  {/* MOBILE + DESKTOP CONTENT */}
                  <div className="relative z-10 flex md:block gap-4 md:gap-0">

                    {/* ICON (MOBILE TIMELINE STYLE) */}
                    <div className="relative flex flex-col items-center">
                      <div className="w-10 h-10 flex items-center justify-center border border-white/20 rounded-full bg-white/5">
                        <Icon size={18} strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* CARD */}
                    <div className="flex-1 p-5 md:p-8 border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition duration-500">

                      <h3 className="text-lg md:text-xl font-medium mb-2">
                        {step.title}
                      </h3>

                      <p className="text-white/60 text-sm leading-relaxed">
                        {step.desc}
                      </p>

                    </div>

                  </div>
                </motion.div>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}