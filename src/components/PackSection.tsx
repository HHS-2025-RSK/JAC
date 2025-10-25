import { motion } from "framer-motion";
import { FounderCard } from "./FounderCard";
import { CinematicText, FadeInSection } from "./CinematicText";

// --- Data for the grid layout with themes ---
const founders = [
  {
    name: "Ryan",
    title: "The Trailblazer",
    quirk:
      "Treats every brainstorming session like a hunt - snacks optional, bold ideas mandatory.",
    perk: "Can turn midnight chaos into sunrise strategy without breaking stride.",
    powerMove: "Moves in silence but leaves tracks that redefine direction.",
    takeaway: "The fire that leads the run.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ryani&scale=80",
    delay: 0.1,
    description: "One sparks the fire",
    theme: {
      lightBg: "bg-red-100",
      headingColor: "text-red-900",
      titleColor: "text-red-700",
      gradientClasses: "from-red-50 to-white",
      textColor: "text-red-900",
      borderColor: "border-red-200",
      hoverBorder: "hover:border-red-300",
      highlightColor: "text-red-800",
    },
  },
  {
    name: "SK",
    title: "The Tempest",
    quirk:
      "Turns crisis meetings into comedy hours - yet somehow doubles productivity.",
    perk: "Executes so sharply, the wilderness adjusts its pace.",
    powerMove:
      "Commands pace, purpose, and pulse - and still finds time to make it all look effortless.",
    takeaway: "The storm that drives the chase.",
    image: "https://api.dicebear.com/7.x/big-smile/svg?seed=Seth&scale=80",
    delay: 0.2,
    description: "One commands the storm",
    theme: {
      lightBg: "bg-slate-200",
      headingColor: "text-slate-900",
      titleColor: "text-slate-700",
      gradientClasses: "from-slate-100 to-white",
      textColor: "text-slate-800",
      borderColor: "border-slate-300",
      hoverBorder: "hover:border-slate-400",
      highlightColor: "text-slate-900",
    },
  },
  {
    name: "Seth",
    title: "The Silent Fang",
    quirk:
      "Replies three hours late but fixes what no one knew was broken - and probably the Wi-Fi too.",
    perk: "Finds peace in code, poetry in precision, and stillness in systems.",
    powerMove:
      "Operates at 1% volume, 100% impact - proof that calm isn't quiet, it's control.",
    takeaway: "The calm that steadies the hunt.",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Seth&scale=80",
    delay: 0.3,
    description: "One anchors the calm",
    theme: {
      lightBg: "bg-teal-100",
      headingColor: "text-teal-900",
      titleColor: "text-teal-700",
      gradientClasses: "from-teal-50 to-white",
      textColor: "text-teal-900",
      borderColor: "border-teal-200",
      hoverBorder: "hover:border-teal-300",
      highlightColor: "text-teal-800",
    },
  },
];

export const PackSection = () => {
  return (
    <section id="pack" className="relative mb-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto bg-[#FDFBF3]/95 pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
        {/* Header text */}
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CinematicText className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 text-slate-900">
              The Pack
            </CinematicText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-800 font-bold mb-8 sm:mb-10 md:mb-12">
              Three founders. One vision.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 mb-6 sm:mb-8 max-w-3xl mx-auto px-2">
              They didn't just build a company - they forged a force that moves
              with purpose, precision, and pulse.
            </p>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 mb-6 sm:mb-8 px-2">
              Together, they're the equation that shouldn't work - but somehow
              does.
            </p>
          </motion.div>
        </div>

        {/* Founder cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12 mt-12 sm:mt-16 md:mt-20">
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: founder.delay }}
              className="flex flex-col items-center h-full"
            >
              {/* Bitmoji Image - Responsive size */}
              <img
                src={founder.image}
                alt={`${founder.name} bitmoji`}
                className="w-28 h-28 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain mb-3 sm:mb-4"
              />

              {/* Description - Responsive height for alignment */}
              <p className="text-lg sm:text-xl md:text-2xl font-bold text-slate-800 text-center min-h-[60px] sm:min-h-[70px] flex items-center justify-center mb-4 sm:mb-6 px-2">
                {founder.description}
              </p>

              {/* Card - Takes remaining space */}
              <div className="w-full flex-1">
                <FounderCard
                  name={founder.name}
                  title={founder.title}
                  quirk={founder.quirk}
                  perk={founder.perk}
                  powerMove={founder.powerMove}
                  takeaway={founder.takeaway}
                  theme={founder.theme}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom text */}
        <div className="max-w-6xl mx-auto px-2">
          <FadeInSection>
            <motion.div className="pt-8 sm:pt-10 md:pt-12 text-center">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-700 leading-relaxed italic">
                JAC Magnus isn't powered by luck or noise - it's built on
                instinct, discipline, and the belief that impossible isn't made
                for us.
              </p>
            </motion.div>
          </FadeInSection>
        </div>
      </div>
    </section>
  );
};
