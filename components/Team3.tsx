"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
  linkedin: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Tirth Dave",
    role: "Software",
    description:
      "Analyst at Deloitte USI Consulting | Ex President HackClub'22",
    image: "https://res.cloudinary.com/ddvbhjzdd/image/upload/v1740808646/tirth_lbegf6.png",
    linkedin: "https://www.linkedin.com/in/tirth-dave-a953541bb/",
  },
  {
    name: "Sparsh Kandpal",
    role: "Software",
    description: "Upcoming SDE at TCS (Prime) | Beta MLSA | GSSoC' 24 Mentor ",
    image: "https://res.cloudinary.com/ddvbhjzdd/image/upload/v1740808798/sparsh_fa8ivp.jpg",
    linkedin: "https://www.linkedin.com/in/sparsh-kandpal-7b8428217/",
  },
  {
    name: "Ashutosh Kumar",
    role: "Hardware",
    description: "Hardware Lead HackClub'24",
    image: "https://res.cloudinary.com/ddvbhjzdd/image/upload/v1740808644/ashu_ptjqbs.jpg",
    linkedin: "https://www.linkedin.com/in/ashutosh-kumar-b21519272/",
  },
  {
    name: "Spandan Mukherjee",
    role: "Software",
    description:
      "Former-Intern @Ericsson | Former Dev Advocate @Quira | Beta MLSA",
    image: "https://res.cloudinary.com/ddvbhjzdd/image/upload/v1740808644/spandan_axs5fi.jpg",
    linkedin: "https://www.linkedin.com/in/spandanm110/",
  },
  {
    name: "Shaikh Rumman Fardeen",
    role: "Software, UI/UX Design",
    description:
      "Upcoming AEH at Accenture | Beta MLSA | Ex Tech Lead HackClub'23 ",
    image: "https://res.cloudinary.com/ddvbhjzdd/image/upload/v1740808645/SRF_kt0dgt.jpg",
    linkedin: "https://www.linkedin.com/in/srummanf/",
  },
];

export default function Team3() {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <>
      <div id="judges" className="text-white py-8 px-8 ">
        <h1 className="text-6xl md:text-9xl font-light uppercase tracking-wide outline-text">
          THE
        </h1>
        <h2 className="text-7xl md:text-8xl font-bold uppercase text-[#FF8D7F]">
          JUDGES
        </h2>
      </div>
      <div
        className="min-h-screen  p-8 md:p-16 relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredMember(null)}
      >
        <div className="max-w-7xl mx-auto">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              member={member}
              setHoveredMember={setHoveredMember}
            />
          ))}
        </div>

        {hoveredMember && (
          <motion.div
            className="absolute pointer-events-none cursor-none"
            style={{
              left: mouseX,
              top: mouseY,
              transform: "translate(-140%, -140%)", // More accurate centering
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
          >
            <div className="w-[12rem] h-[12rem] rounded-full overflow-hidden border-2 border-white shadow-lg">
              <Image
                src={hoveredMember.image || "/placeholder.svg"}
                alt={hoveredMember.name}
                width={192} // Higher resolution for smoothness
                height={192}
                className="w-full h-full object-cover"
                priority={hoveredMember.image ? false : true} // Load placeholder immediately
                placeholder="blur" // Adds a blur effect while loading (works only for static images)
                blurDataURL="/placeholder.svg" // Low-quality placeholder (LQIP)
                loading="lazy" // Ensures images are loaded only when needed
              />
            </div>
          </motion.div>
        )}
      </div>
    </>
  );
}

function TeamMemberCard({
  member,
  setHoveredMember,
}: {
  member: TeamMember;
  setHoveredMember: (m: TeamMember | null) => void;
}) {
  return (
    <div
      className="relative py-12 border-b border-gray-200 last:border-none overflow-hidden "
      onMouseEnter={() => setHoveredMember(member)}
      onMouseLeave={() => setHoveredMember(null)}
    >
      <div className="grid grid-cols-1 md:grid-cols-[2fr,3fr,auto] gap-4 items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-[#FF8D7F    ]">
          {member.name}
        </h2>
        <div className="space-y-2">
          <p className="text-[#FF8D7F] leading-relaxed">{member.description}</p>
          <p className="text-sm font-medium tracking-wider text-white">
            {member.role}
          </p>
        </div>
        <Link
          href={member.linkedin}
          target="_blank"
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center transition-all duration-300 ease-in-out group hover:bg-[#FF8D7F] hover:border-[#FF8D7F]"
        >
          <svg
            className="w-6 h-6 text-[#FF8D7F] transition-transform duration-300 ease-in-out group-hover:-rotate-45 group-hover:text-white"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
