import type React from "react";
import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Judging Rubric & Judges - HackNight'25",
  description:
    "Explore the official judging rubric and panel of judges for HackNight'25. Learn about the evaluation criteria, scoring system, and expert judges who will assess the projects.",
  metadataBase: new URL("https://hkrubric.netlify.app/"),
  keywords: [
    "hackathon",
    "judging criteria",
    "hacknight 25",
    "hackathon judges",
    "judging rubric",
    "project evaluation",
    "innovation scoring",
    "hackathon rules",
  ],
  authors: [{ name: "HackNight Team" }],
  creator: "HackNight Team",
  publisher: "HackNight",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.hacknight25.io",
    siteName: "HackNight'25",
    title: "HackNight'25 - Judging Rubric & Judges",
    description:
      "Discover the criteria judges will use to evaluate projects at HackNight'25. Check out the rubric and meet the panel of expert judges.",
    images: [
      {
        url: "/hacknight-judging.png",
        width: 1200,
        height: 630,
        alt: "HackNight'25 Judging Rubric & Judges",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${spaceMono.className} bg-[#1A1A1A] text-white overflow-x-hidden`}
      >
        
        {children}
      </body>
    </html>
  );
}
