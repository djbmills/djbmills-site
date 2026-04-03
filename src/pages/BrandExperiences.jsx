import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import BrandExperienceGallery from '../components/BrandExperienceGallery';
import InquiryFooter from '../components/InquiryFooter';
import SEOHeading from '../components/SEOHeading';

export default function BrandExperiences() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f3eee2' }}>
      <SEOHeading
        title="DJ for Brand Experiences and Creative Events | B.MILLS"
        description="B.MILLS provides music direction for brand activations, product launches, fashion events, and premier creative experiences in New York City."
        keywords="brand experience DJ NYC, fashion event DJ New York, creative event DJ, brand activation DJ New York City"
        url="https://djbmills.com/brand-experiences"
      />
      <PageHero 
        label="Brand Experiences"
        headline="DJ for Brand Experiences and Creative Events"
        subheadline="Music that complements the visual and creative direction of the event."
        image="https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/8db4c9dee_BMills_promo2016B.jpg"
        imageAlt="B.MILLS — DJ for brand experiences and creative events"
      />

      {/* Intro */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border" style={{ backgroundColor: '#f3eee2' }}>
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
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed"
          >
            Brand events are shaped by concept, design, and audience perception. The music plays a supporting role in defining how the space feels, contributing to the overall atmosphere without competing with the visual experience.
          </motion.p>
        </div>
      </section>

      {/* Approach */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border" style={{ backgroundColor: '#f3eee2' }}>
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
              className="font-heading text-5xl md:text-6xl font-light text-foreground mb-10 leading-tight">Approach</motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl"
          >
            Each event is approached within the creative framework provided. The music is selected to align with the tone of the environment, the pacing of the event, and the audience present. Subtle shifts in energy are introduced when appropriate, while maintaining consistency throughout.
          </motion.p>
        </div>
      </section>

      {/* Experience Includes */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border" style={{ backgroundColor: '#f3eee2' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">03</motion.span>
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
              className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Environments</motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-foreground mb-10 leading-tight">Typical Environments</motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="space-y-6"
          >
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li className="flex gap-3"><span className="text-foreground">•</span><span>Fashion and luxury brand events</span></li>
              <li className="flex gap-3"><span className="text-foreground">•</span><span>Product launches and activations</span></li>
              <li className="flex gap-3"><span className="text-foreground">•</span><span>Gallery openings and cultural events</span></li>
              <li className="flex gap-3"><span className="text-foreground">•</span><span>Private brand dinners and VIP experiences</span></li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border" style={{ backgroundColor: '#f3eee2' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">04</motion.span>
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
              className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Positioning</motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-foreground mb-10 leading-tight">Positioning</motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl"
          >
            The focus is on supporting environments where detail and perception matter. The music is curated to enhance the space, complement the audience, and contribute to a cohesive experience.
          </motion.p>
        </div>
      </section>

      {/* Sound Direction */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border" style={{ backgroundColor: '#f3eee2' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">05</motion.span>
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
              className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Sound Direction</motion.span>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-foreground mb-10 leading-tight">Sound Direction</motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl"
          >
            A selection of mixes that reflect how different brand environments are approached, from more restrained and atmospheric settings to more expressive and fashion oriented moments.
          </motion.p>
        </div>
      </section>

      <BrandExperienceGallery />
      <InquiryFooter
        headline={"Let's shape\nthe experience."}
        body="Share a few details about your event and we can build a sound direction that fits the brand, the space, and the audience."
      />
    </div>
  );
}