import SEOHeading from '../components/SEOHeading';
import Navbar from '../components/Navbar';
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
        title="B.MILLS | Premier Event DJ NYC for Corporate Events, Brand Experiences & Private Celebrations"
        description="B.MILLS is a New York City DJ specializing in luxury corporate events, brand experiences, and high-end private events across NYC, the Hamptons, and Connecticut."
        keywords="luxury corporate event DJ NYC, brand experience DJ, high end event DJ New York, corporate event entertainment NYC, experiential marketing DJ"
        image="/images/bmills-about-hero.png"
        url="https://djbmills.com/"
      />
      <Navbar />
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
        body="Share a few details and we can build the right sound for your event, your space, and your audience."
        footerText={`Serving luxury corporate events, brand activations, and private clients across New York City,
the Hamptons, New Jersey, and Connecticut.`}
      />
      <div aria-hidden="true" style={{ opacity: 0, height: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <p>B.MILLS is a New York City-based DJ specializing in luxury corporate events, brand activations, and high-end private celebrations. He works with brands, agencies, and planners across NYC, the Hamptons, and Connecticut to curate music for elevated experiences.</p>
        <p>Frequently booked for corporate galas, fashion events, experiential marketing activations, and private brand dinners, B.MILLS delivers a refined open-format sound tailored to sophisticated audiences.</p>
      </div>
    </div>
  );
}
