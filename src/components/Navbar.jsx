import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-[#0F172A]/80 backdrop-blur border-b border-[#452d7b] z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-white">
          Xlent<span className="text-[#8B5CF6]">IT</span>
        </h1>

        <ul className="hidden md:flex gap-10 text-sm text-gray-300">
          <li className="hover:text-[#8B5CF6] cursor-pointer">Home</li>
          <li className="hover:text-[#8B5CF6] cursor-pointer">Services</li>
          <li className="hover:text-[#8B5CF6] cursor-pointer">How It Works</li>
          <li className="hover:text-[#8B5CF6] cursor-pointer">Contact</li>
        </ul>

        <button className="bg-gradient-to-r from-[#8B5CF6] to-[#22D3EE] text-white px-5 py-2 rounded-md">
          Get Started
        </button>
      </div>
    </nav>
  );
}

export default Navbar;