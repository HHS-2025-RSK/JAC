import { motion } from "framer-motion";
import { CinematicText } from "./CinematicText";

export const HuntSection = () => {
  return (
    <section id="hunt" className="relative mb-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-[#FDFBF3]/95 pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CinematicText className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 text-slate-900">
              The Hunt
            </CinematicText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-700 font-bold mb-8 sm:mb-10 md:mb-12 px-2">
              Eyes on the horizon, focus on the target.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 px-2">
              We track opportunity with precision, adapt to the terrain, and
              strike only when the outcome matters.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div
            className="rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden
                       transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            {/* Top section: Keywords in one line (except mobile) */}
            <div className="bg-emerald-100 p-6 sm:p-8 md:p-10">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-emerald-900 text-center font-bold sm:whitespace-nowrap overflow-x-auto">
                Strategy | Consulting | Product Management | Hotel Management |
                Marketing
              </p>
            </div>

            {/* Bottom section: Light gradient for the description */}
            <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-gradient-to-b from-emerald-50 to-white">
              <div className="space-y-6 sm:space-y-7 md:space-y-8 text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 text-center">
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
                <p className="text-emerald-800 font-semibold text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl pt-4 sm:pt-5 md:pt-6">
                  We don't diversify to do more. We diversify to do better.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
