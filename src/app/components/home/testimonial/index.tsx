"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ============================= */
/* DATA (CMS READY) */
/* ============================= */

const projects = [
  {
  id: 1,
  category: "Residential",
  type: "Home Technology & Private Cinema",
  title: "Project Mortimer",
  preview: "/images/projects/motimer1.png",
  gallery: [
    "/images/projects/motimer2.png",
    "/images/projects/motimer3.png"
  ],

  overview: "A design-led residential technology project delivering a fully integrated home experience, including a high-performance private cinema engineered for clarity, control, and immersion.",

  challenges: "Premium home technology projects are often driven by contractor decisions rather than performance intent, leading to inconsistent system behavior, poor user experience, and compromised acoustic outcomes within spatial constraints.",

  solution: "CED defined the performance intent from the outset, developed system architecture and user flows, and produced detailed engineering documentation covering audio-visual distribution, cinema design, and infrastructure. Acoustic strategy, speaker layout, and calibration parameters were specified to align with reference performance standards, while execution was guided to maintain design integrity.",

  outcome: "A predictable, high-performance home technology environment where audio-visual systems operate seamlessly across spaces. The private cinema delivers a controlled, immersive experience aligned with reference benchmarks, while the overall system remains intuitive, reliable, and true to the original design intent."
},
  {
  id: 2,
  category: "Residential",
  type: "Private Cinema & Reference Performance",
  title: "Alexence Cinema",
  preview: "/images/projects/alex.jpg",
  gallery: [
    "/images/projects/alex.jpg"
    
  ],

  overview: "A reference-grade private cinema environment engineered for immersive playback, precision acoustics, and controlled visual performance within a luxury residential setting.",

  challenges: "Delivering true cinematic performance within a residential envelope required balancing acoustic control, speaker placement, and visual integration, while avoiding the common pitfalls of uneven coverage, excessive reflections, and compromised viewing conditions.",

  solution: "CED defined the performance targets across audio clarity, coverage, and visual fidelity, then developed a complete system architecture including loudspeaker layout, acoustic treatment strategy, projection design, and control integration. Detailed engineering documentation ensured alignment between design intent and execution, with calibration parameters specified to achieve reference-level playback.",

  outcome: "A controlled, immersive cinema experience with consistent coverage, balanced acoustics, and refined visual performance. The system delivers predictable, high-fidelity playback aligned with reference standards, while remaining seamlessly integrated into the residential environment."
},
  {
  id: 3,
  category: "Commercial",
  type: "AV Experience Centre",
  title: "Soundhous Experience Centre",
  preview: "/images/projects/cinema.jpg",
  gallery: [
    "/images/projects/hifi.jpeg",
    "/images/projects/soundhous.jpg"
  ],

  overview: "A multi-space AV experience centre designed to demonstrate high-performance audio-visual systems across real-life environments, including media rooms, hi-fi spaces, home cinema, and social zones.",

  challenges: "Creating multiple distinct AV environments within a single location required precise system zoning, acoustic control, and seamless integration, while ensuring each space delivered a unique yet consistent performance experience without interference or compromise.",

  solution: "CED defined performance intent across each zone, developing system architecture for audio distribution, room-specific tuning, and control integration. Detailed engineering documentation guided the deployment of cinema systems, hi-fi listening setups, and multi-room audio, with acoustic strategies and calibration parameters tailored to each environment.",

  outcome: "A fully immersive experience centre where users can transition seamlessly between spaces, each delivering controlled, high-fidelity performance. The environment serves as a live benchmark for AV system design, showcasing clarity, consistency, and the impact of a design-led approach."
},
 {
  id: 4,
  category: "Commercial",
  type: "Restaurant & Lounge",
  title: "Kilala Restaurant & Lounge",
  preview: "/images/projects/kilala3.jpeg",
  gallery: [
    "/images/projects/kilala.jpeg",
    "/images/projects/kilala1.jpeg"
  ],

  overview: "A design-led hospitality AV system delivering a refined, atmosphere-driven audio experience across dining and lounge environments, seamlessly integrated within the architectural space.",

  challenges: "Hospitality environments require consistent audio coverage without visual intrusion, balancing multiple zones with different energy levels while avoiding uneven sound distribution, excessive volume, or disruption to the guest experience.",

  solution: "CED defined the performance intent for both dining and lounge areas, developing a zoned audio system with precise speaker placement, controlled coverage, and discreet integration. System architecture, acoustic considerations, and calibration parameters were specified to ensure clarity, balance, and consistency across all areas while preserving the visual integrity of the space.",

  outcome: "A cohesive and immersive sound environment where audio enhances the atmosphere without drawing attention to itself. Guests experience consistent, high-quality sound across zones, reinforcing the identity of the space while maintaining comfort, clarity, and control."
},


{
  id: 7,
  category: "ProAV",
  type: "House of Worship",
  title: "AMCC House of Worship",
  preview: "/images/projects/amvc.jpeg",
  gallery: [
    "/images/projects/amvc1.jpeg",
    "/images/projects/amvc2.jpeg"
  ],

  overview: "A performance-driven AV system engineered for a large-scale worship environment, delivering consistent coverage, speech intelligibility, and controlled sound across the entire audience area.",

  challenges: "Large worship spaces present complex acoustic conditions, including reflections, reverberation, and uneven coverage, requiring precise system design to achieve clarity and consistent sound pressure levels without compromising the architectural vision.",

  solution: "CED defined performance targets for coverage, intelligibility, and SPL, developing a structured loudspeaker system design aligned with seating geometry and spatial constraints. Acoustic considerations, system configuration, and calibration parameters were documented in detail to ensure accurate implementation and alignment with design intent.",

  outcome: "A balanced and intelligible audio environment with consistent coverage across the space, delivering clear communication and immersive sound while maintaining control, reliability, and alignment with architectural aesthetics."
},
];

/* ============================= */
/* MAIN COMPONENT */
/* ============================= */

export default function ReferenceSystems() {
  const [activeProject, setActiveProject] = useState<any>(null);
  const [activeTab, setActiveTab] = useState("All");

  const scrollRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const categories = ["All", "Residential", "Commercial", "ProAV"];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  /* ===== PERFECT SCROLL (1 CARD AT A TIME) ===== */
  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const scrollLeft = container.scrollLeft;

    let closestIndex = 0;
    let closestDistance = Infinity;

    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const distance = Math.abs(el.offsetLeft - scrollLeft);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = i;
      }
    });

    let nextIndex =
      dir === "right" ? closestIndex + 1 : closestIndex - 1;

    nextIndex = Math.max(0, Math.min(nextIndex, filteredProjects.length - 1));

    const target = itemRefs.current[nextIndex];

    if (target) {
      container.scrollTo({
        left: target.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-[#b8a882] text-black py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ===== Header ===== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.35em] uppercase text-black/50">
              Reference Systems
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold text-black tracking-tight">
              Proven Systems
            </h2>
          </div>

          {/* ===== Tabs ===== */}
          <div className="relative mt-4 md:mt-0">
            <div className="flex overflow-x-auto no-scrollbar gap-6 pr-6">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveTab(cat)}
                  className={`flex-shrink-0 text-[11px] tracking-[0.3em] uppercase transition whitespace-nowrap ${
                    activeTab === cat
                      ? "text-black"
                      : "text-black/40 hover:text-black"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-white to-transparent" />
          </div>
        </div>

        {/* ===== Controls (Desktop Only) ===== */}
        <div className="mt-10 hidden md:flex justify-end gap-3">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 flex items-center justify-center border border-black/20 rounded-full hover:border-black transition"
          >
            ←
          </button>

          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 flex items-center justify-center border border-black/20 rounded-full hover:border-black transition"
          >
            →
          </button>
        </div>

        {/* ===== Slider ===== */}
        <div
          ref={scrollRef}
          className="mt-6 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 px-6 scrollbar-hide"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              onClick={() => setActiveProject(project)}
              className="w-[85%] sm:w-[70%] md:w-[420px] snap-start shrink-0 cursor-pointer group"
            >
              {/* ✅ PERFECT SQUARE IMAGE */}
              <div className="relative w-full aspect-square overflow-hidden">
                <img
                  src={project.preview}
                  className="w-full h-full object-cover pointer-events-none"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
              </div>

              <div className="mt-4">
                <p className="text-[11px] tracking-[0.3em] uppercase text-black/50">
                  {project.type}
                </p>
                <h3 className="mt-2 text-black/70 text-xl font-medium">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== MODAL ===== */}
      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>

      {/* Hide scrollbar */}
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}

/* ============================= */
/* MODAL */
/* ============================= */

function ProjectModal({ project, onClose }: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm overflow-y-auto"
    >
      <div className="max-w-5xl mx-auto py-20 px-6">
        <button
          onClick={onClose}
          className="text-white text-sm tracking-[0.3em] uppercase mb-10"
        >
          Close ✕
        </button>

        <h2 className="text-white text-3xl font-semibold">
          {project.title}
        </h2>

        <p className="text-white/50 mt-2">{project.type}</p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.gallery.map((img: string, i: number) => (
            <img
              key={i}
              src={img}
              className="w-full h-[260px] object-cover"
            />
          ))}
        </div>

        <div className="mt-12 space-y-8 text-white/80">
          <div>
            <h3 className="text-white text-sm uppercase mb-2">Overview</h3>
            <p>{project.overview}</p>
          </div>

          <div>
            <h3 className="text-white text-sm uppercase mb-2">Challenges</h3>
            <p>{project.challenges}</p>
          </div>

          <div>
            <h3 className="text-white text-sm uppercase mb-2">Solution</h3>
            <p>{project.solution}</p>
          </div>

          <div>
            <h3 className="text-white text-sm uppercase mb-2">Outcome</h3>
            <p>{project.outcome}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}