import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CorporateHero from '../components/CorporateHero';
import CorporateEventGallery from '../components/CorporateEventGallery';
import InquiryFooter from '../components/InquiryFooter';
import SEOHeading from '../components/SEOHeading';

const selectedEvents = [
  {
    title: "Sammontana Gelati All’Italiana U.S. Launch",
    meta: "Brand Launch | Eataly Rooftop, New York City",
    body: "For the premier U.S. debut of Sammontana Gelati All’Italiana, B.MILLS designed a tailored sound profile for an international crowd at Eataly Rooftop. Secured via a direct recommendation from Kering Eyewear, the music curation mirrored the brand's sophisticated European heritage. The progression transitioned fluidly from an upscale, atmospheric arrival lounge into a high energy European house set as the evening evolved, delivering an experience that felt both effortless and precise.",
  },
  {
    title: "School of American Ballet Ball",
    meta: "Dinner + Dancing | Lincoln Center, New York City",
    body: "Retained for consecutive years to orchestrate the soundtrack for the historic SAB Ball at Lincoln Center, B.MILLS commanded the energy for over 450 guests, including high net worth donors and stakeholders. Following a thirteen year tenure curating for the New York City Ballet Young Patrons Circle, this production required a delicate musical arc—beginning with understated, soul infused dinner arrangements before naturally escalating into a high energy celebration.",
  },
];

const trustedFor = [
  "Luxury brand activations & private client rooms",
  "Tech, finance, and cultural gallery spaces",
  "High profile afterparties & regional functions",
];

export default function CorporateNJ() {
  
  useEffect(() => {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://djbmills.com/corporate-events-nj');

    return () => {
      if (canonicalLink && canonicalLink.parentNode) {
        canonicalLink.parentNode.removeChild(canonicalLink);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SEOHeading
        title="Luxury Corporate Event DJ & Sound Director | NJ & Tri-State | B.MILLS"
        description="B.MILLS creates music direction and DJ sets for luxury brand events, tech and finance networking, product launches, corporate summits, and private rooms across Northern New Jersey, Bergen County, and NYC."
        keywords="luxury corporate event DJ NJ, tech networking DJ New Jersey, finance event DJ Bergen County, corporate event DJ Northern NJ, brand activation DJ tri state, product launch DJ NJ, private estate DJ NJ, luxury gala DJ Montvale, B.MILLS, B Mills DJ"
        url="https://djbmills.com/corporate-events-nj"
      />

      <CorporateHero />

      {/* Section: Professional Brand Marquee */}
      <section className="relative pt-20 pb-16 border-b border-border bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 relative z-10">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground text-center">
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
          .marquee-row { display: flex; align-items: center; flex-shrink: 0; }
          .logo-slot { width: 220px; height: 76px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; padding: 0 26px; }
          .logo-img { width: 100%; height: 100%; object-fit: contain; filter: grayscale(1); opacity: 0.48; transition: opacity 500ms ease, filter 500ms ease; }
          .logo-img:hover { opacity: 0.9; filter: grayscale(0); }
          @media (min-width: 768px) { .logo-slot { width: 255px; height: 84px; padding: 0 34px; } }
        `}</style>
      </section>
            
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
              Corporate landscapes and private events command an intentional approach to sound. B.MILLS delivers distinct music direction tailored to the environment, maintaining a clean presence on the microphone only when needed.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="font-body text-sm text-muted-foreground mt-8 max-w-xl leading-relaxed"
          >
            Balancing sophisticated networking environments with a seamless transition into the evening.
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
                    alt="B.MILLS performing at regional event"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
                  <img
                    src="/images/corporate/goldman-robinhood/bmills-dj-booth-robinhood-goldman.png"
                    alt="B.MILLS audio setup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
                  <img
                    src="/images/corporate/goldman-robinhood/metropolis-event-interior.png"
                    alt="Venue architecture and interior layout"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
                  <img
                    src="/images/corporate/goldman-robinhood/goldman-robinhood-signage.png"
                    alt="Event branding setup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
              </div>

              <p className="font-body text-[10px] md:text-xs text-muted-foreground mt-4 tracking-[0.25em] uppercase text-center">
                GOLDMAN SACHS / ROBINHOOD SUMMIT ARCHIVE
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="max-w-2xl"
          >
            <p className="font-body text-base text-muted-foreground leading-relaxed">
              Premium events bring different groups together, from executive teams to clients and guests. The music needs to connect the entire room naturally while respecting the atmosphere of the venue.
            </p>

            <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
              B.MILLS reads the energy based directly on the room layout, guest flow, and lighting. The curation is deep, soulful, and current, built completely from scratch without falling back on standard tracklists.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-14"
          >
            <img
              src="/images/corporate/luxury-brand-event-dj-nyc.png"
              alt="B.MILLS performative sound design setup at luxury brand launch party in downtown New York City"
              className="w-full h-auto object-cover"
            />
            <p className="font-body text-[10px] md:text-xs text-muted-foreground mt-4 tracking-[0.25em] uppercase text-center">
              GRAND OPENING EVENT | DOWNTOWN NEW YORK CITY
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
            B.MILLS is booked by brands, planners, and hosts who look for intentional music curation. The following portfolio projects showcase custom event production across Northern New Jersey, Bergen County, and the Tri State area.
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
                  Gallery Exhibition Opening Party
                </p>

                <h3 className="font-heading text-3xl md:text-5xl font-light text-foreground leading-tight">
                  Gagosian Gallery x Avedon 100
                </h3>

                <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mt-6">
                  Boom Boom Room, New York City
                </p>
              </div>

              <div>
                <p className="font-body text-base text-muted-foreground leading-relaxed">
                  For the Avedon 100 opening party in partnership with Gagosian Gallery, B.MILLS mixed the soundtrack for the top floor of The Standard.
                </p>

                <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
                  Playing for an international crowd of artists, designers, and curators, the sound needed to feel effortless while driving the energy of the room. The music allowed for natural conversation early on before expanding into a late night dance floor.
                </p>

                <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
                  The event coverage was later featured across major fashion and lifestyle platforms, including Vogue and Vanity Fair.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <img
                src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-boom-boom-room-crowd.jpg"
                alt="Event atmosphere at the opening party"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-14">
              <img
                src="/images/corporate/gagosian-avedon-100/bmills-dj-gagosian-avedon-100-boom-boom-room.jpg"
                alt="B.MILLS on the decks at the event"
                className="w-full h-auto object-cover"
              />

              <img
                src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-boom-boom-room-bar-crowd.jpg"
                alt="Guests at the gallery gathering"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="mt-14 pt-10 border-t border-border">
              <img
                src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-le-bain-after-party.jpg"
                alt="Afterparty lighting layout"
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
                  alt="Atmospheric brand reception setup"
                  className="w-full h-auto object-cover"
                />
                <p className="font-body text-xs text-muted-foreground mt-4 tracking-widest uppercase">
                  1800 TEQUILA ARTIST BOTTLE LAUNCH RECEPTION
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
                  Artist Bottle Release Party & Custom Installation
                </p>

                <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground leading-tight">
                  1800 Tequila x Dustin Yellin
                </h3>

                <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mt-6">
                  Pioneer Works, Brooklyn
                </p>

                <p className="font-body text-base text-muted-foreground leading-relaxed mt-8">
                  To celebrate the release of the limited edition Dustin Yellin custom artist bottle, B.MILLS set the soundscape for an evening reception.
                </p>

                <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
                  The venue design highlighted Yellin's massive glass art installations, calling for a music selection that felt modern and texturized without overtaking the room.
                </p>

                <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
                  The curation mixed rare groove, soul, and current electronic layers, keeping the open gallery space connected and vibrant throughout the reception.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <img
                src="/images/corporate/1800-tequila/bmills-1800-tequila-dj-pioneer-works.png"
                alt="B.MILLS performing at the release party"
                className="w-full h-full object-cover aspect-[2/3]"
              />
              <img
                src="/images/corporate/1800-tequila/1800-tequila-essential-artists-bottles.png"
                alt="Dustin Yellin custom artist bottle collection"
                className="w-full h-full object-cover aspect-[2/3]"
              />
              <img
                src="/images/corporate/1800-tequila/dustin-yellin-pioneer-works-sculpture.png"
                alt="Art installation on display"
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
              The Right Rooms
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
            
      {/* Section 04: Logistics & Standards */}
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
              Logistics & Execution
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
            Flawless execution stretches far past the music itself. B.MILLS maintains a clean operational framework, fully covered with the comprehensive multi million dollar commercial liability insurance (COI) required by premier venues, country clubs, and private spaces across New York, New Jersey, and the Tri State area.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="pt-12 mt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-3 gap-4">
              <img
                src="/images/corporate/luxury-benefit-event-dj-bmills-nyc.jpg"
                alt="B.MILLS mixing live audio on professional sound controller deck at corporate function"
                className="w-full h-full object-cover aspect-[2/3]"
              />
              <img
                src="/images/corporate/luxury-benefit-event-dj-bmills-nyc-2.jpg"
                alt="B.MILLS performing at a luxury corporate benefit event inside the premium booth setup"
                className="w-full h-full object-cover aspect-[2/3]"
              />
              <img
                src="/images/corporate/luxury-benefit-event-dj-bmills-nyc-3.jpg"
                alt="Sleek corporate benefit event DJ production setup close up layout"
                className="w-full h-full object-cover aspect-[2/3]"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <CorporateEventGallery />

      <InquiryFooter
        headline="Define the sound."
        body="High stakes events require a precise soundtrack. Share your event details and let's discuss the direction."
        footerText={
          <>
            <span className="hidden md:inline">
              Fully COI insured and available for brand activations, corporate galas,
              <br />
              and private functions across NYC, Northern New Jersey, and premium tri state spaces.
            </span>

            <span className="md:hidden">
              Fully COI insured and available for brand activations,
              <br />
              corporate galas, and private functions
              <br />
              across NYC, NJ, and premium tri state spaces.
            </span>
          </>
        }
      />
    </div>
  );
}
