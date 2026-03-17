"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, Globe } from "lucide-react";

export default function GetStarted() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0A1A3A] via-[#0E2A47] to-[#F97316] py-32" id="contact">
      {/* ===== Background Glow & Orbits ===== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-blue-500/30 blur-[140px]" />
        <div className="absolute bottom-[-200px] right-[-200px] h-[600px] w-[600px] rounded-full bg-orange-500/30 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        {/* ===== Headline ===== */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold leading-tight text-white md:text-5xl"
        >
          Get Started with
          <span className="bg-gradient-to-r from-orange-300 to-orange-500 bg-clip-text text-transparent">
            {" "}TingoGPT
          </span>
        </motion.h2>

        {/* ===== Subtext ===== */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-6 max-w-3xl text-lg text-slate-200"
        >
          Whether you are modernizing operations, scaling intelligence,
          or transforming service delivery—TingoGPT is your AI partner.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-xl font-medium text-white"
        >
          Let’s build AI that delivers results.
        </motion.p>

        {/* ===== CTA Button ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="mailto:enterprise@tingogpt.ai"
            className="inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 font-semibold text-slate-900 shadow-lg transition hover:scale-[1.03]"
          >
            Contact Enterprise Team
            <ArrowRight size={20} />
          </a>
        </motion.div>

        {/* ===== Contact Info ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-3 text-slate-200 sm:flex-row sm:justify-center sm:gap-8"
        >
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>enterprise@tingogpt.ai</span>
          </div>

          <div className="hidden h-4 w-px bg-white/30 sm:block" />

          <div className="flex items-center gap-2">
            <Globe size={16} />
            <span>www.tingogpt.ai</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
