"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const documents = [
  {
    title: "Device Placement Drawing",
    desc: "Detailed AV equipment positioning across all floors including speakers, control interfaces, and infrastructure layout.",
  },
  {
    title: "Single Line Diagram (SLD)",
    desc: "System-level architecture showing signal flow, network topology, and interconnection of AV components.",
  },
];

export default function AVMCCDocumentation() {
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

  const handleOpen = (doc: string) => {
    setSelectedDoc(doc);
    setOpen(true);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("Full Name", form.name);
    formData.append("Company", form.company);
    formData.append("Phone", form.phone);
    formData.append("Email", form.email);
    formData.append("Document Requested", selectedDoc);
    formData.append("_subject", "AVMCC Documentation Request");
    formData.append("_captcha", "false");

    await fetch("https://formsubmit.co/ajax/adediranstephen2000@gmail.com", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    setOpen(false);
    setSuccess(true);

    setForm({
      name: "",
      company: "",
      phone: "",
      email: "",
    });

    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section className="py-28 bg-[#b8a882] text-black relative overflow-hidden">

      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.08] grid grid-cols-12 grid-rows-6">
        {Array.from({ length: 72 }).map((_, i) => (
          <div key={i} className="border border-black/20" />
        ))}
      </div>

      <div className="relative max-w-[1200px] mx-auto px-8">

        <p className="text-[11px] tracking-[0.3em] uppercase opacity-60 mb-10">
          Available Project Documentation
        </p>

        {/* SUCCESS MESSAGE */}
        {success && (
          <div className="mb-10 border border-black/30 p-5 text-sm">
            Your request has been submitted. Our team will review and send the selected document.
          </div>
        )}

        {/* DOCUMENT LIST */}
        <div className="grid md:grid-cols-2 gap-12">

          {documents.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group border border-black/20 p-8 hover:border-black transition"
            >
              <h3 className="text-base text-black mb-3">
                {doc.title}
              </h3>

              <p className="text-sm opacity-70 mb-6">
                {doc.desc}
              </p>

              <button
                onClick={() => handleOpen(doc.title)}
                className="text-[11px] tracking-[0.3em] uppercase flex items-center gap-3"
              >
                Request Document
                <span className="w-6 h-[1px] bg-black group-hover:w-10 transition-all" />
              </button>

            </motion.div>
          ))}

        </div>

      </div>

      {/* ================= MODAL ================= */}

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white text-black p-10 max-w-[500px] w-full relative">

            {/* CLOSE */}
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

    </section>
  );
}