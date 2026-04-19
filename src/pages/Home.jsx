import SEOHeading from '../components/SEOHeading';
import Hero from '../components/Hero';
import Approach from '../components/Approach';
import About from '../components/About';
import Services from '../components/Services';
import Philosophy from '../components/Philosophy';
import Mixtapes from '../components/Mixtapes';
import PhotoGallery from '../components/PhotoGallery';
import PastClients from '../components/PastClients';
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
      <Hero />
      <Approach />
      <About />
      <Services />
      <Philosophy />
      <Mixtapes />
      <PastClients />
      <PhotoGallery />
      <ClientFeedback />
      <CareerHighlights />
      <InquiryFooter
        headline="Let's shape the night."
        body="Share a few details and we can build a curated sonic identity for your event, your space, and your audience."
        footerText={`Specializing in luxury corporate events, brand activations, and curated wedding afterparties across New York City, 
the Hamptons, New Jersey, and Connecticut.`}
      />

      {/* Hidden SEO Content - Optimized for Curation & Taste-first search */}
      <div aria-hidden="true" style={{ opacity: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <p>
          B.MILLS is a New York City-based DJ specializing in luxury corporate events, brand activations, and curated wedding afterparties. 
          By prioritizing sonic identity and minimalist vocal hosting, he works with brands, agencies, and luxury planners across NYC, 
          the Hamptons, and Connecticut to create elevated musical experiences.
        </p>
        <p>
          Frequently booked for high-end corporate galas, fashion brand launches, and private luxury weddings, 
          B.MILLS offers a sophisticated alternative to traditional event entertainment, focusing on musical curation 
          and brand-aligned soundtracks for discerning audiences.
        </p>
        <p>
          Services include full sound design, liability insurance (COI) for all major NYC venues, and professional, 
          understated hosting for brand-centric events.
        </p>
      </div>
    </div>
  );
}
