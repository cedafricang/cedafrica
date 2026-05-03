"use client";

import { motion } from "framer-motion";
import {
  Waves,
  Speaker,
  EyeOff,
  Sliders,
  LayoutGrid,
  Building2,
  Utensils,
  Music,
  Coffee,
} from "lucide-react";

/* ============================= */
/* TYPOLOGIES (FROM BROCHURE) */
/* ============================= */

const typologies = [
  {
    title: "Restaurants",
    desc: "Dining environments requiring controlled sound levels, intelligibility, and consistent coverage across tables and service areas.",
    icon: Utensils,
  },
  {
    title: "Bars & Lounges",
    desc: "High-energy spaces where music, DJ systems, and crowd density require structured zoning and controlled sound distribution.",
    icon: Music,
  },
  {
    title: "Cafés",
    desc: "Smaller-scale environments where background music, speech clarity, and acoustic comfort define the experience.",
    icon: Coffee,
  },
  {
    title: "Multi-Zone Venues",
    desc: "Large hospitality environments operating across multiple spaces with unified control and coordinated system behaviour.",
    icon: Building2,
  },
];

/* ============================= */
/* SYSTEM DESIGN (FROM BROCHURE) */
/* ============================= */

const categories = [
  {
    title: "Predictive Design",
    desc: "Every venue is modelled before installation using electro-acoustic simulation. Performance is defined against sound pressure levels, intelligibility, reflection behaviour, and frequency response.",
    items: [
      "EASE electro-acoustic simulation",
      "SPL distribution modelling",
      "Speech Transmission Index (STI)",
      "Echo and reflection behaviour",
      "Frequency response verification",
    ],
    icon: Waves,
  },
  {
    title: "Line-Source Coverage",
    desc: "Primary listening areas are designed using line-array column systems to achieve even sound distribution and maintain intelligibility at level.",
    items: [
      "Even SPL from front to back",
      "Controlled dispersion across zones",
      "Consistent listening experience",
      "Reduced acoustic drop-off",
    ],
    icon: Speaker,
  },
  {
    title: "Visual Discretion",
    desc: "Systems are specified to integrate into the architecture without disrupting the visual intent of the space.",
    items: [
      "Architectural speaker placement",
      "RAL-matched finishes",
      "Integrated subwoofer positioning",
      "Hidden cabling and termination",
    ],
    icon: EyeOff,
  },
  {
    title: "Calibration & Tuning",
    desc: "Final system performance is achieved through calibration after installation, aligning the physical system with the original design model.",
    items: [
      "DSP tuning (EQ, delay, dynamics)",
      "Zone balancing",
      "Day-part programming",
      "Validation against design prediction",
    ],
    icon: Sliders,
  },
  {
    title: "Zoning & System Behaviour",
    desc: "Hospitality venues operate as multiple acoustic environments under a single system, with coordinated behaviour across all spaces.",
    items: [
      "Multi-zone system design",
      "Coherent sound across all areas",
      "Day-to-night operational profiles",
      "Integrated control across zones",
    ],
    icon: LayoutGrid,
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function HospitalitySolutions() {
  return (
    <section className="relative py-28 md:py-36 bg-[#f7f7f5] text-black overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/40 mb-4">
            Hospitality AV Solutions
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Designed for Acoustic Performance
          </h2>

          <p className="text-black/60 leading-relaxed">
            Hospitality environments are acoustic systems. Each project is
            modelled, specified, and calibrated to deliver consistent sound,
            maintain intelligibility, and integrate seamlessly into the
            architectural environment.
          </p>
        </div>

        {/* ================= TYPOLOGIES ================= */}
        <div className="mb-24">

          <h3 className="text-xl font-medium mb-10">
            Project Typologies
          </h3>

          <div className="grid md:grid-cols-4 gap-8">

            {typologies.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group p-6 border border-black/10 bg-white hover:bg-white/80 transition"
                >
                  <div className="mb-4 text-black/50 group-hover:text-black transition">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h4 className="text-sm font-medium mb-2">
                    {item.title}
                  </h4>

                  <p className="text-xs text-black/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

        {/* ================= SYSTEM DESIGN ================= */}
        <div>

          <h3 className="text-xl font-medium mb-12">
            System Design Approach
          </h3>

          <div className="grid md:grid-cols-2 gap-12">

            {categories.map((category, i) => {
              const Icon = category.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="group relative p-10 border border-black/10 bg-white hover:bg-white/80 transition duration-500"
                >

                  {/* TOP LINE */}
                  <div className="absolute top-0 left-0 w-full h-[2px] bg-black/10 group-hover:bg-black transition" />

                  {/* ICON */}
                  <div className="mb-6 text-black/50 group-hover:text-black transition">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  {/* TITLE */}
                  <h3 className="text-lg font-medium mb-3">
                    {category.title}
                  </h3>

                  {/* DESC */}
                  <p className="text-sm text-black/60 mb-6 leading-relaxed">
                    {category.desc}
                  </p>

                  {/* ITEMS */}
                  <div className="space-y-2 text-sm text-black/70">
                    {category.items.map((item, idx) => (
                      <p key={idx}>— {item}</p>
                    ))}
                  </div>

                </motion.div>
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