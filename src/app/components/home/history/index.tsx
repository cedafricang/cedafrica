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
        name: "Sonos",
        logo: "/images/brands/sonos.svg",
        url: "https://www.sonos.com",
      },
      {
        name: "Karray",
        logo: "/images/brands/karray.svg",
        url: "https://www.k-array.com/en",
      },
      {
        name: "Focal",
        logo: "/images/brands/focal.svg",
        url: "https://www.focal.com",
      },
      {
        name: "Kgear",
        logo: "/images/brands/kgear.svg",
        url: "https://www.k-array.com/en/k-group/k-gear",
      },
      {
        name: "Naim",
        logo: "/images/brands/naim.svg",
        url: "https://www.naimaudio.com",
      },
      {
        name: "Sonance",
        logo: "/images/brands/sonance.svg",
        url: "https://sonance.com/",
      },
      {
        name: "Trinnov Audio",
        logo: "/images/brands/trinnov.svg",
        url: "https://www.trinnov.com/",
      },
      {
        name: "JBL",
        logo: "/images/brands/jbl.svg",
        url: "https://www.jbl.com/",
      },
      {
        name: "Sony",
        logo: "/images/brands/sony.svg",
        url: "https://www.sony.com/",
      },
      {
        name: "Audio Control",
        logo: "/images/brands/audiocontrol.svg",
        url: "https://audiocontrol.com/",
      },
    ],
  },
  {
    category: "Video",
    items: [
      {
        name: "Screen Innovations",
        logo: "/images/brands/screeninnovation.svg",
        url: "https://www.screeninnovations.com/",
      },
       {
        name: "Barco",
        logo: "/images/brands/Barco.svg",
        url: "https://www.barco.com/en",
      },
       {
        name: "Epiphan Video",
        logo: "/images/brands/epiphan.svg",
        url: "https://www.epiphan.com/",
      },
       {
        name: "Speechi",
        logo: "/images/brands/speechi.svg",
        url: "https://speechi.com/",
      },
       {
        name: "Infiled",
        logo: "/images/brands/infiled.svg",
        url: "https://www.infiled.com/",
      },
       {
        name: "AVPro edge",
        logo: "/images/brands/avproedge.svg",
        url: "https://www.avproglobal.com/",
      },
    ],
  },
  {
    category: "Security-Communication",
    items: [
      {
        name: "Reolink",
        logo: "/images/brands/reolink.svg",
        url: "https://reolink.com/",
      },
      {
        name: "Ekey",
        logo: "/images/brands/ekey.svg",
        url: "https://www.ekey.net/en/",
      }
    ],
  },
  {
    category: "Lighting-Control",
    items: [
      {
        name: "Audioflow",
        logo: "/images/brands/audioflow.svg",
        url: "https://flow.audio/",
      },
      {
        name: "Lutron",
        logo: "/images/brands/lutron.svg",
        url: "https://www.lutron.com/us/en",
      },
      {
        name: "Luhkee",
        logo: "/images/brands/luhkee.svg",
        url: "https://www.luhkee.be/",
      },
      {
        name: "Shelly",
        logo: "/images/brands/shelly.svg",
        url: "https://www.shelly.com/",
      },
      {
        name: "Crestron",
        logo: "/images/brands/crestron.svg",
        url: "https://www.crestron.com",
      },
      {
        name: "Zennio",
        logo: "/images/brands/zennio.svg",
        url: "https://www.zennio.com",
      },
      {
        name: "Rithum Home",
        logo: "/images/brands/rithum.svg",
        url: "https://rithumhome.com/",
      },
    ],
  },
  {
    category: "Acoustics",
    items: [
      {
        name: "Vicoustic",
        logo: "/images/brands/vicoustic.svg",
        url: "https://vicoustic.com/",
      },
      {
        name: "Cineak",
        logo: "/images/brands/cineak.svg",
        url: "https://cineak.com/",
      },
      {
        name: "EZ Acoustic",
        logo: "/images/brands/ez.svg",
        url: "https://www.ezacoustics.com/",
      },
      {
        name: "Palliser",
        logo: "/images/brands/palliser.svg",
        url: "https://www.palliser.com/",
      },
      {
        name: "Leadcom Seating",
        logo: "/images/brands/leadcom.svg",
        url: "https://www.leadcomseating.com/",
      }
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
                  className="h-10 opacity-70 group-hover:opacity-100 transition duration-300"
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