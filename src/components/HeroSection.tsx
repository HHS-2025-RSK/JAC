// Updated HeroSection.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import forestHero from "@/assets/forest-video.mp4";
import { CinematicText, FadeInSection } from "@/components/CinematicText";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section
      ref={heroRef}
      className="sticky top-0 z-0 flex h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Video Background with enhanced filter */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 h-full w-full object-cover z-0 -translate-x-1/2 -translate-y-1/2 scale-150 brightness-110 contrast-125"
      >
        <source src={forestHero} type="video/mp4" />
      </video>

      {/* Enhanced Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Scroll-Fading Content with more animations */}
      <motion.div
        style={{ opacity, scale, y }}
        className="relative text-center max-w-5xl z-10"
      >
        <motion.h1
          className="text-7xl md:text-9xl font-black mb-6 text-gradient-gold drop-shadow-2xl"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          JAC Magnus
        </motion.h1>
        <p className="text-xl md:text-2xl text-white/60 mb-8 uppercase tracking-widest">
          Pvt. Ltd
        </p>

        <CinematicText
          className="text-2xl md:text-4xl font-bold text-[#F2E6CC] mb-12 drop-shadow-lg"
          delay={0.5}
        >
          Built Different. Wired for Impact.
        </CinematicText>

        {/* <FadeInSection delay={1}>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
          <motion.div
            className="text-white/80"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={32} className="mx-auto" />
          </motion.div>
        </FadeInSection> */}
      </motion.div>
    </section>
  );
};

export default HeroSection;
