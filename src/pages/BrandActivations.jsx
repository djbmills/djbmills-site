import { motion } from 'framer-motion';
import CorporateHero from '../components/CorporateHero';
import CorporateEventGallery from '../components/CorporateEventGallery';
import InquiryFooter from '../components/InquiryFooter';
import SEOHeading from '../components/SEOHeading';

const selectedEvents = [
  {
    title: "Sammontana Gelati All’Italiana U.S. Launch",
    meta: "Brand Launch | Eataly Rooftop, New York City",
    body: "For the U.S. launch of Sammontana Gelati All’Italiana at Eataly Rooftop, B.MILLS curated the soundtrack for a crowd with a distinctly European feel, including many Italian guests. B.MILLS was brought in through a referral from Kering Eyewear, a past client he had worked with across multiple events, which made the booking feel especially aligned from the start. The music direction was designed to reflect the brand’s roots and the mood of the evening, beginning with a relaxed, stylish energy as guests arrived and settled into the space, then gradually building into a more upbeat European house direction as the night progressed. The result felt culturally in tune, brand right, and effortless in its progression.",
  },
  {
    title: "School of American Ballet Ball",
    meta: "Dinner + Dancing | Lincoln Center, New York City",
    body: "Trusted for two consecutive years to soundtrack the SAB Ball, B.MILLS shaped the full musical arc of the evening for approximately 450 guests, including high net worth donors and dance enthusiasts. B.MILLS was referred by the New York City Ballet Young Patrons Circle event team, following 13 years of DJing their Young Patrons Circle post performance parties in The Promenade of the David H. Koch Theater. The night began with a smooth, soulful dinner soundtrack that brought warmth and movement into the room while keeping the tone elegant. From there, the energy built naturally into a more celebratory dance floor later in the evening, allowing the event to shift without losing its sense of refinement.",
  },
];

const trustedFor = [
  "Luxury brand events and product launches",
  "Tech, finance, fashion, and private client rooms",
  "Afterparties and high-level celebrations",
];

export default function BrandActivations() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] selection:bg-neutral-800 selection:text-white">
      <SEOHeading
        title="Luxury Brand Activation DJ & Sonic Director | NYC | B.MILLS"
        description="B.MILLS creates precise music direction and curated DJ sets for luxury brand activations, experiential product launches, runway collections, and private PR receptions in New York and beyond."
        keywords="luxury brand event DJ NYC, brand activation DJ NYC, fashion week afterparty DJ, product launch music curation manhattan, experiential marketing sound design nyc, luxury event music director, B.MILLS brand events"
        url="https://djbmills.com/brand-activations"
      />

      {/* Hero Section: Integrated Brand Infrastructure */}
      <CorporateHero />

      {/* Section: Professional Brand Marquee */}
      <section className="relative pt-20 pb-16 border-b border-neutral-900 bg-[#000000] overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 relative z-10">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-neutral-500 text-center">
            Trusted By
          </p>
        </div>

        <div className="relative py-8 overflow-hidden">
          <div className="marquee-track">
            {[1, 2].map((i) => (
              <div key={i} className="marquee-row">
                {[
                  'oracle',
                  'celine',
                  'equinox',
                  'polymarket',
                  'goldmansachs',
                  'disney',
                  'lvmh',
                  'gucci',
                  'jpmorgan',
                  'nbcuniversal',
                  'mlb',
                  'fanatics',
                  'tumi',
                  'citi',
                  'google'
                ].map((brand) => (
                  <div key={`${brand}-${i}`} className="logo-slot">
                    <img
                      src={`/images/logos/${brand}.svg`}
                      alt={brand}
                      className="logo-img"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes marqueeScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track {
            display: flex;
            width: max-content;
            animation: marqueeScroll 55s linear infinite;
            will-change: transform;
          }
          .marquee-row {
            display: flex;
            align-items: center;
            flex-shrink: 0;
          }
          .logo-slot {
            width: 220px;
            height: 76px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
            padding: 0 26px;
          }
          .logo-img {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: brightness(0) invert(1);
            opacity: 0.2;
            transition: opacity 500ms ease;
          }
          .logo-img:hover {
            opacity: 0.6;
          }
          @media (min-width: 768px) {
            .logo-slot {
              width: 255px;
              height: 84px;
              padding: 0 34px;
            }
          }
        `}</style>
      </section>
      
      {/* Section 01: The Philosophy */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-neutral-900 bg-[#000000]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-neutral-500 shrink-0">
              01
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-neutral-900 origin-left min-w-[40px]"
            />

            <span className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 shrink-0 whitespace-nowrap">
              The Philosophy
            </span>
          </div>

          <div className="overflow-hidden">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed"
            >
              Experiential spaces demand clear audio architecture. The soundtrack must frame the physical space and amplify the brand message without overwhelming client connection.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="font-body text-sm text-neutral-400 mt-8 max-w-xl leading-relaxed"
          >
            Executing an intentional balance between premium subsurface atmosphere and high-energy transitions.
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
                <div className="group relative overflow-hidden bg-neutral-950 aspect-[4/5] border border-neutral-900">
                  <img
                    src="/images/bmills-corporate-2.png"
                    alt="B.MILLS performing at Goldman Sachs Robinhood event New York City - Corporate Sound Design"
                    className="w-full h-full object-cover object-center opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="group relative overflow-hidden bg-neutral-950 aspect-[4/5] border border-neutral-900">
                  <img
                    src="/images/corporate/goldman-robinhood/bmills-dj-booth-robinhood-goldman.png"
                    alt="B.MILLS DJ setup at Goldman Sachs Robinhood event in New York City"
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="group relative overflow-hidden bg-neutral-950 aspect-[4/5] border border-neutral-900">
                  <img
                    src="/images/corporate/goldman-robinhood/metropolis-event-interior.png"
                    alt="Metropolis by Marcus Samuelsson event interior for Goldman Sachs Robinhood event"
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="group relative overflow-hidden bg-neutral-950 aspect-[4/5] border border-neutral-900">
                  <img
                    src="/images/corporate/goldman-robinhood/goldman-robinhood-signage.png"
                    alt="Goldman Sachs and Robinhood event signage in New York City"
                    className="w-full h-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              <p className="font-body text-[10px] md:text-xs text-neutral-500 mt-4 tracking-[0.25em] uppercase text-center">
                GOLDMAN SACHS / ROBINHOOD EVENT, NEW YORK CITY
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Section 02: Brand Alignment */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-neutral-900 bg-[#000000]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-neutral-500 shrink-0">
              02
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-neutral-900 origin-left min-w-[40px]"
            />

            <span className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 shrink-0 whitespace-nowrap">
              Brand Alignment
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
              Sonic Identity
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="max-w-2xl"
          >
            <p className="font-body text-base text-neutral-400 leading-relaxed">
              Experiential activations bring distinct elements into sync: collection visual codes, guest demographics, ambient lighting, and corporate messaging. The audio program must identify and articulate the brand viewpoint seamlessly.
            </p>

            <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
              B.MILLS builds the sound design directly from the layout constraints. The room geometry, internal flow, lighting curves, and core consumer alignment guide the trajectory. Curation stays intentional, elevated, and connected.
            </p>

            <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
              It is about executing sound restraint—knowing exactly when to anchor a room with a steady rhythm pocket and when to escalate transitions to carry a moment.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-14 border border-neutral-900"
          >
            <img
              src="/images/bmills-corporate-3.png"
              alt="B.MILLS managing audio for Hall des Lumières Grand Opening - NYC Brand Event"
              className="w-full h-auto object-cover opacity-85"
            />
            <p className="font-body text-xs text-neutral-500 p-4 tracking-widest uppercase bg-neutral-950">
              GRAND OPENING | HALL DES LUMIÈRES, NEW YORK CITY
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Section 03: Selected Event Experience */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-neutral-900 bg-[#000000]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-neutral-500 shrink-0">
              03
            </span>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-neutral-900 origin-left"
            />

            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 shrink-0"
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
              className="font-heading text-5xl md:text-6xl font-light text-white mb-10 leading-tight"
            >
              Selected Activation Experience
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="font-body text-base text-neutral-400 leading-relaxed max-w-3xl"
          >
            B.MILLS is commissioned by fashion houses, creative production partners, and premier PR networks to curate experiences where atmospheric execution is mandatory. His output spans luxury brand activations, seasonal collections, tech and financial summits, museum receptions, and high-stakes afterparties.
          </motion.p>

          {/* Gagosian Visual Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="mt-16 border-t border-neutral-900 pt-10"
          >
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-start">
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
                  Cocktail Event + Afterparty / Art / Fashion / Culture
                </p>

                <h3 className="font-heading text-3xl md:text-5xl font-light text-white leading-tight">
                  Gagosian Gallery x Avedon 100
                </h3>

                <p className="font-body text-sm tracking-[0.25em] uppercase text-neutral-400 mt-6 souce-mono">
                  Boom Boom Room + Le Bain | New York City
                </p>
              </div>

              <div>
                <p className="font-body text-base text-neutral-400 leading-relaxed">
                  For Avedon 100 with Gagosian Gallery, B.MILLS directed the sound architecture for a multi-floor layout spanning across the entire 18th floor penthouse of The Standard High Line.
                </p>

                <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
                  Catering to an elite demographic of global tastemakers, designers, and directors—including Anna Wintour, Gigi Hadid, and Naomi Campbell—the sonic evolution called for strict taste profiles and calculated momentum. The music carried the room effortlessly from high-level conversation framing into a driving club environment.
                </p>

                <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
                  Later covered across Vanity Fair and Vogue, the launch reception was noted extensively across both publications, spotlighting B.MILLS within the night's core production layout.
                </p>
              </div>
            </div>

            <div className="mt-12 border border-neutral-900">
              <img
                src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-boom-boom-room-crowd.jpg"
                alt="Gagosian Gallery Avedon 100 event crowd at Boom Boom Room in New York City"
                className="w-full h-auto object-cover opacity-85"
              />
              <p className="font-body text-xs text-neutral-500 p-4 tracking-widest uppercase bg-neutral-950">
                GAGOSIAN GALLERY X AVEDON 100 | BOOM BOOM ROOM, NEW YORK CITY
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-14">
              <div className="border border-neutral-900">
                <img
                  src="/images/corporate/gagosian-avedon-100/bmills-dj-gagosian-avedon-100-boom-boom-room.jpg"
                  alt="B.MILLS DJing the Gagosian Gallery Avedon 100 event at Boom Boom Room"
                  className="w-full h-auto object-cover opacity-85"
                />
              </div>

              <div className="border border-neutral-900">
                <img
                  src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-boom-boom-room-bar-crowd.jpg"
                  alt="Black and white bar crowd scene from Gagosian Gallery Avedon 100 at Boom Boom Room"
                  className="w-full h-auto object-cover opacity-85"
                />
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-neutral-900">
              <div className="border border-neutral-900">
                <img
                  src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-le-bain-after-party.jpg"
                  alt="Le Bain afterparty lighting and disco balls for Gagosian Gallery Avedon 100"
                  className="w-full h-auto object-cover opacity-85"
                />
              </div>
            </div>
          </motion.div>

          {/* Equinox Visual Case Study (Mirrored NJ Formula + Fixed Extensions) */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-16 border-t border-neutral-900 pt-10"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
              <div className="order-2 lg:order-1">
                <div className="border border-neutral-900">
                  <img
                    src="/images/bmills-equinox-event.png"
                    alt="B.MILLS Live at Equinox End of Year Celebration Manhattan"
                    className="w-full h-auto object-cover opacity-90"
                  />
                </div>
                <p className="font-body text-xs text-neutral-500 mt-4 tracking-widest uppercase">
                  EQUINOX ANNUAL PRODUCTION | MANHATTAN, NY
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
                  Corporate Production / 1,000+ Attendees / Premium Curation
                </p>

                <h3 className="font-heading text-3xl md:text-4xl font-light text-white leading-tight">
                  Equinox Annual End-of-Year Celebration
                </h3>

                <p className="font-body text-sm tracking-[0.25em] uppercase text-neutral-400 mt-6">
                  Large Scale Production | New York City
                </p>

                <p className="font-body text-base text-neutral-400 leading-relaxed mt-8">
                  Commanding the full audio architecture for premium lifestyle giant Equinox, B.MILLS synchronized the sonic environment for a room of over 1,000 corporate team members and executive stakeholders.
                </p>

                <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
                  Tailored completely for a brand landscape rooted in raw intensity, body motion, and elite peak performance, the soundtrack demanded flawless open-format versatility. Selections integrated technical transitions and clean genre crossovers to keep energy values aligned with the identity of the brand.
                </p>

                <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
                  Every transition carried the high-scale room structure forward with absolute continuity, driving an immersive dance floor environment while perfectly matching the internal brand codes.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 1800 Tequila Visual Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-16 border-t border-neutral-900 pt-10"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
              <div className="order-2 lg:order-1">
                <div className="border border-neutral-900">
                  <img
                    src="/images/corporate/1800-tequila/1800-tequila-pioneer-works-crowd.png"
                    alt="1800 Tequila x Essential Artists event at Pioneer Works in Red Hook Brooklyn"
                    className="w-full h-auto object-cover opacity-85"
                  />
                </div>
                <p className="font-body text-xs text-neutral-500 mt-4 tracking-widest uppercase">
                  1800 TEQUILA X ESSENTIAL ARTISTS | PIONEER WORKS, BROOKLYN
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
                  Brand Reception / Limited Edition Launch / Art World Event
                </p>

                <h3 className="font-heading text-3xl md:text-4xl font-light text-white leading-tight">
                  1800 Tequila x Essential Artists
                </h3>

                <p className="font-body text-sm tracking-[0.25em] uppercase text-neutral-400 mt-6">
                  Pioneer Works | Red Hook, Brooklyn
                </p>

                <p className="font-body text-base text-neutral-400 leading-relaxed mt-8">
                  For a limited edition 1800 Tequila bottle release featuring artist Dustin Yellin, B.MILLS provided the soundtrack for an intimate brand reception at Pioneer Works, the Brooklyn cultural space founded by Yellin.
                </p>

                <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
                  The event centered around the artwork on the bottles, the installations throughout the studio space, and the natural flow of guests gathering, talking, and moving through the room. The music needed to feel atmospheric but still engaging, present without pulling focus.
                </p>

                <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
                  With limited direction from the brand, B.MILLS shaped the sound around the setting itself: the Brooklyn location, the art, the guests, and the tone of the evening. The set moved through soulful, culturally tuned selections with a steady energy that complemented the space and kept the reception feeling warm, connected, and intentional.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="border border-neutral-900">
                <img
                  src="/images/corporate/1800-tequila/bmills-1800-tequila-dj-pioneer-works.png"
                  alt="B.MILLS DJing the 1800 Tequila Essential Artists reception at Pioneer Works"
                  className="w-full h-full object-cover aspect-[2/3] opacity-85"
                />
              </div>
              <div className="border border-neutral-900">
                <img
                  src="/images/corporate/1800-tequila/1800-tequila-essential-artists-bottles.png"
                  alt="1800 Tequila Essential Artists limited edition bottles by Dustin Yellin"
                  className="w-full h-full object-cover aspect-[2/3] opacity-85"
                />
              </div>
              <div className="border border-neutral-900">
                <img
                  src="/images/corporate/1800-tequila/dustin-yellin-pioneer-works-sculpture.png"
                  alt="Dustin Yellin artwork displayed at Pioneer Works for the 1800 Tequila event"
                  className="w-full h-full object-cover aspect-[2/3] opacity-85"
                />
              </div>
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
                className="border-t border-neutral-900 pt-10"
              >
                <h3 className="font-heading text-2xl md:text-3xl font-light text-white leading-tight">
                  {event.title}
                </h3>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 mt-4">
                  {event.meta}
                </p>
                <p className="font-body text-base text-neutral-400 leading-relaxed mt-6 max-w-4xl font-light">
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
            className="mt-20 pt-10 border-t border-neutral-900"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 mb-6">
              The Right Rooms
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {trustedFor.map((item) => (
                <p
                  key={item}
                  className="font-body text-sm text-neutral-400 leading-relaxed font-light"
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Section 04: Experience / Logistics */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-neutral-900 bg-[#050505]">
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
            className="font-body text-base text-white/50 leading-relaxed max-w-2xl font-light"
          >
            At the execution level, programming continuity is only part of the framework. B.MILLS operates with comprehensive enterprise liability insurance (COI) and syncs perfectly alongside experiential production houses, delivering absolute atmospheric precision where timing, restraint, and demographic intelligence dictate success.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="pt-12 mt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="border border-neutral-900">
                <img
                  src="/images/bmills-corporate-4.jpg"
                  alt="B.MILLS Luxury Corporate Event DJ NYC - Boom Boom Room"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
              <div className="border border-neutral-900">
                <img
                  src="/images/bmills-corporate-5.jpg"
                  alt="B.MILLS Curated Music Direction for High-End Galas"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
            </div>
            <p className="font-body text-xs text-white/30 mt-4 tracking-widest uppercase">
              Kering Eyewear Cocktail Reception | Boom Boom Room, New York City
            </p>
          </motion.div>
        </div>
      </section>

      <CorporateEventGallery />

      <InquiryFooter
        headline="Define the sound identity."
        body="High-stakes activations require rigorous sound engineering. Share your experiential timelines and let's coordinate the direction."
        footerText={
          <>
            <span className="hidden md:inline">
              Fully COI insured and available for luxury brand activations, seasonal collections,
              <br />
              and corporate productions across NYC, the Hamptons, and worldwide.
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
