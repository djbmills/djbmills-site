import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ABOUT_IMG = "/images/bmills-about.jpg";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-4%', '4%']);
  return (
    <section id="about" ref={ref} className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden">
      <motion.div style={{ y }} className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4 mb-16 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">02</motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="flex-1 h-px bg-border origin-left" />
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">The Artist</motion.span>
        </div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Image */}
         <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="relative group">

          <img src="https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/666c796e7_BEAZLEY_NYC_MARCH2023_PHOTOBY_LARUFOTO_LUISRUIZ_000074.jpg"

          alt="Professional DJ portrait in luxury setting" className="w-full aspect-[3/4] object-cover" />

          <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
            <p className="font-body text-xs font-light text-white tracking-wide">
              Photo by{' '}
              <a
                href="https://www.instagram.com/larufoto/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-80 transition-opacity">
                
                Luis
              </a>
            </p>
          </div>

          <div className="absolute -bottom-4 -right-4 w-full h-full border border-foreground/10 -z-10" />
        </motion.div>

        {/* Text */}
         <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="flex flex-col">
          

          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight">A distinct musical point of view



          </h2>
          <div className="w-12 h-px bg-foreground/20 mb-8" />
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">Based in New York City, B.Mills curates music for luxury brands, cultural institutions, and private hosts who understand that what you hear shapes how a night feels.</p>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-4">His foundation is built on the kind of records that don't age. Rhythm, tone, and selection come first, layered with house, disco, and modern sounds that move naturally with the room. Nothing forced.</p>
          <p className="font-body text-sm md:text-base text-muted-foreground leading-relaxed mb-8">From cocktail hours to after hours, the approach stays consistent. Read the room. Adjust in real time. Let the energy build where it should.</p>
          
          <p className="font-heading text-lg font-light italic text-foreground/60">Never background music. Always part of the moment.</p>
        </motion.div>
        </div>
      </motion.div>
    </section>);

}
