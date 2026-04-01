"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    id: 1,
    title: "For System Integrators",
    desc: "Structured access to design authority, certified systems, and project execution standards.",
    cta: "Explore Partner Pathways",
    link: "/partners",
    image: "/images/hero/si.webp",
  },
  {
    id: 2,
    title: "For Architects & Consultants",
    desc: "Design certainty, specification support, and performance-driven AV systems.",
    cta: "Access Specifier Support",
    link: "/industry",
    image: "/images/hero/arch.webp",
  },
  {
    id: 3,
    title: "For Developers & Contractors",
    desc: "Integrated AV planning, execution frameworks, and scalable system delivery.",
    cta: "Request Project Consultation",
    link: "/engage",
    image: "/images/hero/dev.webp",
  },
  {
    id: 4,
    title: "For Enterprise & Institutions",
    desc: "Professional AV systems designed for reliability, scale, and long-term performance.",
    cta: "Explore ProAV Systems",
    link: "/solutions",
    image: "/images/hero/board.webp",
  },
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black text-white">
      {/* ===== Background Images (Animated) ===== */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1.2 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 1 },
              scale: { duration: 8, ease: "easeOut" },
            }}
            className="absolute inset-0"
          >
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slides[index].image})`,
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ===== Overlay ===== */}
      <div className="absolute inset-0 bg-black/80" />

      {/* ===== Content ===== */}
      <div className="relative z-10 flex h-full w-full items-center">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={slides[index].id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
              >
                {/* Title */}
                <h1 className="text-4xl font-semibold leading-tight md:text-6xl bg-gradient-to-r from-white via-[#d9d9d9] to-[#a6a6a6] bg-clip-text text-transparent">
                  {slides[index].title}
                </h1>

                {/* Description */}
                <p className="mt-6 text-lg text-white/70">
                  {slides[index].desc}
                </p>

                {/* CTA */}
                <div className="mt-10">
                  <a
                    href={slides[index].link}
                    className="group inline-flex items-center gap-3 border border-white/20 px-6 py-3 text-sm font-medium tracking-wide text-white transition hover:border-white"
                  >
                    {slides[index].cta}
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ===== Navigation Arrows ===== */}
      <div className="absolute bottom-10 right-10 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white"
        >
          <ArrowLeft size={18} />
        </button>

        <button
          onClick={nextSlide}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-white transition hover:border-white"
        >
          <ArrowRight size={18} />
        </button>
      </div>

      {/* ===== Progress Indicator ===== */}
      <div className="absolute bottom-0 left-0 h-[2px] w-full bg-white/10">
        <motion.div
          key={index}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-white"
        />
      </div>

      {/* ===== Slide Indicators ===== */}
      <div className="absolute bottom-10 left-10 flex gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-[2px] w-10 transition ${
              i === index ? "bg-white" : "bg-white/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}