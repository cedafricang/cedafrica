"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Network,
  Cpu,
  GitBranch,
} from "lucide-react";

const pillars = [
  {
    title: "Governance & Standards",
    desc: "CED defines and enforces system design standards, ensuring consistency, performance, and long-term reliability across all projects.",
    icon: ShieldCheck,
  },
  {
    title: "Certified Partner Ecosystem",
    desc: "All delivery is executed through vetted partners operating under defined frameworks, certifications, and accountability structures.",
    icon: Network,
  },
  {
    title: "Design & Systems Authority",
    desc: "CED operates as the central design authority, ensuring all AV systems are engineered, not improvised.",
    icon: Cpu,
  },
  {
    title: "Structured Engagement Model",
    desc: "Every project enters through a controlled intake system, ensuring proper qualification, routing, and execution alignment.",
    icon: GitBranch,
  },
];

export default function HowCEDWorks() {
  return (
    <section className="relative py-28 text-white overflow-hidden">
      {/* ===== Background Image ===== */}
      <div className="absolute inset-0">
        <img
          src="/images/hero/soni.jpg" // 🔥 use real AV system image
          alt=""
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/85" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        {/* ===== Header ===== */}
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/50">
            Platform Governance
          </p>

          <h2 className="mt-4 text-3xl text-[#b8a882] md:text-5xl font-semibold tracking-tight leading-tight">
            How CED Works
          </h2>

          <p className="mt-6 text-white/70 text-lg leading-relaxed">
            CED operates as a structured platform governing how AV systems are
            designed, delivered, and maintained. Every engagement follows
            defined standards, partner frameworks, and system controls.
          </p>
        </div>

        {/* ===== Grid ===== */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
          {pillars.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group border-r border-b border-white/10 p-10 md:p-12"
              >
                {/* Icon */}
                <div className="mb-6">
                  <Icon
                    size={22}
                    className="text-white/60 group-hover:text-white transition"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-medium tracking-tight">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="mt-6 h-[1px] w-10 bg-white/30 group-hover:w-16 transition-all duration-300" />

                {/* Description */}
                <p className="mt-6 text-[15px] leading-relaxed text-white/70">
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