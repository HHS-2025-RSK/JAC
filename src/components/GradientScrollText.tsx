// import { useEffect, useState, useRef } from "react";

// const GradientScrollText = ({ children }) => {
//   const ref = useRef(null);
//   const [color, setColor] = useState("rgb(0, 0, 0)"); // initial green tone

//   useEffect(() => {
//     const handleScroll = () => {
//       const element = ref.current;
//       if (!element) return;

//       const rect = element.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       const visible = 1 - Math.min(Math.max(rect.top / windowHeight, 0), 1);

//       // ✅ Premium Green Gradient
//       const colors = [
//         [0, 0, 0], // Deep Forest (#4A6B4F)
//         [0, 0, 0], // Emerald (#3E8E5A)
//         [0, 0, 0], // Golden Green (#A3B93C)
//       ];

//       let r, g, b;

//       if (visible < 0.5) {
//         // From forest → emerald
//         const ratio = visible / 0.5;
//         r = Math.round(colors[0][0] + (colors[1][0] - colors[0][0]) * ratio);
//         g = Math.round(colors[0][1] + (colors[1][1] - colors[0][1]) * ratio);
//         b = Math.round(colors[0][2] + (colors[1][2] - colors[0][2]) * ratio);
//       } else {
//         // From emerald → gold-green
//         const ratio = (visible - 0.5) / 0.5;
//         r = Math.round(colors[1][0] + (colors[2][0] - colors[1][0]) * ratio);
//         g = Math.round(colors[1][1] + (colors[2][1] - colors[1][1]) * ratio);
//         b = Math.round(colors[1][2] + (colors[2][2] - colors[1][2]) * ratio);
//       }

//       setColor(`rgb(${r}, ${g}, ${b})`);
//     };

//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <p
//       ref={ref}
//       className="text-2xl md:text-2xl leading-relaxed font-bold mb-8 scroll-gradient-text"
//       style={{ color }}
//     >
//       {children}
//     </p>
//   );
// };

// export default GradientScrollText;

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * A component that renders text which changes color as it scrolls into view.
 * It transitions from a muted color to a vibrant one.
 */
const GradientScrollText = ({ children }) => {
  const elementRef = useRef(null);

  // Track scroll progress relative to this component
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ["start 0.9", "start 0.25"], // Animate from 90% from top to 25% from top
  });

  // Define the color transition
  const initialColor = "#A1887F"; // Muted, lighter brown
  const finalColor = "#4A2C2A"; // Rich, deep brown

  // useTransform maps the scroll progress (0 to 1) to our color range
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    [initialColor, finalColor]
  );

  return (
    <motion.p
      ref={elementRef}
      style={{ color }} // Dynamically applies the changing color
      className="text-3xl md:text-4xl font-bold leading-tight mb-8" // New, larger font size and styling
    >
      {children}
    </motion.p>
  );
};

export default GradientScrollText;
