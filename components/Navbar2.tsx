import React from "react";
import { Button } from "@/components/ui/button";
const Navbar2 = () => {
  const navItems = [
    { name: "Home", route: "/" },
    { name: "Software Rubric", route: "/#software" },
    { name: "Hardware Rubric", route: "/#hardware" },
    { name: "UI/UX Rubric", route: "/#design" },
    { name: "Judges", route: "/#judges" },
    { name: "Team", route: "/team" },
  ];
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#1E1E1E]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="text-[#FF7F7F] text-2xl font-mono">Hacknight'25</div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.route}
                className="text-zinc-400 hover:text-[#FF7F7F] transition-colors font-mono"
              >
                {item.name}
              </a>
            ))}
            <Button className="bg-[#FF7F7F] text-white hover:bg-[#FF7F7F]/90 font-mono">
              Start een project
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
