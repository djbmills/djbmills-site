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

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '8%']);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.04, 1]);

  return (
    <section
      ref={ref}
      className="relative py-20 md:py-28 px-6 md:px-12 border-b border-border bg-background overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.1,
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8 md:gap-12 mb-14 md:mb-20">
            <p className="font-display text-[4.5rem] md:text-[5.75rem] text-foreground leading-none tracking-wide">
              B.MILLS
            </p>

            <p className="font-body text-[10px] md:text-xs tracking-[0.28em] md:tracking-[0.4em] uppercase text-muted-foreground md:text-right max-w-md">
              Brand Culture / Music Direction / After Dark
            </p>
          </div>

          <h1 className="font-heading text-[clamp(3rem,8vw,8.5rem)] font-light text-foreground leading-none tracking-[-0.04em]">
            Event Sound Director
          </h1>

          <p className="font-body text-base text-muted-foreground leading-relaxed mt-8 max-w-3xl">
            Curated sound for brand events and private rooms. B.MILLS creates
            elevated open format DJ sets for product launches, executive dinners,
            cultural moments, and afterparties across New York City and beyond.
            Shaping soundtracks as part of the atmosphere, not as an
            afterthought.
          </p>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.35,
          }}
          className="h-px bg-border origin-left mt-12 md:mt-14"
        />

        <motion.div
          initial={{ opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.45,
          }}
          className="relative mt-10 md:mt-12 overflow-hidden bg-black/5 aspect-[4/5] md:aspect-[2048/1365]"
        >
          <motion.div
            className="absolute inset-0"
            style={{ y: imageY, scale: imageScale }}
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
          transition={{ delay: 1.4 }}
          className="hidden md:flex justify-center mt-10 text-foreground/30 hover:text-foreground/60 transition-colors"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </div>
    </section>
  );
}
