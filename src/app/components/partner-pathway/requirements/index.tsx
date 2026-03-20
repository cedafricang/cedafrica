"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  ShieldCheck,
  Workflow,
  Clock,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const requirements = [
  {
    title: "Proven Experience",
    desc: "Demonstrated expertise within a relevant field or discipline.",
    icon: Briefcase,
  },
  {
    title: "Standards Compliance",
    desc: "Ability to meet defined performance and system standards.",
    icon: ShieldCheck,
  },
  {
    title: "Workflow Alignment",
    desc: "Operate within structured processes and system frameworks.",
    icon: Workflow,
  },
  {
    title: "Long-Term Commitment",
    desc: "Aligned with sustained participation within the ecosystem.",
    icon: Clock,
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function EntryRequirements() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">

      {/* ============================= */}
      {/* BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f2f2f3] to-[#f9f9fa]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-[120px]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">

          <p className="text-black/40 text-xs uppercase tracking-[0.35em] mb-4">
            Requirements
          </p>

          <h2 className="text-3xl md:text-4xl font-light mb-4">
            Entry Requirements
          </h2>

          <p className="text-black/60 leading-relaxed">
            CED maintains strict standards across all partners.
          </p>
        </div>

        {/* ============================= */}
        {/* GRID */}
        {/* ============================= */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-14">

          {requirements.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group"
              >

                {/* Divider */}
                <div className="w-full h-[1px] bg-black/10 mb-6 group-hover:bg-black/20 transition" />

                {/* Row */}
                <div className="flex items-start gap-4">

                  {/* Icon */}
                  <div className="mt-1 text-black/50 group-hover:text-black transition">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg md:text-xl font-medium text-black/80 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-black/60 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                </div>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}