function HowItWorks() {
  const steps = [
    {
      num: "1",
      title: "Free Assessment",
      desc: "Start with a comprehensive evaluation of your skills, experience, and career goals.",
    },
    {
      num: "2",
      title: "Personalized Roadmap",
      desc: "Receive a customized career plan tailored to your unique strengths and aspirations.",
    },
    {
      num: "3",
      title: "Skill & Resume Optimization",
      desc: "Enhance your skills and build an ATS-optimized resume that stands out.",
    },
    {
      num: "4",
      title: "Interview Preparation",
      desc: "Master interviews with mock sessions, feedback, and proven techniques.",
    },
    {
      num: "5",
      title: "Job Placement",
      desc: "Get dedicated support until you land your dream role with ongoing career guidance.",
    },
  ];

  return (
    <section className="bg-[#090e19] py-28 px-6 border-t border-[#452d7b]">

      {/* HEADER */}
      <div className="text-center max-w-4xl mx-auto mb-20">

        <div className="inline-block border border-[#8B5CF6] text-[#8B5CF6] px-4 py-1 rounded-full text-xs tracking-wide mb-6">
          HOW IT WORKS
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
          Your Journey to Career Success
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          A proven 5-step process that has helped thousands of students and graduates land their dream jobs.
        </p>

      </div>

      {/* TIMELINE */}
      <div className="relative max-w-7xl mx-auto">

        {/* Horizontal Line */}
        <div className="hidden md:block absolute top-10 left-0 w-full h-[1px] bg-[#1F1F1F]"></div>

        {/* Steps */}
        <div className="grid md:grid-cols-5 gap-10 text-center">

          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center">

              {/* Circle Icon */}
              <div className="relative z-10 w-16 h-16 rounded-full border border-[#8B5CF6] flex items-center justify-center bg-[#0B0B0B]">

                {/* Number badge */}
                <span className="absolute -top-2 -right-2 bg-[#8B5CF6] text-black text-xs w-6 h-6 flex items-center justify-center rounded-full font-bold">
                  {step.num}
                </span>

                {/* Inner icon placeholder */}
                <div className="w-6 h-6 bg-[#8B5CF6] rounded-sm opacity-80"></div>
              </div>

              {/* Title */}
              <h3 className="mt-6 text-white font-semibold text-lg">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-gray-400 text-sm leading-relaxed max-w-xs">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;