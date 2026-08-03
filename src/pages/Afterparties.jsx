import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import InquiryFooter from "../components/InquiryFooter";

// Media Assets & SEO Metadata Array
const AFTERPARTY_MEDIA = [
  {
    id: "guastavinos",
    type: "video",
    src: "/videos/nyc-luxury-afterparty-dj-guastavinos-bmills.mp4",
    location: "Guastavino's • New York City",
    title: "High Energy Lower Level Afterparty",
    description: "Intimate lower level setup with low ceilings that gave the room a raw, underground club vibe.",
    alt: "Crowd jumping and celebrating on the lower level at Guastavino's NYC afterparty with DJ B.MILLS",
  },
  {
    id: "plaza-hotel",
    type: "video",
    src: "/videos/nyc-vip-afterparty-dj-plaza-hotel-bmills.mp4",
    location: "The Plaza Hotel • New York City",
    title: "Ultra Luxury VIP Celebration",
    description: "Exclusive late night sound programming inside one of NYC's most legendary landmarks.",
    alt: "VIP high energy afterparty dance floor at The Plaza Hotel NYC with DJ B.MILLS",
  },
  {
    id: "fresh-meadows",
    type: "video",
    src: "/videos/long-island-country-club-afterparty-dj-fresh-meadows-bmills.mp4",
    location: "Fresh Meadows Country Club • Long Island",
    title: "North Shore Country Club Energy",
    description: "Packed floor and relentless momentum keeping the celebration running deep into the night.",
    alt: "High energy crowd dancing at Fresh Meadows Country Club Long Island afterparty with DJ B.MILLS",
  },
  {
    id: "glen-oaks",
    type: "image",
    src: "/images/long-island-afterparty-dj-glen-oaks-club-bmills.jpg",
    location: "Glen Oaks Club • Long Island",
    title: "The Finale Singalong",
    description: "During the last song of the night, everyone organically locked arms in a huge circle while the couple danced together in the center.",
    alt: "Guests arm in arm in a circle singing the last song at Glen Oaks Club afterparty with DJ B.MILLS",
  },
  {
    id: "oceanbleu",
    type: "image",
    src: "/images/hamptons-afterparty-dj-oceanbleu-westhampton-bmills.jpg",
    location: "Oceanbleu • Westhampton, NY",
    title: "Hamptons Oceanfront Peak Vibe",
    description: "Unfiltered, raw nightlife atmosphere bringing full club level energy right to the beach.",
    alt: "Peak afterparty dance floor energy at Oceanbleu Westhampton Hamptons with DJ B.MILLS",
  },
];

// Interactive Video Component with Tap-to-Unmute
function VideoCard({ item }) {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[9/16] shadow-2xl">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted={isMuted}
        playsInline
        aria-label={item.alt}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      >
        <source src={item.src} type="video/mp4" />
      </video>

      {/* Tap to Unmute Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all active:scale-95"
        aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
        title={isMuted ? "Tap for Sound" : "Mute Sound"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-amber-400" />}
      </button>

      {/* Card Info Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent p-6 flex flex-col justify-end pointer-events-none">
        <span className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-1">{item.location}</span>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
        <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

// Static Photo Card Component
function ImageCard({ item }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[9/16] shadow-2xl">
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      
      {/* Card Info Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent p-6 flex flex-col justify-end pointer-events-none">
        <span className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-1">{item.location}</span>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
        <p className="text-xs text-neutral-300 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

// Main Afterparties Page Component
export default function Afterparties() {
  return (
    <div className="bg-black text-white min-h-screen">
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="mb-12 text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-4">
            The <span className="text-amber-400">Afterparty</span> Experience
          </h2>
          <p className="text-neutral-400 text-sm md:text-base">
            From iconic NYC landmarks to luxury Hamptons estates, capturing raw late night moments and high energy crowds.
          </p>
        </div>

        {/* 5 Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {AFTERPARTY_MEDIA.map((item) =>
            item.type === "video" ? (
              <VideoCard key={item.id} item={item} />
            ) : (
              <ImageCard key={item.id} item={item} />
            )
          )}
        </div>
      </section>

      {/* Call To Action & Inquiry Footer Section */}
      <section className="border-t border-white/10 py-16 bg-neutral-950 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-4xl font-bold uppercase mb-3">
            Ready to Take Your <span className="text-amber-400">Afterparty</span> to the Next Level?
          </h3>
          <p className="text-neutral-400 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Available for high energy late night sets, private celebrations, and VIP afterparties across New York City, Long Island, The Hamptons, Connecticut, and New Jersey.
          </p>
          
          {/* Reusable Inquiry Form Component */}
          <InquiryFooter />
          
          {/* SEO Micro-Text Footer Line */}
          <footer 
            className="mt-12 text-xs text-neutral-600 space-y-1"
            aria-label="Luxury high-energy afterparty DJ services in NYC, Long Island, Hamptons, CT, and NJ"
          >
            <p>DJ B.MILLS • Premier Late Night & Afterparty Sound Programming</p>
            <p>Guastavino's • The Plaza Hotel • Fresh Meadows CC • Glen Oaks Club • Oceanbleu Westhampton</p>
          </footer>
        </div>
      </section>
    </div>
  );
}
