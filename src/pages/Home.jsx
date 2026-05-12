import SEOHeading from '../components/SEOHeading';
import Hero from '../components/Hero';
import Approach from '../components/Approach';
import About from '../components/About';
import Services from '../components/Services';
import Philosophy from '../components/Philosophy';
import Mixtapes from '../components/Mixtapes';
import PhotoGallery from '../components/PhotoGallery';
import PastClients from '../components/PastClients'; // This is now a high-priority section
import ClientFeedback from '../components/ClientFeedback';
import CareerHighlights from '../components/CareerHighlights';
import InquiryFooter from '../components/InquiryFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHeading
        title="B.MILLS | Luxury Event DJ NYC | Brand Activations & Wedding Afterparties"
        description="B.MILLS is a New York City luxury event DJ specializing in curated sound design for corporate galas, brand activations, and fashion-forward wedding afterparties. Focused on minimalist hosting and sonic identity."
        keywords="luxury wedding afterparty DJ NYC, corporate event DJ NYC, brand activation DJ New York, luxury event music direction, B.MILLS DJ, fashion week DJ NYC, upscale DJ no mc"
        image="/images/bmills-hero.jpg"
        url="https://djbmills.com/"
      />
      
      {/* 1. THE HOOK: High-impact visuals */}
      <Hero />

      {/* 2. THE AUTHORITY: Move PastClients up here. 
          Seeing brands like LVMH and Disney early builds instant trust. */}
      <PastClients />

      {/* 3. THE VIBE: How you work */}
      <Approach />
      
      {/* 4. THE MAN: The bio and experience */}
      <About />

      {/* 5. THE PROOF: High-end photos of you in action at these venues */}
      <PhotoGallery />
      
      {/* 6. THE LOGIC: Services and Philosophy */}
      <Services />
      <Philosophy />

      {/* 7. THE SOUND: Let them hear the curation */}
      <Mixtapes />
      
      {/* 8. THE VALIDATION: What other high-end clients say */}
      <ClientFeedback />
      
      {/* 9. THE STATS: Career highlights and deep industry roots */}
      <CareerHighlights />

      {/* 10. THE CLOSER: Final pitch and CTA */}
      <InquiryFooter
        headline="Let's shape the night."
        body="Share a few details and we can build a curated sonic identity for your event, your space, and your audience."
        footerText={`Specializing in luxury corporate events, brand activations, and curated wedding afterparties across New York City, 
the Hamptons, New Jersey, and Connecticut.`}
      />

      {/* Hidden SEO Content */}
      <div aria-hidden="true" className="opacity-0 h-0 overflow-hidden pointer-events-none">
        <p>
          B.MILLS is a New York City-based DJ specializing in luxury corporate events, brand activations, and curated wedding afterparties. 
          By prioritizing sonic identity and minimalist vocal hosting, he works with brands, agencies, and luxury planners across NYC, 
          the Hamptons, and Connecticut to create elevated musical experiences.
        </p>
        {/* ... rest of SEO content ... */}
      </div>
    </div>
  );
}
