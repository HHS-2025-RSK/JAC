import { motion } from "framer-motion";
import { FounderCard } from "./FounderCard"; // Assuming FounderCard is in the same folder
import { CinematicText, FadeInSection } from "./CinematicText";
// Assuming you have a <CinematicText> component

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
    // This is the SINGLE bitmoji image URL
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
    <section id="pack" className="relative py-20 px-6 bg-[#F2E6CC]">
      <div className="max-w-7xl mx-auto">
        {/* ... (Header text remains the same) ... */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CinematicText className="text-7xl md:text-9xl font-black mb-6 text-slate-900">
              The Pack
            </CinematicText>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-3xl md:text-4xl text-amber-800 font-bold mb-12">
              Three founders. One vision.
            </p>
            <p className="text-2xl md:text-3xl text-slate-700 mb-8 max-w-3xl mx-auto">
              They didn't just build a company - they forged a force that moves
              with purpose, precision, and pulse.
            </p>
            <p className="text-2xl md:text-3xl text-slate-700 mb-8">
              Together, they're the equation that shouldn't work - but somehow
              does.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-12 mt-20">
          {founders.map((founder) => (
            <motion.div
              key={founder.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: founder.delay }}
              className="flex flex-col items-center"
            >
              {/* --- HERE IS THE SINGLE BITMOJI IMAGE --- */}
              <img
                src={founder.image}
                alt={`${founder.name} bitmoji`}
                className="w-40 h-40 mb-4" // Adjust size as needed
              />

              <p className="text-3xl font-bold text-slate-800 mb-6 text-center">
                {founder.description}
              </p>

              {/* We pass all props EXCEPT the image, as it's not needed inside the card */}
              <FounderCard
                name={founder.name}
                title={founder.title}
                quirk={founder.quirk}
                perk={founder.perk}
                powerMove={founder.powerMove}
                takeaway={founder.takeaway}
                theme={founder.theme}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div className="max-w-6xl mx-auto">
        <FadeInSection>
          <motion.div className="pt-12">
            <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed italic">
              JAC Magnus isn't powered by luck or noise - it's built on
              instinct, discipline, and the belief that impossible isn't made
              for us.
            </p>
          </motion.div>
        </FadeInSection>
      </div>
      {/* ... (Bottom gradient div remains the same) ... */}
      {/* <div
        className="absolute bottom-0 left-0 h-[10vh] w-full pointer-events-none"
        style={{
          background: "linear-gradient(to top, #F2E6CC 10%, transparent 100%)",
        }}
      ></div> */}
    </section>
  );
};
