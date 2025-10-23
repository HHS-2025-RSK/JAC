import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CinematicTextProps {
  children: string;
  className?: string;
  delay?: number;
  gradient?: boolean;
}

export const CinematicText = ({
  children,
  className = "",
  delay = 0,
  gradient = false,
}: CinematicTextProps) => {
  const words = children.split(" ");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
    },
  };

  return (
    // CinematicText.tsx (uniform gap)
    <motion.div
      className={`${className} ${gradient ? "text-gradient-gold" : ""} inline-flex flex-wrap items-baseline gap-x-6 md:gap-x-8 text-center`}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {words.map((word, index) => (
        <motion.span key={index} variants={child} className="">
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};

interface FadeInSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const FadeInSection = ({
  children,
  className = "",
  delay = 0,
}: FadeInSectionProps) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
