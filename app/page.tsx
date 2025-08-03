"use client";

import type React from "react";

import SoftwareRubric from "@/components/SoftwareRubric";
import Navbar from "@/components/Navbar";
import HardwareRubric from "@/components/HardwareRubric";
import DesignRubric from "@/components/DesignRubric";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react"; // Ensure you have 'lucide-react' installed

import Team3 from "@/components/Team3";

export default function Home() {
  const [showButton, setShowButton] = useState(false);

  // Show button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen relative">
      {/* Grid Overlay */}
      <div className="fixed inset-0 grid grid-cols-12 pointer-events-none">
        {[...Array(1)].map((_, i) => (
          <div
            key={i}
            className="h-full border-l border-[#2A2A2A] last:border-r"
          />
        ))}
      </div>

      {/* Top Border */}
      <div className="fixed top-0 left-0 w-full h-[1px] bg-[#2A2A2A] z-20" />

      {/* Side Text */}
      <div className="fixed left-[4rem] top-[300px] flex flex-col items-center gap-8">
        <span className="transform -rotate-90 text-xs tracking-wider text-[#444444] hover:text-[#FF7B6B] transition-colors">
          <a target="_blank" href="https://www.instagram.com/hackclubvitc/">
            HC
          </a>
        </span>
        <span className="transform -rotate-90 text-xs tracking-wider text-[#444444] hover:text-[#FF7B6B] transition-colors">
          <a target="_blank" href="https://www.hacknight25.tech/">
            HN
          </a>
        </span>
        <span className="transform -rotate-90 text-xs tracking-wider text-[#444444] hover:text-[#FF7B6B] transition-colors">
          <a target="_blank" href="https://www.knightsden.xyz/">
            KD
          </a>
        </span>
        <span className="transform -rotate-90 text-xs tracking-wider text-[#444444] hover:text-[#FF7B6B] transition-colors">
          <a target="_blank" href="https://thecleancode.xyz/">
            CC
          </a>
        </span>
      </div>

      {/* Logo */}
      <div className="relative pt-12 pl-[8.5rem] pb-8 border-b border-[#2A2A2A]">
        <h1 className="text-[#FF7B6B] text-[180px] leading-none font-light tracking-tight">
          Hacknight'25
        </h1>
      </div>
      <Navbar />

      {/* Main Content */}
      <main className="pl-12 mt-32">
        <div className="max-w-4xl">
          <h2 className="text-7xl font-light mb-8 tracking-tight ml-24">
            Evaluation Criteria
          </h2>
          <p className="text-2xl text-[#666666] tracking-tight ml-24">
            Innovation, impact, and execution
            <br />
            judged by industry experts and mentors.
          </p>
        </div>
      </main>

      <main className="pl-12 mt-32">
        <div className="max-w-7xl">
          <SoftwareRubric />
        </div>
      </main>

      <main className="pl-12 mt-32">
        <div className="max-w-7xl">
          <HardwareRubric />
        </div>
      </main>

      <main className="pl-12 mt-32">
        <div className="max-w-7xl">
          <DesignRubric />
        </div>
      </main>

      <main className="pl-12 mt-32 ml-24">
        <div className="">
          <Team3 />
        </div>
      </main> 

      {/* Back to Top Button */}
      <div className="fixed bottom-8 right-8">
        <button
          onClick={scrollToTop}
          className={`bg-[#FF7B6B] text-white p-3 rounded-full shadow-2xl transition-all duration-500 transform
      ${
        showButton
          ? "opacity-100 scale-100"
          : "opacity-0 scale-75 pointer-events-none"
      }
      `}
        >
          <ArrowUp
            size={24}
            className="transition-all duration-300 ease-in-out hover:scale-125"
          />
        </button>
      </div>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="text-sm text-[#999999] hover:text-white transition-colors tracking-wider"
    >
      {children}
    </a>
  );
}
