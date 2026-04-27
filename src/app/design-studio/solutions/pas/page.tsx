"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import PASD from "../../../components/pasd"
import Method from "../../../components/methodology"

export default function ProAVPage() {
  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}

      <section className="bg-[#b8a882] py-32">
        <div className="max-w-[1200px] mx-auto px-8">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] tracking-[0.35em] uppercase opacity-60 mb-6">
              AV Design Studio
            </p>

            <h1 className="text-4xl md:text-5xl text-black font-medium mb-6">
              ProAV Solutions
            </h1>

            <p className="text-sm max-w-[650px] opacity-70 leading-relaxed">
              Enterprise-grade AV system design for corporate, institutional,
              and large-scale environments. Focused on system architecture,
              signal flow clarity, and structured documentation for reliable
              integration and long-term operation.
            </p>
          </motion.div>

        </div>
      </section>


      {/* ================= CASE STUDY ================= */}

      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-4">
              Case Study
            </p>

            <h2 className="text-2xl font-medium mb-4">
              AVMCC Integrated AV System
            </h2>

            <p className="text-sm opacity-70 leading-relaxed mb-6">
              A large-scale AV system designed for institutional use, requiring
              structured signal flow, centralized control, and scalable
              infrastructure across multiple functional spaces.
            </p>

            <p className="text-sm opacity-60">
              The project focused on system architecture, network integration,
              and ensuring reliability across interconnected AV environments.
            </p>
          </div>

          <div className="relative h-[320px] rounded-lg overflow-hidden">
            <Image
              src="/images/projects/amvc.jpeg"
              alt="AVMCC Project"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

        </div>
      </section>


      {/* ================= DESIGN PROCESS ================= */}

      <Method />


      {/* ================= DOCUMENTATION ================= */}

      <PASD />

      {/* ================= SAMPLE DRAWINGS ================= */}

      <section className="py-28 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-8">

          <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-10">
            Sample Drawings
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image src="/images/diagrams/a1.png" alt="" fill />
            </div>

            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image src="/images/diagrams/a2.png" alt="" fill />
            </div>

            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image src="/images/diagrams/a3.png" alt="" fill />
            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="py-32 text-center">
        <div className="max-w-[850px] mx-auto px-8">

          <h2 className="text-2xl font-medium mb-6">
            Start a ProAV Design Project
          </h2>

          <p className="text-sm opacity-70 mb-10">
            Engage CED to design a structured ProAV system with clear system
            architecture, detailed documentation, and integration-ready outputs
            for enterprise environments.
          </p>

          <Link
            href="/engage"
            className="inline-block px-8 py-3 border border-black text-[11px] tracking-[0.35em] uppercase hover:bg-black hover:text-white transition"
          >
            Request ProAV Design Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}