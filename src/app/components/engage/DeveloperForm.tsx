"use client";
import { useState } from "react";

/* ---------------- TYPES ---------------- */

type DeveloperFormData = {
  company: string;
  contact: string;
  email: string;
  phone: string;
  role: string;
  projectName: string;
  projectType: string;
  projectStage: string;
  projectScale: string;
  timeline: string;
  budgetRange: string;
  needs: string;
  notes: string;
};

/* ---------------- COMPONENT ---------------- */

export default function DeveloperForm() {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<DeveloperFormData>({
    company: "",
    contact: "",
    email: "",
    phone: "",
    role: "",
    projectName: "",
    projectType: "",
    projectStage: "",
    projectScale: "",
    timeline: "",
    budgetRange: "",
    needs: "",
    notes: "",
  });

  const update = (field: keyof DeveloperFormData, value: string) => {
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
          pathway: "project", // 🔥 CRITICAL
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error);

      alert("Consultation request submitted");

      setStep(1);
      setForm({
        company: "",
        contact: "",
        email: "",
        phone: "",
        role: "",
        projectName: "",
        projectType: "",
        projectStage: "",
        projectScale: "",
        timeline: "",
        budgetRange: "",
        needs: "",
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
          <span>Project</span>
          <span>Requirements</span>
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
            <h2 className="text-2xl font-medium">Project Details</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <Select label="Your Role" value={form.role} options={["Developer","Main Contractor","Project Manager"]} onChange={(v)=>update("role",v)} />
              <Input label="Project Name" value={form.projectName} onChange={(v)=>update("projectName",v)} />
              <Select label="Project Type" value={form.projectType} options={["Residential","Commercial","Hospitality","Mixed"]} onChange={(v)=>update("projectType",v)} />
              <Select label="Project Stage" value={form.projectStage} options={["Planning","Design","Construction","Near Completion"]} onChange={(v)=>update("projectStage",v)} />
              <Select label="Project Scale" value={form.projectScale} options={["Single Unit","Multi-Unit","Commercial","Large Scale"]} onChange={(v)=>update("projectScale",v)} />
              <Select label="Timeline" value={form.timeline} options={["0–3 months","3–6 months","6–12 months","12+ months"]} onChange={(v)=>update("timeline",v)} />
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
            <h2 className="text-2xl font-medium">Project Requirements</h2>

            <Select label="Estimated Budget Range" value={form.budgetRange} options={["$10k–$50k","$50k–$200k","$200k–$1M","$1M+"]} onChange={(v)=>update("budgetRange",v)} />

            <Textarea label="What do you need from CED?" value={form.needs} onChange={(v)=>update("needs",v)} />

            <Textarea label="Additional Notes" value={form.notes} onChange={(v)=>update("notes",v)} />

            <div className="flex justify-between pt-6">
              <SecondaryButton onClick={back}>Back</SecondaryButton>
              <PrimaryButton onClick={submit}>
                {loading ? "Submitting..." : "Request Consultation"}
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