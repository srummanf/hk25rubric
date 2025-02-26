import React from 'react'

const Navbar = () => {
  return (
    <nav className="absolute top-[280px] right-8 flex items-center gap-8 z-30">
        <a
          href="#software"
          className="text-sm text-[#999999] hover:text-white transition-colors tracking-wider"
        >
          Sofware Rubric
        </a>
        <a
          href="#hardware"
          className="text-sm text-[#999999] hover:text-white transition-colors tracking-wider"
        >
          Hardware Rubric
        </a>
        <a
          href="#design"
          className="text-sm text-[#999999] hover:text-white transition-colors tracking-wider"
        >
          UI/UX Rubric
        </a>
        <a
          href="#solutions"
          className="text-sm text-[#999999] hover:text-white transition-colors tracking-wider"
        >
          Judges
        </a>
        

        {/* <NavLink href="#contact">Contact</NavLink> */}
        <button className="bg-[#FF7B6B] text-white px-6 py-2 rounded-full text-sm hover:bg-[#ff8d7f] transition-colors">
          ALL THE BEST!
        </button>
      </nav>
  )
}

export default Navbar