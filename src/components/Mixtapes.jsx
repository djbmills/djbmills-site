import { motion } from 'framer-motion';
import { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react';

const mixtapes = [
{
  title: 'All For The Love',
  genre: 'R&B Mixtape',
  duration: '2025',
  image: '/images/all-for-the-love.png',
  audioUrl: 'https://mcdn.podbean.com/mf/web/2ix9nrz5dvqn4pjy/All_For_The_Love770bt.mp3'
},
{
  title: 'The Afterparty',
  genre: 'House/Dance Mixtape',
  duration: '2026',
  image: '/images/afterparty.jpg',
  audioUrl: 'https://mcdn.podbean.com/mf/web/hh8xury4eea68v3a/theAfterparty.mp3'
},
{
  title: 'Summertime Smooth',
  genre: 'Poolside House',
  duration: 'Mix Vol. 03 · 2025',
  image: '/images/summertime-smooth.png',
  audioUrl: 'https://mcdn.podbean.com/mf/web/yeipune68mtsf6w2/Summertime_Smooth_36zr5x.mp3'
},
{
  title: 'Throwback Vibes',
  genre: 'Classic Hip Hop + R&B',
  duration: 'Nostalgia',
  image: '/images/throwback-vibes.png',
  audioUrl: 'https://mcdn.podbean.com/mf/web/piu3pek59sg2h5nj/Throwbacks_Vibes8ip11.mp3'
}];


export default function Mixtapes() {
  const [playing, setPlaying] = useState(null);
  const audioRef = useRef(null);

const handlePlay = (tape) => {
  if (!tape.audioUrl) return;
  if (playing === tape.title) {
    audioRef.current.pause();
    setPlaying(null);
  } else {
    if (audioRef.current) audioRef.current.pause();
    audioRef.current = new Audio(tape.audioUrl);
    audioRef.current.play();
    audioRef.current.onended = () => setPlaying(null);
    setPlaying(tape.title);
  }
};

  return (
    <section id="mixtapes" className="py-24 md:py-36 px-6 md:px-12 bg-foreground">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-16 overflow-hidden">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-body text-xs tracking-[0.4em] uppercase text-background/30">03</motion.span>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
            className="flex-1 h-px bg-background/10 origin-left" />
          <motion.span
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 }}
            className="font-body text-xs tracking-[0.3em] uppercase text-background/30">Listen</motion.span>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16">
          <h2 className="font-heading text-4xl md:text-6xl font-light text-background">Mixtape Mode</h2>
          <p className="font-body text-sm text-background/50 mt-4">Each mix is a different room.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {mixtapes.map((tape, i) =>
          <motion.div
            key={tape.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group cursor-pointer"
            onClick={() => handlePlay(tape)}>
            
              <div className="relative aspect-square overflow-hidden mb-6">
                <img
                src={tape.image}
                alt={tape.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full border-2 border-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                    {playing === tape.title ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
                  </div>
                </div>
              </div>
              <h3 className="font-heading text-2xl font-light text-background mb-1">
                {tape.title}
              </h3>
              <div className="flex items-center gap-3">
                <p className="font-body text-xs tracking-wider text-background/40">
                  {tape.genre}
                </p>
                
                

              
              </div>
            </motion.div>
          )}
        </motion.div>


      </div>
    </section>);

}
