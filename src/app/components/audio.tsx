"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioConsent() {
  const [show, setShow] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const consent = localStorage.getItem("ced_audio_consent");
    const hasPlayed = localStorage.getItem("ced_audio_played");

    // Show modal only if no decision yet
    if (!consent) {
      setShow(true);
      return;
    }

    // If accepted BUT already played → do nothing
    if (consent === "accepted" && hasPlayed === "true") {
      return;
    }
  }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
      localStorage.setItem("ced_audio_played", "true");
    }
  };

  const handleAccept = () => {
    localStorage.setItem("ced_audio_consent", "accepted");
    setShow(false);

    setTimeout(() => {
      playAudio();
    }, 300);
  };

  const handleDecline = () => {
    localStorage.setItem("ced_audio_consent", "declined");
    setShow(false);
  };

  return (
    <>
      {/* AUDIO */}
      <audio ref={audioRef} src="/audio/cedwlc.mp3" preload="auto" />

      {/* MODAL */}
      <AnimatePresence>
        {show && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-md bg-white text-black p-10"
            >
              {/* HEADER */}
              <p className="text-[11px] tracking-[0.35em] uppercase text-black/40">
                Experience
              </p>

              <h2 className="mt-4 text-xl font-medium tracking-tight">
                Enable Guided Audio
              </h2>

              <p className="mt-4 text-black/60 text-sm leading-relaxed">
                This platform includes a brief audio introduction designed to
                guide your experience.
              </p>

              {/* Divider */}
              <div className="mt-6 h-[1px] w-full bg-black/10" />

              {/* Actions */}
              <div className="mt-8 flex gap-4">
                <button
                  onClick={handleAccept}
                  className="flex-1 border border-black px-4 py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition"
                >
                  Enable
                </button>

                <button
                  onClick={handleDecline}
                  className="flex-1 border border-black/20 px-4 py-3 text-[11px] tracking-[0.3em] uppercase text-black/60 hover:text-black transition"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}