"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    title: "Shop-in-Shop Retailer",
    level: "Entry",
    desc: "An entry point into the ecosystem through a dedicated branded display within an existing retail environment.",
    features: [
      "Dedicated brand display area within store",
      "Structured product showcase (e.g. Sonos display)",
      "Guided retail setup aligned with brand standards",
      "Entry-level access to select product range",
    ],
  },
  {
    title: "Approved Retailer",
    level: "Advanced",
    desc: "Established retail partners with structured product access and defined positioning within the ecosystem.",
    features: [
      "Access to broader product portfolio",
      "Recognized retail partner status",
      "Consistent brand representation across store",
      "Enhanced customer engagement capability",
    ],
  },
  {
    title: "Elite Retailer",
    level: "Flagship",
    desc: "Top-tier retail partners operating at the highest level of brand alignment, experience, and market positioning.",
    features: [
      "Full access to premium product ecosystem (Sonos, Focal, Naim)",
      "Flagship-level retail positioning",
      "Advanced in-store experience and demonstration capability",
      "Priority access, support, and strategic alignment",
    ],
  },
];
export default function RetailTiers() {
  return (
    <section className="relative py-28 md:py-36 bg-[#f7f7f5] text-black overflow-hidden">

      {/* ================= BACKGROUND TEXTURE ================= */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/40 mb-4">
            Retail Program
          </p>

          <h2 className="text-3xl md:text-4xl font-light mb-6">
            Retail Partnership Structure
          </h2>

          <p className="text-black/60 leading-relaxed">
            Retail partners operate within a structured system, with defined
            levels of access, positioning, and experience. Each level represents
            a progression in capability and brand alignment.
          </p>
        </div>

        {/* ================= TIERS ================= */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-10">

          {tiers.map((tier, i) => {
            const isMiddle = i === 1;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-8 md:p-10 border transition duration-500
                  ${isMiddle
                    ? "bg-white border-black/20 scale-[1.02] shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
                    : "bg-white/70 border-black/10 hover:bg-white"
                  }`}
              >

                {/* TOP LINE (ACCENT) */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-[#b8a882] opacity-70 group-hover:opacity-100 transition" />

                {/* LEVEL */}
                <p className="text-[10px] tracking-[0.3em] uppercase text-black/40 mb-4">
                  {tier.level}
                </p>

                {/* TITLE */}
                <h3 className="text-xl font-medium mb-4">
                  {tier.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="text-sm text-black/60 leading-relaxed mb-8">
                  {tier.desc}
                </p>

                {/* FEATURES */}
                <div className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 text-sm text-black/70"
                    >
                      <div className="w-1.5 h-1.5 bg-black/50 rounded-full mt-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                {/* HOVER LINE */}
                <div className="mt-8 w-0 h-[1px] bg-black group-hover:w-16 transition-all duration-500" />

              </motion.div>
            );
          })}

        </div>

      </div>

      {/* ================= BOTTOM FADE ================= */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f7f7f5] to-transparent" />

    </section>
  );
}