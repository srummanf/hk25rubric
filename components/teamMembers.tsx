import { useState } from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Garheng Kong",
    role: "Founding Managing Partner",
    image: "URL_HERE",
  },
  {
    name: "Randy Scott",
    role: "Founding Partner",
    image: "URL_HERE",
  },
  {
    name: "Jane Doe",
    role: "Partner",
    image: "URL_HERE",
  },
  {
    name: "John Smith",
    role: "Senior Partner",
    image: "URL_HERE",
  },
  {
    name: "Alice Johnson",
    role: "Investment Analyst",
    image: "URL_HERE",
  },
];

export default function TeamSection() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="relative w-full px-10 py-16 bg-white">
      <h2 className="text-3xl font-bold mb-6">Investment Team</h2>

      <div className="overflow-hidden w-full relative">
        <motion.div
          className="flex gap-6"
          animate={{ x: -index * 360 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="relative w-80 p-5 rounded-xl overflow-hidden bg-gray-100 shadow-lg"
            >
              <div className="absolute top-0 right-0 w-12 h-12 bg-white rounded-bl-[50px] flex items-center justify-center">
                <span className="text-lg">↗</span>
              </div>
              <div className="absolute bottom-0 left-0 w-20 h-20 bg-white rounded-tr-[60px]"></div>
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-5 left-5 flex gap-4">
        <button
          onClick={prev}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center"
        >
          ←
        </button>
        <button
          onClick={next}
          className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center"
        >
          →
        </button>
      </div>
    </div>
  );
}
