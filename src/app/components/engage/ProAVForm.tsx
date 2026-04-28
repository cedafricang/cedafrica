"use client";
import { useState } from "react";

/* ---------------- TYPES ---------------- */

type ProAVFormData = {
  organization: string;
  contact: string;
  email: string;
  phone: string;
  environment: string;
  projectType: string;
  systemScale: string;
  timeline: string;
  requirements: string;
  notes: string;
};

/* ---------------- COMPONENT ---------------- */

export default function ProAVForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState<ProAVFormData>({
    organization: "",
    contact: "",
    email: "",
    phone: "",
    environment: "",
    projectType: "",
    systemScale: "",
    timeline: "",
    requirements: "",
    notes: "",
  });

  const update = (field: keyof ProAVFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const next = () => setStep((s) => s + 1);
  const back = () => setStep((s) => s - 1);

  const submit = async () => {
    if (!form.organization || !form.email || !form.contact) {
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
          company: form.organization, // map for CRM consistency
          pathway: "proav", // 🔥 CRITICAL
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      alert("Engagement request submitted");

      setStep(1);
      setForm({
        organization: "",
        contact: "",
        email: "",
        phone: "",
        environment: "",
        projectType: "",
        systemScale: "",
        timeline: "",
        requirements: "",
        notes: "",
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
          <span>System</span>
          <span>Requirements</span>
        </div>

        <div className="h-[2px] bg-gray-200 relative">
          <div
            className="absolute top-0 left-0 h-full bg-black transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      {/* FORM */}
      <div className="bg-white border border-gray-200 p-10 md:p-14">

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-8">
            <h2 className="text-2xl font-medium">Organisation</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Input label="Organisation Name" value={form.organization} onChange={(v)=>update("organization",v)} />
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
            <h2 className="text-2xl font-medium">System Context</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Select label="Environment" value={form.environment} options={["Corporate","Education","Hospitality","Government","Mixed"]} onChange={(v)=>update("environment",v)} />
              <Select label="Project Type" value={form.projectType} options={["New Build","Upgrade","Expansion","Retrofit"]} onChange={(v)=>update("projectType",v)} />
              <Select label="System Scale" value={form.systemScale} options={["Single Space","Multi-Room","Building","Campus / Multi-Site"]} onChange={(v)=>update("systemScale",v)} />
              <Select label="Timeline" value={form.timeline} options={["Immediate","0–3 months","3–6 months","6+ months"]} onChange={(v)=>update("timeline",v)} />
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
            <h2 className="text-2xl font-medium">Requirements</h2>

            <Textarea label="System Requirements" value={form.requirements} onChange={(v)=>update("requirements",v)} />
            <Textarea label="Additional Notes" value={form.notes} onChange={(v)=>update("notes",v)} />

            <div className="flex justify-between pt-6">
              <SecondaryButton onClick={back}>Back</SecondaryButton>
              <PrimaryButton onClick={submit}>
                {loading ? "Submitting..." : "Engage ProAV Team"}
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