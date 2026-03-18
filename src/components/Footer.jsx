function Footer() {
  return (
    <footer className="bg-[#090e19] text-gray-400 pt-20 pb-10 px-6 border-t border-[#452d7b]">

      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        {/* LEFT - LOGO + DESC */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="bg-[#8B5CF6] text-black font-bold px-2 py-1 rounded">
              X
            </div>
            <h1 className="text-white font-semibold text-lg">XlentIT</h1>
          </div>

          <p className="text-sm leading-relaxed">
            Your trusted partner in career success. We provide end-to-end career support with personal mentorship and dedicated job assistance until placement.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            <div className="w-10 h-10 bg-[#8B5CF6] text-black rounded-full flex items-center justify-center">in</div>
            <div className="w-10 h-10 bg-[#8B5CF6] text-black rounded-full flex items-center justify-center">f</div>
            <div className="w-10 h-10 bg-[#8B5CF6] text-black rounded-full flex items-center justify-center">ig</div>
          </div>
        </div>

        {/* SERVICES */}
        <div>
          <h3 className="text-white font-semibold mb-4">Services</h3>
          <ul className="space-y-3 text-sm">
            <li>1-on-1 Mentorship</li>
            <li>Mock Interviews</li>
            <li>Resume Building</li>
            <li>IT Staffing</li>
          </ul>
        </div>

        {/* COMPANY */}
        <div>
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-3 text-sm">
            <li>About Us</li>
            <li>How It Works</li>
            <li>Success Stories</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-3 text-sm">

            <li className="flex items-center gap-2">
              ✉ info@xlent-itservice.com
            </li>

            <li className="flex items-center gap-2">
              +1 (424) 246-2343
            </li>

            <li className="flex items-start gap-2">
             823 Congress Ave. STE 300 <br /> Austin, TX 78701
            </li>

          </ul>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="mt-16 border-t border-[#1F1F1F] pt-6 flex flex-col md:flex-row justify-between items-center text-sm">

        <p>© 2026 XlentIT. All rights reserved.</p>

        <p className="mt-4 md:mt-0 cursor-pointer hover:text-[#8B5CF6]">
          Privacy Policy
        </p>

      </div>

    </footer>
  );
}

export default Footer;