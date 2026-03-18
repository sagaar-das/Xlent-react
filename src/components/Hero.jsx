function Hero() {
  return (
    <section className="relative bg-[#0F172A] text-white min-h-screen flex items-center pt-28 px-6 overflow-hidden">

  {/* Grid */}
  <div className="absolute inset-0 opacity-20"
    style={{
      backgroundImage: `
        linear-gradient(#1F1F1F 1px, transparent 1px),
        linear-gradient(90deg, #1F1F1F 1px, transparent 1px)
      `,
      backgroundSize: "60px 60px"
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT */}
    <div>

      <div className="inline-flex items-center gap-2 border border-[#8B5CF6] px-4 py-2 rounded-full text-sm text-[#8B5CF6] mb-6">
        ● Trusted by 1,500+ Students & Graduates
      </div>

      <h1 className="text-5xl md:text-[64px] font-extrabold leading-[1.1] tracking-tight">
        Your Career Success <br />
        is <span className="text-[#8B5CF6]">Guaranteed</span>
      </h1>

      <p className="mt-6 text-gray-400 text-[17px] leading-relaxed max-w-xl">
        End-to-end career support with personal mentorship, real interview
        preparation, and dedicated job assistance until you land your dream role.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <span className="border border-[#8B5CF6] px-4 py-2 rounded-full">✓ 100% Job Placement Support</span>
        <span className="border border-[#8B5CF6] px-4 py-2 rounded-full">✓ 1-on-1 Dedicated Mentorship</span>
        <span className="border border-[#8B5CF6] px-4 py-2 rounded-full">✓ Real Interview Preparation</span>
        <span className="border border-[#8B5CF6] px-4 py-2 rounded-full">✓ ATS-Optimized Resumes</span>
      </div>

      <div className="mt-10 flex gap-4">
        <button className= "bg-[#8B5CF6] text-black px-6 py-3 rounded-md font-semibold">
          Book Free Session →
        </button>

        <button className="border border-black px-6 py-3 rounded-md hover:border-[#8B5CF6]">
          See How It Works
        </button>
      </div>
    </div>

    {/* RIGHT */}
    <div className="relative flex justify-center">

      <div className="absolute w-[420px] h-[420px] bg-[#8B5CF6] blur-[120px] opacity-20 rounded-full"></div>

      <img
        src="https://images.unsplash.com/photo-1556761175-4b46a572b786"
        alt=""
        className="relative rounded-2xl border border-[#8B5CF6]]"
      />

      <div className="absolute bottom-6 left-6 bg-black border border-[#8B5CF6] px-4 py-2 rounded-lg">
        <p className="text-white font-bold">98%</p>
        <p className="text-gray-400 text-sm">Placement Rate</p>
      </div>
    </div>

  </div>
</section>
  );
}

export default Hero;