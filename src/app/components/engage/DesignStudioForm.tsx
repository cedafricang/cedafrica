"use client";
import { useState } from "react";

/* ---------------- TYPES ---------------- */

type DesignFormData = {
  company: string;
  contact: string;
  email: string;
  phone: string;

  projectType: string;
  projectStage: string;
  roomType: string;
  roomSize: string;

  solutionType: string;
  timeline: string;

  drawings: string;
  requirements: string;
};

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

type SelectProps = {
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
};

type TextareaProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
};

/* ---------------- COMPONENT ---------------- */

export default function DesignStudioForm() {
  const [step, setStep] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const [form, setForm] = useState<DesignFormData>({
    company: "",
    contact: "",
    email: "",
    phone: "",

    projectType: "",
    projectStage: "",
    roomType: "",
    roomSize: "",

    solutionType: "",
    timeline: "",

    drawings: "",
    requirements: "",
  });

  const update = (field: keyof DesignFormData, value: string) => {
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
          pathway: "design",
        }),
      });

      if (!res.ok) throw new Error();

      alert("Design consultation request submitted");

      setStep(1);
      setForm({
        company: "",
        contact: "",
        email: "",
        phone: "",
        projectType: "",
        projectStage: "",
        roomType: "",
        roomSize: "",
        solutionType: "",
        timeline: "",
        drawings: "",
        requirements: "",
      });

    } catch {
      alert("Submission failed");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-4xl mx-auto">

      {/* PROGRESS */}
      <div className="mb-12">
        <div className="flex justify-between text-xs uppercase opacity-50 mb-3">
          <span>Identity</span>
          <span>Project</span>
          <span>Details</span>
        </div>

        <div className="h-[2px] bg-gray-200 relative">
          <div
            className="absolute top-0 left-0 h-full bg-black transition-all"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>
      </div>

      <div className="bg-white border border-gray-200 p-10 md:p-14">

        {/* STEP 1 */}
        {step === 1 && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium">Client Information</h2>

            <Input label="Company / Individual" value={form.company} onChange={(v) => update("company", v)} />
            <Input label="Contact Person" value={form.contact} onChange={(v) => update("contact", v)} />
            <Input label="Email Address" value={form.email} onChange={(v) => update("email", v)} />
            <Input label="Phone Number" value={form.phone} onChange={(v) => update("phone", v)} />

            <PrimaryButton onClick={next}>Continue</PrimaryButton>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium">Project Context</h2>

            <Select label="Project Type" value={form.projectType} options={["Residential","Commercial","Hospitality","Mixed"]} onChange={(v) => update("projectType", v)} />
            <Select label="Project Stage" value={form.projectStage} options={["Concept","Design Development","Construction"]} onChange={(v) => update("projectStage", v)} />
            <Select label="Room Type" value={form.roomType} options={["Living Room","Home Cinema","Conference Room","Restaurant","Multi-room","Other"]} onChange={(v) => update("roomType", v)} />

            <Input label="Approximate Room Size (sqm or dimensions)" value={form.roomSize} onChange={(v) => update("roomSize", v)} />

            <div className="flex justify-between">
              <SecondaryButton onClick={back}>Back</SecondaryButton>
              <PrimaryButton onClick={next}>Continue</PrimaryButton>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-xl font-medium">System & Requirements</h2>

            <Select
              label="What are you looking to achieve?"
              value={form.solutionType}
              options={[
                "Background Audio",
                "Home Cinema",
                "Multi-room Audio",
                "Commercial AV System",
                "Unsure / Need Guidance"
              ]}
              onChange={(v) => update("solutionType", v)}
            />

            <Select
              label="Timeline"
              value={form.timeline}
              options={[
                "Immediate",
                "1–3 months",
                "3–6 months",
                "6+ months"
              ]}
              onChange={(v) => update("timeline", v)}
            />

            <Input
              label="Link to Drawings (Google Drive / Dropbox)"
              value={form.drawings}
              onChange={(v) => update("drawings", v)}
            />

            <Textarea
              label="Describe your requirements"
              value={form.requirements}
              onChange={(v) => update("requirements", v)}
            />

            <div className="flex justify-between">
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

function Input({ label, value, onChange }: InputProps) {
  return (
    <div>
      <label className="text-xs uppercase opacity-50 block mb-2">{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b py-3 focus:outline-none focus:border-black"
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
        className="w-full border-b py-3 focus:outline-none focus:border-black"
      >
        <option value="">Select</option>
        {options.map((o, i) => (
          <option key={i} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function Textarea({ label, value, onChange }: TextareaProps) {
  return (
    <div>
      <label className="text-xs uppercase opacity-50 block mb-2">{label}</label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b py-3 focus:outline-none focus:border-black"
      />
    </div>
  );
}

function PrimaryButton({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="bg-black text-white px-6 py-3 text-sm">
      {children}
    </button>
  );
}

function SecondaryButton({ children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className="text-sm opacity-70">
      {children}
    </button>
  );
}