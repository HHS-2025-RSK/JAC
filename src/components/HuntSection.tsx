import { motion } from "framer-motion";
import { CinematicText } from "./CinematicText";
// Assuming you have a <CinematicText> component
// Assuming you have a <FadeInSection> component, though I'll replace it with motion.div for consistency
// If you want to keep FadeInSection, you can, but this unifies the animation style.

export const HuntSection = () => {
  return (
    // 1. Changed background to bg-gray-50 for seamless transition
    <section id="hunt" className="relative mb-10">
      <div className="max-w-7xl mx-auto bg-[#FDFBF3]/95 pt-20 pb-16 px-6 md:px-12 rounded-3xl shadow-2xl border border-slate-200">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CinematicText className="text-7xl md:text-9xl font-black mb-6 text-slate-900">
              The Hunt
            </CinematicText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-3xl md:text-4xl text-amber-700 font-bold mb-12">
              Eyes on the horizon, focus on the target.
            </p>
            <p className="text-2xl md:text-3xl text-slate-700">
              We track opportunity with precision, adapt to the terrain, and
              strike only when the outcome matters.
            </p>
          </motion.div>
        </div>

        {/* 2. Replaced FadeInSection with motion.div */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {/* 3. Replaced frosted-glass with the new split-card style */}
          <div
            className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Top section: Solid light color for the keywords */}
            <div className="bg-emerald-100 p-10">
              <p className="text-2xl md:text-3xl text-emerald-900 text-center font-bold">
                Strategy | Consulting | Product Management | Hotel Management |
                Marketing
              </p>
            </div>

            {/* Bottom section: Light gradient for the description */}
            <div className="p-12 md:p-16 bg-gradient-to-b from-emerald-50 to-white">
              <div className="space-y-8 text-2xl md:text-3xl text-slate-700">
                <p>
                  We work across industries that define the pace of progress.
                  From consulting that builds clarity, to strategies that spark
                  scale - from hospitality systems that evolve with people, to
                  marketing that turns brands into belief.
                </p>
                <p>
                  Every vertical we enter is approached with the same mindset -
                  clarity, creativity, and commitment.
                </p>
                <p className="text-emerald-800 font-semibold text-center text-3xl md:text-4xl pt-6">
                  We don't diversify to do more. We diversify to do better.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      {/* 4. Removed the bottom fade-out div */}
    </section>
  );
};
