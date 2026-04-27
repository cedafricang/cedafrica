"use client";

import { useState } from "react";
import { X } from "lucide-react";

const documents = [
  {
    title: "Block Schematic Drawing",
    desc: "Audio distribution and system architecture schematic for Kilala.",
  },
  {
    title: "Device Placement Drawing",
    desc: "Precise positioning of AV devices across all zones.",
  },
  {
    title: "Rough-In Drawing",
    desc: "Cabling, infrastructure, and pre-installation specifications.",
  },
];

export default function KilalaDocumentation() {
  const [open, setOpen] = useState(false);
  const [selectedDoc, setSelectedDoc] = useState("");

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
  });

  const openModal = (doc: string) => {
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
    formData.append("_subject", "Kilala Documentation Request");
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

        <p className="text-[11px] tracking-[0.3em] uppercase opacity-60 mb-10">
          Available Project Documentation
        </p>

        {/* SUCCESS */}
        {success && (
          <div className="mb-10 border border-black/30 p-5 text-sm animate-fadeIn">
            Your request has been submitted. Our team will review and share the document with you.
          </div>
        )}

        {/* DOCUMENT GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {documents.map((doc, i) => (
            <div
              key={i}
              className="group border border-black/20 p-8 hover:border-black transition"
            >
              <h3 className="text-lg text-black mb-3">{doc.title}</h3>

              <p className="text-sm opacity-70 mb-6">
                {doc.desc}
              </p>

              <button
                onClick={() => openModal(doc.title)}
                className="text-[11px] tracking-[0.3em] uppercase flex items-center gap-3"
              >
                Request Access
                <span className="w-6 h-[1px] bg-black group-hover:w-10 transition-all" />
              </button>
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