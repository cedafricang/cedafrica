"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

/* ============================= */
/* TYPES */
/* ============================= */

type SubLink = {
  label: string;
  href?: string;
  sublinks?: { label: string; href: string }[];
};

type MegaData = {
  title: string;
  desc: string;
  image: string;
  links: SubLink[];
};

type NavItem = {
  label: string;
  href?: string;
  mega?: MegaData;
};

/* ============================= */
/* NAV DATA */
/* ============================= */

const nav: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Platform",
    mega: {
      title: "Platform Governance",
      desc: "How CED governs partners, standards and AV system design.",
      image: "/images/hero/h5.webp",
      links: [
        { label: "How We Work", href: "/how-we-work" },
        { label: "Governance & Standards", href: "/governance" },
        { label: "Certified Partner Ecosystem", href: "/partner-ecosystem" },
      ],
    },
  },
  {
    label: "Solutions",
    mega: {
      title: "Engineering AV Systems",
      desc: "Consulting, system design and reference AV environments.",
      image: "/images/hero/foc.webp",
      links: [
  {
    label: "AV Design Studio",
    href: "/design-studio",
    sublinks: [
      { label: "Residential Home Technology", href: "/design-studio/solutions/rts" },
      { label: "Pro AV Solutions", href: "/design-studio/solutions/pas" },
      { label: "Hospitality AV Solutions", href: "/design-studio/solutions/has" },
      { label: "Reference Home Cinema", href: "/design-studio/solutions/rhc" },
    ],
  },
  {
    label: "ProAV Systems",
    href: "/proav",
    sublinks: [
    //put submenu
    ],
  },
  {
    label: "Reference Performance Systems",
    href: "/performance-system",
    sublinks: [
      // submenu here
    ],
  },
]
    },
  },
  {
    label: "Partners",
    mega: {
      title: "Channel Partner Programs",
      desc: "Programs designed for system integrators and AV partners.",
      image: "/images/hero/si.webp",
      links: [
        { label: "Partner Pathways", href: "/partner-pathway" },
        { label: "SI Program", href: "/si-program" },
        { label: "ProAV SI Program", href: "/proav-si-program" },
        { label: "Retail Program", href: "/retail-program" },
        { label: "Contractor Program", href: "/contractor-program" },
      ],
    },
  },
  { label: "Brands", href: "/brands" },
  {
    label: "Industry",
    mega: {
      title: "Industry Specification",
      desc: "Supporting architects and consultants in specifying AV systems.",
      image: "/images/hero/arch.webp",
      links: [
        { label: "Architects & MEP Consultants", href: "/architects-and-mep" },
        { label: "CPD / Learning & Events", href: "/cpd" },
      ],
    },
  },
  {
    label: "Resources",
    mega: {
      title: "Reference Knowledge",
      desc: "Evidence, knowledge and technical documentation.",
      image: "/images/nav/hifi.jpg",
      links: [
        { label: "Case Studies", href: "/case-studies" },
        { label: "Knowledge Hub", href: "/knowledge-hub" },
        
      ],
    },
  },
  { label: "About", href: "/about" },
];

/* ============================= */
/* HEADER */
/* ============================= */

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* lock body scroll */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  }, [mobileOpen]);

  const closeAllMenus = () => {
  setActive(null);
  setMobileOpen(false);
  setMobileSub(null);
};

  const activeMega = nav.find((n) => n.label === active)?.mega;

  return (
    <>
     <header
  onMouseLeave={() => setActive(null)}
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-500
  bg-white
  ${scrolled ? "lg:bg-white/95 lg:backdrop-blur-xl lg:shadow-sm" : "lg:bg-transparent"}
  `}
>
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="h-20 flex items-center justify-between">
            <>
  {/* MOBILE LOGO (always black) */}
  <Image
    src="/images/logo/ced.png"
    alt="CED"
    width={80}
    height={28}
    className="block lg:hidden"
  />

  {/* DESKTOP LOGO (changes on scroll) */}
  <Image
    src={scrolled ? "/images/logo/ced.png" : "/images/logo/ced-white.png"}
    alt="CED"
    width={80}
    height={28}
    className="hidden lg:block transition-all duration-500"
  />
</>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center gap-12">
              {nav.map((item, i) =>
  item.mega ? (
    <span
      key={i}
      onMouseEnter={() => setActive(item.label)}
      className={`nav-item transition-colors duration-500 ${
        scrolled ? "text-black" : "text-white"
      }`}
    >
      {item.label}
    </span>
  ) : (
    <Link
  key={i}
  href={item.href || "#"}
  onClick={closeAllMenus}
  onMouseEnter={() => setActive(null)} // ✅ THIS IS THE FIX
      className={`nav-item transition-colors duration-500 ${
        scrolled ? "text-black" : "text-white"
      }`}
    >
      {item.label}
    </Link>
  )
)}
            </nav>

            {/* CTA */}
            <Link
  href="/engage/partner"
  className={`hidden lg:flex items-center justify-center px-6 py-2 rounded-full text-[11px] tracking-[0.35em] uppercase border transition-all duration-500
  ${
    scrolled
      ? "border-black/30 text-black hover:border-black"
      : "border-white/30 text-white hover:border-white"
  }`}
>
  Engage
</Link>

            {/* HAMBURGER */}
            <button className="hamburger" onClick={() => setMobileOpen(true)}>
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <div className="nav-divider" />

        <MegaMenu item={activeMega} onClose={closeAllMenus} />

        {/* MOBILE MENU */}
        <div className={`mobile-overlay ${mobileOpen ? "open" : ""}`}>
          <div className="mobile-panel">
            {/* top bar */}
            <div className="mobile-top">
              <Image src="/images/logo/ced.png" alt="" width={80} height={26} />

              <button
                className="mobile-close"
                onClick={() => setMobileOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* menu items */}
            <div className="mobile-scroll">
              {nav.map((item, i) => (
                <div key={i} className="mobile-group">
                  <button
                    className="mobile-item"
                    onClick={() =>
                      item.mega
                        ? setMobileSub(
                            mobileSub === item.label ? null : item.label
                          )
                        : null
                    }
                  >
                    {item.href ? (
  <Link href={item.href} onClick={closeAllMenus}>
    {item.label}
  </Link>
) : (
  item.label
)}

                    {item.mega && (
                      <span
  className={`plus ${
    mobileSub === item.label ? "rotate" : ""
  }`}
>
  +
</span>
                    )}
                  </button>

                  {item.mega && (
                    <div
                      className={`mobile-sub ${
                        mobileSub === item.label ? "open" : ""
                      }`}
                    >
                      {item.mega.links.map((l, j) => (
  <div key={j}>

    {/* MAIN ITEM */}
    {l.href ? (
      <Link
        href={l.href}
        className="mobile-sub-item"
        onClick={closeAllMenus}
      >
        {l.label}
      </Link>
    ) : (
      <div className="mobile-sub-item opacity-70">
        {l.label}
      </div>
    )}

    {/* SUBLINKS (NEW 🔥) */}
    {l.sublinks &&
      l.sublinks.map((sub, k) => (
        <Link
          key={k}
          href={sub.href}
          className="mobile-sub-item pl-4"
          onClick={closeAllMenus}
        >
          {sub.label}
        </Link>
      ))}

  </div>
))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

<style jsx global>{`

/* NAV */

.nav-item{
  font-size:11px;
  letter-spacing:.32em;
  text-transform:uppercase;
  cursor:pointer;
  position:relative; /* IMPORTANT */
  padding-bottom:8px; /* space for underline */
}
  .nav-item::after{
  content:"";
  position:absolute;
  left:50%;
  bottom:0;
  transform:translateX(-50%) scaleX(0);
  transform-origin:center;
  width:100%;
  height:1.5px;

  /* SILVER LUXURY GRADIENT */
  background:linear-gradient(
    90deg,
    transparent,
    #cfcfcf,
    #ffffff,
    #cfcfcf,
    transparent
  );

  transition:transform .45s cubic-bezier(.65,0,.35,1);
}
  .nav-item:hover::after{
  transform:translateX(-50%) scaleX(1);
}
  background:linear-gradient(
  90deg,
  transparent,
  rgba(255,255,255,0.2),
  #ffffff,
  rgba(255,255,255,0.2),
  transparent
);

.nav-divider{
width:100%;
height:1px;
background:linear-gradient(90deg,transparent,#e5e5e5,#ffffff,#e5e5e5,transparent);
}

/* HAMBURGER */

.hamburger{
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
gap:4px;
width:44px;
height:44px;
border-radius:999px;
background:white;
box-shadow:0 8px 24px rgba(0,0,0,.12);
}

.hamburger span{
width:18px;
height:2px;
background:#111;
display:block;
}

@media(min-width:1024px){
.hamburger{display:none;}
}

/* MOBILE */

.mobile-overlay{
position:fixed;
inset:0;
background:white;
opacity:0;
pointer-events:none;
transition:opacity .35s ease;
}

.mobile-overlay.open{
opacity:1;
pointer-events:auto;
}

/* FULL SCREEN PANEL */

.mobile-panel{
height:100%;
display:flex;
flex-direction:column;
}

/* TOP */

.mobile-top{
height:80px;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 24px;
border-bottom:1px solid rgba(0,0,0,.06);
}

/* CLOSE */

.mobile-close{
font-size:22px;
width:42px;
height:42px;
border-radius:999px;
display:flex;
align-items:center;
justify-content:center;
}

/* SCROLL AREA */

.mobile-scroll{
flex:1;
overflow-y:auto;
padding:20px 26px 40px;
}

/* ITEMS */

.mobile-item{
display:flex;
justify-content:space-between;
align-items:center;
font-size:17px;
padding:18px 0;
border-bottom:1px solid rgba(0,0,0,.07);
}

/* CHEVRON */

.plus{
display:flex;
align-items:center;
justify-content:center;
width:32px;
height:32px;
font-size:22px;
font-weight:300;
transition:transform .25s ease;
margin-left:20px;
}

.plus.rotate{
transform:rotate(45deg);
}
/* SUBMENU */

.mobile-sub{
max-height:0;
overflow:hidden;
display:flex;
flex-direction:column;
transition:max-height .35s ease;
}

.mobile-sub.open{
max-height:400px;
}

.mobile-sub-item{
  font-size:15px;
  padding:10px 0;
  display:block;
}

/* MAIN ITEM */
.mobile-sub-item{
  font-weight:500;
}

/* CHILD ITEMS */
.mobile-sub-item.pl-4{
  padding-left:20px;
  font-size:14px;
  opacity:.6;
}

/* DESKTOP MEGA */

.mega{
display:none;
}

@media(min-width:1024px){

.mega{
position:absolute;
top:100%;
left:0;
right:0;
display:flex;
justify-content:center;
opacity:0;
pointer-events:none;
transition:.3s;
}

.mega.open{
opacity:1;
pointer-events:auto;
}

}

`}</style>
    </>
  );
}

/* ============================= */
/* MEGA MENU */
/* ============================= */

function MegaMenu({ item, onClose }: { item?: MegaData; onClose: () => void }) {
  if (!item) return null;

  return (
    <div className="mega open">
  <div className="mega-inner">

    {/* IMAGE */}
    <div className="mega-image">
      <Image src={item.image} alt="" fill style={{ objectFit: "cover" }} />
    </div>

    {/* CONTENT */}
    <div>
      <h3>{item.title}</h3>
      <p>{item.desc}</p>

      {/* LINKS */}
      <div className="mega-links">
        {item.links.map((l, i) => (
          <div key={i} className="mega-block">

            {/* MAIN LINK */}
            {l.href ? (
              <Link href={l.href} className="mega-link" onClick={onClose}>
                <span>{l.label}</span>
                <span className="icon">→</span>
              </Link>
            ) : (
              <div className="mega-link no-click">
                <span>{l.label}</span>
              </div>
            )}

            {/* SUB LINKS */}
            {l.sublinks && (
              <div className="mega-sublinks">
                {l.sublinks.map((sub, j) => (
                  <Link
                    key={j}
                    href={sub.href}
                    onClick={onClose}
                    className="mega-sublink"
                  >
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}

          </div>
        ))}
      </div>
    </div>

  </div>

  {/* ✅ STYLE MUST BE OUTSIDE INNER DIV */}
  <style jsx>{`
    .mega-inner{
      max-width:1400px;
      width:100%;
      background:white;
      padding:60px 40px;
      display:grid;
      grid-template-columns:420px 1fr;
      gap:60px;
      box-shadow:0 30px 80px rgba(0,0,0,.12);
    }

    .mega-image{
      position:relative;
      height:260px;
      border-radius:10px;
      overflow:hidden;
    }

    .mega-links{
  display:grid;
  grid-template-columns: repeat(3, 1fr); /* 🔥 FORCE 3 COLUMNS */
  gap:40px;
  margin-top:30px;
  align-items:start;
}

    .mega-link{
  display:flex;
  justify-content:space-between;
  align-items:center;
  font-size:13px;
  font-weight:500;
  padding:0;
  border:none;
}
  .mega-block{
  display:flex;
  flex-direction:column;
  gap:12px;
}

.mega-link{
  font-size:13px;
  letter-spacing:.2em;
  text-transform:uppercase;
}

.mega-sublink{
  font-size:13px;
  opacity:.6;
  padding-left:0;
}

    .icon{
      width:28px;
      height:28px;
      border-radius:50%;
      border:1px solid #4b5563;
      display:flex;
      align-items:center;
      justify-content:center;
    }
      .mobile-sub{
  display:flex;
  flex-direction:column;
  gap:6px; /* 🔥 THIS CREATES SEPARATION */
}
  /* Parent (category title) */
.mobile-sub > div > .mobile-sub-item{
  font-size:15px;
  font-weight:500;
  margin-top:10px;
}

/* Children */
.mobile-sub-item.pl-4{
  border-left:1px solid rgba(0,0,0,.08);
  padding-left:16px;
}

    .mega-block {
      display: flex;
      flex-direction: column;
    }

    .no-click {
      pointer-events: none;
      opacity: 0.8;
    }

    .mega-sublinks {
      margin-top: 10px;
      padding-left: 10px;
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .mega-sublink {
      font-size: 13px;
      opacity: 0.6;
      transition: all 0.2s ease;
    }

    .mega-sublink:hover {
      opacity: 1;
      transform: translateX(4px);
    }
  `}</style>
</div>
  );
}
