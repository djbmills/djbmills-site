import SEOHeading from '../components/SEOHeading';
import Hero from '../components/Hero';
import PastClients from '../components/PastClients'; // Now Section 01
import Approach from '../components/Approach';     // Now Section 02
import About from '../components/About';           // Now Section 03
import Mixtapes from '../components/Mixtapes';       // Now Section 04
import PhotoGallery from '../components/PhotoGallery'; // Now Section 05
import Services from '../components/Services';
import Philosophy from '../components/Philosophy';
import ClientFeedback from '../components/ClientFeedback';
import CareerHighlights from '../components/CareerHighlights';
import InquiryFooter from '../components/InquiryFooter';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEOHeading
        title="B.MILLS | Luxury Event DJ NYC | Brand Activations & Wedding Afterparties"
        description="B.MILLS is a New York City luxury event DJ specializing in curated sound design for corporate galas, brand activations, and fashion-forward wedding afterparties."
        image="/images/bmills-hero.jpg"
        url="https://djbmills.com/"
      />
      
      {/* ── UNNUMBERED ── */}
      <Hero />

      {/* ── SECTION 01 ── */}
      <PastClients />

      {/* ── SECTION 02 ── */}
      <Approach />
      
      {/* ── SECTION 03 ── */}
      <About />

      {/* ── SECTION 04 ── */}
      <Mixtapes />

      {/* ── SECTION 05 ── */}
      <PhotoGallery />
      
      {/* ── REMAINING SECTIONS ── */}
      <Services />
      <Philosophy />
      <ClientFeedback />
      <CareerHighlights />

      <InquiryFooter
        headline="Let's shape the night."
        body="Share a few details and we can build a curated sonic identity for your event, your space, and your audience."
        footerText={`Specializing in luxury corporate events, brand activations, and curated wedding afterparties across New York City, 
the Hamptons, New Jersey, and Connecticut.`}
      />

      {/* Hidden SEO Content */}
      <div aria-hidden="true" className="opacity-0 h-0 overflow-hidden pointer-events-none">
        <p>B.MILLS is a New York City-based DJ specializing in luxury corporate events...</p>
      </div>
    </div>
  );
}
