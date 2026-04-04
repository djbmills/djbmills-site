import { motion } from 'framer-motion';

export default function Approach() {
  return (
    <section
      className="py-24 md:py-40 px-6 md:px-12 relative overflow-hidden warm-grain"
      style={{ backgroundColor: '#ede8df' }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4 mb-16 md:mb-20 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-xs tracking-[0.4em] uppercase text-foreground/30"
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
            className="font-body text-xs tracking-[0.3em] uppercase text-foreground/30"
          >
            The Approach
          </motion.span>
        </div>

        <div className="grid md:grid-cols-12 gap-14 md:gap-20 items-start">
          
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <div className="max-w-xl">
              <h2
                className="font-heading text-[3rem] md:text-[4.5rem] lg:text-[5.25rem] font-light mb-10 md:mb-12 leading-[0.95] tracking-[-0.03em]"
                style={{ color: '#161614' }}
              >
                No set formula. Only timing.
              </h2>

              <div className="space-y-7 md:space-y-8 max-w-md md:max-w-lg">
                <p
                  className="font-body text-[1rem] md:text-[1.06rem] leading-[1.9]"
                  style={{ color: 'rgba(22, 22, 20, 0.82)' }}
                >
                  Every event moves differently. The music has to meet the space, the crowd, and the moment without forcing any of it.
                </p>

                <p
                  className="font-body text-[1rem] md:text-[1.06rem] leading-[1.9]"
                  style={{ color: 'rgba(22, 22, 20, 0.82)' }}
                >
                  Built in real time, adjusted as the energy shifts, and shaped to feel natural from the first arrival to the last record.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="relative overflow-hidden bg-black/5 aspect-[4/5] md:aspect-[5/6] group">
              <img
                src="/images/bmills-approach.jpg"
                alt="The Approach"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

              {/* Photo credit */}
              <div className="absolute bottom-4 right-4">
                <p className="font-body text-[11px] md:text-xs font-light tracking-[0.08em] uppercase text-white/60 group-hover:text-white/80 transition-colors duration-300">
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
          </motion.div>

        </div>
      </div>
    </section>
  );
}
