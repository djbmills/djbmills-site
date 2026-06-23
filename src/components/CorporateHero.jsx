import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HERO_IMG = '/images/dj-bmills-boom-standard-hotel-nyc-full-hero.jpg';
const HERO_IMG_MOBILE = '/images/dj-bmills-boom-standard-hotel-nyc-mobile.jpg';

export default function CorporateHero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yDesktop = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const yMobile = useTransform(scrollYProgress, [0, 1], ['0%', '4%']);
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 px-6 md:px-12 border-b border-border bg-[#f0eeeb] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
        >
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.3em] uppercase text-foreground/50 md:text-foreground/40 mb-5"
          >
            Event Sound Director
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-[4.5rem] md:text-[9rem] lg:text-[11rem] text-foreground leading-none tracking-wide"
          >
            B.MILLS
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="w-14 md:w-16 h-px bg-foreground/25 my-7 md:my-6 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="font-body text-sm md:text-base text-foreground/55 md:text-muted-foreground leading-relaxed max-w-3xl"
          >
            Curated sound for brand events and private rooms. B.MILLS creates
            elevated open format DJ sets for product launches, executive dinners,
            cultural moments, and afterparties across New York City and beyond.
            Shaping soundtracks as part of the atmosphere, not as an afterthought.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 1.45 }}
          className="h-px bg-border origin-left mt-12 md:mt-14"
        />

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 1.55 }}
          className="relative mt-10 md:mt-12 overflow-hidden bg-black/5 aspect-[4/5] md:aspect-[2048/1365]"
        >
          <motion.div
            className="absolute inset-0"
            style={{
              y: typeof window !== 'undefined' && window.innerWidth < 768 ? yMobile : yDesktop,
              scale,
            }}
          >
            <picture>
              <source
                media="(max-width: 768px)"
                srcSet={HERO_IMG_MOBILE}
              />

              <img
                src={HERO_IMG}
                alt="B.MILLS providing music direction for a brand event at Boom at The Standard, High Line"
                className="w-full h-full object-cover object-center"
              />
            </picture>
          </motion.div>

          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,.26)_0%,rgba(0,0,0,.035)_24%,rgba(0,0,0,0)_64%)]" />

          <p className="absolute left-5 bottom-5 md:left-8 md:bottom-7 font-body text-[9px] md:text-[10px] tracking-[0.28em] uppercase text-white/65">
            Boom at The Standard, High Line
          </p>
        </motion.div>

        <motion.a
          href="#content"
          aria-label="Scroll down"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="hidden md:flex justify-center mt-10 text-foreground/30 hover:text-foreground/60 transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
