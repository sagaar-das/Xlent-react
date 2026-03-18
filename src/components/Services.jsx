function Services() {
    const services = [
        {
            title: "1-on-1 Career Mentorship",
            desc: "Get personalized guidance from industry experts who understand your goals and help you navigate your career path.",
        },
        {
            title: "Mock Interviews",
            desc: "Practice with real interview scenarios including technical and HR rounds with detailed feedback.",
        },
        {
            title: "Resume & LinkedIn Building",
            desc: "Create ATS-optimized resumes and recruiter-friendly LinkedIn profiles that get noticed.",
        },
        {
            title: "Skill Assessment",
            desc: "Identify your strengths and gaps with our comprehensive technical and soft skill evaluation.",
        },
        {
            title: "Job Search Support",
            desc: "Guided job applications with recruiter outreach strategy and application tracking.",
        },
        {
            title: "IT Staffing Solutions",
            desc: "Connect with top companies through our extensive network of hiring partners.",
            highlight: true,
        },
    ];

    return (
        <section className="bg-[#0F172A] py-24 px-6 border-t border-[#452d7b]">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-16">

                <div className="inline-block border border-[#8B5CF6] text-[#8B5CF6] px-4 py-1 rounded-full text-xs tracking-wide mb-6">
                    OUR SERVICES
                </div>

                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                    Everything You Need to Land Your Dream Job
                </h2>

                <p className="mt-6 text-gray-400 text-lg">
                    Comprehensive career support designed to take you from where you are to where you want to be.
                </p>

            </div>

            {/* GRID */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

                {services.map((item, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden p-8 rounded-2xl border bg-black 
  transition-all duration-300 ease-out group cursor-pointer
  ${item.highlight ? "border-[#8B5CF6]" : "border-[#8B5CF6]"}
  hover:border-[#F5B800] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(245,184,0,0.25)] `}
                    >

                        {/* Glow Background */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 
                                        "></div>

                        {/* Content */}
                        <div className="relative z-10">

                            {/* Icon */}
                            <div className="w-12 h-12 bg-[#8B5CF6]  rounded-lg mb-6 flex items-center justify-center">
                                <div className="w-5 h-5 bg-[#8B5CF6] rounded-sm"></div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.desc}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

            {/* BUTTON */}
            <div className="flex justify-center mt-16">
                <button className="border border-[#8B5CF6] text-white px-6 py-3 rounded-md hover:border-[#8B5CF6]">
                    View All Services
                </button>
            </div>

        </section>
    );
}

export default Services;