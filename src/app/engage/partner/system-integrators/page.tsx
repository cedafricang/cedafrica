import PartnerForm from "../../../components/engage/PartnerForm";

export default function SystemIntegratorsPage() {
  return (
    <main className="w-full min-h-screen bg-[#b8a882] text-[#1a1a1a]">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center px-6">

        {/* Background Orbit (subtle, not flashy) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative w-[500px] h-[500px]">

            <div className="absolute inset-0 border border-black/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-10 border border-black/10 rounded-full animate-spin-reverse" />

          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl text-center">

          <p className="text-sm uppercase tracking-widest opacity-60 mb-4">
            Partner Pathway
          </p>

          <h1 className="text-4xl md:text-5xl text-black font-medium leading-tight mb-6">
            Apply for System Integrator Access
          </h1>

          <p className="text-lg opacity-80 leading-relaxed">
            Entry into the CED ecosystem is governed and capability-driven. 
            This pathway is designed for system integrators seeking alignment 
            with structured standards, certified frameworks, and performance-led delivery.
          </p>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-medium mb-4">
            Partner Application
          </h2>

          <p className="text-sm opacity-60 mb-10">
            Submissions are reviewed based on technical capability, project experience, 
            and alignment with CED standards. Only qualified applicants proceed.
          </p>

          <PartnerForm />

        </div>
      </section>

    </main>
  );
}