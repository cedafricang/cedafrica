"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* ============================= */
/* DATA (CMS READY) */
/* ============================= */

const brands = [
  {
    category: "Audio",
    items: [
      {
        name: "Focal",
        logo: "/images/brands/focal.svg",
        url: "https://www.focal.com",
      },
      {
        name: "Focal",
        logo: "/images/brands/focal.svg",
        url: "https://www.focal.com",
      },
      {
        name: "Focal",
        logo: "/images/brands/focal.svg",
        url: "https://www.focal.com",
      },
      {
        name: "Focal",
        logo: "/images/brands/focal.svg",
        url: "https://www.focal.com",
      },
      {
        name: "Naim",
        logo: "/images/brands/naim.svg",
        url: "https://www.naimaudio.com",
      },
    ],
  },
  {
    category: "Video",
    items: [
      {
        name: "Sony",
        logo: "/images/brands/sony.svg",
        url: "https://www.sony.com",
      },
       {
        name: "Sony",
        logo: "/images/brands/sony.svg",
        url: "https://www.sony.com",
      },
       {
        name: "Sony",
        logo: "/images/brands/sony.svg",
        url: "https://www.sony.com",
      },
       {
        name: "Sony",
        logo: "/images/brands/sony.svg",
        url: "https://www.sony.com",
      },
       {
        name: "Sony",
        logo: "/images/brands/sony.svg",
        url: "https://www.sony.com",
      },
       {
        name: "Sony",
        logo: "/images/brands/sony.svg",
        url: "https://www.sony.com",
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        name: "Hikvision",
        logo: "/images/brands/hikvision.svg",
        url: "https://www.hikvision.com",
      },
      {
        name: "Hikvision",
        logo: "/images/brands/hikvision.svg",
        url: "https://www.hikvision.com",
      },
      {
        name: "Hikvision",
        logo: "/images/brands/hikvision.svg",
        url: "https://www.hikvision.com",
      },
      {
        name: "Hikvision",
        logo: "/images/brands/hikvision.svg",
        url: "https://www.hikvision.com",
      },
      {
        name: "Hikvision",
        logo: "/images/brands/hikvision.svg",
        url: "https://www.hikvision.com",
      },
    ],
  },
  {
    category: "Control",
    items: [
      {
        name: "Crestron",
        logo: "/images/brands/crestron.svg",
        url: "https://www.crestron.com",
      },
      {
        name: "Crestron",
        logo: "/images/brands/crestron.svg",
        url: "https://www.crestron.com",
      },
      {
        name: "Crestron",
        logo: "/images/brands/crestron.svg",
        url: "https://www.crestron.com",
      },
      {
        name: "Crestron",
        logo: "/images/brands/crestron.svg",
        url: "https://www.crestron.com",
      },
    ],
  },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function BrandEcosystem() {
  const [activeTab, setActiveTab] = useState("Audio");

  const current = brands.find((b) => b.category === activeTab);

  return (
    <section className="bg-black text-white py-24 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ===== Header ===== */}
        <div className="max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-white/40">
            Brand Ecosystem
          </p>

          <h2 className="mt-4 text-3xl text-white md:text-5xl font-semibold tracking-tight">
            Governed Technology Partners
          </h2>

          <p className="mt-6 text-white/60 leading-relaxed">
            CED operates with a curated ecosystem of globally recognized brands,
            integrated under defined standards and system frameworks.
          </p>
        </div>

        {/* ===== Animated Divider ===== */}
        <div className="mt-12 relative h-[1px] w-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cfcfcf] to-transparent opacity-60"
          />
        </div>

        {/* ===== Tabs ===== */}
        <div className="mt-10 flex gap-8 flex-wrap">
          {brands.map((b) => (
            <button
              key={b.category}
              onClick={() => setActiveTab(b.category)}
              className={`text-[11px] tracking-[0.3em] uppercase transition ${
                activeTab === b.category
                  ? "text-white"
                  : "text-white/30 hover:text-white"
              }`}
            >
              {b.category}
            </button>
          ))}
        </div>

        {/* ===== Table Grid ===== */}
        <div className="mt-12 border border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {current?.items.map((brand, i) => (
              <a
                key={i}
                href={brand.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group border-r border-b border-white/10 h-[120px] flex items-center justify-center relative"
              >
                {/* Logo */}
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-6 opacity-70 group-hover:opacity-100 transition duration-300"
                />

                {/* Hover line */}
                <span className="absolute bottom-0 left-0 h-[1px] w-0 bg-white transition-all duration-500 group-hover:w-full" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}