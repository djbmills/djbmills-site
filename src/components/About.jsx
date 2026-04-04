import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ABOUT_IMG = "/images/bmills-about-hero.png";

export default function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-3%', '3%']);

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden"
    >
      <motion.div style={{ y }} className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-4 mb-14 md:mb-16 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground"
          >
            02
          </motion.span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex-1 h-px bg-border origin-left"
          />

          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground"
          >
            The Artist
          </motion.span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
            className="relative group md:col-span-5"
          >
            <div className="relative overflow-hidden bg-black/5 aspect-[4/5] md:aspect-[5/6]">
              <img
                src={ABOUT_IMG}
                alt="Professional DJ portrait in luxury setting"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

              <div className="absolute bottom-3 right-3">
                <p className="font-body text-[10px] md:text-[11px] font-light tracking-[0.08em] uppercase text-white/60 group-hover:text-white/80 transition-colors duration-300">
                  Photo by{' '}
                  <a
                    href="https://www.instagram.com/larufoto/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4"
                  >
                    Luis
                  </a>
                </p>
              </div>
            </div>

            <div className="absolute -bottom-3 -right-3 w-full h-full border border-foreground/10 -z-10" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="flex flex-col md:col-span-7"
          >
            <h2 className="font-heading text-[2.4rem] md:text-[3.4rem] lg:text-[4rem] font-light mb-7 md:mb-8 leading-[1.03] tracking-[-0.02em]">
              A distinct musical point of view
            </h2>

            <div className="w-10 h-px bg-foreground/20 mb-7 md:mb-8" />

            <div className="max-w-xl space-y-5">
              <p className="font-body text-[0.98rem] md:text-[1.05rem] text-muted-foreground leading-[1.75] font-light">
                Based in New York City, B.Mills curates music for luxury brands, cultural institutions, and private hosts who understand that what you hear shapes how a night feels.
              </p>

              <p className="font-body text-[0.98rem] md:text-[1.05rem] text-muted-foreground leading-[1.75] font-light">
                His foundation is built on the kind of records that don't age. Rhythm, tone, and selection come first, layered with house, soul, and modern sounds that move naturally with the room.
              </p>

              <p className="font-body text-[0.98rem] md:text-[1.05rem] text-muted-foreground leading-[1.75] font-light">
                From cocktail hours to after hours, the approach stays consistent. Feel it. Adjust in real time. Let the energy build where it should.
              </p>
            </div>

            <p className="font-heading text-[1.05rem] md:text-[1.2rem] font-light italic text-foreground/60 mt-8 md:mt-10">
              Never background music. Always part of the moment.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
