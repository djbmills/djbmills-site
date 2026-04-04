import { motion } from 'framer-motion';
import CorporateHero from '../components/CorporateHero';
import CorporateEventGallery from '../components/CorporateEventGallery';
import InquiryFooter from '../components/InquiryFooter';
import SEOHeading from '../components/SEOHeading';

export default function CorporateEvents() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHeading
        title="Premier Corporate Event DJ New York City | B.MILLS"
        description="B.MILLS provides professional music direction for premier corporate events, executive dinners, galas, and client functions in New York City and beyond."
        keywords="corporate event DJ NYC, premier corporate DJ New York, executive event DJ, corporate gala DJ New York City"
        url="https://djbmills.com/corporate-events" />
      
      <CorporateHero />

      {/* Intro */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10 overflow-hidden">
              <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">01</motion.span>
              <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-border origin-left" />
            </div>
            <div className="overflow-hidden">
              <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed">
                Corporate events require a high level of awareness and control. The music should support the room without drawing attention away from the event itself, while still creating energy at the right moments.
              </motion.p>
            </div>
            <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="font-body text-sm text-muted-foreground mt-8 max-w-xl leading-relaxed">
              The focus is on maintaining that balance from beginning to end.
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
            className="mt-14">
              <img
              src="/images/bmills-corporate-2.png"
              alt="B.MILLS performing at Goldman Sachs Robinhood event New York City"
              className="w-full h-auto object-cover" />
            
              <p className="font-body text-xs text-muted-foreground mt-4 tracking-widest uppercase">GOLDMAN SACHS / ROBINHOOD EVENT, NEW YORK CITY</p>
            </motion.div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10 overflow-hidden">
              <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">02</motion.span>
              <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-border origin-left" />
              <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Approach</motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-foreground mb-10 leading-tight">
                Reading the Room
              </motion.h2>
            </div>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
              The role of music in a corporate setting changes throughout the event. Early portions often call for restraint and clarity, while later moments allow for a gradual increase in energy. The music is adjusted in real time based on the room, the schedule, and the audience, ensuring it remains aligned with what is happening.
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-14">
              <img
              src="/images/bmills-corporate-3.png"
              alt="B.MILLS overseeing the grand opening of Hall des Lumières New York City"
              className="w-full h-auto object-cover" />
            
              <p className="font-body text-xs text-muted-foreground mt-4 tracking-widest uppercase">Grand Opening — Hall des Lumières, New York City</p>
            </motion.div>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10 overflow-hidden">
              <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-white/30">03</motion.span>
              <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-white/10 origin-left" />
              <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-white/30">Experience</motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-white mb-10 leading-tight">
                Event Flow
              </motion.h2>
            </div>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="font-body text-base text-white/50 leading-relaxed max-w-2xl">
              My background spans formal galas, internal company events, and client facing functions across a range of industries and settings. Each environment carries its own expectations, and understanding how to move within those is key. What works for a cocktail hour is different from a seated dinner, and shifts again as the night progresses. Knowing how to manage that flow is what keeps everything moving in the right direction.
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="pt-12 mt-12 border-t border-white/10">
              <div className="grid grid-cols-2 gap-4">
                <img
                src="/images/bmills-corporate-4.jpg"
                alt="B.MILLS performing at corporate cocktail reception at Boom Boom Room New York City"
                className="w-full h-full object-cover" />
              
                <img
                src="/images/bmills-corporate-5.jpg"
                alt="B.MILLS performing at Boom Boom Room New York City corporate event"
                className="w-full h-full object-cover" />
              
              </div>
              <p className="font-body text-xs text-white/30 mt-4 tracking-widest uppercase">Corporate Cocktail Reception — Boom Boom Room, New York City</p>
            </motion.div>
        </div>
      </section>

      {/* Sound Direction */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-10 overflow-hidden">
              <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-white/30">04</motion.span>
              <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-white/10 origin-left" />
              <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-white/30">Sound Direction</motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-white mb-10 leading-tight">
                Setting the Tone
              </motion.h2>
            </div>
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="font-body text-base text-white/50 leading-relaxed max-w-2xl">
              Music should feel like a natural extension of the room. It supports the atmosphere, adjusts with the energy, and helps everything flow without ever needing to stand out.
            </motion.p>
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="pt-12 mt-12 border-t border-white/10">
              <img
              src="/images/bmills-corporate-6.png"
              alt="B.MILLS performing at corporate event on Pioneer DJ equipment"
              className="w-full h-auto object-cover" />
            
            </motion.div>
        </div>
      </section>

      <CorporateEventGallery />

      <InquiryFooter headline="Let's shape your event." footerText={`Available for premier corporate events, luxury galas, and client functions across New York City,
the Hamptons, Westchester, New Jersey, and Connecticut.`} />
    </div>);

}
