import { motion } from "framer-motion";
import { ContactForm } from "./ContactForm";
import { CinematicText } from "./CinematicText";
// Assuming you have a <CinematicText> component
// Assuming you have a <ContactForm /> component

export const ContactSection = () => {
  return (
    // 1. Changed background to bg-gray-50
    <section id="contact" className="relative mb-10">
      <div className="max-w-7xl mx-auto bg-[#FDFBF3]/95 pt-20 pb-10 px-6 md:px-12 rounded-3xl shadow-2xl border border-slate-200">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <CinematicText className="text-7xl md:text-9xl font-black mb-6 text-slate-900">
              The Call of the Wild
            </CinematicText>
          </motion.div>

          {/* 2. Replaced FadeInSection with motion.div and updated text color */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-2xl md:text-3xl text-amber-700 font-bold mb-12">
              Where echoes become alliances.
            </p>
            <div className="max-w-3xl mx-auto space-y-8 text-2xl md:text-3xl text-slate-700">
              <p>
                Every idea starts as a signal - a call sent out into the
                unknown. At JAC Magnus, we run toward those echoes that sound
                like purpose, creativity, and courage.
              </p>
              <p>
                If you feel the pull, follow it. Join us on this adventure - to
                build, create, and conquer new trails together.
              </p>
            </div>
          </motion.div>
        </div>

        {/* 3. Wrapped the ContactForm in the new split-card UI */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="rounded-2xl shadow-lg border border-gray-200 overflow-hidden
                     transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          {/* Top section: Solid light color for CTA */}
          <div className="bg-amber-700 p-10">
            <h3 className="text-3xl md:text-4xl text-white text-center font-bold">
              Send Your Signal
            </h3>
          </div>

          {/* Bottom section: Light gradient for the Form */}
          <div className="p-8 md:p-12 bg-gradient-to-b from-amber-50 to-white">
            <ContactForm />
          </div>
        </motion.div>
      
          <span className="block mt-8 text-3xl text-center text-slate-700 italic">
            Our strength lies in doing ordinary things differently - with sharper thinking, cleaner execution, and deeper intent.
          </span>
      </div>
      {/* <div
        className="absolute top-90 left-0 h-[20vh] w-full pointer-events-none"
        style={{
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 60%, transparent 100%)",
          background:
            "linear-gradient(to bottom, #F2E6CC 50%, transparent 100%)",
        }}
      ></div> */}
    </section>
  );
};
