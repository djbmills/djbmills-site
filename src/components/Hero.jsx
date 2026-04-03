import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const HERO_IMG = "/images/bmills-hero.jpg";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  // Desktop: slightly more movement
  const yDesktop = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  // Mobile: very subtle
  const yMobile = useTransform(scrollYProgress, [0, 1], ['0%', '6%']);
  // Shared: imperceptible scale-down
  const scale = useTransform(scrollYProgress, [0, 1], [1.04, 1.0]);

  return (
    <>
      {/* ── MOBILE LAYOUT (hidden on md+) ── */}
      <section ref={ref} className="flex flex-col md:hidden bg-[#f0eeeb]">
        {/* Image */}
        <div className="w-full h-[58vh] overflow-hidden">
          <motion.img
            src={HERO_IMG}
            alt="B.Mills"
            className="w-full h-full object-cover object-[60%_12%]"
            style={{ y: yMobile, scale }}
          />
        </div>

        {/* Text block */}
        <div className="px-6 pt-10 pb-14 bg-[#f0eeeb]">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-[10px] tracking-[0.28em] uppercase text-foreground/50 mb-5"
          >
            DJ. Curator. Atmosphere.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-[4.5rem] text-foreground leading-none tracking-wide mb-7"
          >
            B.MILLS
          </motion.h1>

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
            The DJ behind the room you didn't want to leave.
          </motion.p>
        </div>
      </section>

      {/* ── DESKTOP LAYOUT (hidden on mobile) ── */}
      <section ref={ref} className="relative h-screen w-full overflow-hidden bg-[#f0eeeb] hidden md:block">
        {/* Photo — anchored right */}
        <div className="absolute inset-y-0 right-0 w-[62%] overflow-hidden">
          <motion.img
            src={HERO_IMG}
            alt="B.Mills"
            className="w-full h-full object-cover object-[30%_top]"
            style={{ y: yDesktop, scale }}
          />
          <div className="absolute inset-y-0 left-0 w-56 bg-gradient-to-r from-[#f0eeeb] via-[#f0eeeb]/70 to-transparent" />
        </div>

        {/* Text — left side */}
        <div className="relative z-10 h-full flex flex-col justify-center px-16 lg:px-24">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-foreground/40 mb-4"
          >
            DJ · Curator · Atmosphere
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="font-display text-[9rem] lg:text-[11rem] text-foreground leading-none tracking-wide"
          >
            B.MILLS
          </motion.h1>

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
            The DJ behind the room you didn't want to leave.
          </motion.p>
        </div>

        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/30 hover:text-foreground/60 transition-colors z-10"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.a>
      </section>
    </>
  );
}
