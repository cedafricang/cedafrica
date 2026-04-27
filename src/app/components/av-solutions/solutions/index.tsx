"use client";

import Link from "next/link";
import { Home, Film, Building2, Monitor } from "lucide-react";
import { motion } from "framer-motion";

export default function DesignSolutions() {
  const solutions = [
    {
      title: "Residential Technology Solutions",
      desc: "Whole-home AV systems engineered for seamless integration, performance, and long-term scalability.",
      href: "/design-studio/solutions/rts",
      icon: Home,
    },
    {
      title: "Reference Home Cinema",
      desc: "Precision-designed cinema environments built around acoustic accuracy and immersive performance.",
       href: "/design-studio/solutions/rhc",
      icon: Film,
    },
    {
      title: "Hospitality AV Solutions",
      desc: "Distributed AV systems for hotels and commercial environments, designed for zoning and operational control.",
       href: "/design-studio/solutions/has",
      icon: Building2,
    },
    {
      title: "ProAV Solutions",
      desc: "Enterprise-grade AV systems for corporate and institutional environments with structured documentation.",
       href: "/design-studio/solutions/pas",
      icon: Monitor,
    },
  ];

  return (
    <section className="relative bg-[#b8a882] text-black py-32 overflow-hidden">

      {/* ================= BACKGROUND GRID SYSTEM ================= */}

      <div className="absolute inset-0 opacity-[0.12] pointer-events-none">
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">

          {Array.from({ length: 96 }).map((_, i) => (
            <div
              key={i}
              className="border border-black/20"
            />
          ))}

        </div>
      </div>

      {/* subtle overlay lines */}

      <div className="absolute inset-0 pointer-events-none opacity-[0.08]">
        <div className="h-full w-full bg-[linear-gradient(90deg,transparent_49%,black_50%,transparent_51%)] bg-[length:120px_120px]" />
      </div>

      {/* ================= CONTENT ================= */}

      <div className="relative max-w-[1300px] mx-auto px-8">

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mb-20 max-w-[700px]"
        >
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-60 mb-6">
            AV Design Studio
          </p>

          <h2 className="text-4xl md:text-5xl text-black font-medium leading-tight mb-6">
            Design Solutions & System Frameworks
          </h2>

          <p className="text-sm leading-relaxed opacity-70">
            Structured AV design frameworks across residential, hospitality and professional environments, supported by detailed technical documentation and system clarity.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="grid md:grid-cols-2 gap-16">

          {solutions.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                viewport={{ once: true }}
              >
                <Link href={item.href} className="group block">

                  <div className="relative pb-10 border-b border-black/20">

                    {/* ICON */}

                    <div className="mb-6">
                      <Icon
                        size={22}
                        className="opacity-80 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </div>

                    {/* TITLE */}

                    <h3 className="text-xl text-black font-medium mb-4 transition group-hover:opacity-70">
                      {item.title}
                    </h3>

                    {/* DESC */}

                    <p className="text-sm leading-relaxed opacity-70 max-w-[480px] mb-6">
                      {item.desc}
                    </p>

                    {/* CTA */}

                    <div className="flex items-center gap-2 text-[11px] tracking-[0.28em] uppercase opacity-80 group-hover:opacity-100 transition">
                      <span>Explore Framework</span>

                      <span className="cta-line" />
                    </div>

                    {/* HOVER LINE */}

                    <span className="hover-line" />

                  </div>

                </Link>
              </motion.div>
            );
          })}

        </div>

      </div>

      {/* ================= STYLES ================= */}

      <style jsx>{`

        /* hover underline */

        .hover-line{
          position:absolute;
          left:50%;
          bottom:-1px;
          width:0;
          height:1px;
          transform:translateX(-50%);
          background:black;
          transition:width .4s ease;
        }

        .group:hover .hover-line{
          width:120%;
        }

        /* CTA micro line */

        .cta-line{
          display:inline-block;
          width:24px;
          height:1px;
          background:black;
          transform:translateX(0);
          transition:transform .3s ease, width .3s ease;
        }

        .group:hover .cta-line{
          width:36px;
          transform:translateX(4px);
        }

      `}</style>

    </section>
  );
}