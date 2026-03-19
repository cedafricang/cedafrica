"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const steps = [
  {
    id: "01",
    title: "Intake & Qualification",
    points: [
      "All engagements start through the Engage Gateway",
      "Requests are structured, not casual",
      "CED qualifies based on:",
      "Project type",
      "Scale",
      "Stakeholder role",
    ],
  },
  {
    id: "02",
    title: "Routing & Ownership",
    points: [
      "Every request is assigned to the correct internal function:",
      "Design team",
      "Partner team",
      "ProAV systems team",
      "No confusion. No overlap.",
    ],
  },
  {
    id: "03",
    title: "Design & Specification",
    points: [
      "CED defines:",
      "System architecture",
      "Performance standards",
      "Brand alignment",
      "Focus: getting it right before execution",
    ],
  },
  {
    id: "04",
    title: "Partner Execution",
    points: [
      "Certified partners execute the project",
      "CED does NOT randomly assign vendors",
      "Only approved ecosystem players are used",
    ],
  },
  {
    id: "05",
    title: "Governance & Oversight",
    points: [
      "CED maintains:",
      "Standards compliance",
      "System integrity",
      "Performance expectations",
    ],
  },
  {
    id: "06",
    title: "Delivery & Continuity",
    points: [
      "Systems are delivered with:",
      "Documentation",
      "Future scalability",
      "Long-term support alignment",
    ],
  },
];

/* ============================= */
/* GRADIENT VARIANTS (SUBTLE) */
/* ============================= */

const gradients = [
  "from-[#ffffff] to-[#f6f6f7]",
  "from-[#fafafa] to-[#f1f1f2]",
  "from-[#ffffff] to-[#f3f3f4]",
  "from-[#fafafa] to-[#eeeeef]",
  "from-[#ffffff] to-[#f4f4f5]",
  "from-[#fafafa] to-[#f2f2f3]",
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function OperatingModelTimeline() {
  return (
    <section className="relative py-40 overflow-hidden bg-white">

      {/* ============================= */}
      {/* LUXURY BACKGROUND ELEMENTS */}
      {/* ============================= */}

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.035]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:100px_100px]" />
      </div>

      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-black/5 rounded-full blur-[140px]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-28">
          <h2 className="text-4xl md:text-5xl font-light leading-tight">
            The CED Operating Model
          </h2>

          <p className="text-black/60 mt-6">
            A structured system governing every engagement — from initial
            qualification to long-term delivery — ensuring clarity,
            accountability, and performance at every stage.
          </p>
        </div>

        {/* ============================= */}
        {/* TIMELINE */}
        {/* ============================= */}

        <div className="relative">

          {/* Center Line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] bg-black/10" />

          <div className="space-y-28">

            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-3 h-3 bg-black rounded-full z-20" />

                  {/* Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 80 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className={`w-full md:w-[46%] ${
                      isLeft ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div
                      className={`p-8 md:p-10 bg-gradient-to-br ${
                        gradients[index]
                      } border border-black/5`}
                    >
                      {/* Step Number */}
                      <p className="text-black/30 text-xs tracking-[0.3em] mb-4">
                        STEP {step.id}
                      </p>

                      {/* Title */}
                      <h3 className="text-xl text-black/70 md:text-2xl font-medium mb-6">
                        {step.title}
                      </h3>

                      {/* Points */}
                      <ul className="space-y-3 text-black/70 text-sm leading-relaxed">
                        {step.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="mt-[6px] w-1.5 h-1.5 bg-black/40 rounded-full" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}