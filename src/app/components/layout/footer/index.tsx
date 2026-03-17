"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

/* ============================= */
/* DATA (CMS READY) */
/* ============================= */

const footerNav = [
  {
    title: "Platform",
    links: [
      { label: "How We Work", href: "/platform" },
      { label: "Governance & Standards", href: "/platform" },
      { label: "Partner Ecosystem", href: "/platform" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "AV Design Studio", href: "/solutions" },
      { label: "ProAV Systems", href: "/solutions" },
      { label: "Reference Systems", href: "/solutions" },
    ],
  },
  {
    title: "Partners",
    links: [
      { label: "Partner Pathways", href: "/partners" },
      { label: "SI Program", href: "/partners" },
      { label: "Retail Program", href: "/partners" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Case Studies", href: "/resources" },
      { label: "Knowledge Hub", href: "/resources" },
      { label: "Downloads", href: "/resources" },
    ],
  },
];

const engageLinks = [
  { label: "Become a Partner", href: "/engage?type=partner" },
  { label: "Request Consultation", href: "/engage?type=design" },
  { label: "Specifier Support", href: "/engage?type=specifier" },
];

/* ============================= */
/* COMPONENT */
/* ============================= */

export default function Footer() {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* ===== SUBTLE BACKGROUND GRAIN (OPTIONAL LUXURY) ===== */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[url('/images/noise.png')]" />
      </div>

      <div className="relative max-w-[1400px] mx-auto px-6 py-24">
        {/* ===== TOP GRID ===== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14">
          {/* ===== IDENTITY ===== */}
          <div className="lg:col-span-4">
            <Image
  src="/images/logo/ced-white.png"
  alt="CED Africa"
  width={110}
  height={32}
  className="object-contain"
/>

            <p className="mt-6 text-white/50 leading-relaxed max-w-sm">
              CED operates as the institutional layer governing audiovisual
              system design, partner ecosystems, and project delivery standards
              across Africa.
            </p>
          </div>

          {/* ===== NAVIGATION ===== */}
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 gap-10">
            {footerNav.map((section, i) => (
              <div key={i}>
                <h4 className="text-[11px] tracking-[0.35em] uppercase text-white/40">
                  {section.title}
                </h4>

                <ul className="mt-6 space-y-3">
                  {section.links.map((link, j) => (
                    <li key={j}>
                      <Link
                        href={link.href}
                        className="text-[14px] text-white/50 hover:text-white transition duration-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* ===== ENGAGE ===== */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] tracking-[0.35em] uppercase text-white/40">
              Engage
            </h4>

            <ul className="mt-6 space-y-4">
              {engageLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="group flex items-center justify-between text-[14px] text-white/60 hover:text-white transition"
                  >
                    {link.label}

                    <span className="w-7 h-7 flex items-center justify-center rounded-full border border-white/20 group-hover:border-white transition">
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ===== LUXURY DIVIDER ===== */}
        <div className="mt-20 relative h-[1px] w-full overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#cfcfcf] to-transparent opacity-50"
          />
        </div>

        {/* ===== BOTTOM ===== */}
        <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="text-[12px] text-white/40">
            © {new Date().getFullYear()} CED Africa. All rights reserved.
          </p>

          <div className="flex gap-6 text-[12px] text-white/40">
            <Link href="#" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}