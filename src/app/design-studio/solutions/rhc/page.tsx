"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import RHCD from "../../../components/rhcd"

export default function CinemaPage() {
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

            <h1 className="text-4xl text-black md:text-5xl font-medium mb-6">
              Reference Home Cinema
            </h1>

            <p className="text-sm max-w-[600px] opacity-70 leading-relaxed">
              High-performance cinema environments engineered for acoustic
              precision, immersive playback, and system calibration. Every
              element is designed to meet reference-level performance standards.
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
              Soundhous Reference Cinema
            </h2>

            <p className="text-sm opacity-70 leading-relaxed mb-6">
              A purpose-built cinema environment designed to deliver reference
              audio and visual performance through precision speaker placement,
              acoustic treatment, and system calibration planning.
            </p>

            <p className="text-sm opacity-60">
              The project focused on achieving accurate sound reproduction,
              optimal sightlines, and seamless integration of AV systems within
              architectural constraints.
            </p>
          </div>

          <div className="relative h-[320px] rounded-lg overflow-hidden">
            <Image
              src="/images/projects/cinema.jpg"
              alt="Soundhous Cinema"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

        </div>
      </section>


      {/* ================= DESIGN PROCESS ================= */}

      <section className="py-28 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-8">

          <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-10">
            Design Process
          </p>

          <div className="grid md:grid-cols-4 gap-12">

            {[
              "Acoustic Modelling",
              "Speaker Positioning",
              "Sightline Planning",
              "System Calibration Strategy",
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <p className="text-[11px] opacity-40 mb-3">
                  0{i + 1}
                </p>

                <h3 className="text-sm font-medium">
                  {step}
                </h3>
              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* ================= DOCUMENTATION ================= */}

      <RHCD />

      {/* ================= SAMPLE DRAWINGS ================= */}

      <section className="py-28 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-8">

          <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-10">
            Sample Drawings
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image src="/images/diagrams/sd1.png" alt="" fill />
            </div>

            <div className="relative h-[240px] rounded-lg overflow-hidden">
                <Image src="/images/diagrams/sd2.png" alt="" fill />
            </div>

            <div className="relative h-[240px] rounded-lg overflow-hidden">
               <Image src="/images/diagrams/sd3.png" alt="" fill />
            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="py-32 text-center">
        <div className="max-w-[800px] mx-auto px-8">

          <h2 className="text-2xl font-medium mb-6">
            Start a Cinema Design Project
          </h2>

          <p className="text-sm opacity-70 mb-10">
            Engage CED to design a reference-level cinema environment with
            precision planning, acoustic modelling, and full technical
            documentation.
          </p>

          <Link
            href="/engage"
            className="inline-block px-8 py-3 border border-black text-[11px] tracking-[0.35em] uppercase hover:bg-black hover:text-white transition"
          >
            Request Cinema Design Consultation
          </Link>

        </div>
      </section>

    </main>
  );
}