function WhyChooseUs() {
  const data = [
    {
      title: "100% Job Support Guarantee",
      desc: "We don't stop until you're placed. Our commitment extends beyond training to actual job placement.",
      highlight: true,
    },
    {
      title: "Dedicated Career Manager",
      desc: "Get a personal career manager who guides you through every step of your job search journey.",
    },
    {
      title: "Flexible & Personalized",
      desc: "Programs tailored to your schedule and goals, whether you're a student or working professional.",
    },
    {
      title: "Industry Expert Mentors",
      desc: "Learn from professionals currently working at top tech companies who know what it takes.",
    },
    {
      title: "150+ Partner Companies",
      desc: "Direct access to our network of hiring partners actively looking for talent like you.",
    },
    {
      title: "Post-Placement Support",
      desc: "Our relationship doesn't end at placement. Get continued career growth guidance.",
    },
  ];

  return (
    <section className="bg-[#0F172A] py-28 px-6 border-t border-[#452d7b]">

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-20">

        <div className="inline-block border border-[#8B5CF6] text-[#8B5CF6] px-4 py-1 rounded-full text-xs tracking-wide mb-6">
          WHY XLENT IT
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Why Students Choose Us
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          We're not just another career service. We're your dedicated partner in achieving career success.
        </p>

      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

        {data.map((item, i) => (
          <div
            key={i}
            className={`p-8 rounded-2xl border bg-[#0B0B0B] transition-all duration-300
            ${item.highlight ? "border-[#8B5CF6]" : "border-[#8B5CF6]"}
            hover:border-[#8B5CF6]
            hover:scale-[1.03]
            hover:shadow-[0_0_40px_rgba(245,184,0,0.25)]`}
          >

            {/* Icon Box */}
            <div className="w-12 h-12 bg-[#1A1405] rounded-lg mb-6 flex items-center justify-center">
              <div className="w-5 h-5 bg-[#8B5CF6] rounded-sm"></div>
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-white mb-3">
              {item.title}
            </h3>

            {/* Desc */}
            <p className="text-gray-400 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;