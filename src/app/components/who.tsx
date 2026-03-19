"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const audiences = [
  {
    title: "System Integrators",
    desc: "Residential, Hospitality, and ProAV environments requiring structured system design and execution.",
    image: "/images/hero/avimage.jpg",
  },
  {
    title: "Architects & MEP Consultants",
    desc: "Specification-led stakeholders integrating AV into broader building and infrastructure design.",
    image: "/images/hero/avimage.jpg",
  },
  {
    title: "Developers & Contractors",
    desc: "Project owners responsible for delivery, requiring clarity, coordination, and performance certainty.",
    image: "/images/hero/avimage.jpg",
  },
  {
    title: "Enterprise & Institutional Clients",
    desc: "Organisations requiring scalable, governed audiovisual systems across multiple environments.",
    image: "/images/hero/avimage.jpg",
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function WhoThisIsFor() {
  return (
    <section className="relative py-32 overflow-hidden">

      {/* Subtle Silver Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f7f7f8] via-[#f1f1f2] to-[#f7f7f8]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Section Header */}
        <div className="mb-24 max-w-xl">
          <h2 className="text-3xl md:text-4xl font-light">
            Who This Is For
          </h2>

          <p className="text-black/50 mt-6">
            CED operates across defined stakeholders within design,
            specification, and system delivery.
          </p>
        </div>

        {/* Audience Blocks */}
        <div className="space-y-32">

          {audiences.map((item, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`grid md:grid-cols-2 gap-16 items-center ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* IMAGE */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? 80 : -80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`relative h-[420px] overflow-hidden ${
                    isReversed ? "md:order-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover scale-105 hover:scale-110 transition duration-[1200ms] ease-out"
                  />

                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>

                {/* TEXT */}
                <motion.div
                  initial={{ opacity: 0, x: isReversed ? -80 : 80 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className={`${isReversed ? "md:order-1" : ""}`}
                >
                  <h3 className="text-2xl text-black/70 md:text-3xl font-light mb-6">
                    {item.title}
                  </h3>

                  <p className="text-black/60 leading-relaxed max-w-md">
                    {item.desc}
                  </p>

                  {/* subtle divider */}
                  <div className="mt-8 w-12 h-[1px] bg-black/30" />
                </motion.div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}