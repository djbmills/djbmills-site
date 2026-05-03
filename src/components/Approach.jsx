import { motion } from 'framer-motion';

export default function Approach() {
  return (
    <section
      className="py-20 md:py-28 px-6 md:px-12 relative overflow-hidden warm-grain"
      style={{ backgroundColor: '#ede8df' }}
    >
      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-4 mb-14 md:mb-16 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-foreground/30"
          >
            01
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
            className="font-body text-xs tracking-[0.3em] uppercase text-foreground/30"
          >
            The Approach
          </motion.span>
        </div>

        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5"
          >
            <h2
              className="font-heading text-[2.2rem] md:text-[3.1rem] lg:text-[3.6rem] font-light mb-8 leading-[1.03] tracking-[-0.02em]"
              style={{ color: '#161614' }}
            >
              No set formula. Only timing.
            </h2>

            <div className="space-y-6 max-w-[30rem]">
              <p
                className="font-body text-[0.95rem] md:text-[1rem] leading-[1.75] font-light"
                style={{ color: 'rgba(22, 22, 20, 0.72)' }}
              >
                Every event moves different. The music has to meet the space, the crowd, and the moment without forcing any of it.
              </p>

              <p
                className="font-body text-[0.95rem] md:text-[1rem] leading-[1.75] font-light"
                style={{ color: 'rgba(22, 22, 20, 0.72)' }}
              >
                Built in real time, adjusted as the energy shifts, and shaped to feel natural from the first arrival to the last record.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7"
          >
            <div className="relative overflow-hidden bg-black/5 aspect-[4/3] md:aspect-[5/4] group">
  <img
    src="/images/bmills-approach.png"
    alt="The Approach"
    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
  />

  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />

  <div className="absolute bottom-3 right-3 z-10 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-300">
    <p className="font-body text-[10px] md:text-[11px] font-light tracking-[0.08em] uppercase text-white">
      Photo by{' '}
      <a
        href="https://instagram.com/vnina"
        target="_blank"
        rel="noopener noreferrer"
        className="underline underline-offset-4 pointer-events-auto"
      >
        Nina
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
