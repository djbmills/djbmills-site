import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: "/images/bmills-event-1.jpg", alt: "B.MILLS DJ performing at luxury corporate event in New York City" },
  { src: "/images/bmills-event-2.jpg", alt: "Upscale NYC event with B.MILLS DJing for corporate audience" },
  { src: "/images/bmills-event-3.png", alt: "Crowd dancing during high-end private event with B.MILLS DJ" },
  { src: "/images/bmills-event-4.jpg", alt: "B.MILLS DJ set at luxury brand activation in New York" },
  { src: "/images/bmills-event-5.jpg", alt: "Elegant corporate gala atmosphere with live DJ performance by B.MILLS" },
  { src: "/images/bmills-event-6.jpg", alt: "B.MILLS DJ creating atmosphere at upscale Manhattan event" },
  { src: "/images/bmills-event-7.jpg", alt: "Luxury event crowd engagement with B.MILLS DJ in New York City" },
  { src: "/images/bmills-event-7.png", alt: "Guests enjoying music during curated DJ set by B.MILLS" },
  { src: "/images/bmills-event-8.jpg", alt: "B.MILLS DJ performing at high-end nightlife venue in NYC" },
  { src: "/images/bmills-event-9.jpg", alt: "Packed dance floor at luxury private celebration with B.MILLS DJ" },
  { src: "/images/bmills-event-10.jpg", alt: "B.MILLS DJ at premium corporate function in New York City" },
  { src: "/images/bmills-event-11.jpg", alt: "Refined DJ setup for luxury brand event by B.MILLS" },
  { src: "/images/bmills-event-12.jpg", alt: "B.MILLS DJ performing at large-scale gala event in NYC venue" },
  { src: "/images/bmills-event-13.jpg", alt: "Corporate event entertainment with B.MILLS DJ in upscale setting" },
  { src: "/images/bmills-event-14.jpg", alt: "B.MILLS DJ delivering curated music experience at luxury dinner event" },
  { src: "/images/bmills-event-15.jpg", alt: "High-energy dance moment at corporate event with B.MILLS DJ" },
  { src: "/images/bmills-event-16.jpg", alt: "B.MILLS DJ performing at exclusive New York City venue" },
  { src: "/images/bmills-event-17.jpg", alt: "Guests dancing at luxury brand event with B.MILLS DJ" },
  { src: "/images/bmills-event-mobile-1.png", alt: "Mobile view of B.MILLS DJ performance at upscale NYC event", mobileOnly: true }
];


export default function PhotoGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const creditIndices = [2, 8, 12, 10];

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => i === 0 ? photos.length - 1 : i - 1);
  const next = () => setLightboxIndex((i) => i === photos.length - 1 ? 0 : i + 1);
  const shouldShowCredit = (i) => creditIndices.includes(i);

  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
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
  }, [lightboxIndex]);

  return (
    <section id="events" className="pt-16 md:pt-24 pb-6 md:pb-8 px-6 md:px-12 border-t border-border">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-12 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-xs tracking-[0.4em] uppercase text-muted-foreground">05</motion.span>
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
            className="font-body text-xs tracking-[0.3em] uppercase text-muted-foreground">Gallery</motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8">
          <h2 className="font-heading text-4xl md:text-6xl font-light">Inside the Room</h2>
        </motion.div>

        {/* Masonry Grid */}
         <div className="columns-2 md:columns-3 lg:columns-4 gap-3">
           {photos.filter(photo => !photo.mobileOnly || window.innerWidth < 768).map((photo, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
            className="break-inside-avoid group relative overflow-hidden cursor-pointer mb-3"
            onClick={() => openLightbox(i)}>

              <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105" />

              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />

              {shouldShowCredit(i) && (
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
                  <p className="font-body text-xs font-light text-white tracking-wide">
                    Photo by{' '}
                    <a
                      href="https://instagram.com/vnina"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:opacity-80 transition-opacity"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Nina
                    </a>
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}>
          
            {/* Close */}
            <button
            aria-label="Close image gallery"
            className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors z-10"
            onClick={closeLightbox}>
              <X className="w-7 h-7" />
            </button>

            {/* Prev */}
            <button
            aria-label="Previous image"
            className="absolute left-4 md:left-8 text-white/40 hover:text-white transition-colors z-10"
            onClick={(e) => {e.stopPropagation();prev();}}>
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.img
            key={lightboxIndex}
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            src={photos[lightboxIndex].src}
            alt={photos[lightboxIndex].alt}
            className="max-h-[88vh] max-w-[88vw] object-contain"
            onClick={(e) => e.stopPropagation()} />
          

            {/* Next */}
            <button
            aria-label="Next image"
            className="absolute right-4 md:right-8 text-white/40 hover:text-white transition-colors z-10"
            onClick={(e) => {e.stopPropagation();next();}}>
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Counter */}
            <p className="absolute bottom-6 left-1/2 -translate-x-1/2 font-body text-xs text-white/30 tracking-widest">
              {String(lightboxIndex + 1).padStart(2, '0')} / {String(photos.length).padStart(2, '0')}
            </p>
          </motion.div>
        }
      </AnimatePresence>
    </section>);

}
