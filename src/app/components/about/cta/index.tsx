"use client";

import { motion } from "framer-motion";

/* ============================= */
/* CMS DATA */
/* ============================= */

const data = {
  title: "Engage with CED",
  description:
    "All engagements are structured and processed through the Engage Gateway.",

  actions: [
    {
      label: "Request Design Consultation",
      href: "/engage?type=design",
      primary: true,
    },
    {
      label: "Explore Solutions",
      href: "/solutions",
    },
    {
      label: "Engage with CED",
      href: "/engage",
    },
  ],
};

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function CTASection() {
  return (
    <section className="relative py-32 overflow-hidden text-white">

      {/* ============================= */}
      {/* DARK PREMIUM BACKGROUND */}
      {/* ============================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c1c1e] via-[#232326] to-[#1c1c1e]" />

      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,#fff_1px,transparent_1px)] bg-[size:28px_28px]" />
      </div>

      {/* Glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/5 blur-[120px] rounded-full" />

      {/* ============================= */}
      {/* CONTENT */}
      {/* ============================= */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl text-white md:text-5xl font-light mb-6"
        >
          {data.title}
        </motion.h2>

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white/60 max-w-xl mx-auto mb-12"
        >
          {data.description}
        </motion.p>

        {/* ============================= */}
        {/* BUTTONS */}
        {/* ============================= */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

          {data.actions.map((action, i) => (
            <motion.a
              key={i}
              href={action.href}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative px-10 py-4 text-sm tracking-widest uppercase transition duration-500 ${
                action.primary
                  ? "bg-white text-black hover:bg-transparent hover:text-white border border-white"
                  : "border border-white/30 text-white hover:bg-white hover:text-black"
              }`}
            >
              {action.label}

              {/* Hover glow */}
              <span className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
}