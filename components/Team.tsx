"use client";

import Image from "next/image";
export default function LeadershipSection() {
  const team = [
    {
      name: "Alex Morgan",
      role: "Co-Founder & CEO",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBL8GB6sfgewA86bDYCGVsecHOD80FVlFGZg&s",
    },
    {
      name: "Sam Chen",
      role: "Co-Founder & COO",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Jordan Taylor",
      role: "CFO",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Casey Kim",
      role: "CTO",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Morgan Lee",
      role: "SVP Engineering",
      image: "/placeholder.svg?height=400&width=400",
    },
    {
      name: "Robin Singh",
      role: "SVP Product",
      image: "/placeholder.svg?height=400&width=400",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen ml-[7rem]">
      {/* Fixed Left Column */}
      <div className="lg:fixed lg:w-[40%] p-8 lg:h-screen flex flex-col justify-center">
        <h1 className="text-[#FF7F7F] text-3xl font-mono leading-tight mb-16">
          Mefd eret the Leadership Behind Our Success
        </h1>
        <p className="text-zinc-400 text-xl font-mono leading-relaxed">
          Our executives empower our team to drive innovation and actionable
          results. Join our team of visionaries and be part of a dynamic
          community dedicated to driving innovation and delivering exceptional
          results.
        </p>
      </div>

      {/* Scrollable Right Column */}
      <div className="lg:ml-[40%] w-full lg:w-[60%] p-8 mt-16 ">
        <div className="space-y-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex justify-between items-center w-full gap-6 bg-zinc-900/50 backdrop-blur-sm 
               transition-all duration-300 hover:-translate-x-2 hover:bg-zinc-900/80"
            >
              {/* Member Info */}
              <div className="ml-6">
                <h3 className="text-white font-mono text-2xl mb-1">
                  {member.name}
                </h3>
                <p className="text-[#FF7F7F] font-mono">{member.role}</p>
              </div>

              {/* Member Image */}
              <div className="w-32 h-32 overflow-hidden ">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
}
