"use client";
import { useState } from "react";

/* ---------------- TYPES ---------------- */

type FormData = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  experience: string;
  projectType: string;
  projectValue: string;
  revenue: string;
  brands: string;
  projects: string;
};

/* ---------------- COMPONENT ---------------- */

export default function PartnerForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<FormData>({
    company: "",
    contact: "",
    email: "",
    phone: "",
    experience: "",
    projectType: "",
    projectValue: "",
    revenue: "",
    brands: "",
    projects: "",
  });

  const update = (field: keyof FormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const submit = async () => {
    if (!form.company || !form.email || !form.contact) {
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
          pathway: "partner", // 🔥 CRITICAL
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      alert("Application submitted successfully");

      setStep(1);
      setForm({
        company: "",
        contact: "",
        email: "",
        phone: "",
        experience: "",
        projectType: "",
        projectValue: "",
        revenue: "",
        brands: "",
        projects: "",
      });

    } catch (err) {
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">

      {/* PROGRESS */}
      <div className="mb-12">
        <div className="flex justify-between text-xs uppercase tracking-widest opacity-50 mb-3">
          <span>Identity</span>
          <span>Capability</span>
          <span>Proof</span>
        </div>

        <div className="h-[2px] bg-gray-200 relative">
          <div
            className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* FORM CARD */}
      <div className="bg-white border border-gray-200 p-10 md:p-14">

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Company Identity</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Company Name" value={form.company} onChange={(v)=>update("company",v)} />
              <Input label="Contact Person" value={form.contact} onChange={(v)=>update("contact",v)} />
              <Input label="Email Address" value={form.email} onChange={(v)=>update("email",v)} />
              <Input label="Phone Number" value={form.phone} onChange={(v)=>update("phone",v)} />
            </div>

            <div className="flex justify-end pt-6">
              <PrimaryButton onClick={next}>Continue</PrimaryButton>
            </div>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Capability & Scale</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Select label="Years of Experience" value={form.experience} options={["0–2","3–5","5–10","10+"]} onChange={(v)=>update("experience",v)} />
              <Select label="Project Type" value={form.projectType} options={["Residential","Commercial","Hospitality","Mixed"]} onChange={(v)=>update("projectType",v)} />
              <Select label="Typical Project Value" value={form.projectValue} options={["$5k–$20k","$20k–$100k","$100k–$500k","$500k+"]} onChange={(v)=>update("projectValue",v)} />
              <Select label="Annual Revenue" value={form.revenue} options={["$50k–$200k","$200k–$1M","$1M–$5M","$5M+"]} onChange={(v)=>update("revenue",v)} />
            </div>

            <div className="flex justify-between pt-6">
              <SecondaryButton onClick={back}>Back</SecondaryButton>
              <PrimaryButton onClick={next}>Continue</PrimaryButton>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Proof of Work</h2>

            <Input label="Brands You Work With" value={form.brands} onChange={(v)=>update("brands",v)} />
            <Textarea label="Notable Projects" value={form.projects} onChange={(v)=>update("projects",v)} />

            <div className="flex justify-between pt-6">
              <SecondaryButton onClick={back}>Back</SecondaryButton>
              <PrimaryButton onClick={submit}>
                {loading ? "Submitting..." : "Submit Application"}
              </PrimaryButton>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}

/* ---------------- UI COMPONENTS ---------------- */

function Input({ label, value, onChange }: {label:string; value:string; onChange:(v:string)=>void}) {
  return (
    <div>
      <label className="text-xs uppercase opacity-50 block mb-2">{label}</label>
      <input value={value} onChange={(e)=>onChange(e.target.value)} className="w-full border-b py-3 focus:outline-none focus:border-black"/>
    </div>
  );
}

function Select({ label, value, options, onChange }: {label:string; value:string; options:string[]; onChange:(v:string)=>void}) {
  return (
    <div>
      <label className="text-xs uppercase opacity-50 block mb-2">{label}</label>
      <select value={value} onChange={(e)=>onChange(e.target.value)} className="w-full border-b py-3 focus:outline-none focus:border-black">
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
      <textarea value={value} onChange={(e)=>onChange(e.target.value)} className="w-full border-b py-3 focus:outline-none focus:border-black"/>
    </div>
  );
}

function PrimaryButton({ children, onClick }: {children:React.ReactNode; onClick:()=>void}) {
  return <button onClick={onClick} className="bg-black text-white px-8 py-3 text-sm">{children}</button>;
}

function SecondaryButton({ children, onClick }: {children:React.ReactNode; onClick:()=>void}) {
  return <button onClick={onClick} className="text-sm opacity-70">{children}</button>;
}