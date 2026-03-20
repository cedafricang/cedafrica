"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Route,
  DraftingCompass,
  FileText,
} from "lucide-react";

/* ============================= */
/* DATA */
/* ============================= */

const steps = [
  {
    title: "Engage",
    desc: "Structured intake through the Engage Gateway",
    icon: ClipboardList,
  },
  {
    title: "Define",
    desc: "Project scope and requirements are clearly established",
    icon: Route,
  },
  {
    title: "Design",
    desc: "System architecture and performance are defined",
    icon: DraftingCompass,
  },
  {
    title: "Deliver",
    desc: "Documentation prepared for certified execution",
    icon: FileText,
  },
];

const gradients = [
  "from-[#ffffff] to-[#f3f3f4]",
  "from-[#fafafa] to-[#f0f0f1]",
  "from-[#ffffff] to-[#eeeeef]",
  "from-[#fafafa] to-[#f2f2f3]",
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function HowItWorksSnake() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">

      {/* ============================= */}
      {/* BACKGROUND */}
      {/* ============================= */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-scroll md:bg-fixed"
        style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
      />
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mb-16 text-white">
          <h2 className="text-3xl text-white/70 md:text-5xl font-light mb-4">
            How It Works
          </h2>
          <p className="text-white/70">
            A structured process that defines every system before execution begins.
          </p>
        </div>

        {/* ============================= */}
        {/* DESKTOP FLOW */}
        {/* ============================= */}
        <div className="hidden md:block relative">

          {/* LINE */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-white/10" />

          <div className="grid grid-cols-4 gap-10 relative">

            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative text-center"
                >
                  {/* NODE */}
                  <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-white/50 rounded-full -translate-x-1/2 -translate-y-1/2 z-0" />

                  {/* CARD */}
                  <div className={`relative z-10 mt-10 p-8 bg-gradient-to-br ${gradients[index]} shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/10`}>

                    <div className="mb-4 text-black/70 flex justify-center">
                      <Icon size={26} strokeWidth={1.5} />
                    </div>

                    <h3 className="text-lg font-medium text-black/80 mb-2">
                      {step.title}
                    </h3>

                    <p className="text-sm text-black/60">
                      {step.desc}
                    </p>

                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ============================= */}
        {/* MOBILE SNAKE FLOW */}
        {/* ============================= */}
        <div className="md:hidden relative">

          {/* SVG SNAKE LINE */}
          <svg
            className="absolute left-1/2 top-0 -translate-x-1/2 h-full w-[2px]"
            viewBox="0 0 2 1000"
            preserveAspectRatio="none"
          >
            <path
              d="M1 0 C1 100, 1 200, 1 300 C1 400, 1 500, 1 600 C1 700, 1 800, 1 1000"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              fill="none"
            />
          </svg>

          <div className="space-y-16">

            {steps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`flex ${isLeft ? "justify-start" : "justify-end"}`}
                >
                  <div className="relative w-[85%]">

                    {/* NODE */}
                    <div className="absolute left-1/2 top-6 w-3 h-3 bg-white/50 rounded-full -translate-x-1/2" />

                    {/* CARD */}
                    <div className={`p-6 bg-gradient-to-br ${gradients[index]} shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-white/10`}>

                      <div className="mb-4 text-black/70">
                        <Icon size={24} strokeWidth={1.5} />
                      </div>

                      <h3 className="text-lg font-medium text-black/80 mb-2">
                        {step.title}
                      </h3>

                      <p className="text-sm text-black/60">
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