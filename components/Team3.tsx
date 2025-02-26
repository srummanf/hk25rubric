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
    role: "ADVISOR",
    description: "With 15 years of experience in people management...",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Black_Rhino_at_Working_with_Wildlife.jpg/1200px-Black_Rhino_at_Working_with_Wildlife.jpg",
    linkedin: "#",
  },
  {
    name: "Sparsh",
    role: "UX UI DESIGNER",
    description:
      "I specialize in designing user-centered digital experiences...",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Black_Rhino_at_Working_with_Wildlife.jpg/1200px-Black_Rhino_at_Working_with_Wildlife.jpg",
    linkedin: "#",
  },
  {
    name: "Spartan",
    role: "UX UI DESIGNER",
    description: "I love creating visually stunning interfaces...",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Black_Rhino_at_Working_with_Wildlife.jpg/1200px-Black_Rhino_at_Working_with_Wildlife.jpg",
    linkedin: "#",
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
      <div className="text-white py-8 px-8 ">
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

        {/* Custom Cursor - Only show when hovering over a card */}
        {hoveredMember && (
          <motion.div
            className="absolute pointer-events-none cursor-none"
            style={{
              left: mouseX,
              top: mouseY,
              translateX: "-80%",
              translateY: "-80%",
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
                width={80}
                height={80}
                className="w-full h-full object-cover"
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
          className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:border-gray-400 transition-colors"
        >
          <svg
            className="w-5 h-5 text-[#FF8D7F]"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
          </svg>
        </Link>
      </div>
    </div>
  );
}
