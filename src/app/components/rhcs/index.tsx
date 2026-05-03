"use client";

import { motion } from "framer-motion";
import {
  Ruler,
  Volume2,
  Layers,
  Subtitles,
  Speaker,
  CheckCircle,
} from "lucide-react";

/* ============================= */
/* SIX CONDITIONS (PAGE 3) */
/* ============================= */

const conditions = [
  {
    title: "Room Geometry & Seating",
    desc: "Room dimensions, ceiling height, screen position and reference seating position are resolved at architectural stage.",
    icon: Ruler,
  },
  {
    title: "Acoustic Isolation",
    desc: "Ambient noise controlled to NCB 22 through isolated wall, floor, ceiling assemblies and HVAC specification.",
    icon: Volume2,
  },
  {
    title: "Acoustic Envelope",
    desc: "RT60 targeted between 0.2–0.5 seconds using calculated absorption, diffusion and bass control.",
    icon: Layers,
  },
  {
    title: "Bass Management",
    desc: "Multi-subwoofer layout designed for modal control with in-room bass extension to 20Hz at reference level.",
    icon: Subtitles,
  },
  {
    title: "Speaker Layout & Aiming",
    desc: "Minimum 15 discrete channels placed within defined angles relative to the reference seating position.",
    icon: Speaker,
  },
  {
    title: "Calibration & Verification",
    desc: "Final system performance measured against Level 3 targets before sign-off.",
    icon: CheckCircle,
  },
];

/* ============================= */
/* DESIGN DISCIPLINE (PAGE 5) */
/* ============================= */

const phases = [
  {
    title: "Room Geometry",
    desc: "Volume, proportion, sightlines and seating layout resolved against viewing criteria.",
  },
  {
    title: "Acoustic Isolation",
    desc: "Wall, floor, ceiling and HVAC systems specified for required isolation performance.",
  },
  {
    title: "Acoustic Envelope",
    desc: "Absorption, diffusion and bass trapping designed against RT60 targets.",
  },
  {
    title: "Speaker Layout & Aiming",
    desc: "7.x.4 immersive layout positioned and documented relative to the reference seating position.",
  },
  {
    title: "Bass & LFE",
    desc: "Subwoofer placement and phase optimized for modal control and consistent response.",
  },
  {
    title: "Calibration & Sign-Off",
    desc: "Measurement, verification and formal sign-off against RP22 Level 3 performance.",
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function CinemaSolutions() {
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
            Reference Home Cinema
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Calibrated. Not Configured.
          </h2>

          <p className="text-black/60 leading-relaxed">
            A reference cinema is engineered against an absolute standard.
            Geometry, acoustics, speaker placement and calibration are
            designed and verified before handover.
          </p>
        </div>

        {/* ================= STANDARD ================= */}
        <div className="mb-24 border border-black/10 p-10 bg-white">

          <h3 className="text-xl font-medium mb-4">
            CEDIA / CTA-RP22 Standard
          </h3>

          <p className="text-sm text-black/60 leading-relaxed mb-6">
            Four performance levels define objective cinema standards. Every
            CED cinema is designed to Level 3 — meeting or exceeding reference
            commercial cinema performance.
          </p>

          <div className="grid md:grid-cols-4 gap-6 text-sm">

            <div>
              <p className="opacity-40 mb-1">Level 1</p>
              <p>Entry performance</p>
            </div>

            <div>
              <p className="opacity-40 mb-1">Level 2</p>
              <p>Premium performance</p>
            </div>

            <div className="border border-black p-4">
              <p className="opacity-40 mb-1">Level 3</p>
              <p className="font-medium">Reference (CED Target)</p>
            </div>

            <div>
              <p className="opacity-40 mb-1">Level 4</p>
              <p>Ultimate performance</p>
            </div>

          </div>

        </div>

        {/* ================= CONDITIONS ================= */}
        <div className="mb-24">

          <h3 className="text-xl font-medium mb-12">
            Six Conditions of Reference Performance
          </h3>

          <div className="grid md:grid-cols-2 gap-10">

            {conditions.map((item, i) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="p-10 border border-black/10 bg-white"
                >
                  <div className="mb-6 text-black/50">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>

                  <h3 className="text-lg font-medium mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-black/60 leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}

          </div>

        </div>

        {/* ================= DESIGN DISCIPLINE ================= */}
        <div>

          <h3 className="text-xl font-medium mb-12">
            Design Discipline
          </h3>

          <div className="grid md:grid-cols-3 gap-10">

            {phases.map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                viewport={{ once: true }}
                className="p-8 border border-black/10 bg-white"
              >
                <p className="text-[11px] tracking-[0.3em] uppercase opacity-40 mb-3">
                  0{i + 1}
                </p>

                <h4 className="text-base font-medium mb-2">
                  {phase.title}
                </h4>

                <p className="text-sm text-black/60 leading-relaxed">
                  {phase.desc}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

      </div>

      {/* FADE EDGE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f7f7f5] to-transparent" />

    </section>
  );
}