// import { useState, useEffect } from "react";
// import { CinematicCursor } from "@/components/CinematicCursor";
// import { HeroScene } from "@/components/HeroScene";
// import { CinematicText, FadeInSection } from "@/components/CinematicText";
// import { FounderCard } from "@/components/FounderCard";
// import { ProductCard } from "@/components/ProductCard";
// import { ContactForm } from "@/components/ContactForm";
// import { motion } from "framer-motion";
// import {
//   Sparkles,
//   Users,
//   Compass,
//   GraduationCap,
//   Building2,
//   BookOpen,
// } from "lucide-react";

// const Index = () => {
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       setMousePosition({
//         x: (e.clientX / window.innerWidth - 0.5) * 2,
//         y: (e.clientY / window.innerHeight - 0.5) * 2,
//       });
//     };

//     const handleScroll = () => {
//       setScrolled(window.scrollY > 100);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       {/* <CinematicCursor />
//       <HeroScene mousePosition={mousePosition} /> */}

//       {/* Top Left Logo */}
//       <motion.div
//         className="fixed top-8 left-8 z-50"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{
//           opacity: scrolled ? 0 : 1,
//           x: scrolled ? -20 : 0,
//           y: scrolled ? -30 : 0,
//         }}
//         transition={{ duration: 0.4 }}
//       >
//         <h1 className="text-3xl font-bold text-gradient-gold tracking-wider">
//           JAC
//         </h1>
//       </motion.div>

//       {/* Hero Section */}
//       <section className="relative min-h-screen flex items-center justify-center px-6">
//         <div className="text-center max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
//           >
//             <h1 className="text-7xl md:text-9xl font-black mb-6 text-gradient-gold">
//               JAC Magnus
//             </h1>
//             <p className="text-xl md:text-2xl text-foreground/60 mb-8 uppercase tracking-widest">
//               Pvt. Ltd
//             </p>
//           </motion.div>

//           <CinematicText
//             className="text-2xl md:text-4xl font-bold text-primary mb-12"
//             delay={0.5}
//           >
//             Built Different. Wired for Impact.
//           </CinematicText>

//           <FadeInSection delay={1}>
//             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
//           </FadeInSection>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="relative py-32 px-6">
//         <div className="max-w-4xl mx-auto">
//           <FadeInSection>
//             <div className="glass rounded-3xl p-12 md:p-16 bg-gradient-to-br from-[hsl(40_20_92%)] to-[hsl(40_15_88%)]">
//               <h2 className="text-4xl md:text-5xl font-bold text-gradient-gold mb-8 text-center">
//                 JAC Magnus
//               </h2>
//               <p className="text-xl md:text-2xl text-background leading-relaxed mb-6">
//                 We live in a world where everyone's building something - yet few
//                 know why.
//               </p>
//               <p className="text-xl md:text-2xl text-background leading-relaxed mb-6">
//                 At JAC Magnus, we build with purpose. Every idea we create,
//                 every product we design, and every solution we deliver has
//                 meaning behind it.
//               </p>
//               <p className="text-xl md:text-2xl text-background leading-relaxed mb-6">
//                 We don't chase trends or noise. We focus on what works -
//                 refining, rethinking, and rebuilding until it feels right.
//               </p>
//               <p className="text-xl md:text-2xl text-background leading-relaxed mb-6">
//                 Our strength lies in doing ordinary things differently - with
//                 sharper thinking, cleaner execution, and deeper intent.
//               </p>
//               <p className="text-xl md:text-2xl text-gradient-gold leading-relaxed font-bold">
//                 And at the heart of it all is one unwavering belief - if it's
//                 not different, it's not Magnus.
//               </p>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* Legacy Section */}
//       <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
//         <div className="max-w-6xl mx-auto">
//           <CinematicText
//             className="text-5xl md:text-7xl font-black text-center mb-16"
//             gradient
//           >
//             J + A + C = A Legacy In Letters
//           </CinematicText>

//           <FadeInSection delay={0.3}>
//             <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
//               <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
//                 JAC Magnus isn't just a name - it's a story.
//               </p>
//               <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
//                 Each letter, J, A, and C, carries the name of the mothers who
//                 shaped the founders behind this company. Women whose strength,
//                 grace, and resilience became the foundation of everything we do.
//               </p>
//               <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
//                 JAC stands for gratitude - a daily reminder that before
//                 innovation comes intention, and before growth comes grounding.
//               </p>
//               <p className="text-lg md:text-xl text-primary leading-relaxed font-semibold">
//                 Our name is our origin, our purpose, and our promise to build
//                 with heart, lead with integrity, and create with meaning.
//                 Because strength isn't loud. It's lasting!
//               </p>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* The Pack */}
//       <section className="relative py-32 px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <CinematicText className="text-6xl md:text-8xl font-black mb-8">
//               The Pack
//             </CinematicText>

//             <FadeInSection delay={0.3}>
//               <p className="text-2xl md:text-3xl text-gradient-gold font-bold mb-6">
//                 Three founders. One vision.
//               </p>
//               <p className="text-lg md:text-xl text-foreground/90 mb-6 max-w-3xl mx-auto">
//                 They didn't just build a company - they forged a force that
//                 moves with purpose, precision, and pulse.
//               </p>
//               <p className="text-lg md:text-xl text-foreground/90 mb-6">
//                 Together, they're the equation that shouldn't work - but somehow
//                 does.
//               </p>

//               <div className="flex flex-col md:flex-row justify-center gap-4 my-12 text-xl font-semibold text-primary">
//                 <p>One sparks the fire</p>
//                 <p className="hidden md:block">•</p>
//                 <p>One commands the storm</p>
//                 <p className="hidden md:block">•</p>
//                 <p>One anchors the calm</p>
//               </div>

//               <p className="text-lg md:text-xl text-foreground/90 italic">
//                 JAC Magnus isn't powered by luck or noise - it's built on
//                 instinct, discipline, and the belief that impossible isn't made
//                 for us.
//               </p>
//             </FadeInSection>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mt-20">
//             <FounderCard
//               name="Ryan"
//               title="The Trailblazer"
//               quirk="Treats every brainstorming session like a hunt - snacks optional, bold ideas mandatory."
//               perk="Can turn midnight chaos into sunrise strategy without breaking stride."
//               powerMove="Moves in silence but leaves tracks that redefine direction."
//               takeaway="The fire that leads the run."
//               delay={0.1}
//             />
//             <FounderCard
//               name="SK"
//               title="The Tempest"
//               quirk="Turns crisis meetings into comedy hours - yet somehow doubles productivity."
//               perk="Executes so sharply, the wilderness adjusts its pace."
//               powerMove="Commands pace, purpose, and pulse - and still finds time to make it all look effortless."
//               takeaway="The storm that drives the chase."
//               delay={0.2}
//             />
//             <FounderCard
//               name="Seth"
//               title="The Silent Fang"
//               quirk="Replies three hours late but fixes what no one knew was broken - and probably the Wi-Fi too."
//               perk="Finds peace in code, poetry in precision, and stillness in systems."
//               powerMove="Operates at 1% volume, 100% impact - proof that calm isn't quiet, it's control."
//               takeaway="The calm that steadies the hunt."
//               delay={0.3}
//             />
//           </div>
//         </div>
//       </section>

//       {/* The Hunt - Strategy */}
//       <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <CinematicText className="text-6xl md:text-8xl font-black mb-8">
//               The Hunt
//             </CinematicText>

//             <FadeInSection delay={0.3}>
//               <p className="text-xl md:text-2xl text-foreground/90 italic mb-12">
//                 Eyes on the horizon, focus on the target.
//               </p>
//               <p className="text-lg md:text-xl text-foreground/80">
//                 We track opportunity with precision, adapt to the terrain, and
//                 strike only when the outcome matters.
//               </p>
//             </FadeInSection>
//           </div>

//           <FadeInSection delay={0.5}>
//             <div className="glass rounded-2xl p-12">
//               <h3 className="text-4xl font-bold text-gradient-gold mb-8 text-center">
//                 Strategy
//               </h3>
//               <p className="text-2xl text-primary text-center mb-8 font-semibold">
//                 Consulting | Product Management | Hotel Management | Marketing
//               </p>
//               <div className="space-y-6 text-lg text-foreground/90">
//                 <p>
//                   We work across industries that define the pace of progress.
//                   From consulting that builds clarity, to strategies that spark
//                   scale - from hospitality systems that evolve with people, to
//                   marketing that turns brands into belief.
//                 </p>
//                 <p>
//                   Every vertical we enter is approached with the same mindset -
//                   clarity, creativity, and commitment.
//                 </p>
//                 <p className="text-primary font-semibold">
//                   We don't diversify to do more. We diversify to do better.
//                 </p>
//               </div>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* The Den */}
//       <section className="relative py-32 px-6">
//         <div className="max-w-6xl mx-auto">
//           <CinematicText className="text-6xl md:text-8xl font-black text-center mb-16">
//             The Den
//           </CinematicText>

//           <FadeInSection delay={0.3}>
//             <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
//               <p className="text-xl md:text-2xl text-gradient-gold font-bold mb-8 text-center">
//                 Strength built on knowledge, guided by instinct.
//               </p>
//               <div className="space-y-6 text-lg text-foreground/90">
//                 <p>
//                   Our den is powered by alumni from ISB and IIIT Hyderabad -
//                   institutions known for transforming intelligence into impact.
//                 </p>
//                 <p>
//                   Here, intellect becomes our compass and collaboration, our
//                   hunt. It's where sharp minds gather, plans take shape, and
//                   every pursuit begins with purpose.
//                 </p>
//                 <p className="text-primary font-semibold">
//                   We don't just understand the future - we're building it, one
//                   product at a time.
//                 </p>
//               </div>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* Our Territory - Products */}
//       <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <CinematicText className="text-6xl md:text-8xl font-black mb-8">
//               Our Territory
//             </CinematicText>

//             <FadeInSection delay={0.3}>
//               <p className="text-xl md:text-2xl text-foreground/90">
//                 Where instinct turns into innovation. Our creations are the
//                 proof of our hunt — built from instinct, sharpened by intellect,
//                 and driven by purpose.
//               </p>
//             </FadeInSection>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <ProductCard
//               title="Staffari"
//               subtitle="The Alpha Platform of Hospitality."
//               description="Born from 'Staff' + 'Safari,' Staffari reimagines the future of hospitality. It's not just a staffing platform - it's a full-scale consulting and management ecosystem that transforms how hotels hire, operate, and grow. By integrating workforce intelligence, operational clarity, and strategic consulting, Staffari helps the industry move smarter and faster. Because in the hospitality world, true excellence isn't managed - it's mastered."
//               icon={<Building2 size={48} strokeWidth={1.5} />}
//               delay={0.1}
//             />
//             <ProductCard
//               title="Shelfie"
//               subtitle="Your Shelf. Your Story."
//               description="Shelfie was born from the creative core of the den - inspired by those who live, write, and dream in stories. It's not just a space to read or write - it's where imagination moves, evolves, and keeps you chasing the next line. A haven for readers, writers, and thinkers, built for those who crave rhythm in words and magic in meaning. Shelfie isn't just for stories - it's an experience that draws you in, word by word, frame by frame."
//               icon={<BookOpen size={48} strokeWidth={1.5} />}
//               delay={0.2}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="relative py-32 px-6">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <CinematicText className="text-6xl md:text-8xl font-black mb-8">
//               The Call of the Wild
//             </CinematicText>

//             <FadeInSection delay={0.3}>
//               <p className="text-2xl md:text-3xl text-gradient-gold font-bold mb-8">
//                 Where echoes become alliances.
//               </p>
//               <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-foreground/90">
//                 <p>
//                   Every idea starts as a signal - a call sent out into the
//                   unknown. At JAC Magnus, we run toward those echoes that sound
//                   like purpose, creativity, and courage.
//                 </p>
//                 <p>
//                   If you feel the pull, follow it. Join us on this adventure -
//                   to build, create, and conquer new trails together.
//                 </p>
//               </div>
//             </FadeInSection>
//           </div>

//           <ContactForm />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative py-16 px-6 border-t border-border/30">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gradient-gold mb-4">
//             JAC Magnus Pvt. Ltd.
//           </h2>
//           <p className="text-xl text-primary">
//             Built Different. Wired for Impact.
//           </p>
//           <p className="text-sm text-muted-foreground mt-8">
//             © {new Date().getFullYear()} JAC Magnus Pvt. Ltd. All rights
//             reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;
// import { useState, useEffect } from "react";
// import { CinematicText, FadeInSection } from "@/components/CinematicText";
// import { FounderCard } from "@/components/FounderCard";
// import { ProductCard } from "@/components/ProductCard";
// import { ContactForm } from "@/components/ContactForm";
// import { FallingLetters } from "@/components/FallingLetters";
// import { motion } from "framer-motion";
// import { Building2, BookOpen } from "lucide-react";
// import GradientScrollText from "@/components/GradientScrollText";
// import forestHero from "@/assets/forest-hero.png";

// const Index = () => {
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 100);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="relative min-h-screen">
//       {/* Top Left Logo */}
//       <motion.div
//         className="fixed top-8 left-8 z-50"
//         initial={{ opacity: 0, x: -20 }}
//         animate={{
//           opacity: scrolled ? 0 : 1,
//           x: scrolled ? -20 : 0,
//           y: scrolled ? -30 : 0,
//         }}
//         transition={{ duration: 0.4 }}
//       >
//         <h1 className="text-3xl font-bold text-gradient-gold tracking-wider">
//           JAC
//         </h1>
//       </motion.div>

//       {/* Hero Section */}
//       {/* <section className="relative min-h-screen flex items-center justify-center px-6 bg-[#081f19]">
//         <div className="text-center max-w-5xl">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
//           >
//             <h1 className="text-7xl md:text-9xl font-black mb-6 text-gradient-gold">
//               JAC Magnus
//             </h1>
//             <p className="text-xl md:text-2xl text-white/60 mb-8 uppercase tracking-widest">
//               Pvt. Ltd
//             </p>
//           </motion.div>

//           <CinematicText
//             className="text-2xl md:text-4xl font-bold text-[#F2E6CC] mb-12"
//             delay={0.5}
//           >
//             Built Different. Wired for Impact.
//           </CinematicText>

//           <FadeInSection delay={1}>
//             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
//           </FadeInSection>
//         </div>
//       </section> */}
//       <section
//         className="relative min-h-screen flex items-center justify-center px-6 bg-[#081f19] overflow-hidden"
//         style={{
//           backgroundImage: `url(${forestHero})`, // Replace with your actual image path or URL
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//         }}
//       >
//         {/* Dark overlay to improve text contrast */}
//         <div className="absolute inset-0 bg-black/50"></div>

//         {/* Content over the background */}
//         <div className="relative text-center max-w-5xl z-10">
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
//           >
//             <h1 className="text-7xl md:text-9xl font-black mb-6 text-gradient-gold">
//               JAC Magnus
//             </h1>
//             <p className="text-xl md:text-2xl text-white/60 mb-8 uppercase tracking-widest">
//               Pvt. Ltd
//             </p>
//           </motion.div>

//           <CinematicText
//             className="text-2xl md:text-4xl font-bold text-[#F2E6CC] mb-12"
//             delay={0.5}
//           >
//             Built Different. Wired for Impact.
//           </CinematicText>

//           <FadeInSection delay={1}>
//             <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
//           </FadeInSection>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="relative py-20 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <FadeInSection>
//             <div className="rounded-3xl py-6 px-12 md:py-6 md:px-12">
//               {/* <h2 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-10 text-center">
//                 JAC Magnus
//               </h2> */}
//               <GradientScrollText>
//                 We live in a world where everyone's building something - yet few
//                 know why.
//               </GradientScrollText>

//               <GradientScrollText>
//                 At JAC Magnus, we build with purpose. Every idea we create,
//                 every product we design, and every solution we deliver has
//                 meaning behind it.
//               </GradientScrollText>

//               <GradientScrollText>
//                 We don't chase trends or noise. We focus on what works -
//                 refining, rethinking, and rebuilding until it feels right.
//               </GradientScrollText>

//               <GradientScrollText>
//                 Our strength lies in doing ordinary things differently - with
//                 sharper thinking, cleaner execution, and deeper intent.
//               </GradientScrollText>

//               <GradientScrollText>
//                 <span
//                   style={{
//                     display: "block",
//                     // textAlign: "center",
//                     // background:
//                     //   "linear-gradient(90deg, #BFA67A, #E5B252, #D4832C)",
//                     // WebkitBackgroundClip: "text",
//                     color: "#FF5C00",
//                   }}
//                 >
//                   And at the heart of it all is one unwavering belief - if it's
//                   not different, it's not Magnus.
//                 </span>
//               </GradientScrollText>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* Legacy Section */}
//       <section className="relative py-40 px-6 bg-[#F2E6CC]">
//         <div className="max-w-7xl mx-auto">
//           <FallingLetters />

//           <FadeInSection delay={0.3}>
//             <div className="frosted-glass rounded-2xl p-12 md:p-16 max-w-4xl mx-auto">
//               <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8">
//                 JAC Magnus isn't just a name - it's a story.
//               </p>
//               <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8">
//                 Each letter, J, A, and C, carries the name of the mothers who
//                 shaped the founders behind this company. Women whose strength,
//                 grace, and resilience became the foundation of everything we do.
//               </p>
//               <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed mb-8">
//                 JAC stands for gratitude - a daily reminder that before
//                 innovation comes intention, and before growth comes grounding.
//               </p>
//               <p className="text-2xl md:text-3xl text-primary leading-relaxed font-semibold">
//                 Our name is our origin, our purpose, and our promise to build
//                 with heart, lead with integrity, and create with meaning.
//                 Because strength isn't loud. It's lasting!
//               </p>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* The Pack */}
//       <section className="relative py-40 px-6 bg-[#F2E6CC]">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <CinematicText className="text-7xl md:text-9xl font-black mb-12 text-slate-900">
//               The Pack
//             </CinematicText>

//             <FadeInSection delay={0.3}>
//               <p className="text-3xl md:text-4xl text-gradient-gold font-bold mb-8 text-center">
//                 Three founders. One vision.
//               </p>
//               <p className="text-2xl md:text-3xl text-slate-700 mb-8 max-w-3xl mx-auto">
//                 They didn't just build a company - they forged a force that
//                 moves with purpose, precision, and pulse.
//               </p>
//               <p className="text-2xl md:text-3xl text-slate-700 mb-8">
//                 Together, they're the equation that shouldn't work - but somehow
//                 does.
//               </p>
//             </FadeInSection>
//           </div>

//           <div className="grid md:grid-cols-3 gap-12 mt-20">
//             <div>
//               <p className="text-2xl font-bold text-primary mb-6 text-center">
//                 One sparks the fire
//               </p>
//               <FounderCard
//                 name="Ryan"
//                 title="The Trailblazer"
//                 quirk="Treats every brainstorming session like a hunt - snacks optional, bold ideas mandatory."
//                 perk="Can turn midnight chaos into sunrise strategy without breaking stride."
//                 powerMove="Moves in silence but leaves tracks that redefine direction."
//                 takeaway="The fire that leads the run."
//                 delay={0.1}
//                 image="https://api.dicebear.com/7.x/avataaars/svg?seed=Ryani&gender=male"
//               />
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-primary mb-6 text-center">
//                 One commands the storm
//               </p>
//               <FounderCard
//                 name="SK"
//                 title="The Tempest"
//                 quirk="Turns crisis meetings into comedy hours - yet somehow doubles productivity."
//                 perk="Executes so sharply, the wilderness adjusts its pace."
//                 powerMove="Commands pace, purpose, and pulse - and still finds time to make it all look effortless."
//                 takeaway="The storm that drives the chase."
//                 delay={0.2}
//                 image="https://api.dicebear.com/7.x/avataaars/svg?seed=SK&gender=female"
//               />
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-primary mb-6 text-center">
//                 One anchors the calm
//               </p>
//               <FounderCard
//                 name="Seth"
//                 title="The Silent Fang"
//                 quirk="Replies three hours late but fixes what no one knew was broken - and probably the Wi-Fi too."
//                 perk="Finds peace in code, poetry in precision, and stillness in systems."
//                 powerMove="Operates at 1% volume, 100% impact - proof that calm isn't quiet, it's control."
//                 takeaway="The calm that steadies the hunt."
//                 delay={0.3}
//                 image="https://api.dicebear.com/7.x/avataaars/svg?seed=Seth&gender=male"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Pack Philosophy */}
//       <section className="relative py-40 px-6 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <FadeInSection>
//             <div className="frosted-glass rounded-2xl p-12 md:p-16 text-center">
//               <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed italic">
//                 JAC Magnus isn't powered by luck or noise - it's built on
//                 instinct, discipline, and the belief that impossible isn't made
//                 for us.
//               </p>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* The Hunt - Strategy */}
//       <section className="relative py-40 px-6 bg-[#FAF9F6]">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <CinematicText className="text-7xl md:text-9xl font-black mb-12 text-slate-900">
//               The Hunt
//             </CinematicText>

//             <FadeInSection delay={0.3}>
//               <p className="text-2xl md:text-3xl text-slate-800 italic mb-12">
//                 Eyes on the horizon, focus on the target.
//               </p>
//               <p className="text-2xl md:text-3xl text-slate-700">
//                 We track opportunity with precision, adapt to the terrain, and
//                 strike only when the outcome matters.
//               </p>
//             </FadeInSection>
//           </div>

//           <FadeInSection delay={0.5}>
//             <div className="frosted-glass rounded-2xl p-12 md:p-16">
//               <h3 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-10 text-center">
//                 Strategy
//               </h3>
//               <p className="text-3xl md:text-4xl text-primary text-center mb-10 font-semibold">
//                 Consulting | Product Management | Hotel Management | Marketing
//               </p>
//               <div className="space-y-8 text-2xl md:text-3xl text-slate-700">
//                 <p>
//                   We work across industries that define the pace of progress.
//                   From consulting that builds clarity, to strategies that spark
//                   scale - from hospitality systems that evolve with people, to
//                   marketing that turns brands into belief.
//                 </p>
//                 <p>
//                   Every vertical we enter is approached with the same mindset -
//                   clarity, creativity, and commitment.
//                 </p>
//                 <p className="text-primary font-semibold text-center text-3xl md:text-4xl">
//                   We don't diversify to do more. We diversify to do better.
//                 </p>
//               </div>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* The Den */}
//       <section className="relative py-40 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <CinematicText className="text-7xl md:text-9xl font-black text-center mb-20 text-slate-900">
//             The Den
//           </CinematicText>

//           <FadeInSection delay={0.3}>
//             <div className="frosted-glass rounded-2xl p-12 md:p-16 max-w-4xl mx-auto">
//               <p className="text-3xl md:text-4xl text-gradient-gold font-bold mb-10 text-center">
//                 Strength built on knowledge, guided by instinct.
//               </p>
//               <div className="space-y-8 text-2xl md:text-3xl text-slate-700">
//                 <p>
//                   Our den is powered by alumni from ISB and IIIT Hyderabad -
//                   institutions known for transforming intelligence into impact.
//                 </p>
//                 <p>
//                   Here, intellect becomes our compass and collaboration, our
//                   hunt. It's where sharp minds gather, plans take shape, and
//                   every pursuit begins with purpose.
//                 </p>
//                 <p className="text-primary font-semibold">
//                   We don't just understand the future - we're building it, one
//                   product at a time.
//                 </p>
//               </div>
//             </div>
//           </FadeInSection>
//         </div>
//       </section>

//       {/* Our Territory - Products */}
//       <section className="relative py-40 px-6 bg-[#FAF9F6]">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <CinematicText className="text-7xl md:text-9xl font-black mb-12 text-slate-900">
//               Our Territory
//             </CinematicText>

//             <FadeInSection delay={0.3}>
//               <p className="text-2xl md:text-3xl text-slate-700">
//                 Where instinct turns into innovation. Our creations are the
//                 proof of our hunt — built from instinct, sharpened by intellect,
//                 and driven by purpose.
//               </p>
//             </FadeInSection>
//           </div>

//           <div className="grid md:grid-cols-2 gap-12">
//             <ProductCard
//               title="Staffari"
//               subtitle="The Alpha Platform of Hospitality."
//               description="Born from 'Staff' + 'Safari,' Staffari reimagines the future of hospitality. It's not just a staffing platform - it's a full-scale consulting and management ecosystem that transforms how hotels hire, operate, and grow. By integrating workforce intelligence, operational clarity, and strategic consulting, Staffari helps the industry move smarter and faster. Because in the hospitality world, true excellence isn't managed - it's mastered."
//               icon={<Building2 size={48} strokeWidth={1.5} />}
//               delay={0.1}
//             />
//             <ProductCard
//               title="Shelfie"
//               subtitle="Your Shelf. Your Story."
//               description="Shelfie was born from the creative core of the den - inspired by those who live, write, and dream in stories. It's not just a space to read or write - it's where imagination moves, evolves, and keeps you chasing the next line. A haven for readers, writers, and thinkers, built for those who crave rhythm in words and magic in meaning. Shelfie isn't just for stories - it's an experience that draws you in, word by word, frame by frame."
//               icon={<BookOpen size={48} strokeWidth={1.5} />}
//               delay={0.2}
//             />
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section className="relative py-40 px-6 bg-white">
//         <div className="max-w-6xl mx-auto">
//           <div className="text-center mb-20">
//             <CinematicText className="text-7xl md:text-9xl font-black mb-12 text-slate-900">
//               The Call of the Wild
//             </CinematicText>

//             <FadeInSection delay={0.3}>
//               <p className="text-3xl md:text-4xl text-gradient-gold font-bold mb-10 text-center">
//                 Where echoes become alliances.
//               </p>
//               <div className="max-w-3xl mx-auto space-y-8 text-2xl md:text-3xl text-slate-700">
//                 <p>
//                   Every idea starts as a signal - a call sent out into the
//                   unknown. At JAC Magnus, we run toward those echoes that sound
//                   like purpose, creativity, and courage.
//                 </p>
//                 <p>
//                   If you feel the pull, follow it. Join us on this adventure -
//                   to build, create, and conquer new trails together.
//                 </p>
//               </div>
//             </FadeInSection>
//           </div>

//           <ContactForm />
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative py-16 px-6 bg-white border-t border-slate-200/80">
//         <div className="max-w-6xl mx-auto text-center">
//           <h2 className="text-4xl font-bold text-gradient-gold mb-4">
//             JAC Magnus Pvt. Ltd.
//           </h2>
//           <p className="text-xl text-primary">
//             Built Different. Wired for Impact.
//           </p>
//           <p className="text-sm text-slate-500 mt-8">
//             © {new Date().getFullYear()} JAC Magnus Pvt. Ltd. All rights
//             reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default Index;

import { useState, useEffect } from "react";
import { CinematicText, FadeInSection } from "@/components/CinematicText";
import { FounderCard } from "@/components/FounderCard";
import { ProductCard } from "@/components/ProductCard";
import { ContactForm } from "@/components/ContactForm";
import { FallingLetters } from "@/components/FallingLetters";
import { motion } from "framer-motion";
import {
  Building2,
  BookOpen,
  Menu,
  X,
  Target,
  Zap,
  Globe,
  ChevronRight,
} from "lucide-react";
import GradientScrollText from "@/components/GradientScrollText";
import forestHero from "@/assets/forest-video.mp4";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Introduction", href: "#intro" },
    { name: "Legacy", href: "#legacy" },
    { name: "The Pack", href: "#pack" },
    { name: "The Hunt", href: "#hunt" },
    { name: "The Den", href: "#den" },
    { name: "Territory", href: "#territory" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="relative min-h-screen bg-[#FAF9F6] text-slate-800">
      {/* Navigation Bar */}
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.h1
            className="text-3xl font-bold text-gradient-gold tracking-wider"
            whileHover={{ scale: 1.05 }}
          >
            JAC
          </motion.h1>
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-lg font-medium text-slate-700 hover:text-gradient-gold transition-colors cursor-pointer"
                whileHover={{ scale: 1.1 }}
              >
                {item.name}
              </motion.a>
            ))}
          </div>
          <button
            className="md:hidden text-slate-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-md px-6 py-4"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-lg font-medium text-slate-700 hover:text-gradient-gold cursor-pointer"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </motion.div>
        )}
      </motion.nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Introduction */}
      <section id="intro" className="relative z-10 pt-20">
        <div
          className="absolute bottom-0 left-0 h-[180vh] w-full"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage: "linear-gradient(to top, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 60%, transparent 100%)",
            background:
              "linear-gradient(to top, #F3EAD3 50%, transparent 100%)",
          }}
        ></div>
        <div className="relative mx-auto max-w-6xl px-6 pb-40 pt-[50vh]">
          <FadeInSection>
            <div className="rounded-3xl px-12 py-6 md:px-12 md:py-6 bg-white shadow-xl border border-amber-100">
              <GradientScrollText>
                We live in a world where everyone's building something - yet few
                know why.
              </GradientScrollText>

              <GradientScrollText>
                At JAC Magnus, we build with purpose. Every idea we create,
                every product we design, and every solution we deliver has
                meaning behind it.
              </GradientScrollText>

              <GradientScrollText>
                We don't chase trends or noise. We focus on what works -
                refining, rethinking, and rebuilding until it feels right.
              </GradientScrollText>

              <GradientScrollText>
                Our strength lies in doing ordinary things differently - with
                sharper thinking, cleaner execution, and deeper intent.
              </GradientScrollText>

              <GradientScrollText>
                <span style={{ display: "block", color: "#022B16" }}>
                  And at the heart of it all is one unwavering belief - if it's
                  not different, it's not Magnus.
                </span>
              </GradientScrollText>
            </div>
          </FadeInSection>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[10vh] w-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #FAF9F6 10%, transparent 100%)",
          }}
        ></div>
      </section>

      {/* Legacy Section */}
      <section id="legacy" className="relative pt-5 pb-40 px-6 bg-[#FAF9F6]">
        <div className="max-w-7xl mx-auto">
          <FallingLetters />

          <FadeInSection delay={0.3}>
            <div className="rounded-2xl max-w-5xl mx-auto overflow-hidden shadow-2xl border border-slate-200">
              <div className="bg-[#FDFBF3] px-12 md:px-16 py-8 md:py-8">
                <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed mb-8">
                  JAC Magnus isn't just a name - it's a story.
                </p>
                <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed mb-8">
                  Each letter, J, A, and C, carries the name of the mothers who
                  shaped the founders behind this company. Women whose strength,
                  grace, and resilience became the foundation of everything we
                  do.
                </p>
                <p className="text-2xl md:text-3xl text-slate-800 leading-relaxed mb-8">
                  JAC stands for gratitude - a daily reminder that before
                  innovation comes intention, and before growth comes grounding.
                </p>
              </div>

              <div className="bg-[#022B16] p-6 md:p-6">
                <p className="text-2xl md:text-3xl text-[#F3EAD3]/90 leading-relaxed font-semibold">
                  Our name is our origin, our purpose, and our promise to build
                  with heart, lead with integrity, and create with meaning.
                  Because strength isn't loud. It's lasting!
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[10vh] w-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #F2E6CC 10%, transparent 100%)",
          }}
        ></div>
      </section>

      {/* The Pack */}
      <section id="pack" className="relative py-40 px-6 bg-[#F2E6CC]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <CinematicText className="text-7xl md:text-9xl font-black mb-6 text-slate-900">
              The Pack
            </CinematicText>

            <FadeInSection delay={0.3}>
              <p className="text-3xl md:text-4xl text-amber-800 font-bold mb-12">
                Three founders. One vision.
              </p>
              <p className="text-2xl md:text-3xl text-slate-700 mb-8 max-w-3xl mx-auto">
                They didn't just build a company - they forged a force that
                moves with purpose, precision, and pulse.
              </p>
              <p className="text-2xl md:text-3xl text-slate-700 mb-8">
                Together, they're the equation that shouldn't work - but somehow
                does.
              </p>
            </FadeInSection>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mt-20">
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl font-bold text-primary mb-6 text-center">
                One sparks the fire
              </p>
              <FounderCard
                name="Ryan"
                title="The Trailblazer"
                quirk="Treats every brainstorming session like a hunt - snacks optional, bold ideas mandatory."
                perk="Can turn midnight chaos into sunrise strategy without breaking stride."
                powerMove="Moves in silence but leaves tracks that redefine direction."
                takeaway="The fire that leads the run."
                delay={0.1}
                image="https://api.dicebear.com/7.x/avataaars/svg?seed=Ryani&gender=male"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: -1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl font-bold text-primary mb-6 text-center">
                One commands the storm
              </p>
              <FounderCard
                name="SK"
                title="The Tempest"
                quirk="Turns crisis meetings into comedy hours - yet somehow doubles productivity."
                perk="Executes so sharply, the wilderness adjusts its pace."
                powerMove="Commands pace, purpose, and pulse - and still finds time to make it all look effortless."
                takeaway="The storm that drives the chase."
                delay={0.2}
                image="https://api.dicebear.com/7.x/avataaars/svg?seed=SK&gender=female"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-2xl font-bold text-primary mb-6 text-center">
                One anchors the calm
              </p>
              <FounderCard
                name="Seth"
                title="The Silent Fang"
                quirk="Replies three hours late but fixes what no one knew was broken - and probably the Wi-Fi too."
                perk="Finds peace in code, poetry in precision, and stillness in systems."
                powerMove="Operates at 1% volume, 100% impact - proof that calm isn't quiet, it's control."
                takeaway="The calm that steadies the hunt."
                delay={0.3}
                image="https://api.dicebear.com/7.x/avataaars/svg?seed=Seth&gender=male"
              />
            </motion.div>
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[10vh] w-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #FAF9F6 10%, transparent 100%)",
          }}
        ></div>
      </section>

      {/* Pack Philosophy */}
      <section className="relative px-6 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <FadeInSection>
            <motion.div className="p-12">
              <p className="text-2xl md:text-3xl text-slate-700 leading-relaxed italic">
                JAC Magnus isn't powered by luck or noise - it's built on
                instinct, discipline, and the belief that impossible isn't made
                for us.
              </p>
            </motion.div>
          </FadeInSection>
        </div>
      </section>

      {/* The Hunt - Strategy (Redesigned: Gold-themed cards on rich cream) */}
      <section id="hunt" className="relative py-20 px-6 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <CinematicText className="text-7xl md:text-9xl font-black mb-6 text-slate-900">
              The Hunt
            </CinematicText>

            <FadeInSection delay={0.3}>
              <p className="text-3xl md:text-4xl text-amber-800 font-bold mb-12">
                Eyes on the horizon, focus on the target.
              </p>
              <p className="text-2xl md:text-3xl text-slate-700">
                We track opportunity with precision, adapt to the terrain, and
                strike only when the outcome matters.
              </p>
            </FadeInSection>
          </div>

          <FadeInSection delay={0.5}>
            <div className="frosted-glass rounded-2xl p-12 md:p-16 shadow-xl border border-white/20">
              {/* <h3 className="text-5xl md:text-6xl font-bold text-gradient-gold mb-10 text-center">
                Strategy
              </h3> */}
              <p className="text-3xl md:text-4xl text-primary text-center mb-10 font-semibold">
                Strategy | Consulting | Product Management | Hotel Management |
                Marketing
              </p>
              <div className="space-y-8 text-2xl md:text-3xl text-slate-700">
                <p>
                  We work across industries that define the pace of progress.
                  From consulting that builds clarity, to strategies that spark
                  scale - from hospitality systems that evolve with people, to
                  marketing that turns brands into belief.
                </p>
                <p>
                  Every vertical we enter is approached with the same mindset -
                  clarity, creativity, and commitment.
                </p>
                <p className="text-primary font-semibold text-center text-3xl md:text-4xl">
                  We don't diversify to do more. We diversify to do better.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[10vh] w-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #FAF9F6 10%, transparent 100%)",
          }}
        ></div>
      </section>

      {/* The Den (Redesigned: Gold timeline on white/light cream) */}
      <section id="den" className="relative py-10 px-6 bg-[#FAF9F6]">
        <div className="relative max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <CinematicText className="text-7xl md:text-9xl font-black mb-6 text-slate-900">
              The Den
            </CinematicText>
            <p className="text-3xl md:text-4xl text-amber-800 font-bold">
              Strength built on knowledge, guided by instinct.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-amber-400 to-yellow-600 h-full rounded-full shadow-glow"></div>
            {[
              {
                side: "left",
                title: "Alumni Power",
                desc: "Powered by alumni from ISB and IIIT Hyderabad - institutions known for transforming intelligence into impact.",
                delay: 0.2,
              },
              {
                side: "right",
                title: "Collaboration Hub",
                desc: "Here, intellect becomes our compass and collaboration, our hunt. It's where sharp minds gather, plans take shape, and every pursuit begins with purpose.",
                delay: 0.4,
              },
              {
                side: "left",
                title: "Future Builders",
                desc: "We don't just understand the future - we're building it, one product at a time.",
                delay: 0.6,
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: item.side === "left" ? -100 : 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: item.delay }}
                className={`relative flex items-center mb-32 ${
                  item.side === "left" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-xl bg-[#F3EAD3] rounded-3xl p-10 shadow-2xl border border-amber-200 w-full md:w-1/2 ${
                    item.side === "left" ? "mr-auto" : "ml-auto"
                  }`}
                >
                  <h4 className="text-3xl font-bold text-gradient-gold mb-4">
                    {item.title}
                  </h4>
                  <p className="text-xl text-amber-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[10vh] w-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #F3EAD3 10%, transparent 100%)",
          }}
        ></div>
      </section>

      {/* Our Territory - Products (Redesigned: Gold cards on rich cream) */}
      <section id="territory" className="relative py-10 px-6 bg-[#F3EAD3]">
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
              Where instinct turns into innovation. Our creations are the proof
              of our hunt — built from instinct, sharpened by intellect, and
              driven by purpose.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-16">
            {[
              {
                title: "Staffari",
                subtitle: "The Alpha Platform of Hospitality.",
                desc: "Born from 'Staff' + 'Safari,' Staffari reimagines the future of hospitality. It's not just a staffing platform - it's a full-scale consulting and management ecosystem that transforms how hotels hire, operate, and grow. By integrating workforce intelligence, operational clarity, and strategic consulting, Staffari helps the industry move smarter and faster. Because in the hospitality world, true excellence isn't managed - it's mastered.",
                icon: <Building2 className="w-16 h-16" />,
                features: [
                  "Workforce Intelligence",
                  "Operational Clarity",
                  "Strategic Consulting",
                ],
              },
              {
                title: "Shelfie",
                subtitle: "Your Shelf. Your Story.",
                desc: "Shelfie was born from the creative core of the den - inspired by those who live, write, and dream in stories. It's not just a space to read or write - it's where imagination moves, evolves, and keeps you chasing the next line. A haven for readers, writers, and thinkers, built for those who crave rhythm in words and magic in meaning. Shelfie isn't just for stories - it's an experience that draws you in, word by word, frame by frame.",
                icon: <BookOpen className="w-16 h-16" />,
                features: [
                  "Imagination Hub",
                  "Reader's Haven",
                  "Writer's Rhythm",
                ],
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, rotateY: -180 }}
                whileInView={{ opacity: 1, rotateY: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ rotateY: 10, scale: 1.03 }}
                className="relative preserve-3d perspective-1000"
              >
                <div className="relative bg-white rounded-3xl p-10 h-full shadow-2xl border border-amber-200 transform-gpu transition-all duration-500 hover:shadow-amber-500/50">
                  <div className="text-gradient-gold mb-6">{product.icon}</div>
                  <h3 className="text-5xl font-bold text-amber-900 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-2xl text-amber-700 mb-6">
                    {product.subtitle}
                  </p>
                  <p className="text-lg text-amber-800 mb-8">{product.desc}</p>
                  <ul className="space-y-4">
                    {product.features.map((feat) => (
                      <motion.li
                        key={feat}
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        className="flex items-center text-amber-700"
                      >
                        <ChevronRight className="w-5 h-5 mr-2 text-yellow-500" />
                        {feat}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
              // Removed outer gradient p-1 for solid feel
            ))}
          </div>
        </div>
        <div
          className="absolute bottom-0 left-0 h-[10vh] w-full pointer-events-none"
          style={{
            background:
              "linear-gradient(to top, #FAF9F6 10%, transparent 100%)",
          }}
        ></div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-10 px-6 bg-[#FAF9F6]">
        <div className="max-w-6xl mx-auto py-20">
          <div className="text-center mb-20">
            <CinematicText className="text-7xl md:text-9xl font-black mb-6 text-slate-900">
              The Call of the Wild
            </CinematicText>

            <FadeInSection delay={0.3}>
              <p className="text-2xl md:text-3xl text-amber-800 font-bold mb-12">
                Where echoes become alliances.
              </p>
              <div className="max-w-3xl mx-auto space-y-8 text-2xl md:text-3xl text-slate-700">
                <p>
                  Every idea starts as a signal - a call sent out into the
                  unknown. At JAC Magnus, we run toward those echoes that sound
                  like purpose, creativity, and courage.
                </p>
                <p>
                  If you feel the pull, follow it. Join us on this adventure -
                  to build, create, and conquer new trails together.
                </p>
              </div>
            </FadeInSection>
          </div>

          <motion.div whileHover={{ scale: 1.01 }}>
            <ContactForm />
          </motion.div>
        </div>

        <div
          className="absolute top-90 left-0 h-[20vh] w-full pointer-events-none"
          style={{
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            maskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 60%, transparent 100%)",
            background:
              "linear-gradient(to bottom, white 50%, transparent 100%)",
          }}
        ></div>
      </section>

      {/* Footer */}
      <footer className="relative pb-16 mt-24 px-6 border-slate-200 overflow-hidden">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient-gold mb-4">
            JAC Magnus Pvt. Ltd.
          </h2>
          <p className="text-xl text-primary">
            Built Different. Wired for Impact.
          </p>
          <p className="text-sm text-slate-500 mt-8">
            © {new Date().getFullYear()} JAC Magnus Pvt. Ltd. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
