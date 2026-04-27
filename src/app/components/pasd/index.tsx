"use client";

import { motion } from "framer-motion";

const documents = [
  {
    title: "Signal Flow & System Architecture",
    desc: "End-to-end audio, video, and control signal flow across the AVMCC system.",
  },
  {
    title: "Device Placement & Zoning Layout",
    desc: "Precise positioning of speakers, cameras, and AV equipment across all spaces.",
  },
  {
    title: "AV Network & Control Infrastructure",
    desc: "Dante, control network, and system communication architecture.",
  },
  {
    title: "System Integration Schematics",
    desc: "Interconnection of AV components, racks, and control systems.",
  },
];

export default function AVMCCDocumentation() {
  return (
    <section className="py-28">
      <div className="max-w-[1200px] mx-auto px-8">

        <p className="text-[11px] tracking-[0.3em] uppercase opacity-50 mb-10">
          Available Project Documentation
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {documents.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="border-b pb-6 group"
            >
              <h3 className="text-base mb-2">
                {doc.title}
              </h3>

              <p className="text-sm opacity-70 mb-4">
                {doc.desc}
              </p>

              <span className="text-[11px] tracking-[0.3em] uppercase flex items-center gap-3">
                Request Access
                <span className="w-6 h-[1px] bg-black group-hover:w-10 transition-all" />
              </span>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}