import RetailProgramForm from "../../../components/engage/RetailProgramForm";

export default function RetailProgramPage() {
  return (
    <main className="min-h-screen bg-[#b8a882] text-[#1a1a1a]">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">

          <p className="text-sm uppercase opacity-60 mb-4">
            Retail Program
          </p>

          <h1 className="text-4xl text-black md:text-5xl font-medium mb-6">
            Apply for Retail Program Access
          </h1>

          <p className="opacity-80">
            A structured retail framework for partners representing premium audiovisual 
            brands within controlled environments, defined standards, and curated customer experiences.
          </p>

        </div>
      </section>

      {/* FORM */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-medium mb-4">
            Retail Partnership Application
          </h2>

          <p className="text-sm opacity-60 mb-10">
            Applications are evaluated based on retail environment, brand alignment, 
            and ability to deliver a premium customer experience.
          </p>

          <RetailProgramForm />

        </div>
      </section>

    </main>
  );
}