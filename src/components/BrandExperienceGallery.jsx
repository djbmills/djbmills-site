import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  { src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/d6b187ed5_IMG_5774.jpg', alt: 'DJ B.MILLS performing at luxury brand event New York City', caption: 'Brand event environment' },
  { src: 'https://media.base44.com/images/public/69c5d6df4095d84ce47a4bc2/28ab7838f_IMG_7476.jpg', alt: 'Creative direction brand activation DJ New York', caption: 'Creative direction setting' },
];

export default function BrandExperienceGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => i === 0 ? photos.length - 1 : i - 1);
  const next = () => setLightboxIndex((i) => i === photos.length - 1 ? 0 : i + 1);

  return (
    <section className="py-20 md:py-32 px-6 md:px-12 border-b border-border" style={{ backgroundColor: '#f3eee2' }}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="font-heading text-3xl font-light text-foreground mb-2">In the space</h3>
          <p className="font-body text-sm text-muted-foreground">Select environments from brand events across New York and beyond.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {photos.map((photo, i) => (
            <div key={i}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
                onClick={() => openLightbox(i)}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500" />
              </motion.div>
              {photo.caption && (
                <p className="font-body text-xs text-muted-foreground mt-3">{photo.caption}</p>
              )}
            </div>
          ))}
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
              onClick={(e) => { e.stopPropagation(); prev(); }}
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
              onClick={(e) => { e.stopPropagation(); next(); }}
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
  );
}