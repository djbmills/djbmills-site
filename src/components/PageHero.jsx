import { motion } from 'framer-motion';

export default function PageHero({ label, headline, subheadline, image, imageAlt }) {
  return (
    <section className="border-b border-border" style={{ backgroundColor: '#f3eee2' }}>
      <div className="py-24 md:py-40 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground mb-6"
          >
            {label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl font-light text-foreground mb-8 leading-tight"
          >
            {headline}
          </motion.h1>
          {subheadline && (
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-heading text-xl md:text-2xl font-light text-muted-foreground italic max-w-3xl mx-auto"
            >
              {subheadline}
            </motion.p>
          )}
        </div>
      </div>
      {image && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="px-6 md:px-12 pb-16 md:pb-24"
        >
          <div className="max-w-2xl mx-auto">
            <img
              src={image}
              alt={imageAlt || headline}
              className="w-full h-auto object-cover"
            />
          </div>
        </motion.div>
      )}
    </section>
  );
}