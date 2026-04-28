import ProAVForm from "../../components/engage/ProAVForm";

export default function ProAVPage() {
  return (
    <main className="w-full min-h-screen bg-[#b8a882] text-[#1a1a1a]">

      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center px-6">

        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <div className="relative w-[500px] h-[500px]">
            <div className="absolute inset-0 border border-black/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-10 border border-black/10 rounded-full animate-spin-reverse" />
          </div>
        </div>

        <div className="relative z-10 max-w-3xl text-center">
          <p className="text-sm uppercase tracking-widest opacity-60 mb-4">
            ProAV Systems
          </p>

          <h1 className="text-4xl text-black md:text-5xl font-medium mb-6">
            Engage ProAV Systems Team
          </h1>

          <p className="text-lg opacity-80">
            Deploy engineered AV systems designed for performance, reliability, 
            and scalability. CED works with enterprise and institutional clients 
            to deliver structured ProAV environments across single and multi-site deployments.
          </p>
        </div>

      </section>

      {/* FORM */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-medium mb-4">
            ProAV Engagement
          </h2>

          <p className="text-sm opacity-60 mb-10">
            Engagements are structured based on system scale, performance requirements, 
            and operational needs. CED operates within defined frameworks to ensure reliability and long-term system performance.
          </p>

          <ProAVForm />

        </div>
      </section>

    </main>
  );
}