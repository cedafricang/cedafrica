"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  DraftingCompass,
  Cpu,
  Building2,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const pathways = [
  {
    title: "Certified Execution Partner",
    desc: "Delivers systems within defined standards and controlled execution frameworks.",
    points: [
      "Executes CED-defined systems",
      "Operates within strict standards",
      "Works on approved projects only",
    ],
    icon: ShieldCheck,
  },
  {
    title: "Design & Specification Partner",
    desc: "Engages at the design layer to align system intent with project vision.",
    points: [
      "Collaborates at design stage",
      "Aligns system intent with project vision",
      "Works closely with CED design layer",
    ],
    icon: DraftingCompass,
  },
  {
    title: "Technology & Brand Partner",
    desc: "Provides system components aligned with defined performance standards.",
    points: [
      "Provides approved system components",
      "Aligns with performance standards",
      "Integrated into system architecture",
    ],
    icon: Cpu,
  },
  {
    title: "Strategic Development Partner",
    desc: "Engages on large-scale and enterprise-level system development.",
    points: [
      "Works on large-scale projects",
      "Engages early in lifecycle",
      "Aligns long-term with ecosystem",
    ],
    icon: Building2,
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function PartnerPathwaysSection() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">

      {/* ============================= */}
      {/* BACKGROUND IMAGE */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6 text-white">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-20">

          <p className="text-white/40 text-xs uppercase tracking-[0.35em] mb-4">
            Pathways
          </p>

          <h2 className="text-3xl text-white md:text-5xl font-light mb-4">
            Partnership Pathways
          </h2>

          <p className="text-white/60">
            CED operates structured pathways — each aligned with specific roles, responsibilities, and system interactions.
          </p>
        </div>

        {/* ============================= */}
        {/* PATHWAYS */}
        {/* ============================= */}

        <div className="relative">

          {/* CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[1px] bg-white/10" />

          <div className="space-y-20">

            {pathways.map((item, i) => {
              const Icon = item.icon;
              const isLeft = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row ${
                    isLeft ? "md:justify-start" : "md:justify-end"
                  }`}
                >

                  <div className={`w-full md:w-1/2 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>

                    {/* CARD */}
                    <div className="relative p-8 md:p-10 border border-white/10 bg-white/5 backdrop-blur-sm">

                      {/* TOP LINE */}
                      <div className="absolute top-0 left-0 w-full h-[1px] bg-white/10" />

                      {/* ICON */}
                      <div className="mb-6 text-white/50">
                        <Icon size={26} strokeWidth={1.5} />
                      </div>

                      {/* TITLE */}
                      <h3 className="text-xl md:text-2xl font-medium mb-4">
                        {item.title}
                      </h3>

                      {/* DESC */}
                      <p className="text-white/70 mb-6 leading-relaxed">
                        {item.desc}
                      </p>

                      {/* POINTS */}
                      <div className="space-y-2 text-white/60 text-sm">
                        {item.points.map((point, idx) => (
                          <p key={idx}>• {point}</p>
                        ))}
                      </div>

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