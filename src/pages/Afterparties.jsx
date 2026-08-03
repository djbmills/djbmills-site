import { useState, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import InquiryFooter from "../components/InquiryFooter";

// Media Assets Array (6 Total Items: 3x2 Grid with Concourse Club centered on bottom row)
const AFTERPARTY_MEDIA = [
  // Top Row
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
  // Bottom Row
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
    id: "concourse-club",
    type: "video",
    src: "/videos/nj-concourse-club-afterparty-dj-bmills.mp4",
    location: "Concourse Club • New Jersey",
    title: "Rooftop Lounge Nightlife",
    description: "High energy late night sound programming keeping the floor packed deep into the night.",
    alt: "High energy afterparty crowd dancing at Concourse Club New Jersey with DJ B.MILLS",
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

      <button
        onClick={toggleMute}
        className="absolute top-4 right-4 z-20 bg-black/60 hover:bg-black/90 text-white p-3 rounded-full backdrop-blur-md border border-white/20 transition-all active:scale-95"
        aria-label={isMuted ? "Unmute video sound" : "Mute video sound"}
        title={isMuted ? "Tap for Sound" : "Mute Sound"}
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} className="text-amber-400" />}
      </button>

      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent p-6 flex flex-col justify-end pointer-events-none">
        <span className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-1">{item.location}</span>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
        <p className="text-xs text-neutral-300 line-clamp-3 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

function ImageCard({ item }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 aspect-[9/16] shadow-2xl">
      <img
        src={item.src}
        alt={item.alt}
        loading="lazy"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
      />
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent p-6 flex flex-col justify-end pointer-events-none">
        <span className="text-amber-400 text-xs font-mono uppercase tracking-widest mb-1">{item.location}</span>
        <h3 className="text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
        <p className="text-xs text-neutral-300 leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}

export default function Afterparties() {
  return (
    <div className="bg-black text-white min-h-screen pt-28">
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="mb-14 text-center max-w-3xl mx-auto">
          <span className="font-body text-xs tracking-[0.3em] uppercase text-amber-400 block mb-3">
            Sound Programming
          </span>
          <h1 className="font-heading text-4xl md:text-6xl font-light tracking-wide uppercase mb-4">
            The <span className="text-amber-400 font-normal">Afterparty</span> Experience
          </h1>
          <p className="text-neutral-400 text-sm md:text-base font-body tracking-wide max-w-xl mx-auto">
            From iconic NYC landmarks to luxury Hamptons estates, capturing raw late night moments and high energy crowds.
          </p>
        </div>

        {/* 3x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AFTERPARTY_MEDIA.map((item) =>
            item.type === "video" ? (
              <VideoCard key={item.id} item={item} />
            ) : (
              <ImageCard key={item.id} item={item} />
            )
          )}
        </div>
      </section>

      {/* Inquiry Footer Section */}
      <section className="border-t border-white/10 py-20 bg-neutral-950 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-heading text-2xl md:text-4xl font-light uppercase tracking-wide mb-3">
            Ready to Take Your <span className="text-amber-400">Afterparty</span> to the Next Level?
          </h3>
          <p className="text-neutral-400 text-sm md:text-base mb-10 max-w-xl mx-auto font-body">
            Available for high energy late night sets, private celebrations, and VIP afterparties across New York City, Long Island, The Hamptons, Connecticut, and New Jersey.
          </p>
          
          <InquiryFooter />
          
          <footer 
            className="mt-12 text-xs text-neutral-600 space-y-1 font-body"
            aria-label="Luxury high-energy afterparty DJ services in NYC, Long Island, Hamptons, CT, and NJ"
          >
            <p>DJ B.MILLS • Premier Late Night & Afterparty Sound Programming</p>
            <p>Guastavino's • The Plaza Hotel • Fresh Meadows CC • Concourse Club • Glen Oaks Club • Oceanbleu Westhampton</p>
          </footer>
        </div>
      </section>
    </div>
  );
}
