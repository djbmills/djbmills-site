import { motion } from 'framer-motion';
import CorporateHero from '../components/CorporateHero';
import CorporateEventGallery from '../components/CorporateEventGallery';
import InquiryFooter from '../components/InquiryFooter';
import SEOHeading from '../components/SEOHeading';

const selectedEvents = [
  {
    title: "Sammontana Gelati All’Italiana U.S. Launch",
    meta: "Brand Launch | Eataly Rooftop, New York City",
    body: "For the U.S. launch of Sammontana Gelati All’Italiana at Eataly Rooftop, I curated the soundtrack for a crowd with a distinctly European feel, including many Italian guests. I was brought in through a referral from Kering Eyewear, a past client I had worked with across multiple events, which made the booking feel especially aligned from the start. The music direction was designed to reflect the brand’s roots and the mood of the evening, beginning with a relaxed, stylish energy as guests arrived and settled into the space, then gradually building into a more upbeat European house direction as the night progressed. The result felt culturally in tune, brand right, and effortless in its progression.",
  },
  {
    title: "Gagosian Gallery x Avedon 100",
    meta: "Cocktail Event | Boom Boom Room, New York City",
    body: "For Avedon 100 with Gagosian Gallery at Boom Boom Room, I curated the soundtrack for a cocktail event that called for taste, restraint, and just the right amount of movement. I was recommended to the Director of Events at Gagosian by The Standard’s event sales team, which made the booking feel especially aligned from the start. With a guest list spanning fashion, art, and culture, including names like Anna Wintour, Gigi Hadid, and Naomi Campbell, the goal was to create an atmosphere that felt elevated and alive without ever pulling focus from the room itself. The soundtrack supported conversation, complemented the setting, and carried the evening with a polished sense of momentum from start to finish. Later featured in Vanity Fair and Vogue, with both publications noting B.Mills among the DJ behind the evening.",
  },
  {
    title: "School of American Ballet Ball",
    meta: "Dinner + Dancing | Lincoln Center, New York City",
    body: "Trusted for two consecutive years to soundtrack the SAB Ball, I shaped the full musical arc of the evening for approximately 450 guests, including high-net-worth donors and dance enthusiasts. I was referred by the New York City Ballet Young Patrons Circle event team, following 13 years of DJing their Young Patrons Circle post-performance parties in The Promenade of the David H. Koch Theater. The night began with a smooth, soulful dinner soundtrack that brought warmth and movement into the room while keeping the tone elegant. From there, the energy built naturally into a more celebratory dance floor later in the evening, allowing the event to shift without losing its sense of polish.",
  },
];

const trustedFor = [
  "Corporate events and holiday parties",
  "Private celebrations and milestone events",
  "Wedding after-parties and late-night transitions",
];

export default function CorporateEvents() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHeading
        title="Luxury Corporate Event DJ NYC | B.MILLS | Brand Activations & Galas"
        description="B.MILLS provides curated sonic identities for luxury corporate galas, brand activations, and executive dinners in NYC. Specialized in minimalist hosting and professional event flow. Fully insured (COI)."
        keywords="luxury corporate DJ NYC, brand activation DJ New York, corporate gala DJ, luxury event sound design, B.MILLS corporate, fashion week DJ NYC, COI insured DJ NYC"
        url="https://djbmills.com/corporate-events"
      />

      <CorporateHero />

      {/* Section 01: The Philosophy of Curation */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground"
            >
              01
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-border origin-left"
            />
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed"
            >
              Corporate environments require precise sonic curation. The music should define the brand identity without overwhelming the space, providing professional vocal direction only when necessary.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="font-body text-sm text-muted-foreground mt-8 max-w-xl leading-relaxed"
          >
            Maintaining a sophisticated balance between background atmosphere and high-energy transitions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.6 }}
            className="mt-14"
          >
            <img
              src="/images/bmills-corporate-2.png"
              alt="B.MILLS performing at Goldman Sachs Robinhood event New York City - Corporate Sound Design"
              className="w-full h-auto object-cover"
            />
            <p className="font-body text-xs text-muted-foreground mt-4 tracking-widest uppercase">
              GOLDMAN SACHS / ROBINHOOD EVENT, NEW YORK CITY
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 02: Brand Alignment */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground"
            >
              02
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-border origin-left"
            />
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground"
            >
              Brand Alignment
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-foreground mb-10 leading-tight"
            >
              Sonic Identity
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl"
          >
            Every brand activation has a unique musical DNA. Whether for a luxury product launch or a corporate gala, I curate a bespoke soundscape that reflects the brand’s aesthetic. My approach is rooted in restraint, ensuring professional flow and clear, understated announcements for structured event timelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-14"
          >
            <img
              src="/images/bmills-corporate-3.png"
              alt="B.MILLS managing audio for Hall des Lumières Grand Opening - NYC Brand Event"
              className="w-full h-auto object-cover"
            />
            <p className="font-body text-xs text-muted-foreground mt-4 tracking-widest uppercase">
              GRAND OPENING — HALL DES LUMIÈRES, NEW YORK CITY
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 03: Selected Event Experience */}
      <section className="pt-16 pb-20 md:pt-24 md:pb-24 px-6 md:px-12 border-b border-border bg-background">
        <div className="max-w-5xl mx-auto">
    <div className="flex items-center gap-4 mb-8">
  <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground shrink-0">
    03
  </span>

  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: '-10%' }}
    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
    className="flex-1 h-px bg-border origin-left"
  />

  <motion.span
    initial={{ opacity: 0, x: 10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: '-10%' }}
    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
    className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground shrink-0"
  >
    Featured Work
  </motion.span>
</div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-foreground mb-10 leading-tight"
            >
              Selected Event Experience
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="font-body text-base text-muted-foreground leading-relaxed max-w-3xl"
          >
            A look at the rooms, audiences, and events that reflect the kind of work B.MILLS is trusted to do.
          </motion.p>

          <div className="mt-16 space-y-16">
            {selectedEvents.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{
                  duration: 0.9,
                  ease: [0.25, 0.1, 0.25, 1],
                  delay: 0.15 + index * 0.1,
                }}
                className="border-t border-border pt-10"
              >
                <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground leading-tight">
                  {event.title}
                </h3>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mt-4">
                  {event.meta}
                </p>
                <p className="font-body text-base text-muted-foreground leading-relaxed mt-6 max-w-4xl">
                  {event.body}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="mt-20 pt-10 border-t border-border"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Also Trusted For
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {trustedFor.map((item) => (
                <p
                  key={item}
                  className="font-body text-sm text-muted-foreground leading-relaxed"
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 04: Experience / Logistics */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border" style={{ backgroundColor: '#0d0d0d' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="font-body text-xs tracking-[0.4em] uppercase text-white/30"
            >
              04
            </motion.span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-white/10 origin-left"
            />
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-white/30"
            >
              Logistics & Trust
            </motion.span>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-white mb-10 leading-tight"
            >
              Professional Standards
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="font-body text-base text-white/50 leading-relaxed max-w-2xl"
          >
            Operating within the high-end NYC event industry requires more than just music. I maintain full liability insurance (COI) for all major venues and work seamlessly with production teams to manage complex event flows. From executive dinners at the Boom Boom Room to large-scale galas, I provide a reliable, understated presence that respects the event&apos;s objectives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="pt-12 mt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/images/bmills-corporate-4.jpg"
                alt="B.MILLS Luxury Corporate Event DJ NYC - Boom Boom Room"
                className="w-full h-full object-cover"
              />
              <img
                src="/images/bmills-corporate-5.jpg"
                alt="B.MILLS Curated Music Direction for High-End Galas"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="font-body text-xs text-white/30 mt-4 tracking-widest uppercase">
              Corporate Cocktail Reception — Boom Boom Room, New York City
            </p>
          </motion.div>
        </div>
      </section>

      <CorporateEventGallery />

      <InquiryFooter
        headline="Let's shape your event."
        footerText={`Fully insured and available for luxury brand activations, corporate galas, and private functions across NYC, the Hamptons, and beyond.`}
      />
    </div>
  );
}
