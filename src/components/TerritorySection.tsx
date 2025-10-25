import { motion } from "framer-motion";
import { CinematicText } from "./CinematicText";

// --- Icon Components ---
const Building2 = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m5-8h1m-1 4h1m-1 4h1"
    />
  </svg>
);

const BookOpen = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.523 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.523 18.246 18 16.5 18c-1.746 0-3.332.523-4.5 1.253"
    />
  </svg>
);

// --- Data for the grid layout ---
const productList = [
  {
    title: "Staffari",
    subtitle: "The Alpha Platform of Hospitality.",
    desc: "Born from 'Staff' + 'Safari,' Staffari reimagines the future of hospitality. It's not just a staffing platform - it's a full-scale consulting and management ecosystem that transforms how hotels hire, operate, and grow. By integrating workforce intelligence, operational clarity, and strategic consulting, Staffari helps the industry move smarter and faster. Because in the hospitality world, true excellence isn't managed - it's mastered.",
    icon: Building2,
    features: [
      "Workforce Intelligence",
      "Operational Clarity",
      "Strategic Consulting",
    ],
    theme: {
      lightBg: "bg-green-100",
      iconColor: "text-green-600",
      headingColor: "text-green-900",
      subtitleColor: "text-green-800",
      gradientClasses: "from-green-50 to-white",
      textColor: "text-green-900",
      featureColor: "text-green-800",
      bulletColor: "text-green-600",
      hoverBorder: "hover:border-green-300",
    },
  },
  {
    title: "Shelfie",
    subtitle: "Your Shelf. Your Story.",
    desc: "Shelfie was born from the creative core of the den - inspired by those who live, write, and dream in stories. It's not just a space to read or write - it's where imagination moves, evolves, and keeps you chasing the next line. A haven for readers, writers, and thinkers, built for those who crave rhythm in words and magic in meaning. Shelfie isn't just for stories - it's an experience that draws you in, word by word, frame by frame.",
    icon: BookOpen,
    features: ["Imagination Hub", "Reader's Haven", "Writer's Rhythm"],
    theme: {
      lightBg: "bg-amber-100",
      iconColor: "text-amber-600",
      headingColor: "text-amber-900",
      subtitleColor: "text-amber-800",
      gradientClasses: "from-amber-50 to-white",
      textColor: "text-amber-900",
      featureColor: "text-amber-800",
      bulletColor: "text-amber-600",
      hoverBorder: "hover:border-amber-300",
    },
  },
];

export const TerritorySection = () => {
  return (
    <section id="territory" className="relative mb-10 px-4 sm:px-6">
      <div className="relative max-w-7xl mx-auto bg-[#FDFBF3]/95 pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <CinematicText className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 text-slate-900">
            Our Territory
          </CinematicText>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-800 font-bold mb-8 sm:mb-10 md:mb-12 px-2">
            Where instinct turns into innovation. Our creations are the proof of
            our hunt — built from instinct, sharpened by intellect, and driven
            by purpose.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
          {productList.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="flex"
            >
              <div
                className={`w-full flex flex-col rounded-xl sm:rounded-2xl shadow-lg border border-gray-200 overflow-hidden
                           transition-all duration-300 ${product.theme.hoverBorder} hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Top section: Icon + Title */}
                <div
                  className={`p-5 sm:p-6 md:p-8 ${product.theme.lightBg} flex items-center gap-3 sm:gap-4 md:gap-5`}
                >
                  <product.icon
                    className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 ${product.theme.iconColor} flex-shrink-0`}
                  />
                  <h3
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold ${product.theme.headingColor}`}
                  >
                    {product.title}
                  </h3>
                </div>

                {/* Bottom section: Subtitle + Description + Features */}
                <div
                  className={`p-5 sm:p-6 md:p-8 bg-gradient-to-b ${product.theme.gradientClasses} h-full flex flex-col`}
                >
                  <p
                    className={`text-lg sm:text-xl md:text-2xl font-semibold ${product.theme.subtitleColor} mb-4 sm:mb-5`}
                  >
                    {product.subtitle}
                  </p>

                  {/* Description with justified text */}
                  <p
                    className={`text-base sm:text-lg md:text-xl ${product.theme.textColor} mb-6 sm:mb-7 md:mb-8 leading-relaxed text-justify`}
                  >
                    {product.desc}
                  </p>

                  {/* Features with bullet points */}
                  <ul className="space-y-3 sm:space-y-4 mt-auto list-none">
                    {product.features.map((feat) => (
                      <motion.li
                        key={feat}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`flex items-start text-base sm:text-lg md:text-xl font-medium ${product.theme.featureColor}`}
                      >
                        <span
                          className={`${product.theme.bulletColor} text-2xl sm:text-3xl leading-none mr-3 sm:mr-4 flex-shrink-0`}
                        >
                          •
                        </span>
                        <span className="pt-1">{feat}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
