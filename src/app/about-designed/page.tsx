"use client";

import { motion } from "framer-motion";
import {
  Banknote,
  HeartPulse,
  Wheat,
  Landmark,
  Briefcase,
} from "lucide-react";

const industries = [
  {
    icon: Banknote,
    title: "Financial Services",
    items: [
      "Credit and risk analysis",
      "Fraud detection",
      "Regulatory reporting",
      "Compliance monitoring",
    ],
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    items: [
      "Clinical decision support",
      "Hospital operations optimization",
      "Diagnostics intelligence",
    ],
  },
  {
    icon: Wheat,
    title: "Agriculture",
    items: [
      "Yield forecasting",
      "Supply chain intelligence",
      "Farmer advisory systems",
    ],
  },
  {
    icon: Landmark,
    title: "Government & Public Sector",
    items: [
      "Policy modeling",
      "Service delivery optimization",
      "Citizen data intelligence",
    ],
  },
  {
    icon: Briefcase,
    title: "Enterprise Operations",
    items: [
      "Executive reporting",
      "Process automation",
      "Risk and performance monitoring",
    ],
  },
];

export default function IndustrySolutions() {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* ===== Orbit Background ===== */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="relative h-[700px] w-[700px]">
          {/* Orbit Circle */}
          <div className="absolute inset-0 rounded-full border border-blue-200/40" />

          {/* Rolling Dot */}
          <motion.div
            className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-gradient-to-r from-orange-500 to-blue-500 shadow-lg"
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            style={{
              transformOrigin: "50% 350px",
            }}
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* ===== Header ===== */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-sm font-semibold uppercase tracking-widest text-blue-600"
          >
            Industry Solutions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-3xl font-semibold leading-tight text-slate-900 md:text-4xl"
          >
            Intelligence Tailored
            <br />
            <span className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">
              For High-Impact Industries
            </span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg text-slate-600"
          >
            TingoGPT adapts its intelligence to industry-specific realities—
            enabling better decisions, stronger compliance, and measurable
            outcomes.
          </motion.p>
        </div>

        {/* ===== Industry Grid ===== */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition hover:shadow-md"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-blue-500 text-white">
                <industry.icon size={22} />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {industry.title}
              </h3>

              <ul className="mt-4 space-y-2 text-slate-600">
                {industry.items.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
