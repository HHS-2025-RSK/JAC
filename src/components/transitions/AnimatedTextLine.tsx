// src/components/AnimatedTextLine.tsx
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: "fadeUp" | "typewriter" | "pulse";
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  typewriter: {
    hidden: { opacity: 0, width: 0 },
    visible: { opacity: 1, width: "100%" },
  },
  pulse: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
};

export const AnimatedTextLine = ({
  children,
  className = "",
  delay = 0,
  variant = "fadeUp",
}: Props) => {
  return (
    <motion.span
      className={`block ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.6 }}
      transition={{
        duration: 0.8,
        delay,
        ease: "easeOut",
        ...(variant === "typewriter" && { type: "spring", stiffness: 300 }),
        ...(variant === "pulse" && { type: "spring", stiffness: 120 }),
      }}
      variants={variants[variant]}
      style={
        variant === "typewriter"
          ? { overflow: "hidden", display: "inline-block" }
          : {}
      }
    >
      {children}
    </motion.span>
  );
};
