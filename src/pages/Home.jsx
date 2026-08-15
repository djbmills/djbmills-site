import {
  lazy,
  Suspense,
  useEffect,
  useRef,
  useState,
} from 'react';

import SEOHeading from '../components/SEOHeading';
import Hero from '../components/Hero';
import PastClients from '../components/PastClients';
import Approach from '../components/Approach';
import About from '../components/About';
import Mixtapes from '../components/Mixtapes';
import PhotoGallery from '../components/PhotoGallery';
import Services from '../components/Services';
import Philosophy from '../components/Philosophy';
import CareerHighlights from '../components/CareerHighlights';

const ClientFeedback = lazy(
  () => import('../components/ClientFeedback')
);

const InquiryFooter = lazy(
  () => import('../components/InquiryFooter')
);

function DeferredClientFeedback() {
  const sectionRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '1200px 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      id="feedback"
      ref={sectionRef}
      className={
        shouldLoad
          ? ''
          : 'min-h-[760px] bg-foreground'
      }
    >
      {shouldLoad && (
        <Suspense fallback={null}>
          <ClientFeedback sectionId={undefined} />
        </Suspense>
      )}
    </div>
  );
}

function DeferredInquiryFooter(props) {
  const sectionRef = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (shouldLoad) return;

    if (!('IntersectionObserver' in window)) {
      setShouldLoad(true);
      return;
    }

    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '1800px 0px',
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={sectionRef}
      className="bg-[#ebe6d9]"
    >
      {shouldLoad ? (
        <Suspense
          fallback={
            <div
              className="min-h-[1200px] md:min-h-[900px]"
              aria-hidden="true"
            />
          }
        >
          <InquiryFooter {...props} />
        </Suspense>
      ) : (
        <div
          className="min-h-[1200px] md:min-h-[900px]"
          aria-hidden="true"
        />
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
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

      <DeferredClientFeedback />

      <CareerHighlights />

      <DeferredInquiryFooter
        headline="Let's shape the night."
        body="Share a few details and we can build a curated audio identity for your event, your space, and your audience."
        footerText={`Specializing in luxury corporate events, brand activations, and curated afterparties across New York City, 
the Hamptons, New Jersey, and Connecticut.`}
      />
    </main>
  );
}
