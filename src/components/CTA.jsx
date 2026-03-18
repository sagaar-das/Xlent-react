function CTA() {
  return (
    <section className="relative bg-[#0F172A] border-t border-[#452d7b] py-28 px-6 overflow-hidden">

      {/* Glow Background */}
      <div className="absolute inset-0 opacity-30"
        style={{
          background: "radial-gradient(circle at top left, rgba(245,184,0,0.15), transparent 40%), radial-gradient(circle at bottom right, rgba(245,184,0,0.1), transparent 40%)"
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Ready to Transform Your Career?
        </h2>

        {/* Description */}
        <p className="mt-6 text-gray-400 text-lg">
          Take the first step towards your dream job. Book a free consultation with our career experts and discover how we can help you succeed.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex justify-center gap-4 flex-wrap">

          <button className="bg-[#8B5CF6] text-black px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
            Book Free Session →
          </button>

          <button className="border border-[#1F1F1F] text-white px-6 py-3 rounded-md hover:border-[#8B5CF6] transition">
            Learn More
          </button>

        </div>

      </div>

    </section>
  );
}

export default CTA;