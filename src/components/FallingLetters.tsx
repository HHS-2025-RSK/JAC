import { motion } from "framer-motion";

export const FallingLetters = () => {
  const letterVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: custom * 0.3,
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  };

  return (
    <div className="w-full mb-16">
      <div className="flex justify-between items-center max-w-6xl mx-auto px-6">
        <motion.span
          className="text-6xl md:text-9xl font-black text-gradient-gold"
          custom={0}
          variants={letterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          J
        </motion.span>
        
        <motion.span
          className="text-4xl md:text-7xl font-bold text-gradient-gold"
          custom={1}
          variants={letterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          +
        </motion.span>
        
        <motion.span
          className="text-6xl md:text-9xl font-black text-gradient-gold"
          custom={2}
          variants={letterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          A
        </motion.span>
        
        <motion.span
          className="text-4xl md:text-7xl font-bold text-gradient-gold"
          custom={3}
          variants={letterVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          +
        </motion.span>
        
        <motion.span
          className="text-6xl md:text-9xl font-black text-gradient-gold"
          custom={4}
          variants={letterVariants}
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
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <p className="text-2xl md:text-3xl text-slate-600 font-medium">
          = A Legacy in Letters
        </p>
      </motion.div>
    </div>
  );
};
