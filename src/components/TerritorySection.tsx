import { motion } from "framer-motion";
import { CinematicText } from "./CinematicText";
// Assuming you have a <CinematicText> component

// --- Icon Components (Placeholders from your code) ---
// Assuming you import these from 'lucide-react' or a similar library
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
const ChevronRight = ({ className }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={3} // Made chevron a bit thicker
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

// --- Data for the grid layout ---
// Each item now has its own theme object
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
      chevronColor: "text-green-500",
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
      chevronColor: "text-amber-500",
      hoverBorder: "hover:border-amber-300",
    },
  },
];

// --- Your New Component ---
export const TerritorySection = () => {
  return (
    // Changed bg to bg-gray-50 for smooth transition from previous section
    <section id="territory" className="relative py-10 px-6 bg-gray-50">
      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <CinematicText className="text-7xl md:text-9xl font-black mb-6 text-slate-900">
            Our Territory
          </CinematicText>
          <p className="text-2xl md:text-3xl text-amber-800 font-bold mb-12">
            Where instinct turns into innovation. Our creations are the proof of
            our hunt — built from instinct, sharpened by intellect, and driven
            by purpose.
          </p>
        </motion.div>

        {/* --- START OF NEW UI --- */}
        <div className="grid md:grid-cols-2 gap-12">
          {productList.map((product, index) => (
            <motion.div
              key={product.title}
              // New animation: Slide up
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="flex"
            >
              <div
                className={`w-full flex flex-col rounded-2xl shadow-lg border border-gray-200 overflow-hidden
                           transition-all duration-300 ${product.theme.hoverBorder} hover:-translate-y-2 hover:shadow-xl`}
              >
                {/* Top section: Solid light color (Icon + Title) */}
                <div
                  className={`p-8 ${product.theme.lightBg} flex items-center gap-5`}
                >
                  <product.icon
                    className={`w-12 h-12 ${product.theme.iconColor} flex-shrink-0`}
                  />
                  <h3
                    className={`text-5xl font-bold ${product.theme.headingColor}`}
                  >
                    {product.title}
                  </h3>
                </div>

                {/* Bottom section: Light gradient (Subtitle + Desc + Features) */}
                <div
                  className={`p-8 bg-gradient-to-b ${product.theme.gradientClasses} h-full flex flex-col`}
                >
                  <p
                    className={`text-2xl font-semibold ${product.theme.subtitleColor} mb-5`}
                  >
                    {product.subtitle}
                  </p>
                  <p
                    className={`text-lg ${product.theme.textColor} mb-8 leading-relaxed`}
                  >
                    {product.desc}
                  </p>
                  <ul className="space-y-4 mt-auto">
                    {" "}
                    {/* mt-auto pushes features to the bottom */}
                    {product.features.map((feat) => (
                      <motion.li
                        key={feat}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className={`flex items-center text-lg font-medium ${product.theme.featureColor}`}
                      >
                        <ChevronRight
                          className={`w-5 h-5 mr-2 ${product.theme.chevronColor}`}
                        />
                        {feat}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {/* Removed the bottom fade-out div as it's no longer needed */}
    </section>
  );
};
