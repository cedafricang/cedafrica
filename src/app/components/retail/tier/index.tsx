"use client";

import { motion } from "framer-motion";

const tiers = [
  {
    title: "Approved Retailer",
    level: "Entry",
    desc: "Structured entry into the ecosystem with access to selected products and defined retail positioning.",
    features: [
      "Access to core product range",
      "Standard retail positioning",
      "Guided onboarding process",
      "Aligned brand representation",
    ],
  },
  {
    title: "Elite Retailer",
    level: "Advanced",
    desc: "Expanded access to premium products with enhanced positioning and deeper customer engagement.",
    features: [
      "Full product ecosystem access",
      "Premium retail positioning",
      "Enhanced customer experience",
      "Priority engagement & support",
    ],
  },
  {
    title: "Shop-in-Shop",
    level: "Flagship",
    desc: "Dedicated branded retail environments designed to reflect manufacturer standards and immersive experience.",
    features: [
      "Dedicated branded retail zone",
      "Manufacturer-aligned display systems",
      "Immersive listening experience",
      "Full brand environment integration",
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