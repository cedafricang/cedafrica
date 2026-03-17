import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import NextTopLoader from "nextjs-toploader";

import { AppContextProvider } from "../context-api/PropertyContext";

import Header from "./components/layout/header";
import Footer from "./components/layout/footer";
import Audio from "./components/audio";
import Preloader from "./components/preloader";
import Aoscompo from "@/utils/aos";

const dmsans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "CED Africa",
    template: "%s | CED Africa",
  },
  description:
    "CED Africa is an audiovisual design and systems authority platform, guiding partners, specifiers, and enterprises through structured AV system design, governed standards, and certified delivery ecosystems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmsans.className}>
        <AppContextProvider>
          <ThemeProvider attribute="class" defaultTheme="light">
            <Aoscompo>
              <Header />
              <NextTopLoader />
              <Preloader />
              <Audio />
              {children}
              <Footer />
            </Aoscompo>

            {/* ✅ Global Chatbot */}
           
          </ThemeProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
