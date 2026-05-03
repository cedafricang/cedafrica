"use client";

import { motion } from "framer-motion";
import {
  Music,
  Tv,
  Film,
  Lightbulb,
  Wind,
  Shield,
  Phone,
  Network,
} from "lucide-react";

/* ============================= */
/* SYSTEM DOMAINS (PAGE 8) */
/* ============================= */

const systems = [
  {
    category: "Entertainment",
    items: [
      {
        title: "Multi-Room Audio",
        desc: "Distributed audio across all zones with centralized control and unified playback.",
        icon: Music,
      },
      {
        title: "Multi-Room Video",
        desc: "Centralized video distribution delivering content to multiple rooms.",
        icon: Tv,
      },
      {
        title: "Home Cinema",
        desc: "Dedicated immersive cinema environments designed to performance standards.",
        icon: Film,
      },
      {
        title: "Media Rooms",
        desc: "Integrated casual viewing spaces combining audio, video and control.",
        icon: Tv,
      },
    ],
  },

  {
    category: "Comfort & Convenience",
    items: [
      {
        title: "Smart Lighting",
        desc: "Scene-based lighting control integrated with occupancy and scheduling.",
        icon: Lightbulb,
      },
      {
        title: "Window Treatment",
        desc: "Motorized blinds and shading systems integrated into lighting scenes.",
        icon: Lightbulb,
      },
      {
        title: "Climate Control",
        desc: "Per-zone HVAC management integrated into the home control system.",
        icon: Wind,
      },
      {
        title: "Home Automation",
        desc: "Unified control layer managing all systems across the residence.",
        icon: Network,
      },
    ],
  },

  {
    category: "Security & Communications",
    items: [
      {
        title: "IP Surveillance",
        desc: "Network-based CCTV systems with centralized monitoring and recording.",
        icon: Shield,
      },
      {
        title: "Access Control",
        desc: "Biometric and credential-based entry systems across all access points.",
        icon: Shield,
      },
      {
        title: "Integrated Security",
        desc: "Unified management of alarms, surveillance and access systems.",
        icon: Shield,
      },
      {
        title: "IP Intercom & Entry",
        desc: "Video intercom systems connecting entry points across the property.",
        icon: Phone,
      },
    ],
  },

  {
    category: "Infrastructure",
    items: [
      {
        title: "IP Telephony",
        desc: "Internal and external communication systems across the residence.",
        icon: Phone,
      },
      {
        title: "Network Infrastructure",
        desc: "Structured wired and wireless network backbone supporting all systems.",
        icon: Network,
      },
      {
        title: "Head-End Infrastructure",
        desc: "Rack systems, power, cooling and centralized equipment architecture.",
        icon: Network,
      },
      {
        title: "Cabling Infrastructure",
        desc: "Fully structured cabling system designed and documented per run.",
        icon: Network,
      },
    ],
  },
];

/* ============================= */
/* PROCESS (PAGE 5) */
/* ============================= */

const process = [
  "Discovery & Design Thinking",
  "Infrastructure Engineering",
  "Systems Engineering",
  "Quality Control & Sign-Off",
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function ResidentialSolutions() {
  return (
    <section className="relative py-28 md:py-36 bg-[#f7f7f5] text-black overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="h-full w-full bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:140px_140px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* ================= HEADER ================= */}
        <div className="max-w-2xl mb-20">
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/40 mb-4">
            Residential Technology
          </p>

          <h2 className="text-3xl md:text-4xl font-medium mb-6">
            Engineered. Not Improvised.
          </h2>

          <p className="text-black/60 leading-relaxed">
            A residential technology system is not added to a home.
            It is designed as part of it — coordinated with architecture,
            engineering and interior design from the earliest stage.
          </p>
        </div>

        {/* ================= SYSTEMS ================= */}
        <div className="space-y-24">

          {systems.map((group, i) => (
            <div key={i}>

              <h3 className="text-xl font-medium mb-10">
                {group.category}
              </h3>

              <div className="grid md:grid-cols-2 gap-10">

                {group.items.map((item, idx) => {
                  const Icon = item.icon;

                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.05 }}
                      viewport={{ once: true }}
                      className="p-8 border border-black/10 bg-white"
                    >
                      <div className="mb-5 text-black/50">
                        <Icon size={22} strokeWidth={1.5} />
                      </div>

                      <h4 className="text-base font-medium mb-2">
                        {item.title}
                      </h4>

                      <p className="text-sm text-black/60 leading-relaxed">
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}

              </div>

            </div>
          ))}

        </div>

        {/* ================= PROCESS ================= */}
        <div className="mt-28">

          <h3 className="text-xl font-medium mb-10">
            Structured Design Process
          </h3>

          <div className="grid md:grid-cols-4 gap-6">

            {process.map((step, i) => (
              <div
                key={i}
                className="border border-black/10 p-6 text-sm"
              >
                <p className="opacity-40 mb-2 text-[11px] tracking-[0.3em]">
                  0{i + 1}
                </p>
                <p>{step}</p>
              </div>
            ))}

          </div>

        </div>

      </div>

      {/* FADE EDGE */}
      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#f7f7f5] to-transparent" />

    </section>
  );
}