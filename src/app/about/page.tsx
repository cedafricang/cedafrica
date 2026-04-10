"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Who from "../components/about/who";
import Why from "../components/about/why";
import What from "../components/about/what";
import How from "../components/about/how";
import Work from "../components/about/work";
import Cta from "../components/about/cta";

import {
  Layers,
  Network,
  ShieldCheck,
  Building2,
  Target,
  Eye,
  Workflow,
} from "lucide-react";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  hero: {
    eyebrow: "About",
    title: "CED Africa",
    desc: "CED Africa operates as the structured layer defining how audiovisual systems are designed, specified, and delivered — introducing standards, governance, and performance into a fragmented industry.",
    subtext: "Not a contractor. Not a vendor. A system.",
    image: "/images/hero/h5.webp",
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

  origin: {
    title: "Our Origin",
    desc: "CED Africa was established in 2023 with a clear objective — to redefine how audiovisual systems are approached within the built environment.",
    body: [
      "The industry lacked structure.",
      "Projects were executed without defined standards.",
      "System performance depended on vendors, not frameworks.",
      "There was no governing layer ensuring consistency.",
      "",
      "CED was created to introduce that missing layer — a structured system that defines, aligns, and governs audiovisual delivery from design to execution.",
    ],
  },

  vision: {
    title: "Vision",
    desc: "To establish a structured, standards-driven audiovisual ecosystem across Africa — where systems are defined, delivered, and maintained with clarity, consistency, and performance certainty.",
  },

  mission: {
    title: "Mission",
    desc: "To redefine audiovisual system delivery by introducing design-led thinking, structured processes, certified partner ecosystems, and governance frameworks that ensure every system performs as intended.",
  },

  philosophy: [
    "Systems must be defined before execution",
    "Performance is engineered, not assumed",
    "Coordination is not optional — it is critical",
    "Execution must operate within standards",
  ],

  functions: [
    {
      title: "System Design & Specification",
      desc: "Defining system architecture, performance benchmarks, and integration logic.",
      icon: Layers,
    },
    {
      title: "AV Consulting",
      desc: "Supporting architects, engineers, and developers with structured AV planning.",
      icon: Network,
    },
    {
      title: "Partner Ecosystem",
      desc: "Managing certified partners that execute within defined frameworks.",
      icon: Building2,
    },
    {
      title: "Governance & Oversight",
      desc: "Ensuring systems are delivered with integrity and performance alignment.",
      icon: ShieldCheck,
    },
  ],

  timeline: [
    {
      title: "2023 — Foundation",
      desc: "CED Africa was established to introduce structure into the AV industry.",
    },
    {
      title: "System Development",
      desc: "Frameworks for design, execution, and governance were defined.",
    },
    {
      title: "Ecosystem Formation",
      desc: "Partnership structures and certification models were introduced.",
    },
    {
      title: "Ongoing Expansion",
      desc: "CED continues to expand its system across projects and industries.",
    },
  ],

  values: [
    {
      title: "Structure",
      desc: "Every project operates within a defined system.",
      icon: Workflow,
    },
    {
      title: "Performance",
      desc: "Systems are designed to achieve measurable outcomes.",
      icon: Target,
    },
    {
      title: "Clarity",
      desc: "Roles, responsibilities, and expectations are clearly defined.",
      icon: Eye,
    },
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white text-black">

      {/* ================= HERO ================= */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <motion.div style={{ scale }} className="absolute inset-0">
          <img src={data.hero.image} className="w-full h-full object-cover" />
        </motion.div>

        <div className="absolute inset-0 bg-black/85" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
          <h1 className="text-6xl text-white md:text-7xl font-light max-w-3xl">
            {data.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-white/80">
            {data.hero.desc}
          </p>

          <p className="mt-4 text-white/50">
            {data.hero.subtext}
          </p>
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
        </div>
      </section>

      <Who />
      <Why />
      <What />
      <How />
      <Work />
      <Cta />

      

    </main>
  );
}