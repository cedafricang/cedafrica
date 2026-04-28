import ArchitectForm from "../../../components/engage/ArchitectForm";

export default function ArchitectsPage() {
  return (
    <main className="w-full min-h-screen bg-[#b8a882] text-[#1a1a1a]">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center px-6">

        {/* Background Orbit */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative w-[500px] h-[500px]">

            <div className="absolute inset-0 border border-black/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-10 border border-black/10 rounded-full animate-spin-reverse" />

          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center">

          <p className="text-sm uppercase tracking-widest opacity-60 mb-4">
            Specifier Pathway
          </p>

          <h1 className="text-4xl text-black md:text-5xl font-medium leading-tight mb-6">
            Request Specifier Support
          </h1>

          <p className="text-lg opacity-80 leading-relaxed">
            Engage CED early in the design process to ensure AV systems are properly 
            integrated into your projects. We support architects and consultants with 
            structured specification frameworks, design clarity, and performance alignment.
          </p>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-medium mb-4">
            Specifier Engagement
          </h2>

          <p className="text-sm opacity-60 mb-10">
            Requests are reviewed based on project stage, scope, and alignment with 
            structured design processes. CED engages at defined points to ensure clarity and performance outcomes.
          </p>

          <ArchitectForm />

        </div>
      </section>

    </main>
  );
}