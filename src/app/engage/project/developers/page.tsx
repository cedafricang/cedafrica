import DeveloperForm from "../../../components/engage/DeveloperForm";

export default function DevelopersPage() {
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
            Project Pathway
          </p>

          <h1 className="text-4xl md:text-5xl text-black font-medium leading-tight mb-6">
            Initiate Project Consultation
          </h1>

          <p className="text-lg opacity-80 leading-relaxed">
            Engage CED to integrate AV systems into your project with clarity, 
            coordination, and execution discipline. We work alongside developers 
            and contractors to ensure systems are aligned with scope, timelines, 
            and performance requirements.
          </p>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-medium mb-4">
            Project Consultation Request
          </h2>

          <p className="text-sm opacity-60 mb-10">
            Submissions are reviewed based on project scope, stage, and delivery requirements. 
            CED engages within defined project frameworks to ensure structured execution and system performance.
          </p>

          <DeveloperForm />

        </div>
      </section>

    </main>
  );
}