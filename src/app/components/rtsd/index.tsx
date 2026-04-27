"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const sections = [
  {
    title: "System Design & Engineering",
    items: [
      "Device Placement Drawings",
      "Cabling Pathway",
      "Rough-In Drawings",
      "System Schematics",
    ],
  },
  {
    title: "Infrastructure & Technical Build",
    items: [
      "Rack Elevation",
      "Network Architecture Schedule",
      "Wire Checklist",
    ],
  },
  {
    title: "Architectural Integration",
    items: [
      "Reflected Ceiling Plan",
    ],
  },
  {
    title: "Performance & Quality Assurance",
    items: [
      "System Performance Report",
      "UX Quality Checklist",
    ],
  },
];

export default function MortimerDocumentation() {
  const [open, setOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleOpen = (doc: string) => {
    setSelectedDoc(doc);
    setOpen(true);
    setError(false);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    setLoading(true);
    setError(false);

    const formData = new FormData();
    formData.append("Full Name", form.name);
    formData.append("Company", form.company);
    formData.append("Phone", form.phone);
    formData.append("Email", form.email);
    formData.append("Document Requested", selectedDoc);
    formData.append("_subject", "Mortimer Documentation Request");
    formData.append("_captcha", "false");

    try {
      const res = await fetch(
        "https://formsubmit.co/ajax/adediranstephen2000@gmail.com",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (data.success === "true" || res.ok) {
        setOpen(false);
        setSuccess(true);

        setForm({
          name: "",
          company: "",
          phone: "",
          email: "",
        });

        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
      }
    } catch (err) {
      console.error(err);
      setError(true);
    }

    setLoading(false);
  };

  return (
    <section className="py-28 bg-[#b8a882] text-black relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.08] grid grid-cols-12 grid-rows-8">
        {Array.from({ length: 96 }).map((_, i) => (
          <div key={i} className="border border-black/20" />
        ))}
      </div>

      <div className="relative max-w-[1200px] mx-auto px-8">

        <p className="text-[11px] tracking-[0.3em] uppercase opacity-60 mb-4">
          Project Mortimer
        </p>

        <h2 className="text-2xl text-black md:text-3xl mb-6">
          Complete AV Design Documentation
        </h2>

        <p className="text-sm opacity-70 max-w-[700px] mb-16">
          A full-stack residential technology design package covering system engineering,
          infrastructure, architectural integration, and performance validation.
        </p>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="mb-10 border border-black/30 p-5 text-sm animate-fadeIn">
            Your request has been submitted. Our team will review and share the document with you.
          </div>
        )}

        <div className="space-y-16">

          {sections.map((section, i) => (
            <div key={i}>

              <h3 className="text-lg text-black mb-6 tracking-wide">
                {section.title}
              </h3>

              <div className="grid md:grid-cols-2 gap-10">

                {section.items.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.08 }}
                    viewport={{ once: true }}
                    className="group border border-black/20 p-6 hover:border-black transition"
                  >
                    <p className="text-sm mb-4 opacity-80">
                      {item}
                    </p>

                    <button
                      onClick={() => handleOpen(item)}
                      className="text-[11px] tracking-[0.3em] uppercase flex items-center gap-3"
                    >
                      Request Document
                      <span className="w-6 h-[1px] bg-black group-hover:w-10 transition-all" />
                    </button>

                  </motion.div>
                ))}

              </div>

            </div>
          ))}

        </div>

      </div>

      {/* ================= MODAL ================= */}

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white text-black p-10 max-w-[500px] w-full relative animate-scaleIn">

            <button
              onClick={() => setOpen(false)}
              className="absolute top-5 right-5 opacity-60 hover:opacity-100"
            >
              <X size={18} />
            </button>

            <h3 className="text-lg mb-3">
              Request Documentation
            </h3>

            <p className="text-sm opacity-60 mb-6">
              <strong>{selectedDoc}</strong> will be shared with you after review.
            </p>

            {error && (
              <div className="mb-4 text-sm border border-red-400 p-3">
                Submission failed. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                required
                placeholder="Full Name"
                className="w-full border border-black/20 p-3"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                placeholder="Company"
                className="w-full border border-black/20 p-3"
                value={form.company}
                onChange={(e) =>
                  setForm({ ...form, company: e.target.value })
                }
              />

              <input
                required
                placeholder="Phone Number"
                className="w-full border border-black/20 p-3"
                value={form.phone}
                onChange={(e) =>
                  setForm({ ...form, phone: e.target.value })
                }
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                className="w-full border border-black/20 p-3"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <button
                type="submit"
                disabled={loading}
                className="mt-6 w-full border border-black py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition"
              >
                {loading ? "Submitting..." : "Submit Request"}
              </button>

            </form>

          </div>

        </div>
      )}

      {/* ANIMATIONS */}
      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.5s ease forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>

    </section>
  );
}