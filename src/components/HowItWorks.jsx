import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaUserCheck, FaMap, FaTools, FaComments, FaBriefcase } from "react-icons/fa";

function HowItWorks() {
  const ref = useRef(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const steps = [
    {
      title: "Free Assessment",
      desc: "Start with a comprehensive evaluation of your skills, experience, and career goals.",
      icon: <FaUserCheck />,
      active: true,
    },
    {
      title: "Personalized Roadmap",
      desc: "Receive a customized career plan tailored to your unique strengths.",
      icon: <FaMap />,
      active: true,
    },
    {
      title: "Skill & Resume Optimization",
      desc: "Enhance your skills and build an ATS-optimized resume.",
      icon: <FaTools />,
      active: true,
    },
    {
      title: "Interview Preparation",
      desc: "Master interviews with mock sessions and feedback.",
      icon: <FaComments />,
      active: true,
    },
    {
      title: "Job Placement",
      desc: "Get support until you land your dream role.",
      icon: <FaBriefcase />,
      active: true,
    },
  ];

  return (
    <section ref={ref} className="bg-neutral-200 py-24 px-4 sm:px-6">

      {/* HEADER */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-textDark">
          Your Journey to Career Success
        </h2>
      </div>

      {/* TIMELINE */}
      <div className="relative max-w-6xl mx-auto">

        {/* LINE */}
        <div className="
          absolute top-0 h-full w-[2px] bg-borderColor
          left-5 md:left-1/2
          md:-translate-x-1/2
        "></div>

        {/* PROGRESS LINE */}
        <motion.div
          style={{ scaleY }}
          className="
            absolute top-0 w-[2px] h-full 
            bg-gradient-to-b from-primary to-[#1eb2c9]
            origin-top
            left-5 md:left-1/2
            md:-translate-x-1/2
          "
        />

        <div className="space-y-16">

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? 80 : -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className={`
                relative flex flex-col
                md:flex-row items-start md:items-center
                ${i % 2 === 0 ? "md:flex-row-reverse" : ""}
              `}
            >

              {/* CARD */}
              <div className="
                w-full md:w-1/2 
                pl-16 md:pl-6
              ">

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className={`p-5 rounded-xl border transition cursor-pointer
                  ${step.active
                    ? "bg-gradient-to-br from-primary to-[#1eb2c9] text-white shadow-[0_0_40px_rgba(30,178,201,0.4)]"
                    : "bg-white border-borderColor text-textDark hover:shadow-xl"
                  }`}
                >
                  <h3 className="font-semibold">{step.title}</h3>
                  <p className={`text-sm mt-1 ${step.active ? "text-white/90" : "text-textLight"}`}>
                    {step.desc}
                  </p>
                </motion.div>

              </div>

              {/* ICON */}
              <div className="
                absolute left-5
                md:relative md:left-auto
                md:w-[80px]
                flex justify-center
              ">

                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-lg z-10
                  ${step.active
                    ? "bg-gradient-to-br from-primary to-[#1eb2c9] text-white shadow-lg"
                    : "bg-white border border-borderColor text-primary"
                  }`}
                >
                  {step.icon}
                </motion.div>

              </div>

              {/* EMPTY (desktop spacing) */}
              <div className="hidden md:block md:w-1/2"></div>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;