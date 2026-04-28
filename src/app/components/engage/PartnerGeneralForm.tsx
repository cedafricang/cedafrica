"use client";
import { useState } from "react";

/* ---------------- TYPES ---------------- */

type FormData = {
  company: string;
  contact: string;
  email: string;
  phone: string;

  partnerType: string;
  experience: string;
  revenue: string;
  brands: string;
  projectScale: string;
  reason: string;
};

type InputProps = {
  label: string;
  value: string;
  onChange: (v: string) => void;
};

type SelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (v: string) => void;
};

/* ---------------- COMPONENT ---------------- */

export default function PartnerGeneralForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    company: "",
    contact: "",
    email: "",
    phone: "",

    partnerType: "",
    experience: "",
    revenue: "",
    brands: "",
    projectScale: "",
    reason: "",
  });

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async () => {
    if (!form.company || !form.email || !form.partnerType) {
      alert("Please complete required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/engage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          pathway: "partner_general",
        }),
      });

      if (!res.ok) throw new Error();

      alert("Application submitted");

    } catch {
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="space-y-6">

      <Select
        label="Select Partner Type"
        value={form.partnerType}
        options={[
          "System Integrator",
          "Architect / Consultant",
          "Developer / Contractor",
          "Enterprise / ProAV",
        ]}
        onChange={(v) => update("partnerType", v)}
      />

      <Input label="Company Name" value={form.company} onChange={(v) => update("company", v)} />
      <Input label="Contact Person" value={form.contact} onChange={(v) => update("contact", v)} />
      <Input label="Email" value={form.email} onChange={(v) => update("email", v)} />
      <Input label="Phone" value={form.phone} onChange={(v) => update("phone", v)} />

      <Select
        label="Years of Experience"
        value={form.experience}
        options={["0–2","3–5","5–10","10+"]}
        onChange={(v) => update("experience", v)}
      />

      <Select
        label="Annual Revenue"
        value={form.revenue}
        options={["$50k–$200k","$200k–$1M","$1M–$5M","$5M+"]}
        onChange={(v) => update("revenue", v)}
      />

      <Input
        label="Brands You Work With"
        value={form.brands}
        onChange={(v) => update("brands", v)}
      />

      <Select
        label="Project Scale"
        value={form.projectScale}
        options={[
          "Residential",
          "Commercial",
          "Mixed",
          "Large Scale"
        ]}
        onChange={(v) => update("projectScale", v)}
      />

      <div>
        <label className="text-xs uppercase opacity-50 block mb-2">
          Why do you want to join?
        </label>
        <textarea
          value={form.reason}
          onChange={(e) => update("reason", e.target.value)}
          className="w-full border-b py-3"
        />
      </div>

      <button
        onClick={submit}
        className="bg-black text-white px-6 py-3 text-sm"
      >
        {loading ? "Submitting..." : "Submit Application"}
      </button>

    </div>
  );
}

/* ---------------- UI ---------------- */

function Input({ label, value, onChange }: InputProps) {
  return (
    <div>
      <label className="text-xs uppercase opacity-50 block mb-2">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b py-3"
      />
    </div>
  );
}

function Select({ label, value, options, onChange }: SelectProps) {
  return (
    <div>
      <label className="text-xs uppercase opacity-50 block mb-2">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b py-3"
      >
        <option value="">Select</option>
        {options.map((o, i) => (
          <option key={i}>{o}</option>
        ))}
      </select>
    </div>
  );
}