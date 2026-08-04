import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import CorporateHero from '../components/CorporateHero';
import CorporateEventGallery from '../components/CorporateEventGallery';
import InquiryFooter from '../components/InquiryFooter';
import SEOHeading from '../components/SEOHeading';

const selectedEvents = [
  {
    title: "Sammontana Gelati All’Italiana U.S. Launch",
    meta: "Brand Launch | Eataly Rooftop, New York City",
    body: "For the U.S. launch of Sammontana Gelati All’Italiana at Eataly Rooftop, B.MILLS curated the soundtrack for a crowd with a distinctly European feel, including many Italian guests. B.MILLS was brought in through a referral from Kering Eyewear, a past client he had worked with across multiple events, which made the booking feel especially aligned from the start. As a brand event DJ, the music direction was designed to reflect the brand’s roots and the mood of the evening, beginning with a relaxed, stylish energy as guests arrived and settled into the space, then gradually building into a more upbeat European house direction as the night progressed. The result felt culturally in tune, brand right, and effortless in its progression.",
  },
  {
    title: "School of American Ballet Ball",
    meta: "Dinner + Dancing | Lincoln Center, New York City",
    body: "Trusted for two consecutive years to soundtrack the SAB Ball, B.MILLS shaped the full musical arc of the evening for approximately 450 guests, including high-net-worth donors and dance enthusiasts. B.MILLS was referred by the New York City Ballet Young Patrons Circle event team, following 13 years of DJing their Young Patrons Circle post-performance parties in The Promenade of the David H. Koch Theater. The night began with a smooth, soulful dinner soundtrack that brought warmth and movement into the room while keeping the tone elegant. From there, the energy built naturally into a more celebratory dance floor later in the evening, allowing the event to shift without losing its sense of refinement.",
  },
];

const trustedFor = [
  "Luxury brand events and product launches",
  "Tech, finance, fashion, and private client rooms",
  "Afterparties and high-level celebrations",
];

const brandLogos = [
  'oracle', 'celine', 'equinox', 'polymarket', 'goldmansachs',
  'disney', 'lvmh', 'gucci', 'jpmorgan', 'nbcuniversal',
  'mlb', 'fanatics', 'tumi', 'citi', 'google'
];

export default function CorporateEvents() {

  useEffect(() => {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', 'https://djbmills.com/corporate-events');

    // SEO: JSON-LD Structured Data for Local Business / DJ Service
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Corporate & Brand Activation DJ Services NYC",
      "serviceType": "Brand Activation DJ, Brand Event DJ, Corporate Event DJ",
      "provider": {
        "@type": "LocalBusiness",
        "name": "B.MILLS",
        "url": "https://djbmills.com",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US"
        }
      },
      "areaServed": ["New York City", "Manhattan", "Brooklyn", "The Hamptons", "Tri-State Area"],
      "description": "Premium brand activation DJ and corporate event music direction for luxury brands, tech, finance, product launches, and high-profile activations in NYC.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Corporate DJ Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Brand Activation & Launch Events"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Corporate Galas & Private Receptions"
            }
          }
        ]
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.text = JSON.stringify(schemaData);

    return () => {
      if (canonicalLink && canonicalLink.parentNode) {
        canonicalLink.parentNode.removeChild(canonicalLink);
      }
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#111111] selection:bg-neutral-200 selection:text-black">
      <SEOHeading
        title="Brand Activation DJ & Corporate Event DJ NYC | B.MILLS"
        description="B.MILLS is a premier brand activation DJ and corporate event DJ in NYC providing tailored music direction for luxury brands, tech gatherings, finance events, product launches, and galas."
        keywords="brand activation DJ NYC, brand event DJ, corporate event DJ NYC, corporate DJ NYC, luxury event DJ NYC, luxury brand event DJ NYC, tech networking DJ NYC, product launch DJ NYC, B.MILLS"
        url="https://djbmills.com/corporate-events"
      />

      {/* Hidden H1 for explicit SEO ranking signals without affecting luxury design */}
      <h1 className="sr-only">
        Brand Activation DJ & Luxury Corporate Event DJ Services NYC
      </h1>

      <CorporateHero />

      {/* Section: Professional Brand Marquee (BLACK) */}
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
                {brandLogos.map((brand) => (
                  <div key={`${brand}-${i}`} className="logo-slot">
                    <img
                      src={`/images/logos/${brand}.svg`}
                      alt={`${brand} logo brand activation DJ NYC`}
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

      {/* Section 01: The Philosophy (BLACK RIGHT AFTER MARQUEE) */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-neutral-900 bg-[#050505] text-white">
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
              className="flex-1 h-px bg-neutral-800 origin-left min-w-[40px]"
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
              Corporate environments and brand activations require precise sonic curation. The music should define the brand identity without overwhelming the space, providing professional vocal direction only when necessary.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="font-body text-sm text-neutral-400 mt-8 max-w-xl leading-relaxed font-light"
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
                <div className="group relative overflow-hidden bg-neutral-900 aspect-[4/5] border border-neutral-800">
                  <img
                    src="/images/corporate/goldman-robinhood/new-york-city-pac-nyc-goldman-sachs-robinhood-corporate-event-dj-bmills.jpg"
                    alt="B.MILLS corporate event DJ performing at Goldman Sachs Robinhood event New York City"
                    className="w-full h-full object-cover object-center opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="group relative overflow-hidden bg-neutral-900 aspect-[4/5] border border-neutral-800">
                  <img
                    src="/images/corporate/goldman-robinhood/new-york-city-pac-nyc-goldman-sachs-robinhood-dj-booth-dj-bmills.jpg"
                    alt="B.MILLS brand event DJ booth setup at Goldman Sachs Robinhood event in New York City"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="group relative overflow-hidden bg-neutral-900 aspect-[4/5] border border-neutral-800">
                  <img
                    src="/images/corporate/goldman-robinhood/new-york-city-pac-nyc-metropolis-corporate-event-interior-dj-bmills.jpg"
                    alt="Metropolis by Marcus Samuelsson event interior for Goldman Sachs Robinhood event"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="group relative overflow-hidden bg-neutral-900 aspect-[4/5] border border-neutral-800">
                  <img
                    src="/images/corporate/goldman-robinhood/new-york-city-pac-nyc-goldman-sachs-robinhood-event-signage-dj-bmills.jpg"
                    alt="Goldman Sachs and Robinhood event signage in New York City"
                    className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>
              <p className="font-body text-[11px] tracking-[0.2em] uppercase text-neutral-500 mt-4 text-left">
                Goldman Sachs / Robinhood Event | New York City
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 02: Brand Alignment (OFF-WHITE CREAM) */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-black/10 bg-[#F9F8F6]">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-neutral-400 shrink-0">
              02
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-black/10 origin-left min-w-[40px]"
            />
            <span className="font-body text-xs tracking-[0.3em] uppercase text-neutral-400 shrink-0 whitespace-nowrap">
              Brand Alignment
            </span>
          </div>

          <div className="overflow-hidden">
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
              className="font-heading text-5xl md:text-6xl font-light text-black mb-10 leading-tight"
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
            <p className="font-body text-base text-neutral-600 leading-relaxed font-light">
              Corporate events and brand activations bring different people into the same space: clients, teams, executives, guests, and people who may not all move the same way. As an experienced brand event DJ, the music has to find the common thread without turning the room into something it is not.
            </p>
            <p className="font-body text-base text-neutral-600 leading-relaxed mt-5 font-light">
              B.MILLS builds the sound from the setting first. The room, the crowd, the pace, the lighting, the reason everyone is there. Selections stay intentional, soulful, and connected without feeling obvious.
            </p>
            <p className="font-body text-base text-neutral-600 leading-relaxed mt-5 font-light">
              It&apos;s not about playing everything. It&apos;s about playing what fits, keeping the energy alive, and knowing when to let the music sit in the pocket.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-14"
          >
            <div className="border border-black/5">
              <img
                src="/images/bmills-corporate-3.png"
                alt="B.MILLS brand activation DJ managing audio for Hall des Lumières Grand Opening NYC"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-neutral-500 mt-4 text-left">
              Grand Opening | Hall des Lumières, New York City
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 03: Selected Event Experience (SLIGHT CREAM CONTRAST) */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-black/10 bg-[#F3F2EF]">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center gap-4 mb-10 overflow-hidden">
            <span className="font-body text-xs tracking-[0.4em] uppercase text-neutral-400 shrink-0">
              03
            </span>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
              className="flex-1 h-px bg-black/10 origin-left"
            />
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
              className="font-body text-xs tracking-[0.3em] uppercase text-neutral-400 shrink-0"
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
              className="font-heading text-5xl md:text-6xl font-light text-black mb-10 leading-tight"
            >
              Selected Event Experience
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="font-body text-base text-neutral-600 leading-relaxed max-w-3xl font-light"
          >
            B.MILLS is booked by luxury brands, marketing agencies, planners, and corporate leaders as a trusted brand activation DJ where music needs to feel intentional. His work spans brand activations, product launches, tech and finance gatherings, fashion events, cultural programming, executive rooms, private celebrations, and high-end afterparties across New York and beyond.
          </motion.p>

          {/* Gagosian Visual Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
            className="mt-16 border-t border-black/10 pt-10"
          >
            <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 lg:gap-14 items-start">
              <div>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-400 mb-5">
                  Cocktail Event + Afterparty / Art / Fashion / Culture
                </p>
                <h3 className="font-heading text-3xl md:text-5xl font-light text-black leading-tight">
                  Gagosian Gallery x Avedon 100
                </h3>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-neutral-500 mt-6">
                  Boom Boom Room + Le Bain | New York City
                </p>
              </div>

              <div>
                <p className="font-body text-base text-neutral-600 leading-relaxed font-light">
                  For Avedon 100 with Gagosian Gallery, B.MILLS curated the soundtrack for an evening that began at Boom Boom Room and later moved into Le Bain, with the full 18th floor of The Standard reserved for the event.
                </p>
                <p className="font-body text-base text-neutral-600 leading-relaxed mt-5 font-light">
                  With a guest list spanning fashion, art, and culture, including names like Anna Wintour, Gigi Hadid, and Naomi Campbell, the music direction called for taste, restraint, and just the right amount of movement. The soundtrack supported conversation, complemented the room, and carried the night with an intentional sense of momentum from cocktail hour through the closing stretch.
                </p>
                <p className="font-body text-base text-neutral-600 leading-relaxed mt-5 font-light">
                  Later featured in Vanity Fair and Vogue, the evening was noted by both publications, with B.MILLS named among the DJs behind the night.
                </p>
              </div>
            </div>

            <div className="mt-12 border border-black/5">
              <img
                src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-boom-boom-room-crowd.jpg"
                alt="Gagosian Gallery Avedon 100 event crowd at Boom Boom Room NYC - Brand Event DJ"
                className="w-full h-auto object-cover"
              />
            </div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-neutral-500 mt-4 text-left">
              Gagosian Gallery x Avedon 100 | Boom Boom Room, New York City
            </p>

            <div className="grid md:grid-cols-2 gap-8 lg:gap-10 mt-14">
              <div className="border border-black/5">
                <img
                  src="/images/corporate/gagosian-avedon-100/bmills-dj-gagosian-avedon-100-boom-boom-room.jpg"
                  alt="B.MILLS DJing the Gagosian Gallery Avedon 100 event at Boom Boom Room"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="border border-black/5">
                <img
                  src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-boom-boom-room-bar-crowd.jpg"
                  alt="Black and white bar crowd scene from Gagosian Gallery Avedon 100 at Boom Boom Room"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="mt-14 pt-10 border-t border-black/10">
              <div className="border border-black/5">
                <img
                  src="/images/corporate/gagosian-avedon-100/gagosian-avedon-100-le-bain-after-party.jpg"
                  alt="Le Bain afterparty lighting and disco balls for Gagosian Gallery Avedon 100"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* 1800 Tequila Visual Case Study */}
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-16 border-t border-black/10 pt-10"
          >
            <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-8 lg:gap-12 items-start">
              <div className="order-2 lg:order-1">
                <div className="border border-black/5">
                  <img
                    src="/images/corporate/1800-tequila/1800-tequila-pioneer-works-crowd.png"
                    alt="1800 Tequila x Essential Artists brand activation DJ event at Pioneer Works Brooklyn"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-400 mb-5">
                  Brand Reception / Limited Edition Launch / Art World Event
                </p>
                <h3 className="font-heading text-3xl md:text-4xl font-light text-black leading-tight">
                  1800 Tequila x Essential Artists
                </h3>
                <p className="font-body text-xs tracking-[0.25em] uppercase text-neutral-500 mt-6">
                  Pioneer Works | Red Hook, Brooklyn
                </p>
                <p className="font-body text-base text-neutral-600 leading-relaxed mt-8 font-light">
                  For a limited edition 1800 Tequila bottle release featuring artist Dustin Yellin, B.MILLS acted as the brand activation DJ providing the soundtrack for an intimate reception at Pioneer Works, the Brooklyn cultural space founded by Yellin.
                </p>
                <p className="font-body text-base text-neutral-600 leading-relaxed mt-5 font-light">
                  The event centered around the artwork on the bottles, the installations throughout the studio space, and the natural flow of guests gathering, talking, and moving through the room. The music needed to feel atmospheric but still engaging, present without pulling focus.
                </p>
                <p className="font-body text-base text-neutral-600 leading-relaxed mt-5 font-light">
                  With limited direction from the brand, B.MILLS shaped the sound around the setting itself: the Brooklyn location, the art, the guests, and the tone of the evening. The set moved through soulful, culturally tuned selections with a steady energy that complemented the space and kept the reception feeling warm, connected, and intentional.
                </p>
                <p className="font-body text-base text-neutral-600 leading-relaxed mt-5 font-light">
                  Each transition was built to feel seamless from one record to the next, supporting the brand experience while allowing the artwork and environment to remain the focus.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
              <div className="border border-black/5">
                <img
                  src="/images/corporate/1800-tequila/bmills-1800-tequila-dj-pioneer-works.png"
                  alt="B.MILLS brand activation DJing the 1800 Tequila Essential Artists reception at Pioneer Works"
                  className="w-full h-full object-cover aspect-[2/3]"
                />
              </div>
              <div className="border border-black/5">
                <img
                  src="/images/corporate/1800-tequila/1800-tequila-essential-artists-bottles.png"
                  alt="1800 Tequila Essential Artists limited edition bottles by Dustin Yellin"
                  className="w-full h-full object-cover aspect-[2/3]"
                />
              </div>
              <div className="border border-black/5">
                <img
                  src="/images/corporate/1800-tequila/dustin-yellin-pioneer-works-sculpture.png"
                  alt="Dustin Yellin artwork displayed at Pioneer Works for the 1800 Tequila event"
                  className="w-full h-full object-cover aspect-[2/3]"
                />
              </div>
            </div>
            <p className="font-body text-[11px] tracking-[0.2em] uppercase text-neutral-500 mt-4 text-left">
              1800 Tequila Activation | Red Hook, Brooklyn
            </p>
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
                className="border-t border-black/10 pt-10"
              >
                <h3 className="font-heading text-2xl md:text-3xl font-light text-black leading-tight">
                  {event.title}
                </h3>
                <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-500 mt-4">
                  {event.meta}
                </p>
                <p className="font-body text-base text-neutral-600 leading-relaxed mt-6 max-w-4xl font-light">
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
            className="mt-20 pt-10 border-t border-black/10"
          >
            <p className="font-body text-xs tracking-[0.3em] uppercase text-neutral-400 mb-6">
              The Right Rooms
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {trustedFor.map((item) => (
                <p
                  key={item}
                  className="font-body text-sm text-neutral-600 leading-relaxed font-light"
                >
                  {item}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 04: Professional Standards */}
      <section className="py-20 md:py-32 px-6 md:px-12 border-b border-neutral-900 bg-[#050505]">
        <div className="max-w-4xl mx-auto">
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
            className="max-w-2xl"
          >
            <p className="font-body text-base text-neutral-400 leading-relaxed font-light">
              At the execution level, programming continuity is only part of the framework. B.MILLS operates with comprehensive enterprise liability insurance (COI) and syncs perfectly alongside experiential production teams, delivering absolute atmospheric precision where timing, restraint, and demographic intelligence dictate success.
            </p>
          </motion.div>

          {/* Photo Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
            className="mt-14"
          >
            <CorporateEventGallery />
          </motion.div>
        </div>
      </section>

      {/* Shared Inquiry Footer Component with Location Links */}
      <InquiryFooter
        subtext={
          <p className="font-body text-[11px] text-neutral-500 max-w-xl mx-auto leading-relaxed font-light">
            Serving luxury corporate events, brand activations, and private clients across{' '}
            <Link 
              href="/corporate-events" 
              className="hover:underline hover:decoration-neutral-400/60 hover:underline-offset-4 hover:text-black transition-colors"
            >
              New York City
            </Link>
            , The Hamptons, Westchester,{' '}
            <Link 
              href="/corporate-events-nj" 
              className="hover:underline hover:decoration-neutral-400/60 hover:underline-offset-4 hover:text-black transition-colors"
            >
              New Jersey
            </Link>
            , South Florida, and Connecticut. Available for travel worldwide.
          </p>
        }
      />
    </div>
  );
}
