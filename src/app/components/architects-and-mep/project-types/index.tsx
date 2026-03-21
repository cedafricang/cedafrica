"use client";

import { motion } from "framer-motion";
import {
  Home,
  Building2,
  Hotel,
  Briefcase,
  Layers,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  eyebrow: "Applications",
  title: "Project Applications",

  items: [
    {
      title: "Residential Developments",
      icon: Home,
    },
    {
      title: "Commercial Buildings",
      icon: Building2,
    },
    {
      title: "Hospitality Projects",
      icon: Hotel,
    },
    {
      title: "Corporate & Enterprise Spaces",
      icon: Briefcase,
    },
    {
      title: "Mixed-Use Developments",
      icon: Layers,
    },
  ],
};

const gradients = [
  "from-[#ffffff] to-[#f6f6f7]",
  "from-[#fafafa] to-[#f1f1f2]",
  "from-[#ffffff] to-[#f0f0f1]",
  "from-[#fafafa] to-[#f3f3f4]",
  "from-[#ffffff] to-[#eeeeef]",
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ArchitectsProjects() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* ============================= */}
      {/* BACKGROUND (WHITE LUXURY) */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-white" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Soft Glow */}
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-black/5 rounded-full blur-[120px]" />

      {/* ============================= */}
      {/* HEADER */}
      {/* ============================= */}
      <div className="relative max-w-3xl mx-auto px-6 text-center mb-20">

        <p className="text-black/40 text-xs uppercase tracking-[0.35em] mb-6">
          {data.eyebrow}
        </p>

        <h2 className="text-4xl md:text-5xl font-light">
          {data.title}
        </h2>

      </div>

      {/* ============================= */}
      {/* GRID */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6 grid sm:grid-cols-2 md:grid-cols-3 gap-8">

        {data.items.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={`p-8 bg-gradient-to-br ${
                gradients[index]
              } border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition`}
            >

              {/* Icon */}
              <div className="mb-5 text-black/50">
                <Icon size={26} strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-black/80 font-medium text-lg leading-snug">
                {item.title}
              </h3>

            </motion.div>
          );
        })}

      </div>
    </section>
  );
}