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
    <section className="py-32 bg-[#f7f7f5] text-black relative overflow-hidden">

      {/* SUBTLE GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] grid grid-cols-12 grid-rows-6">
        {Array.from({ length: 72 }).map((_, i) => (
          <div key={i} className="border border-black/10" />
        ))}
      </div>

      <div className="relative max-w-[1100px] mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-50 mb-4">
            Our Methodology
          </p>

          <h2 className="text-3xl md:text-4xl font-medium">
            A Structured Approach to AV Design
          </h2>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 h-full w-[1px] bg-black/10 -translate-x-1/2" />

          <div className="space-y-24">

            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className="relative grid md:grid-cols-2 items-center"
                >

                  {/* LEFT */}
                  <div className={`${isLeft ? "md:pr-16" : "md:order-2 md:pl-16"}`}>
                    <motion.div
                      initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      viewport={{ once: true }}
                      className="border border-black/10 p-8 bg-white"
                    >
                      <p className="text-[11px] tracking-[0.3em] uppercase opacity-40 mb-3">
                        0{i + 1}
                      </p>

                      <h3 className="text-lg font-medium mb-3">
                        {step.title}
                      </h3>

                      <p className="text-sm opacity-70 leading-relaxed">
                        {step.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* RIGHT EMPTY SPACE */}
                  <div className="hidden md:block" />

                  {/* CENTER NODE */}
                  <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">

                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="w-10 h-10 rounded-full bg-[#b8a882] flex items-center justify-center shadow-md"
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

      {/* SOFT FADE EDGE (PREMIUM TOUCH) */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f7f7f5] to-transparent" />

    </section>
  );
}