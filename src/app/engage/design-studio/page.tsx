import DesignStudioForm from "../../components/engage/DesignStudioForm";

export default function DesignStudioPage() {
  return (
    <main className="min-h-screen bg-[#b8a882] text-[#1a1a1a]">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">
          <p className="text-sm uppercase opacity-60 mb-4">
            Design Studio
          </p>

          <h1 className="text-4xl text-black md:text-5xl font-medium mb-6">
            AV Design Consultation
          </h1>

          <p className="opacity-80">
            Engage our design team to define your AV system with clarity and precision.
            This process ensures your project is reviewed, structured, and aligned before execution.
          </p>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-2xl font-medium mb-12">
            How the Design Consultation Works
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <ProcessStep
              number="01"
              title="Share project details"
              text="Provide drawings and key information so we can review the project in advance."
            />

            <ProcessStep
              number="02"
              title="We review the materials"
              text="Project drawings and information are assessed in advance to prepare for a focused consultation."
            />

            <ProcessStep
              number="03"
              title="Structured consultation"
              text="Scope, performance goals, and system direction are clearly defined."
            />

            <ProcessStep
              number="04"
              title="Proposal and next steps"
              text="Receive a defined scope, system recommendation, and structured next steps for delivery."
            />

          </div>

        </div>
      </section>

      {/* FORM */}
      <section className="bg-white py-20 px-6 border-t">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-medium mb-4">
            Share Project Details
          </h2>

          <p className="text-sm opacity-60 mb-10">
            This information allows our design team to prepare in advance and ensure the consultation is focused and productive.
          </p>

          <DesignStudioForm />

        </div>
      </section>

    </main>
  );
}

/* ---------------- COMPONENT ---------------- */

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div>
      <p className="text-xs opacity-40 mb-2">{number}</p>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="opacity-70 text-sm">{text}</p>
    </div>
  );
}