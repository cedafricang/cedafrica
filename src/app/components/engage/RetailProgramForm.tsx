"use client";
import { useState } from "react";

/* ---------------- TYPES ---------------- */

type FormData = {
  company: string;
  contact: string;
  email: string;
  phone: string;

  storeType: string;
  locations: string;
  showroom: string;

  brands: string;
  audience: string;

  experience: string;
  teamSize: string;

  reason: string;
};

/* ---------------- COMPONENT ---------------- */

export default function RetailProgramForm() {
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    company: "",
    contact: "",
    email: "",
    phone: "",
    storeType: "",
    locations: "",
    showroom: "",
    brands: "",
    audience: "",
    experience: "",
    teamSize: "",
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
          pathway: "retail_program",
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

      {/* RETAIL SETUP */}
      <Section title="Retail Environment">
        <Select
          label="Store Type"
          value={form.storeType}
          options={["Dedicated Showroom","Multi-brand Store","Luxury Retail","Other"]}
          onChange={(v)=>update("storeType",v)}
        />

        <Input label="Store Locations" value={form.locations} onChange={(v)=>update("locations",v)} />

        <Select
          label="Do you have a showroom experience?"
          value={form.showroom}
          options={["Yes","No","In Development"]}
          onChange={(v)=>update("showroom",v)}
        />
      </Section>

      {/* BRAND ALIGNMENT */}
      <Section title="Brand Alignment">
        <Input label="Brands You Currently Represent" value={form.brands} onChange={(v)=>update("brands",v)} />
        <Input label="Target Customer Audience" value={form.audience} onChange={(v)=>update("audience",v)} />
      </Section>

      {/* EXPERIENCE */}
      <Section title="Operational Capability">
        <Select
          label="Years in Retail"
          value={form.experience}
          options={["0–2","3–5","5–10","10+"]}
          onChange={(v)=>update("experience",v)}
        />

        <Input label="Team Size" value={form.teamSize} onChange={(v)=>update("teamSize",v)} />
      </Section>

      {/* INTENT */}
      <Section title="Alignment">
        <Textarea
          label="Why do you want to join the Retail Program?"
          value={form.reason}
          onChange={(v)=>update("reason",v)}
        />
      </Section>

      {/* CTA */}
      <button
        onClick={submit}
        className="bg-black text-white px-8 py-3 text-sm"
      >
        {loading ? "Submitting..." : "Submit Application"}
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