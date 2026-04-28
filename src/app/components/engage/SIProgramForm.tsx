"use client";
import { useState } from "react";

/* ---------------- TYPES ---------------- */

type FormData = {
  company: string;
  contact: string;
  email: string;
  phone: string;

  experience: string;
  revenue: string;
  projectScale: string;

  brands: string;
  projects: string;

  teamSize: string;
  locations: string;

  reason: string;
};

/* ---------------- COMPONENT ---------------- */

export default function SIProgramForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    company: "",
    contact: "",
    email: "",
    phone: "",
    experience: "",
    revenue: "",
    projectScale: "",
    brands: "",
    projects: "",
    teamSize: "",
    locations: "",
    reason: "",
  });

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const submit = async () => {
    if (!form.company || !form.email) {
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
          pathway: "si_program",
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
    <div className="space-y-8">

      {/* COMPANY */}
      <Section title="Company Information">
        <Input label="Company Name" value={form.company} onChange={(v)=>update("company",v)} />
        <Input label="Contact Person" value={form.contact} onChange={(v)=>update("contact",v)} />
        <Input label="Email" value={form.email} onChange={(v)=>update("email",v)} />
        <Input label="Phone" value={form.phone} onChange={(v)=>update("phone",v)} />
      </Section>

      {/* CAPABILITY */}
      <Section title="Capability">
        <Select label="Experience" value={form.experience} options={["0–2","3–5","5–10","10+"]} onChange={(v)=>update("experience",v)} />
        <Select label="Annual Revenue" value={form.revenue} options={["$100k–$500k","$500k–$2M","$2M+"]} onChange={(v)=>update("revenue",v)} />
        <Select label="Project Scale" value={form.projectScale} options={["Residential","Commercial","Mixed","Large Scale"]} onChange={(v)=>update("projectScale",v)} />
      </Section>

      {/* EXPERIENCE */}
      <Section title="Project Experience">
        <Input label="Brands Worked With" value={form.brands} onChange={(v)=>update("brands",v)} />
        <Textarea label="Notable Projects" value={form.projects} onChange={(v)=>update("projects",v)} />
      </Section>

      {/* OPERATIONS */}
      <Section title="Operations">
        <Input label="Team Size" value={form.teamSize} onChange={(v)=>update("teamSize",v)} />
        <Input label="Operational Locations" value={form.locations} onChange={(v)=>update("locations",v)} />
      </Section>

      {/* INTENT */}
      <Section title="Alignment">
        <Textarea label="Why do you want to join the SI Program?" value={form.reason} onChange={(v)=>update("reason",v)} />
      </Section>

      {/* CTA */}
      <button
        onClick={submit}
        className="bg-black text-white px-8 py-3 text-sm"
      >
        {loading ? "Submitting..." : "Submit for Evaluation"}
      </button>

    </div>
  );
}

/* ---------------- UI ---------------- */

function Section({ title, children }: {title:string; children:React.ReactNode}) {
  return (
    <div className="border border-gray-200 p-8 space-y-6">
      <h3 className="text-lg font-medium">{title}</h3>
      {children}
    </div>
  );
}

function Input({ label, value, onChange }: {label:string; value:string; onChange:(v:string)=>void}) {
  return (
    <div>
      <label className="text-xs uppercase opacity-50 block mb-2">{label}</label>
      <input value={value} onChange={(e)=>onChange(e.target.value)} className="w-full border-b py-3"/>
    </div>
  );
}

function Select({ label, value, options, onChange }: {label:string; value:string; options:string[]; onChange:(v:string)=>void}) {
  return (
    <div>
      <label className="text-xs uppercase opacity-50 block mb-2">{label}</label>
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="w-full border-b py-3">
        <option value="">Select</option>
        {options.map((o,i)=><option key={i}>{o}</option>)}
      </select>
    </div>
  );
}

function Textarea({ label, value, onChange }: {label:string; value:string; onChange:(v:string)=>void}) {
  return (
    <div>
      <label className="text-xs uppercase opacity-50 block mb-2">{label}</label>
      <textarea value={value} onChange={(e)=>onChange(e.target.value)} className="w-full border-b py-3"/>
    </div>
  );
}