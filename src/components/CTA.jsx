import { motion } from "framer-motion";

function CTA() {
  return (
    <section className="relative bg-[#0F172A] py-24 px-4 sm:px-6 overflow-hidden">

      {/* 🔥 Animated Gradient Background */}
      <div className="absolute inset-0">
        <div className="absolute w-[500px] h-[500px] bg-[#8B5CF6] opacity-20 blur-[120px] top-[-100px] left-[-100px]"></div>
        <div className="absolute w-[400px] h-[400px] bg-[#1eb2c9] opacity-20 blur-[120px] bottom-[-100px] right-[-100px]"></div>
      </div>

      {/* 🔥 Grid Overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(#ffffff20 1px, transparent 1px),
            linear-gradient(90deg, #ffffff20 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px"
        }}
      ></div>

      {/* CONTENT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >

        {/* HEADING */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Ready to Transform Your Career?
        </h2>

        {/* DESCRIPTION */}
        <p className="mt-6 text-gray-300 text-sm sm:text-base md:text-lg">
          Take the first step towards your dream job. Book a free consultation with our career experts and discover how we can help you succeed.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#8B5CF6] to-[#1eb2c9] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition"
          >
            Book Free Session →
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white/20 text-white px-6 py-3 rounded-lg backdrop-blur hover:border-[#8B5CF6] hover:bg-white/5 transition"
          >
            Learn More
          </motion.button>

        </div>

      </motion.div>

    </section>
  );
}

export default CTA;