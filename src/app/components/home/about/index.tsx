"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const pathways = [
  {
    title: "System Integrators",
    who: "For certified and aspiring AV system integrators",
    why: "Access governed standards, system design authority, and project alignment.",
    how: "Through structured partner programs and certification pathways.",
    boundary: "Entry is controlled and based on capability and alignment.",
    cta: "Become a Partner",
    link: "/partners",
  },
  {
    title: "Architects & Consultants",
    who: "For architects, MEP consultants, and specifiers",
    why: "Ensure design certainty and performance-driven AV specifications.",
    how: "Through early-stage collaboration and structured specification support.",
    boundary: "CED operates within defined consulting and design boundaries.",
    cta: "Access Specifier Support",
    link: "/industry",
  },
  {
    title: "Developers & Contractors",
    who: "For developers and project delivery teams",
    why: "Integrate AV systems into projects with clarity and execution discipline.",
    how: "Through coordinated planning, design alignment, and system frameworks.",
    boundary: "Engagement is structured around project scope and timelines.",
    cta: "Request Consultation",
    link: "/engage",
  },
  {
    title: "Enterprise & Institutions",
    who: "For enterprise clients and institutional environments",
    why: "Deploy reliable, scalable AV systems built for long-term performance.",
    how: "Through engineered ProAV systems and controlled delivery models.",
    boundary: "Solutions are defined by performance requirements and scale.",
    cta: "Explore ProAV Systems",
    link: "/solutions",
  },
];

export default function EngagementPathways() {
  return (
    <section className="bg-white text-black py-28">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ===== Header ===== */}
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/50">
            Engagement Pathways
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight text-[#b8a882] leading-tight">
            Select Your Engagement Pathway
          </h2>

          <p className="mt-6 text-black/60 text-lg leading-relaxed">
            CED operates as a structured platform. Each pathway defines how you
            engage, what you can access, and how outcomes are governed.
          </p>
        </div>

        {/* ===== Grid ===== */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-[1px] bg-black/10">
          {pathways.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white p-10 md:p-12 transition-all duration-300"
            >
              <Link href={item.link} className="block h-full">
                {/* Title */}
                <h3 className="text-xl md:text-2xl text-black/70 font-medium tracking-tight">
                  {item.title}
                </h3>

                {/* Divider */}
                <div className="mt-6 h-[1px] w-full bg-black/10" />

                {/* Content */}
                <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-black/70">
                  <p>
                    <span className="text-black font-medium">Who:</span>{" "}
                    {item.who}
                  </p>

                  <p>
                    <span className="text-black font-medium">Why:</span>{" "}
                    {item.why}
                  </p>

                  <p>
                    <span className="text-black font-medium">How:</span>{" "}
                    {item.how}
                  </p>

                  <p>
                    <span className="text-black font-medium">Boundary:</span>{" "}
                    {item.boundary}
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-10 flex items-center justify-between">
                  <span className="text-[11px] tracking-[0.3em] uppercase text-black/60 group-hover:text-black transition">
                    {item.cta}
                  </span>

                  <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black/20 group-hover:border-black transition">
                    →
                  </span>
                </div>

                {/* Hover Line */}
                <div className="mt-6 h-[1px] w-0 bg-black transition-all duration-500 group-hover:w-full" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}