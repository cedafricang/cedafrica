"use client";

import { motion, useScroll, useTransform } from "framer-motion";

/* ============================= */
/* DATA */
/* ============================= */

const data = {
  hero: {
    title: "Retail Program",
    desc: "A structured retail framework for partners representing premium audiovisual brands within controlled environments, defined standards, and curated customer experiences.",
    image: "/images/hero/avimage.jpg",
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

        <div className="absolute inset-0 bg-black/75" />

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

          <div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-black to-transparent z-10" />
          <div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-black to-transparent z-10" />

          <motion.div
            className="flex gap-20 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {loopPartners.map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="brand"
                className="h-4 md:h-6 brightness-0 invert opacity-70"
              />
            ))}
          </motion.div>

          <p className="text-white/40 text-xs tracking-widest uppercase text-center mt-6">
            Premium Brand Ecosystem
          </p>
        </div>
      </section>

      {/* ============================= */}
      {/* TIMELINE */}
      {/* ============================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-light mb-4">
              How the Retail Program Works
            </h2>

            <p className="text-black/60">
              A structured retail pathway focused on experience, positioning, and controlled product delivery.
            </p>
          </div>

          <div className="space-y-28">

            {data.timeline.map((item, i) => {
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  className={`flex flex-col md:flex-row items-center gap-12 ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* IMAGE */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-[300px] object-cover"
                    />
                  </div>

                  {/* TEXT */}
                  <div className="w-full md:w-1/2">
                    <h3 className="text-2xl text-black/70 font-medium mb-4">
                      {item.title}
                    </h3>

                    <p className="text-black/60 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

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
      <section className="py-28 bg-gradient-to-b from-[#f8f8f9] to-[#f1f1f2]">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16">

          {data.value.map((item, i) => (
            <div key={i} className="border-t border-black/10 pt-6">
              <h3 className="text-xl  text-black/70 font-medium mb-2">
                {item.title}
              </h3>

              <p className="text-black/60">
                {item.desc}
              </p>
            </div>
          ))}

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
          href="/engage?type=retail"
          className="border px-10 py-4 hover:bg-white hover:text-black transition"
        >
          Enter the System
        </a>

      </section>

    </main>
  );
}