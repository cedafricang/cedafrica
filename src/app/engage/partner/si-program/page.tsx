import SIProgramForm from "../../../components/engage/SIProgramForm";

export default function SIProgramPage() {
  return (
    <main className="min-h-screen bg-[#b8a882] text-[#1a1a1a]">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">

          <p className="text-sm uppercase opacity-60 mb-4">
            System Integrator Program
          </p>

          <h1 className="text-4xl text-black md:text-5xl font-medium mb-6">
            Apply for SI Program Access
          </h1>

          <p className="opacity-80">
            Entry into the SI Program is structured, evaluated, and capability-driven. 
            This pathway is designed for system integrators seeking alignment with 
            standards, certification, and participation in controlled project delivery.
          </p>

        </div>
      </section>

      {/* FORM */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-medium mb-4">
            Begin Assessment
          </h2>

          <p className="text-sm opacity-60 mb-10">
            Submissions are reviewed based on technical capability, project experience, 
            and operational structure. Only qualified applicants proceed.
          </p>

          <SIProgramForm />

        </div>
      </section>

    </main>
  );
}