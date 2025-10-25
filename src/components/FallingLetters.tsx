import { motion } from "framer-motion";

export const FallingLetters = () => {
  const sideLetterVariants = {
    hidden: (custom) => ({ y: -100, opacity: 0, x: custom.startX }),
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      x: 0,
      transition: {
        delay: custom.delay,
        duration: 0.5, // Reduced from 0.9
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  const centerItemVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: (custom) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom.delay,
        duration: 0.4, // Reduced from 0.8
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <div className="w-full mb-16">
      <div className="flex justify-center items-center max-w-6xl mx-auto px-6 gap-x-8 md:gap-x-16">
        <motion.span
          className="text-6xl md:text-9xl font-black text-gradient-gold"
          custom={{ delay: 0, startX: "12rem" }} // Changed from 0.2
          variants={sideLetterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          J
        </motion.span>

        <motion.span
          className="text-4xl md:text-7xl font-bold text-gradient-gold"
          custom={{ delay: 0.15 }} // Changed from 0.5
          variants={centerItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          +
        </motion.span>

        <motion.span
          className="text-6xl md:text-9xl font-black text-gradient-gold"
          custom={{ delay: 0.3 }} // Changed from 0.8
          variants={centerItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          A
        </motion.span>

        <motion.span
          className="text-4xl md:text-7xl font-bold text-gradient-gold"
          custom={{ delay: 0.45 }} // Changed from 1.1
          variants={centerItemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          +
        </motion.span>

        <motion.span
          className="text-6xl md:text-9xl font-black text-gradient-gold"
          custom={{ delay: 0.6, startX: "-12rem" }} // Changed from 1.4
          variants={sideLetterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          C
        </motion.span>
      </div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9, duration: 0.5 }} // Changed from delay: 2.2, duration: 0.6
      >
        <p className="text-3xl md:text-4xl text-slate-600 font-bold">
          A Legacy in Letters
        </p>
      </motion.div>
    </div>
  );
};
