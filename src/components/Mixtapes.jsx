import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

const mixtapes = [
  // --- ROW 1: THE SUMMERTIME SERIES ---
  {
    title: 'Summertime Smooth 1',
    genre: 'Classic Hip Hop · R&B',
    description: 'Golden era grooves and essential warm-weather hip hop.',
    image: '/images/bmills-summertime-smooth-1-hip-hop-mixtape.png',
    altText: 'B.MILLS — Classic hip hop and R&B music direction for luxury poolside lounges and high-end summer brand activations in NYC',
    audioUrl: 'https://mcdn.podbean.com/mf/web/3krcbtqx9iskmwrh/Summertime_Smooth99djd.mp3'
  },
  {
    title: 'Summertime Smooth 2',
    genre: 'Poolside House',
    description: 'Uplifting deep house curated for open-air afternoons.',
    image: '/images/bmills-summertime-smooth-2-poolside-house-mixtape.png',
    altText: 'B.MILLS — Deep house sound formatting for premium seasonal brand moments, rooftop galas, and outdoor corporate footprints',
    audioUrl: 'https://mcdn.podbean.com/mf/web/nzfnp7r4wjj97ndi/Summertime_Smooth_House_Edition_b5mmi.mp3'
  },
  {
    title: 'Summertime Smooth 3',
    genre: 'Poolside House',
    description: 'Designed for open air activations and cocktail hours.',
    image: '/images/summertime-smooth.png',
    altText: 'B.MILLS — Open-air poolside house sound formatting for premium seasonal brand activations and outdoor corporate event footprints',
    audioUrl: 'https://mcdn.podbean.com/mf/web/yeipune68mtsf6w2/Summertime_Smooth_36zr5x.mp3'
  },
  {
    title: 'Summertime Smooth 4',
    genre: 'Poolside House',
    description: 'Modern beach club sound design and sun-drenched house.',
    image: '/images/bmills-summertime-smooth-4-poolside-house-mixtape.png',
    altText: 'B.MILLS — Luxury resort and beach club house music curation for high-fashion summer events and private luxury estates',
    audioUrl: 'https://mcdn.podbean.com/mf/web/gkr5zdjqejhajfzj/dj-bmills-Summertime-Smooth-4.mp3'
  },

  // --- ROW 2: GENRE & VIBE DIVERSITY ---
  {
    title: 'All For The Love',
    genre: 'R&B Mixtape',
    description: 'Sophisticated rhythm and blues mixed with deep cuts.',
    image: '/images/all-for-the-love.png',
    altText: 'B.MILLS — Sophisticated rhythm and blues sound design for luxury private rooms and upscale client gatherings in Manhattan',
    audioUrl: 'https://mcdn.podbean.com/mf/web/2ix9nrz5dvqn4pjy/All_For_The_Love770bt.mp3'
  },
  {
    title: '1990 Something',
    genre: '90s Dance · Nostalgia',
    description: 'Upbeat 90s dance floor classics with steady energy.',
    image: '/images/bmills-1990-something-90s-dance-mixtape.png',
    altText: 'B.MILLS — 90s dance and nostalgia music direction for corporate celebrations, media galas, and exclusive client parties',
    audioUrl: 'https://mcdn.podbean.com/mf/web/ktk4bhd9guaah73t/Can_t_Stop_The_90_s_short_9smfg.mp3'
  },
  {
    title: 'The Afterparty',
    genre: 'House / Dance Mixtape',
    description: 'A late night groove built for dance floors.',
    image: '/images/afterparty.jpg',
    altText: 'B.MILLS — Deep house and dance music curation for premium fashion brand afterparties and high-end experiential footprints',
    audioUrl: 'https://mcdn.podbean.com/mf/web/hh8xury4eea68v3a/theAfterparty.mp3'
  },
  {
    title: 'Throwback Vibes',
    genre: 'Classic Hip Hop · R&B',
    description: '90s and 2000s classics. Gold era curation.',
    image: '/images/throwback-vibes.png',
    altText: 'B.MILLS — Classic hip hop and R&B music direction for cultural brand moments, media networking events, and premium private rooms',
    audioUrl: 'https://mcdn.podbean.com/mf/web/piu3pek59sg2h5nj/Throwbacks_Vibes8ip11.mp3'
  }
];

export default function Mixtapes() {
  const [playing, setPlaying] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'auto';
    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = '';
      audioRef.current = null;
    };
  }, []);

  const handlePlay = async (tape) => {
    if (!tape.audioUrl || !audioRef.current) return;
    const audio = audioRef.current;

    if (playing === tape.title) {
      audio.pause();
      setPlaying(null);
      return;
    }

    try {
      if (audio.src !== tape.audioUrl) {
        audio.pause();
        audio.src = tape.audioUrl;
        audio.load();
      }
      await audio.play();
      audio.onended = () => setPlaying(null);
      setPlaying(tape.title);
    } catch (error) {
      console.error('Audio playback failed:', error);
      setPlaying(null);
    }
  };

  return (
    <section id="mixtapes" className="py-24 md:py-36 px-6 md:px-12 bg-foreground">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Detail Header */}
        <div className="flex items-center gap-4 mb-16 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-background/30"
          >
            04
          </motion.span>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="flex-1 h-px bg-background/10 origin-left"
          />

          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-background/30"
          >
            Listen
          </motion.span>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="font-heading text-4xl md:text-6xl font-light text-background italic">
            Mixtape Mode
          </h2>
          <p className="font-body text-sm text-background/50 mt-4 tracking-widest uppercase">
            Each mix is a different room.
          </p>
        </motion.div>

        {/* 8-Card Responsive Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8"
        >
          {mixtapes.map((tape, i) => (
            <motion.div
              key={tape.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer"
              onClick={() => handlePlay(tape)}
            >
              <div className="relative aspect-square overflow-hidden mb-6">
                <img
                  src={tape.image}
                  alt={tape.altText}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    {playing === tape.title ? (
                      <Pause className="w-6 h-6 text-white" />
                    ) : (
                      <Play className="w-6 h-6 text-white ml-1" />
                    )}
                  </div>
                </div>
              </div>

              <h3 className="font-heading text-2xl font-light text-background mb-1">
                {tape.title}
              </h3>

              <div className="space-y-3">
                <p className="font-body text-[10px] tracking-widest uppercase text-background/40">
                  {tape.genre}
                </p>
                <p className="font-body text-[11px] leading-relaxed text-background/60 pt-2 border-t border-background/10">
                  {tape.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
