"use client";

import { motion } from "framer-motion";
import {
  Layout,
  ShieldCheck,
  Gauge,
  Layers,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "Outcome",
  title: "What This Means For You",
  description:
    "CED removes uncertainty from audiovisual system design and coordination.",

  items: [
    {
      title: "Clear System Definition",
      desc: "AV is fully defined during design — not improvised during execution",
      icon: Layout,
    },
    {
      title: "Reduced Coordination Risk",
      desc: "Early alignment prevents conflicts across disciplines",
      icon: ShieldCheck,
    },
    {
      title: "Performance-Driven Design",
      desc: "Systems are engineered to meet defined outcomes",
      icon: Gauge,
    },
    {
      title: "Seamless Integration",
      desc:
        "AV aligns naturally with architecture and engineering systems",
      icon: Layers,
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

export default function ArchitectsValue() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* ============================= */}
      {/* BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f2f2f3] to-[#f9f9fa]" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Soft Glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/5 rounded-full blur-[120px]" />

      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}
      <div className="relative max-w-3xl mx-auto px-6 text-center mb-20">

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
      {/* VALUE GRID */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">

        {data.items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`p-10 bg-gradient-to-br ${
                gradients[index]
              } border border-black/5 shadow-[0_20px_60px_rgba(0,0,0,0.08)]`}
            >

              {/* Icon */}
              <div className="mb-6 text-black/50">
                <Icon size={26} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-medium text-black/80 mb-4">
                {item.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-[1px] bg-black/20 mb-6" />

              {/* Description */}
              <p className="text-black/60 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}