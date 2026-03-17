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
    type: "Private Cinema",
    title: "Ikoyi Residence Cinema",
    preview: "/images/projects/av1.jpg",
    gallery: ["/images/projects/cinema-1.jpg", "/images/projects/cinema-2.jpg"],
    overview: "A fully engineered private cinema system.",
    challenges: "Acoustic limitations within space.",
    solution: "Custom treatment and calibration.",
    outcome: "Reference-grade immersive experience.",
  },
  {
    id: 2,
    category: "Commercial",
    type: "Boardroom",
    title: "Enterprise Boardroom",
    preview: "/images/projects/warm.png",
    gallery: ["/images/projects/av2.jpg", "/images/projects/boardroom-2.jpg"],
    overview: "Integrated conferencing system.",
    challenges: "Signal routing complexity.",
    solution: "Centralized AV control system.",
    outcome: "Seamless executive communication.",
  },
  {
    id: 3,
    category: "ProAV",
    type: "Control Room",
    title: "Operations Control Room",
    preview: "/images/projects/cinema.jpg",
    gallery: ["/images/projects/control-1.jpg", "/images/projects/control-2.jpg"],
    overview: "Mission-critical monitoring system.",
    challenges: "Real-time data synchronization.",
    solution: "Multi-screen AV distribution.",
    outcome: "High-performance operational visibility.",
  },
  {
    id: 4,
    category: "Residential",
    type: "Hi-Fi",
    title: "Luxury Listening Room",
    preview: "/images/projects/av3.jpg",
    gallery: ["/images/projects/hifi-1.jpg", "/images/projects/hifi-2.jpg"],
    overview: "High-end stereo listening environment.",
    challenges: "Acoustic neutrality.",
    solution: "Precision placement and tuning.",
    outcome: "Balanced immersive sound.",
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
    <section className="bg-white text-black py-24 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        {/* ===== Header ===== */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-2xl">
            <p className="text-[11px] tracking-[0.35em] uppercase text-black/50">
              Reference Systems
            </p>

            <h2 className="mt-4 text-3xl md:text-5xl font-semibold tracking-tight">
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