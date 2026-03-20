// import { UserStar } from "lucide-react";

// function Services() {
//     const services = [
//         {
//             title: "1-on-1 Career Mentorship",
//             desc: "Get personalized guidance from industry experts who understand your goals and help you navigate your career path.",
//         },
//         {
//             title: "Mock Interviews",
//             desc: "Practice with real interview scenarios including technical and HR rounds with detailed feedback.",
//         },
//         {
//             title: "Resume & LinkedIn Building",
//             desc: "Create ATS-optimized resumes and recruiter-friendly LinkedIn profiles that get noticed.",
//         },
//         {
//             title: "Skill Assessment",
//             desc: "Identify your strengths and gaps with our comprehensive technical and soft skill evaluation.",
//         },
//         {
//             title: "Job Search Support",
//             desc: "Guided job applications with recruiter outreach strategy and application tracking.",
//         },
//         {
//             title: "IT Staffing Solutions",
//             desc: "Connect with top companies through our extensive network of hiring partners.",
//             highlight: true,
//         },
//     ];

//     return (
//         <section className="bg-neutral-200 py-24 px-6 border-t border-borderColor">

//             {/* HEADER */}
//             <div className="max-w-4xl mx-auto text-center mb-16">

                

//                 <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
//                    OUR SERVICES
//                 </h2>

//                 <div className="inline-block border border-[#8B5CF6] text-primary px-4 py-1 rounded-full text-xs tracking-wide mt-6">
//                    Everything You Need to Land Your Dream Job
//                 </div>

//                 <p className="mt-6 text-gray-400 text-lg">
//                     Comprehensive career support designed to take you from where you are to where you want to be. Everything You Need to Land Your Dream Job
//                 </p>

//             </div>

//             {/* GRID */}
//             <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

//                 {services.map((item, i) => (
//                     <div
//                         key={i}
//                         className={`relative overflow-hidden p-8 rounded-2xl border bg-primary 
//   transition-all duration-300 ease-out group cursor-pointer
//   ${item.highlight ? "border-[#1eb2c9]" : "border-[#8B5CF6]"}
//   hover:border-[#1eb2c9] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(245,184,0,0.25)] `}
//                     >

//                         {/* Glow Background */}
//                         <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 
//                                         "></div>

//                         {/* Content */}
//                         <div className="relative z-10">

//                             {/* Icon */}
//                             <div className="w-12 h-12 bg-[#8B5CF6]  rounded-lg mb-6 flex items-center justify-center">
//                                 <div className="w-5 h-5 bg-[#8B5CF6] rounded-sm"><UserStar /></div>
//                             </div>

//                             <h3 className="text-xl font-semibold text-white mb-3">
//                                 {item.title}
//                             </h3>

//                             <p className="text-gray-400 text-sm leading-relaxed">
//                                 {item.desc}
//                             </p>

//                         </div>

//                     </div>
//                 ))}

//             </div>

//             {/* BUTTON */}
//             <div className="flex justify-center mt-16">
//                 <button className="border border-[#8B5CF6] text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white">
//                     View All Services
//                 </button>
//             </div>

//         </section>
//     );
// }

// export default Services;


import { Box, FileUser, MessageSquareCode, MonitorCog, SearchCheck, UserStar } from "lucide-react";

function Services() {
    const services = [
        {
            title: "1-on-1 Career Mentorship",
            desc: "Get personalized guidance from industry experts who understand your goals and help you navigate your career path.",
            ui: <UserStar/>,
        },
        {
            title: "Mock Interviews",
            desc: "Practice with real interview scenarios including technical and HR rounds with detailed feedback.",
            ui: <MessageSquareCode />,
        },
        {
            title: "Resume & LinkedIn Building",
            desc: "Create ATS-optimized resumes and recruiter-friendly LinkedIn profiles that get noticed.",
            ui: <FileUser />
        },
        {
            title: "Skill Assessment",
            desc: "Identify your strengths and gaps with our comprehensive technical and soft skill evaluation.",
            ui: <Box />
        },
        {
            title: "Job Search Support",
            desc: "Guided job applications with recruiter outreach strategy and application tracking.",
            ui: <SearchCheck />
        },
        {
            title: "IT Staffing Solutions",
            desc: "Connect with top companies through our extensive network of hiring partners.",
            ui: <MonitorCog />,
            highlight: true,
        },
    ];

    return (
        <section className="bg-neutral-200 py-24 px-6 border-t border-borderColor">

            {/* HEADER */}
            <div className="max-w-4xl mx-auto text-center mb-16">

                

                <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                   OUR SERVICES
                </h2>

                <div className="inline-block border border-[#8B5CF6] text-primary px-4 py-1 rounded-full text-xs tracking-wide mt-6">
                   Everything You Need to Land Your Dream Job
                </div>

                <p className="mt-6 text-textLight text-lg">
                    Comprehensive career support designed to take you from where you are to where you want to be. Everything You Need to Land Your Dream Job
                </p>

            </div>

            {/* GRID */}
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">

                {services.map((item, i) => (
                    <div
                        key={i}
                        className={`relative overflow-hidden p-8 rounded-2xl border bg-[#1C1E53] 
  transition-all duration-300 ease-out group cursor-pointer
  ${item.highlight ? "border-[#1eb2c9]" : "border-[#8B5CF6]"}
  hover:border-[#1eb2c9] hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(245,184,0,0.25)] `}
                    >

                        {/* Glow Background */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 
                                        "></div>

                        {/* Content */}
                        <div className="relative z-10">

                            {/* Icon */}
                            <div className="w-12 h-12 bg-white  rounded-lg mb-6 flex items-center justify-center">
                                <div className="w-5 h-5 bg-white rounded-sm">{item.ui}</div>
                            </div>

                            <h3 className="text-xl font-semibold text-white mb-3">
                                {item.title}
                            </h3>

                            <div className="w-12 h-0.5 bg-teal mb-4" ></div>

                            <p className="text-white text-sm leading-relaxed">
                                {item.desc}
                            </p>

                        </div>

                    </div>
                ))}

            </div>

            {/* BUTTON */}
            <div className="flex justify-center mt-16">
                <button className="border border-[#8B5CF6] text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white">
                    View All Services
                </button>
            </div>

        </section>
    );
}

export default Services;