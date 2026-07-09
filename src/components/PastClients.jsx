import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

// Factual, heavy-hitting operational metadata built directly from your actual track record
const clients = [
  { name: 'LVMH', context: 'Premium brand event music direction and sound curation for LVMH by B.MILLS.' },
  { name: 'Gucci', context: 'Corporate year-end celebration and New Year kickoff party live DJ set and music direction for Gucci executives in NYC.' },
  { name: 'CELINE', context: 'Regional internal managers executive meeting, celebration dinner, and sound curation for CELINE in Brooklyn.' },
  { name: 'Moët & Chandon', context: 'Luxury event sound design and premium private room music curation for Moët & Chandon.' },
  { name: 'Disney', context: 'Live-action Aladdin film launch activation music direction, influencer event, and sound curation for Disney at the Bryant Park Hotel.' },
  { name: 'Supreme', context: 'Official brand event afterparty music curation and hip hop sound design for Supreme at Up & Down NYC.' },
  { name: 'Equinox', context: 'High-energy corporate holiday party and year-end celebration live DJ set for 1,000+ Equinox employees and executives.' },
  { name: 'L\'Oréal', context: 'Corporate holiday party music direction and multi-year event sound curation for L\'Oréal in New York City.' },
  { name: 'Goldman Sachs', context: 'Robin Hood Goldman Sachs Summit music curation, sit-down dinner, and cocktail hour sound design at Metropolis NYC featuring Caitlin Clark.' },
  { name: 'JP Morgan Chase', context: 'Corporate year-end celebration and executive networking music direction for JP Morgan Chase.' },
  { name: 'Google', context: 'Tech brand launches, internal manager meetings, cocktail receptions, and corporate holiday parties for Google NYC.' },
  { name: 'Wieden+Kennedy', context: 'Annual Founders Day celebration music direction and live DJ performance for Wieden+Kennedy at The Standard Boom Boom Room and The Glasshouse NYC.' },
  { name: 'New York City Ballet', context: 'Biannual Young Patrons post-performance gala party sound direction, cocktail reception music, and dance atmosphere at Lincoln Center David H. Koch Theater Promenade.' },
  { name: 'Fanatics', context: 'Corporate end-of-year celebration and holiday party live DJ set for Fanatics and Tops Trading Card divisions in New York City.' },
  { name: 'The Standard Hotels', context: 'Preferred venue vendor music direction, industry preview events, and premium private party sound styling for The Standard Hotels NYC.' },
  { name: 'Tumi', context: 'Premium travel showcase footprint and luxury brand end-of-year corporate celebration sound design for Tumi.' },
  { name: 'NBCUniversal', context: 'Multi-year corporate holiday party live DJ set and music direction for NBCUniversal HR divisions in downtown New York City.' },
  { name: 'MLB', context: 'Major League Baseball internal corporate end-of-year celebration sound design and live DJ set for 1,200+ guests.' },
  { name: 'Mass Appeal', context: 'Digital experience exposition launch live DJ set and multimedia event sound curation for Mass Appeal at Hall des Lumières.' },
  { name: 'Kering Eyewear', context: 'Luxury collection release cocktail reception and commercial buyers preview event music direction at The Standard Boom Boom Room.' }
];

export default function PastClients() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <section id="clients" ref={ref} className="py-24 md:py-36 px-6 md:px-12 bg-background border-t border-border relative overflow-hidden">
      <motion.div style={{ y }} className="max-w-7xl mx-auto relative">
        
        {/* Section Header with Renumbered Detail */}
        <div className="flex items-center gap-4 mb-16 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground"
          >
            01
          </motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="flex-1 h-px bg-border origin-left" 
          />
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground"
          >
            Clients
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-light text-foreground mb-4">
            In Good Company
          </h2>
          <p className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">
            Selected clients across fashion, finance, media, and culture
          </p>
        </motion.div>

        {/* Brand Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-4 md:gap-x-12 md:gap-y-16">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center justify-center py-2 md:py-4 border-b border-border/30 md:border-none"
            >
              {/* Using aria-label to cleanly pass the hidden industry metadata straight to search indexes */}
              <span 
                aria-label={client.context}
                className="font-heading text-base md:text-2xl font-light text-foreground/70 md:text-foreground/60 hover:text-foreground transition-colors duration-500 cursor-default tracking-wide text-center"
              >
                {client.name}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
