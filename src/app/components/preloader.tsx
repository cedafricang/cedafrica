"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800); // keep short (luxury = fast)

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
        >
          {/* ===== ICON ===== */}
          <div className="relative flex items-center justify-center">
            {/* Outer subtle ring */}
            <div className="absolute w-24 h-24 rounded-full border border-white/10" />

            {/* Animated SVG */}
            <motion.svg
              width="90"
              height="90"
              viewBox="0 0 100 100"
              className="rotate-[-90deg]"
            >
              <defs>
                <linearGradient id="silverGradient">
                  <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
                  <stop offset="50%" stopColor="#d9d9d9" />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
                </linearGradient>
              </defs>

              <motion.circle
                cx="50"
                cy="50"
                r="40"
                stroke="url(#silverGradient)"
                strokeWidth="1.5"
                fill="none"
                strokeDasharray="251"
                strokeDashoffset="251"
                animate={{ strokeDashoffset: 0 }}
                transition={{
                  duration: 1.4,
                  ease: "easeInOut",
                }}
              />
            </motion.svg>

            {/* Center Dot */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="absolute w-2 h-2 rounded-full bg-white/70"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}