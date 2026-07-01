import { motion } from 'framer-motion';
import { useEffect } from 'react';
import InquiryFooter from '../components/InquiryFooter';
import SEOHeading from '../components/SEOHeading';

export default function BrandActivations() {
  
  // ALGORITHMIC FAIL-SAFE: Anchors brand authority tightly to your master corporate destination
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
    <div className="min-h-screen bg-[#090909] text-[#f5f5f7]">
      <SEOHeading
        title="Luxury Brand Activation DJ & Sonic Director | NYC | B.MILLS"
        description="B.MILLS designs precise sonic environments, runways, and luxury brand activation soundtracks for global fashion houses and experiential PR agencies including Celine, LVMH, and Gucci."
        keywords="luxury brand activation dj nyc, fashion week afterparty dj, product launch music curation manhattan, experimental marketing sound design nyc, luxury event music director, B.MILLS brand events"
        url="https://djbmills.com/brand-activations"
      />

      {/* Hero Section: Editorial Luxury Framework */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl mt-12">
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-6">
            Sonic Architecture / Luxury & Fashion
          </span>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight text-white leading-[1.1] mb-8">
            Translating brand identity <br />
            <span className="italic font-light text-neutral-400">into atmospheric sound.</span>
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-end border-t border-neutral-800/60 pt-12">
          <p className="font-body text-sm text-neutral-400 leading-relaxed max-w-md">
            B.MILLS executes precise sound architecture for experiential launches, runway collections, private client rooms, and premium fashion house receptions. No unneeded mic presence—just highly-curated, brand-aligned atmosphere.
          </p>
          <div className="flex flex-col items-start md:items-end gap-2 text-neutral-500 font-body text-xs tracking-widest uppercase">
            <span>Based in New York City</span>
            <span>Serving Global Houses</span>
          </div>
        </div>
      </section>

      {/* Infinite Luxury Client Marquee */}
      <section className="py-12 bg-black border-y border-neutral-900 overflow-hidden">
        <div className="relative py-4 overflow-hidden">
          <div className="marquee-track">
            {[1, 2].map((i) => (
              <div key={i} className="marquee-row">
                {[
                  'celine', 'oracle', 'equinox', 'polymarket', 'goldmansachs', 'disney', 
                  'lvmh', 'gucci', 'jpmorgan', 'nbcuniversal', 'mlb', 
                  'fanatics', 'tumi', 'citi', 'google'
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
      </section>

      {/* The Master Case Study: The Standard Crown Jewel Layout */}
      <section className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20 items-start">
          <div>
            <span className="font-body text-xs tracking-[0.4em] uppercase text-neutral-500 block mb-4">
              Featured Case Study
            </span>
            <h2 className="font-heading text-3xl md:text-5xl font-extralight text-white tracking-tight leading-tight mb-6">
              Gagosian Gallery x <br />Avedon 100 Centennial
            </h2>
            <p className="font-body text-xs tracking-widest uppercase text-neutral-400 mb-8">
              The Boom Boom Room & Le Bain | Manhattan, NY
            </p>
            <p className="font-body text-base text-neutral-400 leading-relaxed mb-6">
              For the historic Avedon 100 celebration, B.MILLS directed the multi-floor sonic trajectory spanning across the entire 18th floor penthouse of The Standard High Line.
            </p>
            <p className="font-body text-base text-neutral-400 leading-relaxed">
              Curating music for an elite cultural room featuring international tastemakers, designers, and brand directors, the sound progression demanded immaculate aesthetic calculation—carrying the evening effortlessly from crisp cocktail curation into a driving club room atmosphere.
            </p>
          </div>
          <div className="relative aspect-[4/5] bg-neutral-900 overflow-hidden">
            <img
              src="/images/dj-bmills-boom-standard-hotel-nyc-full-hero.jpg"
              alt="B.MILLS Sound Performance at The Boom Boom Room NYC"
              className="w-full h-full object-cover opacity-85 transition-transform duration-700 hover:scale-102"
            />
          </div>
        </div>
      </section>

      {/* Core Philosophies: Three High-Converting Pillars */}
      <section className="py-24 bg-black border-t border-neutral-900 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="font-body text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-16 text-center">
            Execution Framework
          </span>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="border-t border-neutral-800 pt-8">
              <span className="font-heading text-xs text-neutral-500 block mb-6">01 / BRAND TRANSLATION</span>
              <h3 className="font-heading text-xl font-light text-white mb-4">Sonic Alignment</h3>
              <p className="font-body text-sm text-neutral-400 leading-relaxed">
                Music selection is meticulously aligned with collection guidelines, luxury branding concepts, or experiential target objectives to reflect physical visual values perfectly.
              </p>
            </div>
            <div className="border-t border-neutral-800 pt-8">
              <span className="font-heading text-xs text-neutral-500 block mb-6">02 / INTERIOR LOGISTICS</span>
              <h3 className="font-heading text-xl font-light text-white mb-4">Acoustic Restraint</h3>
              <p className="font-body text-sm text-neutral-400 leading-relaxed">
                Vocal interventions are strictly eliminated unless specifically requested for brand announcements. The sound wraps the room seamlessly to facilitate industry connection.
              </p>
            </div>
            <div className="border-t border-neutral-800 pt-8">
              <span className="font-heading text-xs text-neutral-500 block mb-6">03 / PREMIUM COMPLIANCE</span>
              <h3 className="font-heading text-xl font-light text-white mb-4">Enterprise Execution</h3>
              <p className="font-body text-sm text-neutral-400 leading-relaxed">
                Fully supported by elite corporate multi-million dollar liability insurance (COI), ensuring immediate, credentialed site access across all premier venues and restricted historical galleries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Dual Asset Feature Grid */}
      <section className="py-24 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="group space-y-4">
            <div className="aspect-[3/2] bg-neutral-900 overflow-hidden">
              <img 
                src="/images/bmills-corporate-hero.jpg" 
                alt="B.MILLS Luxury Experiential Sound Design" 
                className="w-full h-full object-cover opacity-75 grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <p className="font-body text-[11px] tracking-widest text-neutral-500 uppercase">
              Brand Activation & Atmosphere Architecture / Manhattan
            </p>
          </div>
          <div className="group space-y-4">
            <div className="aspect-[3/2] bg-neutral-900 overflow-hidden">
              <img 
                src="/images/bmills-corporate-3.png" 
                alt="B.MILLS Sound Director at Hall des Lumières" 
                className="w-full h-full object-cover opacity-75 grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
            </div>
            <p className="font-body text-[11px] tracking-widest text-neutral-500 uppercase">
              Grand Opening Curation / Hall des Lumières, NYC
            </p>
          </div>
        </div>
      </section>

      {/* High-Converting Client Inquiry Path */}
      <InquiryFooter
        headline="Soundtrack your identity."
        body="Protect your brand experience with deliberate sound direction. Connect to align your seasonal calendar or secure an upcoming activation date."
        footerText="Available globally for luxury fashion house presentations, high-end retail activations, global summits, and premium afterparties. Fully credentialed and COI certified."
      />

      <style jsx>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track {
          display: flex;
          width: max-content;
          animation: marqueeScroll 60s linear infinite;
          will-change: transform;
        }
        .marquee-row {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .logo-slot {
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 0 30px;
        }
        .logo-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.25;
          transition: opacity 300ms ease;
        }
        .logo-img:hover {
          opacity: 0.7;
        }
      `}</style>
    </div>
  );
}
