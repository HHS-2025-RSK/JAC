import { motion } from "framer-motion";
import { CinematicText } from "./CinematicText";

// --- Icon Components ---
const AlumniIcon = ({ className }) => (
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
      d="M17 20h5v-2a3 3 0 00-5.356-2.121M17 20v-2m0 2H5v-2a3 3 0 015.356-2.121M12 11a4 4 0 100-8 4 4 0 000 8z"
    />
  </svg>
);

const HubIcon = ({ className }) => (
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
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>
);

const FutureIcon = ({ className }) => (
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
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

// --- Data for the grid layout ---
const denItems = [
  {
    icon: AlumniIcon,
    title: "Alumni Power",
    desc: "Powered by alumni from ISB and IIIT Hyderabad - institutions known for transforming intelligence into impact.",
    delay: 0.2,
    theme: {
      darkBg: "bg-emerald-600",
      iconColor: "text-emerald-200",
      headingColor: "text-white",
      gradientClasses: "from-emerald-50 to-emerald-100",
      textColor: "text-emerald-900",
      hoverBorder: "hover:border-emerald-300",
    },
  },
  {
    icon: HubIcon,
    title: "Collaboration Hub",
    desc: "Here, intellect becomes our compass and collaboration, our hunt. It's where sharp minds gather, plans take shape, and every pursuit begins with purpose.",
    delay: 0.4,
    theme: {
      darkBg: "bg-sky-600",
      iconColor: "text-sky-100",
      headingColor: "text-white",
      gradientClasses: "from-sky-50 to-sky-100",
      textColor: "text-sky-800",
      hoverBorder: "hover:border-sky-300",
    },
  },
  {
    icon: FutureIcon,
    title: "Future Builders",
    desc: "We don't just understand the future - we're building it, one product at a time.",
    delay: 0.6,
    theme: {
      darkBg: "bg-amber-700",
      iconColor: "text-amber-200",
      headingColor: "text-white",
      gradientClasses: "from-amber-50 to-amber-100",
      textColor: "text-amber-900",
      hoverBorder: "hover:border-amber-300",
    },
  },
];

export const DenSection = () => {
  return (
    <section id="den" className="relative mb-10 px-4 sm:px-6">
      <div className="mx-auto max-w-7xl bg-[#FDFBF3]/95 pt-16 sm:pt-20 pb-12 sm:pb-16 px-4 sm:px-6 md:px-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <CinematicText className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black mb-4 sm:mb-6 text-slate-900">
            The Den
          </CinematicText>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-amber-800 font-bold px-2">
            Strength built on knowledge, guided by instinct.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
          {denItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: item.delay }}
              className="flex"
            >
              <div
                className={`bg-white rounded-xl shadow-md border border-gray-200 w-full flex flex-col overflow-hidden
                           transition-all duration-300 ${item.theme.hoverBorder} hover:-translate-y-1`}
              >
                {/* Top section: Icon and Heading */}
                <div
                  className={`p-5 sm:p-6 md:p-8 flex flex-row items-center rounded-t-xl ${item.theme.darkBg}`}
                >
                  <div className="flex-shrink-0">
                    <item.icon
                      className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 ${item.theme.iconColor}`}
                    />
                  </div>
                  <h4
                    className={`text-lg sm:text-xl md:text-2xl font-bold ml-3 sm:ml-4 ${item.theme.headingColor}`}
                  >
                    {item.title}
                  </h4>
                </div>

                {/* Bottom section: Description */}
                <div
                  className={`p-5 sm:p-6 md:p-8 flex-grow bg-gradient-to-r ${item.theme.gradientClasses}`}
                >
                  <p
                    className={`text-base sm:text-lg md:text-xl ${item.theme.textColor} leading-relaxed font-semibold`}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
