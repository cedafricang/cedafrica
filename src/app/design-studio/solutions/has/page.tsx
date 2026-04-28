"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HASD from "../../../components/hasd";
import Method from "../../../components/methodology";

const drawings = [
  {
    src: "/images/diagrams/k1.png",
    title: "Zoning & System Layout",
    desc: "Structured AV zoning across different functional areas.",
  },
  {
    src: "/images/diagrams/k2.png",
    title: "Signal Flow Diagram",
    desc: "End-to-end audio and control signal routing architecture.",
  },
  {
    src: "/images/diagrams/k3.png",
    title: "Infrastructure Planning",
    desc: "Cabling pathways and system integration framework.",
  },
];

export default function HospitalityPage() {
  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="bg-[#b8a882] py-24 md:py-32">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.35em] uppercase opacity-60 mb-6">
              AV Design Studio
            </p>

            <h1 className="text-3xl text-black md:text-5xl font-medium mb-6">
              Hospitality AV Solutions
            </h1>

            <p className="text-sm max-w-[600px] opacity-70 leading-relaxed">
              Distributed AV systems designed for hospitality environments,
              enabling controlled audio zones, consistent performance, and
              operational simplicity across multiple spaces.
            </p>
          </motion.div>

        </div>
      </section>

      {/* ================= CASE STUDY ================= */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8 grid md:grid-cols-2 gap-12 md:gap-16">

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-4">
              Case Study
            </p>

            <h2 className="text-2xl font-medium mb-4">
              Kilala Hospitality Project
            </h2>

            <p className="text-sm opacity-70 leading-relaxed mb-6">
              A multi-zone hospitality AV system designed to deliver consistent
              audio distribution, centralized control, and seamless integration
              across dining and lounge environments.
            </p>

            <p className="text-sm opacity-60">
              The system focused on zoning strategy, equipment planning, and
              ensuring operational efficiency for staff and management.
            </p>
          </div>

          <div className="relative h-[260px] md:h-[320px] rounded-lg overflow-hidden">
            <Image
              src="/images/projects/kilala.jpeg"
              alt="Kilala Hospitality"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= METHODOLOGY ================= */}
      <Method />

      {/* ================= DOCUMENTATION ================= */}
      <HASD />

      {/* ================= SAMPLE DRAWINGS ================= */}
      <section className="py-20 md:py-28 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-8">

          <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-10">
            Sample Drawings
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            {drawings.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative h-[220px] md:h-[260px] rounded-lg overflow-hidden"
              >

                {/* IMAGE */}
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                {/* TEXT */}
                <div className="absolute bottom-0 p-5 md:p-6 text-white">

                  <h3 className="text-sm md:text-base font-medium mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs md:text-sm opacity-80 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-24 md:py-32 text-center">
        <div className="max-w-[800px] mx-auto px-6 md:px-8">

          <h2 className="text-xl md:text-2xl font-medium mb-6">
            Start a Hospitality AV Design Project
          </h2>

          <p className="text-sm opacity-70 mb-10">
            Engage CED to design a structured AV system for your hospitality
            environment, ensuring operational clarity and consistent performance.
          </p>

          <Link
            href="/engage/design-studio"
            className="inline-block px-8 py-3 border border-black text-[11px] tracking-[0.35em] uppercase hover:bg-black hover:text-white transition"
          >
            Request Design Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}