"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ArticleGateModal({ open, onClose, post }: any) {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    company: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await fetch("/api/article-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          articleId: post?.id,
          articleSlug: post?.slug,
          articleTitle: post?.title,
        }),
      });

      setSuccess(true);
    } catch (err) {
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white text-black w-full max-w-md p-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {!success ? (
              <>
                <p className="text-[11px] tracking-[0.35em] uppercase opacity-40">
                  Access Article
                </p>

                <h2 className="text-xl mt-4 mb-4 font-medium">
                  {post?.title}
                </h2>

                <p className="text-sm opacity-60 mb-6">
                  Enter your details. The article will be sent within 24 hours.
                </p>

                <div className="space-y-4">
                  <input
                    placeholder="Full Name"
                    className="w-full border p-3 text-sm"
                    onChange={(e) =>
                      setForm({ ...form, fullName: e.target.value })
                    }
                  />

                  <input
                    placeholder="Email"
                    className="w-full border p-3 text-sm"
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                  />

                  <input
                    placeholder="Company"
                    className="w-full border p-3 text-sm"
                    onChange={(e) =>
                      setForm({ ...form, company: e.target.value })
                    }
                  />
                </div>

                <div className="mt-8 flex gap-4">
                  <button
                    onClick={handleSubmit}
                    className="flex-1 border border-black py-3 text-[11px] uppercase hover:bg-black hover:text-white transition"
                  >
                    {loading ? "Submitting..." : "Request Article"}
                  </button>

                  <button
                    onClick={onClose}
                    className="flex-1 border border-black/20 py-3 text-[11px] uppercase opacity-60"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-lg font-medium mb-4">
                  Request Received
                </h3>

                <p className="text-sm opacity-60">
                  Check your email within 24 hours.
                </p>

                <button
                  onClick={onClose}
                  className="mt-6 border px-6 py-3 text-[11px] uppercase"
                >
                  Close
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}