"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/* ============================= */
/* DATA */
/* ============================= */

const data = {
  hero: {
    title: "Contractor Program",
    desc: "A structured framework for contractors and developers working within CED-defined audiovisual systems — ensuring alignment between construction, system design, and final delivery.",
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

  timeline: [
    {
      title: "Project Alignment",
      desc: "Contractors engage early to align construction scope with defined AV system requirements and infrastructure needs.",
      image: "/images/hero/avimage.jpg",
    },
    {
      title: "Infrastructure Coordination",
      desc: "Electrical, spatial, and structural elements are coordinated to support system design and performance.",
      image: "/images/hero/avimage.jpg",
    },
    {
      title: "Execution Integration",
      desc: "Construction execution aligns with system specifications, ensuring readiness for AV deployment.",
      image: "/images/hero/avimage.jpg",
    },
    {
      title: "Delivery Readiness",
      desc: "Projects are handed over with infrastructure properly prepared for system integration and long-term performance.",
      image: "/images/hero/avimage.jpg",
    },
  ],

  value: [
    {
      title: "Reduced Project Risk",
      desc: "Early alignment prevents costly redesigns and execution conflicts.",
    },
    {
      title: "Clear Scope Definition",
      desc: "Defined roles eliminate ambiguity between construction and AV delivery.",
    },
    {
      title: "Seamless System Integration",
      desc: "Projects are built with AV systems in mind from the start.",
    },
    {
      title: "Higher Project Quality",
      desc: "Coordinated execution improves overall delivery standards.",
    },
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page() {
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
            alt="Contractor Program"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/75" />

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
                alt="brand"
                className="h-8 md:h-10 brightness-0 invert opacity-70"
              />
            ))}
          </motion.div>

          <p className="text-white/40 text-xs tracking-widest uppercase text-center mt-6">
            Project & Delivery Ecosystem
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* TIMELINE */}
      {/* ============================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-light mb-4">
              How the Contractor Program Works
            </h2>

            <p className="text-black/60">
              A structured approach ensuring alignment between construction, infrastructure, and AV system delivery.
            </p>
          </div>

          <div className="space-y-28">

            {data.timeline.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-12 ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* IMAGE */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl text-black/70 font-medium mb-4">
                      {item.title}
                    </h3>

                    <p className="text-black/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

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

          <p>CED defines system requirements.</p>

          <div className="w-10 h-[1px] bg-white/40 mx-auto" />

          <p>Contractors deliver aligned infrastructure.</p>

          <div className="w-10 h-[1px] bg-white/40 mx-auto" />

          <p>Projects are prepared for seamless system integration.</p>

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
          Apply for Contractor Partnership
        </h2>

        <p className="text-white/60 mb-10">
          Entry into the Contractor Program is structured, evaluated, and aligned with project standards.
        </p>

        <a
          href="/engage?type=contractor"
          className="border px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Enter the System
        </a>

      </section>

    </main>
  );
}