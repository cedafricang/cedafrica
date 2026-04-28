"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  Store,
  Eye,
  LayoutGrid,
  Tag,
  ShoppingBag,
  CheckCircle,
} from "lucide-react";

const icons = [
  Store,
  Eye,
  LayoutGrid,
  Tag,
  ShoppingBag,
  CheckCircle,
];

/* ============================= */
/* DATA */
/* ============================= */

const data = {
  hero: {
    title: "Retail Program",
    desc: "A structured retail framework for partners representing premium audiovisual brands within controlled environments, defined standards, and curated customer experiences.",
    image: "/images/projects/soundhous.jpg",
  },

   partners: [
    "/images/partners/baron.svg",
    "/images/partners/avantis.svg",
    "/images/partners/ca.svg",
    "/images/partners/gabonn.svg",
    "/images/partners/idlewoods.svg",
    "/images/partners/jam.svg",
    "/images/partners/saota.svg",
    "/images/partners/spectra.svg",
    "/images/partners/topklan.svg",
    "/images/partners/triangle.svg",
    "/images/partners/wse.svg",
  ],

  timeline: [
    {
      title: "Retail Qualification",
      desc: "Retail partners are assessed based on brand alignment, customer profile, and ability to deliver premium product experiences.",
      image: "/images/hero/avimage.jpg",
    },
    {
      title: "Store & Experience Alignment",
      desc: "Retail environments are structured to reflect defined brand positioning, product presentation, and customer interaction standards.",
      image: "/images/hero/avimage.jpg",
    },
    {
      title: "Product & Brand Integration",
      desc: "Approved products are curated and integrated into retail spaces with clear positioning and experience intent.",
      image: "/images/hero/avimage.jpg",
    },
    {
      title: "Sales & Experience Delivery",
      desc: "Customer engagement, demonstrations, and sales are delivered within a controlled and premium experience framework.",
      image: "/images/hero/avimage.jpg",
    },
  ],

  value: [
    {
      title: "Access to Premium Brands",
      desc: "Represent globally recognized AV brands within a structured retail system.",
    },
    {
      title: "Defined Retail Positioning",
      desc: "Operate within a clearly defined brand and product positioning framework.",
    },
    {
      title: "Enhanced Customer Experience",
      desc: "Deliver curated and immersive product experiences to customers.",
    },
    {
      title: "Sustained Commercial Growth",
      desc: "Build long-term revenue within a controlled and high-value ecosystem.",
    },
  ],
};

const loopPartners = [...data.partners, ...data.partners];

/* ============================= */
/* PAGE */
/* ============================= */

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1.2]);

  return (
    <main className="bg-white text-black">

      {/* ============================= */}
      {/* HERO */}
      {/* ============================= */}
      <section className="relative h-screen flex items-center overflow-hidden">

        <motion.div style={{ scale }} className="absolute inset-0">
          <img
            src={data.hero.image}
            className="w-full h-full object-cover"
            alt="Retail Program"
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/95" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl text-white md:text-7xl font-light max-w-4xl leading-tight">
            {data.hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-white/80 text-lg">
            {data.hero.desc}
          </p>
        </div>

        {/* ============================= */}
        {/* MARQUEE */}
        {/* ============================= */}
        <div className="absolute bottom-0 w-full pb-10 overflow-hidden">

  {/* Fade edges */}
  <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10" />
  <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10" />

  {/* Marquee */}
  <div className="overflow-hidden">
    <motion.div
      className="flex items-center gap-10 md:gap-20 min-w-max"
      animate={{ x: ["0%", "-50%"] }}
      transition={{
        repeat: Infinity,
        duration: 30,
        ease: "linear",
      }}
    >
      {[...loopPartners, ...loopPartners].map((logo, i) => (
        <div key={i} className="flex-shrink-0">
          <img
            src={logo}
            alt="brand"
            className="
              h-6 sm:h-7 md:h-6
              object-contain
              brightness-0 invert
              opacity-70
              transition-transform duration-500
              hover:scale-105
            "
          />
        </div>
      ))}
    </motion.div>
  </div>

  {/* Label */}
  <p className="text-white/40 text-[10px] md:text-xs tracking-widest uppercase text-center mt-6">
    Premium Brand Ecosystem
  </p>

</div>
      </section>

      {/* ============================= */}
      {/* TIMELINE */}
      {/* ============================= */}
      <section className="py-24 md:py-32 bg-white text-black">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* HEADER */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-4">
            How the Retail Program Works
          </h2>

          <p className="text-black/50 text-base md:text-lg leading-relaxed">
            A structured retail pathway focused on experience, positioning, and controlled product delivery.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* MOBILE LINE (softer) */}
          <div className="absolute left-[20px] top-0 w-[1px] h-full bg-black/5 md:hidden" />

          {/* DESKTOP CENTER LINE */}
          <div className="hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[1px] h-full bg-black/5" />

          <div className="space-y-16 md:space-y-24">
            {data.timeline.map((item: any, i: number) => {
              const isLeft = i % 2 === 0;
              const Icon = icons[i % icons.length];

              return (
                <div key={i} className="relative">

                  {/* ================= MOBILE ================= */}
                  <div className="md:hidden flex items-start gap-5">

                    {/* ICON */}
                    <div className="relative flex-shrink-0 w-10 h-10">
                      <div className="absolute inset-0 rounded-full bg-black/5 blur-md" />
                      <div className="relative w-10 h-10 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.04)]">
                        <Icon size={16} className="text-black/70" />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <motion.div
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className="max-w-[85%]"
                    >
                      {/* STEP NUMBER (very soft) */}
                      <div className="text-black/5 text-5xl font-light mb-1">
                        {String(i + 1).padStart(2, "0")}
                      </div>

                      <h3 className="text-lg font-medium text-black/80 mb-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-black/50 leading-relaxed text-sm">
                        {item.desc}
                      </p>
                    </motion.div>
                  </div>

                  {/* ================= DESKTOP ================= */}
                  <div className="hidden md:flex items-start">

                    {/* LEFT */}
                    <div className={`w-1/2 pr-14 ${isLeft ? "" : "invisible"}`}>
                      {isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="text-right max-w-md ml-auto"
                        >
                          <div className="text-black/5 text-6xl font-light mb-2">
                            {String(i + 1).padStart(2, "0")}
                          </div>

                          <h3 className="text-xl font-medium text-black/80 mb-3 leading-snug">
                            {item.title}
                          </h3>

                          <p className="text-black/50 leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      )}
                    </div>

                    {/* CENTER NODE */}
                    <div className="absolute left-1/2 -translate-x-1/2 z-10">
                      <div className="relative flex items-center justify-center">
                        <div className="absolute w-16 h-16 rounded-full bg-black/5 blur-md" />
                        <div className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center shadow-[0_4px_20px_rgba(0,0,0,0.04)]">
                          <Icon size={18} className="text-black/70" />
                        </div>
                      </div>
                    </div>

                    {/* RIGHT */}
                    <div className={`w-1/2 pl-14 ${!isLeft ? "" : "invisible"}`}>
                      {!isLeft && (
                        <motion.div
                          initial={{ opacity: 0, x: 30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5 }}
                          className="max-w-md"
                        >
                          <div className="text-black/5 text-6xl font-light mb-2">
                            {String(i + 1).padStart(2, "0")}
                          </div>

                          <h3 className="text-xl font-medium text-black/80 mb-3 leading-snug">
                            {item.title}
                          </h3>

                          <p className="text-black/50 leading-relaxed">
                            {item.desc}
                          </p>
                        </motion.div>
                      )}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
          {/* ============================= */}
      {/* SYSTEM STATEMENT */}
      {/* ============================= */}
      <section className="relative h-[70vh] flex items-center">

        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url(/images/hero/avimage.jpg)" }}
        />

        <div className="absolute inset-0 bg-black/80" />

        <div className="relative z-10 max-w-3xl mx-auto text-center text-white px-6 space-y-6">

          <p>CED defines product positioning.</p>

          <div className="w-10 h-[1px] bg-white/40 mx-auto" />

          <p>Retail partners deliver the experience.</p>

          <div className="w-10 h-[1px] bg-white/40 mx-auto" />

          <p>Every interaction reflects the system.</p>

        </div>
      </section>

      {/* ============================= */}
      {/* VALUE */}
      {/* ============================= */}
     <section className="py-20 md:py-28 bg-gradient-to-b from-[#f8f8f9] to-[#f1f1f2]">
      <div className="max-w-5xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-14 md:mb-20 max-w-2xl">
          <p className="text-[11px] tracking-[0.35em] uppercase opacity-50 mb-4">
            Value Structure
          </p>

          <h2 className="text-2xl md:text-3xl font-medium text-black">
            Defined Outcomes Across Every Engagement
          </h2>
        </div>

        {/* LIST */}
        <div className="divide-y divide-black/10">

          {data.value.map((item: any, i: number) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group py-10 md:py-12 grid grid-cols-[auto_1fr] gap-6 md:gap-10 items-start"
            >

              {/* NUMBER */}
              <div className="relative">

                <span className="text-2xl md:text-3xl font-light text-black/40">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* subtle gold accent */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#b8a882] group-hover:w-full transition-all duration-500" />

              </div>

              {/* CONTENT */}
              <div>

                <h3 className="text-base md:text-lg font-medium text-black mb-2">
                  {item.title}
                </h3>

                <p className="text-sm md:text-[15px] text-black/60 leading-relaxed max-w-[600px]">
                  {item.desc}
                </p>

                {/* subtle hover line */}
                <div className="mt-4 w-0 h-[1px] bg-black/30 group-hover:w-16 transition-all duration-500" />

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>

      {/* ============================= */}
      {/* CTA */}
      {/* ============================= */}
      <section className="py-28 text-center bg-[#1c1c1e] text-white">

        <h2 className="text-3xl  text-white font-light mb-6">
          Apply for Retail Partnership
        </h2>

        <p className="text-white/60 mb-10">
          Entry into the Retail Program is structured, evaluated, and controlled.
        </p>

        <a
          href="/engage/partner/retail"
          className="border px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Apply for Partnership
        </a>

      </section>

    </main>
  );
}