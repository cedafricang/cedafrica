"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const brands = [
  {
    name: "Sonos",
    logo: "/images/brands/sonos.svg",
    desc: "Wireless multi-room audio ecosystem with seamless user experience and retail-driven engagement.",
  },
  {
    name: "Focal",
    logo: "/images/brands/focal.svg",
    desc: "High-performance loudspeakers engineered for precision listening and premium environments.",
  },
  {
    name: "Naim",
    logo: "/images/brands/naim.svg",
    desc: "Audiophile-grade electronics delivering reference-level performance and system integration.",
  },
];

export default function BrandAccess() {
  return (
    <section className="relative py-28 md:py-36 bg-black text-white overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0a0a] to-black" />

      {/* subtle radial glow */}
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-white/5 blur-[140px] rounded-full" />

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/40 mb-4">
            Brand Access
          </p>

          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Access Premium Audio Brands
          </h2>

          <p className="text-white/60 leading-relaxed">
            Retail partners gain access to globally recognized brands within a
            controlled distribution system. These brands are selectively
            available and positioned within structured retail environments.
          </p>
        </div>

        {/* ================= BRAND GRID ================= */}
        <div className="grid md:grid-cols-3 gap-10">

          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative p-10 border border-white/10 bg-white/[0.02] backdrop-blur-xl overflow-hidden"
            >

              {/* glow effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />
              </div>

              {/* animated shine */}
              <div className="absolute -inset-[1px] opacity-0 group-hover:opacity-100 transition duration-700">
                <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent blur-md animate-[shine_3s_linear_infinite]" />
              </div>

              {/* CONTENT */}
              <div className="relative z-10">

                {/* LOGO */}
                <div className="mb-8 flex items-center justify-center h-14">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={120}
                    height={40}
                    className="object-contain opacity-80 group-hover:opacity-100 transition duration-500"
                  />
                </div>

                {/* NAME */}
                <h3 className="text-lg font-medium mb-3 text-center">
                  {brand.name}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-white/60 leading-relaxed text-center">
                  {brand.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* ================= SHINE KEYFRAME ================= */}
      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

    </section>
  );
}