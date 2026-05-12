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
    title: "School of American Ballet Ball",
    meta: "Dinner + Dancing | Lincoln Center, New York City",
    body: "Trusted for two consecutive years to soundtrack the SAB Ball, I shaped the full musical arc of the evening for approximately 450 guests, including high net worth donors and dance enthusiasts. I was referred by the New York City Ballet Young Patrons Circle event team, following 13 years of DJing their Young Patrons Circle post performance parties in The Promenade of the David H. Koch Theater. The night began with a smooth, soulful dinner soundtrack that brought warmth and movement into the room while keeping the tone elegant. From there, the energy built naturally into a more celebratory dance floor later in the evening, allowing the event to shift without losing its sense of refinement.",
  },
];

const trustedFor = [
  "Corporate events and holiday parties",
  "Private celebrations and milestone events",
  "Wedding after parties and late night transitions",
];

export default function CorporateEvents() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHeading
        title="Premier Corporate Event DJ NYC | B.MILLS | Brand Activations & Galas"
        description="B.MILLS provides curated music direction for luxury corporate galas, brand activations, cocktail receptions, and executive events in New York City. Fully insured and trusted for elevated event environments."
        keywords="premier corporate DJ NYC, brand activation DJ New York, corporate gala DJ, luxury event DJ NYC, brand event DJ, B.MILLS corporate events, fashion event DJ NYC, COI insured DJ NYC"
        url="https://djbmills.com/corporate-events"
      />

      <CorporateHero />

{/* Section 01: The Philosophy */}
<section className="py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
  <div className="max-w-4xl mx-auto">
    <div className="flex items-center gap-4 mb-10">
      <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground shrink-0">
        01
      </span>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-10%' }}
        transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        className="flex-1 h-px bg-border origin-left min-w-[40px]"
      />

      <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground shrink-0 whitespace-nowrap">
        The Philosophy
      </span>
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
  className="mt-12"
>
  <div className="max-w-4xl mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
        <img
          src="/images/bmills-corporate-2.png"
          alt="B.MILLS performing at Goldman Sachs Robinhood event New York City - Corporate Sound Design"
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
        <img
          src="/images/corporate/goldman-robinhood/bmills-dj-booth-robinhood-goldman.png"
          alt="B.MILLS DJ setup at Goldman Sachs Robinhood event in New York City"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
        <img
          src="/images/corporate/goldman-robinhood/metropolis-event-interior.png"
          alt="Metropolis by Marcus Samuelsson event interior for Goldman Sachs Robinhood event"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>

      <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
        <img
          src="/images/corporate/goldman-robinhood/goldman-robinhood-signage.png"
          alt="Goldman Sachs and Robinhood event signage in New York City"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
      </div>
    </div>

    <p className="font-body text-[10px] md:text-xs text-muted-foreground mt-4 tracking-[0.25em] uppercase text-center">
      GOLDMAN SACHS / ROBINHOOD EVENT, NEW YORK CITY
    </p>
  </div>
</motion.div>
  </div>
</section>
      
      {/* Section 02: Brand Alignment */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
  <div className="max-w-4xl mx-auto">
         <div className="flex items-center gap-4 mb-10">
  <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground shrink-0">
    02
  </span>

  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: '-10%' }}
    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
    className="flex-1 h-px bg-border origin-left min-w-[40px]"
  />

  <span className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground shrink-0 whitespace-nowrap">
    Brand Alignment
  </span>
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
              GRAND OPENING | HALL DES LUMIÈRES, NEW YORK CITY
            </p>
          </motion.div>
        </div>
      </section>

     {/* Section 03: Selected Event Experience */}
<section className="py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
  <div className="max-w-5xl mx-auto">
    <div className="flex items-center gap-4 mb-10 overflow-hidden">
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

{/* Gagosian Visual Case Study */}
<motion.div
  initial={{ opacity: 0, y: 34 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-10%' }}
  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
  className="mt-16 border-t border-border pt-10"
>
  <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-start">
    <div>
      <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
        Cocktail Event + Afterparty / Art / Fashion / Culture
      </p>

      <h3 className="font-heading text-3xl md:text-5xl font-light text-foreground leading-tight">
        Gagosian Gallery x Avedon 100
      </h3>

      <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mt-6">
        Boom Boom Room + Le Bain | New York City
      </p>
    </div>

    <div>
      <p className="font-body text-base text-muted-foreground leading-relaxed">
        For Avedon 100 with Gagosian Gallery, B.MILLS curated the soundtrack for an evening that began at Boom Boom Room and later moved into Le Bain, with the full 18th floor of The Standard reserved for the event.
      </p>

      <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
        With a guest list spanning fashion, art, and culture, including names like Anna Wintour, Gigi Hadid, and Naomi Campbell, the music direction called for taste, restraint, and just the right amount of movement. The soundtrack supported conversation, complemented the room, and carried the night with an intentional sense of momentum from cocktail hour through the closing stretch.
      </p>

      <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
        Later featured in Vanity Fair and Vogue, the evening was noted by both publications, with B.MILLS named among the DJs behind the night.
      </p>
    </div>
  </div>

  <div className="mt-12">
    <img
      src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-boom-boom-room-crowd.jpg"
      alt="Gagosian Gallery Avedon 100 event crowd at Boom Boom Room in New York City"
      className="w-full h-auto object-cover"
    />
    <p className="font-body text-xs text-muted-foreground mt-4 tracking-widest uppercase">
      GAGOSIAN GALLERY X AVEDON 100 | BOOM BOOM ROOM, NEW YORK CITY
    </p>
  </div>

 <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-14">
  <img
    src="/images/corporate/gagosian-avedon-100/bmills-dj-gagosian-avedon-100-boom-boom-room.jpg"
    alt="B.MILLS DJing the Gagosian Gallery Avedon 100 event at Boom Boom Room"
    className="w-full h-auto object-cover"
  />

  <img
    src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-boom-boom-room-bar-crowd.jpg"
    alt="Black and white bar crowd scene from Gagosian Gallery Avedon 100 at Boom Boom Room"
    className="w-full h-auto object-cover"
  />
</div>

<div className="mt-14 pt-10 border-t border-border">
  <img
    src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-le-bain-after-party.jpg"
    alt="Le Bain afterparty lighting and disco balls for Gagosian Gallery Avedon 100"
    className="w-full h-auto object-cover"
  />
</div>
</motion.div>

{/* 1800 Tequila Visual Case Study */}
<motion.div
  initial={{ opacity: 0, y: 34 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: '-10%' }}
  transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
  className="mt-16 border-t border-border pt-10"
>
  <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
    <div className="order-2 lg:order-1">
      <img
        src="/images/corporate/1800-tequila/1800-tequila-pioneer-works-crowd.png"
        alt="1800 Tequila x Essential Artists event at Pioneer Works in Red Hook Brooklyn"
        className="w-full h-auto object-cover"
      />
      <p className="font-body text-xs text-muted-foreground mt-4 tracking-widest uppercase">
        1800 TEQUILA X ESSENTIAL ARTISTS | PIONEER WORKS, BROOKLYN
      </p>
    </div>

    <div className="order-1 lg:order-2">
      <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
        Brand Reception / Limited Edition Launch / Art World Event
      </p>

      <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground leading-tight">
        1800 Tequila x Essential Artists
      </h3>

      <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mt-6">
        Pioneer Works | Red Hook, Brooklyn
      </p>

      <p className="font-body text-base text-muted-foreground leading-relaxed mt-8">
        For a limited edition 1800 Tequila bottle release featuring artist Dustin Yellin, B.MILLS provided the soundtrack for an intimate brand reception at Pioneer Works, the Brooklyn cultural space founded by Yellin.
      </p>

      <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
        The music was curated to complement the room: artful, culturally tuned, and intentional, supporting the brand experience while keeping the energy exactly where it needed to be.
      </p>
    </div>
  </div>

  <div className="grid md:grid-cols-3 gap-4 mt-8">
    <img
      src="/images/corporate/1800-tequila/bmills-1800-tequila-dj-pioneer-works.png"
      alt="B.MILLS DJing the 1800 Tequila Essential Artists reception at Pioneer Works"
      className="w-full h-full object-cover aspect-[2/3]"
    />
    <img
      src="/images/corporate/1800-tequila/1800-tequila-essential-artists-bottles.png"
      alt="1800 Tequila Essential Artists limited edition bottles by Dustin Yellin"
      className="w-full h-full object-cover aspect-[2/3]"
    />
    <img
      src="/images/corporate/1800-tequila/dustin-yellin-pioneer-works-sculpture.png"
      alt="Dustin Yellin artwork displayed at Pioneer Works for the 1800 Tequila event"
      className="w-full h-full object-cover aspect-[2/3]"
    />
  </div>
</motion.div>

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
          <div className="flex items-center gap-4 mb-10">
  <span className="font-body text-xs tracking-[0.4em] uppercase text-white/30 shrink-0">
    04
  </span>

  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    viewport={{ once: true, margin: '-10%' }}
    transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
    className="flex-1 h-px bg-white/10 origin-left min-w-[40px]"
  />

  <span className="font-body text-xs tracking-[0.3em] uppercase text-white/30 shrink-0 whitespace-nowrap">
    Logistics & Trust
  </span>
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
At the highest level, the music is only part of it. B.MILLS is fully insured and experienced in working alongside venue and production teams, bringing a calm, understated presence to executive dinners, brand events, and large scale galas where timing, tone, and room flow all matter.          </motion.p>

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
              Corporate Cocktail Reception | Boom Boom Room, New York City
            </p>
          </motion.div>
        </div>
      </section>

          <CorporateEventGallery />

<InquiryFooter
  headline="Define the sound." // Sharper, more active headline
  body="High-stakes events require a precise sonic identity. Share your event details and let's discuss the direction."
  footerText={
    <>
      <span className="hidden md:inline">
        Fully COI insured and available for luxury brand activations, corporate galas,
        <br />
        and executive functions across NYC, the Hamptons, and worldwide.
      </span>

      <span className="md:hidden">
        Fully COI insured and available for luxury brand activations,
        <br />
        corporate galas, and executive functions
        <br />
        across NYC, the Hamptons, and worldwide.
      </span>
    </>
  }
/>
    </div>
  );
}
