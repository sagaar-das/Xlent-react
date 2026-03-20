import { motion } from "framer-motion";
import env from '../assets/env.jpg'

function Hero() {
  return (
    <section className="bg-[#fafafa] px-4 sm:px-6 lg:px-10 py-16 md:py-20 min-h-screen flex items-center overflow-hidden">

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center md:text-left"
        >

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-primary px-4 py-2 rounded-full text-xs sm:text-sm text-textDark mb-6"
          >
            <span className="w-2 h-2 bg-teal rounded-full"></span>
            Trusted by 1,500+ Students & Graduates
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
          >
            Your Career Success <br className="hidden sm:block" />
            is Guaranteed
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-5 sm:mt-6 text-textLight text-sm sm:text-base max-w-lg mx-auto md:mx-0"
          >
            End-to-end career support with personal mentorship, real interview preparation, and dedicated job assistance until you land your dream role.
          </motion.p>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-5 flex flex-wrap gap-4 text-sm"
          >
            <span className="border border-primary text-textLight px-4 py-2 rounded-full"><span className="text-tealDark">✓</span> 100% Job Placement Support</span>
            <span className="border border-primary text-textLight px-4 py-2 rounded-full"><span className="text-tealDark">✓</span> 1-on-1 Dedicated Mentorship</span>
            <span className="border border-primary text-textLight px-4 py-2 rounded-full"><span className="text-tealDark">✓</span> Real Interview Preparation</span>
            <span className="border border-primary text-textLight px-4 py-2 rounded-full"><span className="text-tealDark">✓</span> ATS-Optimized Resumes</span>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <button className="border border-primary px-6 py-3 rounded-lg text-textDark hover:bg-white transition">
              Book Free Session
            </button>

            <button className="bg-primary text-white px-6 py-3 rounded-lg hover:opacity-90 transition">
              See How It Works
            </button>
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex justify-center mt-10 md:mt-0"
        >

          {/* Floating animation */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="bg-primary rounded-3xl p-3 sm:p-4 md:p-5 rotate-3"
          >
            <div className="bg-white rounded-3xl overflow-hidden transition-transform duration-500 hover:scale-105">
              <img
                src={env}
                alt=""
                className="w-[260px] sm:w-[320px] md:w-full h-[260px] sm:h-[300px] md:h-[350px] object-cover"
              />
            </div>
          </motion.div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;