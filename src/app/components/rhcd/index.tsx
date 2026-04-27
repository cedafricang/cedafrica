"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function SoundhousDocumentation() {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-28 bg-[#b8a882] text-black relative overflow-hidden">

      {/* BACKGROUND GRID */}
      <div className="absolute inset-0 opacity-[0.08] grid grid-cols-12 grid-rows-8">
        {Array.from({ length: 96 }).map((_, i) => (
          <div key={i} className="border border-black/20" />
        ))}
      </div>

      <div className="relative max-w-[1000px] mx-auto px-8 text-center">

        <p className="text-[11px] tracking-[0.3em] uppercase opacity-60 mb-4">
          Soundhous Reference Cinema
        </p>

        <h2 className="text-2xl text-black md:text-3xl mb-6">
          As-Built Cinema Design Documentation
        </h2>

        <p className="text-sm opacity-70 max-w-[600px] mx-auto mb-12 leading-relaxed">
          Complete engineering documentation of the Soundhous cinema room,
          detailing speaker positioning, acoustic treatment, projection system,
          and integrated lighting design.
        </p>

        {/* DOCUMENT CARD */}
        <div className="border border-black/20 p-10 max-w-[500px] mx-auto">

          <h3 className="text-lg text-black mb-4">
            Cinema Room As-Built Drawing
          </h3>

          <p className="text-sm opacity-70 mb-8">
            Includes layout plans, front wall design, projection system,
            acoustic detailing, and lighting integration.
          </p>

          <button
            onClick={() => setOpen(true)}
            className="text-[11px] tracking-[0.3em] uppercase flex items-center justify-center gap-3 mx-auto"
          >
            Request Access
            <span className="w-6 h-[1px] bg-black group-hover:w-10 transition-all" />
          </button>

        </div>

      </div>

      {/* ================= MODAL ================= */}

      {open && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">

          <div className="bg-white text-black p-10 max-w-[500px] w-full relative">

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
              This document will be shared with you after review.
            </p>

            {/* FORM SUBMIT (SAME SYSTEM) */}
            <form
              action="https://formsubmit.co/adediranstephen2000@gmail.com"
              method="POST"
              className="space-y-4"
            >
              <input type="hidden" name="_subject" value="Soundhous Cinema Document Request" />
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="Document Requested"
                value="Soundhous Cinema As-Built Drawing"
              />

              <input required name="Full Name" placeholder="Full Name" className="w-full border p-3" />
              <input name="Company" placeholder="Company" className="w-full border p-3" />
              <input required name="Phone" placeholder="Phone Number" className="w-full border p-3" />
              <input required type="email" name="Email" placeholder="Email Address" className="w-full border p-3" />

              <button className="w-full border py-3 text-[11px] tracking-[0.3em] uppercase hover:bg-black hover:text-white transition">
                Submit Request
              </button>
            </form>

          </div>

        </div>
      )}

    </section>
  );
}