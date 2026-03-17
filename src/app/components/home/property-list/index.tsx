"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const solutions = [
  {
    title: "AV Design Studio",
    desc: "CED operates as the design authority, defining system architecture, performance standards, and technical frameworks before execution begins.",
    cta: "Request Design Consultation",
    link: "/engage",
    image: "/images/hero/book.webp",
  },
  {
    title: "ProAV Systems",
    desc: "Engineered audiovisual systems for enterprise, commercial, and institutional environments, designed for reliability, scalability, and performance.",
    cta: "Explore ProAV Systems",
    link: "/solutions",
    image: "/images/hero/kar.png",
  },
  {
    title: "Reference Performance Systems",
    desc: "High-performance reference environments that set the benchmark for AV system design, including cinemas, hi-fi spaces, and immersive experiences.",
    cta: "View Reference Systems",
    link: "/solutions/reference",
    image: "/images/hero/hifi.jpg",
  },
];

export default function SystemCapabilities() {
  return (
    <section className="bg-white text-black py-28">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ===== Header ===== */}
        <div className="max-w-3xl">
          <p className="text-[11px] tracking-[0.35em] uppercase text-black/50">
            Solutions
          </p>

          <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight leading-tight">
            System Capabilities
          </h2>

          <p className="mt-6 text-black/60 text-lg leading-relaxed">
            CED delivers structured AV capabilities across design, system
            engineering, and reference performance environments.
          </p>
        </div>

        {/* ===== Solutions ===== */}
        <div className="mt-20 space-y-32">
          {solutions.map((item, i) => {
            const isReverse = i % 2 !== 0;

            return (
              <div
                key={i}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center`}
              >
                {/* ===== IMAGE ===== */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`relative h-[420px] w-full overflow-hidden ${
                    isReverse ? "lg:order-2" : ""
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />

                  {/* subtle overlay */}
                  <div className="absolute inset-0 bg-black/10" />
                </motion.div>

                {/* ===== TEXT ===== */}
                <motion.div
                  initial={{ opacity: 0, x: isReverse ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className={`max-w-xl ${
                    isReverse ? "lg:order-1" : ""
                  }`}
                >
                  <h3 className="text-2xl text-black/70 md:text-3xl font-medium tracking-tight">
                    {item.title}
                  </h3>

                  <div className="mt-6 h-[1px] w-12 bg-black/20" />

                  <p className="mt-6 text-black/60 text-[16px] leading-relaxed">
                    {item.desc}
                  </p>

                  {/* CTA */}
                  <div className="mt-10">
                    <Link
                      href={item.link}
                      className="group inline-flex items-center gap-3 text-[11px] tracking-[0.35em] uppercase text-black/60 hover:text-black transition"
                    >
                      {item.cta}

                      <span className="w-8 h-8 flex items-center justify-center rounded-full border border-black/20 group-hover:border-black transition">
                        →
                      </span>
                    </Link>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}