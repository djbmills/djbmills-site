import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HERO_WEBP = '/images/nyc-event-dj-bmills-hero.webp';
const HERO_FALLBACK = '/images/bmills-hero.png';

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    ['0%', '14%']
  );

  const scaleDesktop = useTransform(
    scrollYProgress,
    [0, 1],
    [1.04, 1]
  );

  return (
    <>
      <h1 className="sr-only">
        New York City Event DJ and Music Direction for Corporate Events, Brand
        Activations, and Afterparties
      </h1>

      {/* ── MOBILE LAYOUT ── */}
      <section
        ref={ref}
        className="flex flex-col md:hidden bg-white overflow-hidden"
      >
        <div className="w-full h-[440px] overflow-hidden bg-white relative">
          <picture className="block w-full h-full">
            <source
              srcSet={HERO_WEBP}
              type="image/webp"
            />

            <img
              src={HERO_FALLBACK}
              alt="B.MILLS, New York City event DJ and music director"
              width="1448"
              height="1086"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-[60%_12%]"
            />
          </picture>
        </div>

        <div className="px-6 pt-10 pb-14 bg-white relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-[10px] tracking-[0.28em] uppercase text-foreground/50 mb-5"
          >
            Curator · DJ · Atmosphere
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-[4.5rem] text-foreground leading-none tracking-wide mb-7"
          >
            B.MILLS
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="w-14 h-px bg-foreground/25 mb-7 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="font-body text-xs tracking-[0.15em] uppercase text-foreground/60 max-w-[240px]"
          >
            Less talk. Better music.
          </motion.p>
        </div>
      </section>

      {/* ── DESKTOP LAYOUT ── */}
      <section
        ref={ref}
        className="relative h-screen w-full overflow-hidden bg-white hidden md:block"
      >
        <div className="absolute inset-y-0 right-0 w-[62%] overflow-hidden bg-white">
          <picture className="block w-full h-full">
            <source
              srcSet={HERO_WEBP}
              type="image/webp"
            />

            <motion.img
              src={HERO_FALLBACK}
              alt="B.MILLS, corporate event DJ and music director in New York City"
              width="1448"
              height="1086"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-[30%_top]"
              style={{
                y: yDesktop,
                scale: scaleDesktop,
              }}
            />
          </picture>

          <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-white via-white/70 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-16 lg:px-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4"
          >
            Curator · DJ · Atmosphere
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-[9rem] lg:text-[11rem] text-foreground leading-none tracking-wide"
          >
            B.MILLS
          </motion.div>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="w-16 h-px bg-foreground/25 my-6 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="font-body text-sm tracking-[0.2em] uppercase text-foreground/50 max-w-xs"
          >
            Less talk. Better music.
          </motion.p>
        </div>

        <motion.a
          href="#clients"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/30 hover:text-foreground/60 transition-colors z-10"
          aria-label="Scroll to past clients"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </section>
    </>
  );
}
