import { useState, useEffect } from 'react';
import { CinematicCursor } from '@/components/CinematicCursor';
import { HeroScene } from '@/components/HeroScene';
import { CinematicText, FadeInSection } from '@/components/CinematicText';
import { FounderCard } from '@/components/FounderCard';
import { ProductCard } from '@/components/ProductCard';
import { ContactForm } from '@/components/ContactForm';
import { motion } from 'framer-motion';
import { Sparkles, Users, Compass, GraduationCap, Building2, BookOpen } from 'lucide-react';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen">
      <CinematicCursor />
      <HeroScene mousePosition={mousePosition} />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="text-center max-w-5xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
          >
            <h1 className="text-7xl md:text-9xl font-black mb-6 text-gradient-gold">
              JAC Magnus
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 mb-8 uppercase tracking-widest">
              Pvt. Ltd
            </p>
          </motion.div>
          
          <CinematicText 
            className="text-2xl md:text-4xl font-bold text-primary mb-12" 
            delay={0.5}
          >
            Built Different. Wired for Impact.
          </CinematicText>
          
          <FadeInSection delay={1}>
            <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
          </FadeInSection>
        </div>
      </section>

      {/* Introduction */}
      <section className="relative py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <FadeInSection>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
              We live in a world where everyone's building something - yet few know why.
            </p>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
              At JAC Magnus, we build with purpose. Every idea we create, every product we design, and every solution we deliver has meaning behind it.
            </p>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
              We don't chase trends or noise. We focus on what works - refining, rethinking, and rebuilding until it feels right.
            </p>
            <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed mb-6">
              Our strength lies in doing ordinary things differently - with sharper thinking, cleaner execution, and deeper intent.
            </p>
            <p className="text-xl md:text-2xl text-gradient-gold leading-relaxed font-bold">
              And at the heart of it all is one unwavering belief - if it's not different, it's not Magnus.
            </p>
          </FadeInSection>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <CinematicText 
            className="text-5xl md:text-7xl font-black text-center mb-16"
            gradient
          >
            J + A + C = A Legacy In Letters
          </CinematicText>
          
          <FadeInSection delay={0.3}>
            <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                JAC Magnus isn't just a name - it's a story.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                Each letter, J, A, and C, carries the name of the mothers who shaped the founders behind this company. Women whose strength, grace, and resilience became the foundation of everything we do.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
                JAC stands for gratitude - a daily reminder that before innovation comes intention, and before growth comes grounding.
              </p>
              <p className="text-lg md:text-xl text-primary leading-relaxed font-semibold">
                Our name is our origin, our purpose, and our promise to build with heart, lead with integrity, and create with meaning. Because strength isn't loud. It's lasting!
              </p>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* The Pack */}
      <section className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <CinematicText className="text-6xl md:text-8xl font-black mb-8">
              The Pack
            </CinematicText>
            
            <FadeInSection delay={0.3}>
              <p className="text-2xl md:text-3xl text-gradient-gold font-bold mb-6">
                Three founders. One vision.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 mb-6 max-w-3xl mx-auto">
                They didn't just build a company - they forged a force that moves with purpose, precision, and pulse.
              </p>
              <p className="text-lg md:text-xl text-foreground/90 mb-6">
                Together, they're the equation that shouldn't work - but somehow does.
              </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-4 my-12 text-xl font-semibold text-primary">
                <p>One sparks the fire</p>
                <p className="hidden md:block">•</p>
                <p>One commands the storm</p>
                <p className="hidden md:block">•</p>
                <p>One anchors the calm</p>
              </div>
              
              <p className="text-lg md:text-xl text-foreground/90 italic">
                JAC Magnus isn't powered by luck or noise - it's built on instinct, discipline, and the belief that impossible isn't made for us.
              </p>
            </FadeInSection>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <FounderCard
              name="Ryan"
              title="The Trailblazer"
              quirk="Treats every brainstorming session like a hunt - snacks optional, bold ideas mandatory."
              perk="Can turn midnight chaos into sunrise strategy without breaking stride."
              powerMove="Moves in silence but leaves tracks that redefine direction."
              takeaway="The fire that leads the run."
              delay={0.1}
            />
            <FounderCard
              name="SK"
              title="The Tempest"
              quirk="Turns crisis meetings into comedy hours - yet somehow doubles productivity."
              perk="Executes so sharply, the wilderness adjusts its pace."
              powerMove="Commands pace, purpose, and pulse - and still finds time to make it all look effortless."
              takeaway="The storm that drives the chase."
              delay={0.2}
            />
            <FounderCard
              name="Seth"
              title="The Silent Fang"
              quirk="Replies three hours late but fixes what no one knew was broken - and probably the Wi-Fi too."
              perk="Finds peace in code, poetry in precision, and stillness in systems."
              powerMove="Operates at 1% volume, 100% impact - proof that calm isn't quiet, it's control."
              takeaway="The calm that steadies the hunt."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* The Hunt - Strategy */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-accent/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <CinematicText className="text-6xl md:text-8xl font-black mb-8">
              The Hunt
            </CinematicText>
            
            <FadeInSection delay={0.3}>
              <p className="text-xl md:text-2xl text-foreground/90 italic mb-12">
                Eyes on the horizon, focus on the target.
              </p>
              <p className="text-lg md:text-xl text-foreground/80">
                We track opportunity with precision, adapt to the terrain, and strike only when the outcome matters.
              </p>
            </FadeInSection>
          </div>
          
          <FadeInSection delay={0.5}>
            <div className="glass rounded-2xl p-12">
              <h3 className="text-4xl font-bold text-gradient-gold mb-8 text-center">Strategy</h3>
              <p className="text-2xl text-primary text-center mb-8 font-semibold">
                Consulting | Product Management | Hotel Management | Marketing
              </p>
              <div className="space-y-6 text-lg text-foreground/90">
                <p>
                  We work across industries that define the pace of progress. From consulting that builds clarity, to strategies that spark scale - from hospitality systems that evolve with people, to marketing that turns brands into belief.
                </p>
                <p>
                  Every vertical we enter is approached with the same mindset - clarity, creativity, and commitment.
                </p>
                <p className="text-primary font-semibold">
                  We don't diversify to do more. We diversify to do better.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* The Den */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <CinematicText className="text-6xl md:text-8xl font-black text-center mb-16">
            The Den
          </CinematicText>
          
          <FadeInSection delay={0.3}>
            <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl text-gradient-gold font-bold mb-8 text-center">
                Strength built on knowledge, guided by instinct.
              </p>
              <div className="space-y-6 text-lg text-foreground/90">
                <p>
                  Our den is powered by alumni from ISB and IIIT Hyderabad - institutions known for transforming intelligence into impact.
                </p>
                <p>
                  Here, intellect becomes our compass and collaboration, our hunt. It's where sharp minds gather, plans take shape, and every pursuit begins with purpose.
                </p>
                <p className="text-primary font-semibold">
                  We don't just understand the future - we're building it, one product at a time.
                </p>
              </div>
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Our Territory - Products */}
      <section className="relative py-32 px-6 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <CinematicText className="text-6xl md:text-8xl font-black mb-8">
              Our Territory
            </CinematicText>
            
            <FadeInSection delay={0.3}>
              <p className="text-xl md:text-2xl text-foreground/90">
                Where instinct turns into innovation. Our creations are the proof of our hunt — built from instinct, sharpened by intellect, and driven by purpose.
              </p>
            </FadeInSection>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <ProductCard
              title="Staffari"
              subtitle="The Alpha Platform of Hospitality."
              description="Born from 'Staff' + 'Safari,' Staffari reimagines the future of hospitality. It's not just a staffing platform - it's a full-scale consulting and management ecosystem that transforms how hotels hire, operate, and grow. By integrating workforce intelligence, operational clarity, and strategic consulting, Staffari helps the industry move smarter and faster. Because in the hospitality world, true excellence isn't managed - it's mastered."
              icon={<Building2 size={48} strokeWidth={1.5} />}
              delay={0.1}
            />
            <ProductCard
              title="Shelfie"
              subtitle="Your Shelf. Your Story."
              description="Shelfie was born from the creative core of the den - inspired by those who live, write, and dream in stories. It's not just a space to read or write - it's where imagination moves, evolves, and keeps you chasing the next line. A haven for readers, writers, and thinkers, built for those who crave rhythm in words and magic in meaning. Shelfie isn't just for stories - it's an experience that draws you in, word by word, frame by frame."
              icon={<BookOpen size={48} strokeWidth={1.5} />}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <CinematicText className="text-6xl md:text-8xl font-black mb-8">
              The Call of the Wild
            </CinematicText>
            
            <FadeInSection delay={0.3}>
              <p className="text-2xl md:text-3xl text-gradient-gold font-bold mb-8">
                Where echoes become alliances.
              </p>
              <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-foreground/90">
                <p>
                  Every idea starts as a signal - a call sent out into the unknown. At JAC Magnus, we run toward those echoes that sound like purpose, creativity, and courage.
                </p>
                <p>
                  If you feel the pull, follow it. Join us on this adventure - to build, create, and conquer new trails together.
                </p>
              </div>
            </FadeInSection>
          </div>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-6 border-t border-border/30">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient-gold mb-4">JAC Magnus Pvt. Ltd.</h2>
          <p className="text-xl text-primary">Built Different. Wired for Impact.</p>
          <p className="text-sm text-muted-foreground mt-8">
            © {new Date().getFullYear()} JAC Magnus Pvt. Ltd. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
