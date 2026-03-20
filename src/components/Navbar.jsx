import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white backdrop-blur border-b border-primary z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-xl font-bold text-textDark">
          <span className="text-red-600">Xlent</span>IT
        </h1>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex gap-10 text-sm text-textDark">
          <li className="hover:text-primary cursor-pointer">Home</li>
          <li className="hover:text-primary cursor-pointer">Services</li>
          <li className="hover:text-primary cursor-pointer">How It Works</li>
          <li className="hover:text-primary cursor-pointer">Contact</li>
        </ul>

        {/* DESKTOP BUTTON */}
        <button className="hidden md:block bg-gradient-to-r from-primary to-[#1eb2c9] text-white px-3 py-2 rounded-md">
          Book Free Session
        </button>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-textDark text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t border-borderColor px-6 py-4 space-y-4">

          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">Services</p>
          <p className="cursor-pointer">How It Works</p>
          <p className="cursor-pointer">Contact</p>

        </div>
      )}
    </nav>
  );
}

export default Navbar;