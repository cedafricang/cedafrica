"use client";

import { motion } from "framer-motion";
import {
  Settings,
  Compass,
  Building2,
  Cpu,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const sectionData = {
  eyebrow: "Qualification",
  title: "Who This Is For",
  description:
    "This ecosystem is designed for professionals and organizations operating within the built environment and audiovisual space.",

  items: [
    {
      title: "AV Integrators & System Providers",
      desc: "Responsible for the installation and delivery of AV systems, operating within defined standards and execution frameworks.",
      icon: Settings,
    },
    {
      title: "Architects & MEP Consultants",
      desc: "Engage at the design stage to influence system specifications and align AV with architectural and engineering intent.",
      icon: Compass,
    },
    {
      title: "Developers & Contractors",
      desc: "Drive project development and delivery, requiring structured AV systems that integrate seamlessly within the built environment.",
      icon: Building2,
    },
    {
      title: "Technology & Brand Partners",
      desc: "Manufacturers and OEMs providing approved technologies that align with performance standards and system architecture.",
      icon: Cpu,
    },
  ],
};
/* ============================= */
/* COMPONENT */
/* ============================= */

export default function WhoThisIsFor() {
  return (
    <section className="relative py-28 md:py-36 overflow-hidden">

      {/* ============================= */}
      {/* SILVER GRADIENT BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f9f9fa] via-[#f2f2f3] to-[#f9f9fa]" />

      {/* Subtle Grid Texture */}
      <div className="absolute inset-0 opacity-[0.025]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* Soft Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-black/5 rounded-full blur-[120px]" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* ============================= */}
        {/* HEADER */}
        {/* ============================= */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">

          <p className="text-black/40 text-xs uppercase tracking-[0.35em] mb-4">
            {sectionData.eyebrow}
          </p>

          <h2 className="text-3xl md:text-4xl font-light mb-4 text-black">
            {sectionData.title}
          </h2>

          <p className="text-black/60 leading-relaxed">
            {sectionData.description}
          </p>
        </div>

        {/* ============================= */}
        {/* GRID */}
        {/* ============================= */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">

          {sectionData.items.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="group relative p-8 md:p-10 border border-black/10 bg-white/60 backdrop-blur-sm hover:bg-white/80 transition duration-500"
              >

                {/* Top Divider */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-black/10 group-hover:bg-black/20 transition" />

                {/* Icon */}
                <div className="mb-6 text-black/50 group-hover:text-black transition">
                  <Icon size={24} strokeWidth={1.5} />
                </div>

                {/* Title */}
<h3 className="text-lg md:text-xl font-medium text-black/80 leading-snug mb-3">
  {item.title}
</h3>

{/* Description */}
<p className="text-sm text-black/60 leading-relaxed">
  {item.desc}
</p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}