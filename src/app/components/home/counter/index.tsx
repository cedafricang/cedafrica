"use client";

import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Building2,
  Users,
  Globe,
  Activity,
} from "lucide-react";

type Stat = {
  label: string;
  value: number;
  suffix?: string;
  icon: any;
};

const stats: Stat[] = [
  { label: "Projects Delivered", value: 120, icon: Building2 },
  { label: "Certified Partners", value: 45, icon: Users },
  { label: "Social Impact Projects", value: 18, icon: Globe },
  { label: "Years of Operation", value: 4, suffix: "+", icon: Activity },
];

function Counter({
  value,
  isActive,
  duration = 1.5,
}: {
  value: number;
  isActive: boolean;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) {
      setCount(0); // reset when leaving view
      return;
    }

    let start = 0;
    const increment = value / (duration * 60);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(counter);
  }, [isActive, value, duration]);

  return <span>{count}</span>;
}

export default function SeedAfricaStats() {
  const ref = useRef(null);

  // 👇 This detects when section enters viewport
  const isInView = useInView(ref, {
    margin: "-100px",
    once: false, // VERY IMPORTANT (allows re-trigger)
  });

  return (
    <section ref={ref} className="py-24 md:py-32 bg-[#b8a882]">
      <div className="max-w-6xl mx-auto px-5 md:px-6">

        {/* HEADER */}
        <div className="max-w-xl mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-light text-black tracking-tight mb-4">
            Measured Impact
          </h2>

          <p className="text-black/50 text-base md:text-lg leading-relaxed">
            A growing footprint of projects, partnerships, and social initiatives shaping the future of AV across Africa.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 border-t border-black/10">

          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`
                  group py-10 md:py-12 px-4 md:px-6
                  border-b md:border-b-0 border-black/10
                  ${i % 2 !== 0 ? "md:border-l border-black/10" : ""}
                  ${i >= 2 ? "md:border-t border-black/10" : ""}
                `}
              >

                {/* ICON */}
                <div className="mb-4">
                  <Icon
                    size={20}
                    className="text-black/40 group-hover:text-black/70 transition"
                  />
                </div>

                {/* VALUE */}
                <div className="text-3xl md:text-5xl font-light tracking-tight text-black/90 mb-2">
                  <Counter value={stat.value} isActive={isInView} />
                  {stat.suffix && <span>{stat.suffix}</span>}
                </div>

                {/* LABEL */}
                <p className="text-black/50 text-sm md:text-base">
                  {stat.label}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}