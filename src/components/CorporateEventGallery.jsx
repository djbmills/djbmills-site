import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const inquiryMailto =
  'mailto:bookings@djbmills.com?subject=Event%20Inquiry&body=Hi%20B.Mills,%0D%0A%0D%0AEvent%20date:%0D%0ALocation:%0D%0AType%20of%20event:%0D%0AGuest%20count:%0D%0A%0D%0ALooking%20forward%20to%20connecting.';

const photos = [
  {
    src: "/images/bmills-corporate-7.png",
    alt: "Premier corporate event DJ at formal gala New York City",
    caption: "Carlos Delgado and Carlos Beltran speak at fundraiser event in Puerto Rico",
  },
  {
    src: "/images/bmills-corporate-8.jpg",
    alt: "DJ B.MILLS performing at client corporate event NYC",
    caption: "Client event atmosphere",
    credit: true,
  },
  {
    src: "/images/bmills-corporate-9.jpg",
    alt: "B.MILLS with guests at corporate cocktail reception",
    caption: "Corporate cocktail reception group shot",
  },
];

export default function CorporateEventGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i === 0 ? photos.length - 1 : i - 1));
  const next = () => setLightboxIndex((i) => (i === photos.length - 1 ? 0 : i + 1));

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-end">
          <a
            href={inquiryMailto}
            className="pointer-events-auto font-body text-xs tracking-[0.2em] uppercase bg-foreground text-background px-4 py-2 hover:bg-foreground/80 transition-colors duration-300"
          >
            Inquire
          </a>
        </div>
      </div>

      <section
        className="py-20 md:py-32 px-6 md:px-12 border-b border-border"
        style={{ backgroundColor: '#f3eee2' }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-10 overflow-hidden">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground"
              >
                05
              </motion.span>

              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                className="flex-1 h-px bg-border origin-left"
              />

              <motion.span
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
                className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground"
              >
                In the Room
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
                className="font-heading text-5xl md:text-6xl font-light text-foreground mb-4 leading-tight"
              >
                The Work
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.35 }}
              className="font-body text-sm text-muted-foreground"
            >
              Moments from corporate events across New York and beyond.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-5 gap-3 md:gap-4">
            <motion.div
              className="md:col-span-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div
                className="group relative overflow-hidden cursor-pointer w-full h-[300px] md:h-[520px]"
                onClick={() => openLightbox(0)}
              >
                <img
                  src={photos[0].src}
                  alt={photos[0].alt}
                  className="w-full h-full object-cover object-right transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500" />
              </div>

              <p className="font-body text-xs text-muted-foreground mt-3 tracking-wide">
                {photos[0].caption}
              </p>
            </motion.div>

            <div className="md:col-span-2 flex flex-col gap-3 md:gap-4">
              {photos.slice(1).map((photo, i) => (
                <motion.div
                  key={i + 1}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: (i + 1) * 0.12 }}
                >
                  <div
                    className="group relative overflow-hidden cursor-pointer w-full h-[200px] md:h-[248px]"
                    onClick={() => openLightbox(i + 1)}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-500 pointer-events-none" />

                    {photo.credit && (
                      <div className="absolute bottom-3 right-3 z-10 pointer-events-none opacity-0 group-hover:opacity-80 transition-opacity duration-300">
                        <p className="font-body text-[10px] md:text-[11px] font-light tracking-[0.08em] uppercase text-white">
                          Photo by{' '}
                          <a
                            href="https://www.instagram.com/larufoto/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline underline-offset-4 pointer-events-auto"
                            onClick={(e) => e.stopPropagation()}
                          >
                            Luis
                          </a>
                        </p>
                      </div>
                    )}
                  </div>

                  <p className="font-body text-xs text-muted-foreground mt-3 tracking-wide">
                    {photo.caption}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <AnimatePresence>
          {lightboxIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
              onClick={closeLightbox}
            >
              <button
                className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
                onClick={closeLightbox}
              >
                <X className="w-7 h-7" />
              </button>

              <button
                className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                src={photos[lightboxIndex].src}
                alt={photos[lightboxIndex].alt}
                className="max-h-[88vh] max-w-[88vw] object-contain"
                onClick={(e) => e.stopPropagation()}
              />

              <button
                className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors z-10"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
              >
                <ChevronRight className="w-8 h-8" />
              </button>

              <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs text-white/30 tracking-widest">
                {String(lightboxIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
}
