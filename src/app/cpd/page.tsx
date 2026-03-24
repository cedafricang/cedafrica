"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  GraduationCap,
  Wrench,
  Users,
  Building2,
  Calendar,
  Globe,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  hero: {
    eyebrow: "Learning",
    title: "CPD Learning & Events",
    description:
      "Structured learning programs and technical sessions designed to align professionals with real-world system design, coordination, and performance standards.",
    subtext: "Not all knowledge is equal. Ours is structured.",
    image: "/images/hero/avimage.jpg",
  },

  partners: [
    "/images/partners/sonos.svg",
    "/images/partners/focal.svg",
    "/images/partners/naim.svg",
    "/images/partners/k-array.svg",
    "/images/partners/sonance.svg",
    "/images/partners/trinnov.svg",
  ],

  formats: [
    { title: "CPD Sessions", icon: GraduationCap },
    { title: "Technical Workshops", icon: Wrench },
    { title: "Industry Sessions", icon: Users },
    { title: "Private Sessions", icon: Building2 },
  ],

  sessions: [
    {
      title: "AV Integration for Architects",
      meta: "CPD Session · Physical (Lagos) · [Date]",
      desc: "Integrating audiovisual systems into architectural design and coordination.",
      cta: "Enroll",
    },
    {
      title: "Designing Performance-Driven AV Systems",
      meta: "Technical Workshop · Virtual · [Date]",
      desc: "System architecture, performance standards, and execution logic.",
      cta: "Reserve Spot",
    },
    {
      title: "AV Coordination with MEP Systems",
      meta: "CPD Session · Hybrid · [Date]",
      desc: "Aligning AV with electrical, mechanical, and data systems.",
      cta: "Enroll",
    },
    {
      title: "Private CPD for Firms",
      meta: "Private Session · On Request",
      desc: "Tailored sessions aligned with your team or project.",
      cta: "Request Session",
    },
  ],

  value: [
    "Clear understanding of AV system design",
    "Reduced coordination risk",
    "Alignment with industry standards",
    "Practical, applicable knowledge",
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function CPDPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white text-black">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section className="relative h-screen flex items-center overflow-hidden">

        <motion.div style={{ scale }} className="absolute inset-0">
          <img src={data.hero.image} className="w-full h-full object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/90" />

        <div className="relative z-10 w-full">
          <div className="max-w-7xl mx-auto px-6 flex justify-end">

            <div className="max-w-xl text-right text-white">
              <p className="text-white/50 text-xs tracking-[0.35em] uppercase mb-6">
                {data.hero.eyebrow}
              </p>

              <h1 className="text-5xl text-white md:text-7xl font-light leading-tight">
                {data.hero.title}
              </h1>

              <p className="mt-6 text-white/80">
                {data.hero.description}
              </p>

              <p className="mt-4 text-white/50 text-sm">
                {data.hero.subtext}
              </p>
            </div>

          </div>
        </div>

        {/* MARQUEE */}
        <div className="absolute bottom-0 w-full pb-10 overflow-hidden">
          <motion.div
            className="flex gap-20 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {loopPartners.map((logo, i) => (
              <img key={i} src={logo} className="h-8 brightness-0 invert opacity-70" />
            ))}
          </motion.div>

          <p className="text-white/40 text-xs text-center mt-6 uppercase tracking-widest">
            Learning Ecosystem
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* INTRO (SHORT) */}
      {/* ============================= */}
      <section className="py-24 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-3xl font-light mb-4">
          Structured Learning
        </h2>
        <p className="text-black/60">
          CED delivers curated learning sessions based on real system design, project experience, and defined standards.
        </p>
      </section>

      {/* ============================= */}
      {/* FORMATS */}
      {/* ============================= */}
      <section className="py-20 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-8">

          {data.formats.map((item, i) => {
            const Icon = item.icon;

            return (
              <div key={i} className="text-center">
                <Icon className="mx-auto mb-4 text-black/50" size={28} />
                <p className="text-black/70">{item.title}</p>
              </div>
            );
          })}

        </div>
      </section>

      {/* ============================= */}
      {/* SESSIONS */}
      {/* ============================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">
              Available Sessions
            </h2>
            <p className="text-black/60">
              Sessions available for enrollment or request.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {data.sessions.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-8 border border-black/10 shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl text-black/70 font-medium mb-2">
                  {s.title}
                </h3>

                <p className="text-sm text-black/40 mb-4">
                  {s.meta}
                </p>

                <p className="text-black/60 mb-6">
                  {s.desc}
                </p>

                <a className="border px-6 py-2 text-sm hover:bg-black hover:text-white transition">
                  {s.cta}
                </a>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ============================= */}
      {/* VALUE */}
      {/* ============================= */}
      <section className="py-24 bg-gradient-to-b from-[#f9f9fa] to-[#f2f2f3] text-center">
        <div className="max-w-4xl mx-auto px-6 space-y-4">
          <h2 className="text-3xl font-light mb-6">
            Why It Matters
          </h2>

          {data.value.map((v, i) => (
            <p key={i} className="text-black/60">
              {v}
            </p>
          ))}
        </div>
      </section>

      {/* ============================= */}
      {/* CTA */}
      {/* ============================= */}
      <section className="py-28 text-center bg-[#1c1c1e] text-white">
        <h2 className="text-4xl text-white mb-6">
          Request a Session
        </h2>

        <p className="text-white/60 mb-10">
          All sessions are structured through the Engage Gateway.
        </p>

        <div className="flex justify-center gap-6 flex-wrap">
          <a className="border px-8 py-3 hover:bg-white hover:text-black transition">
            Request CPD Session
          </a>
          <a className="border px-8 py-3 hover:bg-white hover:text-black transition">
            Book Workshop
          </a>
          <a className="border px-8 py-3 hover:bg-white hover:text-black transition">
            Engage with CED
          </a>
        </div>
      </section>

    </main>
  );
}