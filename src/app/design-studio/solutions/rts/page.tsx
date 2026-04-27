"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RTSD from "../../../components/rtsd";
import Method from "../../../components/methodology";

const drawings = [
  {
    src: "/images/diagrams/md1.png",
    title: "Multi-Room AV Zoning",
    desc: "Structured distribution of audio and video across multiple living spaces.",
  },
  {
    src: "/images/diagrams/md2.png",
    title: "Infrastructure & Cabling Layout",
    desc: "Planned pathways and system infrastructure for seamless integration.",
  },
  {
    src: "/images/diagrams/md3.png",
    title: "Rack & System Architecture",
    desc: "Centralised equipment layout and system organisation for reliability.",
  },
];

export default function RTSPage() {
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
              Residential Technology Solutions
            </h1>

            <p className="text-sm max-w-[600px] opacity-70 leading-relaxed">
              Structured AV system design for residential environments, covering
              multi-room audio, video distribution, and integrated home
              technologies. Every system is engineered with clarity,
              documentation, and long-term scalability.
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
              Project Mortimer
            </h2>

            <p className="text-sm opacity-70 leading-relaxed mb-6">
              A high-end residential AV system designed to deliver seamless
              multi-room audio, video distribution, and centralized control
              across the property.
            </p>

            <p className="text-sm opacity-60">
              Scope included zoning, infrastructure planning, rack design, and
              system integration strategy.
            </p>
          </div>

          <div className="relative h-[260px] md:h-[320px] rounded-lg overflow-hidden">
            <Image
              src="/images/projects/motimer1.png"
              alt="Project Mortimer"
              fill
              className="object-cover"
            />
          </div>

        </div>
      </section>

      {/* ================= METHODOLOGY ================= */}
      <Method />

      {/* ================= DOCUMENTATION ================= */}
      <RTSD />

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
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

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
            Start a Residential AV Design Project
          </h2>

          <p className="text-sm opacity-70 mb-10">
            Submit your project requirements and engage CED’s design team for
            structured AV system planning and documentation.
          </p>

          <Link
            href="/engage"
            className="inline-block px-8 py-3 border border-black text-[11px] tracking-[0.35em] uppercase hover:bg-black hover:text-white transition"
          >
            Request Design Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}