import { motion } from 'framer-motion';

export default function Approach() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 relative overflow-hidden warm-grain" style={{ backgroundColor: '#ede8df' }}>

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-center gap-4 mb-16 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-xs tracking-[0.4em] uppercase text-foreground/30">01</motion.span>
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
            className="font-body text-xs tracking-[0.3em] uppercase text-foreground/30">The Approach</motion.span>
        </div>
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
          {/* Left side — Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            
            <h2 className="font-heading text-5xl md:text-6xl font-light mb-12 leading-tight" style={{ color: '#161614' }}>
              No set formula. Only timing.
            </h2>

            <div className="space-y-8">
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#161614' }}>
                Every event moves differently. The music has to meet the space, the crowd, and the moment without forcing any of it.
              </p>
              
              <p className="font-body text-sm md:text-base leading-relaxed" style={{ color: '#161614' }}>
                Built in real time, adjusted as the energy shifts, and shaped to feel natural from the first arrival to the last record.
              </p>
            </div>
          </motion.div>

          {/* Right side — Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="h-full overflow-hidden group relative"
          >
            <img
              src="/images/bmills-approach.jpg"
              alt="The Approach"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <p className="font-body text-xs font-light text-white tracking-wide">
                Photo by{' '}
                <a
                  href="https://www.instagram.com/larufoto/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:opacity-80 transition-opacity"
                >
                  Luis
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
