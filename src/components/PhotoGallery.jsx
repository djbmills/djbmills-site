import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/1b6e92d85_1Hero.jpg', alt: 'Luxury corporate event DJ in New York City — B.MILLS at Hall des Lumières' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/d6b187ed5_IMG_5774.jpg', alt: 'DJ performing at luxury brand event NYC' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/22e0968aa_4crowddancing.png', alt: 'Crowd dancing at upscale corporate event New York City' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/c53afdbf1_DJBMILLS_BrooklynEvent.png', alt: 'B.MILLS DJ set at Brooklyn private event', mobileOnly: true },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/9cad8c8dd_7brandcreditability.jpg', alt: 'B.MILLS DJ brand credibility at high-end corporate event' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/c0f4b7246_9VersatilityCitidaytimeoutdoorshot.jpg', alt: 'Outdoor luxury brand activation DJ New York City' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/d584db372_IMG_3563.jpg', alt: 'B.MILLS performing at luxury private event with confetti' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/ad7e0e5e1_generated_image.png', alt: 'B.MILLS DJ at turntables luxury corporate event NYC' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/d68ebc53a_BoomBoomRoom.jpg', alt: 'B.MILLS at Boom Boom Room luxury venue New York' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/59ff16c78_8uniqueluxurystatueshot.jpg', alt: 'Luxury event venue New York City DJ B.MILLS' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/f3786ed73_2ScrollHook.jpg', alt: 'Exclusive nightlife event DJ at Boom Boom Room NYC' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/378c18618_5HDLsolo.jpg', alt: 'B.MILLS solo DJ set at Hall des Lumières New York' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/b72d09910_10closingbigeventshot.jpg', alt: 'Large-scale luxury gala DJ performance New York City' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/9c47bd51e_6authority.jpg', alt: 'B.MILLS DJ at private luxury dinner event NYC' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/fc0038058_6Brandingauthority.jpg', alt: 'DJ B.MILLS at luxury brand activation event New York' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/bd6c534a2_IMG_7528.jpg', alt: 'B.MILLS nightlife DJ set at upscale NYC venue' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/c97a33d49_guccieventselfie.jpg', alt: 'B.MILLS DJ performing at Gucci luxury fashion event NYC' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/39bf7055c_IMG_3441.jpg', alt: 'Guests dancing at high-end corporate event New York City' },
{ src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/16841ae87_IMG_4446.jpg', alt: 'B.MILLS DJ presentation at Hall des Lumières luxury event NYC' }
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