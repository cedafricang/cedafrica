"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Client Discovery",
    desc: "We begin by understanding the client’s vision, lifestyle needs, functional requirements, and project expectations.",
  },
  {
    title: "Conceptual Design",
    desc: "We develop a clear AV concept—outlining system architecture, experience flow, equipment direction, and coordination requirements.",
  },
  {
    title: "Technical Documentation",
    desc: "We produce detailed drawings, schematics, specifications, and structured plans that guide integrators and design partners.",
  },
  {
    title: "System Performance Verification",
    desc: "We ensure every system performs as designed through validation, calibration oversight, and project sign-off checks.",
  },
];

export default function MethodologyTimeline() {
  return (
    <section className="py-24 md:py-32 bg-[#f7f7f5] text-black relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] grid grid-cols-6 md:grid-cols-12 grid-rows-6">
        {Array.from({ length: 72 }).map((_, i) => (
          <div key={i} className="border border-black/10" />
        ))}
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-16 md:mb-24">
          <p className="text-[10px] md:text-[11px] tracking-[0.35em] uppercase opacity-50 mb-4">
            Our Methodology
          </p>

          <h2 className="text-2xl md:text-4xl font-medium">
            A Structured Approach to AV Design
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* LINE → LEFT on mobile, CENTER on desktop */}
          <div className="
            absolute top-0 h-full w-[1px] bg-black/10
            left-5 md:left-1/2 md:-translate-x-1/2
          " />

          <div className="space-y-16 md:space-y-24">

            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div key={i} className="relative">

                  {/* CARD */}
                  <div
                    className={`
                      ml-14 md:ml-0
                      ${isLeft ? "md:pr-16 md:mr-[50%]" : "md:pl-16 md:ml-[50%]"}
                    `}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      className="border border-black/10 p-6 md:p-8 bg-white"
                    >
                      <p className="text-[10px] md:text-[11px] tracking-[0.3em] uppercase opacity-40 mb-3">
                        0{i + 1}
                      </p>

                      <h3 className="text-base md:text-lg font-medium mb-3">
                        {step.title}
                      </h3>

                      <p className="text-sm opacity-70 leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* NODE */}
                  <div
                    className="
                      absolute top-6
                      left-5 md:left-1/2 md:-translate-x-1/2
                    "
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                      viewport={{ once: true }}
                      className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#b8a882] flex items-center justify-center shadow-md"
                    >
                      <div className="w-2 h-2 bg-black rounded-full" />
                    </motion.div>
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

      {/* FADE EDGE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f7f7f5] to-transparent" />

    </section>
  );
}