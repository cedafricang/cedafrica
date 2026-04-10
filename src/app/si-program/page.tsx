"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ShieldCheck,
  ClipboardCheck,
  Layers,
  Settings,
  Network,
  CheckCircle,
} from "lucide-react";

const icons = [
  ShieldCheck,
  ClipboardCheck,
  Layers,
  Settings,
  Network,
  CheckCircle,
];

/* ============================= */
/* DATA */
/* ============================= */

const data = {
  hero: {
    title: "SI Program",
    desc: "A structured certification system for system integrators operating within defined standards, governance frameworks, and performance-driven delivery models.",
    image: "/images/hero/si.webp",
  },

  partners: [
    "/images/partners/baron.svg",
    "/images/partners/avantis.svg",
    "/images/partners/ca.svg",
    "/images/partners/gabonn.svg",
    "/images/partners/idlewoods.svg",
    "/images/partners/jam.svg",
    "/images/partners/saota.svg",
    "/images/partners/spectra.svg",
    "/images/partners/topklan.svg",
    "/images/partners/triangle.svg",
    "/images/partners/wse.svg",
  ],

  timeline: [
    {
      title: "Qualification",
      desc: "Integrators are evaluated based on technical capability, project experience, and alignment with defined system standards.",
      image: "/images/hero/avimage.jpg",
    },
    {
      title: "Certification",
      desc: "Approved integrators are certified to operate within the CED system under controlled execution frameworks.",
      image: "/images/hero/avimage.jpg",
    },
    {
      title: "System Alignment",
      desc: "Integrators are aligned with CED-defined architectures, workflows, and performance expectations.",
      image: "/images/hero/avimage.jpg",
    },
    {
      title: "Execution Under Governance",
      desc: "All system delivery is executed under structured oversight, ensuring consistency and performance.",
      image: "/images/hero/avimage.jpg",
    },
  ],

  value: [
    {
      title: "Access to Structured Projects",
      desc: "Work on qualified projects within a controlled system environment.",
    },
    {
      title: "Defined Execution Role",
      desc: "Operate with clarity within a governed system architecture.",
    },
    {
      title: "Performance Consistency",
      desc: "Deliver systems aligned with defined standards across all projects.",
    },
    {
      title: "Long-Term Ecosystem Position",
      desc: "Build sustained relevance within a structured AV ecosystem.",
    },
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page() {
  /* SAFE SCROLL (NO HYDRATION ISSUES) */
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white text-black">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section className="relative h-screen flex items-center overflow-hidden">

        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={data.hero.image}
            className="w-full h-full object-cover"
            alt="SI Program"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl text-white md:text-7xl font-light max-w-4xl leading-tight">
            {data.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-white/80 text-lg">
            {data.hero.desc}
          </p>
        </div>

        {/* ============================= */}
        {/* MARQUEE */}
        {/* ============================= */}
        <div className="absolute bottom-0 w-full pb-10 overflow-hidden">

          {/* Fade edges */}
          <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex gap-20 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {loopPartners.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="partner"
                className="h-4 md:h-6 brightness-0 invert opacity-70"
              />
            ))}
          </motion.div>

          <p className="text-white/40 text-xs tracking-widest uppercase text-center mt-6">
            Certified Partner Network
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* TIMELINE */}
      {/* ============================= */}
      <section className="py-24 md:py-32 bg-white text-black">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
            How the SI Program Works
          </h2>

          <p className="text-black/50 text-base md:text-lg leading-relaxed">
            A structured pathway from qualification to execution within a governed system.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* MOBILE LINE (aligned to icon center) */}
          <div className="absolute left-[20px] top-0 w-[1px] h-full bg-black/10 md:hidden" />

          {/* DESKTOP CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-black/10" />

          <div className="space-y-16 md:space-y-28">
            {data.timeline.map((item: any, i: number) => {
              const isLeft = i % 2 === 0;
              const Icon = icons[i % icons.length];

              return (
                <div key={i} className="relative">

                  {/* ================= MOBILE ================= */}
                  <div className="md:hidden flex items-start gap-5">

                    {/* ICON */}
                    <div className="relative flex-shrink-0 w-10 h-10">
                      <div className="absolute inset-0 rounded-full bg-black/5 blur-sm" />
                      <div className="relative w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm">
                        <Icon size={16} className="text-black/70" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="max-w-[85%]"
                    >
                      <div className="text-black/10 text-4xl font-light mb-1">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <h3 className="text-lg font-medium text-black/80 mb-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-black/50 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* ================= DESKTOP ================= */}
                  <div className="hidden md:flex items-start">

                    {/* LEFT */}
                    <div className={`w-1/2 pr-14 ${isLeft ? "" : "invisible"}`}>
                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: -40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="text-right max-w-md ml-auto"
                        >
                          <div className="text-black/10 text-5xl font-light mb-2">
                            {String(i + 1).padStart(2, "0")}
                          </div>

                          <h3 className="text-xl font-medium text-black/80 mb-3 leading-snug">
                            {item.title}
                          </h3>

                          <p className="text-black/50 leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* CENTER ICON */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-14 h-14 rounded-full bg-black/5 blur-sm" />
                        <div className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-sm">
                          <Icon size={18} className="text-black/70" />
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className={`w-1/2 pl-14 ${!isLeft ? "" : "invisible"}`}>
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 40 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                          className="max-w-md"
                        >
                          <div className="text-black/10 text-5xl font-light mb-2">
                            {String(i + 1).padStart(2, "0")}
                          </div>

                          <h3 className="text-xl font-medium text-black/80 mb-3 leading-snug">
                            {item.title}
                          </h3>

                          <p className="text-black/50 leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
      {/* ============================= */}
      {/* SYSTEM STATEMENT */}
      {/* ============================= */}
      <section className="relative h-[70vh] flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6 space-y-6">
          <p>CED defines the system.</p>

          <div className="w-10 h-[1px] bg-white/40 mx-auto" />

          <p>Certified integrators execute.</p>

          <div className="w-10 h-[1px] bg-white/40 mx-auto" />

          <p>Every system is delivered within governance.</p>
        </div>
      </section>

      {/* ============================= */}
      {/* VALUE */}
      {/* ============================= */}
      <section className="py-28 bg-gradient-to-b from-[#f8f8f9] to-[#f1f1f2]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          {data.value.map((item, i) => (
            <div key={i} className="border-t border-black/10 pt-6">
              <h3 className="text-xl text-black/70 font-medium mb-2">
                {item.title}
              </h3>
              <p className="text-black/60">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ============================= */}
      {/* CTA */}
      {/* ============================= */}
      <section className="py-28 text-center bg-[#1c1c1e] text-white">

        <h2 className="text-3xl text-white font-light mb-6">
          Apply for SI Certification
        </h2>

        <p className="text-white/60 mb-10">
          Entry into the SI Program is structured, evaluated, and controlled.
        </p>

        <a
          href="/engage?type=si-program"
          className="border px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Apply Through Engage Gateway
        </a>

      </section>

    </main>
  );
}