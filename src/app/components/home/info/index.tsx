"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const actions = [
  {
    title: "Apply for Partner Access",
    desc: "Apply to join the CED partner ecosystem under defined standards and certification pathways.",
    link: "/engage/partner/system-integrators",
  },
  {
    title: "Request Design Consultation",
    desc: "Engage CED for system design, planning, and project-level AV consulting.",
    link: "/engage/design-studio",
  },
  {
    title: "Request Specifier Support",
    desc: "Access technical guidance for AV system specification and early-stage project planning.",
    link: "/engage/specifier/architects",
  },
  {
    title: "Engage PROAV Systems Team",
    desc: "Submit enquiries for enterprise and commercial AV system requirements.",
    link: "/engage/proav",
  },
];

export default function EngageGateway() {
  return (
    <section className="bg-white text-black py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* ===== Header ===== */}
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/40">
            Engage
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            Start an Engagement with CED
          </h2>

          <p className="mt-6 text-black/60 leading-relaxed">
            All engagements are structured through the CED platform. Select the
            appropriate pathway and your request will be routed to the relevant
            team.
          </p>
        </div>

        {/* ===== Divider ===== */}
        <div className="mt-12 h-[1px] w-full bg-black/10" />

        {/* ===== Actions Grid ===== */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 border border-black/10">
          {actions.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border-b border-r border-black/10 p-10 md:p-12"
            >
              <Link href={item.link} className="block h-full">
                {/* Title */}
                <h3 className="text-lg text-black/70 md:text-xl font-medium tracking-tight">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="mt-6 h-[1px] w-10 bg-black/20 group-hover:w-16 transition-all duration-300" />

                {/* Description */}
                <p className="mt-6 text-black/60 text-[15px] leading-relaxed">
                  {item.desc}
                </p>

                {/* CTA */}
                <div className="mt-10 flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.3em] uppercase text-black/50 group-hover:text-black transition">
                    Proceed
                  </span>

                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black/20 group-hover:border-black transition">
                    →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}