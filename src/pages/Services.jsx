import { motion } from 'framer-motion';
import PageHero from '../components/PageHero';
import SEOHeading from '../components/SEOHeading';
import InquiryFooter from '../components/InquiryFooter';
import BookNowCTA from '../components/BookNowCTA';

const brandLogos = [
  'oracle', 'tumi', 'celine', 'sohohouse', 'equinox', 'polymarket', 'goldmansachs',
  'disney', 'lvmh', 'gucci', 'jpmorgan', 'nbcuniversal',
  'mlb', 'fanatics', 'citi', 'google'
];

const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'DJ Services by B.MILLS',
  provider: {
    '@type': 'Person',
    name: 'Brian Mills',
    alternateName: 'B.MILLS',
    url: 'https://djbmills.com/'
  },
  areaServed: [
    'New York City',
    'The Hamptons',
    'Westchester',
    'New Jersey',
    'South Florida'
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'B.MILLS Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Music Direction for Brand Events'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'In Store DJ Sets'
        }
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Recorded Mixes'
        }
      }
    ]
  }
};

const services = [
  {
    number: '01',
    title: 'Music Direction for Brand Events',
    body: 'Music built around the brand and the room, never a standard playlist. Activations, launches, fashion shows, and pop ups, planned with the run of show so the sound carries the same idea as everything else in the room.'
  },
  {
    number: '02',
    title: 'In Store Sets',
    body: 'Live sets in the store for launches, openings, and campaign moments. The music matches the collection and the crowd in the room, at a volume that lets people shop and talk. Sound can be brought in on a slim setup that blends into the room and holds the level at ambiance, so a store with no system of its own is covered.'
  },
  {
    number: '03',
    title: 'Recorded Mixes',
    body: 'Mixes recorded to a brief for spaces that need the sound without a DJ in the room. Stores, gyms, and lobbies, built around a campaign, a season, or a time of day.'
  }
];

export default function Services() {
  return (
    <div className="w-full min-h-screen bg-background overflow-x-hidden">
      <SEOHeading
        title="In Store DJ & Brand Event Services in NYC | B.MILLS"
        description="B.MILLS offers music direction for brand events, live in store DJ sets for retail launches, openings, and campaign moments, and recorded mixes made to brief. Based in New York City, serving the Hamptons, New Jersey, and South Florida."
        keywords="in store DJ NYC, retail DJ New York, store opening DJ NYC, retail event DJ, in store music programming, brand event music direction NYC, product launch DJ, recorded mixes for retail, DJ services NYC, B.MILLS services"
        url="https://djbmills.com/services"
        schema={servicesSchema}
      />

      <PageHero
        label="Services"
        headline="Three ways to work together."
        subheadline="Music direction for brand events, live sets in store, and mixes recorded to brief."
      />

      {/* Section: Professional Brand Marquee */}
      <section className="relative w-full pt-20 pb-16 border-b border-border bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-10 relative z-10">
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-muted-foreground text-center">
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
                      alt={`${brand} logo`}
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
            filter: grayscale(1);
            opacity: 0.48;
            transition: opacity 500ms ease, filter 500ms ease;
          }
          .logo-img:hover {
            opacity: 0.9;
            filter: grayscale(0);
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

      <BookNowCTA />

      {/* Services List */}
      <section className="w-full py-20 md:py-28 px-6 md:px-12 bg-background">
        <div className="max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: index * 0.1 }}
              className="border-t border-border pt-10 pb-14 last:pb-0"
            >
              <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-6 lg:gap-14 items-start">
                <div>
                  <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-5">
                    {service.number}
                  </p>
                  <h2 className="font-heading text-3xl md:text-4xl font-light text-foreground leading-tight">
                    {service.title}
                  </h2>
                </div>
                <p className="font-body text-base text-muted-foreground leading-relaxed max-w-2xl">
                  {service.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <BookNowCTA placement="services_list" />

      {/* Also Available */}
      <section className="w-full py-16 md:py-20 px-6 md:px-12 border-t border-border bg-background">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
          <a href="/corporate-events" className="group block">
            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground leading-tight mb-4">
              Corporate Events
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
              Galas, company parties, and end of year events across New York City.
            </p>
            <span className="font-body text-[11px] tracking-[0.25em] uppercase text-foreground border-b border-foreground/30 group-hover:border-foreground transition-colors pb-1">
              Corporate Events
            </span>
          </a>
          <a href="/afterparties" className="group block">
            <h3 className="font-heading text-2xl md:text-3xl font-light text-foreground leading-tight mb-4">
              Afterparties
            </h3>
            <p className="font-body text-base text-muted-foreground leading-relaxed mb-5">
              Late night sets for wedding and corporate afterparties.
            </p>
            <span className="font-body text-[11px] tracking-[0.25em] uppercase text-foreground border-b border-foreground/30 group-hover:border-foreground transition-colors pb-1">
              Afterparties
            </span>
          </a>
        </div>
      </section>

      <InquiryFooter />
    </div>
  );
}
