import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: 'DJ B.Mills is as good as it gets - he made me and my wife\'s after party one of the most special stretches of our wedding evening. He was so fun to work with and very professional. He played all our favorite songs and brought our vision to life.',
    name: 'Noah',
    title: 'Wedding After Party',
  },
  {
    quote: 'Your music choices during cocktails, dinner and after dinner were so thoughtful and fun. At every point in the night, the music was a perfect complement and perfectly suited our guests and atmosphere.',
    name: 'Allison & Jay',
    title: 'Private Event',
  },
  {
    quote: 'Thanks again for helping make our 42nd Founder\'s Day absolutely legendary! The jams, the vibes, were all on point. We had countless folks coming up to us praising the tracks you were playing.',
    name: 'Chris & Jennifer',
    title: 'WKNY',
  },
  {
    quote: 'We thank you for your availability and excellent performance, which perfectly matched what we wanted for this event!',
    name: 'Maria',
    title: 'Fiere di Parma',
  },
  {
    quote: 'We loved having you there - it definitely made the night a celebration, and your energy was incredible.',
    name: 'Gabby',
    title: 'The Windward School',
  },
  {
    quote: 'Everyone had a blast and you\'re a pleasure to work with! I\'m sure we\'ll be in touch in the new year to book you again.',
    name: 'Kate',
    title: 'NBCUniversal',
  },
  {
    quote: 'Brian provided an AMAZING atmosphere for my wedding. He kept everyone on the dance floor the ENTIRE time! He knows what music to play and how to keep the party and vibes going. I\'d recommend him for ANY occasion.',
    name: 'Raven',
    title: 'Wedding Reception',
  },
];

export default function ClientFeedback() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prev = () => {
    setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  };

  const next = () => {
    setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
  };

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));
    }, 7000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const t = testimonials[current];

  return (
    <section
      id="feedback"
      className="pt-16 md:pt-24 pb-24 md:pb-36 px-6 md:px-12 bg-foreground"
    >
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-16 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-xs tracking-[0.4em] uppercase text-background/30"
          >
            06
          </motion.span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="flex-1 h-px bg-background/10 origin-left"
          />

          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-background/30"
          >
            Testimonials
          </motion.span>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-light text-background mb-16">
              Client Words
            </h2>
          </motion.div>

          <div
            className="relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <Quote className="w-10 h-10 text-background/10 mx-auto mb-8" />

            <div className="relative max-w-3xl mx-auto min-h-[320px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 1.1, ease: 'easeInOut' }}
                  className="absolute inset-0 flex flex-col justify-between"
                >
                  <p className="font-heading text-xl md:text-2xl lg:text-3xl font-light text-background leading-[1.4] italic">
                    "{t.quote}"
                  </p>

                  <div className="mt-10">
                    <div className="w-8 h-px bg-background/20 mx-auto mb-6" />
                    <p className="font-body text-sm tracking-wider text-background/80 uppercase">
                      {t.name}
                    </p>
                    <p className="font-body text-xs text-background/40 mt-1">
                      {t.title}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex items-center justify-center gap-6 mt-12">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/40 hover:text-background hover:border-background/60 transition-all duration-300"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <span className="font-body text-xs text-background/30 tracking-widest">
                {String(current + 1).padStart(2, '0')} / {String(testimonials.length).padStart(2, '0')}
              </span>

              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-12 h-12 rounded-full border border-background/20 flex items-center justify-center text-background/40 hover:text-background hover:border-background/60 transition-all duration-300"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
