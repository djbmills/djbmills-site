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
        // Updated text to be consistent with the home page tone
        body="B.MILLS is currently booking for late 2026/2027. Provide your event details below to confirm availability and receive a proposal for a curated soundtrack tailored to your audience."
      />
    </main>
  );
}
