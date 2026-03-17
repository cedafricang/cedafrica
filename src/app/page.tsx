import { Metadata } from "next";

// Home sections
import Hero from "./components/home/hero";

import About from "./components/home/about";
import DiscoverProperties from "./components/home/property-option"; // mentor / platform section
import Listing from "./components/home/property-list";
import Testimonials from "./components/home/testimonial";
import History from "./components/home/history";

import Info from "./components/home/info";


// Global components


/* -------------------------------------
   METADATA — CED AFRICA
------------------------------------- */


export const metadata: Metadata = {
  metadataBase: new URL("https://www.cedafrica.com"),

  title: {
    default: "CED Africa",
    template: "%s | CED Africa",
  },

  description:
    "CED Africa is an audiovisual design and systems authority platform, guiding partners, specifiers, and enterprises through structured AV system design, governed standards, and certified delivery ecosystems.",

  keywords: [
    "CED Africa",
    "audiovisual design Nigeria",
    "AV consulting Africa",
    "ProAV systems Nigeria",
    "AV system integrators Africa",
    "home cinema design Nigeria",
    "commercial AV systems",
    "AV design studio",
    "audio visual consultants",
    "architectural AV integration",
    "MEP AV specification",
    "certified AV partners",
    "AV system design standards",
    "enterprise AV solutions",
    "AV ecosystem platform",
  ],

  openGraph: {
    title: "CED Africa — AV Design & Systems Authority",
    description:
      "A structured platform for audiovisual system design, partner ecosystems, and project delivery—guiding integrators, consultants, and enterprises through governed AV solutions.",
    url: "https://www.ced.africa",
    siteName: "CED Africa",
    type: "website",
    images: [
      {
        url: "https://www.ced.africa/og/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "CED Africa — Audiovisual Design & Systems Authority",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "CED Africa — AV Systems, Designed and Governed",
    description:
      "CED Africa provides structured audiovisual design, certified partner ecosystems, and system governance for residential, commercial, and enterprise environments.",
    images: ["https://www.ced.africa/og/og-cover.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.ced.africa",
  },
};
/* -------------------------------------
   HOME PAGE
------------------------------------- */
export default function Home() {
  return (
    <main>
      {/* Audio welcome — brief, professional, plays once per visit */}
      

      {/* Core hero & positioning */}
      <Hero />
      <About />

      {/* Platform / WhatsApp / AI section */}
      <DiscoverProperties />

      {/* Workforce scope / industries / roles */}
      <Listing />

      {/* Trust & social proof */}
      <Testimonials />

      {/* Company journey, capability & infrastructure */}
      <History />
      <Info />
    
      
       
      
    </main>
  );
}
