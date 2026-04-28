import Link from "next/link";
import PartnerGeneralForm from "../../components/engage/PartnerGeneralForm";

export default function PartnerEntryPage() {
  return (
    <main className="min-h-screen bg-[#b8a882] text-[#1a1a1a]">

      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center px-6">
        <div className="max-w-3xl">

          <p className="text-sm uppercase opacity-60 mb-4">
            Partner Ecosystem
          </p>

          <h1 className="text-4xl text-black md:text-5xl font-medium mb-6">
            Join the CED Partner Ecosystem
          </h1>

          <p className="opacity-80">
            CED operates a structured partner ecosystem defined by capability, 
            standards, and alignment. Select the pathway that reflects your role.
          </p>

        </div>
      </section>

      {/* PATHWAYS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

          <PathwayCard
            title="System Integrators"
            text="For AV system integrators seeking certification, standards, and project alignment."
            link="/engage/partner/system-integrators"
            cta="Apply as Integrator"
          />

          <PathwayCard
            title="Architects & Consultants"
            text="For architects and consultants requiring AV specification support and design alignment."
            link="/engage/specifier/architects"
            cta="Request Specifier Support"
          />

          <PathwayCard
            title="Developers & Contractors"
            text="For project teams integrating AV systems into developments with structured execution."
            link="/engage/project/developers"
            cta="Start Project Engagement"
          />

          <PathwayCard
            title="Enterprise / ProAV"
            text="For enterprise and institutional environments requiring scalable AV systems."
            link="/engage/proav"
            cta="Engage ProAV Team"
          />

        </div>
      </section>

      {/* FALLBACK */}
      <section className="bg-white py-20 px-6 border-t">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-2xl font-medium mb-4">
            Not sure where you fit?
          </h2>

          <p className="text-sm opacity-60 mb-10">
            Provide your details and we will route you to the appropriate pathway.
          </p>

          <PartnerGeneralForm />

        </div>
      </section>

    </main>
  );
}

/* ---------------- COMPONENT ---------------- */

function PathwayCard({
  title,
  text,
  link,
  cta,
}: {
  title: string;
  text: string;
  link: string;
  cta: string;
}) {
  return (
    <div className="border border-gray-200 p-8">

      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-sm opacity-70 mb-6">{text}</p>

      <Link href={link}>
        <button className="bg-black text-white px-6 py-3 text-sm">
          {cta}
        </button>
      </Link>

    </div>
  );
}