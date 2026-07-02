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
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] selection:bg-neutral-800 selection:text-white font-sans antialiased">
      <SEOHeading
        title="Luxury Brand Activation DJ & Sonic Director | NYC | B.MILLS"
        description="B.MILLS designs precise sonic environments, runways, and luxury brand activation soundtracks for global fashion houses and experiential PR agencies including Celine, LVMH, Equinox, and Gucci."
        keywords="luxury brand activation dj nyc, fashion week afterparty dj, product launch music curation manhattan, experimental marketing sound design nyc, luxury event music director, B.MILLS brand events"
        url="https://djbmills.com/brand-activations"
      />

      {/* Hero Section: Replicating the Pristine NJ Framework */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto w-full">
        <div className="max-w-4xl">
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-6">
            Sonic Architecture / Luxury & Experiential
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.15] mb-8">
            Translating brand identity <br />
            <span className="font-serif italic font-light text-neutral-400">into atmospheric sound.</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-400 leading-relaxed max-w-2xl font-light">
            B.MILLS executes precise sound curation for experiential launches, seasonal collections, private client rooms, and premium PR receptions. Designed completely around clear room dynamics—no intrusive mic presence.
          </p>
        </div>
      </section>

      {/* Infinite Luxury Client Marquee */}
      <section className="py-10 bg-[#050505] border-y border-neutral-900 overflow-hidden">
        <div className="relative overflow-hidden">
          <div className="marquee-track">
            {[1, 2].map((i) => (
              <div key={i} className="marquee-row">
                {[
                  'celine', 'oracle', 'polymarket', 'goldmansachs', 'disney', 
                  'lvmh', 'equinox', 'gucci', 'jpmorgan', 'nbcuniversal', 'mlb', 
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

      {/* Master Case Study Stack: Pure NJ Card Layout Mirror */}
      <section className="py-20 md:py-28 px-6 md:px-12 max-w-7xl mx-auto w-full space-y-24">
        
        {/* Case Study 1: The Boom Boom Room */}
        <div className="bg-[#050505] border border-neutral-900 rounded-lg overflow-hidden grid lg:grid-cols-2 shadow-2xl">
          <div className="relative aspect-[4/3] lg:aspect-auto min-h-[350px] bg-neutral-950">
            <img
              src="/images/dj-bmills-boom-standard-hotel-nyc-full-hero.jpg"
              alt="B.MILLS Performance at The Boom Boom Room NYC"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-500 block mb-3">
              Case Study I
            </span>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-4">
              Gagosian Gallery x <br />Avedon 100 Centennial
            </h2>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6 font-mono">
              The Boom Boom Room | Manhattan, NY
            </p>
            <div className="space-y-4 text-sm text-neutral-400 leading-relaxed font-light">
              <p>
                For the historic Avedon 100 celebration, B.MILLS directed the multi-floor sonic trajectory spanning across the entire 18th floor penthouse of The Standard High Line.
              </p>
              <p>
                Curating music for an elite cultural room featuring international tastemakers, designers, and brand directors, the sound progression demanded immaculate aesthetic calculation—carrying the evening effortlessly from crisp cocktail curation into a driving club room atmosphere.
              </p>
            </div>
          </div>
        </div>

        {/* Case Study 2: Equinox - Completely Corrected and Reworded */}
        <div className="bg-[#050505] border border-neutral-900 rounded-lg overflow-hidden grid lg:grid-cols-2 shadow-2xl">
          <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center order-2 lg:order-1">
            <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-500 block mb-3">
              Case Study II
            </span>
            <h2 className="text-2xl md:text-4xl font-light text-white tracking-tight mb-4">
              Equinox Annual <br />End-of-Year Celebration
            </h2>
            <p className="text-xs uppercase tracking-widest text-neutral-400 mb-6 font-mono">
              1,000+ Attendees | High-Scale Production
            </p>
            <div className="space-y-4 text-sm text-neutral-400 leading-relaxed font-light">
              <p>
                Commanding an audience of over 1,000 team members and corporate stakeholders for luxury lifestyle power player Equinox, this large-scale annual production demanded expert energy modulation.
              </p>
              <p>
                Leveraging premium transitions and seamless multi-genre versatility, B.MILLS crafted a high-octane experiential dance floor built completely around the intensity, movement, and performance values defining the brand's identity.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] lg:aspect-auto min-h-[350px] bg-neutral-950 order-1 lg:order-2">
            <img
              src="/images/bmills-equinox-event.png"
              alt="B.MILLS Live at Equinox End-of-Year Celebration"
              className="absolute inset-0 w-full h-full object-cover opacity-95 object-center"
            />
          </div>
        </div>

      </section>

      {/* Core Philosophies: Three High-Converting Pillars */}
      <section className="py-20 bg-[#030303] border-t border-neutral-900 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.5em] uppercase text-neutral-500 block mb-16 text-center">
            Execution Standards
          </span>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            <div className="border-t border-neutral-900 pt-8">
              <span className="font-mono text-[11px] text-neutral-600 block mb-4">01 / BRANDING ALIGNMENT</span>
              <h3 className="text-lg font-light text-white mb-3">Sonic Translation</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Music selection is meticulously aligned with collection mood boards, brand aesthetic profiles, and target demographics to ensure immediate spatial cohesion.
              </p>
            </div>
            <div className="border-t border-neutral-900 pt-8">
              <span className="font-mono text-[11px] text-neutral-600 block mb-4">02 / INTERIOR MANAGEMENT</span>
              <h3 className="text-lg font-light text-white mb-3">Acoustic Control</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Volume mapping and curation are engineered to accommodate high-level networking, protecting clear conversation flow while maintaining a sophisticated energy line.
              </p>
            </div>
            <div className="border-t border-neutral-900 pt-8">
              <span className="font-mono text-[11px] text-neutral-600 block mb-4">03 / PREMIUM COMPLIANCE</span>
              <h3 className="text-lg font-light text-white mb-3">Corporate Logistics</h3>
              <p className="text-sm text-neutral-400 leading-relaxed font-light">
                Fully credentialed execution backed by comprehensive multi-million dollar liability insurance certificates (COI), facilitating instant security clearance across all major production sites.
              </p>
            </div>
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
          animation: marqueeScroll 45s linear infinite;
          will-change: transform;
        }
        .marquee-row {
          display: flex;
          align-items: center;
          flex-shrink: 0;
        }
        .logo-slot {
          width: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          padding: 0 25px;
        }
        .logo-img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: brightness(0) invert(1);
          opacity: 0.2;
          transition: opacity 300ms ease;
        }
        .logo-img:hover {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
}
