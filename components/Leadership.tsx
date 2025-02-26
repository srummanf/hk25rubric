"use client"

export default function LeadershipSection() {
  const team = [
    {
      name: "Alex Morgan",
      role: "Co-Founder & CEO",
      image: "/placeholder.svg?height=400&width=400",
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
  ]

  return (
    <div className="flex flex-col lg:flex-row min-h-screen pt-20">
      {/* Fixed Left Column */}
      <div className="lg:fixed lg:w-[40%] p-8 lg:h-screen flex flex-col justify-center">
        <h1 className="text-[#FF7F7F] text-5xl font-mono leading-tight mb-6">Meet the Leadership Behind Our Success</h1>
        <p className="text-zinc-400 text-xl font-mono leading-relaxed">
          Our executives empower our team to drive innovation and actionable results. Join our team of visionaries and
          be part of a dynamic community dedicated to driving innovation and delivering exceptional results.
        </p>
      </div>

      {/* Scrollable Right Column */}
      <div className="lg:ml-[40%] w-full lg:w-[60%] p-8">
        <div className="space-y-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="flex items-center gap-6 p-6 bg-zinc-900/50 backdrop-blur-sm rounded-lg 
                       transition-all duration-300 hover:-translate-x-2 hover:bg-zinc-900/80"
            >
              <div className="w-24 h-24 overflow-hidden rounded-lg">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <div>
                <h3 className="text-white font-mono text-2xl mb-1">{member.name}</h3>
                <p className="text-[#FF7F7F] font-mono">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

