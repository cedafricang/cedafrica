"use client";

import { motion } from "framer-motion";
import {
  Send,
  SearchCheck,
  Layers,
  ShieldCheck,
  Activity,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "System",
  title: "How We Operate",
  description:
    "CED operates through a structured system — not informal engagement.",

  steps: [
    {
      title: "Engage Gateway",
      desc: "All engagements begin through the Engage Gateway — structured, not informal.",
      icon: Send,
    },
    {
      title: "Qualification & Routing",
      desc: "Projects are qualified and routed internally based on scope, scale, and stakeholders.",
      icon: SearchCheck,
    },
    {
      title: "System Definition",
      desc: "Systems are fully defined — architecture, performance, and integration — before execution begins.",
      icon: Layers,
    },
    {
      title: "Governed Execution",
      desc: "Certified partners deliver systems under defined standards and controlled frameworks.",
      icon: ShieldCheck,
    },
    {
      title: "Lifecycle Performance",
      desc: "System performance is maintained across delivery and long-term operation.",
      icon: Activity,
    },
  ],

  image: "/images/hero/avimage.jpg",
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function HowWeOperate() {
  return (
    <section className="relative py-40 overflow-hidden">

      {/* ============================= */}
      {/* FIXED BACKGROUND */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${data.image})` }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-black/85" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/85 to-black/95" />

      {/* CENTER GLOW */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[600px] h-[600px] bg-white/5 blur-[120px] rounded-full" />
      </div>

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6 text-white">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <p className="text-white/40 uppercase tracking-[0.4em] text-xs mb-6">
            {data.eyebrow}
          </p>

          <h2 className="text-4xl text-white md:text-5xl font-light mb-6">
            {data.title}
          </h2>

          <p className="text-white/60">
            {data.description}
          </p>
        </div>

        {/* ============================= */}
        {/* TIMELINE */}
        {/* ============================= */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-white/10" />

          <div className="space-y-28">

            {data.steps.map((step, i) => {
              const Icon = step.icon;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                >

                  {/* ============================= */}
                  {/* TEXT CARD */}
                  {/* ============================= */}
                  <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="w-full md:w-1/2 px-6"
                  >
                    <div className="p-8 border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_20px_60px_rgba(0,0,0,0.3)]">

                      {/* ICON */}
                      <div className="mb-4 text-white/60">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-xl mb-3">
                        {step.title}
                      </h3>

                      {/* DESC */}
                      <p className="text-white/60 text-sm leading-relaxed">
                        {step.desc}
                      </p>

                    </div>
                  </motion.div>

                  {/* ============================= */}
                  {/* CENTER NODE */}
                  {/* ============================= */}
                  <div className="absolute left-1/2 -translate-x-1/2">

                    <div className="w-4 h-4 rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.4)]" />

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}