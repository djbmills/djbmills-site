import { useEffect } from 'react';
import { motion } from 'framer-motion';
import CorporateHero from '../components/CorporateHero';
import CorporateEventGallery from '../components/CorporateEventGallery';
import InquiryFooter from '../components/InquiryFooter';
import SEOHeading from '../components/SEOHeading';

const selectedEvents = [
  {
    title: "Sammontana Gelati All’Italiana U.S. Launch",
    meta: "Brand Launch | Eataly Rooftop, New York City",
    body: "For the U.S. debut of Sammontana Gelati All’Italiana on the Eataly Rooftop, B.MILLS handled the music direction for an audience with a distinctly European feel, including many international guests. B.MILLS landed this booking through a direct referral from Kering Eyewear, a returning client who has booked him across multiple projects. The soundtrack was built to match the heritage of the brand and the mood of the room, starting with a relaxed, sophisticated vibe during guest arrivals and cleanly shifting into an upscale European house style as the evening picked up. The result was culturally authentic and completely natural in its progression.",
  }
];

const trustedFor = [
  "Experiential Marketing Events",
  "Live Performance Curation and Multi Zone Sound Design",
  "Seamless Agency and Brand Event Production Partnerships"
];

export default function BrandActivations() {
  
  useEffect(() => {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://djbmills.com/corporate-events');

    return () => {
      if (canonicalLink && canonicalLink.parentNode) {
        canonicalLink.parentNode.removeChild(canonicalLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] selection:bg-neutral-800 selection:text-white">
      <SEOHeading
        title="Luxury Brand Activation DJ & Sonic Director | NYC | B.MILLS"
        description="B.MILLS creates precise music direction and curated DJ sets for luxury brand activations, experiential product launches, runway collections, and private PR receptions in New York and beyond."
        keywords="luxury brand event DJ NYC, brand activation DJ NYC, fashion week afterparty DJ, product launch music curation manhattan, experiential marketing sound design nyc, luxury event music director, B.MILLS brand events"
        url="https://djbmills.com/brand-activations"
      />

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
                  'oracle', 'celine', 'equinox', 'polymarket', 'goldmansachs',
                  'disney', 'lvmh', 'gucci', 'jpmorgan', 'nbcuniversal',
                  'mlb', 'fanatics', 'tumi', 'citi', 'google'
                ].map((brand) => (
                  <div key={`${brand}-${i}`} className="logo-slot">
                    <img
                      src={`/images/logos/${brand}.svg`}
                      alt={brand}
                      className={brand === 'mlb' ? 'logo-mlb-raw-fix' : 'logo-img'}
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
          
          /* Neutralizes the solid bounding box color inside the MLB asset */
          .logo-mlb-raw-fix {
            width: 100%;
            height: 100%;
            object-fit: contain;
            filter: brightness(1.8) contrast(1.2);
            mix-blend-mode: screen;
            opacity: 0.25;
            transition: opacity 500ms ease;
          }
          .logo-mlb-raw-fix:hover {
            opacity: 0.65;
            filter: brightness(2.2) contrast(1.5);
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
              Experiential spaces require distinct sound design. The music must frame the physical room and amplify the brand messaging while keeping the crowd entirely connected.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="font-body text-sm text-neutral-400 mt-8 max-w-xl leading-relaxed"
          >
            Finding the balance between a premium underlying atmosphere and a great energy shift during live performance milestones.
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
                    alt="B.MILLS performing at Goldman Sachs Robinhood event New York City Corporate Sound Design"
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
              Brand events bring together a lot of moving parts: collection style codes, guest demographics, room lighting, and spatial layouts. The music needs to recognize that creative vision and support it cleanly.
            </p>
            <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
              B.MILLS programs the sound directly to the layout of the venue. The physical space, guest flow, lighting changes, and overall brand identity outline the path. The curation stays focused, modern, and aligned.
            </p>
            <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
              It comes down to great timing knowing exactly when to ground a room with a steady groove and when to step up the transitions during a milestone moments.
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
              alt="B.MILLS managing audio for Hall des Lumieres Grand Opening NYC Brand Event"
              className="w-full h-auto object-cover opacity-85"
            />
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
            B.MILLS collaborates with consumer brands, event production agencies, and creative teams to build soundtracks where style and atmosphere are non negotiable. His work covers everything from open air public spaces to private launch events.
          </motion.p>

          {/* 1800 Tequila Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
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
              </div>

              <div className="order-1 lg:order-2">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
                  Brand Reception / Limited Edition Launch / Art World Event
                </p>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-white leading-tight">
                  1800 Tequila x Essential Artists
                </h3>
                <p className="font-body text-base text-neutral-400 leading-relaxed mt-8">
                  For a limited edition 1800 Tequila bottle release with artist Dustin Yellin, B.MILLS crafted the sound for an intimate brand gathering at Pioneer Works, the cultural hub founded by Yellin.
                </p>
                <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
                  The event focused entirely on the custom artwork, the physical installations inside the studio, and the movement of guests throughout the space. The music had to feel premium and engaging without drawing focus away from the gallery layout.
                </p>
                <p className="font-body text-base text-neutral-400 leading-relaxed mt-5">
                  B.MILLS leaned on the environment itself to direct the soundtrack, letting the raw Brooklyn venue, the art community crowd, and the natural flow of the night set the pace. The performance relied on soulful, distinct tracks with a steady drive that felt authentic and tied the entire evening together perfectly.
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

          {/* Citi / Summer in the Square Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-16 border-t border-neutral-900 pt-10"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-14 items-start mb-8">
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 mb-5">
                  Outdoor Brand Experience | Live DJ Battle
                </p>
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight">
                  Citi Summer in the Square
                </h3>
                <p className="font-body text-base text-neutral-400 leading-relaxed mt-8">
                  For the summer event series in Union Square Park, B.MILLS stepped into an outdoor live DJ battle co sponsored by Citi. This was a weekly open air tournament built to draw crowd interaction and drive engagement directly within the main sponsor footprint.
                </p>
              </div>

              <div>
                <div className="border border-neutral-900">
                  <img
                    src="/images/corporate/citi/dj-bmills-citi-summer-in-the-square-union-square-nyc-corporate-event-dj-01.jpg"
                    alt="B.MILLS performing live at the Citi Summer in the Square brand activation turntable setup"
                    className="w-full h-auto object-cover opacity-85"
                  />
                </div>
              </div>
            </div>

            {/* Clean updated 3-photo grid row layout */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="border border-neutral-900">
                <img
                  src="/images/corporate/citi/dj-bmills-citi-summer-in-the-square-union-square-nyc-brand-event-performance-03.jpg"
                  alt="B.MILLS performing live facing side profile angle stage layout"
                  className="w-full h-full object-cover aspect-[4/3] opacity-85"
                />
              </div>
              <div className="border border-neutral-900">
                <img
                  src="/images/corporate/citi/dj-bmills-citi-summer-in-the-square-union-square-nyc-live-crowd-activation-02.jpg"
                  alt="Citi Summer in the Square public activation crowds Union Square Park"
                  className="w-full h-full object-cover aspect-[4/3] opacity-85"
                />
              </div>
              <div className="border border-neutral-900">
                <img
                  src="/images/corporate/citi/dj-bmills-citi-summer-in-the-square-nyc-public-brand-activation-05.jpg"
                  alt="Public engagement perspective behind back landscape view into the crowd during Citi activation"
                  className="w-full h-full object-cover aspect-[4/3] opacity-85"
                />
              </div>
            </div>
          </motion.div>

          {/* Sammontana Case Study */}
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
            At the execution level, programming continuity is only part of the framework. B.MILLS operates with comprehensive enterprise liability insurance (COI) and syncs perfectly alongside experiential production teams, delivering absolute atmospheric precision where timing, restraint, and demographic intelligence dictate success.
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
                  alt="B.MILLS Luxury Corporate Event DJ NYC Boom Boom Room"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
              <div className="border border-neutral-900">
                <img
                  src="/images/bmills-corporate-5.jpg"
                  alt="B.MILLS Curated Music Direction for High End Galas"
                  className="w-full h-full object-cover opacity-85"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <CorporateEventGallery />

      <InquiryFooter
        headline="Define the sound identity."
        body="Experiential events require focused music planning. Share your activation timelines and let's coordinate the sound direction."
        footerText={
          <>
            <span className="hidden md:inline">
              Fully COI insured and available for luxury brand activations, seasonal collections,
              <br />
              and brand productions across NYC, the Hamptons, and worldwide.
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
