"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "Process",
  title: "How We Integrate Into Your Process",
  description:
    "CED operates alongside architects and consultants as part of the design and coordination workflow — ensuring audiovisual systems are properly defined and aligned.",

  steps: [
    {
      title: "Design Stage",
      points: [
        "AV system requirements are defined alongside architectural layouts",
        "Space planning accounts for system performance",
        "Equipment locations and integration points are structured",
      ],
    },
    {
      title: "Engineering Coordination",
      points: [
        "Alignment with electrical, mechanical, and data infrastructure",
        "Load requirements, cabling pathways, and ventilation considerations",
        "Conflict prevention across disciplines",
      ],
    },
    {
      title: "Documentation & Specification",
      points: [
        "System schematics and layouts",
        "Performance standards and equipment specification",
        "Clear documentation for execution teams",
      ],
    },
    {
      title: "Project Alignment",
      points: [
        "Continuous coordination across stakeholders",
        "Ensuring system intent is maintained throughout the project lifecycle",
      ],
    },
  ],
};

const gradients = [
  "from-[#ffffff] to-[#f3f3f4]",
  "from-[#fafafa] to-[#f0f0f1]",
  "from-[#ffffff] to-[#eeeeef]",
  "from-[#fafafa] to-[#f2f2f3]",
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ArchitectsProcess() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* ============================= */}
      {/* BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f2f2f3] to-[#f9f9fa]" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}
      <div className="relative max-w-3xl mx-auto px-6 text-center mb-24">

        <p className="text-black/40 text-xs uppercase tracking-[0.35em] mb-6">
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
      {/* TIMELINE */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* vertical line */}
        <div className="hidden md:block absolute left-1/2 top-0 w-[1px] h-full bg-black/10" />

        <div className="space-y-24">

          {data.steps.map((step, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  isLeft ? "" : "md:flex-row-reverse"
                }`}
              >

                {/* CONTENT CARD */}
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`w-full md:w-1/2 p-10 bg-gradient-to-br ${
                    gradients[index]
                  } border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]`}
                >

                  {/* title */}
                  <h3 className="text-xl md:text-2xl font-medium mb-6 text-black/80">
                    {step.title}
                  </h3>

                  {/* divider */}
                  <div className="w-10 h-[1px] bg-black/20 mb-6" />

                  {/* points */}
                  <div className="space-y-4 text-black/60 text-sm leading-relaxed">
                    {step.points.map((point, i) => (
                      <p key={i} className="flex gap-3">
                        <span className="text-black/30">—</span>
                        {point}
                      </p>
                    ))}
                  </div>

                </motion.div>

                {/* CENTER NODE */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                  <div className="w-3 h-3 bg-black rounded-full" />
                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}