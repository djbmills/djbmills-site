import SEOHeading from '../components/SEOHeading';
import InquiryFooter from '../components/InquiryFooter';

export default function Availability() {
  return (
    <main className="pt-24 min-h-screen bg-[#ebe6d9]">
      <SEOHeading
        title="Check Availability | B.MILLS NYC Event DJ"
        description="Check B.MILLS availability for corporate events, brand activations, private events, and afterparties in New York City and beyond."
        keywords="B.MILLS availability, book B.MILLS DJ, NYC event DJ availability, corporate event DJ inquiry, brand activation DJ booking, afterparty DJ NYC"
        url="https://djbmills.com/availability"
      />

      <h1 className="sr-only">
        Check Availability for B.MILLS Event DJ and Music Direction
      </h1>

      <InquiryFooter
        headline="Secure the Date."
        body="Please provide your event details below to confirm availability and receive a proposal for a curated soundtrack tailored to your audience."
      />
    </main>
  );
}
