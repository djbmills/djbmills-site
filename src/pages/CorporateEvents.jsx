import { motion } from 'framer-motion';
import { useEffect } from 'react';
import CorporateHero from '../components/CorporateHero';
import CorporateEventGallery from '../components/CorporateEventGallery';
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

const brandLogos = [
  'oracle', 'celine', 'equinox', 'polymarket', 'goldmansachs',
  'disney', 'lvmh', 'gucci', 'jpmorgan', 'nbcuniversal',
  'mlb', 'fanatics', 'tumi', 'citi', 'google'
];

export default function CorporateNJ() {
  useEffect(() => {
    // 1. Canonical Link Tag Setup
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://djbmills.com/corporate-events-nj');

    // 2. Structured Data (JSON-LD) Injection
    const schemaId = 'corporate-nj-jsonld';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      
      const structuredData = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": "B.MILLS | NYC Sound Curation & Event DJ",
        "url": "https://djbmills.com/corporate-events-nj",
        "description": "NYC corporate event DJ and music director serving Northern New Jersey, Bergen County, and the Tri-State area for luxury brand events, galas, product launches, and private events.",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY"
        },
        "areaServed": [
          { "@type": "City", "name": "New York City" },
          { "@type": "State", "name": "New Jersey" },
          { "@type": "AdministrativeArea", "name": "Bergen County" },
          { "@type": "DefinedRegion", "name": "Tri-State Area" }
        ],
        "knowsAbout": [
          "Corporate Event Entertainment",
          "Brand Activations",
          "Sound Curation",
          "Private Parties",
          "Gala Sound Design"
        ]
      };

      scriptTag.textContent = JSON.stringify(structuredData);
      document.head.appendChild(scriptTag);
    }

    return () => {
      if (canonicalLink && document.head.contains(canonicalLink)) {
        document.head.removeChild(canonicalLink);
      }
      const existingScript = document.getElementById(schemaId);
      if (existingScript && document.head.contains(existingScript)) {
        document.head.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden">
      <SEOHeading
        title="NYC Corporate Event DJ Serving New Jersey | B.MILLS"
        description="B.MILLS is an NYC corporate event DJ and music director serving Northern New Jersey, Bergen County, and the Tri-State area for luxury brand events, galas, product launches, networking events, and private rooms."
        keywords="NYC corporate event DJ serving New Jersey, corporate DJ NJ, luxury event DJ Bergen County, Northern New Jersey corporate DJ, New York City DJ for New Jersey events, brand activation DJ NJ, product launch DJ New Jersey, corporate gala DJ Bergen County, B.MILLS DJ"
      />

      <h1 className="sr-only">
        NYC Corporate Event &amp; Brand Activation DJ Serving New Jersey, Bergen County, and the Tri-State Area
      </h1>

      {/* Hero */}
      <div className="w-full">
        <CorporateHero />
      </div>

      {/* Brand Marquee Section */}
      <section className="w-full pt-20 pb-16 border-b border-border bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 relative z-10">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground text-center">
            Trusted By
          </p>
        </div>

        <div className="relative py-8 overflow-hidden w-full">
          <div className="marquee-track">
            {[1, 2].map((i) => (
              <div key={i} className="marquee-row">
                {brandLogos.map((brand) => (
                  <div key={`${brand}-${i}`} className="logo-slot">
                    <img
                      src={`/images/logos/${brand}.svg`}
                      alt={`${brand} corporate logo`}
                      className="logo-img"
                      loading="lazy"
                      decoding="async"
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
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground shrink-0">01</span>
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
              className="font-heading text-2xl md:text-3xl lg:text-4xl font-light text-foreground leading-relaxed max-w-4xl"
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
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
                  <img
                    src="/images/corporate/goldman-robinhood/new-york-city-pac-nyc-goldman-sachs-robinhood-corporate-event-dj-bmills.jpg"
                    alt="B.MILLS performing at regional event"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
                  <img
                    src="/images/corporate/goldman-robinhood/new-york-city-pac-nyc-goldman-sachs-robinhood-dj-booth-dj-bmills.jpg"
                    alt="B.MILLS audio setup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
                  <img
                    src="/images/corporate/goldman-robinhood/new-york-city-pac-nyc-metropolis-corporate-event-interior-dj-bmills.jpg"
                    alt="Venue architecture and interior layout"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>

                <div className="group relative overflow-hidden bg-black/5 aspect-[4/5]">
                  <img
                    src="/images/corporate/goldman-robinhood/new-york-city-pac-nyc-goldman-sachs-robinhood-event-signage-dj-bmills.jpg"
                    alt="Event branding setup"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
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
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground shrink-0">02</span>
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
              src="/images/nyc-hall-des-lumieres-grand-opening-dj-booth-bmills.jpg"
              alt="B.MILLS performative sound design setup at luxury brand launch party in downtown New York City"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
            <p className="font-body text-[10px] md:text-xs text-muted-foreground mt-4 tracking-[0.25em] uppercase text-center">
              GRAND OPENING EVENT | DOWNTOWN NEW YORK CITY
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 03: Selected Event Experience */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground shrink-0">03</span>
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

          {/* Gagosian Case Study */}
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
                loading="lazy"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-14">
              <img
                src="/images/corporate/gagosian-avedon-100/bmills-dj-gagosian-avedon-100-boom-boom-room.jpg"
                alt="B.MILLS on the decks at the event"
                className="w-full h-auto object-cover"
                loading="lazy"
              />

              <img
                src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-boom-boom-room-bar-crowd.jpg"
                alt="Guests at the gallery gathering"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-14 pt-10 border-t border-border">
              <img
                src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-le-bain-after-party.jpg"
                alt="Afterparty lighting layout"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* 1800 Tequila Case Study */}
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
                  loading="lazy"
                />
                <p className="font-body text-xs text-muted-foreground mt-4 tracking-widest uppercase">
                  1800 TEQUILA ARTIST BOTTLE LAUNCH RECEPTION
                </p>
              </div>

              <div className="order-1 lg:order-2">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
                  Brand Event & Custom Installation
                </p>

                <h3 className="font-heading text-3xl md:text-4xl font-light text-foreground leading-tight">
                  1800 Tequila x Dustin Yellin
                </h3>

                <p className="font-body text-sm tracking-[0.25em] uppercase text-muted-foreground mt-6">
                  Pioneer Works | Red Hook, Brooklyn
                </p>

                <p className="font-body text-base text-muted-foreground leading-relaxed mt-8">
                  To celebrate the release of the limited edition Dustin Yellin custom artist bottle, B.MILLS set the soundscape for an evening reception.
                </p>

                <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
                  The venue design highlighted Yellin's massive glass art installations, calling for a music selection that felt modern and texturized without overtaking the room.
                </p>

                <p className="font-body text-base text-muted-foreground leading-relaxed mt-5">
                  The music balanced rare soul cuts with modern textures, driving the room's energy while keeping the expansive gallery setting closely connected.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <img
                src="/images/corporate/1800-tequila/bmills-1800-tequila-dj-pioneer-works.png"
                alt="B.MILLS performing at the release party"
                className="w-full h-full object-cover aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="/images/corporate/1800-tequila/1800-tequila-essential-artists-bottles.png"
                alt="Dustin Yellin custom artist bottle collection"
                className="w-full h-full object-cover aspect-[2/3]"
                loading="lazy"
              />
              <img
                src="/images/corporate/1800-tequila/dustin-yellin-pioneer-works-sculpture.png"
                alt="Art installation on display"
                className="w-full h-full object-cover aspect-[2/3]"
                loading="lazy"
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

      {/* Section 04: Full-Bleed Dark Section (Logistics & Standards with 2 Photos) */}
      <section className="w-full py-20 md:py-32 px-6 md:px-12 border-b border-border bg-[#0d0d0d]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-white/30 shrink-0">04</span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-white/10 origin-left min-w-[40px]"
            />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-white/30 shrink-0 whitespace-nowrap">
              Logistics &amp; Execution
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

          {/* TWO PHOTO GRID */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="pt-12 mt-12 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="overflow-hidden bg-white/5 aspect-[4/3]">
                <img
                  src="/images/corporate/new-york-city-boom-boom-room-the-standard-hotel-benefit-event-dj-bmills.jpg"
                  alt="B.MILLS mixing live audio on professional sound controller deck at corporate function"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="overflow-hidden bg-white/5 aspect-[4/3]">
                <img
                  src="/images/corporate/new-york-city-boom-boom-room-the-standard-hotel-benefit-event-dj-bmills-2.jpg"
                  alt="B.MILLS performing at a luxury corporate benefit event inside the premium booth setup"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Full-Bleed Event Gallery */}
      <div className="w-full">
        <CorporateEventGallery />
      </div>

      {/* Call to Action Section */}
      <section className="w-full py-20 md:py-28 px-6 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-light text-foreground mb-6">
            Define the sound.
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-xl mx-auto mb-10 leading-relaxed">
            High stakes events require a precise soundtrack. Share your event details and let's discuss the direction.
          </p>
          
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-foreground text-background font-body text-xs tracking-[0.3em] uppercase hover:bg-foreground/90 transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </section>

      {/* FULL SITE FOOTER WITH NAVIGATION LINKS */}
      <footer className="w-full bg-background border-t border-border py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <a href="/" className="font-heading text-xl tracking-widest text-foreground uppercase block">
              B.MILLS
            </a>
            <p className="font-body text-xs text-muted-foreground leading-relaxed">
              NYC Sound Curation & Event DJ serving New York, Northern New Jersey, Bergen County, and globally.
            </p>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground mb-4">Navigation</p>
            <ul className="space-y-2 font-body text-xs text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition-colors">About</a></li>
              <li><a href="/listen" className="hover:text-foreground transition-colors">Listen</a></li>
              <li><a href="/clients" className="hover:text-foreground transition-colors">Clients</a></li>
              <li><a href="/events" className="hover:text-foreground transition-colors">Events</a></li>
              <li><a href="/afterparties" className="hover:text-foreground transition-colors">Afterparties</a></li>
              <li><a href="/feedback" className="hover:text-foreground transition-colors">Feedback</a></li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground mb-4">Specialties</p>
            <ul className="space-y-2 font-body text-xs text-muted-foreground">
              <li><a href="/corporate-events" className="hover:text-foreground transition-colors">Corporate Events</a></li>
              <li><a href="/corporate-events-nj" className="hover:text-foreground transition-colors">New Jersey Corporate</a></li>
              <li><a href="/brand-activations" className="hover:text-foreground transition-colors">Brand Activations</a></li>
              <li><a href="/weddings" className="hover:text-foreground transition-colors">Private Events & Weddings</a></li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs tracking-[0.3em] uppercase text-foreground mb-4">Connect</p>
            <ul className="space-y-2 font-body text-xs text-muted-foreground">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Instagram</a></li>
              <li><a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">TikTok</a></li>
              <li><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">LinkedIn</a></li>
              <li><a href="/contact" className="hover:text-foreground transition-colors">Contact / Bookings</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-[10px] text-muted-foreground uppercase tracking-widest">
            &copy; {new Date().getFullYear()} B.MILLS Sound &amp; Music Direction. All Rights Reserved.
          </p>
          <a href="/contact" className="font-body text-[10px] text-muted-foreground hover:text-foreground uppercase tracking-widest">
            SECURE YOUR DATE &rarr;
          </a>
        </div>
      </footer>
    </div>
  );
}
