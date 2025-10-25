// src/components/HeroSection.tsx
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CinematicText } from "@/components/CinematicText1";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 60]);

  return (
    <section
      ref={heroRef}
      className="relative flex h-screen items-center justify-center overflow-hidden px-6"
    >
      <motion.div
        style={{ opacity, scale, y }}
        className="relative z-10 flex h-full w-full items-center justify-center"
      >
        <div className="text-center">
          <motion.h1
            className="font-black drop-shadow-2xl
             text-[length:clamp(3rem,15vw,14rem)]
             leading-[1.12] md:leading-[1.06] pb-[0.25em] mb-2"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Replicate code2 structure with AnimatedGradientText */}
            <AnimatedGradientText
              speed={2}
              colorFrom="#c7900f" // Bright gold
              colorTo="#dcb24e" // Goldenrod
            >
              JAC{" "}
            </AnimatedGradientText>
            <span className="relative inline-block align-baseline whitespace-nowrap leading-none">
              <AnimatedGradientText
                speed={2}
                colorFrom="#c7900f" // Bright gold
                colorTo="#dcb24e" // Goldenrod
              >
                Magnus
              </AnimatedGradientText>
              {/* Optional: Keep the PVT. LTD part if needed */}
              {/* <span
                className="
                  absolute right-[-15%] bottom-0
                  translate-x-[0.08em] translate-y-[0.32em]
                  text-[0.12em] sm:text-[0.10em] md:text-[0.09em]
                  uppercase tracking-[0.25em] text-white/70
                "
              >
                PVT. LTD
              </span> */}
            </span>
          </motion.h1>
        </div>

        {/* Tagline anchored at the bottom */}
        <div className="pointer-events-none absolute inset-x-0 bottom-20 md:lg:bottom-25 lg:bottom-25 px-6">
          <CinematicText
            className="mx-auto max-w-5xl text-center text-[#F2E6CC] text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold drop-shadow-lg"
            delay={0.5}
          >
            Built Different. Wired for Impact.
          </CinematicText>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
