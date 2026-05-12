import { useEffect } from 'react';
import InquiryFooter from '../components/InquiryFooter';

export default function Availability() {
  useEffect(() => {
    document.title = "Check Availability | B.MILLS";
    window.scrollTo(0, 0); 
  }, []);

  return (
    <main className="pt-24 min-h-screen bg-[#ebe6d9]"> 
      <InquiryFooter 
        headline="Secure the Date."
        // Dates removed here to prevent repetition with the badge above
        body="Please provide your event details below to confirm availability and receive a proposal for a curated soundtrack tailored to your audience."
      />
    </main>
  );
}
