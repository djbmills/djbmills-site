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
  title="B.MILLS | NYC Event DJ & Music Direction"
  description="B.MILLS provides live event DJ sets and music direction for luxury brand events, corporate gatherings, product launches, cultural moments, private rooms, and afterparties in New York and beyond."
  keywords="NYC event DJ, event DJ NYC, luxury event DJ NYC, music direction NYC, luxury brand event DJ, corporate event DJ NYC, brand activation DJ NYC, product launch DJ NYC, private event DJ NYC, afterparty DJ NYC, B.MILLS DJ"
  image="https://djbmills.com/images/bmills-hero.jpg"
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
        footerText={`Specializing in luxury corporate events, brand activations, and curated afterparties across New York City, 
the Hamptons, New Jersey, and Connecticut.`}
  />
    </div>
  );
}
