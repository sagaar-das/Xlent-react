import { motion } from "framer-motion";
import { BadgeCheck, Clock, GraduationCap, Handshake, ShieldCheck, User } from "lucide-react";

function WhyChooseUs() {
  const data = [
    {
      title: "100% Job Support Guarantee",
      desc: "We don't stop until you're placed. Our commitment extends beyond training to actual job placement.",
      highlight: true,
      ui: <ShieldCheck />,
    },
    {
      title: "Dedicated Career Manager",
      desc: "Get a personal career manager who guides you through every step of your job search journey.",
      ui: <User />,
    },
    {
      title: "Flexible & Personalized",
      desc: "Programs tailored to your schedule and goals, whether you're a student or working professional.",
      ui: <Clock />,
    },
    {
      title: "Industry Expert Mentors",
      desc: "Learn from professionals currently working at top tech companies who know what it takes.",
      ui: <GraduationCap />,
    },
    {
      title: "150+ Partner Companies",
      desc: "Direct access to our network of hiring partners actively looking for talent like you.",
      ui: <Handshake />,
    },
    {
      title: "Post-Placement Support",
      desc: "Our relationship doesn't end at placement. Get continued career growth guidance.",
      ui: <BadgeCheck />,
    },
  ];

  return (
    <section className="bg-primary py-24 px-4 sm:px-6 lg:px-10">

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-4xl mx-auto mb-16"
      >
        <div className="inline-block border border-teal text-white px-4 py-1 rounded-full text-xs mb-6">
          WHY XLENT IT
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
          Why Students Choose Us
        </h2>

        <p className="mt-5 text-white/80 text-sm sm:text-base">
          We're not just another career service. We're your dedicated partner in achieving career success.
        </p>
      </motion.div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.04 }}
            className={`group relative p-6 rounded-2xl border bg-white transition-all duration-300 cursor-pointer
            ${item.highlight
              ? "border-teal shadow-[0_0_40px_rgba(20,184,166,0.3)]"
              : "border-borderColor hover:border-teal hover:shadow-xl"
            }`}
          >

            {/* ICON */}
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mb-5 shadow-md"
            >
              {item.ui}
            </motion.div>

            {/* TITLE */}
            <h3 className="text-lg font-semibold text-primary mb-3">
              {item.title}
            </h3>

            {/* LINE */}
            <div className="w-10 h-[2px] bg-teal mb-4 group-hover:w-16 transition-all duration-300"></div>

            {/* DESC */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>

            {/* 🔥 Glow Background Effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none
            bg-[radial-gradient(circle_at_center,_rgba(20,184,166,0.15),transparent_70%)]"></div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}

export default WhyChooseUs;