import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const clients = [
  'LVMH', 'Gucci', 'CELINE', 'Moët & Chandon',
  'Disney', 'Supreme', 'Equinox', 'L\'Oréal',
  'Goldman Sachs', 'JP Morgan Chase', 'Google', 'Wieden+Kennedy',
  'New York City Ballet', 'Fanatics', 'The Standard Hotels', 'Tumi',
  'NBCUniversal', 'MLB', 'Mass Appeal', 'Kering Eyewear'
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
              key={client}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="flex items-center justify-center py-2 md:py-4 border-b border-border/30 md:border-none"
            >
              <span className="font-heading text-base md:text-2xl font-light text-foreground/70 md:text-foreground/60 hover:text-foreground transition-colors duration-500 cursor-default tracking-wide text-center">
                {client}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
