"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import HASD from "../../../components/hasd"

export default function HospitalityPage() {
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

      <section className="py-28">
        <div className="max-w-[1200px] mx-auto px-8 grid md:grid-cols-2 gap-16">

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

          <div className="relative h-[320px] rounded-lg overflow-hidden">
            <Image
              src="/images/projects/kilala.jpeg"
              alt="Kilala Hospitality"
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
              "Zoning Strategy",
              "System Distribution",
              "Control Integration",
              "Operational Planning",
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

    
        <HASD />


      {/* ================= SAMPLE DRAWINGS ================= */}

      <section className="py-28 bg-[#fafafa]">
        <div className="max-w-[1200px] mx-auto px-8">

          <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-10">
            Sample Drawings
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="relative h-[240px] rounded-lg overflow-hidden">
         <Image src="/images/diagrams/k1.png" alt="" fill />
            </div>

            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image src="/images/diagrams/k2.png" alt="" fill />
            </div>

            <div className="relative h-[240px] rounded-lg overflow-hidden">
              <Image src="/images/diagrams/k3.png" alt="" fill />
            </div>

          </div>

        </div>
      </section>


      {/* ================= CTA ================= */}

      <section className="py-32 text-center">
        <div className="max-w-[800px] mx-auto px-8">

          <h2 className="text-2xl font-medium mb-6">
            Start a Hospitality AV Design Project
          </h2>

          <p className="text-sm opacity-70 mb-10">
            Engage CED to design a structured AV system for your hospitality
            environment, ensuring operational clarity and consistent performance.
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