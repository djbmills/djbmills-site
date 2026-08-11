import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  // COLUMN 1 (Top Left -> Down)
  { 
    src: "/images/nyc-luxury-corporate-dj-hall-des-lumieres-bmills.jpg", 
    alt: "B.MILLS DJ performing at luxury corporate event in New York City" 
  },
  { 
    src: "/images/nyc-event-hall-des-lumieres-abigail-kirsch-bmills.jpg", 
    alt: "Upscale NYC event with B.MILLS DJing for corporate audience" 
  },
  { 
    src: "/images/nyc-hospitality-alliance-anniversary-dj-bmills.jpg", 
    alt: "B.MILLS DJ set at luxury brand activation in New York" 
  },
  { 
    src: "/images/nyc-citibank-union-square-outdoor-dj-bmills.jpg", 
    alt: "Elegant corporate gala atmosphere with live DJ performance by B.MILLS" 
  },
  { 
    src: "/images/nyc-fanatics-topps-event-dj-bmills.jpg", 
    alt: "Fanatics Topps event in NYC with B.MILLS DJ" 
  },

  // COLUMN 2 (Top Column 2 -> Down)
  { 
    src: "/images/nyc-corporate-gala-confetti-dj-bmills.jpg", 
    alt: "B.MILLS DJ creating atmosphere at upscale Manhattan event" 
  },
  { 
    src: "/images/nyc-kering-eyewear-cocktail-reception-boom-boom-room-standard-high-line-dj-bmills.jpg", 
    alt: "B.MILLS DJ performing at Kering Eyewear cocktail reception at Boom Boom Room at The Standard, High Line in NYC" 
  },
  { 
    src: "/images/nyc-luxury-hotel-lounge-dj-bmills.jpg", 
    alt: "Guests enjoying music during curated DJ set by B.MILLS" 
  },
  { 
    src: "/images/nyc-ballet-young-patrons-lincoln-center-david-h-koch-theater-dj-bmills.jpg", 
    alt: "B.MILLS DJing for New York City Ballet Young Patrons event in the David H. Koch Theater Promenade at Lincoln Center",
    credit: true 
  },
  { 
    src: "/images/nyc-windward-school-fundraising-gala-pier-60-dj-bmills.jpg", 
    alt: "B.MILLS DJ performing at The Windward School fundraising gala at Pier 60 Chelsea Piers in New York City" 
  },

  // COLUMN 3 (Top Column 3 -> Down)
  { 
    src: "/images/nyc-corporate-gala-dj-booth-bmills.jpg", 
    alt: "B.MILLS DJ at premium corporate function in New York City" 
  },
  { 
    src: "/images/nyc-windward-school-gala-dinner-pier-60-dj-bmills.jpg", 
    alt: "Crowd and audience during dinner and live presentation at The Windward School fundraising gala at Pier 60 in Chelsea Piers, NYC" 
  },
  { 
    src: "/images/nyc-ballet-portrait-lincoln-center-david-h-koch-theater-dj-bmills.jpg", 
    alt: "Portrait of B.MILLS DJ in the David H. Koch Theater Promenade at Lincoln Center in New York City",
    credit: true 
  },
  { 
    src: "/images/nyc-hornitos-tequila-cinco-de-mayo-brand-activation-dj-bmills.jpg", 
    alt: "B.MILLS DJing Hornitos Tequila brand activation for Cinco de Mayo event in Manhattan's Upper East Side" 
  },

  // COLUMN 4 (Top Column 4 -> Down)
  { 
    src: "/images/atlantic-city-haven-nightclub-golden-nugget-co2-dj-bmills.jpg", 
    alt: "B.MILLS spraying CO2 canon from DJ booth over crowd at Haven Nightclub inside Golden Nugget Casino in Atlantic City" 
  },
  { 
    src: "/images/nyc-gucci-start-of-year-celebration-dj-bmills.jpg", 
    alt: "B.MILLS DJing with Gucci branding in background for Gucci internal start-of-year celebration event in NYC" 
  },
  { 
    src: "/images/nyc-boom-boom-room-standard-high-line-cocktail-reception-dj-bmills.jpg", 
    alt: "B.MILLS DJ performance during cocktail reception at Boom Boom Room at The Standard, High Line in downtown NYC" 
  },
  { 
    src: "/images/nyc-ballet-young-patrons-dancing-lincoln-center-dj-bmills.jpg", 
    alt: "Guests dancing during post-performance New York City Ballet Young Patrons event at David H. Koch Theater Promenade at Lincoln Center",
    credit: true 
  },

  // MOBILE-ONLY LOCALIZED ADDITIONS
  { 
    src: "/images/brooklyn-red-hook-pioneer-works-1800-tequila-dustin-yellin-dj-bmills.jpg", 
    alt: "B.MILLS DJ performance at 1800 Tequila Dustin Yellin Essential Artists Series bottle release party at Pioneer Works in Red Hook, Brooklyn", 
    mobileOnly: true 
  },
  { 
    src: "/images/nyc-hall-des-lumieres-grand-opening-dj-booth-bmills-optimized.webp",
    alt: "Rear shot of B.MILLS DJ booth overlooking crowd at Hall des Lumières grand opening in New York City", 
    mobileOnly: true 
  },
  { 
    src: "/images/southampton-hamptons-summer-private-event-dj-bmills-optimized.webp", 
    alt: "B.MILLS curating sounds for a private summer client event in Southampton, Long Island", 
    mobileOnly: true 
  },
  { 
    src: "/images/nyc-union-square-citibank-dj-battle-rush-hour-bmills-optimized.webp",
    alt: "B.MILLS competing in the Citibank sponsored DJ battle in Union Square Park during NYC rush hour", 
    mobileOnly: true 
  }
];

export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visiblePhotos = photos.filter(
    (photo) => !photo.mobileOnly || isMobile
  );

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === 0 ? visiblePhotos.length - 1 : i - 1));
  const next = () => setLightboxIndex((i) => (i === visiblePhotos.length - 1 ? 0 : i + 1));

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [lightboxIndex]);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, visiblePhotos.length]);

  return (
    <section id="events" className="pt-16 md:pt-24 pb-6 md:pb-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground"
          >
            05
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
            Gallery
          </motion.span>
        </div>

        <h2 className="font-heading text-4xl md:text-6xl font-light mb-8">
          Inside the Room
        </h2>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
          {visiblePhotos.map((photo, i) => (
            <div
              key={photo.src}
              className="break-inside-avoid group relative overflow-hidden cursor-pointer mb-3"
              onClick={() => openLightbox(i)}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

              {photo.credit && (
                <div className="absolute bottom-3 right-3 z-10 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                  <p className="font-body text-[10px] md:text-[11px] font-light tracking-[0.08em] uppercase text-white">
                    Photo by{' '}
                    <a
                      href="https://instagram.com/vnina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 pointer-events-auto"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Nina
                    </a>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/50 hover:text-white"
              onClick={closeLightbox}
            >
              <X className="w-7 h-7" />
            </button>

            <button
              className="absolute left-4 md:left-8 text-white/40 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <motion.img
              key={lightboxIndex}
              src={visiblePhotos[lightboxIndex].src}
              alt={visiblePhotos[lightboxIndex].alt}
              className="max-h-[88vh] max-w-[88vw] object-contain"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute right-4 md:right-8 text-white/40 hover:text-white"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs text-white/30 tracking-widest">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(visiblePhotos.length).padStart(2, '0')}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
